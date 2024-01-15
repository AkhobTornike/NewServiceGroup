$(document).ready(function() {
	$('#documenter_nav li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top ) 
            }, 1000);
         
            return false;
        }
    });
});