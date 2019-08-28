function request_ipwhois (ip, format = "json", lang = "en") {
    $.ajax ({
        method: "GET",
        url: "http://free.ipwhois.io/" + format + "/" + ip + "?lang=" + lang,
        contentType: "application/json",
        dataType: "json",
        success: function (result, status, xhr) {
            if (callback) {
                callback(result);
            }
        },
        error: function (xhr, status, error) {
            if (callback) {
                callback(JSON.parse(xhr.responseText));
            }
        }
    });
}
