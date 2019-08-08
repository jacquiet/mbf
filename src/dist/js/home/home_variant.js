Shopify.doNotTriggerClickOnThumb = false;

var selectCallbackQuickview = function(variant, selector) {
  var productItem = jQuery(".quick-view .product-item");
  (addToCart = productItem.find(".add-to-cart-btn")),
    (productPrice = productItem.find(".price")),
    (comparePrice = productItem.find(".compare-price")),
    (totalPrice = productItem.find(".total-price span"));

  if (variant) {
    if (variant.available) {
      // We have a valid product variant, so enable the submit button
      addToCart
        .removeClass("disabled")
        .removeAttr("disabled")
        .text("Add to cart");
    } else {
      // Variant is sold out, disable the submit button
      addToCart
        .val(window.inventory_text.sold_out)
        .addClass("disabled")
        .attr("disabled", "disabled");
    }

    productPrice.html(Shopify.formatMoney(variant.price, window.money_format));

    var form = jQuery("#" + selector.domIdPrefix).closest("form");
    for (var i = 0, length = variant.options.length; i < length; i++) {
      var radioButton = form.find(
        '.swatch[data-option-index="' +
          i +
          '"] :radio[value="' +
          variant.options[i] +
          '"]'
      );
      if (radioButton.size()) {
        radioButton.get(0).checked = true;
      }
    }

    /*recaculate total price*/
    //try pattern one before pattern 2
    var regex = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;
    var unitPriceTextMatch = jQuery(".quick-view .price")
      .text()
      .match(regex);

    if (!unitPriceTextMatch) {
      regex = /([0-9]+[.|,][0-9]+)/g;
      unitPriceTextMatch = jQuery(".quick-view .price")
        .text()
        .match(regex);
    }

    if (unitPriceTextMatch) {
      var unitPriceText = unitPriceTextMatch[0];
      var unitPrice = unitPriceText.replace(/[.|,]/g, "");
      var quantity = parseInt(jQuery(".quick-view input[name=quantity]").val());
      var totalPrice = unitPrice * quantity;

      var totalPriceText = Shopify.formatMoney(totalPrice, window.money_format);
      regex = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;
      if (!totalPriceText.match(regex)) {
        regex = /([0-9]+[.|,][0-9]+)/g;
      }
      totalPriceText = totalPriceText.match(regex)[0];

      var regInput = new RegExp(unitPriceText, "g");
      var totalPriceHtml = jQuery(".quick-view .price")
        .html()
        .replace(regInput, totalPriceText);
      jQuery(".quick-view .total-price span.money").html(totalPriceHtml);
    }
    /*end of price calculation*/

    Currency.convertAll(
      window.shop_currency,
      jQuery("select[name=currencies] option:selected").val(),
      "span.money",
      "money_format"
    );

    /*begin variant image*/
    if (variant && variant.featured_image) {
      var originalImage = jQuery(".quick-view .quickview-image img");
      var newImage = variant.featured_image;
      var element = originalImage[0];
      Shopify.Image.switchImage(newImage, element, function(
        newImageSizedSrc,
        newImage,
        element
      ) {
        newImageSizedSrc = newImageSizedSrc.replace(/\?(.*)/, "");
        jQuery(".quick-view .more-view-wrapper img").each(function() {
          var grandSize = jQuery(this).attr("src");
          grandSize = grandSize.replace("compact", "grande");

          if (grandSize == newImageSizedSrc) {
            jQuery(this)
              .parent()
              .trigger("click");
            return false;
          }
        });
      });
    }
    /*end of variant image*/
  } else {
    // The variant doesn't exist. Just a safegaurd for errors, but disable the submit button anyway
    addToCart
      .text(window.inventory_text.unavailable)
      .addClass("disabled")
      .attr("disabled", "disabled");
  }
};
