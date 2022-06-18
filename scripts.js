//scroll offset to account for navbar height
var scrollOffset = $("#scrollspyNav").height();
$(".scrollSection").css({paddingTop: scrollOffset + 10 + "px"});

//return-to-top button visibility
$(document).ready( function() {
  var scrollPast = $("#about").offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > scrollPast){
      $("#returnLink").css({opacity: 1});
    }
    else { $("#returnLink").css({opacity: 0}); }
  });
});
