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
        	if (/location/.test(self.location.href) {
        		window.location = '/drawing';
        	}
        }
        else if (key == 120) {
        // x
        	if (window.location.toString().contains('portfolio')) {
        		window.location = '/painting';
        	}
        }
        else if (key == 99) {
        // c
        	if (window.location.contains('portfolio')) {
        		window.location = 'modeling';
        	}
        }
        
        $("#content").slideDown("slow");

    });


});
