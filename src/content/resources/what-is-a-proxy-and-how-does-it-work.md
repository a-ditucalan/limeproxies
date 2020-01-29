---
meta_title: 'What is a Proxy and how it works? '
yoast_keyword: What is a Proxy
description: >-
  An advantage of a proxy server is that its cache can serve all users. If one
  or more Internet sites are frequently requested, these likely to be in the
  proxy's cache
path: /what-is-a-proxy-and-how-it-works
title: What is a Proxy and How Does it Work?
author: Rachael Chapman
date: '2019-07-26'
tags:
  - proxy servers
excerpt: >-
  An advantage of a proxy server is that its cache can serve all users. If one
  or more Internet sites are frequently requested, these likely to be in the
  proxy's cache
thumbnail: /assets/what-is-a-proxy.jpg
hiddentype: resource
---
It is difficult to trace how, when, and where proxy servers began, although there are speculations that proxy servers started around the same time that computer networking was developed. The usage of proxy servers has also evolved throughout the years. 

If you are learning about computer networks or you are one of the millions of people and organizations that feel vulnerable when using the internet without some sort of a safety barrier, then you might want to know what proxies are and how they work.

## What is a Proxy

When the word “proxy” is taken outside the context of technology, it has always meant something or someone who is authorized to represent another person or object. Based on this globally accepted definition, there are two prerequisites to being a proxy:

**1. Authorized**: This means that the proxy is not acting on his or her own volition, but is only  doing what the other party has allowed or authorized him or her to do. 

**2.To represent**: The proxy is not acting for their own desires or preferences, but they are there in behalf of the other party.

The same is true when talking about proxies or proxy servers, except that they are computers and not human beings. Simply put, a proxy is a computer (Computer B) that acts on behalf of another computer (Computer A) when sending and receiving requests from yet another computer (Computer C). 

Instead of Computer A sending its request for a file or web page directly to Computer C, it routes the request through Computer B, which is the proxy. When Computer C responds with the requested file or web page, it will send the response to Computer B, who then forwards the files to the original requestor, Computer A. If all these sounds confusing, take a look at this tweeted picture to better understand what a proxy is.

https://twitter.com/HNBulletin/status/490458151552946176

In effect, the proxy acts as a go-between or an intermediary between two different computers, enabling them to communicate effectively with each other.

## How Do Proxies Work?

[Proxy servers](http://www.limeproxies.com/tutorial/what-is-proxy) act as intermediaries between an end-user (an individual or a company’s network of computers) and external web servers.  Being a "middleman," the proxy server receives the request for files and web pages from the end-user and forwards it to the destination web server. The responses of the destination web server also go through the proxy who then forwards them to the end-user. This is generally how a proxy works, although the intricate details depend on the type of proxy server being used.

**Illustration (without a proxy):**

Matt wants to access or download some files from [www.example.com](https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.example.com%2F%3Ffbclid%3DIwAR1vNMigkVcDKfv9NCDs4IjoEboISuhUPITX_Zb3taEXQCW75ROBvxv4vA8&h=AT08Ofj3aF_EEdddSSm0OARDhm8ef_ufSuD0MX-XtDgpMara_lP9dsqsyFRDAPmKUa5wNowxWD7Z4KHytmNlT_GFMyqAbDx-T-K1PXRORFxBew9IYjV4bRP-uNvlZgDKCoU). Without using a proxy server Matt sends his request for access directly to the webserver of [www.example.com](http://www.example.com/?fbclid=IwAR1gXfh9Sr0YL-xx50mCfXTJWWVZdkYeJG1rOJ5OJ7nHflLyE3ZpMWIRgwE). The destination webserver gets Matt's IP address and sends the requested files directly to Matt's computer.

![without proxy](/assets/without-proxy.png)

**Illustration (with a proxy):**

Matt wants to access or download some files from [www.example.com](https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.example.com%2F%3Ffbclid%3DIwAR3aT6k1R367DCIMDeD5381frDeeuA-SWflLuX98rMhwleCnKzMXo680Rwc&h=AT08Ofj3aF_EEdddSSm0OARDhm8ef_ufSuD0MX-XtDgpMara_lP9dsqsyFRDAPmKUa5wNowxWD7Z4KHytmNlT_GFMyqAbDx-T-K1PXRORFxBew9IYjV4bRP-uNvlZgDKCoU). His request goes through the proxy server which filters it first. If the requested files are not available on the proxy's cached memory, the proxy server forwards the request to the webserver of [www.example.com](https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.example.com%2F%3Ffbclid%3DIwAR3aT6k1R367DCIMDeD5381frDeeuA-SWflLuX98rMhwleCnKzMXo680Rwc&h=AT08Ofj3aF_EEdddSSm0OARDhm8ef_ufSuD0MX-XtDgpMara_lP9dsqsyFRDAPmKUa5wNowxWD7Z4KHytmNlT_GFMyqAbDx-T-K1PXRORFxBew9IYjV4bRP-uNvlZgDKCoU). The destination web server takes note of the proxy server's IP address and sends the files back to the proxy. The website ([www.example.com](https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.example.com%2F%3Ffbclid%3DIwAR1m7yhTsHaL72NzT215uVvx15Sh6QMwfhgSYu0QMYlfRGtgeWzcFRQCz4g&h=AT08Ofj3aF_EEdddSSm0OARDhm8ef_ufSuD0MX-XtDgpMara_lP9dsqsyFRDAPmKUa5wNowxWD7Z4KHytmNlT_GFMyqAbDx-T-K1PXRORFxBew9IYjV4bRP-uNvlZgDKCoU)) does not know that it was Matt who requested the files.

![with proxy](/assets/with-proxy.png)

## Why is there a need for a proxy?

When the proxy server is removed from the scenario in the example above, Matt’s computer sends its request directly to the web server of www.example.com. This is what happens on the internet by default, at any given time and place: Just two computers, usually a user’s device and a website’s server, sending and receiving requests and responses to one another. 

Along with the request sent from the user’s device to the web server, the user’s IP address is also sent. IP address or the Internet Protocol address is akin to a residential address. The receiver needs the information so it knows where to send the response back to. To illustrate, when Matt asks to access a certain web page of www.example.com, the web server of the website needs Matt’s IP address so it can send back the information that Matt is asking for.

Think of it this way: How can someone reply to a letter if it doesn’t have a return address? Every web server therefore requires the user’s IP address so it can respond with the requested data accordingly.

This is all well and good except that a user’s IP address is his or her identity on the internet. What this means is that if your IP address is exposed to every website you access, the following can happen:

**1. You can get hacked**: With the right skills and resources, someone can use your IP address to trace and track   until a hole is found and the hacker can get into your system.

**2. You can get blocked**: Websites, governments, and other entities have been practicing IP blocking as way to enforce censorship on the internet, so you can’t access every web page you want. 

By using a proxy server, you are hiding your identity since it will be the proxy server’s IP address that will be visible to the destination web server. There are a lot more to proxy servers than just being intermediaries.

To learn more about the different types of proxies, [click here](https://purple-rain.netlify.com/tutorials/types-of-proxies).

To learn more about the benefits and usage of proxies, [click here](https://purple-rain.netlify.com/tutorials/benefits-of-using-a-proxy).
