// var text = document.getElementById("text")

$(document).ready(function(){

  $('#menu').click(function(){

      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');

  });

  $(window).on('load scroll',function(){
    typeWriter();
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('#scroll-top').show();
    }else{
      $('#scroll-top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

function typeWriter() {
  var demo = "Grab Your Dream Company..."
  var i = 0
  var speed = 50;
  if (i < demo.length) {
    document.getElementById("text").innerHTML += demo.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}