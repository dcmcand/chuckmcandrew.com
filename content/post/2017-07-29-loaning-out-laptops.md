---
title: Loaning out laptops
author: Chuck McAndrew
type: post
date: 2017-07-29T15:12:46+00:00
url: /post/2017/07/29/loaning-out-laptops/
categories:
  - Uncategorized

---
We have an exciting new program at our library. We are going to start loaning out laptops for patrons to take home. We will have two pools, one for long term loan, and one for short term loan. The short term loans will be for three weeks. That program will start in 2018. I will write more about that program when we get closer to launching it. However, the long term loan laptops will be available in the very near future.

The long term laptops will go out for 90 days, and will be targeted at (but not limited to) high school and college students. When considering how to set these laptops up, I had a few goals.

  1. I wanted patrons to be able to set them up how they like. They get to set their own username, password, and have the ability to install or remove software as they want.
  2. I wanted to provide patrons with a good default experience by pre-installing certain applications and customizing their setup to provide for a more secure and private experience.
  3. I wanted to be ABSOLUTELY sure that nothing a patron did with the laptop could impact later users. I want everyone to start from a clean, fresh experience.

Because these laptops are going out for 90 days, and there are only 12 of them I decided the easiest way to accomplish the third goal was to reimage them each time that they are returned. To accomplish the first two, I turned to Linux Mint.

Linux Mint has a reputation for being easy to use. It&#8217;s main desktop environment ([Cinnamon][1]) should feel fairly familiar to most people with a start menu in the lower left hand corner and an application bar along the bottom of the screen. It also has a huge advantage for me. You can install in OEM mode. OEM mode is supposed to allow computer manufacturers to install an operating system without needing to set up users or passwords. It also allows customization of the OS before it is finalized. This was perfect for my use case.

I installed the operating system to a single laptop and then made the following changes:

  1. Install the Chrome Browser &#8211; Linux Mint comes with Firefox by default, but Chrome is by far a more popular browser. By adding Chrome, patrons have the choice of using either one.
  2. Install Privacy enhancing plugins for both browsers &#8211; These are the same plugins we use on all of our public computers. We use [Privacy Badger][2], [HTTPS Everywhere][3], and [uBlock Origin.][4]
  3. Disable tap-to-click &#8211; These particular laptops don&#8217;t have great palm detections, so if tap-to-click is enabled the cursor jumps around annoyingly if you happen to brush the touchpad while typing.
  4. Install the Tor Browser &#8211; This gives patrons the option of fully anonymous browsing. Again, this is something we offer on our public computers.
  5. Fully update all software on the laptop.
  6. Install better power management software &#8211; Using the TLP package on Linux can really help your battery life.

After making these changes I had to make sure that they would be copied to any new profile that is created. Linux will copy anything in the /etc/skel directory to every new profile it creates. I made sure that the tweaks to Chrome, Firefox, and the Tor Browser would be the default on every new user&#8217;s profile by copying the .mozilla, .config, and the .local/share/torbrowser folders from the temporary setup user&#8217;s home folder to /etc/skel. Then I ran the included script to setup the laptop for the users. This ensures that the next time the laptop boots, it will run the firstboot program to allow patrons to setup their usernames, choose their language, keyboard layout, etc. This finished the setup for the first laptop.

Next I used [clonezilla][5] to clone the hard drive of the laptop that I setup to an external harddrive. This was now my master copy of the setup. I cloned the external drive onto all of the remaining laptops. This lets me quickly and easily ensure that they are all setup identically. It will also make wiping them a piece of cake.  All I have to do is reclone the master copy onto the laptop when it is returned (this takes about 10-15 minutes). That way each patron will get a shiny new install and nothing the previous patron did can impact them. The patrons returning the laptops are assured that any files they left on the laptop will be wiped out and no one will be able to see anything they did.

I am very excited about this program. We may need to tweak some of our policies as time goes on, but I think it is a great service that our library can provide to our community. The biggest challenge may be letting those who would benefit the most know about the program. I will certainly post updates once this program is rolling to talk about what worked and what didn&#8217;t.

 [1]: https://en.wikipedia.org/wiki/Cinnamon_(software)
 [2]: https://www.eff.org/privacybadger
 [3]: https://www.eff.org/https-everywhere
 [4]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
 [5]: http://clonezilla.org/