---
title: Docker fun!
author: Chuck McAndrew
type: post
date: 2018-03-29T14:24:05+00:00
url: /post/2018/03/29/docker-fun/
categories:
  - Uncategorized

---
In the past two months, I have attended the Public Library Association&#8217;s annual conference, Code4Lib 2018, and my wife&#8217;s grandmother turned 100. It has been a busy couple of months. Code4lib especially filled my head with lots of new ideas which I will right about more over the coming weeks.

On the first day of Code4lib we had half day workshops. The first workshop that I attended was on Docker and virtual machines with Ed Hill. This was a great session. I am pretty familiar with VM&#8217;s and use them a lot in my library. However, if you aren&#8217;t, [Vagrant][1] is a great way to get started trying them. I was mostly interested in [Docker][2]. Docker is  a platform for building and running lightweight containers. These containers have only the processes needed to run the application in them and nothing else. Even better, because they have all the dependencies packaged, then run the same on my laptop, my local server, or [AWS&#8217;s Elastic Container Service. ][3]I have been loving using Docker and have started moving lots of my applications to it.

When I came to the Lebanon Public Libraries, they had everything hosted on Bluehost, and everything running on a single VPS (Virtual Private Server). This was a simple and cheap setup, but not ideal for security. When I moved things to Digital Ocean, I split our web presence in two. One VPS for our Intranet and staff facing applications and one for public facing applications. This was better, but still not ideal. [Techsoup&#8217;s AWS credits][4] mean that I can now run each application completely on its own. This is ideal because it means that if something is compromised, it doesn&#8217;t affect anything else.

There have been some challenges learning a new technology, and some more dockerizing older php applications, but overall it has been a ton of fun. I highly recommend that people check out Docker if they haven&#8217;t yet. Instead of spinning up a whole VM that will be 8 or more GB to run a single application, you can have an 150MB run the same application.

 [1]: https://www.vagrantup.com/
 [2]: https://www.docker.com/
 [3]: https://aws.amazon.com/ecs/
 [4]: https://www.techsoup.org/amazon-web-services