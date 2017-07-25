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
    } else {
        $(document.body).css({"overflow-y":"auto"});
    }
}

$(document).ready(function() {
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
