// JQuery? More like [REDACTED]
// mouse hover on subscribe
$(document).ready(function(){
    $("#submit").hover(function(){
        $(this).css("background-color", "#5C809D");
    },
                       function(){
        $(this).css("background-color", "#357098");
    }); 
});

// fade out on submit
$(this).submit(function(){
    alert("You are now subscribed.");
    $("#popup").fadeOut("slow");
    return false;
});

// fade out on close
// btw this is a shoutout to yall you motherfuckers who stole my code
// jk i actually love you. 
$(document).ready(function(){
    $("#close").click(function(){
        $("#popup").fadeOut("fast");
    });
});

// this will display the popup after 5 seconds
$(document).ready(function(){
    $('#popup').delay(2000).fadeIn("fast");
});