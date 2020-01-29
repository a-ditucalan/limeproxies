---
meta_title: Step By Step Guide To Configure Apache Reverse Proxy| LimeProxies
yoast_keyword: step by step guide to configure apache reverse proxy
description: >-
  In simple terms, a reverse proxy is a type of proxy server which is used to
  retrieve information from one or more servers on behalf of a client.
path: /step-by-step-guide-to-configure-apache-reverse-proxy/
title: Step By Step Guide To Configure Apache Reverse Proxy
author: Rachael Chapman
date: 2018-10-15T16:39:26.000Z
excerpt: >-
  In simple terms, a reverse proxy is a type of proxy server which is used to
  retrieve information from one or more servers on behalf of a client. So
  basically it is a mediator between you and the target server.
thumbnail: /assets/01-Host.png
tags:
  - Apache Reverse Proxy
  - proxy server
  - Reverse Proxy
featurednail: /assets/01-Host.png
---
You should know that the <a href="blog/the-ultimate-guide-to-buy-private-proxies/" target="_blank" rel="noopener noreferrer">regular proxies</a> used normally and <a href="/blog/how-to-set-up-nginx-reverse-proxy/" target="_blank" rel="noopener noreferrer">reverse proxy</a> work on very different concept.

Before we go ahead with learning how to setup an Apache Reverse proxy, let us know what a reverse proxy is and why is it used.

In simple terms, a reverse proxy is a type of <a href="blog/what-is-proxy-server-and-how-it-works/" target="_blank" rel="noopener noreferrer">proxy server</a> which is used to retrieve information from one or more servers on behalf of a client. So basically it is a mediator between you and the target server.

There are several purposes for using it, of which below are few of them:

1. It shields application frameworks which basically has weaker http functionality.
2. It can hide the existence of the main server and also prevent DoS and <a href="/blog/top-10-information-security-threats-in-2018/" target="_blank" rel="noopener noreferrer">DDoS attacks</a>.
3. It can act as a load balancer by distributing the load on several servers in turn improving the load time.
4. It can optimize the actual content to speed up the response time.
5. It can add HTTP authentication to the server which has less authentication or security.

Now that we know some basics about reverse proxy and what it can do, let us proceed with setting up an Apache Reverse proxy server.

### Step 1: Setting up a Backend server

The purpose of a reverse proxy is that of protecting an application server, However, you should be well versed with Apache to understand the purpose of the commands. For setting up backend, we will be using socat which is a short term for Socket Cat.

