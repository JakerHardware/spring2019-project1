// JQuery? More like [REDACTED]
$(document).ready(function(){
    // mouse hover on subscribe
    $("#submit").hover(function(){
        $(this).css("background-color", "#5C809D");
    },
                       function(){
        $(this).css("background-color", "#357098");
    });
  
    // fade out on close
    $("#close").click(function(){
        $("#popup").fadeOut("fast");
        $("main").removeClass("blur");
    });
    
    // open popup manually
    $("#owo button").click(function(){
        $('#popup').fadeIn("fast");
    });
});

// fade out on submit
$(this).submit(function(){
    alert("You are now subscribed.");
    $("#popup").fadeOut("slow");
    $("main").removeClass("blur");
    return false;
});

// lauch popup after 2 seconds
$(function(){
setTimeout(function(){
  $('#popup').fadeIn("fast");
  $("main").addClass("blur");
},2000);
});