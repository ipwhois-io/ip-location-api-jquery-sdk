# IP Location API JQuery SDK

## Overview

[IP Geolocation API](https://ipwhois.io) provides country, city, region, local currency, latitude and longitude, company detail, ISP lookup, country calling code, timezone, country neighbours, country flag, country capital 
and much more from any IPv4 and IPv6 address in Newline, JSON and XML format over HTTPS. This document provides important information to help you get up to speed with IP Location API using IP Geolocation API JQuery SDK.

## Quick Start Guide

You can call the API by sending HTTP GET requests to <code>http://free.ipwhois.io/json/{IP}</code>

<code>{IP}</code> can be an IPv4 or IPv6 address, or none to use the current IP address.

<strong>Note:</strong> Complete documentation to use this API is also available at <a href="https://ipwhois.io/documentation">IP Geolocation API Documentation</a>.

### System Requirements  

Internet connection is required to run this component.

### Installation
### CDN Link

Add the following script in your HTML page:

```html
<script src="/ipwhois.min.js"></script>
```

## Geolocation Lookup

You can use this SDK without an API key if you're using the _Request Origin_ feaure on IP Geolocation API.  
Here are a few different ways of querying Geolocation for an IP address from IP Geolocation API.

```javascript
// Function to handle the response from IP Geolocation API.
// "response" is a JSON object returned from IP Geolocation API.
function handleResponse(response) {
    console.log(response);
}

// Get geolocation for the calling machine's IP address with an API key (optional, if you're using "Request Origin" feature at IP Geolocation API)
getGeolocation(handleResponse, "YOUR_API_KEY");

// Don't pass the API key if you're using the "Request Origin" feature at IP Geolocation API
getGeolocation(handleResponse);

// Toggle API calls' async behavior. By default, async is true.
setAsync(false)

// Get geolocation for an IP address "1.1.1.1"
setIPAddressParameter("1.1.1.1");
getGeolocation(handleResponse, "YOUR_API_KEY");

// Get geolocation for an IP address "1.1.1.1" in Russian language **
setLanguageParameter("ru");
setIPAddressParameter("1.1.1.1");
getGeolocation(handleResponse, "YOUR_API_KEY");

// Get the specific geolocation fields "country_code2,time_zone,currency" for the calling machine's IP address
setFieldsParameter("geo,time_zone,currency");
getGeolocation(handleResponse, "YOUR_API_KEY");

// Get the specified geolocaiton fields like "country_code2,time_zone,currency" for an IP address "1.1.1.1" and skip the "ip" field in the response
setFieldsParameter("geo,time_zone,currency");
setIPAddressParameter("1.1.1.1");
setExcludesParameter("ip");
getGeolocation(handleResponse, "YOUR_API_KEY");
```

## Example

Here is a sample code to use IP Geolocation API using JQuery SDK:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/ipwhois.min.js"></script>

<script>
    var ip = sessionStorage.getItem("ip");
    var country_name = sessionStorage.getItem("country_name");
    var country_code2 = sessionStorage.getItem("country_code2");
            
    if (!ip || !country_name || !country_code2) {
        setAsync(false);
        setFieldsParameter("country_name,country_code2");
        getGeolocation(handleGeolocationResponse, "YOUR_API_KEY");
    }

    function handleGeolocationResponse(json) {
        ip = json.ip;
        country_name = json.country_name;
        country_code2 = json.country_code2;

        sessionStorage.setItem("ip", ip);
        sessionStorage.setItem("country_name", country_name);
        sessionStorage.setItem("country_code2", country_code2);
    }
                
    $(document).ready(function() {
        alert("Hello " + country_name + "!");
    });
</script>
```

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
