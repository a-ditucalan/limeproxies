---
meta_title: Learn How To Get A Static IP Address In Windows 10
yoast_keyword: Static IP Address
description: >-
  There are few questions which must be answered before we proceed to our main
  topic how to get static IP address. Every computer has two IP addresses
path: /how-to-get-a-static-ip-address-in-windows-10/
title: How To Get A Static IP Address In Windows 10?
author: Rachael Chapman
date: 2018-09-19T13:27:13.000Z
excerpt: >-
  Static IPs should be arranged physically. You should roll out a couple of
  improvements to your switch design, as well.
thumbnail: /assets/Windows-10-03.png
altText: Advantages of static ip address
tags:
  - IP Address
  - Static IP Address
  - Static IP Address In Windows 10
---
<span style="font-weight: 400;">There are few questions which must be answered before we proceed to our main topic how to get static <a href="/blog/rotate-ip-address/" target="_blank" rel="noopener noreferrer">IP address</a>. If you are already familiar with these questions, well & good if not go through these before proceeding to the main topic for complete understanding.</span>

<span style="font-weight: 400;">One must know;</span>

### **What is the static IP address?**

<span style="font-weight: 400;">Every computer user whether he or she is using in home or office has two IP addresses when he is connected with the <a href="/blog/how-to-speed-up-your-internet/" target="_blank" rel="noopener noreferrer">internet</a>.</span>

<span style="font-weight: 400;">One external address which defines your location for the world which means one that is known as your internet IP for all other users. When you get an internet connection this external IP address is provided to you by an internet service provider. This is routed on the internet and this can be changed by changing internet connection you are using.</span>

<span style="font-weight: 400;">Other internal address or you may call it private IP address which is given to your computer by your router. This IP address can’t be routed on the internet and is only for use inside your local network hence is called as private IP address.</span>

<span style="font-weight: 400;">This IP address mostly looks like 192.168._.._. (there may be any number ).</span>

<span style="font-weight: 400;">In simple words, we can say that the first computer you connect to your router if has IP address 192.186.1.2 then next computer connected to the same router will have IP address 192.168.1.3</span>

### **What is different between Static and Dynamic IP address?**

<span style="font-weight: 400;">Your router in all probability relegates dynamic IP addresses as a matter of course. Routers do this in light of the fact that having a dynamic IP address arrange requires no configuration on your part.</span>

<span style="font-weight: 400;">You can essentially connect to your PC and the system will work. At the point when IP addresses are doled out dynamically, it is the router&#8217;s business to allow them. Each time a PC reboots it approaches the router for an IP address.</span>

<span style="font-weight: 400;">The router at that point hands the PC an IP address that has not as of now been passed out to another PC. This is imperative since when you set your PC to a static IP address, the router doesn&#8217;t realize that a PC is now utilizing that IP address. That same IP address could be passed out to another PC later on.</span>

<span style="font-weight: 400;">This will keep the two PCs from interfacing with the Internet. It&#8217;s imperative to allow an IP address that won&#8217;t be passed out to an alternate PC by the dynamic IP address server. The dynamic IP address server is, for the most part, alluded to as the DHCP server.</span>

<span style="font-weight: 400;">After this the most frequently asked question is;</span>

### **Why would I need Private/internal static IP address?**

<span style="font-weight: 400;">If we look into the postal system when someone tries to send a letter to another person what he must mention is his address and address of the recipient.</span>

<span style="font-weight: 400;">Without the address of the recipient the letter would not be delivered to the right person and without mentioning the sender address, if luckily letter is received at the right place, would be never possible to know who sent this letter. This is what done in computer technology with IP addresses. If you want to send some <a href="/blog/businesses-running-outdated-operating-systems-taking-huge-risk-data-breaches/" target="_blank" rel="noopener noreferrer">data</a> to a computer via the internet you will need an IP address.</span>

## <img class="alignnone size-large wp-image-2468" src="/assets/Windows-10-03.png" alt="Static IP Address In Windows 10" width="720" height="360" />

<span style="font-weight: 400;">Static IPs should be arranged physically. You should roll out a couple of improvements to your switch design, as well.</span>

<span style="font-weight: 400;">In this regard, they are said to have an &#8220;organization overhead,&#8221; since you have to monitor the settings yourself. For home systems, this, for the most part, isn&#8217;t an issue with just a couple of machines to stress over.</span>

