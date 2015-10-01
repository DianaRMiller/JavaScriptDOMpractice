$(document).ready(function() {
  $("#cat_section img").click(function() {
    $("#cat_section ul").append("<li>Meow!</li>");
    $("#dog_section ul").append("<li>Woof-Woof!</li>");
  });

  $("#dog_section img").click(function() {
    $("#dog_section ul").append("<li>Woof!</li>");
    $("#cat_section ul").append("<li>Meow-Meow!</li>");
  });
});
