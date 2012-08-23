$(document).ready(function() {
    var entered = false;
    
    $(document).keypress(function(e) {
        if (e == 32) {
        //space
            if (!entered) { 
                entered = true;
                $.get("/bio");
            }
        }
        if (e == 97) {
        // 'a'
            $.get("/bio");
        }

    });


});
