---
meta_title: What You Can Do to Secure Your Data From Cloudflare Leak
yoast_keyword: cloudflare leak
description: >-
  About a week ago, Cloudflare discovered a bug in its code that caused
  sensitive data leakage from some of the major websites using their services.
path: /cloudflare-leak-can-secure-data/
title: What You Can Do to Secure Your Data From Cloudflare Leak?
author: Expert
date: 2017-03-04T11:17:01.000Z
excerpt: >-
  About a week ago, Cloudflare discovered a bug in its code that caused
  sensitive data leakage from some of the major websites using their services.
thumbnail: /assets/cloudflare.jpg
altText: cloud flare
tags:
  - CloudflareLeak
featured: true
featurednail: /assets/cloudflare.jpg
---
About a week ago, [Cloudflare discovered a bug in its code](https://techcrunch.com/2017/03/01/cloudbleed-investigation-turns-up-a-million-leaks-but-no-signs-of-exploitation/) that caused sensitive data leakage from some of the major websites using their services. It is believed that personal data of users around the world had been leaking for almost six months before the bug was discovered by Tavis Ormandy, a researcher from Google. The announcement was a major blow for Cloudflare, considering that this content delivery network provides services for **5 million websites, including Uber, <a href="/blog/using-proxies-for-okcupid-dating-site/" target="_blank" rel="noopener noreferrer">OkCupid</a> and Fitbit.**

Cloudflare couldn’t confirm the number of its customers affected by the leakage. The fact that search engines cached some of the leaked information made the problem even bigger. Major search engines, including **<a href="/blog/latest-seo-trends-and-google-algorithm-update-2018/" target="_blank" rel="noopener noreferrer">Google</a>, Bing, and Yahoo** have been working hard on manually scrubbing the data. Despite the effort, samples of leaked data still can be found in their caches.

“Random authentication cookies can still be found simply by using Google search. The worst thing about it is – they work”, reported a security researcher Hector Martin.

Cookies allow you to log into a certain account on a website without entering the password for that account. Martin used his skills to discover an authentication cookie for a website in the financial industry. Fortunately, it seems that the majority of the data has been cleaned up.

**“Google and Cloudflare are working on cleaning up the cache. We managed to clean most of the data, but there are a handful of pockets we still need to identify and take down”,** said Matthew Prince, the founder of Cloudflare.

You can take a look at the list of Cloudflare <a href="/blog/how-marketing-teams-can-keep-pace-with-customer-intelligence-tools/" target="_blank" rel="noopener noreferrer">customers</a> that could have been affected by the leak here. While that is a good way to check if websites you use are among them, you need to keep in mind that only a small portion of clients was hit by the leak. Specific configurations in Cloufflare’s code led to the leak being at its worst for just several days in February when 1 in 3,300,000 Cloudflare requests might have triggered the leakage. Cloudlfare emphasized that this is a mere 0,00003% of the total number of requests.

So, the chances are you haven’t been affected by the leak. Regardless, there are some moves you can make to keep your data safe.

### **What Can You Do to Secure Your Data?**

Considering that sensitive user data can still be found in caches of various search engines, there are two things you should do to secure your personal information:

* **Reset your account passwords**
* **Turn on two-factor authentication**

Additionally, it is recommended to use a password manager to create unique and strong passwords for the websites you visit.

Cloudflare hasn’t discovered any leaked passwords and it seems that Ormandy was the only one to identify the bug. Despite that, it couldn’t hurt to reset your passwords, especially because they may be found in a cache.

Ormandy agrees that refreshing passwords is a wise move.

“There is no way to know for sure what **data has leaked**. The only thing we know is that there is a lot of leaked information out there that we’re trying to clean up,” said Ormandy. “Crawlers and regular <a href="/blog/how-to-speed-up-your-internet/" target="_blank" rel="noopener noreferrer">internet</a> users visiting websites and downloading files accidentally leaked data over the last six months. That data can include information about passwords, private data, cookies etc. There is no reliable way to know what’s out there. It could be private messages, credit card details, passwords…”

Users are not the only one that should take action to protect themselves. Website administrators also can play a role in cleaning up the mess, considering that the leak included authentication tokens and cookies.

**Creative Commons and Bugcrowd** are among Cloudflare customers that issued a forced password reset to their users and revoked authentication credentials for mobile apps. While that might be an idea that other websites should follow, experts warn that this might causeloss of trust in consumers.

“It appears that only small amount of credentials has been compromised, so forced password update might not be worth the effort for a consumer service with restricted risk to compromised accounts. On the other hand, all websites that process sensitive information through Cloudflare should force a password reset. Users with administration credentials also need to update their passwords,” wrote <a href="/blog/plugins-can-interfere-online-security/" target="_blank" rel="noopener noreferrer">security</a> researcher Ryan Lackey in his post on Medium.

<p style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://bit.ly/2Mj3MkZ">BUY PROXIES AT 50% OFF</a></button>
</p>