<table>
  <tr>
    <td>
      $> socat -vv TCP-LISTEN:8000,bind=127.0.0.1,crlf,reuseaddr,fork SYSTEM:&#8221;echo</p> 
      
      <p>
        HTTP/1.0 200;\<br /> echo Content-Type\: text/plain; echo; echo &#8216;Server response, port 8000.'&#8221;</td> </tr> </tbody> </table> 
        
        <p>
          Now, using the below command let us instruct or direct Socat to bind the receiver to port 8000. Once done, the additional parameters will make sure that the receiver is permanently connected.
        </p>
        
        <table>
          <tr>
            <td>
              $> curl -v http://localhost:8000/<br /> \* Hostname was NOT found in DNS cache<br /> \*  Trying 127.0.0.1&#8230;<br /> \* Connected to localhost (127.0.0.1) port 8000 (#0)<br /> > GET / HTTP/1.1<br /> > User-Agent: curl/7.35.0<br /> > Host: localhost:8000<br /> > Accept: \*/\*<br /> ><br /> \* HTTP 1.0, assume close after body<br /> < HTTP/1.0 200<br /> < Content-Type: text/plain<br /> <<br /> Server response, port 8000<br /> * Closing connection 0
            </td>
          </tr>
        </table>
        
        <p>
          Using the above command, the backend setup is completed in a simpler way, but this can be modified as per your requirements.
        </p>
        
        <h3>
          Step 2: Installing Proxy module
        </h3>
        
        <p>
          There are a lot of modules used in Apache to make it a reverse proxy, however, mod_proxy is one such module which will setup Apache in a way it has to.
        </p>
        
        <p>
          In this case, two modules are used to setup Apache as a reverse proxy server, mod_proxy and mod_proxy_http  which is required for http requests. The term proxying actually means receiving a request and pushing it to another server.
        </p>
        
        <p>
          In this case, we will have to define the backend server and then accept requests from clients.
        </p>
        
        <p>
          It should not be confused that normal <a href="/blog/use-private-proxies-vpn-simultaneously/" target="_blank" rel="noopener noreferrer">proxies</a> which are used in day to day life can also be used on Apache, the purpose for those proxies are completely different from the one we are setting up now. Hence a directive that turns off the request from the default “ on “ mode has to be used.
        </p>
        
        <table>
          <tr>
            <td>
              ProxyRequests Off
            </td>
          </tr>
        </table>
        
        <h3>
          Step 3: ProxyPass Directive
        </h3>
        
        <p>
          Out of the many ways used to instruct Apache to redirect the request to the backend application, ProxyPass directive is the most common and widely used module/directive.
        </p>
        
        <table>
          <tr>
            <td>
              ProxyPass          /service http://localhost:8000/service<br /> ProxyPassReverse   /service http://localhost:8000/service<Proxy http://localhost:8000/service>Require all grantedOptions None</Proxy>
            </td>
          </tr>
        </table>
        
        <p>
          The directive defines a service path and specifies how it is to be related to the backend, if the service runs on localhost or port 8000, the path will be the same as the origin.
        </p>
        
        <p>
          Redirect responses from the backend are absolutely qualified in http-compliant type like 

```
https://backend.example.com/service1
```

 The reverse proxy has to rewrite the backend’s location header, 

```
backend.example.com
```

