
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

  }
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("meuBotao").style.display = "block";
  } else {
    document.getElementById("meuBotao").style.display = "none";
  }
}


$(document).ready(function(){
    $('.slick-carousel').slick({
      
    });
  });

  