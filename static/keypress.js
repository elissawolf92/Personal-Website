$(document).ready(function() {
    var entered = false;
    alert('ready');
    
    $(document).keypress(function(e) {
        alert('in keypress');
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
