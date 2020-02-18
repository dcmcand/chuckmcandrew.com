---
title: Setting up this website
author: Chuck McAndrew
type: post
date: 2017-02-02T22:28:34+00:00
url: /post/2017/02/02/setting-up-this-website/
featured_image: /wp-content/uploads/2017/02/beastie-e1486074505948.jpg
image: /wp-content/uploads/2017/02/beastie-e1486074505948.jpg
categories:
  - freebsd
  - "Let's Encrypt"
  - security
  - website

---
I thought it might be appropriate to talk about the setup for this website as my first post.  I used setting up this blog to try out some things that I have heard about for a while and wanted to try. The basics:

This website runs on a FAMP (FreeBSD, Apache, Mysql, PHP) stack. Most web servers today run on LAMP stacks running some flavor of Linux as their operating system.  Up until now, every server I have set up has been a Linux server.  CentOS is my go to distribution, and works great. Debian is also a very solid choice that I have used on occasion. However, FreeBSD is something that I wanted to try out because it has a reputation for being super stable and very secure.

To begin with, I set up a new droplet on Digital Ocean.  I have been very pleased with using Digital Ocean for our web hosting.  They make spinning up new servers super easy, and have a nice assortment of operating systems you can have installed.  They also offer quite a few &#8220;one-click&#8221; installs.  If I wanted a bone stock version of Ubuntu Server with WordPress installed, I could have had it in less than a minute. In fact, earlier today, I needed a quick way to check a SQL dump to make sure it worked for us.  I used Digital Ocean to spin up a server with phpMyAdmin preinstalled. I imported the SQL dump, checked it, then deleted the server.  This took less than 5 minutes. It cost me $0.007 for this.  Well worth it as a time saver.

Once I had my server, I did the basics that I do on all servers. Disable root login (this was actually already done on the FreeBSD droplet), disable ssh password authentication (Digital Ocean let&#8217;s you pre-add a ssh key when you create the server), turn on the firewall, update everything, etc. Once I had that done, I set up the web server within a [jail][1] of FreeBSD 11.  A jail is a way to isolate a service from the core files of their host.  This means that even if this website is compromised, I can feel pretty secure that the host itself is safe.  This led to some interesting challenges with networking which I will talk about later. I used a tool called [iocage][2]  to setup the jail for me.  It was quite easy to work with this tool.  I used what is called a &#8220;base&#8221; jail.  This means that all the system files in the jail are mounted read only from a base system.  That means if I update the base, all jails built off of it get updated.  That is pretty cool.

In some ways, jails are quite a bit like virtual machines. They can have their own IP addresses, and you can set them up to be reachable from the internet at large.  In this case, I wanted this blog reachable by both IPv4 and IPv6.  IPv6 was easy to set up.  Because there are so many addresses available, getting a chunk of addresses is easy.  This gave me a publicly routable IP address that I could assign to my jail.  However, IPv4 has a limited number of addresses available, so when you get a server on [Digital Ocean][3] (or on any web hosting) you only get 1 publicly routable IPv4 address.  Since I needed this address to access and manage my server, I couldn&#8217;t assign it to my jail. After some trial and error, the answer turned out to be to assign my jail a private IPv4 address and use the firewall on the server to route ports 80 and 443 (http and https) to my jail internally. When I tried this at first, it killed IPv6 access.  I had to go back and make sure the firewall was only forwarding IPv4 and then it worked fine.

Once I had the networking setup I was able to use iocage to access the command line from within my jail and [setup my FAMP stack][4] and [install WordPress on FreeBSD][5].  These tutorials were written for FreeBSD 10.1, but they worked fine for FreeBSD 11 also. The final piece of the puzzle was securing the site using TLS. For this, the obvious answer was [Let&#8217;s Encrypt][6]. I installed the [Let&#8217;s Encrypt client (certbot)][7], followed the instructions and soon had a shiny new certificate. I pointed my web server&#8217;s configuration to it and tested it on [SSL labs][8]. It got an A with the out of the box configuration.  This is a testiment to FreeBSD&#8217;s security mindset.  Not only is mod_ssl (the module that allows https) installed automatically when you install the Apache webserver, it is installed with secure defaults.  This was a nice surprise.  I normally have to change some configurations to get an A. This is a good indicator that the FreeBSD project takes security seriously.

All in all, this setup took 2 days of working on it in my spare time.  This is much slower than I can get a Linux server spun up, but it was a great learning experience, and I am very pleased with FreeBSD so far.  I still have a lot to learn about the system, but it is off to a good start.  I still need to figure out how to make update more automated and automate the renewal of my Let&#8217;s Encrypt certificate, but for now I have a web server that is secure, and running well.  I am a happy librarian.

 [1]: https://www.freebsd.org/doc/en/books/handbook/book.html#jails
 [2]: https://github.com/iocage/iocage
 [3]: https://www.digitalocean.com/
 [4]: https://www.digitalocean.com/community/tutorials/how-to-install-an-apache-mysql-and-php-famp-stack-on-freebsd-10-1
 [5]: https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-apache-on-freebsd-10-1
 [6]: https://letsencrypt.org/
 [7]: https://certbot.eff.org/
 [8]: https://www.ssllabs.com/ssltest/analyze.html?d=techblog.leblibrary.com
