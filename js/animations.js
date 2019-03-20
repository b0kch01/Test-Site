$(".parallax").css("min-height", $(window).height());

function parabola(vertex, range, x) {
    var sroot = vertex + range;
    var broot = vertex - range;
    var a = 1 / (-1 * (range ** 2));
    var equation = a * (x - sroot) * (x - broot);
    return equation;
}
function amountscrolled() {
    return ($(window).scrollTop() / ($(document).height() - $(window).height()));
}

// Scrolling animations
$(window).scroll(function () {
    $(".scroll-top").css("opacity", parabola(0, 0.3, amountscrolled())); // Fading first title
    $(".scroll-top2").css("opacity", parabola(0.5, 0.2, amountscrolled())); // Fading banner text
    $("#reveal-block-1").css("width", (100*(1 - (parabola(0.55, 0.2, amountscrolled()))) + '%')); // Revealing Title Text
    $("#reveal-block-2").css("width", (100*(1 - (parabola(0.87, 0.3, amountscrolled()))) + '%')); // Revealing Second Title Text
    console.log(amountscrolled())
});

// Resize Pictures to window width for responsiveness.
$(window).on("resize", function () {
    $(".parallax").css("min-height", $(window).height());
});

$("#scroll-indicator").click(function () {
    $('html, body').animate({scrollTop: $("#title").offset().top - 0.4 * $(window).height()}, 2000, "easeInOutQuint");
});