<span style="font-weight: 400;">In any case, for organizations, this is a significant issue.</span>

<span style="font-weight: 400;">Without switch setup, you are additionally prone to see more IP address strife mistakes.</span>

<span style="font-weight: 400;">For instance, on the off chance that you set one of your machines to the IP address 192.168.0.10, and your switch keeps on distributing IP addresses naturally, at that point sooner or later, another machine will be given a similar IP! Fundamentally, static IPs can be very risky.</span>

### **How to fix these disadvantages?**

<span style="font-weight: 400;">Rather than having to physically design the settings on each PC we need to give a static IP address to, we will basically &#8220;save&#8221; the address we need to give them in the switch&#8217;s programmed IP address framework.</span>

<span style="font-weight: 400;">By doing this, we guarantee our machines have an IP address that will never show signs of change, without really relegating a &#8220;static&#8221; IP address all things considered, which would muddle things. To do this, open up your switch setup page and search for an area on DHCP or LAN IP.</span>

<span style="font-weight: 400;">Take a gander at the segment named Static Leases or Reserved Lease Info. There are at least two fields that should be filled in. First is the MAC address (6 sets of alphanumeric characters), which is exclusive to each system on the planet. Second is the IP you wish to relegate it.</span>

<span style="font-weight: 400;">You ought to have the capacity to see your MAC address in the rundown of current &#8220;rents&#8221; (a rent alludes to the address that the switch has consequently assigned to your gadget) next to the IP it is presently allocated.</span>

<span style="font-weight: 400;">If not, type IPCONFIG/ALL (from Windows charge incite) or IFCONFIG (from an OS X Terminal) and search for either the Ethernet or Physical Address.</span>

<span style="font-weight: 400;">For this situation, I need the gadget with the MAC address E0: CB: 4E:A5:7C:9D, presently with IP 192.168.0.10, to make this permanent, enter this data to make another saved address.</span>

<span style="font-weight: 400;">Now that you are quite familiar with Private IP address, let&#8217;s dive into our main topic;</span>

### **How To Get A Static IP Address In Windows 10?**

<span style="font-weight: 400;">You may find many articles on the World Wide Web but most commonly there are always few things missing which troubles you while you are trying to get a static IP address.</span>

<span style="font-weight: 400;">However, this write-up explains the process step by step. Just go through it, get the IP address very easily.</span>

<span style="font-weight: 400;">If you are using window 10 here is how you can get your static IP address.</span>

## **Step 1:**

<img class="alignnone size-large wp-image-2454" src="/assets/1.jpg" alt="window 10 here is how you can get your static IP address" width="720" height="470" />

<span style="font-weight: 400;">Clicking the window sign on the left bottom corner of the screen or click the window button on the keyboard for the menu. On the appearance of the Start Menu, you will find a search box at the bottom of the menu. Type “cmd” in the search box and strike the “Enter” button</span>

## **Step 2:**

<img class="alignnone size-full wp-image-2455" src="/assets/2-1.png" alt="ipconfig/all” and press “Enter”." width="754" height="420" />

<span style="font-weight: 400;">On doing this, right in front of you will find a black screen which is “command prompt screen”. It may differ in look but will essentially show you C drive direction to admin. You need to type here “ ipconfig/all” and press “Enter”.</span>

## **Step 3:**

<span style="font-weight: 400;">Once you do this a similar screen will appear showing more data, what you need to note is “IPv4 address”, “Subnet Mask”, and the “DNS Servers”.</span>

## **Step 4:**

<span style="font-weight: 400;">Now, to exit the command prompt screen type “exit” and press “Enter”, you will get back to the original window screen.</span>

## **Step 5:**

<span style="font-weight: 400;">Open the start menu by clicking the window button on the keyboard or clicking the window icon on the left bottom of the screen. This time in search box, type “control panel” and press “Enter”</span>

## **Step 6:**

<img class="alignnone size-full wp-image-2456" src="/assets/60.png" alt="“IPv4 address”, “Subnet Mask”, and the “DNS Servers”" width="989" height="523" />

<span style="font-weight: 400;">You will find screen showing system and security, user accounts network and internet, appearance and personalization, hardware and sound etc. look under the heading of “Network and Internet” you will find subheading “View network status and tasks” click it.</span>

## **Step 7:**

<img class="alignnone size-full wp-image-2457" src="/assets/70.png" alt="“exit” and press “Enter”" width="720" height="358" />

