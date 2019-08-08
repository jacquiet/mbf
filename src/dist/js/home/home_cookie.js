function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


        
//jQuery(document).ready(function() {
Currency.format = 'money_format';
var shopCurrency = 'USD';
Currency.moneyFormats[shopCurrency].money_with_currency_format = "${{amount}}";
Currency.moneyFormats[shopCurrency].money_format = "${{amount}}";

//var cookieCurrency = Currency.cookie.read();
var cookieCurrency = readCookie('currency');

jQuery('span.money span.money').each(function () {
    jQuery(this).parent('span.money').removeClass('money');
});

jQuery('span.money').each(function () {
    jQuery(this).attr('data-currency-USD', jQuery(this).html());
});

var currencySwitcher = jQuery('select[name=currencies]');
// When the page loads.
if (cookieCurrency == null || cookieCurrency == shopCurrency) {
    Currency.currentCurrency = shopCurrency;
}
else {
    Currency.currentCurrency = cookieCurrency;
    currencySwitcher.val(cookieCurrency);
    Currency.convertAll(shopCurrency, cookieCurrency);
}

currencySwitcher.change(function () {
    eraseCookie('currency');
    var newCurrency = jQuery(this).val();
    createCookie('currency', newCurrency, 30);
    Currency.convertAll(Currency.currentCurrency, newCurrency);
});

$('body').on('ajaxCart.afterCartLoad', function (cart) {
    Currency.convertAll(shopCurrency, jQuery('select[name=currencies]').val());
});

var original_selectCallback = window.selectCallback;
var selectCallback = function (variant, selector) {
    original_selectCallback(variant, selector);
    Currency.convertAll(shopCurrency, jQuery('select[name=currencies]').val());
};
