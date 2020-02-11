$( () => {

  //On Scroll
  $(window).scroll(()=> {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '140px');
  });

  //Click logo to scroll to top
  $('#logo').on('click', ()=> {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  //Smooth Scrooling using menu
  $('a[href*="#"]').on('click', function(e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });

  //Click menu show (add class 'closeMenu', 'showMenu')
  $('#menu-toggle').on('click', ()=> {
    $('#menu-toggle').toggleClass('closeMenu');
    $('ul').toggleClass('showMenu');

    $('li').on('click', ()=> {
        $('#menu-toggle').removeClass('closeMenu');
        $('ul').removeClass('showMenu');
    })

  });
  
});
