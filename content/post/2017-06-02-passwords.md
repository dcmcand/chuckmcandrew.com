---
title: Passwords
author: Chuck McAndrew
type: post
date: 2017-06-02T12:00:55+00:00
url: /post/2017/06/02/passwords/
categories:
  - Privacy
  - security
  - Technology instruction

---
The National Institute of Standards and Technology is a US Government organization which does many thing including defining password standards for the government. The recently published new recommendations which overturn some previously widely recommended practices. You can read the original publication at https://pages.nist.gov/800-63-3/sp800-63-3.html. Here is a breakdown of how to set a secure password policy according to NIST.

## Favor longer passwords

NIST recommends a minimum password length of 8 characters. If you must have a maximum length, they recommend at least 64 characters. I have personally run across websites that limit the maximum number of characters. Typically, I have my password manager generate passwords that are 24 characters long composed of random characters. Running into a maximum of 12 characters means that the website is forcing me to be less secure.

Why are long passwords more secure? Math. If I have a one character long password that you know will be lowercase, you have a 1/26 chance of guessing the password. It won&#8217;t take you very long to guess it. If I add upper case, lower case, and numbers then your chances become 1/62. Better, but not hugely better. However, if I increase my password length from one digit to two digits now your chances are 1/26² or 1/676. This is only using lowercase letters.  Adding complexity  increases the difficulty of guessing your password in a linear way. If you double the number of characters that a password can contain, you double the difficulty of guessing the password. Adding length increases the difficulty exponentially. A real world example would be the difference between the following passwords:

### Password 1

j5Tp

Password 1 uses upper case and lower case letters as well as numbers. This means there are 62 possible characters (26 lowercase letters, 26 uppercase letters, and 10 numerals). To figure out how many guesses we do the following.

62 x 62 x 62 x 62 = 14,776,336

So we have a 1/14,776,336 chance of guessign this password.

### Password 2

jidmxple

Password two is 8 characters long, but only uses lower case letters. The chance of guessing this password is

26 x 26 x 26 x 26 x 26 x 26 x 26 x 26 = 208,827,064,576

Even with the lower complexity, the extra length means we go from a one in 14 million to a one in 208 billion chance of guessing the password. Of course all of this assumes a random password that can&#8217;t be cracked with a [dictionary attack][1].

## Don&#8217;t require changing passwords without reason

There have been a number of studies that have shown requiring frequent password changes results in poor passwords ([for example][2]). You should definitely change your passwords if you suspect they have been compromised, but it actually hurts security to change them simply because a set time interval has passed. Of course, password managers make  a password rotation schedule much more doable, but you still need to worry about remembering that master password.

## Check passwords against known-bad password lists

There have been a lot of data breaches in the past few years. In a lot of cases, information from the breaches has been made widely available. This includes passwords. Researches have used the data breaches to come up with lists of passwords that are very commonly used and are easy to break. Bad guys use these lists to do dictionary attacks on passwords. By making sure not to use passwords on these lists, you are taking away low hanging fruit from attackers. Ideally websites should check passwords against these lists when users register. [Here][3] is an example of such lists. Please don&#8217;t use any of these for you password. If you do, you can forgot all the math we discussed earlier. Your password will be cracked in seconds.

## Don&#8217;t use &#8220;secret&#8221; questions

Many websites will offer secret questions as a way of verifying your account if you forget your password. The problem is that many of these questions are easily guessed, found out through public information, or socially engineered. Your mother&#8217;s maiden name hardly counts as secret information. If I start talking about my first dog, you may very well tell me about yours including what his name is.  To make the situation worse, once I know your answer for one site, I can very likely reuse that information for other sites. These questions and answers are inherently insecure. Websites should not require them, but many do. The solution is to not be honest when you answer them, or even better, use a random string for the answer. Record these answers in your password manager&#8217;s notes field and think of them like a backup password. Just like your real password, you need to keep this information secure. Remember, to make these answers different for each site as well. The 2013 Adobe data breach included password hints in plain text (including many gems like &#8220;Rhymes with Assword&#8221;).

If you follow these guidelines you will be much more secure. If your password is part of a data breach, it is much less likely that your password can be cracked. Even if they do get lucky and manage to crack your password, the damage is then limited to only the site breached because you are using a unique password for each site. None of this is possible without some form of password manager. People are just really bad at remembering good passwords, and most people have dozens of online accounts. Use a password manager, use long passwords, use unique passwords, be far, far more secure.

 [1]: https://en.wikipedia.org/wiki/Dictionary_attack
 [2]: https://www.cs.unc.edu/~reiter/papers/2010/CCS.pdf
 [3]: https://github.com/danielmiessler/SecLists/tree/master/Passwords