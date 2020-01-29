---
meta_title: Learn to Resolve Error During SSL Handshake with Remote Server
yoast_keyword: Resolve Error During SSL Handshake
description: >-
  A lot of things have developed when it comes to networks as well as coding, 
  Let's discus on how to resolve error during SSL Handshake with Remote Server?
path: /how-to-resolve-error-during-ssl-handshake-with-remote-server/
title: How to Resolve error during SSL Handshake with Remote Server?
author: Rachael Chapman
date: 2018-11-13T06:15:48.000Z
excerpt: >-
  With advanced technology, a lot of things have developed when it comes to
  networks as well as coding,In this article, we will be discussing issues faced
  when you try to perform an SSL handshake with remote or local server.
thumbnail: /assets/Apache-2.4-and-above.png
altText: SSL Handshake with Remote Server
tags:
  - error during ssl handshake with remote server
  - SSL
  - SSL Handshake with Remote Server
---
<span style="font-weight: 400;">With advanced <a href="/blog/internet-things-technology-future/">technology</a>, a lot of things have developed when it comes to networks as well as coding, In this article, we will be discussing issues faced when you try to perform an SSL handshake with remote or local server. But before we proceed to know the reasons, the solutions or how these issues can be handled in real life scenarios, Let us now understand the basics included in the process.</span>

### **Apache Server**

<span style="font-weight: 400;">Apache is a free and open source server software that runs with Apache License 2.0, It is developed and maintained under <a href="/blog/step-by-step-guide-to-configure-apache-reverse-proxy/" target="_blank" rel="noopener noreferrer">Apache </a>Software Foundation, Most of the Apache services runs on Linux, However, they have developed so that it can be used on Windows and OS2 and on Unix as well for sites such as <a href="https://4boys.net/" style="border: none; color: #333333; font-weight: normal !important; text-decoration: none;">https://4boys.net/</a>.</span>

### **How an SSL handshake is carried out? Types?**

<span style="font-weight: 400;">SSL handshake is initiated when the browser on your device forwards a secure connection request to a Web server. The server sends a public key to your computer, and the remote computer checks the certificate with a known list of certificates. Once the certificate is accepted, the computer generates a key and then encrypts it using the server&#8217;s public key. </span>

<span style="font-weight: 400;">SSL handshakes are basically two types:</span>

  * **Basic SSL handshake**
  * **Client Authenticated SSL handshake**

<span style="font-weight: 400;">The basic model here lets the client verify the server, and a number of sessions secured by TLS only require this. However, some cipher suites will require the client to also send a certificate and public key for mutual authentication of both parties which as above is the client authenticated SSL handshake. This two-way authentication will, of course, add to the handshake effectively as the security increases when both the parties provide valid authentication steps to confirm the handshake, However, in some cases, the cipher suite will be needed to recommended to complete the process which in turn adds extra security to the session.</span>

<span style="font-weight: 400;">A SSL handshake includes multiple stages, each managed according to different set of rules. but the issue here is that rather than a series of separate back and forth connections as to what keys to use, how to <a href="/blog/what-you-need-to-know-now-about-encryption/">encrypt</a> the handshake, how to authenticate the handshake and vice versa, the origin and target parties can agree on a “cipher suite which is an existing kit of agreed-upon components. TLS specifications, however, allows quite a number of cipher suites, and the client and server will almost always have access to one set of agreed upon components.</span>

<span style="font-weight: 400;">Let us check some scenarios where the error occur and how it was resolved.</span>

### <img class="alignnone size-large wp-image-2951" src="/assets/Apache-2.4-and-above.png" alt="error during ssl handshake with remote server" width="720" height="378" />

<span style="font-weight: 400;">Upgrading servers without understanding the pros and cons are dangerous and can lead to huge confusions, A lot of Linux admins working on Apache version 2.2 encountered the same “ Error SSL handshake failed with server “ due to an upgrade in the server versions. Now it might be meaningless for you to hear that a simple server upgrade is causing this issue.</span>

#### **Replicating the error :**

<span style="font-weight: 400;">Consider an Apache running on port 443 and a web app working on Tomcat running on port 8443 on Ubuntu.</span>

<span style="font-weight: 400;">You can set up Apache as reverse proxy so that you can access the web app running on Tomcat using port 443 instead of 8443. With having SSL connection between both the Browser and Apache and also Apache and Tomcat, SSL is set up on both Apache and Tomcat. The web app works fine while accessed through Tomcat, But if you try accessing the web app running on Tomcat through Apache which is set up as Reverse proxy you will be getting an error as below:</span>

