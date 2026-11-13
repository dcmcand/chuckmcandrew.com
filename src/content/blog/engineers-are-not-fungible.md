---
title: "Engineers Are Not Fungible"
date: 2026-11-13
description: "Swap one engineer on a great team for an equally skilled one and you do not get the same team with a new face. You get a new team."
tags: ["leadership", "teams", "culture", "software-engineering"]
draft: true
---

Earlier in this series I wrote about [the best team I have ever been on](/blog/culture-is-how-teams-become-excellent), and about how its culture held when the roster changed. One person left and a new engineer joined. I said then that it was not the same team after that, and that it never is. That sentence deserves more than the half a line I gave it.

The new engineer was great. They were as skilled as the person who left, and the team was not worse for the change. But, and this is the critical part, it was a different team. Our culture adapted to the people who were now in it. Our ways of working shifted. We had to re-learn how to trust each other.

Nobody had done anything wrong. We had replaced one strong engineer with another strong engineer, which is exactly what a staffing plan says to do. And we still ended up with a new team.

If you change out a single engineer on a great team, you get a whole new team.

## Shapes, not sizes

The usual way of talking about engineers treats ability as a single number. Junior, mid, senior, staff. The 10x engineer is the extreme version of that model: if ability is one number, some people must have a much bigger one.

Charity Majors puts the problem with that well in [In Praise of Normal Engineers](https://charity.wtf/p/in-praise-of-normal-engineers): "I know a lot of world class engineers, but I've never met anyone who is 10x better than everyone else across the board, in every situation." The key phrase is "across the board." Nobody is good at everything, because there is too much everything.

Tech is startlingly wide. A senior engineer is senior in one area, possibly two. They are probably mid-level in a few more and junior in others. Someone who can untangle a distributed system in their sleep may be lost in a frontend build. Someone who writes beautiful, well-tested application code may never have run anything in production. "Senior engineer" on a job ladder describes the deepest part of a person's skill set, not the whole thing.

So every engineer has a shape. The industry already has a starting point for this. A T-shaped engineer has broad general knowledge and one area of real depth. That is a useful first approximation, but real senior and staff engineers rarely look like a T. They might be h-shaped or W-shaped, or some other unique shape that does not cleanly map to our alphabet. The fact that people keep inventing new letters for this tells you the letters were never going to be enough.

Shapes matter because teams have needs. In [Team Topologies](https://teamtopologies.com/book), Matthew Skelton and Manuel Pais describe the stream-aligned team, the primary team type in their model, as one that can take work from early exploration all the way to production without handing parts of it off to other teams. To do that, a team needs a set of capabilities: application security, viability analysis, design and architecture, development, infrastructure and operability, metrics and monitoring, product management, testing, and user experience. Martin Fowler's [summary of the model](https://martinfowler.com/bliki/TeamTopologies.html) calls it "the whole enchilada of software development."

The book is careful about how a team covers that list: "It's critical not to assume each capability maps to an individual role in the team; that would mean teams would have to include at least nine members to match the list above. Instead, we're talking about being able, as a team, to understand and act upon the above capabilities."

That is a coverage problem, and shapes are how you solve it. Building a team means finding engineers whose shapes fit together so that the team, as a whole, has the skills, resources, and authority to own its product from end to end. Five strong backend engineers have a gap where operations or user experience should be, no matter how senior they are.

This is why engineers are not fungible. It is not because some of them are mythical super programmers. It is because of how each one fits into a particular team. Two engineers with the same title and the same level can have completely different shapes, and swapping one for the other changes what the team can do.

## The theory lives in the team

Shape is what an engineer brings with them to any team. There is a second thing that only exists on a specific team, and Peter Naur described it in 1985.

In [Programming as Theory Building](https://gwern.net/doc/cs/algorithm/1985-naur.pdf), Naur argues that the real product of programming is not the code. It is the theory the programmers build in their heads: how the program maps onto the real-world problem, why it is shaped the way it is, and how it should change when the world changes. The code and the documentation are, in his words, "an auxiliary, secondary product." They do not carry the theory.

He follows that idea somewhere uncomfortable. "The death of a program happens when the programmer team possessing its theory is dissolved." The program can keep running after that, but it is dead in the sense that nobody can change it well anymore. Rebuilding the theory "merely from the documentation, is strictly impossible." For a new programmer to pick up the theory, they need "to work in close contact with the programmers who already possess the theory."

His conclusion could be the title of this post. On this view, "the notion of the programmer as an easily replaceable component in the program production activity has to be abandoned."

## The new team, again

Look at the opening scene again with both of those ideas in hand.

The engineer who joined had a different shape than the one who left. A different set of strengths, as I put it in the earlier post. So the team's coverage shifted with them.

They also arrived without the team's theory. They had to build it by working alongside the rest of us, which is exactly what Naur says is required. A theory held by a team also changes when the people holding it change, so the team's shared understanding of the system came out of that different too.

Trust had to be rebuilt for the same reason. Trust on a team is specific knowledge about specific people: how they handle pressure, what they mean when they say something is done, when they will speak up. A new person resets a piece of that for everyone.

None of that made the team worse. It made it a different team. Team Topologies notes that a team can take "from two weeks to three months or more to become a cohesive unit." Changing a single member starts part of that clock over.

## Change is not the problem

None of this is an argument against changing teams. You are always going to change team members. People get reassigned. They get new jobs. They get promoted. Some leave the industry entirely and become goat farmers.

The argument is that changing an engineer fundamentally changes the team: its capabilities, its culture, its ways of working, everything. And that change can go either way.

The best team I have ever been on is the proof. Before it was that team, it was a struggling one. Same contract, some of the same people. We were the first team at a new government agency, and the business was hoping to land there and expand. The work was full of ambiguity. There was no clear guidance from the customer and a lot of pressure to succeed.

One of our engineers struggled under those conditions. Their technical ability was never the problem. The ambiguity and the pressure were. As they struggled, team meetings got painful and conversations got awkward. People started talking less, and a team that talks less predictably delivers worse.

When we moved that engineer to another team, one with far less ambiguity and much clearer definitions of success, they went back to performing well. And the way our team functioned improved right away. It was a drastic change, and it was all for the good. Over time, that team became the great team I wrote about.

They were not a bad engineer. They were a bad fit. Their shape fit clear, well-defined work, and our work was neither. On the right team, the same person was an asset.

That is the same lesson as the opening scene, from the other direction. Swapping one strong engineer for another made a new team that was just as good. Moving a struggling engineer to work that fit them was better for the engineer and for the team. In both cases, the change in people was a change in the team.

## Hiring for the team you have

For leaders, this changes how you treat a departure. A backfill is not a replacement. When someone leaves, you are not filling a slot with an equivalent part. You are forming a new team, whether you plan for it or not. Plan for it. Expect the weeks or months it takes for the team to find its footing again, and do not schedule as if the new person arrives with the old person's theory already installed.

It changes how you hire. Alongside "is this a strong senior engineer?" ask "what is this team's shape now, and where are the gaps?" The person who left may not have been covering what the team most needs next. The best hire might look nothing like them.

And it changes how you think about fit. When an engineer is struggling, look at the shape of the work before you look at the shape of the person. Sometimes the kindest and most effective thing you can do for the engineer and for the team is to help them find work that fits.

If you change out a single engineer on a great team, you get a whole new team. That can be a loss or a gain. It is never a no-op, so the next time someone calls a hire a backfill, ask what new team you are actually building.
