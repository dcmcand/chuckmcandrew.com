---
title: "The Centaur Model: Why the Best AI Work Is Still Partnership"
date: 2026-04-15
description: "The best use of AI isn't vibe coding or refusing the tool. It's pair programming in the deepest sense, where both parties bring something the other can't."
tags: ["ai", "software-engineering", "writing"]
draft: false
---

A few weeks ago I was working through a thorny refactor with an AI assistant. I had a gut feeling something was off with the design I was being handed. The code compiled, the tests passed, but it felt wrong in a way I couldn't articulate yet. So I pushed back. I asked why we were structuring it this way instead of a different way I'd been turning over in my head. The answer came back with a real tradeoff I hadn't considered, and we ended up somewhere neither of us would have gotten to alone. That's not vibe coding. It's not me dictating to a typing machine either. It's something else, and I've come to believe that it gets far better results than other modes of engagement with AI.

The frame I keep coming back to is chess.

## The short history of humans getting beat

In May 1997, IBM's Deep Blue beat Garry Kasparov in a six-game match. That was the moment the best human chess player in the world lost to a computer, and the shape of the game changed forever. Everyone at the time assumed this was the end of something. Humans would be obsolete. Computers would be better at chess forever, and that would be that.

Kasparov had a different read. In 1998 he proposed a new format he called Advanced Chess, where a human player works with a computer against another human-computer team. The idea was to see what happened when you stopped treating the machine as a competitor and started treating it as a collaborator. The format got called lots of things over the years: cyborg chess, centaur chess, freestyle chess. The core idea stayed the same.

