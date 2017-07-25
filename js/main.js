var indicator = 0;
var inSection = false;
var currColorRotation = 0;

function toggleMenu() {
    $("#menu, #landing, #menu-status").toggleClass("active");
    if (!inSection) {
        $("#menu, #main-icon, #menu-status").toggleClass("invert");
    }
    indicator = (indicator + 1) % 2;
    if (indicator == 1) {
        $(document.body).css({"overflow-y":"hidden"});
        $("#menu-status").html("close");
    } else {
        $("#menu-status").html("explore");
        $(document.body).css({"overflow-y":"auto"});
    }
}

$(document).ready(function() {
    $("#down-arrow").click(function() {
	    $("html, body").animate({
	        scrollTop: ($("#facebook").offset().top)
	    }, 750);
	});

	$("#up-arrow").click(function() {
	    $("html, body").animate({
	        scrollTop: 0
	    }, 1000);
	});

    $("#main-icon").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $(document.body).on("click", ".landing-link", function() {
        var selectedID = $(this).attr('id').split("-")[1];
        toggleMenu();
        $("html, body").animate({
            scrollTop: ($("#" + selectedID).offset().top)
        }, 1000);
    });
});

jQuery(window).scroll(function() {
    var scrollPosition = jQuery(this).scrollTop();
    var full_page_height = $("#facebook").height();

    if (scrollPosition > 0.9 * $("#facebook").offset().top &&
    	scrollPosition < 0.9 * $("#facebook").offset().top + full_page_height ||
    	scrollPosition > 0.95 * $("#brown").offset().top &&
    	scrollPosition < 0.95 * $("#brown").offset().top + full_page_height ||
    	scrollPosition > 0.975 * $("#contact").offset().top)  {
        inSection = true;
    	$("#main-icon, #menu, #menu-status").addClass('invert');
    } else {
        inSection = false;
    	$("#main-icon, #menu, #menu-status").removeClass('invert');
    }
});
