jQuery(document).ready(function($) {
  $(window).load(function() {
    var check_cookie = getCookie("newsletter-wrapper");
    if (check_cookie != "") {
      $("#popup-newletter").hide();
      $("#popup-newletter").removeClass("show");
      return;
    } else {
      $("#popup-newletter").show();
      $("body").addClass("hidden-scorll");

      $("input[name='hidden-popups']").on("change", function() {
        if ($(this).is(":checked")) {
          checkCookie();
        } else {
          unsetCookie("newsletter-wrapper");
        }
      });

      function unsetCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      }
      $(".ss_newletter_custom_popup_bg").click(function() {
        var this_close = $(".popup-close");
        $("body").removeClass("hidden-scorll");
        $("#popup-newletter").hide();
      });
      $(".popup-close").click(function() {
        var this_close = $(".popup-close");
        $("body").removeClass("hidden-scorll");
        $("#popup-newletter").hide();
      });
      $("#popup-newletter").addClass("popup_bgs");
    }
  });
});
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  console.log(d.getTime());
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function checkCookie() {
  var check_cookie = getCookie("newsletter-wrapper");
  if (check_cookie == "") {
    setCookie("newsletter-wrapper", "Newletter Popup", 1);
  }
}
