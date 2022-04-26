# IP Location API JQuery SDK

## Overview

[IP Geolocation API](https://ipwhois.io) provides country, city, region, local currency, latitude and longitude, company detail, ISP lookup, country calling code, timezone, country neighbours, country flag, country capital 
and much more from any IPv4 and IPv6 address in Newline, JSON and XML format over HTTPS. This document provides important information to help you get up to speed with IP Location API using IP Geolocation API JQuery SDK.

## Quick Start Guide

You can call the API by sending HTTP GET requests to <code>http://ipwho.is/{IP}</code>

<code>{IP}</code> can be an IPv4 or IPv6 address, or none to use the current IP address.

<strong>Note:</strong> Complete documentation to use this API is also available at <a href="https://ipwhois.io/documentation">IP Geolocation API Documentation</a>.

### System Requirements  

Internet connection is required to run this component.

<h2>Basic Usage</h2>

Call method <code><strong>request_ipwhois($ip, $lang, $apiKey)</strong></code> passing IP address or none to use the current IP address as parameters (rest of the parameters are optional) and it will return the Geolocation for the passed IP address. To customize the geolocation response, you can pass the other parameters to <code><strong>request_ipwhois()</strong></code> method as described below:

<ul>  
<li>
<p><strong>$lang</strong></p>
Pass the language parameter to get the geolocation information in a language other than English. By default, it is set to English language.<br>
ipwhois provides response in the following languages:
  
<ul>
<li>en -	English (default)</li>
<li>de -	Deutsch (German)</li>
<li>es -	Español (Spanish)</li>
<li>pt-BR -	Español - Argentina (Spanish)</li>
<li>fr -	Français (French)</li>
<li>ja -	日本語 (Japanese)</li>
<li>zh-CN -	中国 (Chinese)</li>
<li>ru -	Русский (Russian)</li>
</ul>
 
</li>
</ul>

### Installation
### CDN Link

Add the following script in your HTML page:

```html
<script src="https://cdn.ipwhois.io/js/ipwho.is.js"></script>
```

## Example

Here is a sample code to use IP Geolocation API using JQuery SDK:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.ipwhois.io/js/ipwhois.js"></script>

<script>    
    $(document).ready(function() {
        var ipaddress = "";
	var apiKey = ""; // Leave blank for free endpoint
        var ipwhois = request_ipwhois(ipaddress,'en',apiKey);
	alert("Country: " + ipwhois.country);
        alert("City: " + ipwhois.city);
        alert("Region: " + ipwhois.region);
    });
</script>
```
