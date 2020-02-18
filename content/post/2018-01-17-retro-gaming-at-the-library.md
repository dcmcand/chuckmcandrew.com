---
title: Retro Gaming at the library
author: Chuck McAndrew
type: post
date: 2018-01-17T14:44:33+00:00
url: /post/2018/01/17/retro-gaming-at-the-library/
featured_image: /wp-content/uploads/2018/01/RetroPieWebsiteLogo.png
categories:
  - Uncategorized

---
I have wanted to get some kind of gaming going at our library for a long time now. The problem with most modern games is that they assume that you have your own account and aren&#8217;t really made for settings like public libraries. Enter the <a href="https://retropie.org.uk/" target="_blank" rel="noopener">Retropie</a>. This Raspberry Pi based system contains emulators which allow you to play roms from a whole host of retro game systems. This will allow us to offer gaming in a format more friendly to multiple users. There are some challenges,  mainly the availability of legal roms, but I think this is a very fun thing for libraries to offer.

To get started I purchased this [kit][1] from Amazon which contained everything you need (except for a tv). Then all you have to do is download and install the retro pie system following their [installation instructions][2], hook up your controllers and load some roms. You are ready for some retro gaming fun.

I followed [this guide][3] to find legally acquirable roms. I ended up buying the [Atari Vault][4] and the [Sega MegaDrive and Genesis Classics Collection][5] from Steam. This gave me about a hundred Atari games and 60 or so Sega games including Centipede, Missile Commander, Super Breakout, Sonic the Hedgehog, Golden Axe, and Streets of Rage. You can find instructions on how to load the roms in the installation guide, but there were a couple of tricky bits to figure out.

First, with the Atari games, it includes some arcade games too. I have not been able to get the arcade games to work at all, so I ended up deleting them. If you look on the Steam page for the Atari Vault, you can see which ones are Atari games and which ones are arcade games. For the Sega Classics, all of the games work, but you need to rename all of the files in the game directory (see the guide above for locations) into from .68K or .smg to .bin. This will allow the emulator to recognize the file. Otherwise, it will just not show up.

For some additional visual punch, you can also scrape meta-data for your games. Retro Pie will do this automatically for you, but it will require a lot of human intervention to help it out when it can&#8217;t find the game. The problem is that game files are not usually named correctly. For example, Missile Commander might be named misslcmdr.bin. What I did is sit there with the scraper running and my laptop right next to me to resolve conflicts. I found that if it couldn&#8217;t find the game, the easiest thing to do was look up the game in [The Games Database][6] (the site that Retro Pie uses for meta-data) and type the name of the game in exactly like it appears on the site. For example, it couldn&#8217;t find [Shinobi III][7] but if I typed in &#8220;Shinobi III: Return of the Ninja Master&#8221; then it found it nicely. This process is a little time consuming, but instead of just a list of titles, you will now have cover art, year released, number of players, and a blurb for each game. This makes the gaming experience much better.

When I put this game system out, the teens were very excited. I expected some excitement because it was new, but didn&#8217;t expect that quite a few of them were retro gaming enthusiasts. They had a great time playing the games. It was fun watching kids who have grown up with the internet and smart phones discovering Atari games and having a blast.

<img class="alignnone size-large wp-image-245" src="/wp-content/uploads/2018/01/20180111_160555-1024x576.jpg" alt="" width="688" height="387" srcset="/wp-content/uploads/2018/01/20180111_160555-1024x576.jpg 1024w, /wp-content/uploads/2018/01/20180111_160555-300x169.jpg 300w, /wp-content/uploads/2018/01/20180111_160555-768x432.jpg 768w, /wp-content/uploads/2018/01/20180111_160555.jpg 1594w" sizes="(max-width: 688px) 100vw, 688px" />

&nbsp;

&nbsp;

 [1]: https://www.amazon.com/Vilros-Raspberry-Arcade-Classic-Gamepads/dp/B077YVF5PB/
 [2]: https://retropie.org.uk/docs/First-Installation/
 [3]: https://retropie.org.uk/forum/topic/10918/where-to-legally-acquire-content-to-play-on-retropie
 [4]: http://store.steampowered.com/app/400020/
 [5]: http://store.steampowered.com/sub/102625/
 [6]: http://thegamesdb.net/
 [7]: http://thegamesdb.net/game/39628/
