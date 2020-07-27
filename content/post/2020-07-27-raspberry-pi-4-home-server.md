---
title: "Raspberry Pi 4 Home Server"
date: 2020-07-27T09:42:57-04:00
type: post
author: Chuck McAndrew
url: /post/2020/07/27/raspberry-pi-4-home-server/
categories:
  - Self Hosted
  - Technology instruction
tags:
  - homelab
  - selfhosted
  - raspberrypi
draft: false
---
I have been interested in setting up a home server for a while, and we have some other patrons who are interested in this too. I figured with the whole pandemic things, and working from home, this would be a good excuse. 

To start with, I ordered a Raspberry Pi 4 with 8GB of ram. This should have plenty of oomph for the things I want to do while still being silent and power efficient. Both are important considerations when this will be sitting behind our TV. 

I have not decided all I want to do with it yet, but the first thing I want to do is get Docker installed, and deploy JellyFin as a media server. I have an external harddrive that I have ripped a lot of my DVDs too that I will plug into the pi. This will allow us to watch our movies from any device as long as we are on the same network. After I get that up and running, I want to set up traefik as a reverse proxy so I don't have to add port numbers to my url and can more easily add TLS using lets encrypt.


For an operating system, I went with Ubuntu 20.04 LTS. With it being a LTS, I shouldn't have to change for 5 years which is nice. Most projects that have Linux support seem to explicitly support Ubuntu. Things are far more hit or miss with other distributions, so even though I tend to prefer CentOS/Fedora, I went with Ubuntu in this case. Ubuntu has a nice preinstalled image that you just download and flash, no installing the OS needed, so getting up and running was quick and easy. After flashing the image I simply plugged in the RPI and looked on my router for the IP. SSH came turned on, so I was able to ssh into the Pi with no issues. I assigned a static DHCP reservation to make things easier for my future self, and was off to the races.
