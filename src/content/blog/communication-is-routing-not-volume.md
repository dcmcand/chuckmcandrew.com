---
title: "Communication Is Routing, Not Volume"
date: 2026-11-13
description: "When communication on a team breaks down, the reflex is to add more of it. Usually the fix is to make the signal that already exists clearer and get it to the people who need it."
tags: ["leadership", "communication", "teams", "software-engineering"]
draft: false
---

I was watching an old YouTube video recently, something uploaded about fourteen years ago, back when most uploads were lower resolution than you tend to see today. I put it in fullscreen on my monitor, which has a lot of pixels packed into it, and it was unwatchable. Blocky smears where faces should have been, edges that crawled whenever anything moved. I could barely tell what was happening. However, when I shrank the window down to a small rectangle, the video snapped into focus. I could follow the action again.

Nothing about the video changed. Same file, same bits. What changed was how much screen it was being stretched across.

The mechanism is simple once you see it. Fullscreen does not add any information to a low-resolution video. The player upscales it, so every source pixel gets spread across a block of screen pixels, and the compression artifacts that were baked into the original get magnified right along with the real detail. On a dense display, those artifacts grow large enough to see, and the detail you actually care about gets smeared out. Shrink the window and you reverse that. The same signal is concentrated into a smaller space, the artifacts drop back below what your eye can pick out, and what is left is the picture.

Same information, concentrated instead of magnified.

I think about communication on engineering teams the same way. Everyone wants better communication. When it is going badly, there are really two levers you can pull. You can add volume: more meetings, more status updates, more channels, more people copied on more threads. Or you can improve the signal-to-noise ratio: find the high-quality signal that already exists and make it easy for the right people to get at.

Volume is the fullscreen button. It is the reflexive reach, because it feels like doing something and it is easy to see. And when the underlying signal is noisy, adding volume does to a team what fullscreen did to that video. It magnifies the noise along with everything else.

## A team running on backchannels

A few years ago, I was on a team with a communication problem. From the outside, this problem wasn't immediately obvious. Stakeholders and leadership talked to the engineers all the time. The trouble was how the communication took place. Each of them went to the engineer they already knew. Someone would have a question, or an idea, or an urgent request, and they would take it straight to the person they were comfortable with.

Nobody was doing anything wrong by their own lights. The person they knew was the shortest path to an answer, and there was no better path in place. But add that up across every stakeholder and every engineer and you get a team receiving a dozen low-resolution streams at once. Each engineer held a different fragment of what the organization wanted. Requests arrived as a stakeholder's favorite solution rather than the problem behind it. Priorities came in through side doors, so the team's picture of what mattered depended on who you happened to have talked to that week.

The cost showed up in two places. The first was cognitive load. I wrote [earlier in this series](/blog/cognitive-bandwidth-is-the-constraint) about attention being the real constraint on engineering work. These backchannels are a direct tax on engineers' cognitive bandwidth. Every side conversation is an interruption, and every one of them has to be decoded: what are they actually asking for, does it conflict with what someone else asked for, is it a priority or a passing thought?