<span style="font-weight: 400;">You will be moved to another page where you will find “Change adapter settings” click it for further process.</span>

## **Step 8:**

<img class="alignnone size-full wp-image-2458" src="/assets/80.png" alt="type “control panel” and press “Enter”" width="354" height="400" />

<span style="font-weight: 400;">Now, right click on WiFi icon and go to properties.</span>

## **Step 9:**

<img class="alignnone size-full wp-image-2459" src="/assets/90.png" alt="“Network and Internet” " width="410" height="450" />

<span style="font-weight: 400;">Once you got properties of your connection on screen, look for “Internet Protocol Version 4 (TCP/IPv4)” check it right and click “properties” option on the bottom of the dialog box.</span>

<span style="font-weight: 400;">Here we go now you will have a screen showing two options</span>

1. <span style="font-weight: 400;">     obtain an IP address automatically</span>
2. <span style="font-weight: 400;">     use the following IP address</span>

<span style="font-weight: 400;">To get static IP address click “use the following IP address”</span>

<span style="font-weight: 400;">Insert new IP address in box “IP address”, this address must be the address of your router except for the last digit. Let for example if your router’s IP address is 192.168.1.1 make sure your entered IP must not have 1 at the end it can 192.168.1.3 or some other number.</span>

<span style="font-weight: 400;">The last digit of the IP address can be any number from 2 to 253.</span>

## **Step 10:**

<span style="font-weight: 400;">Now you will need the data you in earlier steps from “command prompt”. You need to insert those data here and here you are, you have got your static IP address.</span>

### **How to get static IP address using command prompt?**

<span style="font-weight: 400;">Using command prompt is a bit challenging; however, it is quest way of getting static IP address. Here is how you can do it.</span>

## **Step 1:**

<img class="alignnone size-large wp-image-2461" src="/assets/1-1.jpg" alt="Change adapter settings" width="720" height="470" />

<span style="font-weight: 400;">To open command prompt click open start menu by pressing the window button on the keyboard and type “cmd” in the search box and click “Enter”</span>

<span style="font-weight: 400;">In case you are not using window 10 go to start the search for command prompt. Right click on the icon and click “run as administrator”.</span>

## **Step 2:**

<img class="alignnone size-full wp-image-2462" src="/assets/2-20.png" alt="right click on WiFi icon and go to properties" width="630" height="605" />

<span style="font-weight: 400;">Now type “ipconfig/all” command in command prompt and press enter</span>

## **Step 3:**

<span style="font-weight: 400;">You will find a black screen full with some data what you need to note is</span>

* <span style="font-weight: 400;">        IPv4</span>
* <span style="font-weight: 400;">        Subnet mask</span>
* <span style="font-weight: 400;">        Default Gateway</span>
* <span style="font-weight: 400;">        DNS Servers</span>

## **Step 4:**

<img class="alignnone size-full wp-image-2463" src="/assets/41.png" alt="Internet Protocol Version 4 " width="671" height="246" />

<span style="font-weight: 400;">Now type in the command “netsh interface ip set address name=&#8221;Ethernet0&#8243; static 10.1.2.220 255.255.255.0 10.1.2.1” and press “Enter”</span>

<span style="font-weight: 400;">Here what you need to change is Ethernet0 zero with the name of your “Adopter” and all the date shown here must be replaced with your device’s data.</span>

## **Step 5:**

<img class="alignnone size-full wp-image-2464" src="/assets/51.png" alt="Static IP Address In Windows 10" width="664" height="249" />

<span style="font-weight: 400;">“netsh interface ip set dns name=&#8221;Ethernet0&#8243; static 10.1.2.1” type this with all required changes and press “Enter”</span>

## **Step 6:**

<img class="alignnone size-full wp-image-2465" src="/assets/6-1.png" alt="Static IP Address In Windows 10" width="668" height="265" />

<span style="font-weight: 400;">Now write “netsh interface ip add dns name=&#8221;Ethernet0&#8243; 8.8.8.8 index=2” in command prompt. Make sure to change things mentioned above.  You are ready to go now.</span>

<span style="font-weight: 400;">To check your setting you can make use of “ping” command.</span>

<span style="font-weight: 400;">Another way to check if your configuration is working is to open web-browser and search for any website if it is working properly this means your configuration is correctly done.</span>

