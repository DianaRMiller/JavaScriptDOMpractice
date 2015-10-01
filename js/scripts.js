$(document).ready(function(){
  $("h1").click(function(){
    alert("This is a header.");
  });

  $("p").click(function(){
    alert("This is a paragraph.");
  });

  $("img").click(function(){
    alert("This is an image.");
  });

  $("h2").click(function(){
    $("h2").css("color", "red");
  });

  $(".clickable").click(function(){
    $(".shown").fadeToggle();
    $(".hidden").fadeToggle();
  });


}); //closing document ready function