<span style="font-weight: 400;">=======================================================================</span>

**Proxy Error The proxy server could not handle the request GET /web_app.** 

**Reason: Error during SSL Handshake with remote server**

<span style="font-weight: 400;">=====================================================================</span>

<span style="font-weight: 400;">This usually happens when either </span>**mod_ssl** <span style="font-weight: 400;">module or the directives are not specified correctly.</span>

<span style="font-weight: 400;">Based on the set up, there are 2 suggestions to fix the issue to have the server running fine without errors depending on the nature of the error:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Modifying/Adding directives under the </span><b>mod_ssl</b><span style="font-weight: 400;"> module as below:</span>
</li>

<span style="font-weight: 400;">=======================================================================</span>

**SSLProxyEngine on** 

**SSLProxyVerify none** 

**SSLProxyCheckPeerCN off** 

**SSLProxyCheckPeerName off** 

**SSLProxyCheckPeerExpire off**

<span style="font-weight: 400;">=======================================================================</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Checking if there is an additional </span><b>ssl.conf</b><span style="font-weight: 400;"> file which has replaced or added while copying the </span><b>*.conf</b><span style="font-weight: 400;"> file during the transition of 2.2 to 2.4, This can cause conflicts as both the files will have the same directives and none of them will respond, Removing one of them and restarting httpd will fix the issue.</span>
</li>

&nbsp;

### <img class="alignnone size-large wp-image-2953" src="/assets/NetiQ-Access-manager.png" alt="error during ssl handshake with remote server" width="720" height="378" />

<span style="font-weight: 400;">When the NAM is upgraded to version 4.3 without changing any other features, there will be a compatibility issue with the additional files supporting the server set up, The below mentioned error appears when NAM is upgraded without testing the additional files.</span>

> _<span style="font-weight: 400;">The server encountered an internal error.</span>_
> 
> _<span style="font-weight: 400;">The proxy server could not handle the request</span>_

<span style="font-weight: 400;">Reason: Error during SSL Handshake with remote server.</span>

<span style="font-weight: 400;">While checking the device manager error log files under &#8211; </span><span style="font-weight: 400;">/opt/novell/devman/jcc/logs/ the following set of error is replicated.</span>

<span style="font-weight: 400;">==================================================================</span>

**/opt/novell/devman/jcc/logs/jcc-0.log.0:INFO: Executing /opt/novell/ssllib/bin/c_rehash /opt/novell/apache2/cacerts**

**/opt/novell/devman/jcc/logs/jcc-0.log.0:Cannot run program &#8220;/opt/novell/ssllib/bin/c_rehash&#8221; (in directory &#8220;/&#8221;): error=2, No such file or directory**

**/opt/novell/devman/jcc/logs/jcc-0.log.0:java.io.IOException: Cannot run program &#8220;/opt/novell/ssllib/bin/c_rehash&#8221; (in directory &#8220;/&#8221;): error=2, No such file or directory**

**/opt/novell/devman/jcc/logs/jcc-0.log.0:java.io.IOException: Cannot run program &#8220;/opt/novell/ssllib/bin/c_rehash&#8221; (in directory &#8220;/&#8221;): error=2, No such file or directory**

**/opt/novell/devman/jcc/logs/jcc-0.log.0:java.io.IOException: Cannot run program &#8220;/opt/novell/ssllib/bin/c_rehash&#8221; (in directory &#8220;/&#8221;): error=2, No such file or directory**

<span style="font-weight: 400;">==================================================================</span>

<span style="font-weight: 400;">However, this issue can be resolved by making the changes as below:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">create the &#8220;/opt/novell/ssllib/bin/&#8221; directory</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">create the following module &#8220;c_rehash&#8221; and copy it into the &#8220;/opt/novell/ssllib/bin/&#8221; directory</span>
</li>

<span style="font-weight: 400;">=================================================================</span>

**#!/bin/sh**

**\# print out the hash values**

**#**

**\# based on /etc/pki/tls/misc/c_hash part of the openssl-1.0.0**

**#**

**export OPENSSL_CONF=/opt/novell/openssl/ssl/openssl.cnf**

**export LD\_LIBRARY\_PATH=/opt/novell/openssl/lib**

**w=&#8221;WellKnownThirdPartyTrustedRoots_auto.pem&#8221;**

**die () {**

 **  echo >&2 &#8220;$@&#8221;**

 **  exit 1**

**}**

