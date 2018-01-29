console.log("connected");

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);
// from https://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page


$(document).on('ready', function () {
  console.log("ready");




  $('#divButtContact').on('click', function () {
    $('#contact').goTo();
  })
  $('#divButtAbout').on('click', function () {
    $('#aboutme').goTo();
  })
  $('#divButtPortfolio').on('click', function () {
    $('#portfolio').goTo();
  })
  $('#divButtSummary').on('click', function () {
    $('#summary').goTo();
  })
  $('#divButtWelcome').on('click', function () {
    $('#welcome').goTo();
  })


})
