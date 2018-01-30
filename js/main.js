console.log("connected");
let state = {
  styleCounter: 1
};



(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
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
  $('#divButtStyle').on('click', function () {
    let styles = ["css/Fresh_style.css", "css/style.css"]

    console.log(state.styleCounter);
    state.styleCounter = state.styleCounter + 1;
    if (state.styleCounter >= styles.length) {
      state.styleCounter = 0
    }

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = styles[state.styleCounter];

    $('head').append(link)
  })



})
