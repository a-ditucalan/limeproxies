---
meta_title: Know How To Set Up NGINX Reverse Proxy | LimeProxies
yoast_keyword: NGINX Reverse Proxy
description: >-
  To understand the concept and functionality of a NGINX reverse proxy there are
  a few things that are to be known first. A proxy basically acts like a tunnel
path: /how-to-set-up-nginx-reverse-proxy/
title: How to set up NGINX Reverse Proxy?
author: Rachael Chapman
date: 2018-08-10T12:26:22.000Z
excerpt: >-
  To understand the concept and functionality of a NGINX reverse proxy there are
  a few things that are to be known first. Among those, understanding the
  operation of a proxy server
thumbnail: /assets/nginx.png
altText: 'NGINX '
tags:
  - How to Guides
  - NGINX Reverse Proxy
featured: true
featurednail: /assets/nginx.png
---
### **Introduction**

<span style="font-weight: 400;">To understand the concept and functionality of a </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">there are a few things that are to be known first. Among those, understanding the operation of a <a href="/blog/what-is-proxy-server-and-how-it-works/" target="_blank" rel="noopener noreferrer">proxy server</a>, getting a basic idea of reverse proxies, and a few other things are paramount. Otherwise, setting up a </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">would be next to impossible. So here are a few primary things that should help in creating proxies.</span>

#### **What is a Proxy Server?**

<span style="font-weight: 400;">Also known as “application-level gateway” or simply “proxy”, this is a computer that acts as a bridge between a system or a number of systems and a larger network like the internet. Proxy servers are used to improve the <a href="/blog/top-10-information-security-threats-in-2018/" target="_blank" rel="noopener noreferrer">security</a>, <a href="/blog/how-to-maintain-phone-privacy-get-started/" target="_blank" rel="noopener noreferrer">privacy</a>, and the performance of the connection. They can also be used to monitor website traffic on the network that is being used in some cases. </span>

#### **How do Proxy Servers Work?**

<span style="font-weight: 400;">A proxy basically acts like a tunnel, in which data enters through one end and is sent out through another. This severs the direct connection of users with the larger network and helps in keeping the connection private, thus protecting sensitive data from hackers and keeping the users safe. Proxy servers also help in preserving the anonymity of users. There are also proxy servers which are groups of applications or servers which work on a much wider scale and block some common <a href="/blog/how-to-speed-up-your-internet/" target="_blank" rel="noopener noreferrer">internet</a> services, two such examples are HTTP proxy which intercepts website access, and SMTP proxy which intercepts emails. </span>

### **What are Reverse Proxies?**

<span style="font-weight: 400;">Well, the primary definition of a Reverse Proxy is a proxy server that is software-based, unlike the normal proxies which are hardware based. Reverse Proxy servers act as the gateway between external users and internal applications, they assimilate, sort, and then distribute client requests in a way that all the requests reach their designated servers. </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">is used all around the world in bulk-traffic websites as well as in small internal networks as it has a number of advanced features which exponentially increase the performance, and also help in providing a smooth workflow. Here some of the basic functions of reverse proxy servers are discussed:</span>

**Load Balancing**<span style="font-weight: 400;">&#8211; </span><span style="font-weight: 400;">When working with multiple servers, the most important task is to keep workflow balanced between all the servers so that none of them get overloaded. This is the primary task of a Load Balancer. Also, if in any case a server goes haywire and shuts down then the Load Balancer distributes the extra processing task equally between the remaining online servers. This helps is keeping the website/program up and running even if one or a few of the servers are offline. Load Balancing is done to keep a smooth and efficient workflow even under heavy load. This also acts as a contingency in case of server failure.</span>

**Web Acceleration**<span style="font-weight: 400;">&#8211;</span> <span style="font-weight: 400;">The process of speeding up the rate of data transfer between client browsers and web servers is known as web acceleration. At any point of time, there are hundreds of thousands to millions of users who access some of the high-traffic websites, and these websites have to provide their services even under these tremendous traffic conditions. To deal with this, some organisations tend to go for hardware-based options which are costly and need to be upgraded with the influx of more traffic. Web acceleration takes care of the same problem by implementing software-based solutions:</span>

