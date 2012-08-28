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
              	  
    var getPageFromUrl = function(url) {
    	if (/bio/.test(url))
    		return bio;
    	else if (/portfolio/.test(url))
    		return portfolio;
    	else if (/skills/.test(url))
    		return skills;
    };
    
    $(document).keydown(function(e) {
        var key = e.which;
        var page = getPageFromUrl(window.location.href);
        
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
            //}
        }
        else if (key == '37') {
        // left arrow
        	window.location = page.prev.url;
        	
        }
        else if (key == '39') {
        //right arrow
        	window.location = page.next.url;
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
