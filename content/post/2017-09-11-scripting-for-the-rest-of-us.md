---
title: Scripting for the rest of us
author: Chuck McAndrew
type: post
date: 2017-09-11T19:52:46+00:00
url: /post/2017/09/11/scripting-for-the-rest-of-us/
categories:
  - Uncategorized

---
I have heard people say that everyone should know how to code. This struck me as wildly unlikely. People are just to busy and have too much on their plates to all become software developers. However, I also thought that their reasoning was correct. Learning to code lets you use your computer for what it is really good at. Doing repetitive tasks over and over again, the same way each time. Rather than saying everyone should code, I would say that everyone who regularly works with computers should learn some scripting.

So what is scripting and how does that differ from coding. It is a really blurry line. I would say it depends on three things. Code length, complexity and scope. Scripts tend to be much shorter than a full on computer program. They tend to be much simpler, and tend to focus on doing one thing and doing it right. Those are my general guidelines but like I said, the line is blurry. When you are starting out with scripting, your scripts may only be a few lines of code. That is perfectly fine. The point is to let the computer do the boring stuff.

A great book for getting started here is [Automate the Boring Stuff with Python][1].  Python is a great beginner language, and it is my scripting language of choice. I find it makes sense in my head and I can read good python code and understand it pretty easily. However, nothing says you have to learn python. If you run a Mac or a Linux machine, you could start with [shell scripting][2] (remember Mac OS started life as a Unix variant). If you run Windows, check out [powershell][3]. If you have to run servers or network devices look into a configuration management system like [Ansible][4], [Puppet][5] or [Chef][6]. It really doesn&#8217;t matter what you use, the point is to find a repetitive task and automate it. The key is to start small and simple.

I will give you an example of a script that I wrote for our library.

We use Google Calendar for scheduling various public service desks. This works reasonably well for the most part. One problem is that since each desk has it&#8217;s own calendar it becomes complicated for substitutes who are looking to pick up more shifts to easily see what needs coverage. Now one really nice thing about Google services is that they offer [APIs][7] for their services. An API is an Application Programming Interface. In other words it is a way to programatically communicate with an application. This means that I can write a script that queries all of our public service desk calendars. Using a second API for Google Docs lets me automatically take the results from that query and post them to a document.

The way this works is that when a shift needs coverage, the title is changed to &#8220;COVER&#8221; on the calendar. Every five minutes the script runs and pulls any shifts that say COVER and posts them to a document which is available on our intranet. This gives substitutes a simple place to check while being no more work for the person in charge of our schedule. When the shift is changed from COVER it automatically falls off the document the next time the script runs.

This is not earth shattering, but it did remove one annoyance and make peoples lives a little easier. If our scheduler spends less time hunting for substitutes to cover shifts she can focus on other tasks. She could certainly have maintained the list herself, but it would have been very easy for it to be inaccurate and out of date. She would certainly not be updating it every 5 minutes 24 hours a day!

In programming there is the DRY principle. It means Do-not Repeat Yourself. If you find yourself writing the same code over and over, just write a function that does that and call the function instead. We can apply the same principle to our jobs. If there is a repetitive task, particularly one that doesn&#8217;t require human judgment, that you have to do every day or every week, maybe it would be a good candidate for scripting.

 [1]: https://automatetheboringstuff.com/
 [2]: http://www.freeos.com/guides/lsst/
 [3]: https://msdn.microsoft.com/en-us/powershell/mt173057.aspx
 [4]: https://www.ansible.com/
 [5]: https://puppet.com/presentations/getting-started-puppet
 [6]: https://www.chef.io/
 [7]: https://developers.google.com/google-apps/calendar/overview