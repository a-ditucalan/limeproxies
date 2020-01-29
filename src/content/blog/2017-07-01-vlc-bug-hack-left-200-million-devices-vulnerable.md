---
meta_title: How the VLC Bug Hack Left 200 Million Devices Vulnerable
yoast_keyword: vlc bug hack
description: >-
  The cyber security and research firm Check Point on May 23, 2017, reported the
  discovery of a hack that left 200 million users of multimedia streaming.
path: /vlc-bug-hack-left-200-million-devices-vulnerable/
title: How the VLC Bug Hack Left 200 Million Devices Vulnerable?
author: Expert
date: 2017-07-01T10:48:38.000Z
excerpt: >-
  The cyber security and research firm Check Point on May 23, 2017, reported the
  discovery of a hack that left 200 million users of multimedia streaming
  applications vulnerable to attackers. The hack affects popular media players
  VLC Media Player, Kodi, Popcorn Time and Stremio. While these are the services
  that Check Point analyzed, the prevalence of the vulnerability suggests that
  its reach may go beyond just these media players.
thumbnail: /assets/VLC-1.jpg
altText: VLC Bug Hack
tags:
  - marketing
  - VLC Bug Hack
---
### **Remote Code Execution Vulnerability In VLC Media Player**

[<img class="alignnone wp-image-334" src="/assets/VLC-1.jpg" alt="VLC 1" width="700" height="387" />](http://limeproxies.com/blog/wp-content/uploads/2017/07/VLC-1.jpg)

<span style="font-weight: 400;">The cyber security and <a href="/blog/researchers-use-ridesharing-cars-sniff-secret-spying-tool/">research</a> firm Check Point on May 23, 2017, </span><span style="font-weight: 400;">reported the discovery of a hack</span> <span style="font-weight: 400;">that left 200 million users of multimedia streaming applications vulnerable to attackers. The hack affects popular media players VLC Media Player, Kodi, Popcorn Time and Stremio. While these are the services that Check Point analyzed, the prevalence of the vulnerability suggests that its reach may go beyond just these media players.</span>

<span style="font-weight: 400;">The vulnerability targeted users downloading subtitles from subtitle services. The attackers were able to plant corrupted subtitle files. The hack begins when a user downloads the corrupt subtitle file for a movie onto their computer. The attackers are then able to take over control of a user’s computer and could do everything from locking the user out to corrupting the user’s data on the hard drive.</span>

<span style="font-weight: 400;">The scale of the vulnerability demands the attention of users, especially those with affected versions of the media player software. While some of the software vendors have rushed to release </span><span style="font-weight: 400;">patches</span> <span style="font-weight: 400;">to address the vulnerability, end users need to upgrade to the </span><span style="font-weight: 400;">latest available versions</span> <span style="font-weight: 400;">to avail themselves of the fixes. In case an attacker exploits this remote code execution vulnerability on a user’s computer, the user can entirely lose control over their personal computer. </span>

### **Vulnerability Exploited Via Manipulated Subtitles  **

<span style="font-weight: 400;">In order to spread the executable malware onto users’ devices, the VLC hackers packaged up the corrupted files in subtitle files for media players. To normal users, these files look like harmless subtitle files. A user can download these files manually when looking for a subtitle file for a movie. Alternatively, some media players are set to download the subtitle automatically when the movie begins playing. When the user downloads the file, however, it comes with the hackers’ exploit, enabling the hacker to take over the computer.</span>

<span style="font-weight: 400;">Subtitle files face little scrutiny in the world of media streaming, and most users would never think of them as the source of an attack. Video players, in another oversight, trust the files that get provided as subtitle text files. All of the media players that Check Point analyzed, face vulnerability to attacks that deliver malign instructions via a subtitle text file.</span>

<span style="font-weight: 400;">Part of the problem with the media players is due to the fragmented nature of the subtitle formats. Subtitles for movies come in a variety of formats, like SRT, SBV, SCC, STL, and multiple others. Parsing these different formats is a nightmare, and media player-programmers take different approaches to ensure that whatever file a user provides can play. The lack of a standard makes it harder to implement or enforce <a href="/blog/top-10-information-security-threats-in-2018/" target="_blank" rel="noopener noreferrer">security</a> protocols to avoid problems such as the remote code execution vulnerability.</span>

<span style="font-weight: 400;">What made the situation worse is that attackers are able to manipulate the subtitle text file rankings on subtitle-download websites like </span><span style="font-weight: 400;">Open Subtitles</span><span style="font-weight: 400;">. Once a hacker is able to dominate the entire subtitle value chain, they can </span><span style="font-weight: 400;">feed users an infected subtitle file</span><span style="font-weight: 400;">, and also ensure that that file stays high in the ranks. This perpetuates the reach of the bad file, since ranking depends on existing downloads, with the more popular downloads being preferred by the media player software. </span>

### **A History Of Remote Code Execution Exploitation**

[<img class="alignnone wp-image-336" src="/assets/VLC-3.jpg" alt="VLC 3" width="700" height="394" />](http://limeproxies.com/blog/wp-content/uploads/2017/07/VLC-3.jpg)

<span style="font-weight: 400;">There have been many notable examples of remote code execution hacks in the past, showing the seriousness of this line of <a href="/blog/7-practices-make-organization-vulnerable-cyber-attacks/" target="_blank" rel="noopener noreferrer">cyber attack</a>. </span>

<span style="font-weight: 400;">VLC Media Player, for example, has a </span><span style="font-weight: 400;">history of remote code execution vulnerabilities</span> <span style="font-weight: 400;">dating as far back as 2008. </span>

<span style="font-weight: 400;">In 2014, Brazilian hacker Reginaldo Silva </span><span style="font-weight: 400;">found a remote code execution vulnerability in Facebook</span><span style="font-weight: 400;">. This </span><span style="font-weight: 400;">vulnerability was related to Facebook’s processing of XML entities</span> <span style="font-weight: 400;">related to OpenID. </span>

<span style="font-weight: 400;">OpenID allows users to log into popular accounts using credentials from providers like Facebook and <a href="/blog/latest-seo-trends-and-google-algorithm-update-2018/" target="_blank" rel="noopener noreferrer">Google</a>. </span>

<span style="font-weight: 400;">Facebook’s Bug Bounty program classifies remote code execution flaws as the most serious type of flaw to have since a hacker can do a ton of damage if they are able to run malicious code on Facebook’s servers.  </span>

<span style="font-weight: 400;">Silva also </span><span style="font-weight: 400;">discovered similar remote code execution flaws</span> <span style="font-weight: 400;">affecting Google and StackOverflow, as well as many software libraries in the programming languages Java, C#, Ruby, Python, Perl, and others.</span>

<span style="font-weight: 400;">In 2015, Patreon got hacked due to what may have been a remote code execution flaw in a public debugger they were using. Of the nature of the flaw in the software being used by Patreon, the </span><span style="font-weight: 400;">Detectify Labs writeup on the hack</span> <span style="font-weight: 400;">said,</span>

_**“This is basically Remote Code Execution by design.**_

_**An RCE is basically game over. You can inject code directly into the application, exposing all data on the server which the application has access to.”**_

<span style="font-weight: 400;">The seriousness of this type of hack means that a hacker has control to steal or manipulate data, including user data or financial details, or do a lot more damage than that. </span>

<span style="font-weight: 400;">More recently, Facebook paid out $40,000 in January 2017 to hacker Andrew Leonov for </span><span style="font-weight: 400;">revealing a remote code execution vulnerability</span> <span style="font-weight: 400;">in <a href="/blog/facebook-ads-in-2018-updates-you-should-not-miss/" target="_blank" rel="noopener noreferrer">Facebook</a>. This remote code execution vulnerability </span><span style="font-weight: 400;">could be traced to the popular image processing</span> <span style="font-weight: 400;">software ImageMagick. </span>

### **The Need For Patching Computing Systems**

<span style="font-weight: 400;">The technical term for the VLC hack and other hacks of this sort is a Remote Code Execution or RCE in short. This can only be fixed by patching the affected systems.</span>

<span style="font-weight: 400;">According to the Hacking Sec blog</span><span style="font-weight: 400;">, remote code execution describes an “attacker&#8217;s ability to execute any commands of the attacker&#8217;s choice on a target machine or in a target process.” </span>

<span style="font-weight: 400;">In remote code execution, an attacker gets the ability to upload machine code or some other executable code on a machine belonging to the hacking target. Once a hacker uploads a so-called “arbitrary code exploit”, they can then run their exploit to take data or wreak havoc on the target’s computing system.</span>

<span style="font-weight: 400;">The ways in which a hacker can cause damage once they have successfully gained control via a remote code execution are almost boundless. The hacker can read files from the target computer system and network, make uncontrolled network connections, or initiate the denial of service attacks on the server. Beyond that, the hacker can completely disable a computing system if they wish, leading to multiple disruptions in the availability and functionality of computing services.</span>

<span style="font-weight: 400;">VLC rushed to </span><span style="font-weight: 400;">release patches</span> <span style="font-weight: 400;">to contain the vulnerability. However, should an attacker find a way to exploit the system before the patches are applied, any of the 200 million users of the vulnerable media players could face attacks. On user computers, remote code execution might target personal data or other important information.</span>

### **How VLC Software Users Can Protect Themselves**

<span style="font-weight: 400;">As the VLC hack shows, with 200 million users vulnerable to just this exploit, users need to safeguard against remote code execution. The popularity of media players like VLC indicates this. If such popular software can be <a href="/blog/end-user-devices-get-hacked-8-easy-ways/" target="_blank" rel="noopener noreferrer">hacked</a>, it puts many ordinary computer and <a href="/blog/how-to-maintain-phone-privacy-get-started/" target="_blank" rel="noopener noreferrer">phone</a> users at risk. </span>

<span style="font-weight: 400;">Given the growth in the adoption of computing devices and smart devices worldwide, this represents a great part of the population.</span>

<span style="font-weight: 400;">Updating to the </span><span style="font-weight: 400;">latest versions</span> <span style="font-weight: 400;">of software is a great proactive strategy that users can take to protect themselves against such hacks. This is because the latest software updates typically patch all the critical vulnerabilities before release. A user running the most recent software is, therefore, less vulnerable to exploits.</span>

<span style="font-weight: 400;">The best way to protect yourself, in light of these vulnerabilities, is to apply the patches from VLC and other media players.</span>

### **Lessons From The VLC Bug**

[<img class="alignnone wp-image-335" src="/assets/VLC-2.jpg" alt="VLC 2" width="700" height="431" />](http://limeproxies.com/blog/wp-content/uploads/2017/07/VLC-2.jpg)

The VLC bug shows that hacks, and remote code execution, in particular, are a menace. Other media players besides VLC Media Player also showed this same vulnerability. In vulnerabilities like this, hackers can take over users’ computer systems and execute arbitrary code of their choice.

<span style="font-weight: 400;">Beyond applying the </span><span style="font-weight: 400;">latest software patches</span><span style="font-weight: 400;">, users should be taking measures, such as the use of </span>[<span style="font-weight: 400;">proxy services</span>](http://www.limeproxies.com/) <span style="font-weight: 400;">and browsing anonymously, in order to limit their exposure to hacking.</span>

<p style="text-align: center;">
  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://bit.ly/2OYTWX6">GET STARTED FOR FREE</a></button>
</p>