<span style="font-weight: 400;">1. HTTP Optimisation- </span><span style="font-weight: 400;">A </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">can be used to accelerate the web traffic on any website by streamlining the intake and exit of data. Clients use a plethora of different devices to access different websites, and these devices range from mobiles to tablets, TVs to smart-watches etc. All these devices process website-data at different speeds and all their connections have a very wide variation in bandwidth. Without content acceleration, the servers would get tied up trying to cater to the client device processing the data it has just received, and the whole workflow would become jagged and slow. By HTTP optimisation, the load balancer acts as a medium between the client and the servers; it assimilates and sends the data in a way which enhances the smoothness and maximises the performance of said servers.</span>

<span style="font-weight: 400;">2. Caching and Prefetching-</span> <span style="font-weight: 400;">In many cases, the client tries to open the same website or to access the same data over and over again on a server and trying to get that data every time is a waste of precious server processing power. This is why caching is used in web acceleration. It stores the data locally so that time and resources are not wasted when trying to load the same thing. The cached content gets updated at regular intervals so that the data that is showed is not out of date. Prefetching is the process of downloading and caching data that the client is likely to ask for, in advance. This helps in decreasing load-times and increasing smoothness of browsing, for example, the next page of a document is downloaded whenever a page is being read by the client so that there is no delay while changing pages.</span>

<span style="font-weight: 400;">3. Compression- </span><span style="font-weight: 400;">The size of the files that are being transferred through a server would hugely affect the speed of transfer. Usually, a video or picture on a website is quite heavy and takes up a lot of time and resources to process. To tackle this problem, compression is done. This brings down the size of these objects down to a much more manageable quantity so that loading the page does not take nearly that much time.</span>

<span style="font-weight: 400;">4. SSL/TLS Processing- </span><span style="font-weight: 400;">The process of encrypting and decrypting a file before transmission takes up much-needed server processing power. This power can be saved up and used elsewhere by using a </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">which takes care of the encryption and decryption process of documents that use Transport Layer Security (TSL) encryption or Secure Sockets Layer (SSL) <a href="/blog/what-you-need-to-know-now-about-encryption/" target="_blank" rel="noopener noreferrer">encryption</a>.</span>

**Anonymity and Security-** <span style="font-weight: 400;">With the increasing number of security breaches happening throughout the internet on a daily basis, secure storage and access to data has become one of the most important parts of any organisation. Since all incoming requests and outgoing data is intercepted by </span><span style="font-weight: 400;">NGINX reverse proxy</span><span style="font-weight: 400;">, it stops any outer entity from knowing the details of any client and also keeps the servers and their data safe during this process. Also, a single record locator or URL acts as the access point for multiple servers regardless of the connection structure of the local network. This helps in preserving the anonymity of individual servers and also helps in simplifying the process of data transfer.</span>

### **Setting up NGINX Reverse Proxy**

<span style="font-weight: 400;">Now that the basic functions of a reverse proxy server have been explained, it is time to know how to set up one. The process is pretty simple with a few steps of coding. There are different types of reverse proxy servers available out there but the one which is used most commonly by multinational organisations like <a href="/blog/latest-seo-trends-and-google-algorithm-update-2018/" target="_blank" rel="noopener noreferrer">Google</a>, Amazon etcetera is </span><span style="font-weight: 400;">NGINX reverse proxy</span><span style="font-weight: 400;">. The level of intuitiveness of the software and the prompt customer support distinguishes NGINX from other competitors. To install </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">these following things are primarily needed:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">A subscription to NGINX Plus (trial or purchased)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">An operating system that is supported</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Administrator privilege to gain </span><span style="font-weight: 400;">root</span><span style="font-weight: 400;"> privilege</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">NGINX Plus Customer Portal credentials which are provided by NGINX, Inc. through an email</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">NGINX Plus public key and certificate (</span><b>nginx-repo.key </b><span style="font-weight: 400;">and</span><b> nginx-repo.crt </b><span style="font-weight: 400;">files) which are also provided by NGINX, Inc. through an <a href="/blog/how-to-prevent-pixel-trackers-in-your-emails/" target="_blank" rel="noopener noreferrer">email</a></span>
</li>

