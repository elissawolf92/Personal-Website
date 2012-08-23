$(document).ready(function() {
    var entered = false;
    
    $(document).keypress(function(e) {
        var key = e.which;
        alert(key);
        if (key == 32) {
        //space
            if (!entered) { 
                entered = true;
                //$.get("/bio");
                window.location('/bio');
            }
        }
        if (key == 97) {
        // 'a'
            //$.get("/bio");
            window.location('bio');
        }

    });


});
