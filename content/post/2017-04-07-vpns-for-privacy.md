---
title: VPN’s for privacy
author: Chuck McAndrew
type: post
date: 2017-04-07T14:46:49+00:00
url: /post/2017/04/07/vpns-for-privacy/
categories:
  - Privacy
  - security
  - Technology instruction
  - VPNs

---
With [congress rolling back FCC privacy rules on ISPs][1], there has been a lot of interest in ways that you can protect yourself from snooping. One of the best, and easiest, ways to protect yourself is by using a reliable VPN. Right now, ISPs have access to everywhere you go on the web. If you are using https (and you should be), they can't see which specific web page of a site you are on, but they can tell which sites you visit, in which order, and how long you spend on them. For example, consider the following information.

<img class="alignnone wp-image-85 size-full" src="/wp-content/uploads/2017/04/isp.png" alt="" width="792" height="133" srcset="/wp-content/uploads/2017/04/isp.png 792w, /wp-content/uploads/2017/04/isp-300x50.png 300w, /wp-content/uploads/2017/04/isp-768x129.png 768w" sizes="(max-width: 792px) 100vw, 792px" />

Your ISP doesn't know what you looked at specifically on WebMD. They don't know what you posted on the pregnancy forum or what you are searching for on Amazon. By just using information that they can see, they are able to make inferences and start targeting ads to you. These ads can violate your privacy by revealing information that you don't wish to reveal. Ads can track you to every site you visit because your ISP can see every site you visit. Obviously, this isn't a good situation.

The best way to get away from this is to use the [Tor Browser][2]. The Tor Browser is a very powerful online anonymity tool which is very easy to use. Unfortunately, it does have some drawbacks. Some of the things that the Tor Browser does to make you anonymous can break some websites. Also, because the Tor network depends on donated bandwidth, it can be slower than normal browsing. This situation is far better than it once was, back it can still be an annoyance. Despite these drawbacks, it is by far the best tool we have for maintaining our privacy online.

If you want a more seemless browsing experience and are willing to accept somewhat less effective anonymity protection, a VPN can be a great choice. VPN stands for Virtual Private Network. It is a way for you to establish and encrypted connection between your computer and a trusted endpoint. This prevents traffic from being directly associated with you. It helps to prevent snooping on your connection from ISPs, but is also great for maintaining security on insecure connections, such as in airports or coffee shops.

<img class="alignnone size-full wp-image-86" src="/wp-content/uploads/2017/04/vpn.png" alt="" width="782" height="273" srcset="/wp-content/uploads/2017/04/vpn.png 782w, /wp-content/uploads/2017/04/vpn-300x105.png 300w, /wp-content/uploads/2017/04/vpn-768x268.png 768w" sizes="(max-width: 782px) 100vw, 782px" />

When using a VPN, all your ISP sees is an encrypted tunnel. All the owner of the network you are using sees is an encrypted tunnel. Amazon thinks the traffic originates from the VPN provider rather than from you. Now obviously, the VPN provider is in a position to see all of your traffic. This is why it is extremely important to choose a good VPN provider. The best providers have VPN's do not keep logs of sites that you visit. They will also have servers all over the world, and you can choose which server to connect to. For an overview of good VPN services you can look at <https://proxy.org/vpn_comparison.shtml>. Although these services do cost money, they are quite affordable. I have personally never seen a free VPN service that I would trust. Remember these are businesses and need to monetize their product somehow. If you can't see the product being sold, you very likely are the product. As Robert Heinlein said "[TANSTAAFL][3]". If you are technically inclined, you could always [host your own VPN][4], but most people will be better served using a reputable provider. Just do your research before trusting them.

Of course, VPN's by themselves are not a  panacea for privacy. If you are using your ISP's DNS servers, they will still be able to tell what sites you are going to (Hint: use the [OpenNIC][5] project's servers instead). If the website you visit doesn't use https, anyone between the VPN and the destination website could snoop the traffic. And of course, you still need to be aware of what information you are choosing to share. All of that being said, VPN's are a large step in the right direction in preventing privacy violations that should never be allowed in the first place.

 [1]: https://arstechnica.com/tech-policy/2017/04/trumps-signature-makes-it-official-isp-privacy-rules-are-dead/
 [2]: https://www.torproject.org/
 [3]: https://en.wikipedia.org/wiki/There_ain%27t_no_such_thing_as_a_free_lunch
 [4]: https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-14-04
 [5]: https://www.opennicproject.org/
