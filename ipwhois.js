function request_ipwhois (ip = "", lang = "en") {
    return JSON.parse($.ajax({
        method: "GET",
        url: "http://free.ipwhois.io/json/" + ip + "?lang=" + lang,
        contentType: "application/json",
        dataType: "json",
		global: false,
		async: false,
		success: function (data) {
            return data;
        }
    }).responseText);
}