### **How to get Static IP address Using PowerShel?**

<span style="font-weight: 400;">This technique is used these days. As window 10 also comes with powerShell. This process involves very simple steps which are discussed here.</span>

## **Step 1:**

<img class="alignnone size-full wp-image-2473" src="/assets/1-1.png" alt="Static IP Address In Windows 10" width="423" height="450" />

<span style="font-weight: 400;">Open Start Menu.</span>

## **Step 2:**

<span style="font-weight: 400;">Look for PowerShell. Right click on it and select “run as an administrator”</span>

## **Step 3:**

<img class="alignnone size-full wp-image-2474" src="/assets/3.jpg" alt="Static IP Address In Windows 10" width="648" height="278" />

<span style="font-weight: 400;">Once you do this a new environment page will appear in front you. Now write “Get-NetIPConfiguration”  this code and press “Enter”.</span>

## **Step 4:**

<span style="font-weight: 400;">A new page will appear containing information. Just note down</span>

* <span style="font-weight: 400;">        InterfaceIndex</span>
* <span style="font-weight: 400;">        IPv4Address</span>
* <span style="font-weight: 400;">        IPv4DefaultGateway</span>
* <span style="font-weight: 400;">        DNSServer</span>

<span style="font-weight: 400;">As these will be used in steps ahead for configuration</span>

## **Step 5:**

<img class="alignnone size-full wp-image-2475" src="/assets/5-1.png" alt="Static IP Address In Windows 10" width="986" height="369" />

<span style="font-weight: 400;">Now you can make use of this command “New-NetIPAddress -InterfaceIndex 4 -IPAddress 10.1.2.220 -PrefixLength 24 -DefaultGateway 10.1.2.1” to set static IP address.</span>

<span style="font-weight: 400;">Note that in the above command data entered is just taken as an example, when you are working with your PC you need to change the addresses with real addresses of your PC.</span>

## **Step 6:**

<img class="alignnone size-full wp-image-2476" src="/assets/6-2.png" alt="Static IP Address In Windows 10" width="984" height="171" />

<span style="font-weight: 400;">Now type “Set-DnsClientServerAddress -InterfaceIndex 4 -ServerAddresses 10.1.2.1” and press “Enter”. This will assign DNS server address. If you need to add another secondary DNS you can make use of this command just separating the addresses by a comma.</span>

<span style="font-weight: 400;">(Note that in above command data entered is just taken as an example, when you are working with your PC you need to change the addresses with real addresses of your PC.)</span>

<span style="font-weight: 400;">Once you are done with it, you can check whether or not your configuration is working you simply need to open a browser and search for any website.</span>

### **Why we prefer Static IP address?**

<span style="font-weight: 400;">IP addresses is the address that PCs associated with the Internet use to find and speak with each other. The two noteworthy kinds of IP addresses are static, where a PC keeps a solitary IP address, and dynamic, where the system assigns another address each time the system connects with the router.</span>

### **Running servers:**

<span style="font-weight: 400;">One of the greatest focal points of a static IP address is that PCs utilizing this kind of address can have servers containing information that different PCs access through the Internet. A static IP address makes it simpler for PCs to find the server from anyplace on the planet.</span>

<span style="font-weight: 400;">Moreover, PCs that permit remote access on a shut system work best with static IP addresses. This permits diverse sorts of PCs running distinctive working frameworks to get to the host framework via hunting down a similar IP address without fail.</span>

### **Steadiness:**

<span style="font-weight: 400;">Static IP addresses are likewise steadier for Internet use since they never show signs of change. For a dynamic IP address, the Internet specialist organization may naturally change the address all the time or at regular intervals.</span>

<span style="font-weight: 400;">This can cause a slip by in the client&#8217;s association. The PC may likewise experience difficulty reconnecting to the Internet utilizing the new address. Utilizing a static IP address dodges these potential issues.</span>

### **Straightforwardness:**

<span style="font-weight: 400;">Static IP addresses are easier to dole out and keep up. For admins, it en</span><span style="font-weight: 400;">ds up less demanding to track Internet activity and relegate access to specific clients in light of IP address ID.</span>

<span style="font-weight: 400;">Dynamic addresses require a program that relegates and changes IP addresses and may expect clients to change the settings on their PCs.</span>

<p style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="/pricing" target="_blank" rel="noopener noreferrer">GET STARTED FOR FREE</a></button>
</p>
