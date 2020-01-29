---
meta_title: Learn To Renew IP Address in Windows 10 | LimeProxies
yoast_keyword: learn to renew ip address in windows 10
description: >-
  One of the most important networking device is the router, which helps in
  connecting one network to the other, decides based on predefined set of rules 
path: /how-to-renew-ip-address-in-windows-10/
title: How To Renew IP Address in Windows 10
author: Rachael Chapman
date: 2018-10-24T06:08:18.000Z
excerpt: >-
  Networking in simple terms is a way of sharing data between devices. These
  devices can be under a private network such as school, small offices, etc to a
  global network which is usually called the Internet or the world wide web.
thumbnail: /assets/Renew-IP-Address-in-Windows-10-02.png
altText: 'What is  DHCP Server '
tags:
  - IP address windows
  - ''
---
**Networking** in simple terms is a way of sharing data between devices. These devices can be under a private network such as school, small offices, etc to a global network which is usually called the <a href="/blog/how-to-speed-up-your-internet/" target="_blank" rel="noopener noreferrer">Internet or the world wide web.</a>

Networking started in the late 1950s by the US military and by 2016 we were able to send up to 100 Gbit/s with the help of fiber technology. Networking devices or components such as routers, switches, optic cables, etc play an important role in establishing and maintaining the network infrastructure.

<a href="/blog/difference-between-big-data-vs-data-science-vs-data-analytics/" target="_blank" rel="noopener noreferrer">Data</a> is transmitted in the form of packets in a computer network with the help of packet switching. There are various network topologies that help in completing the packet transmission such as star, mesh, bridge topology to name a few.

The revolution in networking started after the introduction of wireless networks. Where a wired network uses cables for connection, a wireless network uses radio waves. Wireless network had a number of advantages like:

* **Mobility:** Users have the freedom to move around without being worried about getting tangled and restricted with the wires
* **Easy Setup:** Compared to wired networks, wireless network doesn’t need installing costly wires, maintenance, etc
* **Expansion:** Wireless network is easy to expand as there is no need to get additional wires, break and join the already existing network.
* **Cost:** When all the above advantages are compared, it is easy to conclude that the wireless network is cost effective.

When it comes to a wireless device, it can work in three major modes and this, in turn, decides the role of that particular device in the network. A wireless network will always be a combination of devices in these modes.

One of the most important networking device is the router, which helps in connecting one network to the other, decides based on predefined set of rules as to which traffic will pass through them and most important is that they assign <a href="/blog/rotate-ip-address/" target="_blank" rel="noopener noreferrer">IP addresses</a> to the devices that are connected to them.

### The three major type of modes are

**1. Client:** Devices like the phone or PCs are basic Clients. When you are connecting to a remote hotspot or the switch near you, that device becomes the Client. This mode is otherwise called as &#8220;station mode&#8221;

Some routers can be used as Clients too, which enables them to act like a wireless adapter, and this allows it to connect with different Access Points. This can connect two Ethernet points to each other or other access points.

**2. Access point:** Most of the network’s foundation are access points and they allow devices like Mobiles, Tablets, etc to connect to them and also control them. In case you utilize Wifi in your home or office, it is probably through an Access Point. A router can be called “Master” if it is set up as an access point.

**3. Mesh:** There are some devices available like a phone, laptop, etc that support a mode where the devices can connect to each other without the need for an Access Point controlling them. Such a network is often referred to as “Ad-hoc Network”. Each device is responsible for sending and receiving data. As such type of network forms a Mesh, they are also referred to as Mesh Network.

### What is a DHCP?

<img class="alignnone size-full wp-image-2797" src="/assets/Renew-IP-Address-in-Windows-10-02.png" alt="how to renew ip address" width="720" height="360" />

As we know that a network consists of a lot of devices trying to communicate to each other or to the outside world, it is crucial to know how these devices are identified on a network.

DHCP stands for Dynamic Host Configuration Protocol which is responsible for assigning an IP address to the devices connected to the access point and runs on the Application layer. This allocation can be dynamic or static depending on the configuration.

When a device is connected to the network, it automatically sends a request to the DHCP server and the DHCP server acknowledges the request and assigns the IP address.

DHCP has the details of all the IPs assigned to the devices in a network so that in case a device is connected, it could be identified with the help of MAC number and this helps in assigning different IPs everytime.

<img class="alignnone size-full wp-image-2798" src="/assets/Renew-IP-Address-in-Windows-10-03.png" alt="how to renew ip address" width="720" height="360" />

**Dynamic IP Allocation:** In this type, any device on the network is not permanently assigned an IP, instead the device leases the IP. So even if the device connects to the same network later, it might be allocated a different IP address.

* The device request IP address from the DHCP server and is allocated an IP
* This IP address is allocated for a limited period of time and after the time gets over, the device contacts the DHCP server to renew the lease
* Once the device gets disconnected, the allocated IP address is now released back.

**Static IP Allocation:** This works in a similar way with an exception that the IP address assigned to a device is pre-defined. This is done with the help of MAC address.

Using a router, admin can specify the IP address that has to be allocated to a particular MAC address of a device.

After the IP is allocated to the device in the network, after the lease time gets over, the device has to renew or release the IP address. But sometimes this doesn’t happen and the DHCP may assign the same IP to a different device, if the first device logs into the network again and still uses the old IP, there will be IP conflict and the devices will not function properly.

### How To Renew IP Address in Windows 10

After the device is connected to the router, it is assigned an IP address by the DHCP. This IP address can be forcefully returned or changed

1. Open the command prompt by clicking on “Start” and searching “cmd”.
2. Right click and select the option “Run as administrator”
3. Use the command ipconfig /release for forcing the device to release the IP back to the DHCP server

<img class="alignnone size-full wp-image-2799" src="/assets/Screenshot_1.png" alt=" DHCP Server Command Prompt" width="643" height="277" />4. To request the DHCP server for a new IP or to renew the IP address, enter the command ipconfig /renew

<img class="alignnone size-full wp-image-2800" src="/assets/Screenshot_2.png" alt=" DHCP Server Command Prompt" width="644" height="250" />

5. Once the renew command is used, the DHCP server allocates new IP address to the device.

In case there is any network issue, it is always a good idea to refresh the local IP address and the above are simple steps to get this done.

<h2 style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://dashboard.limeproxies.com/?utm_source=blog&utm_content=how%20to%20renew%20ip%20address#/login/signup" target="_blank" rel="noopener noreferrer">GET STARTED FOR FREE</a></button>
</h2>
