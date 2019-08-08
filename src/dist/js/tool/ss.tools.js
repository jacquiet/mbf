jQuery(document).ready(function (s) {
    s(".so-groups-sticky .sticky-backtop").on("click", function () {
        s("html, body").animate({
            scrollTop: 0
        }, "slow", function () {})
    }), s('.so-groups-sticky *[data-target="popup"]').on("click", function () {
        s("html").addClass("overflow-hidden"), s(s(this).attr("data-popup")).removeClass("popup-hidden"), s(".popup").animate({
            scrollTop: "0px"
        }, 500)
    }), s('.so-groups-sticky *[data-target="popup-close"]').on("click", function () {
        s("html").removeClass("overflow-hidden"), s(s(this).attr("data-popup-close")).addClass("popup-hidden")
    }), s(document).keyup(function (o) {
        27 == o.keyCode && (s("html").removeClass("overflow-hidden"), s(".so-groups-sticky .popup").addClass("popup-hidden"))
    }), s(".so-groups-sticky .nav-secondary ul li span i").click(function () {
        s(this).hasClass("more") ? (s(".so-groups-sticky .nav-secondary ul li").removeClass("active"), s(this).parent().parent().addClass("active"), s(this).parent().parent().children("ul").stop(!0, !0).slideDown("slow"), s(".so-groups-sticky .nav-secondary ul li").each(function () {
            s(this).hasClass("active") && (s(this).parent("ul").parent("li").addClass("active"), s(this).children("ul").slideDown("slow"))
        }), s('.so-groups-sticky .nav-secondary ul li:not(".active") ul').stop(!0, !0).slideUp("slow")) : (s(this).parent().parent().children("ul").stop(!0, !0).slideUp("slow"), s(this).parent().parent().removeClass("active"))
    }), s(".so-groups-sticky #button-search, .so-groups-sticky .sbmsearch").on("click", function () {
        s(".so-groups-sticky #button-search").attr("disabled", "disabled"), s(".so-groups-sticky #button-search").addClass("loading disabled"), s(".so-groups-sticky #button-search").prepend('<i class="fa fa-refresh fa-spin"></i>');
        var o = "/search",
            t = s(".so-groups-sticky #input-search").val();
        t && (o += "?q=" + encodeURIComponent(t)), location = o
    }), s(".so-groups-sticky #input-search").on("keydown", function (o) {
        13 == o.keyCode && s(".so-groups-sticky #button-search").trigger("click")
    }), s('.so-groups-sticky select[name="select-currency"]').on("change", function () {
        s(this).attr("disabled", "disabled"), s('#form-currency input[name="code"]').val(this.value), s("#form-currency").submit()
    }), s('.so-groups-sticky select[name="select-language"]').on("change", function () {
        s(this).attr("disabled", "disabled"), s('#form-language input[name="code"]').val(this.value), s("#form-language").submit()
    })
});