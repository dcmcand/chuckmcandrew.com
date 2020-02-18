---
title: Native IPv6 with Comcast Business and pfSense 2.3
author: Chuck McAndrew
type: post
date: 2017-06-08T22:00:10+00:00
url: /post/2017/06/08/native-ipv6-with-comcast-business-and-pfsense-2-3/
categories:
  - freebsd
  - Home Network
  - pfSense
  - Uncategorized
  - workflow

---
Our ISP, Comcast, has recently rolled out native IPv6 support in our area, so this week I decided to set up our library to be dual stack. The first thing that had to happen was getting a Comcast tech to change out our SMC modem for a Netgear modem. According to Comcast tech support, the SMC doesn't support IPv6.

Once the modem was switched out, I went in and turned off every feature I could in the modem. No DHCP, no firewall, etc. This is because we use a pfSense firewall in our library. Apparently you can't do a true bridge mode with Comcast, but this is the best approximation. Call it a fake bridge mode.

Next to setup IPv6 I used the following settings. I enabled User defined prefix, but left everything default under it. I also enabled DHCPv6 and Rapid Commit. I left the rest unchecked. I can't tell you exactly what each option does, because according to Comcast tech support there is no documentation to consult on this modem. Frustrating! However, after much trial and error and lost internet connection, these settings worked for me. Hit apply and your modem will reboot. Then move to your firewall.

<img class="alignnone size-full wp-image-123" src="/wp-content/uploads/2017/06/comcast.png" alt="" width="727" height="555" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/comcast.png 727w, https://techielibrarians.com/wp-content/uploads/2017/06/comcast-300x229.png 300w" sizes="(max-width: 727px) 100vw, 727px" />

On your firewall go to your Wan interface (which I creatively called "Comcast")

Under the IPv6 Configuration setting select DHCPv6.

<img class="alignnone size-large wp-image-124" src="/wp-content/uploads/2017/06/pfsense1-1024x497.png" alt="" width="688" height="334" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/pfsense1-1024x497.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/pfsense1-300x145.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/pfsense1-768x372.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/pfsense1.png 1194w" sizes="(max-width: 688px) 100vw, 688px" />

Below on the same page, under the DHCP client configuration select the following options. There are is one gotcha here. Apparently, their netgear modem ignores the requested delegation size if it is larger than a /60 and will only give you a /60 or a /64. Comcast tells you they give you a /56, but that resulted in failure, so request a /60 and everything will be happy. This does limit you to 16 subnets, but that was plenty for me.

<img class="alignnone size-large wp-image-125" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-19-55-1024x432.png" alt="" width="688" height="290" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-19-55-1024x432.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-19-55-300x127.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-19-55-768x324.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-19-55.png 1147w" sizes="(max-width: 688px) 100vw, 688px" />

Next move on to your LAN interface, in this case call LebStaff. Under IPv6 Configuration Type select "Track Interface"

<img class="alignnone size-large wp-image-126" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-36-1024x514.png" alt="" width="688" height="345" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-36-1024x514.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-36-300x151.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-36-768x386.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-36.png 1143w" sizes="(max-width: 688px) 100vw, 688px" />

Below on the same page select your WAN interface as the IPv6 Interface and set the IPv6 prefix ID. This is a hex digit (0-9 or a-f for a total of 16 options) that will identify your /64 subnet.

<img class="alignnone size-large wp-image-127" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-49-1024x209.png" alt="" width="688" height="140" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-49-1024x209.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-49-300x61.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-49-768x156.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-20-49.png 1149w" sizes="(max-width: 688px) 100vw, 688px" />

Do this for each LAN interface you have. Next go under the Services tab and select DHCPv6 Server/RA

You can select whatever you wish under this section. I chose the leave the DHCPv6 server off and set my router announcement to unmanaged. One of the cool features of IPv6 is that clients can configure their own IP addresses. Using unmanaged for your router advertisement tells clients to do this. I also selected high for my router priority. There shouldn't be any other routers on this subnet, but if there were I wouldn't want them overriding this one.

<img class="alignnone size-large wp-image-128" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-21-31-1024x220.png" alt="" width="688" height="148" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-21-31-1024x220.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-21-31-300x64.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-21-31-768x165.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-21-31.png 1184w" sizes="(max-width: 688px) 100vw, 688px" />

Next go into your firewall rules and add a rule to pass IPv6 traffic on all of your LAN interfaces (but not on your WAN interface). If you miss this step you will be very frustrated when you can't connect to any IPv6 resources.

<img class="alignnone size-large wp-image-134" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-17-16-33-1024x37.png" alt="" width="688" height="25" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-17-16-33-1024x37.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-17-16-33-300x11.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-17-16-33-768x28.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-17-16-33.png 1164w" sizes="(max-width: 688px) 100vw, 688px" />

The next step is to go to the routing menu under the system tab. Edit the automatically created DHCPv6 gateway and set the monitor IP address to an IPv6 only website. In this case I used ipv6.google.com. If you don't do this step, your gateway will always show as down even when it is up. The reason for this is that the Netgear modem doesn't respond to pings, so when pfSense tries to ping the gateway, it gets no response and reports the gateway as down. ipv6.google.com does respond to pings, but is only accessible over IPv6, so if the IPv6 gateway is in fact down, ipv6.google.com will not be available.

<img class="alignnone size-large wp-image-130" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-36-1024x799.png" alt="" width="688" height="537" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-36-1024x799.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-36-300x234.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-36-768x599.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-36.png 1153w" sizes="(max-width: 688px) 100vw, 688px" />

Finally reboot your router, when it comes back up, you should see your new gateway online and that all of your lan interfaces have IPv6 addresses in the subnet that you specified. Although I have blurred my IP's, you can see what it will look like. The short blurs are IPv4 and the long blurs are IPv6. One quick note, I have found that I have to go into my WAN interface and click save after rebooting my router. If I don't do this, I won't have internet connectivity on any of my lan interfaces (though I will be able to ping out from the router). I don't know if this is a Comcast modem issue or a firewall issue, but I didn't have this issue until they changed out my modem, so I have my suspicions.

<img class="alignnone size-full wp-image-129" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-03.png" alt="" width="559" height="440" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-03.png 559w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-14-22-03-300x236.png 300w" sizes="(max-width: 559px) 100vw, 559px" />

Now go to http://test-ipv6.com/ and enjoy the native IPv6 goodness.

<img class="alignnone size-large wp-image-131" src="/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21-1024x424.png" alt="" width="688" height="285" srcset="https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21-1024x424.png 1024w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21-300x124.png 300w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21-768x318.png 768w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21-1600x662.png 1600w, https://techielibrarians.com/wp-content/uploads/2017/06/Screenshot-from-2017-06-08-15-11-21.png 1663w" sizes="(max-width: 688px) 100vw, 688px" />
