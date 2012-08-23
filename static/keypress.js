$(document).ready(function() {
    var entered = false;
    alert('ready');
    
    $(document).keypress(function(e) {
        alert('in keypress');
        var key = e.which;
        if (key == 32) {
        //space
            if (!entered) { 
                entered = true;
                $.get("/bio");
            }
        }
        if (key == 97) {
        // 'a'
            $.get("/bio");
        }

    });


});
