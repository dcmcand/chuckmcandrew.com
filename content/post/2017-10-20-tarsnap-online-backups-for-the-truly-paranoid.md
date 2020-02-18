---
title: Tarsnap – Online backups for the truly paranoid
author: Chuck McAndrew
type: post
date: 2017-10-20T15:06:48+00:00
url: /post/2017/10/20/tarsnap-online-backups-for-the-truly-paranoid/
categories:
  - Uncategorized

---
With [Crashplan stopping its free consumer service][1], I have had to find a new backup solution for my home computers. After looking at many options, [Tarsnap][2] was what I settled on.  They advertise themselves as &#8220;Online backups for the truly paranoid&#8221;. This is a true claim, and their security is certainly one thing that draws me to them, but they are also easy to use and quite inexpensive.

Tarsnap is built from the ground up to be secure. The encryption key is generated locally on your computer and all your data is encrypted before it leaves your computer. This means that no one can snoop on your backups. The team at Tarsnap can&#8217;t, the team at Amazon can&#8217;t (tarsnap stores your data in Amazon&#8217;s cloud), and no one in between can. This is important to me when I back up sensitive information like tax records. I want to know that I am the only one who can access my data. Even if Tarsnap screwed up and got hacked, the hackers would only get a bunch of encrypted data which would be meaningless without the decryption key.

This does mean that I have more responsibility for my own backups though. I can&#8217;t lose the decryption key (a file on my computer). If I do, there is no one who can rescue my data. Because of this, I have three copies of the file on three different drives and I printed up a copy to store in my records. I feel quite secure with this, but some people may not be. If you want a company to be able to recover your data for you, you have to trust them because they can access your data if they choose to. I would rather take responsibility for keeping my key safe and have the piece of mind that no one can access my backups.

Tarsnap is also quite affordable. They charge $0.25 (or 25 pico-dollars as they say) per GB per Month for storage and $0.25 per GB used in bandwidth. To make things less expensive for you, all your data is deduplicated and compressed before encryption. You may have 10GB of things to store, but after deduplication and compression you might only have 7.5GB. The next time it backs up, if nothing has changed, you pay nothing for bandwidth because of the deduplication. If you added a few pictures, you might pay for a couple of hundred MB. To me this is far preferable to a plan where you pay a fixed amount and can store up to a certain amount. In that case, there is no discount for storing less. You are essentially paying for the maximum you might use rather than for what you actually use.

Tarsnap works for Unix like systems. This means it works for Mac OS, Linux, and BSD. Unfortunately for some, the only way to use it with Windows is to use the new [Linux subsystem for Windows][3], so it won&#8217;t be a great choice for Windows. If you are on a Mac or Linux though, it is an awesome backup solution. It was originally developed as a command line utility, but recently they released a GUI front end for those who don&#8217;t like the command line.

Although I am just starting with Tarsnap, so far I am very impressed. It is secure, usable, and affordable. There is not much more you could ask for from a backup solution.

 [1]: https://www.crashplan.com/en-us/consumer/nextsteps/
 [2]: https://www.tarsnap.com/
 [3]: https://msdn.microsoft.com/en-us/commandline/wsl/install_guide