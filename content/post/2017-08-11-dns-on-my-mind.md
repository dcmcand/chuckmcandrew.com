---
title: DNS on my mind
author: Chuck McAndrew
type: post
date: 2017-08-11T15:40:47+00:00
url: /post/2017/08/11/dns-on-my-mind/
featured_image: /wp-content/uploads/2017/08/eAwdKEC.png
categories:
  - dns
  - Home Network
  - Privacy

---
A recent email thread on the Tor relay operators email list has me thinking about DNS. DNS is like the phonebook of the internet. For example, when you go to https://techielibrarians.com, you don&#8217;t actually go there. You go to 159.203.158.3 (IPv4) or 2604:a880:400:d0::14ab:4002 (IPv6). Obviously, it is far easier to remember techielibrarians.com than a whole string of numbers. That is why we have DNS. DNS is simple in concept, but can provide some complications in practice. First, if you can&#8217;t reach your DNS server, you can&#8217;t connect to the internet unless you happen to know the ip address of the site you are trying to reach, and even then it might not work. Some servers host multiple sites from the same IP address and rely on the hostname in the request to decide which site to send back. Secondly, DNS is unencrypted, which means that anyone between you and the DNS server can see where you are going on the internet.

With this second point in mind, the recommendation of the Tor relay operators is that you operate your own DNS server to resolve addresses for your relay. This has a number of advantages. First, it actually improves response time. It does this by caching query responses. This means that the first time that someone request techielibrarians.com it has to resolve the ip. To do this, it first finds the authoritative servers for the .com tld (top level domain) and then asks the .com dns servers where to find techielibrarians.com. However, the second time a request is made, the local server already knows where techielibrarians.com is, so it just responds directly. This means that as long as techielibrarians is in the cache, it will take far less time to get to the website. For example, it takes google&#8217;s dns server 82ms to resolve techielibrarians.com, but it just takes 2 ms for my local resolver to respond.

The second benefit is also related to the cache. Because queries are cached, many of them don&#8217;t go out to the internet at all. This greatly improves privacy by reducing the queries that are exposed to snooping. Right now, my resolver has about a 35% cache hit rate. That means I have reduced my exposure by a third. This will probably improve as the cache fills up. One relay operator who runs a large, busy relay reported an 87% cache hit rate. That means that only 15% of the queries could be snooped.

Finally, because you are querying the authoritative servers or your own dns server, there is less chance of a DNS cache poisoning attack. This is where a DNS server is compromised and the cached queries are changed to return incorrect results. This can be done to serve malware, facilitate phishing attacks, etc.  Combined with using DNSSEC to validate the records, there is a much lower chance of getting malicious responses to your queries.

I liked this setup so much that I setup two DNS resolvers (you always want multiple DNS servers in case something happens to one) for my patron computers too. This directly improves both our quality of service, and their privacy. This is a win-win scenario. I used [unbound][1] which is a lightweight caching resolver. Setup was extremely quick and uncomplicated. There are lots of good tutorials online. I used [unbound&#8217;s documentation][2] for the inital setup and then followed their [instructions to optimize][3] the installation. This was very easy since the CentOS package came pre setup, so it was just a matter of adjusting my configuration file rather than starting from scratch.

I realize that not everyone has a server to set this up on, but it can even be set up on a [raspberry pi ][4] or cloud provider such as [AWS][5] or [Digital Ocean][6] if you don&#8217;t have somewhere to host it. Hosting your own DNS resolver other advantages as well. For example you can block ads with [pi-hole][7]. You can even go further and encrypt the DNS queries that do go out using [dnscrypt-proxy.][8]  There are lots of options for you and of course, you can do all this on your home network too! At my house, we no longer get ads even on our phones because of dns. This saves us bandwidth (some estimates say as much as 30%) and prevents malvertising. All in alll, well worth the effort.

 [1]: https://unbound.net/
 [2]: https://unbound.net/documentation/howto_setup.html
 [3]: https://unbound.net/documentation/howto_optimise.html
 [4]: https://blog.webernetz.net/2016/10/11/dnssec-validation-with-unbound-on-a-raspberry/
 [5]: https://aws.amazon.com/
 [6]: https://www.digitalocean.com/
 [7]: https://pi-hole.net/
 [8]: https://www.dnscrypt.org/