---
title: Using Let’s Encrypt to secure local services
author: Chuck McAndrew
type: post
date: 2018-08-06T23:05:12+00:00
url: /post/2018/08/06/using-lets-encrypt-to-secure-local-services/
categories:
  - dns
  - "Let's Encrypt"
  - Privacy
  - security
  - website

---
Hopefully, at this point everyone has secured all their public facing services with [HTTPS][1]. Let&#8217;s Encrypt makes this quick and easy to do (not to mention free!). What about local services that are only available on your lan though? This is tougher because normal verification methods don&#8217;t work, yet it is still important. Part of a defense in depth strategy is to always assume you are in a hostile environment, and with all the router vulnerabilities, Universal Plug and Play problems, and issues such as DNS rebinding attacks, it is not a good assumption that there are no malicious actors on your lan.

To secure your local resources there are a few things that you need.

  1. A domain name &#8211; This domain name must be a real domain that you own. For this blog I&#8217;ll use example.com.
  2. Publicly hosted DNS with a provider that Certbot Supports. DNS providers that I know have plugins for Certbot are: 
      1. [OVH DNS][2]
      2. [LuaDNS][3]
      3. [Cloudxns][4]
      4. [DNSimple][5]
      5. [NS1 dns][6]
      6. [Cloudflare][7]
      7. [DNS Made Easy][8]
      8. [Route 53][9]
      9. [Google DNS][10]
     10. [Sakura Cloud][11]
     11. [Digital Ocean][12]
     12. [Gehirn][13]
  3. A [local DNS resolver][14] that you can use to serve your internal subdomain.

Once you have these components in place, you can get started.

## Setup an internal subdomain

The first step is to setup an internal subdomain. If I own example.com, I might use local.example.com for local resources. I might host a [NextCloud][15]  instance at nextcloud.local.example.com, an internal wiki at wiki.local.example.com, and maybe a local copy of [Gitlab][16] at gitlab.local.example.com for extra geek points. For each of these services, you&#8217;ll need to create DNS records on your local DNS server so that you computers can find them. Make sure they all have static IP addresses (or static DHCP reservations which is my preferred way to do it) and create an A record for each (and an AAAA record if you use IPv6).

## Get credentials to use your DNS provider&#8217;s API

I use AWS Route53 to host my DNS. It costs $1/month, but is very good. I have been nothing but happy with their service. Instructions for this part will vary depending on what provider you use. For AWS, you need to create an IAM role that has the following permissions:

  1. route53:GetChange &#8211; all resources
  2. route53: ListHostedZones &#8211; all resources
  3. route53:ListResourceRecordSets &#8211; all resources
  4. route53:ChangeResourceRecordSets &#8211; arn of example.com

After setting up this user, click on &#8220;Create Security Credentials&#8221; and you will be given a Access Key ID and a Secret Key. You need to save these to your server under /root/.aws/credentials.

## Download and install Certbot and the plugin for your DNS provider and webserver.

In this case for me, I had to install python2-certbot, python2-certbot-apache and python2-certbot-dns-route53. I am running this on a Centos7 server. Choose your packages as needed.

## Run Certbot

for example, to run on your wiki host, you would run:

sudo certbot &#8211;installer=apache &#8211;dns-route53 -d wiki.local.example.com

This will automatically go out and create a dns record on your dns provider (assuming you got the credentials formatted correctly), verify them, and then clean up the record for you. You get a legitimate, verified, Let&#8217;s Encrypt certificate without ever exposing that server to the internet.

## Automate renewals

Add a renewal check to your root user&#8217;s crontab. This command will check twice a day it renewals are due. For extra credit, forward root&#8217;s mail to your email address and you&#8217;ll get the results of these renewals in your inbox.

sudo crontab -e

0 0,12 \* \* \* python -c &#8216;import random; import time; time.sleep(random.random() \* 3600)&#8217; && certbot renew

That&#8217;s all there is to it. Now you have secure HTTPS that browsers trust by default on local services. No need to mess around with self-signed certs or insecure connections.

&nbsp;

&nbsp;

&nbsp;

 [1]: https://techielibrarians.com/index.php/2017/04/24/the-importance-of-https/
 [2]: https://www.ovh.com/world/
 [3]: https://www.luadns.com/
 [4]: https://www.cloudxns.net/
 [5]: https://dnsimple.com/
 [6]: https://ns1.com/
 [7]: https://www.cloudflare.com/dns/
 [8]: https://dnsmadeeasy.com/
 [9]: https://aws.amazon.com/route53/
 [10]: https://cloud.google.com/dns/
 [11]: https://manual.sakura.ad.jp/cloud/appliance/dns/index.html
 [12]: https://www.digitalocean.com/
 [13]: https://www.gehirn.jp/dns/
 [14]: https://techielibrarians.com/index.php/2017/08/11/dns-on-my-mind/
 [15]: https://nextcloud.com/
 [16]: https://about.gitlab.com/