---
title: Digital Signage on the Cheap
author: Chuck McAndrew
type: post
date: 2017-02-08T20:39:42+00:00
url: /post/2017/02/08/digital-signage-on-the-cheap/
categories:
  - Chrome OS
  - Digital Signage
  - Google Apps

---
Recently, I was tasked with coming up with a digital signage solution for our library.  This was for interior displays rather than outdoor signage.  We had a few hundred dollars available for this project, but nowhere near enough to buy a commercial solution. Originally, we wanted to run a slideshow for Veteran&#8217;s Day, but planned to change it into general purpose advertising for library events after Veteran&#8217;s Day was past. Ideally I wanted something that would be very simple to keep up to date.  Adding more things for staff to remember isn&#8217;t a great plan, and nothing looks worse than having out of date content.

Our website (https://leblibrary.com)  already has rotating slideshow on it. Staff members have to make these  slides, but the website handles taking down slides for events which have passed automatically and queuing up the slides for upcoming events. So I created a custom page which only had that slide content on it, presized to look good on a 16&#215;9 1080p display. You can see this page at <https://www.leblibrary.com/fullscreen>. This meant I just needed to point whatever solution we put in place at that URL and it would display up to date information about library events. Best of all, staff didn&#8217;t have a new place to update. The same workflow that they are already familiar with works for the digital signage now as well.  We still have the option to do other slideshows for special events, such as Veteran&#8217;s Day, but this is great for day to day operations.

For a display, we just went with whatever was inexpensive and well rated on Amazon. This cost about $200 plus $24 for a wall mount. Next, we needed something to power it. There are lots of options here, but we decided to go with a chromebit (https://shop.promevo.com/index.php/chromebit/asus-chromebit-signage-stick-black-2329.html). This $85 chrome device is the size of a king sized snickers bar and plugs directly into the HDMI input on the tv. We also paid a $30 license fee to manage it through our Google domain. If you have a Google domain for your library, this is great as it allows centralized management of all your chrome devices.

Under the Chrome management -> device settings menu within the Google Admin console, you can set the Chromebit to run a kiosk app. Using the directions located at <https://support.google.com/chrome/a/answer/6180529?hl=en> let&#8217;s you setup the app to go to whatever URL you point it to. It starts automatically in full screen when the device is powered up. This even allows scheduling different displays for different times or dates. This means that you can set it to display your Veteran&#8217;s Day slideshow through Veteran&#8217;s Day and then automatically revert to your website after the holiday.

So that is our solution. Digital signage that keeps itself up to date for around $350. We have been very happy with this system and will likely be expanding the number of digital signs we have in the future.