substituting it with its own name and so mapping it back to its own namespace.
        </p>
        
        <p>
          ProxyPassReverse, on the other hand with such a unique name, solely encompasses a straightforward search and replace feature touching the location headers. As already seen within the ProxyPass directive, proxying is again symmetric: the path here is rewritten 1:1.
        </p>
        
        <h3>
          Step 4: Exceptions in Proxying
        </h3>
        
        <p>
          From the previous step of using ProxyPass directive, it is certainly evident that all the requests are passed from /service to the backend. But what if you are not happy with forwarding all the request and say deny few paths to be away from getting exposed to internet? Exceptions can be used in these cases.
        </p>
        
        <p>
          Let us take an example of a path /service/index to be prevented from being exposed to internet, ProxyPass directive can be defined in a way to deny the path being forwarded using an exclamation mark, but it is very important to define the rule before configuring or defining the actual proxy setup commands as below.
        </p>
        
        <table>
          <tr>
            <td>
              ProxyPass          /service/index !<br /> ProxyPass          /service http://localhost:8000/service<br /> ProxyPassReverse   /service http://localhost:8000/service
            </td>
          </tr>
        </table>
        
        <p>
          It is often noticed that the entire address is forwarded to the backend server which is actually quite dangerous making yourself vulnerable to a pool of IP addresses attacking your server in any way possible. It is as above that we should define paths or maybe only define paths that are practically being used.
        </p>
        
        <p>
          <strong>ProxyTimeout Directive: </strong>Along with exceptions comes another important directive that is ProxyTimeout directive. This is considered to be important as there are some addresses which are not essential for execution and often lead to timeout, but one disadvantage of the timeout directive is while the client is processing a request and we tend to believe that the request will be processed quickly but the server decides to take its own time,
        </p>
        
        <table>
          <tr>
            <td>
              ProxyTimeout            60
            </td>
          </tr>
        </table>
        
        <p>
          Well in these cases, a reverse proxy easily interrupts a process with the backend. However, it should be noted that the ProxyTimeout directive is included in finding the duration of processing time between the IP packets, and not the time on services at backend.
        </p>
        
        <p>
          <strong>ProxyErrorOverride:</strong> Error messages are one reason which shows backend systems are not provided with the safety that is really necessary. With having detailed error message is the capability to find the root cause of the issue in simple steps rather debugging the entire command. This is in the interest of not letting the connection get exposed to internet, as reverse proxy without authentication is as vulnerable as using a normal internet connection where attackers will be found lurking the client to find ways to bypass the connection.
        </p>
        
        <table>
          <tr>
            <td>
              ProxyErrorOverride      On
            </td>
          </tr>
        </table>
        
        <p>
          ProxyErrorOverride enables hiding the errors sent by the backend application be replaced by Error messages from reverse proxy making it difficult for any intruder to figure out where the problem lies. So the main purpose of this directive is to directly take part in HTTP response to replace any error code which is above or equal to 400. Anything below 400 is considerable and does not affect the directive.
        </p>
        
        <h3>
          Step 5:  Mod-Rewrite
        </h3>
        
        <p>
          Along with the ProxyPass directive, Rewrite plays an important role in enabling or modifying features for reverse proxy, also has a very flexible configuration.
        </p>
        
        <p>
          Mod-Rewrite is mainly used as it defines its own rewrite engine to alter or change http requests. The rewrite engine can run both on the server as well as virtual host, what&#8217;s important for us to know is how it runs on a server.
        </p>
        
        <table>
          <tr>
            <td>
              LoadModule              rewrite_module modules/mod_rewrite.so</p> 
              
              <p>
                &#8230;
              </p>
              
              <p>
                RewriteEngine           On<br /> RewriteOptions          InheritDownBefore
              </p>
              
              <p>
                RewriteRule           ^/$ %{REQUEST_SCHEME}://%{HTTP_HOST}/index.html  \[redirect,last]</td> </tr> </tbody> </table> 
                
                <p>
                  Once the rewrite engine is initiated on the server level, the rules are redirected to the rewrite engines, so that the rules are executed before it goes further. Once the actual rule is executed, the client is instructed to send a request to a path, let us take an example of /index.html i.e one request without a path and one request for “/”.
                </p>
                
                <p>
                  The above being a redirect, the most important part here is for the redirect to indicate the pattern of request, http, https or hostname. As this is implemented at a server level, relative paths won&#8217;t work as well. As we do not want to expose the hostname to internet, it is preferred to take the hostname from client request.
                </p>
                
                <p>
                  The brackets at the end of the rule indicate that a redirect is necessary to instruct the rewrite engine to end the process\[last].
                </p>
                
                <p>
                  Further, the rule can be altered and presented as the one below for which a different redirect is found.
                </p>
                
                <table>
                  <tr>
                    <td>
                      $> curl -v http://localhost/</p> 
                      
                      <p>
                        \* Hostname was NOT found in DNS cache<br /> \*  Trying 127.0.0.1&#8230;<br /> \* Connected to localhost (127.0.0.1) port 80 (#0)<br /> > GET / HTTP/1.1<br /> > User-Agent: curl/7.35.0<br /> > Host: localhost<br /> > Accept: \*/\*<br /> ><br /> < HTTP/1.1 302 Found<br /> < Date: Thu, 10 Dec 2015 05:24:42 GMT<br /> \* Server Apache is not blacklisted<br /> < Server: Apache<br /> < Location: http://localhost/index.html<br /> < Content-Length: 211<br /> < Content-Type: text/html; charset=iso-8859-1<br /> <<br /> <!DOCTYPE HTML PUBLIC &#8220;-//IETF//DTD HTML 2.0//EN&#8221;><br /> <html><head><br /> <title>302 Found</title><br /> </head><body><br /> <h1>Found</h1><br /> <p>The document has moved <a href=&#8221;http://localhost/index.html&#8221;>here</a>.</p><br /> </body></html><br /> * Connection #0 to host localhost left intact</td> </tr> </tbody> </table> 
                        
                        <p>
                          With the above code, a 302 error is found returned, similarly lot more error codes such as 301, 303, 307 and 308 are also found, but the most important aspect here is the location header. Which instructs the client to send a request for a fully qualified URL address with the same pattern mentioned in above set of rules.
                        </p>
                        
                        <p>
                          In the set of rules in response, you can find a redirect linked with an HTML text, this is a very rare case added for the user to click for a manual redirect in case the browsers do not initiate an automatic redirect, however, this is to be noted in rare cases where browsers do not allow popups or auto-redirects.
                        </p>
                        
                        <p>
                          The main question here is why the rewrite engine is used only on server level and not on virtual host, The reason is all the rules that execute on port 80 has to also execute on secure port 443. Thus the below rule is used to redirect requests from port 80 to port 443 enabling encryption.
                        </p>
                        
                        <table>
                          <tr>
                            <td>
                              <VirtualHost 127.0.0.1:80></p> 
                              
                              <p>
                                RewriteEngine        On
                              </p>
                              
                              <p>
                                RewriteRule        ^/(.*)$ https://%{HTTP_HOST}/$1    \[redirect,last]
                              </p>
                              
                              <p>
                                &#8230;
                              </p>
                              
                              <p>
                                </VirtualHost></td> </tr> </tbody> </table> 
                                
                                <p>
                                  The pattern shown above is very clear, however, includes a parenthesis ($1) which shows that all the forwarding requests are using the same URL on port 80 and port 443.
                                </p>
                                
                                <h3>
                                  Step 6: Mod-Rewrite &#8211; \[ proxy ]
                                </h3>
                                
                                <p>
                                  The above directive of ModRewrite is completely different from what is explained in this subtopi. Here Mod-Rewrite is used to setup a reverse proxy,
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      <VirtualHost 127.0.0.1:443><br /> &#8230;<br /> RewriteEngine    On<br /> RewriteRule        ^/service1/(.*)    http://localhost:8000/service1/$1 \[proxy,last]<br /> ProxyPassReverse    /   http://localhost:8000/<br /> <Proxy http://localhost:8000/service1><br /> Require all granted<br /> Options None<br /> </Proxy>
                                    </td>
                                  </tr>
                                </table>
                                
                                <p>
                                  The instruction pursues an example like the variation utilizing ProxyPass. Here, in any case the last section of the way must be blocked by using a bracket and again demonstrated by &#8220;$1&#8221; like the above example commands. ProxyPassReverse and the ProxyStanza stay the same while setting up ProxyPass.
                                </p>
                                
                                <p>
                                  There is no genuine preferred standpoint over ProxyPass sentence structure in this example. Referencing paths by utilizing $1, $2, provides flexibility in executing commands. However, it is to be made sure that RewriteRule and ProxyPass don&#8217;t clash by calling the same request and affecting each other.
                                </p>
                                
                                <p>
                                  Nonetheless, it might now be that we need to utilize a single proxy to join different backends or to distribute the load over several servers. This is when load balancer comes to play.
                                </p>
                                
                                <h3>
                                  Step 7: Load Balancer
                                </h3>
                                
                                <p>
                                  Let us start the process by loading the balancer module, However, besides the load balancing module, it is important to have a module that distributes requests to different servers as well. The best and the oldest route followed will be the lbmethod_byrequests_module which has the ability to distribute requests evenly over all the servers in a sequence of once from left and once from right.
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      LoadModule        proxy_balancer_module           modules/mod_proxy_balancer.so<br /> LoadModule        lbmethod_byrequests_module      modules/mod_lbmethod_byrequests.so<br /> LoadModule        slotmem_shm_module              modules/mod_slotmem_shm.so
                                    </td>
                                  </tr>
                                </table>
                                
                                <p>
                                  There are a lot of algorithms available for load balancing. Here are the four popular algorithms commonly used, this is only for reference purposes as we will be using the first method.
                                </p>
                                
                                <ul>
                                  <li>
                                    mod_lbmethod_byrequests (counts requests)
                                  </li>
                                  <li>
                                    mod_lbmethod_bytraffic (sizes of requests and responses)
                                  </li>
                                  <li>
                                    mod_lbmethod_bybusyness (Load balancing based on active threads)
                                  </li>
                                  <li>
                                    mod_lbmethod_heartbeat .
                                  </li>
                                </ul>
                                
                                <p>
                                  We would also need a module to manage segments of the memory used on the server, this will be managed by a direct/command &#8211; mod_slotmem_shm.so
                                </p>
                                
                                <p>
                                  Once these directives are setup, we can proceed to setup the load balancer using the RewriteRule with the below command:
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      RewriteRule         ^/service1/(.*)  balancer://backend/service/$1   \[proxy,last]<br /> ProxyPassReverse    /  balancer://backend/<br /> <Proxy balancer://backend><br /> BalancerMember http://localhost:8000 route=backend-port-8000<br /> BalancerMember http://localhost:8001 route=backend-port-8001<br /> Require all granted<br /> Options None<br /> </Proxy>
                                    </td>
                                  </tr>
                                </table>
                                
                                <p>
                                  With the above command, we will be defining 2 backends, one with port 8000 and another port with 8001. The port 8001 will be defined using the Socat for a quicker setup.
                                </p>
                                
                                <h3>
                                  Step 8: RewriteMap for proxy setup
                                </h3>
                                
                                <p>
                                  Rewrite Maps are the most important concept used in every request sent for the backend by the client.
                                </p>
                                
                                <p>
                                  Under RewriteMaps, the following maps are available:
                                </p>
                                
                                <p>
                                  <strong>txt</strong> : A key value in a text file is searched for here.
                                </p>
                                
                                <p>
                                  <strong>rnd</strong> : Several values can be specified for each key with this map.
                                </p>
                                
                                <p>
                                  <strong>dbm</strong> : This variation is similar to txt variation, but provides a good speed as a binary hash table is in use.
                                </p>
                                
                                <p>
                                  <strong>int</strong> : An abbreviation for internal function and refers to a function from the following list: toupper, tolower, escape and unescape.
                                </p>
                                
                                <p>
                                  <strong>prg</strong> : External scripts are invoked in this variation. The script is run along with the server and each time the RewriteMap is accessed a new input via STDIN is received.
                                </p>
                                
                                <p>
                                  <strong>dbd und fastdbd</strong> : The response value can be searched in a database request.
                                </p>
                                
                                <p>
                                  Seeing the above scripts, it is evident that RewriteMaps are very flexible and can be used in various situations, however, it is of utmost importance that a request from a client goes to the same backend and the requests are not confused while sent back. This can be done using a Cookie, but it is important not to risk the server, hence ModSecurity is used. The use of ModSecurity is simple as it calculates the hash value of the client IP address and then converts it into a hexadecimal string using ModSecurity as below:
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      SecRule REMOTE_ADDR    &#8220;^(.)&#8221; \<br /> &#8220;phase:1,id:50001,capture,nolog,t:sha1,t:hexEncode,setenv:IPHashChar=%{TX.1}&#8221;
                                    </td>
                                  </tr>
                                </table>
                                
                                <p>
                                  Here HexEncode is used to convert the binary hash value into a readable hexadecimal or sha1 readable format and then apply the regular expression to this value.
                                </p>
                                
                                <p>
                                  If you are not sure of whether this will really work, you can find an alternative by changing the variable IPHashChar to %{IPHashChar}e which is elaborate in the below command.
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      RewriteMap hashchar2backend &#8220;txt:/apache/conf/hashchar2backend.txt&#8221;<br /> RewriteCond     &#8220;%{ENV:IPHashChar}&#8221;     ^(.)<br /> RewriteRule     ^/service1/(.*) \<br /> http://${hashchar2backend:%1|localhost:8000}/service1/$1 \[proxy,last]<br /> <Proxy http://localhost:8000/service1><br /> Require all granted<br /> Options None<br /> </Proxy><br /> <Proxy http://localhost:8001/service1>Require all granted<br /> Options None<br /> </Proxy>
                                    </td>
                                  </tr>
                                </table>
                                
                                <p>
                                  We introduce the map by utilizing the RewriteMap command. we have a tendency to assign it a name, outline its kind and also the path to the file. RewriteMap is invoked in a RewriteRule. Before we actually access the map, we have to enable or execute a rewrite condition. this can be done utilizing the RewriteCond directive.
                                </p>
                                
                                <p>
                                  Thereby referencing the IPHashChar setting variable and verifying the primary bit of the variable. As one bit is enclosed within the variation, the command can be executed. Apparently, we have to use the S1 to communicate with the rewrite conditions captured in parenthesis.
                                </p>
                                
                                <p>
                                  The RewriteRule variable isn&#8217;t affected with this and continues to be forwarded via $1. once the $1 comes the standard value is separated by a pipe character. In case of failure in accessing the map, then communication with localhost takes place over port 8000 by default.
                                </p>
                                
                                <p>
                                  With the RewriteMap a better performance is provided by the hash file compared to the text file added in the above code. However, as the purpose can also be achieved with the text file, no changes need to be made.
                                </p>
                                
                                <h3>
                                  Step 9: Forwarding Information to the backend servers
                                </h3>
                                
                                <p>
                                  Although the purpose and the importance of all the aspects are studied in the above topics, it should be noted that reverse proxy completely shields the application from direct client access, which indicates that the application is completely isolated from client details or the type of reverse proxy connection being used. To avoid this, ProxyModule sets few HTTP requests to allow the application to know the nature of the reverse proxy.
                                </p>
                                
                                <ul>
                                  <li>
                                    X-Forwarded-For : The IP address of the reverse proxy
                                  </li>
                                  <li>
                                    X-Forwarded-Host : The origin HTTP host header in the client request
                                  </li>
                                  <li>
                                    X-Forwarded-Server : Name of the reverse proxy server.
                                  </li>
                                </ul>
                                
                                <p>
                                  Note : When multiple reverse proxies are used, the IP addresses and the server names are separated by a comma. This is the best idea to identify the request and also gather more information.
                                </p>
                                
                                <p>
                                  As reverse proxy is used to authenticate, even if not setup or defined, the value remains empty. Altogether, once the server, encryption and the reverse proxy is set up, the entire block looks as below:
                                </p>
                                
                                <table>
                                  <tr>
                                    <td>
                                      GET /service1/index.html HTTP/1.1<br /> Host: localhost<br /> User-Agent: curl/7.35.0<br /> Accept: \*/\*<br /> X-RP-UNIQUE-ID: VmpSwH8AAQEAAG@hXBcAAAAC<br /> X-RP-REMOTE-USER: (null)<br /> X-RP-SSL-PROTOCOL: TLSv1.2<br /> X-RP-SSL-CIPHER: ECDHE-RSA-AES256-GCM-SHA384<br /> X-Forwarded-For: 127.0.0.1<br /> X-Forwarded-Host: localhost<br /> X-Forwarded-Server: localhost<br /> Connection: close
                                    </td>
                                  </tr>
                                </table>
                                
                                <h3>
                                  Step 10: Apache Restart
                                </h3>
                                
                                <p>
                                  Once all the directives are successfully setup, along with the ProxyModule, it is recommended to restart apache to apply all the changes and values.
                                </p>
                                
                                <h4>
                                  Conclusion
                                </h4>
                                
                                <p>
                                  Now that all the setup information is explained precisely in the above steps, it is recommended to setup all the directives if you have thorough knowledge about the same and on stable servers. It should also be noted that there are various methods of setting up Reverse proxy on Apache of which the above mentioned is a simplest one, but if you are a tech geek and want to explore all the ways to setup a reverse proxy, you can always try it.
                                </p>
                                
                                <h1 style="text-align: center;">
                                  <button style="background-color: #9acd32; border-radius: 5%; border: solid 2px #9ACD32;"><a style="color: #eeeeee;" href="https://dashboard.limeproxies.com/?utm_source=Blog&utm_content=big%20data%20healthcare%20analytics#/login/signup" target="_blank" rel="noopener noreferrer">GET STARTED FOR FREE</a></button>
                                </h1>