**#[ &#8220;$#&#8221; -eq 1 ] || die &#8220;One directory argument required, $# provided&#8221;**

**#[ -d &#8220;$1&#8221; ] || die &#8220;Directory $1 does not exist&#8221;**

**cd /opt/novell/apache2/cacerts**

**printf &#8220;removing all old hash files \n&#8221;**

**rm *.0 -v**

**printf &#8220;creating new hash files \n&#8221;**

**for i in $(ls *.pem);**

**do**

 **   ** **printf &#8220;$i \n&#8221;**

 **   ** **h=\`/opt/novell/openssl/bin/openssl x509 -hash -noout -in $i\`**

 **   ** **if [ &#8220;$i&#8221; !=  &#8220;$w&#8221; ]; then**

 **      ** **ln -svf $i $h.0;**

 **      ** **#echo &#8220;$h.0 => $i**

 **   ** **fi**

**done**

<span style="font-weight: 400;">================================================================</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">flag the script executable: chmod 755 c_reshash</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">execute the script</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">restart the Access Gateway</span>
</li>

<span style="font-weight: 400;">The above changes in commands will help you fix the issue, However, you should be sure that any aspect is not given a wrong value which will, in turn, throw the same error.</span>

### <img class="alignnone size-large wp-image-2957" src="/assets/Incorrect-Date-or-time-1.png" alt="error during ssl handshake with remote server" width="720" height="378" />

<span style="font-weight: 400;">In the previous article, we have seen how small changes in the commands have fixed the issues with SSL handshake to a remote or a local server, But it is quite surprising that a change in date or time will also affect the functionality or the connections causing SSL errors. The best way to check it is by following the below steps.</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Go your Windows Start screen, and then choose the current date and time.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Choose &#8220;Settings > Change the time and date > Change the Internet Time > Save Settings.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Move the date 2-3 years ahead of the present time by clicking on the right arrow under the &#8220;Date&#8221; heading. Click &#8220;OK&#8221; to save the changes. You must select a date much ahead of the actual time to cause a date discrepancy between the computer and the SSL certificate used on the Web server. The large difference in date and time will cause the SSL handshake to fail.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Restart your computer.</span>
</li>

<span style="font-weight: 400;">Once you have made the changes as suggested above, Follow the steps:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Open a Web browser and visit a website that you know is secure or has https on all its internal links as well, for example, your bank or an online store.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Try to log in to your bank account or add items to your shopping cart in order to initiate an SSL session which can be done as payment gateways on every bank or online stores are secured with https.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Within few seconds an error message will appear on your browser, warning you that the server&#8217;s SSL certificate is not yet valid or expired, and due to which the SSL handshake has failed.</span>
</li>

&nbsp;

### <img class="alignnone size-large wp-image-2955" src="/assets/How-to-resolve-error-during-ssl-handshake-with-remote-server-1.png" alt="error during ssl handshake with remote server" width="720" height="378" />

<span style="font-weight: 400;">This is a rare issue but very important while your target is an SSL handshake with web server be it remote or local server. Normally when the error is triggered you get an Error 525: SSL handshake failed, Error 525 indicates that the SSL handshake between Cloudflare and the origin server failed. This normally occurs when the domain is using a Cloudflare Full SSL mode.</span>

<span style="font-weight: 400;">The most common issues that cause Error 525 are:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">The origin server does not have a valid SSL certificate.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The server is not working on port 443  or possibly configured on custom ports.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The web server does not support SNI or Server name indication.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The cipher that Cloudflare uses and the cipher suites that the origin server uses are different.</span>
</li>

<span style="font-weight: 400;">Although there are no definite steps to resolve the issue, Here we have few steps that can be used to troubleshoot the cause:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Apache must be configured to work as per log mod_ssl errors.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Increasing the log level and adding these error logs in Nginx.</span>
</li>

### 

### **Conclusion**

<span style="font-weight: 400;">Discussed above are some cases where small changes have led to failed handshake attempts, It is always recommended to contact or take advice from a server administrator while you imply any changes on the server, With Date and time causing an error to an invalid SSL certificates, the possibilities are numerous, It is how you go about it or take measures to avoid these issue which matters. Ever faced any issue with SSL handshakes other than the ones listed above, Let us know in comments below.</span>

<h1 style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://dashboard.limeproxies.com/?utm_source=blog&utm_content=top%20esports%20games#/login/signup" target="_blank" rel="noopener noreferrer">GET STARTED FOR FREE</a></button>
</h1>
