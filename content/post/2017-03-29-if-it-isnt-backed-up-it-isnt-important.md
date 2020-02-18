---
title: If it isn’t backed up, it isn’t important.
author: Chuck McAndrew
type: post
date: 2017-03-29T16:50:00+00:00
url: /post/2017/03/29/if-it-isnt-backed-up-it-isnt-important/
categories:
  - backups
  - freenas
  - security
  - Technology instruction
  - Uncategorized
  - workflow

---
Backups are incredibly important today, yet are often overlooked. Good backups can protect you against hardware failures, carelessly deleting files, and even ransomware. If you don&#8217;t have backups of your data, then you don&#8217;t care about your data. It is as simple as that. Hardware dies at the most inconvenient times. Ransomware is a fact of life these days. A careless click can ruin your whole day. When I was first setting up our current infrastructure at the Lebanon Public Libraries, I accidentally deleted our entire shared drive. Setting up backups was on my todo list, but wasn&#8217;t done yet. Big panic moment there. I was able to recover the files with no data loss, but not without a lot of effort and stress. I immediately shutdown access to the share so that none of the disk space would get overwritten (side note: deleting a file doesn&#8217;t actually delete anything except the pointer that says the file is there. The actual data stays there until something overwrites it. If you need to securely delete a drive, use something like [DBAN][1] which securely overwrites the disk to prevent recovery of deleted files). Using an undelete utility, I was able to find and undelete all the files. It would have been far, far better to have backups in place to begin with. I can tell you that backups moved up to the top of my todo list immediately after that!

Ransomware is an increasingly common attack. Malicious software encrypts your files and threatens to delete the encryption key unless a ransom is paid. We have seen [libraries][2], [hospitals][3], and [businesses][4] all attacked by ransomeware. There are many things you can do to mitigate the threat of ransomware, but only one thing you can do after a successful attack unless you want to pay the ransom. That is restore your files from backups. If you have good backups, you can restore your files and go about your business (after making sure the infection is cleaned out of course). Otherwise, you are faced with the two bad options. Either lose your data or pay criminals.

Of course simply having backups isn&#8217;t enough. You need to make sure you can restore them as well.. We have seen lots of examples of backups gone wrong. [Gitlab recently lost customer data][5] because they weren&#8217;t testing their backups. In this case, they had multiple backup strategies, but they never verified them and all of their strategies failed them. This is effectively the same as not having backups. As backup guru Dan Langille says &#8220;Backups are worthless, Restores are priceless&#8221;. Testing your backups regularly should be an integral part of your backup strategy.

## Principles to Follow

The **LOCKSS principle** says that Lots Of Copies Keeps Stuff Safe. This is the basic idea behind backups. You are making copies of your files that can be restored if something happens to the original. This goes hand in hand with another backup rule. It is known as the **3,2,1 rule**. It says that you should always have at least 3 copies of important data, stored on at least 2 different computers, with at least 1 copy being off site. This follows the LOCKSS principle by ensuring you have 3 copies of your data and protects you against hardware failure and natural disaster by having the data on separate computers at separate locations. If you follow this rule, your data will be safe.

## What to Backup

Deciding what to backup will depend on your individual situation. At the Lebanon Public Libraries, we don&#8217;t backup individual computers. We have a shared drive that we backup and our website and intranet are backed up. I&#8217;ll go into more detail about how we do our backups below. The basic rule is to look at what information you have and where it is stored. If losing that data would represent a significant inconvenience it should be backed up. That is why we backup our shared drive. It has many years of story times, documents from the construction of one of our buildings, IT documentation, forms, and much more. If losing the data would not be a big problem, and you can reconstruct the system without needing to restore any data, then you don&#8217;t need to back it up. We don&#8217;t backup individual computers because we can simply reimage them if something goes wrong. I don&#8217;t backup my entire firewall&#8217;s operating system, but do backup the configuration file. That way if it dies, I can get a new one and simply upload my backed up config file and be back in business. If I do something boneheaded that completely screws up my configuration, I  can also restore from backup. I can&#8217;t tell you what you need to backup. You need to look at what is important in your organization. I can tell you that if you aren&#8217;t backing up anything, then you are likely going to run into trouble.

## What we do

I thought it might be helpful to talk about how we do our backups at the Lebanon Public Libraries to give an example of one way to do things. This is not the only way that you can do things, it is just what works for us.

### File Server

For our fileserver, we use [Freenas][6]. This is an extremely robust Network Attached Storage (NAS) system which offers very good protection for your data using FreeBSD and the [ZFS][7] file system underneath. You can buy it already setup on a device like the FreeNAS mini from [IX systems][8], or you can build your own, which is what we did. Our shared drive is snapshotted once an hour. Snapshots are a space efficient way to provide a way to roll back to a specific point in time. This means that our data is never more than an hour old if we have to restore. Because snapshots are read-only, we can&#8217;t then mess them up by accident and neither can malware such as a crypto locker virus.

