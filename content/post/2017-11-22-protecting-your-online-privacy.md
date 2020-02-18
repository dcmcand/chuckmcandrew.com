---
title: Protecting your online privacy
author: Chuck McAndrew
type: post
date: 2017-11-22T15:49:10+00:00
url: /post/2017/11/22/protecting-your-online-privacy/
categories:
  - patron programming
  - Privacy
  - Professional Development
  - security
  - Technology instruction
  - VPNs

---

Which steps you take to protect yourself online depend entirely on your personal threat model. I have tried to select things that are broadly applicable and are easy to implement. This is  a topic where you can absolutely deep dive, but remaining totally anonymous online is very difficult (if not impossible) and takes a lot of effort and discipline. Fortunately, the vast majority of people don’t require that level of protection. However, everyone should address this issue at some level. Online privacy is a subject that affects everyone.

Slides for this class can be found [here](https://leblibrary.com/sites/default/files/Online%20Self%20Defense%20-%20Yellow%20Belt%20Level_0.pdf) and handouts can be found [here](https://leblibrary.com/sites/default/files/yellow-belt-handout.pdf).
# Why Care about privacy?

“Arguing that you don’t care about the right to privacy because you have nothing to hide is no different than saying you don’t care about free speech because you have nothing to say” – Edward Snowden
<iframe width="688" height="387" src="https://www.youtube.com/embed/I6UuWrVzys4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## You suffer when information breaches occur

Linkedin, Target, Anthem, etc.  All of these companies had lots of your data, and they all had major data breaches.  By limiting the amount of data that companies have about you, you limit the damage that their carelessness can do.  Remeber, any time that you put information online, it is now out of your control.
## Privacy protects those who need it

There are many vulnerable populations that need privacy to avoid persecution. Depending on where you are in the world, this populations may include domestic abuse victims, members of the LGBT community, human rights workers and many others.  Privacy also protects everyday people.  Privacy allows a safe space to explore new ideas and ways of thinking without judgement.  These ideas can literally change the world.  When Thomas Paine wrote Common Sense, he published it anonymously.  If his work had been under strict surveillance, he could not have possibly published a pamphlet so contrary to the views of those in power.  Librarians refer to this freedom to explore ideas as intellectual freedom and it is impossible without privacy.
# Who wants to surveil you?
## Criminals / Hackers

Your information is valuable.  If they can gain access to some of it, they can often get access to much more.  A social security number can get you a credit card, or let you file a fradulent tax return.  Your email contacts can give them information to do a targeted “spear phishing” attack which might get them banking information.  Even just your name and email address is worth something to them.  By limiting the information that is available about you, you limit your exposure to this kind of exploitation.
## Corporations/Advertising Agencies

Information is the currency of the internet.  Companies like Google and Facebook sell your information to advertisers.  The more know, the more targeted ads can become.  These companies are far from transparent about what information they have, and what they can do with that information.  Try reading their privacy policies and see how transparent they are.  You may be willing to trade information for access to a service.  However, many companies are collecting far more information than people realize.  Even if we are ok with this, we are still trusting that these companies maintain good security for our information.  The history of major data breaches should cause us to question that trust.
## Government Agencies

No rational person would argue that governments should not be able to gather information on adversaries.  However, this does not give a government agency carte blanche to collect any information on anybody they wish. Technology has made it cheap and easy to use mass surveillance to watch everyone.  By enhancing privacy, we make this more expensive and ensure that the government spends its resources surveilling those who are actual threats rather than simply watching everyone.
# What you can do to make surveillance more difficult
## Use HTTPS

HTTPS encrypts your connection between websites and your computer.  It doesn’t prevent someone watching you from knowing which website you connect to or how long you were there, but it does mean that they can’t see exactly what was transferred between you and the website.  It also helps to ensure that what you are seeing is what the website is sending.  This prevents a Man In The Middle (MitM) attack.
## Disable Third Party Cookies in your browser

Cookies are needed for browsing the internet today, but you can ensure that the only cookies that a site is allowed to set are from that site.
## Log out of sites when done

Logging out of a site destroys the session cookie for that site.  This keeps other sites from reading the session cookie and learning information about other services that you use.

## Compartmentalize web browsing
Maintaining seperate identities (or even completely seperate web browsers) for different tasks prevents  sites from gathering information about you that they shouldn’t have access to.
## Use Duckduckgo

Duckduckgo is a search engine company that is built on the promise that they won’t use your search results to try to track you. In addition to the obvious privacy benefits, this also helps to avoid being in a so called “filter bubble” where search engines serve you results that they think you are more likely to click on based on your past behavior.

Duckduckgo has nice features other than privacy. The biggest value add is what they refer to as “bang searches”. These let you search sites directly from Duckduckgo. For example, to search Wikipedia for a list of online search engines you would type “!w online search engines” into Duckduckgo.  Instead of being taken to Duckduckgo’s search results and then having to click on Wikipedia, you are taken straight there. You can find a list of bang searches at https://duckduckgo.com/bang.
## Use privacy enhancing browser extensions

These are called different things in different browsers.  Chrome calls them extensions, Firefox calls them add-ons, etc.  Regardless of what they are called, they add functionality to your web browser.  As was already covered, you should uninstall any unused extensions, but that doesn’t mean that extensions are bad.  They can protect your privacy, limit your exposure to malware, and even lower the amount of bandwidth you use (http://www.techweekeurope.co.uk/e-marketing/adblock-plus-adblocking-netw…).  Here are a few that help.

![Ublock Origin logo](https://leblibrary.com/sites/default/files/UBlock_Origin.svg_.png)
### Ublock Origin

Ublock Origin is a lightweight, effective, and easy to use ad-blocker that is available for Chrome and Firefox.
![Https Everywhere logo](https://leblibrary.com/sites/default/files/https-everywhere.jpg)
### Https Everywhere

Https Everywhere is  an extension created by the Electronic Frontier Foundation. It forces a site to use an encrypted connection if one is available.  This does not gaurantee a encrypted connection, because some sites do not offer the option.  However, it does ensure that if such a connection is available, you will use it. You can get it here for Firefox, Chrome, and Opera.
![Privacy Badger logo](https://leblibrary.com/sites/default/files/badger.png)
### Privacy Badger

Also put out by the EFF, Privacy Badger goes a long way towards defeating tracking online.  You can see exactly what third-party websites are trying to load things when you visit a new website and you have total control over how much you share.  Download it here for Chrome or Firefox.
# Dangers of public wifi

These days we often use public wifi.  Whether this is at your public library, your favorite coffee shop, or even a fast food restaurant it is still risky because people may be snooping on your web traffic.  This is possible because wifi is simply radio waves going through the air. If the traffic is not encrypted, it can be seen by anyone who cares to listen.
Ensuring that your connection is encrypted has two benefits.  First, it prevents snooping and possibly stealing information (or even worse passwords and logins).  Second it allows you to verify that the website that you are connected to is the web site you meant to go to.  If the URL in your web browser starts with http://, then you do not have an ecrytped connection.  It should start with https:// for it to be encrypted.  You can also click on the little lock symbol next to the https to find out information about the encryption used and the identity of the website.

To be even more secure, consider using a Virtual Private Network (VPN). This forces all of your traffic through an encrypted tunnel. This means that even if a website doesn’t offer https, no one on the wifi network will be able to see it.

Finally, if you must connect to the internet, using a 4g connection from a phone is considerably more secure than using a random public wifi network.
# Virtual Private Networks (VPNs)

VPN’s are proxies except that create an encrypted tunnel to the VPN server.  This protects your privacy when on an insecure internet connection such as at a coffee shop or airport.  Both VPN’s and Proxies can be found on https://proxy.org.  Note that some VPN’s keep logs of who connects to them and where the traffic goes from their.  Others do no logging.  These are called anonymous VPN’s and are far better for privacy.

![Diagram of how a vpn works](https://leblibrary.com/sites/default/files/vpn.jpg)

A couple of well regarded VPN’s are:

 Express VPN – (https://www.expressvpn.com/)

And

NordVPN – (https://nordvpn.com/)

Note: there have been a number of free VPN providers who have been caught selling their customers data. VPN’s are an area where you want to go with a paid company with a good reputation.
# Tor
![Diagram showing how the Tor network works](https://leblibrary.com/sites/default/files/tor.jpg)

TOR is a strong anonymity tool that was originally developed by the navy.  It bounces traffic through three voluntarily hosted relays located around the world while wrapping the traffic in three layers of encryption.  This ensures strong protection against someone on the receiving end being able to trace the IP address of the sender.  Although it isn’t the end all, be all for privacy, it is  a very strong tool.  The Tor browser bundle can be downloaded from https://torproject.org.  it works on all platforms including mobile phones.

<iframe width="688" height="387" src="https://www.youtube.com/embed/JWII85UlzKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
