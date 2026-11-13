---
title: "If Your System Relies on Heroics, You Have a Failed System"
date: 2026-11-14
description: "When the same people keep saving the day, the system is telling you something. Go's error handling offers a better way to listen."
tags: ["leadership", "reliability", "teams", "software-engineering"]
draft: false
---

It is two in the morning and prod just went down. The alert goes to whoever is on call, and the on-call engineer does what everyone on the team has learned to do: they message the one person who actually understands this system. Let's call him Brent. Brent wakes up, logs in, finds the problem in twenty minutes, and goes back to bed. In the morning there is a thread full of thanks and a few fire emojis. Somebody says they would be lost without him, and they mean it.

If you have worked in this industry for long, you have seen this. You may have been the person who got woken up. You may have been the one sending the message.

Everyone in that story behaved well. The on-call engineer escalated to the person most likely to fix it. The expert fixed it. The team said thank you. And the system that produced the outage is exactly the same as it was the night before, ready to do it again.

## Why we admire it

Our industry has a long love affair with the individual who saves the day. We tell stories about the engineer who rewrote the thing over a weekend, the one who can debug anything, the one who knows where all the bodies are buried. The 10x engineer is the most famous version of this story: the idea that some engineers are ten times more productive than everyone around them, and that finding them is the main job of building a team.

