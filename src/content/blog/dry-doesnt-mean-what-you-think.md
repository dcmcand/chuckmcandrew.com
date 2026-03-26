---
title: "DRY Doesn't Mean What You Think It Means"
date: 2026-03-26
description: "Most developers learn DRY as 'don't duplicate code.' The original principle is about something deeper: every piece of knowledge should have a single source of truth."
tags: ["software-engineering", "principles", "python"]
draft: false
---

If you've been writing code for any amount of time, someone has told you about the DRY principle. Don't Repeat Yourself. It's one of the first things we learn, right alongside "use descriptive variable names" and "write tests." And like a lot of things we learn early, we tend to carry around a simplified version of it without ever going back to check what it actually means.

Most developers understand DRY as: "if you see the same code in two places, extract it into a function." That's reasonable advice. It's also not what DRY is about.

## What we think DRY means

Here's the kind of thing most of us picture when we hear "DRY violation":

```python
def create_user(name, email):
    if not name or len(name) < 2:
        raise ValueError("Invalid name")
    if not email or "@" not in email:
        raise ValueError("Invalid email")
    # ... create the user

def update_user(user_id, name, email):
    if not name or len(name) < 2:
        raise ValueError("Invalid name")
    if not email or "@" not in email:
        raise ValueError("Invalid email")
    # ... update the user
```

The validation logic is duplicated. The natural instinct is to extract it:

```python
def validate_user_input(name, email):
    if not name or len(name) < 2:
        raise ValueError("Invalid name")
    if not email or "@" not in email:
        raise ValueError("Invalid email")

def create_user(name, email):
    validate_user_input(name, email)
    # ... create the user

def update_user(user_id, name, email):
    validate_user_input(name, email)
    # ... update the user
```

This is a good change. But the reason it's good isn't really about DRY. It's about the single responsibility principle. The `create_user` function's job is to create a user. Validating input is a separate concern. By extracting it, each function has one clear job. We'd want to make this extraction even if the validation only appeared in one place, because validation isn't the core responsibility of `create_user`.

This is important to understand because it changes how we reason about code. When we see repeated code through the lens of "extract to avoid repetition," we sometimes force things into shared functions that don't actually belong together. Two blocks of code can look identical today but represent different domain concepts that will evolve independently. Merging them because they happen to look the same right now creates a false coupling that will cause pain later.

So if DRY isn't about extracting repeated code, what is it actually about?

## What DRY actually means

The DRY principle comes from *The Pragmatic Programmer* by Andy Hunt and Dave Thomas, published in 1999. Here's how they defined it:

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."

Read that again. It says "every piece of **knowledge**," not "every piece of **code**." That distinction is the whole point.

