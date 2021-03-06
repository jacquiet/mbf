jQuery(document).ready(function ($) {
    var currentAjaxRequest = null;
    var searchForms = $('form[action="/search"]')
        .css("position", "relative")
        .each(function () {
            var input = $(this).find('input[name="q"]');
            var offSet = input.position().top + input.innerHeight();
            $('<ul class="box-results"></ul>')
                .css({
                    position: "absolute",
                    left: "0px",
                    top: offSet
                })
                .appendTo($(this))
                .hide();
            input.attr("autocomplete", "off").bind("keyup change", function () {
                var term = $(this).val();
                var form = $(this).closest("form");
                var searchURL = "/search?type=product&q=" + term;
                var resultsList = form.find(".box-results");
                if (term.length >= 3 && term != $(this).attr("data-old-term")) {
                    $(this).attr("data-old-term", term);
                    if (currentAjaxRequest != null) currentAjaxRequest.abort();
                    currentAjaxRequest = $.getJSON(searchURL + "&view=json", function (
                        data
                    ) {
                        resultsList.empty();
                        if (data.results_count == 0) {
                            resultsList.hide();
                        } else {
                            $.each(data.results, function (index, item) {
                                var link = $("<a></a>").attr("href", item.url);
                                link.append(
                                    '<span class="thumbnail"><img src="' +
                                    item.thumbnail +
                                    '" /></span>'
                                );
                                link.append(
                                    '<span class="title_name">' + item.title + "</span>"
                                );
                                link.wrap("<li></li>");
                                resultsList.append(link.parent());
                            });
                            if (data.results_count > 5) {
                                resultsList.append(
                                    '<li class="a-center"><span class="btn btn-results"><a href="' +
                                    searchURL +
                                    '"> All Results (' +
                                    data.results_count +
                                    ")</a></span></li>"
                                );
                            }
                            resultsList.fadeIn(200);
                        }
                    });
                }
            });
        });
    $("body").bind("click", function () {
        $(".box-results").hide();
    });
});