Charity Majors takes that idea apart in [In Praise of Normal Engineers](https://charity.wtf/p/in-praise-of-normal-engineers). The point that matters most here is about ownership: "Individual engineers don't own software, teams own software." A system's reliability does not depend on how good its best engineer is. It depends on what the team can do together, including on the nights when the best engineer is asleep, on vacation, or gone.

Hero culture gets that backwards. It treats the rescue as evidence that the team is strong, when it is actually evidence of where the team is fragile.

## Handle the error where it happens

Go has a convention that I like a lot. In Go, a function that can fail returns an error, and you deal with it right where it happens:

```go
f, err := os.Open(name)
if err != nil {
    return err
}
codeUsing(f)
```

[Effective Go](https://go.dev/doc/effective_go#if) describes the result as code where "the successful flow of control runs down the page, eliminating error cases as they arise." The [Go code review guidelines](https://go.dev/wiki/CodeReviewComments#indent-error-flow) put it more bluntly: keep the normal path at minimal indentation and deal with the error handling first. You handle each failure at the point it can occur. What is left when you are done is the happy path.

Plenty of other languages handle failure with exceptions instead. A function throws, and the failure travels up the stack until something catches it. That is convenient, because the code in the middle can pretend failure does not exist. It also means that if nobody planned for a particular failure, it keeps rising until it hits whatever catch-all handler sits at the top.

Most organizations are designed like exception code. We plan the happy path carefully: the roadmap, the staffing, the release process, the architecture as it will work when everything goes right. Then we stop. Failure handling is left implicit, so when something breaks, the failure propagates up through the organization until it reaches someone who can catch it.

The hero is the catch-all handler at the top of the stack.

A catch-all handler is useful. It keeps the program from crashing. But it has two properties that make it dangerous as a design. First, it catches the failure far from where it happened, so nothing changes at the place the failure came from. Second, it hides the failure rate. If every exception gets caught at the top, the program looks healthy from the outside no matter how often things are going wrong underneath. An organization whose outages are reliably caught by one person looks reliable on paper, right up until that person is unavailable.

Hero culture builds single points of failure out of people, and then thanks them for it.

## Unpaid architecture

The [Google SRE book](https://sre.google/sre-book/eliminating-toil/) defines toil as work that is "manual, repetitive, automatable, tactical, devoid of enduring value, and that scales linearly as a service grows." Repeated rescues fit that definition almost exactly. The same expert, doing the same kind of fix, at the same kind of hour, with nothing left behind afterward that would let anyone else do it next time.

That work is load-bearing. The system depends on it to stay up. But nobody designed it, nobody staffed it, and it does not appear on any roadmap. If heroics are required repeatedly, they are not heroics anymore. They are unpaid architecture.

The person carrying that architecture pays for it in sleep, in focus, and eventually in burnout. The organization pays for it in a knowledge gap that grows every time the expert fixes something without anyone else watching, and in the risk that sits in one person's head. None of this requires anyone to be acting badly. Knowledge concentrates in one person when nobody's time is allocated to spreading it, and the expert stays the expert because fixing it themselves is always faster tonight than teaching someone else.

## Sometimes the save is right

None of this means rescues are always wrong. Early-stage startups often have one person owning a system because the bigger risk is not shipping at all. A genuinely novel failure, the kind nobody could have reasonably planned for, may need someone with deep knowledge to drop everything. That is what catch-all handlers and escalation paths are for.

The line is repetition. A save that happens once is a response to an unexpected failure. The same save, by the same person, for the same kind of problem, is a failure path the organization has chosen not to design. Unexpected failures are a fact of life. A failure you have seen five times is not unexpected anymore. I always tell folks that the goal is not to keep having the same old boring failures. I want to have interesting new failures!

## Writing the error handling

The healthy response to a rescue starts with gratitude and keeps going. Thank the person who saved the day, sincerely and publicly. Then ask why the day needed saving.

That question is the organizational version of `if err != nil`. It moves the handling down the stack, toward the place the failure actually happened. Where did this break? What would have let the on-call engineer handle it without waking anyone else up? What is the expert doing during a rescue that only they know how to do?

The answers turn into failure handling you can design on purpose. The first is observability. The term comes from control theory, where Rudolf Kálmán introduced it: a system is [observable](https://en.wikipedia.org/wiki/Observability) to the degree that its internal state can be inferred from its external outputs. That inference is exactly what the hero does at two in the morning. They have watched this system fail enough times that they can work out what is happening inside it from the few signals it gives off, with years of experience as the model. An observable system makes that internal state explicit. The traces show what the system was doing, so the on-call engineer can read it instead of having to infer it, and the knowledge that lived in one person's head is available to anyone who looks.

The rest comes from the same question. A second owner who pairs on the next incident instead of reading about it afterward. An on-call rotation that the expert is part of rather than sitting above. Automation for the repetitive part of the fix. Sometimes a real investment in the underlying system, so that particular failure stops happening. An incident review should ask about the rescue itself, not just the outage: who had to be pulled in, and why were they the only one who could help? The underlying question should always be: is this failure really a systems failure, and if so, how do we repair the system?

Majors has the right design principle for this: "when it comes to building sociotechnical systems for software delivery, we should focus on all the ways people are normal." Normal people, as she puts it, forget things, get impatient, and zone out, and at two in the morning they do all three. Failure handling has to work for the person who is actually on call, half awake and seeing this failure for the first time, instead of for the expert on their best day. In the Marine Corps, we used to say we don't train for peak performance. By definition, you are almost never there. We train to have the highest sustainable performance. Design systems that work when you're tired, or stressed out, or distracted, because you will be, and so will your teammates.

The incentives have to change with it. If the person who heroically fixes the outage gets more recognition than the person who quietly made sure it could not happen again, the organization is paying for catch-all handlers and getting exactly what it pays for. The expert who makes the system observable, trains the second owner, and makes themselves unnecessary for that failure has done more for the system than any single save. Recognize that work at least as loudly.

## Back to two in the morning

Picture the same outage after that work is done. The alert goes to whoever is on call. They open the traces and see what the system was doing when it failed: which request, which service, which dependency, and what state it was in at the time. They do not need years of history with the system to read that. They fix the problem. If they get stuck, they page the secondary, who has been through this before. Nobody wakes up the one person who understands the system, because there is no longer only one.

Majors puts the goal well: "a truly great engineering org is one where you don't HAVE to be one of the 'best' or most pedigreed engineers in the world to get shit done and have a lot of impact on the business." The engineer on call that night did not need to be the expert, because the system had been built to show its own internal state to whoever was looking, and the rotation meant someone else had been there before.

In the morning there is no thread full of fire emojis, because nothing heroic happened. The failure was handled close to where it occurred, by the people whose job it was to handle it, using a path somebody designed in advance. That is a system that does not rely on heroics, and the person who used to be the hero finally gets to sleep through the night.
