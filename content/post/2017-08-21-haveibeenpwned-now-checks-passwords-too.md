---
title: haveibeenpwned now checks passwords too
author: Chuck McAndrew
type: post
date: 2017-08-21T23:39:24+00:00
url: /post/2017/08/21/haveibeenpwned-now-checks-passwords-too/
categories:
  - Privacy
  - security
  - Uncategorized

---
There is a great tool called [haveibeenpwned][1] put out by [Troy Hunt][2]. You can enter an email address or username into this website, and it will tell you if it has been involved in a data breach. This is great so that you can quickly change your password for a compromised account. Troy now has a service that will [check passwords][3] against data breaches as well. If you don&#8217;t want to put your password into a random third-party website, you can put in a sha1 hash of your password instead or you can download the entire 5.3GB file with more than 3 million password hashes in it and check the sha1 hash or your password on your own computer.

So what if your password is on the list? Well, it doesn&#8217;t necessarily mean that your account was cracked (other people might come up with the same password that you do), but it does mean that you should change that password immediately because hackers may use it in a brute force attempt now that it is known. The fact that your password doesn&#8217;t show up in his list also does not mean that an account was never breached, it just means that he doesn&#8217;t have that data. Absence of evidence is not evidence of absence. Not all hackers helpfully supply Troy with their stolen data.

If you want to be alerted if something happens, you can subscribe to haveibeenpwned to get alerts if your email address shows up in future data breaches. If you control your libraries domain you can even get alerts for the entire domain. This is a great way to be proactive about security. You will be able to warn your fellow employees if their work emails are compromised and help keep your library safer.

This brings to mind one critical point though. If you know an account is compromised, you have to change the password on every account that uses the same password. A credential stuffing attack is where a hacker sends a known username/password pair to all kinds of web services hoping for a hit. It allows them to compromise many more accounts by using the spray and pray approach. Containing the damage of a compromised account is relatively easy if you have a strong, unique password for every account (which you will if you use a [password manager][4]), but can be a nightmare if you reuse passwords across multiple accounts. Also know that strong passwords are much less likely to be cracked even if the encrypted version is stolen. So [setting good passwords][5] is very important. In the end, if you can remember all of your passwords, you aren&#8217;t doing it right. You are either reusing passwords, using weak passwords, or most likely both.

 [1]: https://haveibeenpwned.com/
 [2]: https://www.troyhunt.com/
 [3]: https://haveibeenpwned.com/Passwords
 [4]: https://techielibrarians.com/index.php/2017/05/12/keepass/
 [5]: https://techielibrarians.com/index.php/2017/06/02/passwords/