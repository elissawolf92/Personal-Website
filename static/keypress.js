$(document).ready(function() {
    
    $(document).keypress(function(e) {
        var key = e.which;
        if (key == 32) {
        //space
            //if (window.location == '') { 
                window.location = '/bio';
            //}
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
        else if (key == 122) {
        // z
        	if (/portfolio/.test(window.location.href)) {
        		window.location = '/portfolio/drawing';
        	}
        }
        else if (key == 120) {
        // x
        	if (/portfolio/.test(window.location.href)) {
        		window.location = '/portfolio/painting';
        	}
        }
        else if (key == 99) {
        // c
        	if (/portfolio/.test(window.location.href)) {
        		window.location = '/portfolio/modeling';
        	}
        }
        
        $("#content").slideDown("slow");

    });


});
