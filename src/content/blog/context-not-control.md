---
title: "Context, Not Control"
date: 2026-07-10
description: "When I first led a team, I made every decision run through me. A manager set me straight: my job was never to make the decisions, it was to make sure decisions got made."
tags:
  [
    "leadership",
    "engineering-management",
    "decision-making",
    "software-engineering",
  ]
draft: false
---

The first time I led a team, I messed it up. I set up a team dynamic where every decision had to run through me without meaning to. I did this with the best of intentions, but it was still a leadership miss on my part.

I had just been promoted out of a senior engineer role. As a senior engineer, my job was coming up with solutions and making decisions. When the team needed an approach to a problem, I gave my opinion. A more junior engineer wasn't sure about which approach was best? I chose the approach and explained why. It was my job to have opinions. I was good at my job. That is why I found myself leading a team. What I didn't realize at the time was that leading a team is a very different job.

So when I started leading the team, I led the only way I knew how. I had the answers, or I could get them, so I gave them. I'd show up to a problem with a solution already in hand and present it for comments. It isn't that I was high-handed. I listened when people objected, considered other ideas, and often changed my mind when others made compelling arguments. What I failed to appreciate is that there is a meaningful difference between being another team member and a team lead in how others weigh your words. I was still acting like an IC, but others were seeing me as a team lead.

It was exhausting. I was the gate every decision had to pass through, and there are only so many hours in a day. But the issue wasn't only with me. It was what this dynamic was doing to the team. People stopped deciding things. They'd bring me calls that were obviously theirs to make and wait for my blessing before they moved. I started getting frustrated. Why couldn't they make these decisions themselves? They knew enough, they had the skills!

The problem wasn't that they were lazy or inexperienced. They were behaving completely rationally. I had made myself the person who makes the decisions, so they brought me the decisions. I had trained them to do exactly that. The dynamic I was frustrated by was one I had built myself, brick by brick, every time I answered a question that was not mine to answer.

I did not figure this out on my own. I figured it out because I complained to my manager about how exhausting the job had become, and how the team was behaving.

He didn't tell me I was working too hard. He told me I was doing the wrong job. He told me, "Of course the team defers to you. You have made it your job to make all the decisions." He then explained that making decisions wasn't my job. It was my job to make sure decisions get made. That one took me a minute to understand.

To help me out, he asked me a question I still think about. "Why do you have engineers this good," he said, "if you are not prepared to let them do engineering?"

That one stung, because I didn't have a good answer. Of course I was letting them do engineering, that was ridiculous. They were writing the code, they were submitting the PRs. Of course, I was wrong. Engineering isn't writing code and submitting PRs. I had a team of genuinely talented people, and I had arranged things so that the ceiling on what they could accomplish was me. Whatever I could personally get to, review, and bless was the most the team could produce. I had taken a group that could think in parallel and forced it to run single-threaded.

His advice was simple to say and hard to do. Lead with questions instead of solutions. When someone brings you a decision, don't hand them the answer. Ask them what they think, and why. Ask what they're weighing, and what happens if the call is wrong. Half the time they've already reasoned their way to a good answer and are really just asking for permission, and the questions hand the permission back to them. The other half, the questions show you what they're missing, which is usually not intelligence. It is context.

None of that was comfortable at first. Leading with questions is slower in the moment than handing over the answer, and when you already know the answer, sitting on it can feel almost negligent. Sometimes it even means letting people do things differently than you would choose to. But the few seconds I saved by answering came straight out of the team's ability to function without me, and that ability was the entire thing I was trying to build. I had to learn to treat the urge to jump in with the answer as a signal to ask a question instead.

The trap, once you see the problem, is to overcorrect into the opposite mistake. If controlling every decision is wrong, the lazy fix is to step back and let people figure it out on their own. That is not delegation. It is abdication, and it fails in its own way. Handing someone responsibility for an outcome without the context to reach it well is how capable people make confident, badly informed decisions, and when that happens it is your fault, because you set them up for it.

The actual job is narrower and more active than either extreme. It is to make sure the people making the decisions have what they need to make them well. That mostly comes down to context: what are we actually trying to achieve, which constraints are real and which are just habit, where is the strategy heading, where are the landmines buried that a newcomer wouldn't know about. Context is the raw material of good judgment. You cannot delegate the judgment without also delegating the context, or all you have really delegated is the blame.

Netflix put a name to this years ago in [its culture memo](https://jobs.netflix.com/culture): context, not control. The idea is that a manager's job is to give people enough context to make good decisions themselves, rather than to make the decisions for them or approve them after the fact. I didn't invent the principle. I spent my first stretch as a lead demonstrating, in detail, what it looks like to violate it.

Once I started actually doing it, the reason control had felt so heavy became obvious, and it was mechanical. If every decision has to pass through one person, that person is a single queue, and everything waits in line behind their attention. It works fine on a small team and quietly falls apart as the team grows. The symptom is decision latency: simple calls that should take an hour taking days because they are sitting in someone's backlog. When decisions are slow and nobody can quite tell you why, look for the queue, and check whether you are it.

Context does not have that problem, because it does not live in one place. Once people carry the context, decisions get made in parallel, at the level closest to the work, whether or not you are in the room. And the decisions are frequently better than the ones you would have made, because the person doing the work usually sees things you cannot from where you sit. Talented engineers with the right context do things that genuinely surprise you. The same engineers with missing or wrong context make bad calls faster and more confidently than anyone else on the team. The talent is not the variable you have the most leverage over. The context is.

There is a second half to this that Netflix also got right, which is that freedom and responsibility have to travel together. You cannot hold someone responsible for an outcome while keeping the authority to decide how it gets reached. That is not accountability, it is just scapegoating. The reverse, freedom with no responsibility, is chaos. The two have to be matched. If I don't trust you with the freedom to make the call, I have no business handing you the responsibility for how it turns out. When I was making all the decisions myself, I was giving my team responsibility for delivery while keeping all the authority for how the work got done, and then quietly wondering why they didn't act like owners. They weren't owners. I hadn't given them anything to own.

We changed how the team worked after that conversation, and the results were not subtle. Morale went up, because people were doing real engineering again instead of queuing outside my door. Velocity went up, because decisions stopped pooling in my backlog. And my own quality of life went up, because I was no longer the thing that had to touch everything before it could move. The bottleneck had been bad for all of us, myself very much included.

The lesson that stuck is that leading was never about being the best decision-maker in the room. Some days I probably was, and it did not matter, because a team that can only move at the speed of one person's attention has a hard ceiling no matter how good that person is. The right decision made by the wrong person, over and over, is still a scaling failure. The job was to build a team that made good decisions without me. You do that by making sure they have the context to decide well, and then trusting them with the freedom to actually do it. The measure of a good leader isn't how many good decisions they make. It is how many good decisions their team makes.

Control is the version of the job that feels like leadership, because it is visible, and it is unmistakably you doing the work. But the leadership was never in the decisions I kept for myself. It was in the context I finally gave away.
