var indicator = 0;
var inSection = false;
var currColorRotation = 0;

function toggleMenu() {
    $("#menu, #landing, #menu-status").toggleClass("active");
    if (!inSection) {
        $("#menu").toggleClass("invert");
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
        window.location.href = 'noahfang.me';
    });

    $(document.body).on("click", ".menuItem", function() {
        var selectedID = $(this).attr('id').split("-")[1];
        toggleMenu();
    });
});
