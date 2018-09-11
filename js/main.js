
M.AutoInit();

$('.sidenav').sidenav();
$('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
);


function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 7500);
}
autoplay()

// flosting menu button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'bottom',
    hoverEnabled: false
  });
});

var elem = document.querySelector('.fixed-action-btn');

var instance = M.FloatingActionButton.getInstance(elem);
