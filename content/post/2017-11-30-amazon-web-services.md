---
title: Amazon Web Services
author: Chuck McAndrew
type: post
date: 2017-11-30T16:42:38+00:00
url: /post/2017/11/30/amazon-web-services/
categories:
  - "Let's Encrypt"
  - Uncategorized
  - website

---
Notice anything different about this site? Hopefully the answer is no. My library is transitioning from Digital Ocean to Amazon Web Services for our web presence and this site is our test case. We were very happy with Digital Ocean as a host, but Tech Soup offers [$2000 in AWS credit][1] for $175 (or $80 if you belong to their [Boost][2] program). We had been averaging somewhere around $30/month for Digital Ocean, so if we assume that Amazon is close on their pricing (which may or may not be a justified assumption), we stand to save $185 just from making that switch. However, keep in mind that we don&#8217;t just get equivalent web hosting for less money, we get $2000 in credit that is good for 12 months. That opens the door for us to expand our web services at no cost. I am not sure what this will look like yet. I am still trying to wrap my head around the core services that AWS offers (and boy, there is a lot to AWS), but I am excited by the possibilities.

Maybe we will move our shared drive to the cloud and make it accessible through something like [NextCloud ][3]so that our staff can access files from anywhere. Maybe we will move our backup services to AWS so that our backups aren&#8217;t in physical danger. Maybe we will host a number of geographically distributed vpn servers allowing our patrons to connect to the internet without their ISP&#8217;s snooping on them. Maybe we will make our whole web infrastructure auto scaling, geographically redundant and highly available. Maybe we will use them exactly like we have been using Digital Ocean, but at half the price thanks to Tech Soup. I am not sure yet, but there are some neat things that I could do.

For this website, I decided to keep things simple (remember I am still learning). I have an [ec2][4] instance as my webserver connecting to an [RDS][5] instance for my database. Separating my database onto a different host is something that I have wanted to do for a while and this was a good chance. This increases my flexibility as far as web hosts and backups among other things. The procedure to transfer my website was not terribly difficult, but it did have a couple of things to pay attention to.

  1. Setup your RDS instance and ec2 instance &#8211; Amazon has lots of tutorials. Before I transferred anything I went through a couple of their tutorials such as [Deploying a wordpress site][6]. Although I didn&#8217;t choose to do this on Elastic Beanstalk like the tutorial suggests, going through the tutorial first got me acquainted with important concepts like security groups.
  2. Backup your database from the old host and transfer it to your new RDS instance &#8211; I basically followed [this][7] guide to transfer my database. Since I already had my ec2 instance that I was going to use for my webserver up, I was able to log into it and use it to transfer the data to my new host.
  3. Transfer your website files to the new host &#8211; For this step, I just made a zip of all my website files from the old host and downloaded it. I then uploaded them to my new host, unzipped them and moved them to the proper place on the new host. Where the proper place is depends on which webserver and operating system you use. In my case, using Apache and Centos 7 that is /var/www/html/
  4. Setup the database connection. Since we are using a external database now, I had to edit my wp-config file and add the new database connection information. I also always leave selinux enabled so I had to set httpd\_can\_network\_connect and httpd\_unified to 1 using the sebool command. This allows the webserver to make outside connections and allows wordpress to auto update.
  5. Activate IPv6 for your default VPC &#8211; This will allow IPv6 Connections to your web server. Again, AWS has a [guide][8] for this. Basically, you request an IPv6 delegation (you get a /56) and you assign subnets (/64) to each of your VPC subnets. This allows you to assign an IPv6 address to your ec2 instance. Under your routing table, make sure that you have added ::/0 to your internet gateway to allow IPv6 to be publicly routed. Finally, make sure IPv6 is enabled on your ec2 instance&#8217;s operating system. In my case it wasn&#8217;t and it drove me a little crazy figuring out why I couldn&#8217;t reach my web server over IPv6.
  6. Change your DNS to point at your new webserver &#8211; After you have verified that your new webserver is functional, point your dns to the new webserver and wait for this to propagate.
  7. Use [Certbot][9] (Let&#8217;s Encrypt) to generate new SSL certs &#8211; Once DNS is pointing to your new server you can run certbot to generate ssl certificates for your site. It will ask you if you want to redirect all traffic to https. Unless you have a compelling reason not to, you should say yes. Make sure to add a cron job to run certbot renew once or twice a day. This will ensure that your certs never expire. It won&#8217;t actually renew them unless they need it though.

I wouldn&#8217;t call this a simple transition. I spent a couple of days getting familiar with AWS&#8217;s jargon and running through tutorials before making this transition. I will say that Amazon has done a good job with having lots of documentation so you can do all this learning on your own. As I learn more, I should be able to do cooler stuff that really leverages the advantages of a cloud environment.

&nbsp;

 [1]: http://www.techsoup.org/amazon-web-services
 [2]: http://www.techsoup.org/boost
 [3]: https://nextcloud.com/
 [4]: https://aws.amazon.com/ec2/
 [5]: https://aws.amazon.com/rds/
 [6]: https://aws.amazon.com/getting-started/projects/build-wordpress-website/?c_4
 [7]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.NonRDSRepl.html
 [8]: https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-migrate-ipv6.html
 [9]: https://certbot.eff.org/