The interesting result came at the 2005 Freestyle Chess Tournament. The winner wasn't a grandmaster with a supercomputer. It was a pair of amateurs named Steven Cramton and Zachary Stephen, playing as "ZackS," using ordinary PCs and several off-the-shelf chess programs. They beat teams that included grandmasters with more computing power. What they had was a practiced skill at working with the machine. They knew when to trust its suggestions, when to override them, when to have two programs argue and pick the better argument. The skill wasn't chess, exactly. It was the collaboration itself. ([Wikipedia: Advanced Chess](https://en.wikipedia.org/wiki/Advanced_chess), [Warp News: How two amateurs beat the chess grandmasters](https://www.warpnews.org/centaurs-edge/how-two-amateurs-beat-the-chess-grandmasters-excerpt-from-the-new-ai-book-the-centaurs-advantage/))

For a while, centaur teams were the strongest chess players on Earth. Stronger than any human. Stronger than any computer. That window has mostly closed in chess now, because engines have gotten so strong that the human partner adds noise more often than signal. But that's a story about chess specifically. The lesson from the centaur era is bigger than the game.

## What each side actually brings

The centaur worked because each side contributed something the other genuinely could not.

The human brought taste. The instinct to say "technically correct, but wrong for this particular thing." Pattern recognition built from years of staring at the board. The ability to notice that a move was strong in the abstract but bad in this position, against this opponent, at this moment. Judgment.

The machine brought the other half. It could evaluate millions of positions without getting tired. It never missed a tactical shot because it was tired or annoyed or bored. It held more of the game tree in its head simultaneously than any human ever could, and it followed threads through that tree without losing the connection.

Neither side was complete alone. The machine played a kind of chess that was strong but also soulless and occasionally dumb in ways humans could see immediately. The human played a kind of chess that was creative but tactically fragile. Put them together with a human who knew how to collaborate, and you got something that outperformed both.

The same asymmetry shows up in the work I do every day. When I'm writing code with an AI, I'm bringing the context about why we're building this thing, what the team cares about, what's going to surprise someone in six months when they come back to it. I bring a context window stretching over years or decades including intuitions that I might not even be able to articulate much less write in a design doc or claude skill. The AI is bringing the ability to hold a bigger chunk of the codebase in working memory than I can, to recall an API I haven't touched in a year, to follow a chain of imports across a repo without losing the thread. Different strengths that happen to fit together.

## You have to know the domain

This is the part I want to spend the most time on, because I think it's where most of the bad takes come from on both sides.

The best use of AI is in domains you know well. That sounds counterintuitive at first. You'd think the tool would be most valuable in areas where you're weakest, as a kind of crutch. It's valuable there, but it's also dangerous there, because you can't push back on what you can't evaluate. When I use an AI in a domain I know, I can spot the hallucination, the overconfident wrong answer, the solution that works in general but doesn't fit this specific situation. When I use one in a domain I don't know, I'm largely taking it on faith.

Here's a non-technical example that made this click for me. Conventional songwriting advice says show, don't tell. It's good advice. If you ask a large language model to critique a song you wrote, that's the advice it will give you, and most of the time that advice will make the song better. Johnny Cash wrote "Man in Black" in 1971, and the entire song is telling. Every verse is just Cash explaining who he wears black for and why. No imagery, no scene, no showing. It's one of his most powerful songs, and it works because Cash had the experience and the standing to know exactly when the rule didn't apply. He broke it on purpose, with full knowledge of what he was breaking.

A songwriter who doesn't know the rule well enough to know when to break it is going to take the AI's advice and flatten the thing that would have made the song great. That's not the AI's fault. The AI gave good general advice. The failure mode is the person on the other end not having the ear to recognize that this song wanted to be told, not shown.

You are never going to produce exceptional work by following the general rules. Exceptional work lives in the places where you chose to break a rule because you understood it deeply enough to know it was the wrong rule for this case. AI is really good at the general rule. It is not good at knowing when you, specifically, in this work, should break it. That judgment is yours, and it only comes from knowing the domain.

## The two failure modes

Once you see it this way, the common ways people misuse these tools become easy to name.

The first is vibe coding. The term comes from Andrej Karpathy, who in February 2025 [described it](https://x.com/karpathy/status/1886192184808149383) as coding where "you fully give in to the vibes, embrace exponentials, and forget that the code even exists." You prompt, you paste, you ship, you move on. Karpathy was pretty clear he was describing it as a mode for throwaway weekend projects, not production systems. That nuance has mostly been lost. The term has come to mean something broader: treating the AI as a vending machine, abdicating the thinking, not understanding the output. ([Simon Willison: Not all AI-assisted programming is vibe coding](https://simonwillison.net/2025/Mar/19/vibe-coding/))

When you vibe code, you give up the human half of the centaur. You stop bringing taste and judgment. You take whatever the machine produces and call it done. The output might compile and pass tests, but you have no idea whether it's the right thing, because you never engaged with the question of what the right thing would be. You're a courier, not a collaborator.

The second failure mode is the opposite, and it's just as common in different circles. Refusing the tool entirely out of pride. The person who insists they'll never use an AI to help with their code because real engineers write everything themselves. The writer who sees using a language model for anything as a kind of cheating. I understand the impulse. There's a lot of hype to push back on, and some of the people loudest about these tools are genuinely embarrassing. But the stance of refusing a capable tool out of principle is also an abdication of judgment, just in the other direction. The grandmasters who lost to the amateurs at that 2005 freestyle tournament weren't weaker at chess. They were weaker at collaboration, because they hadn't taken it seriously as a skill.

The thing both failure modes have in common is that they skip the hard part. Vibe coding skips the judgment. Tool refusal skips the collaboration. Neither one of them is partnership. Both of them are, in their own way, lazy.

## The atrophy question

There is one real problem that I also want to mention here. Capability atrophy. What happens to the next generation of engineers who grow up with these tools? Are we raising a cohort that will never learn to read a stack trace because the AI always summarized it? Never learn to reason about memory because the abstraction layer always hid it? Never learn to sit with a hard problem long enough for the answer to come, because the assistant was always ready to serve up something plausible?

This is a real concern and I don't want to wave it off. I've watched myself reach for the tool on problems I could have solved in five minutes of thought, and I don't think that's making me sharper. Every abstraction layer that replaces understanding instead of augmenting it is a real loss, and it's a loss that compounds. The generation that never learned to read the packets, in the language Dan Geer uses, is a generation that can't diagnose anything the abstraction layer doesn't already know about.

But I also want to take the counterargument seriously. We don't hunt our food anymore, and civilization happened. Calculators didn't ruin math. Chess engines didn't ruin chess; if anything they made the game more accessible and deeper, because anyone with a laptop can analyze at a level that used to require a strong coach. There's a plausible path where AI-assisted coding produces better engineers through faster feedback loops, more ambitious projects that would otherwise be out of reach, and more people entering the field at all because the cliff is less steep.

I don't know which of these stories is going to be true. I suspect some of each. The difference between the good version and the bad version is going to come down to whether the tool is used to replace understanding or to accelerate it. A junior engineer who uses an AI as a Socratic tutor, asking why the code works the way it does and not accepting surface answers, is going to end up stronger than one who never had the tool at all. A junior engineer who uses it to paste the error message in and accept whatever fix comes back is not going to end up stronger than anyone. Same tool, very different outcome.

Which brings me back to the centaur. The frame is useful precisely because it asks you to stay engaged. It assumes you have a contribution to make, and that contribution is irreplaceable. If you're doing it right, you're bringing taste and context and judgment. You're pushing back when something is off. You're catching the hallucination in the domain you know and flagging it for yourself in the domain you don't. You're treating the machine as a partner, not a servant and not a threat.

That's not as catchy as "AI will replace all engineers" or "real programmers don't use LLMs." Both of those are easier to say at a conference. But the boring middle position is where the actual work happens, and the people I see producing the best stuff right now are all living in it.
