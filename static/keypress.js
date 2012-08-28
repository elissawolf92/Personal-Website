$(document).ready(function() {

	var current;
	
	var bio = {'url': '/bio',
               'next': portfolio,
               'prev': skills};
                	
    var portfolio = {'url': '/portfolio',
        			'next': skills,
        			'prev': bio};
        				  
	var skills = {'url': '/skills',
              	  'next': bio,
              	  'prev': portfolio};
    
    $(document).keydown(function(e) {
        var key = e.which;
        
        /*var bio = {'url': '/bio',
                	'next': portfolio,
                	'prev': skills};
                	
        var portfolio = {'url': '/portfolio',
        				  'next': skills,
        				  'prev': bio};
        				  
        var skills = {'url': '/skills',
                      'next': bio,
                      'prev': portfolio};*/
        
        if (key == 32) {
        //space
            //if (window.location == '') { 
                window.location = bio.url;
                current = bio;
            //}
        }
        else if (key == '37') {
        // left arrow
        	current = current.prev;
        	window.location = current.url;
        	
        }
        else if (key == '39') {
        //right arrow
        	current = current.next;
        	window.location = current.url;
        }
        
        /* else if (key == 119) {
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
        
        /*else if (key == 122) {
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
        }*/
        
        $("#content").slideDown("slow");

    });


});