The snapshot is then replicated to our backup server at our other branch. This gives us our third copy, our second computer, and our offsite backup meeting the requirements for the 3,2,1 rule. Snapshots alone don&#8217;t count as backups because they are on the same machine the data is on so a single physical failure could wipe out the data and the snapshot.

<img class="alignnone size-medium wp-image-78" src="http://techielibrarians.com/wp-content/uploads/2017/03/file-server-300x208.png" alt="" width="300" height="208" srcset="https://techielibrarians.com/wp-content/uploads/2017/03/file-server-300x208.png 300w, https://techielibrarians.com/wp-content/uploads/2017/03/file-server.png 441w" sizes="(max-width: 300px) 100vw, 300px" />

### Website

Currently, our website is hosted with digital ocean. Digital Ocean offers snapshots and backups as part of their service, so we currently use their backup service (which runs weekly) and I will snapshot our server before making any changes. This allows easy rollback if something goes wrong. However, a week is longer than I am comfortable with for a backup interval. So it is great that we have their backups, but I also do my own. To do this, I have a script that runs from my file server on my network. It connects using [SSH][9] to my webserver. It then copies all the files from my webserver to a folder on the file server using [Rsync][10]. Rsync only copies files that are different between two directories, so this actually transfers very little when it runs. It only copies files if they have changed, or if they are new. My script then dumps my database using [mysqldump][11]. This is an important step because most changes that occur on my website will happen in the database rather than in the files. This is how content management systems like Drupal and WordPress work. By dumping the database, rather than just copying that database file, it ensures that the data is in a consistent state and can be restored onto any mysql server. It then compresses the dump, transfers it to the file server and deletes the dump file on the webserver.  Once the files are on the file server they are snapshotted, and replicated to my backup server just like the other files. The only difference is that these snapshots are taken on a daily basis rather than an hourly basis.

<img class="alignnone size-medium wp-image-79" src="http://techielibrarians.com/wp-content/uploads/2017/03/file-server-1-300x251.png" alt="" width="300" height="251" srcset="https://techielibrarians.com/wp-content/uploads/2017/03/file-server-1-300x251.png 300w, https://techielibrarians.com/wp-content/uploads/2017/03/file-server-1.png 531w" sizes="(max-width: 300px) 100vw, 300px" />

This setup may seem like overkill for a fairly simple website. However, websites are by far the most vulnerable thing most libraries maintain. They are directly exposed to the internet and are at a much higher risk of compromise than a file server sitting on your lan. By taking daily backups locally, I ensure that I can easily rebuild my server if it is compromised without losing a lot of work. Digital Ocean&#8217;s backup service adds an additional layer of security for me in case something goes wrong and my backup script doesn&#8217;t run. Defense in depth is an important principle for digital security, and applies equally to your backup strategy (hence the 3,2,1 rule).

Backups are a huge topic and this post couldn&#8217;t possible cover the topic exhaustively. It is no exaggeration to say that books have been written on this topic. What I hoped to do was communicate why backups are important and some of the principles that can guide your backup strategy. Depending on your setup, you may end up with something that looks similar to what I have outlined about. You might not. You may use a cloud backup service such as [Tarsnap][12] or [Crashplan][13]. You may decide to use cloud services exclusively such as Google&#8217;s [Gsuite][14] or Microsoft&#8217;s [One Drive][15] and let another company worry about backing up your data. We do this for our ILS. We have [Bywater Solutions][16] host  it and let them worry about backing it up. All of these are valid strategies that can make sense. The key thing is to think about your data, and what works for your situation. Just make sure anything that is important is backed up because If it isn&#8217;t backed up, it isn&#8217;t important.

&nbsp;

 [1]: https://dban.org/
 [2]: http://www.kmov.com/story/34298858/st-louis-city-public-library-victim-of-ransomware-attack
 [3]: https://www.engadget.com/2016/02/19/hospital-ransomware-a-chilling-wake-up-call/
 [4]: https://www.theatlantic.com/business/archive/2016/09/ransomware-us/498602/
 [5]: https://www.theregister.co.uk/2017/02/01/gitlab_data_loss/
 [6]: http://www.freenas.org/
 [7]: https://en.wikipedia.org/wiki/ZFS
 [8]: https://www.ixsystems.com/
 [9]: https://en.wikipedia.org/wiki/Secure_Shell
 [10]: https://en.wikipedia.org/wiki/Rsync
 [11]: https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html
 [12]: https://www.tarsnap.com/
 [13]: https://www.crashplan.com/en-us/
 [14]: https://gsuite.google.com/
 [15]: https://onedrive.live.com/about/en-us/
 [16]: http://bywatersolutions.com/