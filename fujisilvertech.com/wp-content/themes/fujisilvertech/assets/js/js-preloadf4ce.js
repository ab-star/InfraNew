// function isotope() {
//     $('.pro-list-box').isotope({
//         itemSelector: '.pro-list-item',
//         layoutMode: 'masonry',
//         masonry: {
//             columnWidth: 10,
//             // fitWidth: true,
//             gutter: 20
//             //isFitWidth: true
//         }
//     });
// }
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
    document.querySelector('.header').click();
    
}, 2000);
});
$(document).ready(function() {
	// setTimeout(function() {
	// 	$("#page").css("visibility", "visible");
	// 	$("#loader").css("visibility", "hidden");
	// }, 500);
});
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        // document.querySelector("#page").style.visibility = "hidden";
        // document.querySelector("#loader").style.visibility = "visible";
    } else {
        // document.querySelector("#loader").style.display = "none";
        // document.querySelector("#page").style.visibility = "visible";

        setTimeout(function() {
            $('.moveUpanimation').addClass('active');
        }, 1000);

        // isotope();

        setTimeout(function() {
            $('.section-futureIndian').addClass('showBuilding');
        }, 500);

        setTimeout(function() {
            $('.section-futureIndian').addClass('showText');
            $(".section-futureIndian-new").addClass('animated');
            $(".section-futureIndian-new").addClass('cloudanimated');
            // $(".futureIndian-section .bg-video").addClass('animated')
        }, 800);

        setTimeout(function() {
            // $('.section-futureIndian').addClass('showText');
            // $(".section-futureIndian-new").addClass('animated')
            $(".futureIndian-section .bg-video").addClass('animated');
        }, 1000);

        // $(".futureIndian-mount").addClass('animated')
    }
};