The second cost was the position it put the engineers in. We planned our work in increments, and requests kept landing on engineers after we had already done prioritization for the current one. Increment planning was an internal team process, as it should be. However, this meant that the timing for prioritization wasn't obvious to folks outside the team. This isn't inherently problematic, but it did cause problems. When someone senior comes to you directly with a request, you have two uncomfortable options. You can say yes and take on work nobody prioritized, or you can push back on someone with more authority than you, alone, without the context to know whether they are right. Neither of those is a decision an individual engineer should have to make in a private conversation. The arrangement handed engineers prioritization decisions they had neither the authority nor the information to make. What we needed was a way to define what Team Topologies calls our [team API](https://teamtopologies.com/book). We needed a clear way for folks outside the team to know how to communicate with us, without them having to know or care about internal team processes.

## Making the window smaller

The engineers were the ones who raised it. They were frustrated with stakeholder requests that were unclear, and with work getting dropped on them after the increment had already been prioritized. We talked it through as a team and decided together to try routing those requests through our product manager. It worked well.

I know this sounds like adding a gate, but this wasn't about building walls. Engineers could still talk to stakeholders. They followed up, asked questions, and got feedback directly whenever the work needed it. Nobody was restricting who could talk to whom. What changed was where requests and priorities entered the team.

When an engineer got a backchannel request, the answer became simple: "Yeah, that sounds doable. Talk to the PM to get the requirements nailed down so we can prioritize it." That one sentence took the engineer out of the uncomfortable position. They did not have to refuse anyone or judge the request against the plan on the spot. They pointed it to the person whose job was to do that, and the stakeholder walked away with a yes and a next step. Requests came in through one person, and that person was very good at turning them into signal.

Our product manager had been trained to distill information from customer interviews, and it showed. They knew how to ask questions that got past the solution a stakeholder had already settled on and down to the need underneath it. They pushed for specificity, especially about what done meant, so a request arrived with a finish line instead of a vague direction. By the time something reached the engineers, it had already been through the questioning that each engineer would otherwise have had to do on their own, inconsistently, mid-task.

The team's communication did not shrink. It got clearer. The same stakeholders wanted the same things, but the requests reached us concentrated instead of scattered across a dozen side conversations. Engineers spent their attention on the work instead of on reconstructing the organization's intent from fragments, and the uncomfortable DMs went to someone whose job was to handle them.

That is what I mean by routing. Good communication is the right information getting to the right people, at the right level of detail, with the noise taken out before it arrives. A leader's job here is less like a broadcaster and more like an information architect. You are designing the paths that context travels along, so that nobody has to hold the whole organization in their head to do their part of it.

## The durable version

A good product manager is one way to build that path. Not every team has one, and even teams that do need something that outlasts any single conversation. That is where the written practices come in: decision records, RFCs, incident reviews, and documentation.

These are not a replacement for talking. Conversation, in person or on video, is a much higher-bandwidth way to work through a problem than writing, and I would not trade a good discussion for a document. What writing does well is preserve the result. An [architecture decision record](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) captures what was decided, why, and what was considered and rejected, in a form that still resolves cleanly a year later for someone who was not in the room. An incident review routes what actually happened to the people who need to learn from it, instead of leaving it as a set of slightly different stories told in different side conversations.

That is the smaller window made permanent. The discussion can be as rich and as noisy as it needs to be. The record is the concentrated signal that comes out the other end.

Structure matters here beyond any one team. [Conway's Law](https://www.melconway.com/Home/Committees_Paper.html) observes that systems end up mirroring the communication structures of the organizations that build them. If the communication runs through a tangle of backchannels, it is not surprising when the software grows a tangle of special cases that each trace back to whoever had someone's ear.

## When the signal is missing

There are cases where the fullscreen button is the right answer. This blog post could be misread as "communicate less."

Sometimes the problem is not noise. Sometimes the signal is not being sent at all. A team working in a silo, cut off from its users or from the teams it depends on, does not have a signal-to-noise problem. In some cases, I have seen teams that were guessing about what a product needed instead of talking to customers and stakeholders. They had a missing-signal problem, and adding communication was exactly the right move. Open the channel. Put people in a room together. Start the meeting that should have existed all along.

The metaphor gives you a diagnostic for telling the two cases apart. Adding volume helps when the signal is already high quality and simply is not reaching enough people. Adding volume to a noisy channel just magnifies the noise. So before you add another meeting or another channel, look at what is already flowing. If what people are getting is fragmented, contradictory, or pitched at the wrong level, fix that first. Then, if the clear signal still is not reaching everyone who needs it, turn up the volume.

## Back to the monitor

My instinct with that old video was to make it bigger. It seemed obvious that more screen would let me see more. It did the opposite, because there was no more detail to show, only artifacts to enlarge.

Teams fall into the same instinct when communication breaks down, and it fails for the same reason. When people are confused about priorities, another status meeting is the fullscreen button. The fix is finding the real signal, getting it to the people who need it at the level they need it, and keeping the noise out of the path. On the team I described, that took a smaller window and someone who knew how to bring the picture into focus.