Dave Thomas has spoken about this directly. In [an interview on artima.com](https://www.artima.com/intv/dry.html), he said:

> "Most people take DRY to mean you shouldn't duplicate code. That's not its intention. The idea behind DRY is far grander than that."

He went on to clarify that a system's knowledge is far broader than just its code. It includes database schemas, configuration, build systems, even documentation. The principle is about ensuring that for any given piece of knowledge in your system, there is exactly one place that authoritatively defines it.

When you have two representations of the same knowledge, at some point they will fall out of step with each other. It's not a question of if. It's a question of when, and how long it takes someone to notice.

## The anti-pattern

Let me show you what a real DRY violation looks like with a concrete example. Say we're building a payment processing system. We have a registry where payment processors register themselves:

```python
class ProcessorRegistry:
    def __init__(self):
        self._processors = {}

    def register(self, name, processor):
        self._processors[name] = processor

    def get(self, name):
        return self._processors.get(name)

    def list_processors(self):
        return list(self._processors.keys())

registry = ProcessorRegistry()
registry.register("stripe", StripeProcessor())
registry.register("paypal", PayPalProcessor())
registry.register("square", SquareProcessor())
```

The registry is the single source of truth for which payment processors exist. When someone adds a new processor, they register it here and the rest of the system can discover it through `registry.list_processors()`. This is clean. The registry pattern exists specifically so that the set of available processors is defined in exactly one place.

Now imagine someone writes a config validator somewhere else in the codebase:

```python
VALID_PROCESSORS = ["stripe", "paypal", "square"]

def validate_config(config):
    if config.processor not in VALID_PROCESSORS:
        raise ValueError(
            f"Unknown processor '{config.processor}'. "
            f"Must be one of: {VALID_PROCESSORS}"
        )
```

At first glance, this looks fine. It's clear, it gives a helpful error message, and it works. It will pass code review if nobody thinks too hard about it. But this is a real DRY violation. The knowledge of "which processors exist" now lives in two places: the registry and the `VALID_PROCESSORS` list.

Here's how this goes wrong. A few months later, a teammate adds Braintree support. They write the processor class, add comprehensive tests, and register it:

```python
registry.register("braintree", BraintreeProcessor())
```

They did everything right. They followed the established pattern. The tests pass. The code gets merged. And then someone tries to use it in their config:

```yaml
processor: braintree
```

It fails validation. The error says `"Unknown processor 'braintree'. Must be one of: ['stripe', 'paypal', 'square']"`. Your teammate now has to go figure out why a correctly registered processor is being rejected. Nothing in the registry code or the processor code points them toward a hardcoded list in a validator that they had no reason to know about.

## The fix

The fix is simple. The validator should ask the registry what's valid instead of maintaining its own list:

```python
def validate_config(config, registry):
    valid = registry.list_processors()
    if config.processor not in valid:
        raise ValueError(
            f"Unknown processor '{config.processor}'. "
            f"Must be one of: {valid}"
        )
```

Now there's one source of truth. When someone registers a new processor, validation automatically accepts it. No second file to update, no hidden list to discover. The system's knowledge about which processors exist is defined in exactly one place.

This is a small change. In a code review it might look like a nit. But it's the difference between a system that works with you and one that works against you.

## Why this matters

We tend to optimize code for the moment we're writing it. That makes sense. We're solving a problem right now, and we want to ship. But code is read far more often than it is written, and most of the people reading it (including future you) won't have the context you have right now.

Good code follows the principle of least surprise. When a developer reads through a well-designed codebase with a registry pattern, they build a mental model: "processors register themselves, and the system discovers them through the registry." That mental model is correct and useful. It tells them exactly what they need to do to add a new processor: write it and register it.

A hardcoded list somewhere else in the codebase violates that mental model. It's a hidden assumption that contradicts the architecture. The whole point of the registry pattern is that consumers don't need to know the full list of available processors. They interact with the registry, and the registry handles discovery. A hardcoded list breaks that abstraction boundary.

This is what makes these kinds of DRY violations particularly hard to find. If the abstractions in your codebase are well-designed, a developer adding a new processor has no reason to go looking in the validator for a hardcoded list. They'd look at the registry, see how existing processors are registered, follow the same pattern, and expect it to work. When it doesn't, nothing in the error message or the code they've been working with points them toward the actual problem. They did everything right according to the architecture's own rules, and the system punished them for it.

The worst DRY violations are the ones that hide behind good abstractions. They're invisible until they bite someone, and when they do, the debugging path is completely unintuitive.

## Putting it into practice

Next time you're writing code or reviewing a pull request, try asking a different question. Instead of "have I seen this code before?" ask "where does this knowledge live?" If the answer is "in two places," that's worth fixing, even if the two representations don't share a single line of code.

And when you do extract repeated code into a shared function, take a moment to think about why. If it's because the logic represents a distinct responsibility that doesn't belong in the calling function, that's the single responsibility principle at work, and it's a good call. If two blocks of code happen to look the same today but represent different concepts that could evolve independently, leaving them separate might be the right choice.

DRY is about knowledge. Keep your sources of truth singular, and your codebase will be easier to read, easier to extend, and a lot less surprising.
