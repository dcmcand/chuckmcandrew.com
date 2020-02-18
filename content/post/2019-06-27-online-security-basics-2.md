---
title: Online Security Basics 2
author: Chuck McAndrew
type: post
date: 2019-06-27T16:47:05+00:00
url: /post/2019/06/27/online-security-basics-2/
categories:
  - security
  - Technology instruction
tags:
  - online security basics

---
This is part 2 of 10 of a series of relatively short posts that focus on things that everyone should think about to be safe when using computers. This is based on a class that I teach which can be found at <a rel="noreferrer noopener" href="https://chuckmcandrew.com/class/onlinesecuritybasics/" target="_blank">https://chuckmcandrew.com/class/onlinesecuritybasics/</a>. Feel free to use the class as is, or fork it on Github and make it your own.

## If you can remember all of your passwords, you are doing it wrong

<a rel="noreferrer noopener" aria-label="LassPass (opens in a new tab)" href="https://www.lastpass.com/" target="_blank">LassPass</a> estimates that 85% of account compromises are because of poor passwords. You shouldn&#8217;t feel guilty about having poor passwords though. The problem isn&#8217;t you, it is the password system. Human beings are not set up to remember strong unique passwords for each account we have (especially not now, when we have so many accounts). Instead, we end up engaging in poor practices such as reusing passwords, or using easy to figure out passwords. To top it all off, humans are very bad at randomness. This means that even if we do try to create good passwords, we aren&#8217;t very good at it.

Every account should have strong, unique password. A strong password can protect your account even if the company that the account is with gets hacked. A unique password means that you only need to change one password if the company does get hacked. Want to know if your information has been in a (known) data breach? Go to <a rel="noreferrer noopener" aria-label="Have I Been Pwned (opens in a new tab)" href="https://haveibeenpwned.com/" target="_blank">Have I Been Pwned</a> to see. It is important to note that these are only known data breaches. So if you aren&#8217;t on there, that doesn&#8217;t mean that your information is safe, but if you are your information has definitely been compromised. As a bonus, you can sign up for notifications in case your information shows up in the future.

Credential stuffing attacks use take compromised passwords and email/username combinations and try them on a bunch (top 10,000 websites is not uncommon) popular websites. If you reuse passwords you reuse passwords and one account gets compromised, you can count on other accounts that use the same password getting compromised too.

Password Managers are the best way to deal with these problems. They keep your passwords for you, so that you only need to remember one master password. As a bonus, they will generate secure passwords for you too, so you don&#8217;t need to try to come up with something that is random and unique. They take a little getting used to, but once you have incorporated a password manager into your online life, you will wonder how you ever did without. 

For the master password, I recommend using a passphrase rather than a password. A passphrase takes 3-5 (or more if you really want security) random words and strings them together. This makes it much easier for humans to remember, but is hard for a computer to crack. To guarantee randomness, I recommend using diceware to generate your passphrase. You can find an online version at <https://www.rempe.us/diceware/#eff> or directions for an offline version using a set of dice (hence the name) and a word list at <a rel="noreferrer noopener" aria-label=" (opens in a new tab)" href="http://world.std.com/~reinhold/diceware.html" target="_blank">http://world.std.com/~reinhold/diceware.html</a>.

Of course, a password manager needs to be absolutely trustworthy. Some of the better known ones are:

  * <a rel="noreferrer noopener" href="https://www.lastpass.com/" target="_blank">LastPass</a>
  * <a rel="noreferrer noopener" href="https://bitwarden.com/" target="_blank">Bitwarden</a>
  * <a rel="noreferrer noopener" href="https://keepass.info/" target="_blank">KeePass</a>
  * <a rel="noreferrer noopener" href="https://1password.com/" target="_blank">1Password</a>

You should look into whichever password manager you decide on carefully, but please do decide on one. Until we come up with a better solution than passwords, using a password manager is the only good way to make sure your accounts are secure.