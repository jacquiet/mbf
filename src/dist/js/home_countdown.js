$(document).ready(function() {
  $(".countdown1")
    .on("finish.countdown", function(event) {
      $(this).hide();
    })
    .countdown("2019/2/2", function(event) {
      $(this).html(
        event.strftime(
          '<div class="deals-time day"><div class="num-time">%D</div></div> <div class="deals-time hour"><div class="num-time">%H</div></div> <div class="deals-time minute"><div class="num-time">%M</div></div> <div class="deals-time second"><div class="num-time">%S</div></div>'
        )
      );
    });
});
