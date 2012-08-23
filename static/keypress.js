$(document).ready(function() {
    var entered = false;
    
    $(document).keypress(function(e) {
        var key = e.which;
        if (key == 32) {
        //space
            if (!entered) { 
                entered = true;
                window.location = '/bio';
            }
        }
        else if (key == 119) {
        // 'w'
            window.location = '/bio';
        }
        else if (key == 97) {
        // 'a'
            window.location = '/portfolio';
        }
        else if (key == 100) {
        // 'd'
            window.location = '/skills';
        }

    });


});
