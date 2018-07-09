// sidenav

  $(document).ready(function(){
    $('.sidenav').sidenav();
  })

//parallax

$(document).ready(function(){
  $('.parallax').parallax();
});

//slideToggle Galeria

$(document).ready(function(){
    $("#rozwiajnie").click(function(){
        $("#galeriaa").slideToggle("slow","swing");
    });
});

//modal
$(document).ready(function(){
    $('.modal').modal();
  });
