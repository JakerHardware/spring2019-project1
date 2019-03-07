// JQuery? More like [REDACTED]

// mouse hover on subscribe
$(document).ready(function(){
  $("#submit").hover(function(){
    $(this).css("background-color", "#A9A9A9");
  },
  function(){
    $(this).css("background-color", "#000000");
  }); 
});

//fade out on submit
$(this).submit(function(){
  alert("You are now subscribed.");
  $("#popup").fadeOut("slow");
  return false;
});
