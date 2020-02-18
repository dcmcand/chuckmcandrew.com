---
title: The Importance of HTTPS
author: Chuck McAndrew
type: post
date: 2017-04-24T17:14:21+00:00
url: /post/2017/04/24/the-importance-of-https/
categories:
  - "Let's Encrypt"
  - Privacy
  - security
  - Uncategorized
  - website

---
People have been preaching about the importance of https for a long time now. However, it seems that many libraries and library vendors haven't yet got the message. I decided to add my voice to the mix to argue for the importance of https from a public library perspective. We need to ensure that our websites, library catalogs, and ILS's are all running on https, and we need encourage vendors to use https for all their services as well.

So what is https? The [Hyper Text Transfer Protocol ][1](http) is a protocol that is used to deliver all of the web content you see today. When you type in a website's address, it starts with http://. This tells your browser to use this protocol to interpret the results. There are other protocols that computers use for other things, such as the File Transfer Protocol (ftp) which is used for uploading and downloading files, but for rendering webpages we use http. Unfortunately http does not include many security features for privacy and authentication which are critical to using the modern internet. [Https][2] addresses those concerns. It provides a degree of privacy by encrypting your connection and allows for authentication to ensure that you really are connected to who you think you are. Both of these functions are important, but for different reasons.

Encryption means that anyone snooping can't see what you are doing on a site. They can still see that you are connected to a site, but not what page you're on. They can tell how long you are spending there, but not read anything that you send to the site. Obviously, this means they can still discover a lot of information, but it does provide critical privacy. Think of some things that you send to a website which you might want to be private. Maybe you're on Amazon, and you want to buy some shoes. You may not care that someone snooping can see that you're shoe shopping (they wouldn't be able to see that with https btw), but you might really not want them to be able to see your credit card number, or your username and password, or maybe even your shipping address. To put it simply, any site with any kind of login pages or that handles any kind of sensitive information should be using https. This is not optional. However, https is important even for sites that you don't login to. This is because of the second property of https. That is authentication.

Authentication tells you that the website that you are connected to is actually the website you intended to connect to. This keeps malicious actors from pretending to be a site to steal your information, or give you false or bad information. Imagine a scenario where someone wants to keep a people from voting, so they impersonate a government website to put up wrong times or locations for voting. Or someone wants your gmail login so they send you a link to a site that looks just like gmail and asks you to login. It will probably even say gmail in the address bar, but in fact it is their website and when you put in your password, you just sent it to them rather than Google. These scenarios can be prevented by https. Your web browser will warn you if the site that you are on doesn't match the site that the certificate was issued to as long as you are connected using https. If it is a simple http connection, there is no authentication at all.

If you operate a website, please make sure that it uses https by default. [Let's Encrypt][3] is a free, automated certificate authority. This means that you can get certificates issued free of charge, and frequently Let's Encrypt can even automatically install them for you. After installing your certificate, test your https setup at [ssl labs][4]. This will make sure that everything is setup properly and let you know of any vulnerabilities that you can correct. Here is a recent test of this site:

<img class="alignnone size-large wp-image-94" src="/wp-content/uploads/2017/04/Screenshot-from-2017-04-24-12-48-11-1024x529.png" alt="" width="688" height="355" srcset="/wp-content/uploads/2017/04/Screenshot-from-2017-04-24-12-48-11-1024x529.png 1024w, /wp-content/uploads/2017/04/Screenshot-from-2017-04-24-12-48-11-300x155.png 300w, /wp-content/uploads/2017/04/Screenshot-from-2017-04-24-12-48-11-768x397.png 768w, /wp-content/uploads/2017/04/Screenshot-from-2017-04-24-12-48-11.png 1088w" sizes="(max-width: 688px) 100vw, 688px" />

If you use services from vendors in your library, make sure they are connecting through https. If you don't, you are putting your patron's privacy at risk. If the vendor doesn't offer https, talk to them. Stress its importance and ask when they are planning on implementing it. Vendors to respond to feedback from their customers about what is important to them. If they aren't responsive, consider moving to a vendor that will take security and privacy more seriously.

Finally in your own browsing, and when teaching patron's about internet security, pay attention to the little green lock that says a site is secure. Using a browser plugin called [https everywhere ][5]can force https connections if one is available. You can even set it to only allow encrypted connections. This which will quickly let you know who isn't using https! This is a plugin that I install on all my computers and on all my patron computers.

Ensuring that web browsers have encryption and authentication will not solve all the security problems on the internet, but it takes care of a lot of the low hanging fruit. It is our responsibility as librarians to help protect our patron's privacy, but it is also plain common sense to insist on encryption of the internet today.

 [1]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
 [2]: https://en.wikipedia.org/wiki/HTTPS
 [3]: https://letsencrypt.org/
 [4]: https://www.ssllabs.com/ssltest/
 [5]: https://www.eff.org/https-everywhere
