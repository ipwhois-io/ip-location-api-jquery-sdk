function request_ipwhois(b, c, a) {
    a = void 0 === a ? "" : a;
    var d = "free.ipwhois.io";
    "" != a && (d = "ipwhois.pro", a = "&key=" + a);
    return JSON.parse($.ajax({
        method: "GET",
        url: "http://" + d + "/json/" + (void 0 === b ? "" : b) + "?lang=" + (void 0 === c ? "en" : c) + a,
        contentType: "application/json",
        dataType: "json",
        global: !1,
        async: !1,
        success: function(a) {
            return a
        }
    }).responseText)
};