<span style="font-weight: 400;">Installation process of NGINX Plus on Oracle Linux, Amazon Linux, CentOs, and RHEL:</span>

<span style="font-weight: 400;">Almost all current and relevant versions of these operating systems are supported by </span><span style="font-weight: 400;">NGINX reverse proxy</span><span style="font-weight: 400;">. The list of systems which are supported is given below:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Amazon Linux 2 2017.12+ (x86_64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Amazon Linux  2016.12+ (x86_64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">RHEL/Oracle Linux/CentOS 7.0+ and 6.5</span>
</li>

<span style="font-weight: 400;">To install NGINX Plus on these systems just follow the steps shown below:</span>

<span style="font-weight: 400;">1. The first step is to create a </span>**/etc/ssl/nginx** <span style="font-weight: 400;">directory</span>

<img class="alignnone size-large wp-image-2184" src="/assets/Proxy-01.png" alt="/etc/ssl/nginx directory" width="720" height="75" />

<span style="font-weight: 400;">2. Download the </span>**nginx-repo.key** <span style="font-weight: 400;">and </span>**nginx-repo.crt** <span style="font-weight: 400;">files from NGINX Plus Customer Portal</span>

<span style="font-weight: 400;">3. Copy these downloaded files to the directory, i.e. </span>**/etc/ssl/nginx**

<img class="alignnone size-large wp-image-2192" src="/assets/Proxy-02.png" alt="/etc/ssl/nginx" width="720" height="75" />

<span style="font-weight: 400;">4. Now the next step is to get the </span>**ca-certificates** <span style="font-weight: 400;">dependency</span> <span style="font-weight: 400;">installed</span>

<img class="alignnone size-large wp-image-2193" src="/assets/Proxy-03.png" alt="ca-certificates" width="720" height="42" />

<span style="font-weight: 400;">5. This step is to download and copy the newest version of the </span>**nginx-plus-repo** <span style="font-weight: 400;">file to the </span>**/etc/yum.repos.d/** <span style="font-weight: 400;">directory. All these above mentioned operating systems have different versions of the file, corresponding to the respective OS versions.</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">CentOS, RHEL, or Oracle Linux version 6:</span>
</li>

<img class="alignnone size-large wp-image-2194" src="/assets/Proxy-04.png" alt="CentOS, RHEL, or Oracle Linux version" width="720" height="82" />

* <span style="font-weight: 400;">Amazon Linux OS:</span>

<img class="alignnone size-large wp-image-2195" src="/assets/Proxy-05.png" alt="Amazon Linux OS" width="720" height="82" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">CentOS, RHEL, or Oracle Linux versions 7.0-7.3:</span>
</li>

<img class="alignnone size-large wp-image-2196" src="/assets/Proxy-06.png" alt="CentOS, RHEL, or Oracle Linux versions 7.0-7.3" width="720" height="82" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">CentOS, RHEL, or Oracle Linux versions 7.4+:</span>
</li>

<img class="alignnone size-large wp-image-2197" src="/assets/Proxy-07.png" alt="CentOS, RHEL, or Oracle Linux versions 7.4+" width="720" height="82" />

<span style="font-weight: 400;">6. Finally, follow this step to install the downloaded </span>**nginx-plus** <span style="font-weight: 400;">package. If there is any older NGINX Plus package installed on the system then that gets automatically overwritten</span>

### <img class="alignnone size-large wp-image-2198" src="/assets/Proxy-08.png" alt="downloaded nginx-plus package" width="720" height="44" />

### <span style="font-weight: 400;">Installation process of NGINX Plus on Ubuntu and Debian:</span>

<span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">is also available on a plethora of Ubuntu and Debian Operating Systems. While most versions of these OSs are supported, here is a list of the currently supported versions:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Debian version 8 (“Jessie”)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Debian version 9 (“Stretch”)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Ubuntu version 14.04 LTS (“Trusty”) (i386, x86_64, aarch64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Ubuntu version 16.04LTS (“Xenial”) (i386, x86_64, ppc64le, aarch64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Ubuntu version 17.10 (“Artful”) (i386, x86_64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Ubuntu version 18.04 (“Bionic”)</span>
</li>

<span style="font-weight: 400;">Here is the step-by-step guide to install NGINX Plus on these operating systems:</span>

<span style="font-weight: 400;">1. Firstly, create the directory </span>**etc/ssl/nginx**

<img class="alignnone size-large wp-image-2199" src="/assets/Proxy-09.png" alt="etc/ssl/nginx" width="720" height="67" />

<span style="font-weight: 400;">2. Download the files </span>**nginx-repo.key** <span style="font-weight: 400;">and </span>**nginx-repo.crt** <span style="font-weight: 400;">from the NGINX Plus Customer Portal</span>

<span style="font-weight: 400;">3. Now, copy the downloaded files to the directory that was created a step ago</span>

<img class="alignnone size-large wp-image-2200" src="/assets/Proxy-10.png" alt="Download the files nginx-repo.key and nginx-repo.crt" width="720" height="61" />

<span style="font-weight: 400;">4. Now access the website nginx.org and download the NGINX signing key</span>

<img class="alignnone size-large wp-image-2201" src="/assets/Proxy-11.png" alt="copy the downloaded files to the directory" width="720" height="75" />

<span style="font-weight: 400;">5. Installing the NGINX Plus repository and the </span>**apt-utils** <span style="font-weight: 400;">package is the next step</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Debian OS</span>
</li>

<img class="alignnone size-large wp-image-2202" src="/assets/Proxy-12.png" alt="access the website nginx.org and download the NGINX signing key" width="720" height="82" />

<img class="alignnone size-large wp-image-2203" src="/assets/Proxy-13.png" alt="In Debian OS" width="720" height="94" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Ubuntu OS</span>
</li>

<img class="alignnone size-large wp-image-2204" src="/assets/Proxy-14.png" alt="In Debian OS" width="720" height="165" />

<span style="font-weight: 400;">6. Now download the file named </span>**90nginx** <span style="font-weight: 400;">and send it to </span>**/etc/apt/apt.conf.d**

<img class="alignnone size-large wp-image-2205" src="/assets/Proxy-15.png" alt="In Ubuntu OS" width="720" height="75" />

<span style="font-weight: 400;">7. The next step is to update repository information</span>

<img class="alignnone size-large wp-image-2206" src="/assets/Proxy-16.png" alt="90nginx" width="720" height="43" />

<span style="font-weight: 400;">8. Finally, just installing the </span>**nginx-plus** <span style="font-weight: 400;">package is left, which will be done in this step. This will overwrite any previous iteration of the software installed in the system</span>

<img class="alignnone size-large wp-image-2207" src="/assets/Proxy-17.png" alt="repository information" width="720" height="44" />

### <span style="font-weight: 400;">Installation process of NGINX Plus on FreeBSD:</span>

<span style="font-weight: 400;">FreeBSD is an OS which is hardly known to anyone outside the IT and Computer-Science industry as it is mainly used as an OS for servers. Although not visible to the end-users, this operating system acts as a building block in most multinational companies. So, it is obvious that NGINX Plus can be run on most of its current versions, which are:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">FreeBSD versions 10.3+ (x86_64)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">FreeBSD versions 11.0+ (x86_64)</span>
</li>

<span style="font-weight: 400;">Here is the step-by-step installation guide for </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">on all the supported versions of FreeBSD:</span>

<span style="font-weight: 400;">1. Again, start by creating a directory </span>**/etc/ssl/nginx**

<img class="alignnone size-large wp-image-2209" src="/assets/Proxy-18.png" alt="nginx-plus" width="720" height="65" />

<span style="font-weight: 400;">2. Now visit the NGINX Plus Customer Portal and log in, then download the files </span>**nginx-repo.key** <span style="font-weight: 400;">and </span>**nginx-repo.crt**

<span style="font-weight: 400;">3. Then copy these downloaded files to the directory created previously, i.e. </span>**/etc/ssl/nginx/**

<img class="alignnone size-large wp-image-2210" src="/assets/Proxy-19.png" alt=" /etc/ssl/nginx" width="720" height="59" />

<span style="font-weight: 400;">4. Now, install the package </span>**ca_root_nss** <span style="font-weight: 400;">which is required for further operation</span>

<img class="alignnone size-large wp-image-2212" src="/assets/Proxy-21-1.png" alt="/etc/ssl/nginx/" width="720" height="50" /><span style="font-weight: 400;">5. Copy the file named </span>**nginx-plus.conf** <span style="font-weight: 400;">to the directory </span>**/etc/pkg/**

<img class="alignnone size-large wp-image-2213" src="/assets/Proxy-22.png" alt="ca_root_nss" width="720" height="67" />

<span style="font-weight: 400;">6. </span><span style="font-weight: 400;">Now edit the </span>**/usr/local/etc/pkg.conf** <span style="font-weight: 400;">file and add the lines</span>

&nbsp;

<img class="alignnone size-large wp-image-2214" src="/assets/Proxy-23.png" alt="Copy the file named nginx-plus.conf to the directory /etc/pkg/" width="720" height="86" />

<span style="font-weight: 400;">7. This is the last step of the process, here the </span>**nginx-plus** <span style="font-weight: 400;">package is installed and any older version of the software is overwritten</span>

<img class="alignnone size-large wp-image-2215" src="/assets/Proxy-24.png" alt="/usr/local/etc/pkg.conf" width="720" height="49" />

### <span style="font-weight: 400;">Installation process of NGINX Plus on SUSE Linux Enterprise Server Operating System:</span>

<span style="font-weight: 400;">The Linux SUSE Enterprise Server was developed by an organisation called SUSE. The sole purpose of this OS is to work on servers, workstations, and mainframes. It is also used sometimes to perform tests on desktop computers. NGINX Plus is available on the current version of this OS, i.e.</span>

<span style="font-weight: 400;"> </span><span style="font-weight: 400;">SUSE Linux Enterprise Server version 12 and 12 SP1 (x86_64)</span>

<span style="font-weight: 400;">To install </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">on this OS just follow these steps:</span>

<span style="font-weight: 400;">1. First step, as always, is creating the directory </span>**/etc/ssl/nginx**

<img class="alignnone size-large wp-image-2216" src="/assets/Proxy-25.png" alt="nginx-plus" width="720" height="61" />

<span style="font-weight: 400;">2. Download the </span>**ngin-repo.key** <span style="font-weight: 400;">and </span>**nginx-repo.crt** <span style="font-weight: 400;">files from the NGINX Plus Customer Portal after logging in.</span>

<span style="font-weight: 400;">3. Now, create a file bundle for the key and the certificate</span>

<img class="alignnone size-large wp-image-2217" src="/assets/Proxy-26.png" alt="/etc/ssl/nginx" width="720" height="81" />

<span style="font-weight: 400;">4. Again, install the </span>**ca-certificates** <span style="font-weight: 400;">dependency like before</span>

<img class="alignnone size-large wp-image-2218" src="/assets/Proxy-27.png" alt="create a file bundle for the key and the certificate" width="720" height="51" />

<span style="font-weight: 400;">5. Now add the repo file </span>**nginx-plus**

<img class="alignnone size-large wp-image-2219" src="/assets/Proxy-28.png" alt="install the ca-certificates dependency" width="720" height="83" />

<span style="font-weight: 400;">6. This is the final step and as always, just install the </span>**nginx-plus** <span style="font-weight: 400;">package here, and this will wipe any previous versions of it present on the system</span>

<img class="alignnone size-large wp-image-2220" src="/assets/Proxy-29.png" alt="nginx-plus" width="720" height="47" />

<span style="font-weight: 400;">Dynamically Loadable Modules in NGINX Plus:</span>

<span style="font-weight: 400;">Now that the software has been installed on the system, here is a basic idea of the Dynamically Loadable modules that can be added in NGINX Plus. The pre-built version of this software comes with a number of utilitarian features, but to add more then some of these extra add-ons have to be used depending on the requirements. Now these modules are divided into three classes, they are:</span>

**1. NGINX-made dynamic modules –** <span style="font-weight: 400;">these are the modules which are designed and maintained by NGINX, Inc. themselves. These modules are:</span>

* **nginx-plus-module-image-filter**
* **nginx-plus-module-geoip**
* **nginx-plus-module-xslt**
* **nginx-plus-module-perl**
* **nginx-plus-module-njs**

**2. NGINX-certified dynamic modules made by the community –** <span style="font-weight: 400;">there is a very active community which constantly tries to improve and add to the NGINX Plus features and services. Some of the popular modules in this category get tested by NGINX and these are distributed through the NGINX module repository. These modules are:</span>

* **nginx-plus-module-headers-more**
* **nginx-plus-module-passenger**
* **nginx-plus-module-set-misc**
* **nginx-plus-module-rtmp**
* **nginx-plus-module-lua**

**3. Community-made dynamic modules &#8211;** <span style="font-weight: 400;">these modules are made and distributed by third party members. Their source code has to be downloaded from the author’s library and compiled against the version of NGINX Open Source which corresponds to the NGINX Plus version that is being used. For a list of such third party modules just visit the NGINX Wiki page.</span>

### <span style="font-weight: 400;">Installation process of Dynamically Loadable Modules made by NGINX, Inc. in different Operating Systems:</span>

<span style="font-weight: 400;">The process of installing NGINX-authored modules is simple and it takes just a single step in different OSs since they can be directly downloaded from the modules repository. Here are the processes for different systems: </span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Debian and Ubuntu:</span>
</li>

<img class="alignnone size-large wp-image-2221" src="/assets/Proxy-30.png" alt="In Debian and Ubuntu" width="720" height="47" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Amazon Linux, RHEL, Oracle Linux, and CentOS:</span>
</li>

<img class="alignnone size-large wp-image-2222" src="/assets/Proxy-31.png" alt="In Amazon Linux, RHEL, Oracle Linux, and CentOS" width="720" height="47" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In SLES:</span>
</li>

<img class="alignnone size-large wp-image-2223" src="/assets/Proxy-32.png" alt="In SLES" width="720" height="49" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In FreeBSD:</span>
</li>

<img class="alignnone size-large wp-image-2224" src="/assets/Proxy-33.png" alt="In FreeBSD" width="720" height="46" />

<span style="font-weight: 400;">Certain modules are unavailable for certain operating systems due to software-based limitations. To get elaborate details about the different modules for </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">then visit the technical specifications page of NGINX Plus.</span>

<span style="font-weight: 400;">Installation process of Dynamically Loadable Modules made by NGINX, Inc. in different Operating Systems:</span>

<span style="font-weight: 400;">Since most 3</span><span style="font-weight: 400;">rd</span> <span style="font-weight: 400;">party modules are not tested by NGINX they are not available directly through the module repository and installing them is not as simple as the ones which are first party authorised. Also, the reliability of these modules is not guaranteed, so it is best if they are compiled on a separate system so that they don’t affect the system on which the update the NGINX Plus software is to be made. This second system will henceforth be referred to as “test environment” while the primary system will be called “main environment”. The steps that need to be followed to successfully implement a 3</span><span style="font-weight: 400;">rd</span> <span style="font-weight: 400;">party module is given below:</span>

**1. Preparing the test environment- <span style="font-weight: 400;">the test environment needs to have the following aspects:</span>**

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Same OS as the main environment</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Name version of NGINX as the main environment</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Compiler and the make utilities</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Zlib compression libraries (development files)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">PCRE library (development files)</span>
</li>

<span style="font-weight: 400;">To ensure that the test environment has all these prerequisites properly set up, just run the correct command:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Ubuntu and Debian:</span>
</li>

<img class="alignnone size-large wp-image-2225" src="/assets/Proxy-34.png" alt="In Ubuntu and Debian" width="720" height="54" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Oracle Linux, CentOS, and RHEL:</span>
</li>

<img class="alignnone size-large wp-image-2226" src="/assets/Proxy-35.png" alt="In Oracle Linux, CentOS, and RHEL" width="720" height="55" />

**2. Open Source NGINX- <span style="font-weight: 400;">as mentioned earlier, in order to compile and run the 3</span><span style="font-weight: 400;">rd</span> <span style="font-weight: 400;">party modules, a prerequisite is the open source NGINX. The steps of getting it are</span>**

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Check the version of NGINX Plus on the system and find the version of open source NGINX which matches it.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Download that version of open source NGINX, for example, here the 1.13.4 version is used</span>
</li>

<img class="alignnone size-large wp-image-2227" src="/assets/Proxy-36.png" alt="Open Source NGINX" width="720" height="83" />

**3. Obtaining the dynamic module source- <span style="font-weight: 400;">any directory in the test environment can be used to place the dynamic module in. As an example, here the GitHub module </span>NGINX “Hello World” module <span style="font-weight: 400;">is being used</span>**

&nbsp;

<img class="alignnone size-large wp-image-2228" src="/assets/Proxy-37.png" alt="Obtaining the dynamic module source" width="720" height="75" />

&nbsp;

**4. Compiling the dynamic module- <span style="font-weight: 400;">first, form binary compatibility using the script </span><span style="font-weight: 400;">configure</span> <span style="font-weight: 400;">along with the </span><span style="font-weight: 400;">&#8211;with-compat</span> <span style="font-weight: 400;">option, after which the module using the script </span><span style="font-weight: 400;">make</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;">modules </span><span style="font-weight: 400;">can be compiled</span><span style="font-weight: 400;">.</span>**

<img class="alignnone size-large wp-image-2229" src="/assets/Proxy-38.png" alt="Compiling the dynamic module" width="720" height="105" />

<span style="font-weight: 400;">A </span>**.so** <span style="font-weight: 400;">file is generated by this build; now place it in the directory named </span>**objs**

<img class="alignnone size-large wp-image-2230" src="/assets/Proxy-39.png" alt="objs" width="720" height="75" />

**5. Saving the module- <span style="font-weight: 400;">now copy the module file and add the version of the open source NGINX, this makes the process of managing multiple versions of a dynamic module much easier in the main environment.</span>**

<img class="alignnone size-large wp-image-2231" src="/assets/Proxy-40.png" alt="Saving the module" width="720" height="75" />

### <span style="font-weight: 400;">Activating the different Dynamic modules:</span>

<span style="font-weight: 400;">All dynamic modules are sorted and placed in the directory </span>**/etc/nginx/modules.** <span style="font-weight: 400;">This directory is automatically created at the time of installation of NGINX Plus.</span>

<span style="font-weight: 400;">To activate a Dynamic Module in NGINX Plus follow the steps:</span>

<span style="font-weight: 400;">1. Go to the</span> <span style="font-weight: 400;">main</span> <span style="font-weight: 400;">context in </span>**/etc/nginx/nginx.conf**<span style="font-weight: 400;">, and add a </span>[<span style="font-weight: 400;">load_module</span>](https://nginx.org/en/docs/ngx_core_module.html#load_module) <span style="font-weight: 400;">directive separately for each module that has already installed and needs to be activated</span>

<img class="alignnone size-large wp-image-2232" src="/assets/Proxy-41.png" alt=" /etc/nginx/nginx.conf" width="720" height="55" />

<span style="font-weight: 400;">2. Now check whether the new configuration is valid syntactically and restart NGINX Plus</span>

<img class="alignnone size-large wp-image-2233" src="/assets/Proxy-42.png" alt="restart NGINX Plus" width="720" height="48" />

### **Upgrading the version of NGNIX Plus**

<span style="font-weight: 400;">After going through this article it is pretty obvious that the importance of keeping an up-to-date version of </span><span style="font-weight: 400;">NGNIX reverse proxy</span> <span style="font-weight: 400;">cannot possibly be exaggerated. So, here is the process that needs to be followed in order to update the NGINX plus software whenever new updates are available:</span>

<span style="font-weight: 400;">1. If </span><span style="font-weight: 400;">NGINX reverse proxy</span> <span style="font-weight: 400;">is already being used in the system and all the present data needs to be kept intact then this step will help in keeping a backup of all configuration and log files</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Linux distributions:</span>
</li>

<img class="alignnone size-large wp-image-2234" src="/assets/Proxy-43.png" alt="In Linux distributions:
" width="720" height="82" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In FreeBSD:</span>
</li>

<img class="alignnone size-large wp-image-2235" src="/assets/Proxy-44.png" alt="In FreeBSD" width="720" height="102" />

<span style="font-weight: 400;">2. This step is for upgrading to the new version of NGINX</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Amazon Linux, RHEL, Oracle Linux, and CentOS</span>
</li>

<img class="alignnone size-large wp-image-2236" src="/assets/Proxy-45.png" alt="In Amazon Linux, RHEL, Oracle Linux, and CentOS" width="720" height="53" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In Ubuntu and Debian</span>
</li>

<img class="alignnone size-large wp-image-2237" src="/assets/Proxy-46.png" alt="In Ubuntu and Debian
" width="720" height="82" />

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In FreeBSD</span>
</li>

<img class="alignnone size-large wp-image-2238" src="/assets/Proxy-47.png" alt="In FreeBSD
" width="720" height="49" />

<span style="font-weight: 400;">3. Finally, this step is to verify that the version of NGNIX Plus that was just installed is running properly or not</span>

<img class="alignnone size-large wp-image-2239" src="/assets/Proxy-48.png" alt="NGNIX Plus" width="720" height="75" />

### **Upgrading the Dynamically Loadable Modules in NGNIX Plus**

<span style="font-weight: 400;">After upgrading the NGNIX Plus software the last thing that is left to do is to update the modules that are installed. Now the process of doing this varies from module to module and it is dependent on the source from which the module was downloaded and the procedure by which it was installed. Broadly there are two main methods of upgrading modules, they are:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">In case of first-party modules, i.e. those modules which have been either authored by NGINX, Inc. or have been tested and certified by the same are automatically updated when the </span><span style="font-weight: 400;">NGINX reverse proxy</span><span style="font-weight: 400;"> is updated.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The problem arises with third-party modules since they cannot really be updated straight away. In this case, the resources have to be downloaded and again the modules have to be compiled in the open source NGNIX version which corresponds to the new-system’s version.</span>
</li>

### **Conclusion**

<span style="font-weight: 400;">Setting up NGINX Reverse proxy is difficult. It requires the correct sequence and order to follow. It has got few weak points. For instance, it neither supports weighting nor provides a least-connection algorithm. Although there are free handlers available, Nginx will divert the traffic to an overloaded upstream handler. Thus, to curb the insecurity, </span>[<span style="font-weight: 400;">Lime Proxies</span>](http://www.limeproxies.com/) <span style="font-weight: 400;">can be considered as one of the best alternative. In terms of balancing configuration and monitoring support, it’s the best thing since slice bread. </span>

<p style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://bit.ly/2KGnK7G">GET STARTED FOR FREE</a></button>
</p>

&nbsp;
