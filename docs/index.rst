**************************
# IP Location API JQuery SDK
**************************

npmjs: https://www.npmjs.com/package/ip-geolocation-api-jquery

Overview
============

[IP Geolocation API](https://ipwhois.io) provides country, city, region, local currency, latitude and longitude, company detail, ISP lookup, country calling code, timezone, country neighbours, country flag, country capital 
and much more from any IPv4 and IPv6 address in Newline, JSON and XML format over HTTPS. This document provides important information to help you get up to speed with IP Location API using IP Geolocation API JQuery SDK.

Quick Start Guide
============

You can call the API by sending HTTP GET requests to http://free.ipwhois.io/json/{IP}

{IP} can be an IPv4 or IPv6 address, or none to use the current IP address.

Note: Complete documentation to use this API is also available at https://ipwhois.io/documentation.

System Requirements 
============

Internet connection is required to run this component.

Basic Usage
============

Call method request_ipwhois($ip, $lang) passing IP address or none to use the current IP address as parameters (rest of the parameters are optional) and it will return the Geolocation for the passed IP address.

Installation
============
CDN Link
============

Add the following script in your HTML page:

.. code:: html
<script src="https://cdn.ipwhois.io/js/ipwhois.js"></script>

Example
============

Here is a sample code to use IP Geolocation API using JQuery SDK:

.. code:: javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.ipwhois.io/js/ipwhois.js"></script>

<script>    
    $(document).ready(function() {
        var ipaddress = "";
        var ipwhois = request_ipwhois(ipaddress);
	alert("Country: " + ipwhois.country);
        alert("City: " + ipwhois.city);
        alert("Region: " + ipwhois.region);
    });
</script>
