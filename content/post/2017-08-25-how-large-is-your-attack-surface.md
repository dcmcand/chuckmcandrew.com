---
title: How large is your attack surface?
author: Chuck McAndrew
type: post
date: 2017-08-25T13:47:21+00:00
url: /post/2017/08/25/how-large-is-your-attack-surface/
categories:
  - security
  - Technology instruction

---
Attack surface is a term used in computer security to describe your vulnerabilities. It is simply the ways that you can be attacked. A larger attack surface means more ways to attack you. A smaller attack surface means less ways to attack you. One of the most effective ways we have of increasing our security is to shrink our attack surface. There are other important things we need to do, such as doing security updates and selecting trustworthy software, but that largely depends on things that are out of our control. I can&#8217;t apply security updates to my cell phone if the phone manufacturer doesn&#8217;t regularly release them. I can do my best to select trustworthy software, but can&#8217;t see or know how they store information on the backend. In contrast, our attack surface is something that we can control by being very cautious about choosing to add programs, apps, or software (three names for the same thing in my opinion) to our devices.

Some software products are known for being very insecure and having lots of bugs (flash) and some are known to be more secure. Most software products are simply about average on their quality (I know, that should go without saying, but I said it anyway). This means that for the same number of lines of code, they will have about the same number of bugs. Not all bugs are security vulnerabilities, but they often are. So we can say that most software will have about the same number of vulnerabilities as other projects with a similarly sized codebase. This means that the simplest way to reduce the number of vulnerabilities is to use the smallest number of programs we can on our devices. Do you really need that app on your phone? That extension for your web browser? That program for your computer? Any time we add software, we add the possibility of vulnerabilities to our system.

These may not be devastating vulnerabilities which allow total compromise of your system. The thing to remember is that the bad guys make a living from chaining small vulnerabilities together to get much larger gains. Reducing the number of vulnerabilities reduces the ways that they can be chained together. Reducing complexity increases security.

Many operating systems include a lot of features that you will never use. The include things for backwards compatibility to ensure that programs setup 15 years ago can still function. This is important if you are a large company with custom legacy applications that are needed to conduct your business, but adds nothing for the home user experience. A great example of this is smb v1.

Smb is microsofts protocol for allowing network access to file shares and printers. Smb version 1 was originally developed in the early 90&#8217;s, yet it is currently enabled by default in Windows 10 (it will be depreciated in upcoming releases). Even though an extremely small percentage of users need this, it is on. This is what the recent wannacry ransomware outbreak that shut down networks around the globe took advantage of to spread. By leaving this legacy code active, the attack surface was increased and people were made more vulnerable.

Recently there have been reports of [Chrome extensions being compromised][1] to exploit people&#8217;s computers. In this case the developer didn&#8217;t do anything malicious and the extension itself was legitimate. What happened was the developer&#8217;s account was hacked and malicious code was added to their extension without their knowledge. Any time you install something, you are implicitly trusting the author of the code. You are trusting that they aren&#8217;t malicious, but are also trusting that they have good security and haven&#8217;t been compromised. This is completely outside of your control. What you can control is how often you install things. I am not saying never install any extensions. I am just saying think carefully about whether you need them, and perhaps more importantly regularly uninstall extensions (or apps, or programs) that you don&#8217;t use anymore. There is no upside and a huge downside to having software on your device if you don&#8217;t use the software.

Computer security requires layers. A great start is reducing your attack surface. This means that the number of things you have to worry about securing is reduced. This makes keeping your system up to date and secure far easier.

 [1]: https://threatpost.com/seven-more-chrome-extensions-compromised/127458/