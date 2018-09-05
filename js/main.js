
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
