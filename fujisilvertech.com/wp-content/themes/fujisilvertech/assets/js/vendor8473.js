window.addEventListener('load', AOS.refresh)

// $(".hamburger").on('click',function(){
//     $('.header_navbar-nav').slideToggle();
// })


$(document).ready(function(){
    jQuery('img').each(function(){
        var $this = jQuery(this);
        if(!$this.attr('alt')){
            if($this.attr('title')){
              $this.attr('alt' , $this.attr('title'))
              
            }else{
              var arraylist = $this.attr('src').split("/");
              var imgnewName = arraylist[arraylist.length - 1];
              var imgnewName1 = imgnewName.split(".");
              var newName =  imgnewName1[0]
              $this.attr('alt' ,newName);
            }
        }
     })

    var $nav = $('.header_navbar-nav'),
        $button = $('.hamburger');

    $button.on('click', function (){
        $nav.slideToggle(function() {
            if($($nav[0]).is(':visible')) {
                $('.header_navbar-nav').addClass('active');
            } else {
               $('.header_navbar-nav').removeClass('active');
               $('.menu-item-has-children').removeClass('active');
               $('.menu-item-has-children').find('.dropdown-content').hide('slow');
            }
        });
    });  
});

// $('.hamburger').on("click", function() {
//     if ($('.header_navbar-nav').slideUp()) {
//         $('.header_navbar-nav').slideDown();
//     } else {
//         $('.header_navbar-nav').slideDown();        
//         $('.menu-item-has-children').removeClass('active');
//     }
// });



// SetBg
function setbg() {
    $(".img-mask").each(function() {
        var theBg = $(this).find(".bg-img").attr("src");
        $(this).css('background-image', 'url(' + theBg + ')');
        $(this).find("img.bg-img").hide();
    });
} 
function fnSectionProInfo(){
    $(".section-pro-info").each(function(){
        var _this = $(this);
        // if($(window).outerHeight() < 929){
        //     var viewport = _this.data("viewport") / 929 * $(window).outerHeight();
        //     var pBottom = _this.data("bottom") / 929 * $(window).outerHeight();
        //     var pLeft = _this.data("left") / 929 * $(window).outerHeight();
        // }else{
        // }
        var viewport = _this.data("viewport") / 885 * $(this).find(".proImg-bottom-fix").outerWidth();
        var pBottom = _this.data("bottom") / 885 * $(this).find(".proImg-bottom-fix").outerWidth();
        var pLeft = _this.data("left") / 885 * $(this).find(".proImg-bottom-fix").outerWidth();
        _this.css({ '--viewport': viewport+'px', '--bottom': pBottom+'px', '--left': pLeft+'px' });
    })

}
$(document).ready(function() {
    AOS.init({
        // once: true
    });
    setbg();
    fnSectionProInfo();
    $(".section-map").css({ '--defHeight': $(window).outerHeight()});
});
// Window Load with resize Event
$(window).on('load resize',function() {
    setbg();
    fnSectionProInfo();
});

$(window).on('resize',function() {
    $(".section-map").css({ '--defHeight': $(window).outerHeight()});
});




// // init controller
var controller = new ScrollMagic.Controller();

// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 800})
// // animate color and top border in relation to scroll position
// .setTween("#animate2", {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7}) // the tween durtion can be omitted and defaults to 1
// .addIndicators({name: "2 (duration: 800)"}) // add indicators (requires plugin)
// .addTo(controller);


// Time Duration Function
function fnDuration(strDur){
    return strDur / 1080 * $(window).outerHeight();
} 

// var timeScrollTop11 = new TimelineMax();
// var tweenScrollTop11 = TweenMax.staggerTo(".section-look-inner", 0.5, {y: "45vh"}, 0.1);
// timeScrollTop11.add(tweenScrollTop11,0)

// var scene =  new ScrollMagic.Scene({ triggerElement: ".lookTrigar" })
// .setTween(timeScrollTop11)
// // .addIndicators()
// .duration("50%") 
// .addTo(cont5oller);

// Section Pioneering Animation
if($(".pioneeringTrigar").length){
    var scene1 =  new ScrollMagic.Scene({ triggerElement: ".pioneeringTrigar" })
    .setClassToggle(".section-pioneering", 'model-scale') // add class toggle
    .reverse(false)
    // .duration("150%")
    // .addIndicators() 
    .addTo(controller);
    scene1.on("start", function (event) {
        $("#proModel-viewer").attr('camera-controls',"");
        // $("#proModel-viewer").attr('min-field-of-view',"55deg");
        // $("#proModel-viewer").attr('max-field-of-view',"55deg");
    });
}

if($("#parallax-trigger1").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#parallax-trigger1", duration: fnDuration(1000)})
    .setTween("#animate-mask-1", {scale: 1}) 
    // .addIndicators() 
    .addTo(controller);
}
if($("#parallax-trigger2").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#parallax-trigger2", duration: fnDuration(1000)})
    .setTween("#animate-mask-2", {scale: 1}) 
    // .addIndicators() 
    .addTo(controller);
}
if($("#parallax-trigger3").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#parallax-trigger3", duration: fnDuration(1000)})
    .setTween("#animate-mask-3", {scale: 1}) 
    // .addIndicators() 
    .addTo(controller);
}


if($("#ubg-trigger1").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#ubg-trigger1", duration: fnDuration(1000)})
    .setTween("#Uparallax-trigger1", {scale: 1}) 
    //.addIndicators() 
    .addTo(controller);
}
if($("#ubg-trigger2").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#ubg-trigger2", duration: fnDuration(1000)})
    .setTween("#Uparallax-trigger2", {scale: 1}) 
    //.addIndicators() 
    .addTo(controller);
}
if($("#ubg-trigger3").length){
    var scene = new ScrollMagic.Scene({triggerElement: "#ubg-trigger3", duration: fnDuration(1000)})
    .setTween("#Uparallax-trigger3", {scale: 1}) 
    //.addIndicators() 
    .addTo(controller);
}





// if($(".map-triggar").length){
//     var gscene = new ScrollMagic.Scene({triggerElement: ".map-triggar", duration: fnDuration(500)})
//     .setTween(".map-details", {opacity: 1 , scale: 1}) 
//     // .addIndicators() 
//     .addTo(controller);
//     gscene.on("leave", function (event) {
//        $(".global").addClass("active")
//     });
// }
// Global

// var timeZoom = new TimelineMax();
// // var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
// var timeZoomInit = TweenMax.staggerTo(".newWrap" , 0.5, {"--zoom": "1"}, 0.1);

// timeZoom.add(timeZoomInit,0)
if($(".newWrap").length){
    // var scene =  new ScrollMagic.Scene({ triggerElement: ".triggarZoom" })
    // .setTween(timeZoom)
    // // .addIndicators()
    // .duration("50%")
    // .addTo(controller);

    var scene = new ScrollMagic.Scene({triggerElement: ".triggarZoom", duration: fnDuration(1500), triggerHook: 1})
    .setTween(".newWrap", { scale: 1})
    // .addIndicators() 
    .addTo(controller);
   
    // var scene = new ScrollMagic.Scene({triggerElement: ".triggarZoomActive",  triggerHook: 1})
    // .setClassToggle(".newWrap", 'active') // add class toggle
    // // .addIndicators() 
    // .addTo(controller);
}


if($(".section-video").length){
    var jscene = new ScrollMagic.Scene({triggerElement: ".section-video", duration: '100%' , triggerHook: 0.85})
    .setTween(".fs-video-section", {scale: 1.3})
    // .addIndicators() 
    .addTo(controller);
   
}
if($(".video-zoom").length){
    var jscene = new ScrollMagic.Scene({triggerElement: ".video-zoom", duration: '180%' , triggerHook: 0.85})
    .setClassToggle(".fs-video-section", 'active')
    // .addIndicators() 
    .addTo(controller);
   
}

if($(".global-triggar").length){
    var jscene = new ScrollMagic.Scene({triggerElement: ".global-triggar", duration: fnDuration(200)})
    .setTween(".section-global-map", {opacity: 1})
    // .addIndicators() 
    .addTo(controller);
    jscene.on("leave", function (event) {
        $(".newWrap").addClass("active")
    });
}
if($(".global-triggar-details").length){
    var jtdscene = new ScrollMagic.Scene({triggerElement: ".global-triggar-details", duration: fnDuration(300)})
    .setTween(".map-details", {opacity: 1 , scale: 1}) 
    // .setClassToggle(".newWrap", 'active') 
    // .addIndicators() 
    .addTo(controller);
}
if($(".global-triggar-details").length){
    var jtdmscene = new ScrollMagic.Scene({triggerElement: ".global-triggar-details", duration: fnDuration(300)})
    .setTween(".global-map-details", {opacity: 1}) 
    // .addIndicators() 
    .addTo(controller);
   
    jtdmscene.on("leave", function (event) {
        $(".global").addClass("active")
        $(".newWrap").removeClass("active")
    });
}
// japan
if($(".japan-triggar").length){
    var jscene = new ScrollMagic.Scene({triggerElement: ".japan-triggar", duration: fnDuration(200)})
    .setTween(".section-japan", {opacity: 1})
    // .addIndicators() 
    .addTo(controller);   
    // jtdscene.on("enter", function (event) {
    //     $(".global").removeClass("active")
    // });
}
if($(".japan-triggar-details").length){
    var jtdscene = new ScrollMagic.Scene({triggerElement: ".japan-triggar-details", duration: fnDuration(300)})
    .setTween(".japan-map", {opacity: 1 , scale: 1}) 
    // .addIndicators() 
    .addTo(controller);
    
}
if($(".japan-triggar-details").length){
    var jtdmscene = new ScrollMagic.Scene({triggerElement: ".japan-triggar-details", duration: fnDuration(300)})
    .setTween(".japan-map-details", {opacity: 1}) 
    // .addIndicators() 
    .addTo(controller);
    jtdmscene.on("leave", function (event) {
        $(".global").removeClass("active")
        $(".jap-map").addClass("active")
    });
}
// india
if($(".india-triggar").length){
    var itscene = new ScrollMagic.Scene({triggerElement: ".india-triggar", duration: fnDuration(100)})
    .setTween(".section-india", {opacity: 1}) 
    // .addIndicators() 
    .addTo(controller);
   
}
if($(".india-triggar-details").length){
    var itdscene = new ScrollMagic.Scene({triggerElement: ".india-triggar-details", duration: fnDuration(300)})
    .setTween(".india-map", {opacity: 1 , scale: 1}) 
    // .addIndicators() 
    .addTo(controller);
    itdscene.on("leave", function (event) {
        $(".jap-map").removeClass("active")
        $(".ind-map").addClass("active")
    });
}
if($(".india-triggar-details").length){
    var itdmscene = new ScrollMagic.Scene({triggerElement: ".india-triggar-details", duration: fnDuration(300)})
    .setTween(".india-map-details", {opacity: 1}) 
    // .addIndicators() 
    .addTo(controller);
}

/***/
// if($(".map-triggar-1").length){
//     var scene = new ScrollMagic.Scene({triggerElement: ".map-triggar-1", duration: "70%"})
//     // .setTween(".section-global-1", {opacity: 1}) 
//     .setClassToggle(".section-global-1", 'animated') // add class toggle
//     // .addIndicators() animated
//     .addTo(controller);
// }

// if($(".japan-triggar-1").length){
//     // var timeline = new TimelineMax();
//     // var tween1 = TweenMax.staggerTo(".section-japan-1", 0.5, {opacity: 1},0.5);
//     // var tween2 = TweenMax.staggerTo(".section-global-1", 0.5, {opacity:0},0.5);
//     //timeline.add(tween1,0).add(tween2,0);
//     var scene = new ScrollMagic.Scene({triggerElement: ".japan-triggar-1", duration: "70%"})
//     // .setTween(".section-japan-1", {opacity: 1}) 
//     .setClassToggle(".section-japan-1", 'animated') // add class toggle
//     // .addIndicators() 
//     .addTo(controller);
// }

// if($(".india-triggar-1").length){
//     // var timeline1 = new TimelineMax();
//     // var tween11 = TweenMax.staggerTo(".section-india-1", 0.5, {opacity: 1},0.5);
//     // var tween21 = TweenMax.staggerTo(".section-japan-1", 0.5, {opacity:0},0.5);
    
//     //timeline1.add(tween11,0).add(tween21,0);
//     var scene = new ScrollMagic.Scene({triggerElement: ".india-triggar-1", duration: "70%"})
//     // .setTween(".section-japan-1", {opacity: 1}) 
//     .setTween(".section-india-1", {opacity: 1}) 
//     // .addIndicators() 
//     .addTo(controller);
// }
// Text Animation

$(".trigarAction").each(function(index){
    var newIndex = index + 1
    var className = "animation-"+ newIndex +"-active"
    var id = "#trigar" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(550)}) //duration: fnDuration(6)
    .setClassToggle("#section-pro-info", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 400)"}) 
    // .duration(""40%"")
    .addTo(controller);
    
});


if($("#trigar-class").length){
    var scene = new ScrollMagic.Scene({triggerElement: '#trigar-class'}) //duration: fnDuration(6)
    .setClassToggle("#section-pro-info", 'active1-disable') // add class toggle
    // .addIndicators({name: "(duration: 400)"}) 
    // .duration(""40%"")
    .addTo(controller);
}
$(".trigarActionBlue").each(function(index){
    var newIndex = index;
    var className = "animation-"+ newIndex +"-blue-active"
    var id = "#trigarActionBlue" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(550)})  //duration: fnDuration(500)
    .setClassToggle("#section-pro-info", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 550)"}) 
    // .duration("40%")
    .addTo(controller);
})

$(".trigarActionFT").each(function(index){
    var newIndex = index + 1
    var className = "animation-"+ newIndex +"-active"
    var id = "#trigarFT" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(550)}) //duration: fnDuration(6)
    .setClassToggle("#section-pro-info-ft", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 400)"}) 
    // .duration(""40%"")
    .addTo(controller);
    
});

$(".trigarActionFTBlue").each(function(index){
    var newIndex = index;
    var className = "animation-"+ newIndex +"-blue-active"
    var id = "#trigarActionFTBlue" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(550)})  //duration: fnDuration(500)
    .setClassToggle("#section-pro-info-ft", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 550)"}) 
    // .duration("40%")
    .addTo(controller);
})

// -----------------------------------------

$(".trigarActionRW").each(function(index){
    var newIndex = index + 1
    var className = "animation-"+ newIndex +"-active"
    var id = "#trigarRW" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(600)}) //duration: fnDuration(6)
    .setClassToggle("#section-pro-info-rw", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 400)"}) 
    // .duration(""40%"")
    .addTo(controller);
    
});

$(".trigarActionRWBlue").each(function(index){
    var newIndex = index;
    var className = "animation-"+ newIndex +"-blue-active"
    var id = "#trigarActionRWBlue" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id, duration: fnDuration(600)})  //duration: fnDuration(500)
    .setClassToggle("#section-pro-info-rw", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 600)"}) 
    // .duration("40%")
    .addTo(controller);
   
    var scene = new ScrollMagic.Scene({triggerElement: '#trigarActionRWlastActive'})  //duration: fnDuration(500)
    .setClassToggle("#section-pro-info-rw", 'lastActiveblue') // add class toggle
    // .addIndicators({name: newIndex + "(duration: 600)"}) 
    // .duration("40%")
    .addTo(controller);

     var scene = new ScrollMagic.Scene({triggerElement: '#trigarActionRWBaseLast'})  //duration: fnDuration(500)
    .setClassToggle("#section-pro-info-rw", 'rwbaseActive') // add class toggle
    // .addIndicators({name: newIndex + "(duration: 600)"}) 
    // .duration("40%")
    .addTo(controller);
})


// -----------------------------------------

if($(".modelViewer").length){
    var viewer1 = $(".modelViewer")[0];
    viewer1.cameraOrbit = "0deg 90deg";
    function updateRotation2() {
        var deg1 = $(".modelViewer").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewer1.cameraOrbit = deg1 + 'deg 90deg';
        requestAnimationFrame(updateRotation2);
    }
    requestAnimationFrame(updateRotation2);
    var timeline21 = new TimelineMax();
    var tween2bt121 = TweenMax.staggerTo("#section-pro-info .sticky", 0.5, { "--clip-wipe": "100%"}, 0.5);
    var tween2bt121r = TweenMax.staggerTo(".modelViewer" , 0.5, {"--rotted": "180"}, 0.1);
    timeline21.add(tween2bt121, 0).add(tween2bt121r, 0);
    if($("#trigarActionBg").length){
        var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionBg" , duration: fnDuration(500)})
        .setTween(timeline21)
        // .addIndicators()
        // .duration("80%")
        .addTo(controller);
    }
    
    var timeline21rr = new TimelineMax();
    // var tween2bt121rr = TweenMax.staggerTo("#section-pro-info .sticky", 0.5, { "--clip-wipe": "0%"}, 0.5);
    var tween2bt121rrr = TweenMax.staggerTo(".modelViewer" , 0.5, {"--rotted": "0"}, 0.1);
    timeline21rr.add(tween2bt121rrr, 0);
    if($("#trigarActionBg1").length){
        var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionBg1" , duration: fnDuration(500)})
        .setTween(timeline21rr)
        // .addIndicators()
        // .duration("")
        .addTo(controller);
    }
}



// 


if($(".modelViewerT6new").length){
    var viewerT6New = $(".modelViewerT6new")[0];
    viewerT6New.cameraOrbit = "0deg 90deg";
    function updateRotationT6new() {
        var degT6New = $(".modelViewerT6new").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewerT6New.cameraOrbit = degT6New + 'deg 90deg';
        requestAnimationFrame(updateRotationT6new);
    }
    requestAnimationFrame(updateRotationT6new);
}

if($(".modelViewerT6new").length){
    var modelViewerT6new = document.querySelector('.modelViewerT6new');
    var timeline21T6new = new TimelineMax();
    var tween2bt121T6newr = TweenMax.staggerTo(".modelViewerT6new" , 0.5, {"--rotted": "270"}, 0.1);
    timeline21T6new.add(tween2bt121T6newr, 0);
    var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionBg" , duration: fnDuration(250)})
    .setTween(timeline21T6new)
    // .addIndicators()
    .addTo(controller);
   
    var timeline21T6newR = new TimelineMax();
    var tween2bt121T6newRR = TweenMax.staggerTo(".modelViewerT6new" , 0.5, {"--rotted": "320"}, 0.1);
    timeline21T6newR.add(tween2bt121T6newRR, 0);
    var sceneRotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionrotted" , duration: fnDuration(250)})
    .setTween(timeline21T6newR)
    // .addIndicators()
    .addTo(controller);

    var scenebg =  new ScrollMagic.Scene({ triggerElement: "#trigarActionBgnew"})
    .setClassToggle("#section-pro-info .sticky", "activebg") // add class toggle
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
    
    var scenereset =  new ScrollMagic.Scene({ triggerElement: ".trigarActionreset"})
    // .addIndicators()
    .duration("20px")
    .addTo(controller);

    var sceneStart =  new ScrollMagic.Scene({ triggerElement: ".trigarActionStart"})
    // .addIndicators()
    // .duration("20px")
    .addTo(controller);

    scenereset.on("start", function (event) {
        $("#section-pro-info .proImg-bottom-fix-b").removeClass('hide')
        modelViewerT6new.currentTime = 0;
        modelViewerT6new.pause();
    });
    sceneStart.on("enter", function (event) {
        modelViewerT6new.currentTime = 0;
        $("#section-pro-info .proImg-bottom-fix-b").addClass('hide')
        modelViewerT6new.play();
        setTimeout(function() {
            modelViewerT6new.pause();
        }, 1990);
    });
}
// End --------------

if($(".modelViewerFTnew").length){
    var viewerFTnew = $(".modelViewerFTnew")[0];
    viewerFTnew.cameraOrbit = "0deg 90deg";
    function updateRotationFTnew() {
        var degFTnew = $(".modelViewerFTnew").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewerFTnew.cameraOrbit = degFTnew + 'deg 90deg';
        requestAnimationFrame(updateRotationFTnew);
    }
    requestAnimationFrame(updateRotationFTnew);
}

if($(".modelViewerFTnew").length){
    var modelViewerFtnew = document.querySelector('.modelViewerFTnew');
    var timeline21FTnew = new TimelineMax();
    var tween2bt121FTnewr = TweenMax.staggerTo(".modelViewerFTnew" , 0.5, {"--rottedFT": "225"}, 0.1);
    timeline21FTnew.add(tween2bt121FTnewr, 0);
    var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionFTBg" , duration: fnDuration(500)})
    .setTween(timeline21FTnew)
    // .addIndicators()
    .addTo(controller);
   
    // var timeline21FTnewR = new TimelineMax();
    // var tween2bt121FTnewRR = TweenMax.staggerTo(".modelViewerFTnew" , 0.5, {"--rottedFT": "320"}, 0.1);
    // timeline21FTnewR.add(tween2bt121FTnewRR, 0);
    // var sceneRotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionFTrotted" , duration: fnDuration(250)})
    // .setTween(timeline21FTnewR)
    // .addIndicators()
    // .addTo(controller);

    var scenebgFT =  new ScrollMagic.Scene({ triggerElement: "#trigarActionFTBgnew"})
    .setClassToggle("#section-pro-info-ft .sticky", "activebg") // add class toggle
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
    
    var sceneresetFT =  new ScrollMagic.Scene({ triggerElement: ".trigarActionFTreset"})
    // .addIndicators()
    .duration("20px")
    .addTo(controller);

    var sceneStartFT =  new ScrollMagic.Scene({ triggerElement: ".trigarActionFTStart"})
    // .addIndicators()
    // .duration("20px")
    .addTo(controller);

    sceneresetFT.on("start", function (event) {
        $("#section-pro-info-ft .proImg-bottom-fix-b").removeClass('hide')
        modelViewerFtnew.currentTime = 0;
    });
    sceneStartFT.on("enter", function (event) {
        modelViewerFtnew.currentTime = 0;
        $("#section-pro-info-ft .proImg-bottom-fix-b").addClass('hide')
        modelViewerFtnew.play();
        setTimeout(function() {
            modelViewerFtnew.pause();
        }, 1250);
    });
}

// End --------------
// Start --------------
if($(".modelViewerRWnew-1").length){
    var viewerRWnew1 = $(".modelViewerRWnew-1")[0];
    viewerRWnew1.cameraOrbit = "0deg 90deg";
    function updateRotationRWnew() {
        var degRWnew1 = $(".modelViewerRWnew-1").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewerRWnew1.cameraOrbit = degRWnew1 + 'deg 90deg';
        requestAnimationFrame(updateRotationRWnew);
    }
    requestAnimationFrame(updateRotationRWnew);


    var timelineClip = new TimelineMax();
    var timelineClipMax = TweenMax.staggerTo("#section-pro-info-rw .sticky", 0.5, { "--clip-wipe": "0%"}, 0.5);
    var timelineMtop = TweenMax.staggerTo("#section-pro-info-rw .sticky", 0.5, { "--mtop": "100vh"}, 0.5);
    timelineClip.add(timelineClipMax, 0).add(timelineMtop, 0)
    if($("#trigarActionRWBg").length){
        var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWBg" , duration: fnDuration(500)})
        .setTween(timelineClip)
        // .addIndicators()
        // .duration("80%")
        .addTo(controller);
    }
  
    var timelineClip1 = new TimelineMax();
    var timelineClip1Max = TweenMax.staggerTo("#section-pro-info-rw .sticky", 0.5, { "--clip-wipe": "0%"}, 0.5);
    timelineClip1.add(timelineClip1Max, 0)
    if($("#trigarActionRWBgrev").length){
        var scene =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWBgrev" , duration: fnDuration(500)})
        .setTween(timelineClip1)
        // .addIndicators()
        // .duration("80%")
        .addTo(controller);
    }

    var sceneCngPro =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWChnageProduct"})
    .setClassToggle("#section-pro-info-rw .sticky", "activeTSRW") // add class toggle
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);


    // play model
    var modelViewerRW = document.querySelector('.modelViewerRWnew-1');
    var modelViewerRW1 = document.querySelector('.modelViewerRWnew-2');

    var scenereset =  new ScrollMagic.Scene({ triggerElement: "#trigarActionpause"})
    // .addIndicators()
    .duration("20px")
    .addTo(controller);
  
    var sceneresetRev =  new ScrollMagic.Scene({ triggerElement: "#trigarActionpauseRev"})
    // .addIndicators()
    .duration("10px")
    .addTo(controller);

    var sceneStart =  new ScrollMagic.Scene({ triggerElement: "#trigarActionplay"})
    // .addIndicators()
    // .duration("20px")
    .addTo(controller);

    sceneresetRev.on("start", function (event) {
        modelViewerRW.currentTime = 0;
        modelViewerRW.pause();
        modelViewerRW1.currentTime = 0;
        modelViewerRW1.pause();
    });

    scenereset.on("start", function (event) {
        modelViewerRW.currentTime = 0;
        // modelViewerRW.play();
        setTimeout(function() {
            modelViewerRW.pause();
            modelViewerRW.currentTime = 0;
        }, 200);
        modelViewerRW1.currentTime = 0;
        // modelViewerRW1.play();
        setTimeout(function() {
            modelViewerRW1.pause();
            modelViewerRW1.currentTime = 0;
        }, 200);
    });
    sceneStart.on("enter", function (event) {
        modelViewerRW.currentTime = 0;
        modelViewerRW.play();
        setTimeout(function() {
            modelViewerRW.pause();
        }, 945);
        modelViewerRW1.currentTime = 0;
        modelViewerRW1.play();
        setTimeout(function() {
            modelViewerRW1.pause();
        }, 945);
    });
}
if($(".modelViewerRWnew-2").length){
    var viewerRWnew2 = $(".modelViewerRWnew-2")[0];
    viewerRWnew2.cameraOrbit = "0deg 90deg";
    function updateRotationRWnew2() {
        var degRWnew2 = $(".modelViewerRWnew-2").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewerRWnew2.cameraOrbit = degRWnew2 + 'deg 90deg';
        requestAnimationFrame(updateRotationRWnew2);
    }
    requestAnimationFrame(updateRotationRWnew2);

    var timelineRWRotted = new TimelineMax();
    var tweenLineRWrotted1 = TweenMax.staggerTo(".modelViewerRWnew-1" , 0.5, {"--rottedRW1": "330"}, 0.1);
    var tweenLineRWrotted2 = TweenMax.staggerTo(".modelViewerRWnew-2" , 0.5, {"--rottedRW2": "330"}, 0.1);
    timelineRWRotted.add(tweenLineRWrotted1, 0).add(tweenLineRWrotted2, 0);
    var sceneRotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWrotted" , duration: fnDuration(800)})
    .setTween(timelineRWRotted)
    //.addIndicators()
    .addTo(controller);

    // var timelineRWRotted1 = new TimelineMax();
    // var tweenLineRWrotted11 = TweenMax.staggerTo(".modelViewerRWnew-1" , 0.5, {"--rottedRW1": "180"}, 0.1);
    // var tweenLineRWrotted22 = TweenMax.staggerTo(".modelViewerRWnew-2" , 0.5, {"--rottedRW2": "180"}, 0.1);
    // timelineRWRotted1.add(tweenLineRWrotted11, 0).add(tweenLineRWrotted22, 0);
    // var sceneRotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWrotted1" , duration: fnDuration(800)})
    // .setTween(timelineRWRotted1)
    // //.addIndicators()
    // .addTo(controller);
   
    var timelineRWDis = new TimelineMax();
    var tweenLineRWdis = TweenMax.staggerTo(".proImg-bottom-fix" , 0.5, {"--leftMove": "-110px"}, 0.1);
    var tweenLineRWdis1 = TweenMax.staggerTo(".proImg-bottom-fix" , 0.5, {"--rightMove": "260px"}, 0.1);
    timelineRWDis.add(tweenLineRWdis, 0).add(tweenLineRWdis1, 0);
    var sceneRotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRWdis" , duration: fnDuration(800)})
    .setTween(timelineRWDis)
    //.addIndicators()
    .addTo(controller);

}
// End --------------


if($("#mvushapdrains").length){
    function updateRotation1() {
        // var viewer1 = $("#modelViewerT6")[0];
        // viewer1.cameraOrbit = "140deg 90deg";
        // var deg1 = $("#modelViewerT6").attr("style").split(":")[1].replace(';','');
        // viewer1.cameraOrbit = deg1 + 'deg 90deg';
    
        // var viewer11 = $("#modelViewerFT")[0];
        // viewer11.cameraOrbit = "-40deg 90deg";
        // var deg11 = $("#modelViewerFT").attr("style").split(":")[1].replace(';','');
        // viewer11.cameraOrbit = deg11 + 'deg 90deg';
    
    
        var viewer2 = $("#mvushapdrains")[0];
        viewer2.cameraOrbit = "170deg 90deg";
        var deg2 = $("#mvushapdrains").attr("style").split(":")[1].replace(';','');
        viewer2.cameraOrbit = deg2 + 'deg 90deg';
    
        requestAnimationFrame(updateRotation1);
    }
    requestAnimationFrame(updateRotation1);
    var timelineRotted1 = new TimelineMax();
    var timelineRotted1a = TweenMax.staggerTo("#mvushapdrains" , 0.5, {"--rotted2": "180"}, 0.1);
    timelineRotted1.add(timelineRotted1a, 0);
    var scenerotted1 =  new ScrollMagic.Scene({ triggerElement: "#shapedrainstrigarActionRotted" , duration: fnDuration(500)})
    .setTween(timelineRotted1)
    .addTo(controller);
}
if($("#modelViewerFT").length){
    var modelViewerFt = document.querySelector('#modelViewerFT');
    var timelineRotted1 = new TimelineMax();
    var timelineRotted1a = TweenMax.staggerTo("#modelViewerFT" , 0.5, {"--rotted1": "225"}, 0.1);
    timelineRotted1.add(timelineRotted1a, 0);
    var scenerotted1 =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRotted1" , duration: fnDuration(500)})
    .setTween(timelineRotted1)
    .addTo(controller);
    
    var sceneDown1 =  new ScrollMagic.Scene({ triggerElement: "#trigarActionplay1" })
    .addTo(controller);
    scenerotted1.on("enter", function (event) {
        $(".u-shape-img-before1").removeClass('hide')
        modelViewerFt.currentTime = 0;
    });

    sceneDown1.on("enter", function (event) {
        $(".u-shape-img-before1").addClass('hide')
        var modelViewerFt = document.querySelector('#modelViewerFT');
    
        modelViewerFt.play();
        setTimeout(function() {
            modelViewerFt.pause();
            function updateRotationnew(){
                var viewer12 = $("#modelViewerFT")[0];
                viewer12.cameraOrbit = "225deg 65deg";
                requestAnimationFrame(updateRotationnew);
            }
          
            requestAnimationFrame(updateRotationnew);
            // modelViewerFt.currentTime = 0;
        }, 1250);
    });
}
if($("#modelViewerT6").length){
   
    
    var modelViewerT6 = document.querySelector('#modelViewerT6');
    var timelineRotted = new TimelineMax();
    var timelineRotteda = TweenMax.staggerTo("#modelViewerT6" , 0.5, {"--rotted": "320"}, 0.1);
    timelineRotted.add(timelineRotteda, 0);
    var scenerotted =  new ScrollMagic.Scene({ triggerElement: "#trigarActionRotted" , duration: fnDuration(500)})
    .setTween(timelineRotted)
    .addTo(controller);
    
    var sceneDown =  new ScrollMagic.Scene({ triggerElement: "#trigarActionplay" })
    .addTo(controller);
    scenerotted.on("enter", function (event) {
        $(".u-shape-img-before").removeClass('hide')
        modelViewerT6.currentTime = 0;
    });
    sceneDown.on("enter", function (event) {
        $(".u-shape-img-before").addClass('hide')
      
        
        modelViewerT6.play();
       
        setTimeout(function() {
            modelViewerT6.pause();
            // modelViewerT6.currentTime = 0;
          
            function updateRotationnew1(){
                var viewerT6 = $("#modelViewerT6")[0];
                viewerT6.cameraOrbit = "320deg 65deg";
            }
            requestAnimationFrame(updateRotationnew1);
        }, 1990);
        // modelViewerT6.addEventListener('timeupdate', () => {
        //     // Check if the current time is greater than 5 seconds
        //     if (modelViewerT6.currentTime >= 2) {
        //       // Pause the animation
        //       modelViewerT6.pause();
        //     }
        // });
    });
    
}



// $(document).ready(function ($) {
//     // var modelViewerT5 = document.querySelector('#modelViewerT6');
    
//     // modelViewerT5.play();


//     const modelViewerT5 = document.querySelector('#modelViewerT6');

//     // Get material by name
//     const materialName = 'Object001';
//     const material1 = modelViewerT5.model.materials[materialName];
//     console.log(material1)
    
//     // Hide material
//     modelViewerT5.setMaterialProperty(material1, 'visible', false);

//     // const modelViewer = document.querySelector('#modelViewerT6');

//     // // Get a material by index
//     // const materialIndex = 0; // replace with the index of the material you want to get
//     // const material = modelViewer.materials[materialIndex];

//     // // Get the material name
//     // const materialName = material.name;
//     // console.log(materialName);
// });

// Text Up and Down Animation on scroll 

$(".mm > div").each(function(index){
    var timeline = new TimelineMax();
    var newIndex1 = index + 1
    var className1 = "#h-title-"+ newIndex1;
    var id1 = "#h-t-s-" + newIndex1;

    var tween2a = TweenMax.staggerTo(className1, 0.6, { opacity: 1 , top: -40 }, 0.5);
    var tween2b = TweenMax.staggerTo(className1, 0.1, { opacity: 0 }, 0.1);
    var tween2bt = TweenMax.staggerTo(className1, 0.3, { top: -80 }, 0.1);
    
    timeline.add(tween2a, 0) .add(tween2b, 0.9) .add(tween2bt, 0.6);
    
    var scene =  new ScrollMagic.Scene({ triggerElement: id1 })
    .setTween(timeline)
    .duration("450px")
    // .addIndicators()
    .addTo(controller);
});


// Scale Image zoom out
if($("#h-t-s-2").length){
    var timeline1 = new TimelineMax();
    var tween2bt1 = TweenMax.staggerTo(".proImg-bottom-1 img", 0.5, { scaleX:1, scaleY:1}, 0.1);
    timeline1.add(tween2bt1, 0);
    var scene =  new ScrollMagic.Scene({ triggerElement: "#h-t-s-2" })
    .setTween(timeline1)
    // .addIndicators()
    .duration("2500px") // Section Total Height
    .addTo(controller);
}

// Time View scroll Roted
if($("#modelView1").length){
    var viewer = $("#modelView1")[0];
    viewer.cameraOrbit = "0deg 90deg";
    function updateRotationPro() {
        var deg = $("#modelView1").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewer.cameraOrbit = deg + 'deg 90deg';
        requestAnimationFrame(updateRotationPro);
    }
    requestAnimationFrame(updateRotationPro);
}

if($(".rotedTrigar").length){
    var timeScrollTop = new TimelineMax();
    var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
    var tweenScrollTop1 = TweenMax.staggerTo("#modelView1" , 0.5, {"--rottedPro": "180"}, 0.1);
    
    timeScrollTop.add(tweenScrollTop,0).add(tweenScrollTop1,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".rotedTrigar" })
    .setTween(timeScrollTop)
    // .addIndicators()
    .duration("100%")
    .addTo(controller);
}
// ------------------*********-----------------------//
if($(".TextTrigar").length){
    var scene =  new ScrollMagic.Scene({ triggerElement: ".TextTrigar" })
    .setClassToggle(".animation-up-text", "active") // add class toggle
    // .addIndicators()
    .duration("120%")
    .addTo(controller);
}
// ------------------*********-----------------------//
if($(".section-philosophy").length){
$(".section-philosophy").each(function(index){
    var newIndex = index + 1
    var className = "show"+ newIndex;
    var id = "#showAction" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
    .setClassToggle(".section-philosophy", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 50)"}) 
    // .duration(""40%"")
    .addTo(controller);
});
}
if($(".section-structurally").length){
$(".section-structurally .showAction").each(function(index){
    var newIndex = index + 1
    var className = "show"+ newIndex;
    var id = "#showAction" + newIndex;
    var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
    .setClassToggle(".section-structurally", className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 50)"}) 
    // .duration(""40%"")
    .addTo(controller);
});
}
if($(".animtionMoveUp").length){
    $(".animtionMoveUp").each(function(index){
        var newIndex = index + 1
        var className = "show";
        var id = "#philosophy" + newIndex;
        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle($(this)[0], className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 50)"}) 
        // .duration(""40%"")
        .addTo(controller);   
    });
}
if($(".animtionFlip").length){
    $(".animtionFlip").each(function(index){
        var newIndex = index + 1
        var className = "active";
        var id = "#philosophyFlip" + newIndex;
        var newDuration = '30%'
        if(newIndex === $(".animtionFlip").length){
            newDuration = '150%';
        }
        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle($(this)[0], className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 50)"}) 
        .duration(newDuration)
        .addTo(controller);   
    });
}
if($(".booger").length){
    $(".booger").each(function(index){
        var newIndex = index + 1
        var className = "show";
        var newDuration = '80%'
        if(newIndex === $(".booger").length){
            newDuration = '150%';
        }
        var triggerClass = ".triggarWater-" + newIndex;
        var scene = new ScrollMagic.Scene({triggerElement: triggerClass}) //duration: fnDuration(6)
        .setClassToggle($(this)[0], className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 50)"}) 
        .duration(newDuration)
        .addTo(controller);   
    });
  }
// $(".animation-up").each(function(index){
//     var className = "show";
//     var id = $(this)[0];
//     var scene = new ScrollMagic.Scene({triggerElement: $('.animtionMoveUp')[0]}) //duration: fnDuration(6)
//     .setClassToggle($(this)[0], className) // add class toggle
//     // .addIndicators({name: newIndex + "(duration: 50)"}) 
//     // .duration(""40%"")
//     .addTo(controller);
    

// });
$(".animationImgTrigger").each(function(index){
    var className = "showImg";
    var id = $('.animationImgTrigger')[0];
    var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
    .setClassToggle($('.section-philosophy')[0], className) // add class toggle
    // .addIndicators({name:  "(animation Show: 50)"}) 
    // .duration(""40%"")
    .addTo(controller);
    
});

function isotope(){
    $('.pro-list-box').isotope({
      itemSelector: '.pro-list-item',
      layoutMode : 'masonry',
      masonry: {
        columnWidth: 10,
        // fitWidth: true,
        gutter: 20
        //isFitWidth: true
      }
    });
}
$(document).ready(function () {
if($('.pro-list-box').length){
	isotope();
}
	
});


// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         // document.querySelector("#page").style.visibility = "hidden";
//         // document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         // document.querySelector("#loader").style.display = "none";
//         // document.querySelector("#page").style.visibility = "visible";
//         setTimeout(function() {
//             $('.moveUpanimation').addClass('active');
//         }, 1000);
// 		if($('.pro-list-box').length){
//         isotope();
// 		}
//          setTimeout(function() {
//             $('.section-futureIndian').addClass('showBuilding');
//         }, 500);
//          setTimeout(function() {
//             $('.section-futureIndian').addClass('showText');
//              $(".section-futureIndian-new").addClass('animated')
//             $(".section-futureIndian-new").addClass('cloudanimated')
//             // $(".futureIndian-section .bg-video").addClass('animated')
//         }, 800);
       
//          setTimeout(function() {
//             // $('.section-futureIndian').addClass('showText');
//             // $(".section-futureIndian-new").addClass('animated')
//             $(".futureIndian-section .bg-video").addClass('animated')
//         }, 1000);
       
//         // $(".futureIndian-mount").addClass('animated')
        
//     }
// };

var swiper = new Swiper(".section-whatwemakeit .swiper", {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      1299:{
        slidesPerView: 3,
        spaceBetween: 40,
    }
},
});


var swiper = new Swiper(".section-futureIndian-new .swiper", {
    spaceBetween: 1,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed:1000,
    autoplay: {
      delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




// $(document).ready(function () {
//     $('.category-block > .category-background#cable-power').hover(function () {
//         $(this).parent().css("background-image", "url('img/fuji-silvertech-banner-img01.jpg')");
//     });
//     $('.category-block > .category-background#water-sewage').hover(function () {
//         $(this).parent().css("background-image", "url('img/fuji-silvertech-banner-img02.jpg')");
//     });
//     $('.category-block > .category-background#railways').hover(function () {
//         $(this).parent().css("background-image", "url('img/fuji-silvertech-banner-img03.jpg')");
//     });
//     $('.category-block > .category-background#industrial').hover(function () {
//         $(this).parent().css("background-image", "url('img/fuji-silvertech-banner-img04.jpg')");
//     });
//     $('.category-block > .category-background#roads-bridges').hover(function () {
//         $(this).parent().css("background-image", "url('img/fuji-silvertech-banner-img05.jpg')");
//     });
// });

$(document).ready(function () {
    $('.category-block > .category-background#cable-power').hover(function () {
        $(this).parent().css("background-image", "url('/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img01.jpg')");
    });
    $('.category-block > .category-background#water-sewage').hover(function () {
        $(this).parent().css("background-image", "url('/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img02.jpg')");
    });
    $('.category-block > .category-background#railways').hover(function () {
        $(this).parent().css("background-image", "url('/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img03.jpg')");
    });
    $('.category-block > .category-background#industrial').hover(function () {
        $(this).parent().css("background-image", "url('/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img04.jpg')");
    });
    $('.category-block > .category-background#roads-bridges').hover(function () {
        $(this).parent().css("background-image", "url('/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img05.jpg')");
    });
});


$(document).ready(function () {
    $(".category-background").mouseover(function () {
        $(".category-image").css("opacity", "0");
    });

    $(".category-background").mouseout(function () {
        $(".category-image").css("opacity", "1");
    });
});
 

// Video player ============================
if($("#_youtube-iframe").length){
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtubePlayer;
var _youtube_id = document.getElementById('_youtube-iframe');

 function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('_youtube-iframe', {
        videoId: _youtube_id.dataset.youtubeurl,
        playerVars: {
            cc_load_policy: 0,
            controls: 0,
            disableb: 0,
            iv_load_policy: 3,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 3
        },
        events: {
            'onReady': onYoutubePlayerReady,
            'onStateChange': onYoutubePlayerStateChange
        }
    });
}

function onYoutubePlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
        //event.target.unMute();
}

function onYoutubePlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        // Velocity(document.getElementById('_buffering-background'), {opacity: 0}, 500);
    }

    if (event.data == YT.PlayerState.ENDED) {
        event.target.playVideo();
    }
}
}




$('a.play-video').click(function(){
    $(".video-action").addClass("pause").removeClass("play");
    player.unMute();
    // $('#_youtube-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

$('a.pause-video').click(function(){
    $(".video-action").addClass("play").removeClass("pause");
    player.mute();
    // $('#_youtube-iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});


$('.menu-item-has-children').on("click", function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).closest('.menu-item-has-children').find('.dropdown-content').hide('slow');
    } else {
        $('.menu-item-has-children.active').removeClass('active');
        $(this).addClass('active');
        $('.menu-item-has-children').find('.dropdown-content').slideUp();
        $(this).closest('.menu-item-has-children').find('.dropdown-content').show('slow');
    }
});


jQuery(".flag-inner").each(function(){
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.random() * (max - min) + min;
    }

    const rndInt =  randomIntFromInterval(0.2, 0.4);

    let scene, camera, renderer;
    const [width, height] = [700, 400];
    let flag;
    
    const [sizeW, sizeH, segW, segH] = [25, 20, 25, 20];
    var appendChild = jQuery(jQuery(this).find('.renderArea'));
    const url = jQuery(this).find('.flag').attr('src');
    const init = () => {
      const loader = new THREE.TextureLoader();
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
      camera.position.set(0, 0, 40);
      camera.lookAt(new THREE.Vector3(0, 0.0));
      renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
      renderer.setSize(width, height);
      renderer.setClearColor( 0x000000, 0 );
      appendChild.append(renderer.domElement);
      const light = new THREE.DirectionalLight("#FFFFFF");
      light.position.set(10, 5, 25);
      scene.add(light);
    
      geometry = new THREE.PlaneGeometry(sizeW, sizeH, segW, segH);
      material = new THREE.MeshPhongMaterial({
        // color:     0x996633, 
        // specular:  0x000000,
        shininess: 25,
        map: loader.load(url),
        side: THREE.DoubleSide,
      });
      flag = new THREE.Mesh(geometry, material);

      scene.add(flag);
      update();
    };
   
   
    const update = () => {
      const h = 0.5;
      const v = 0.2;
      const w = 0.5;
      const s = rndInt;

      for (let y = 0; y < segH + 1; y++) {
        for (let x = 0; x < segW + 1; x++) {
          const index = x + y * (segW + 1);
          const vertex = flag.geometry.vertices[index];
          const time = (Date.now() * s) / 50;
          vertex.z = (Math.sin(h * x + v * y - time) * w * x) / 4;
        }
      }
      flag.geometry.verticesNeedUpdate = true;
      renderer.render(scene, camera);
      window.requestAnimationFrame(update);
    };
    init();
});



// slider galleay
var $ = jQuery;
var table3= 3;
var tablei = 1;
jQuery(".item").each(function(i){
    var newIndex = i + 1;
    var lastindex = i
   
    if(newIndex == table3){     
      
        $(this).appendTo(".newWrap .swiper-wrapper .item-wrap:last");
        tablei = tablei + 1;
        table3 = 3 * tablei;
        
    }else{
        $('<div class="item-wrap newActive swiper-slide"></div>').appendTo(".newWrap .swiper-wrapper");
        $(this).appendTo('.newActive');
    }
    lastindex = i 
    $('.newActive').removeClass('newActive');

}); 

// slider galleay   
   
var swiper = new Swiper(".gallery.swiper", {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      1299:{
        slidesPerView: 4,
        spaceBetween: 15,
    }
    
},
});

// $('.gallery').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery:{
//         enabled:true
//     }
//     });


var swiper = new Swiper(".swipermanufactur .swiper", {

    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
         568: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 10,
      },
      1299:{
        slidesPerView: 7,
        spaceBetween: 10,
    }
},
});

// masonry layouts projects page
// $('.pro-list-box').masonry({
//   columnWidth: 80,
//   gutter: 5,
//   itemSelector: '.pro-list-item'
// });



if($(".moveLeft").length){
    var timelineMoveLeft = new TimelineMax();
    var tweenMoveLeft = TweenMax.staggerTo(".moveLeft", 0.5, { "--leftMove": "930px"}, 0.1);
    timelineMoveLeft.add(tweenMoveLeft, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationLeftTrigger" ,duration: fnDuration(1000), triggerHook: 0.5})
    .setTween(timelineMoveLeft)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}

if($(".moveUpa").length){
    var timelineMoveUpa = new TimelineMax();
    var tweenMoveUpa = TweenMax.staggerTo(".moveUpa", 0.5, { "--upMove": "0px"}, 0.1);
    timelineMoveUpa.add(tweenMoveUpa, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationLeftTrigger" ,duration: fnDuration(1000), triggerHook: 0.5})
    .setTween(timelineMoveUpa)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}




// $(window).on("load resize",function() {

//     var counters = $(".counter");
//     var countersQuantity = counters.length;
//     var counter = [];
  
//     for (i = 0; i < countersQuantity; i++) {
//       counter[i] = parseInt(counters[i].innerHTML);
//     }
  
//     var count = function(start, value, id) {
//       var localStart = start;
//       setInterval(function() {
//         if (localStart < value) {
//           localStart++;
//           counters[id].innerHTML = localStart;
//         }
//       }, 4);
//     }
  
//     for (j = 0; j < countersQuantity; j++) {
//       count(0, counter[j], j);
//     }
//   });


// number count for stats, using jQuery animate


if($(".counter").length){
    var scene =  new ScrollMagic.Scene({ triggerElement: ".counter", triggerHook: 1})
    // .setTween(timeline21rr)
    // .addIndicators()
    // .duration("")
    .addTo(controller);
    var counterInit = true
    scene.on("enter", function (event) {
        if(counterInit == true){
        $('.counter').each(function() {
            console.log("in")
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            
            {
                duration: 2000,
                easing:'linear',
                step: function() {
                // $this.text(Math.floor(this.countNum));
                $this.text(Math.ceil(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                },
                complete: function() {
                // $this.text(this.countNum);
                $this.text(Math.ceil(this.countNum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                //alert('finished');
                }
            });  
        });
        counterInit = false;
    }
    });
}

if($(".zoomTitle").length){
    var timelinezoomText = new TimelineMax();
    var tweenzoomText = TweenMax.staggerTo(".zoomTitle", 0.5, { "--scaleView": "0.95"}, 0.1);
    timelinezoomText.add(tweenzoomText, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationZoomTextTrigger" ,duration: '60%'})
    .setTween(timelinezoomText)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}



if($(".ourvaluezoomTitle").length){
    var timelinevaluezoomText = new TimelineMax();
    var tweenzoomvalueText = TweenMax.staggerTo(".ourvaluezoomTitle", 0.5, { "--scaleView": "1"}, 0.1);
    timelinevaluezoomText.add(tweenzoomvalueText, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationZoomourvalue" ,duration: '80%'})
    .setTween(timelinevaluezoomText)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);

    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationBackgroundShow", triggerHook: 0})
    .setClassToggle($('.section-ourvalues')[0], 'bgActive') // add class toggle
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}

// if($(".img-scroll-section").length){
//     var imgScrollVisionModal = new TimelineMax();
//     // var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
//     var imgScrollVisionModalInit = TweenMax.staggerTo(".img-scroll-section .img-scroll-1 h2" , 0.5, {"--left": "9%"}, 0.1);

//     imgScrollVisionModal.add(imgScrollVisionModalInit,0)
//     var scene =  new ScrollMagic.Scene({ triggerElement: ".triggarScroll-1" })
//     .setTween(imgScrollVisionModal)
//     // .addIndicators()
//     .duration("60%")
//     .addTo(controller);
// }
if($(".imgscrollzoomTitle1").length){
    var timelineimgscrollzoomText1 = new TimelineMax();
    var tweenimgscrollzoomvalueText1 = TweenMax.staggerTo(".imgscrollzoomTitle1", 0.5, { "--scaleView": "200px"}, 0.1);
    timelineimgscrollzoomText1.add(tweenimgscrollzoomvalueText1, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationZoomimgscroll1" ,duration: '80%'})
    .setTween(timelineimgscrollzoomText1)
    .addTo(controller);
}

if($(".imgscrollzoomTitle2").length){
    var timelineimgscrollzoomText2 = new TimelineMax();
    var tweenimgscrollzoomvalueText2 = TweenMax.staggerTo(".imgscrollzoomTitle2", 0.5, { "--scaleView": "100px"}, 0.1);
    timelineimgscrollzoomText2.add(tweenimgscrollzoomvalueText2, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationZoomimgscroll2" ,duration: '80%'})
    .setTween(timelineimgscrollzoomText2)
    .addTo(controller);
}

if($(".imgscrollzoomTitle3").length){
    var timelineimgscrollzoomText3 = new TimelineMax();
    var tweenimgscrollzoomvalueText3 = TweenMax.staggerTo(".imgscrollzoomTitle3", 0.5, { "--scaleView": "200px"}, 0.1);
    timelineimgscrollzoomText3.add(tweenimgscrollzoomvalueText3, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationZoomimgscroll3" ,duration: '80%'})
    .setTween(timelineimgscrollzoomText3)
    .addTo(controller);
}

if($(".uScroll-Title1").length){
    var timelineimgscrollzoomText1 = new TimelineMax();
    var tweenimgscrollzoomvalueText1 = TweenMax.staggerTo(".uScroll-Title1", 0.5, { "--scaleView": "200px"}, 0.1);
    timelineimgscrollzoomText1.add(tweenimgscrollzoomvalueText1, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: "#parallax-trigger1", triggerHook: 1, duration: '70%'})
    .setTween(timelineimgscrollzoomText1)
    .addTo(controller);
}

if($(".uScroll-Title2").length){
    var timelineimgscrollzoomText2 = new TimelineMax();
    var tweenimgscrollzoomvalueText2 = TweenMax.staggerTo(".uScroll-Title2", 0.5, { "--scaleView": "100px"}, 0.1);
    timelineimgscrollzoomText2.add(tweenimgscrollzoomvalueText2, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: "#parallax-trigger2", triggerHook: 0.5, duration: '70%'})
    .setTween(timelineimgscrollzoomText2)
    .addTo(controller);
}

if($(".uScroll-Title3").length){
    var timelineimgscrollzoomText3 = new TimelineMax();
    var tweenimgscrollzoomvalueText3 = TweenMax.staggerTo(".uScroll-Title3", 0.5, { "--scaleView": "200px"}, 0.1);
    timelineimgscrollzoomText3.add(tweenimgscrollzoomvalueText3, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: "#parallax-trigger3", triggerHook: 0.9, duration: '70%'})
    .setTween(timelineimgscrollzoomText3)
    .addTo(controller);
}


if($(".build-img").length){
    var timelineBoxup = new TimelineMax();
    var tweenBoxup = TweenMax.staggerTo(".value-box", 0.5, { "--b": "0px"}, 0.1);
    timelineBoxup.add(tweenBoxup, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".animationValueShow",duration: '100%' })
    .setTween(timelineBoxup)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}


if($(".build-img").length){
    var timelineMoveUp = new TimelineMax();
    var tweenMoveup = TweenMax.staggerTo(".build-img", 0.5, { "--topMove": "20px"}, 0.1);
    timelineMoveUp.add(tweenMoveup, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".moveupbg-trigger" , duration: '30%'})
    .setTween(timelineMoveUp)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}

if($(".build-img").length){
    var timelineZoomDown = new TimelineMax();
    var tweenZoomDown = TweenMax.staggerTo(".build-img", 0.5, { "--zoomDown": "1"}, 0.1);
    timelineZoomDown.add(tweenZoomDown, 0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".moveupbg-trigger-1" , duration: "20%"})
    .setTween(timelineZoomDown)
    // .addIndicators()
    // .duration("80%")
    .addTo(controller);
}

// Our Vision


// Time View scroll Roted
if($("#visionModel").length){
    var viewer = $("#visionModel")[0];
    viewer.cameraOrbit = "0deg 90deg";
    function updateRotation() {
        var deg = $("#visionModel").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewer.cameraOrbit = deg + 'deg 90deg';
        requestAnimationFrame(updateRotation);
    }
    requestAnimationFrame(updateRotation);
}

if($(".rotedVisionTrigar").length){
    var timeScrollVision = new TimelineMax();
    // var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
    var timeScrollVisionInit = TweenMax.staggerTo("#visionModel" , 0.5, {"--rotted": "-40"}, 0.1);
    
    timeScrollVision.add(timeScrollVisionInit,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".rotedVisionTrigar" })
    .setTween(timeScrollVision)
    // .addIndicators()
    .duration("60%")
    .addTo(controller);
}



if($(".section-vision").length){
    var timeScrollVisionModal = new TimelineMax();
    // var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
    var timeScrollVisionModalInit = TweenMax.staggerTo(".section-vision .heading-title" , 0.5, {"--left": "47vw"}, 0.1);
    
    timeScrollVisionModal.add(timeScrollVisionModalInit,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".textVisionTrigar" })
    .setTween(timeScrollVisionModal)
    // .addIndicators()
    .duration("60%")
    .addTo(controller);
}


if($("#futureTriggerAction-3").length){
    var scene = new ScrollMagic.Scene({triggerElement: $('#futureTriggerAction-3')[0]}) //duration: fnDuration(6)
    .setClassToggle($('.space-img')[0], 'animationActive') // add class toggle
    // .addIndicators({name:  "(animation Show: 50)"}) 
    // .duration(""40%"")
    .addTo(controller);
}

// if($("#futureTriggerAction-2").length){
//     var scene = new ScrollMagic.Scene({triggerElement: $('#futureTriggerAction-2')[0]}) //duration: fnDuration(6)
//         .setClassToggle($('.section-futureIndian')[0], 'showBuilding') // add class toggle
//         // .addIndicators({name:  "(animation Show: 50)"}) 
//         // .duration(""40%"")
//         .addTo(controller);
// }

// if($("#futureTriggerAction-4").length){
//     var scene = new ScrollMagic.Scene({triggerElement: $('#futureTriggerAction-4')[0]}) //duration: fnDuration(6)
//     .setClassToggle($('.section-futureIndian')[0], 'showText') // add class toggle
//     // .addIndicators({name:  "(animation Show: 50)"}) 
//     // .duration(""40%"")
//     .addTo(controller);
// }

if($("#proModelFuture").length){
    var viewer1 = $("#proModelFuture")[0];
    viewer1.cameraOrbit = "0deg 90deg";
    function updateRotation3() {
        var deg = $("#proModelFuture").attr("style").split(":")[1].replace(';','');
        // var theta = window.scrollY * 0.1 - 30;
        viewer1.cameraOrbit = deg + 'deg 90deg';
        requestAnimationFrame(updateRotation3);
    }
    requestAnimationFrame(updateRotation3);
}

if($("#futureTriggerAction-5").length){
    var timeScrollVision1 = new TimelineMax();
    // var tweenScrollTop = TweenMax.staggerTo(".animation-up-text", 0.5, {y: "-40vh"}, 0.1);
    var timeScrollVision1Init = TweenMax.staggerTo("#proModelFuture" , 0.5, {"--rotted": "-215"}, 0.1);
    timeScrollVision1.add(timeScrollVision1Init,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: "#futureTriggerAction-5" })
    .setTween(timeScrollVision1)
    // .addIndicators()
    .duration("60%")
    .addTo(controller);
}




// indSlideDownAnimation
// trigSlideDown

if($(".trigSlideDown").length){
    var timeScrollVision1 = new TimelineMax();
    var timeScrollVision1Init = TweenMax.staggerTo(".indSlideDownAnimation" , 1, {"--y": "400px"}, 0.1);
    timeScrollVision1.add(timeScrollVision1Init,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".trigSlideDown" })
    .setTween(timeScrollVision1)
    // .addIndicators()
    .duration("60%")
    .addTo(controller);
}

if($(".trigZoom").length){
    var timeScrollZoom = new TimelineMax();
    var timeScrollZoomInit = TweenMax.staggerTo(".indSlideDownAnimation" , 1, { "--s": "1"}, 0.1);
    timeScrollZoom.add(timeScrollZoomInit,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".trigZoom" })
    .setTween(timeScrollZoom)
    // .addIndicators()
    .duration("30%")
    .addTo(controller);
}

// var timeScrollVision1 = new TimelineMax();
// var timeScrollVision1Init = TweenMax.staggerTo(".moveRight" , 1, {"--x": "0px", "--s": "1"}, 0.1);

// timeScrollVision1.add(timeScrollVision1Init,0)
// if($(".trigMoveRight").length){
//     var scene =  new ScrollMagic.Scene({ triggerElement: ".trigMoveRight", triggerHook: 0.8})
//     .setTween(timeScrollVision1)
//     .addIndicators()
//     .duration("50%")
//     .addTo(controller);
// }

if($(".trigMoveUp").length){
    var timeScrollVisionY = new TimelineMax();
    var timeScrollVisionYInit = TweenMax.staggerTo(".animationMoveUp" , 1, {"--y" : "0px"}, 0.1);
    
    timeScrollVisionY.add(timeScrollVisionYInit,0)
    var scene =  new ScrollMagic.Scene({ triggerElement: ".trigMoveUp", triggerHook: 0.5})
    .setTween(timeScrollVisionY)
    .setClassToggle($('.animationMoveUp')[0], 'showtext')
    // .addIndicators()
    .duration("100%")
    .addTo(controller);
}
if($(".triganimationActive").length){
    var scene =  new ScrollMagic.Scene({ triggerElement: ".triganimationActive", triggerHook: 0.5})
    .setClassToggle($('.legacy-img')[0], 'active')
    // .addIndicators()
    .duration("100%")
    .addTo(controller);
    var scene =  new ScrollMagic.Scene({ triggerElement: ".triganimationBoxShadow", triggerHook: 0.5})
    .setClassToggle($('#legacyGLB')[0], 'shadowActive')
    // .addIndicators() 
    .addTo(controller);
}

$(".moveanimation").each(function(){
    var _this = $(this);
    var values = JSON.parse('{'+_this.data('values').replace(/'/g, '"')+'}');
    console.log(values)
    var triggerID =  _this.data('trigger') // ex : ".classneme";
    var trigHook = _this.data('hook') // 0.5;
    var dataDuration = _this.data('duration'); // 50% , 500px etc

    if(_this.data('target')){
        var dataTarget =  _this.data('target');
        _this = $(dataTarget);
    }
   
    var timeScrollY = new TimelineMax();
    var timeScrollYInit = TweenMax.staggerTo(_this , 1, values, 0.1);
    
    timeScrollY.add(timeScrollYInit,0)
    
    var sceneAnimation =  new ScrollMagic.Scene({ triggerElement: triggerID, triggerHook: trigHook})
        .setTween(timeScrollY)
        // .setClassToggle(_this[0], dataClass)
        // .addIndicators()
        .duration(dataDuration)
        .addTo(controller);

});



// // Get a reference to the material you want to update
// const modelViewer = document.querySelector("#visionModel")
// var materialIndex = 4; // Assume the material you want to update is the first one in the materials array
// var material = modelViewer.materials[materialIndex];

// // Update the material's texture image
// var texture = new THREE.Texture();
// var newImage = new Image();
// newImage.onload = function() {
//   texture.image = newImage;
//   texture.needsUpdate = true;
// };
// newImage.src = 'path/to/new/image.jpg';
// material.map = texture;

// // Update the 3D model viewer to reflect the changes
// modelViewer.updateDisplay(); // Call a function or method to update the viewer's display


// setTimeout(function () { $('.section-global-1, .section-japan-1' ).addClass('animated'); }, 1000);




// U shap Animation
if($(".triggarUshap").length){
    $(".triggarUshap").each(function(index){
        var newIndex = index + 1
        var className = "active"+ newIndex;
        var newDuration = '100%';
        if(newIndex === $(".triggarUshap").length){
            newDuration = '150%';
        }
        var scene = new ScrollMagic.Scene({triggerElement: $(this)[0], duration: newDuration}) //duration: fnDuration(6)
        .setClassToggle(".section-shapelist", className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 400)"}) 
        .addTo(controller);  
    });

}
if($(".triggarScrollGroup").length){
    $(".triggarScroll").each(function(index){
        var newIndex = index + 1
        var className = "active"+ newIndex;
        var newDuration = '100%';
        if(newIndex === $(".triggarScroll").length){
            newDuration = '150%';
        }
        var scene = new ScrollMagic.Scene({triggerElement: $(this)[0], duration: newDuration}) //duration: fnDuration(6)
        .setClassToggle(".img-scroll-section", className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 400)"}) 
        .addTo(controller);  
    });

}
if($(".triggarSVG").length){
$(".triggarSVG").each(function(index){
    var newIndex = index + 1
    var className = "animated";
    var newDuration = '100%';
    var actionDiv = ".section-SVGanimation-"+ newIndex;
    if(newIndex === $(".triggarSVG").length){
        newDuration = '150%';
    }
    var scene = new ScrollMagic.Scene({triggerElement: $(this)[0], duration: newDuration}) //duration: fnDuration(6)
    .setClassToggle(actionDiv, className) // add class toggle
    // .addIndicators({name: newIndex + "(duration: 400)"}) 
    .addTo(controller);  
});
}


// if($(".section-rw-bus-train .triggarSVGRW").length){
// $(".section-rw-bus-train .triggarSVGRW").each(function(index){
//     var newIndex = index + 1
//     var className = "animated";
//     var newDuration = '200%';
//     var actionDiv = ".section-SVGanimation-"+ newIndex;
//     if(newIndex === $(".triggarSVGRW").length){
//         newDuration = '250%';
//     }
//     var scene = new ScrollMagic.Scene({triggerElement: $(this)[0], duration: newDuration}) //duration: fnDuration(6)
//     .setClassToggle(actionDiv, className) // add class toggle
//     // .addIndicators({name: newIndex + "(duration: 400)"}) 
//     .addTo(controller);  
// });
// }




// Group Bird Animation Start --------------------------------

$(document).ready(function ($) {
    var animations_a = {};
    if($('.birdpath').length){
        // close_animation('.birdpath');
    }
    function close_animation($path) {
      if (animations_a.anim_obj == undefined) {
        animations_a.anim_obj = {};
        animations_a.anim_obj.a_count = 0;
        animations_a.anim_obj.anim_array = [];
      }
    
      $($path).each(function () {
        var firedEl = $(this);
    
        var sub_tl = new TimelineMax({ onComplete: onComplete_f });
    
    
        sub_tl.to(firedEl, .3, { y: 12, attr: { d: "M0.35 1.95l2.11 0.36c0 0 1.31 1.71 4.67 3.52 1.1 0.59 2.43 1.2 4 1.75 1.49 0.53 3.2 1.02 5.16 1.42 1.48 0.3 3.11 0.55 4.89 0.73l4.23 1.06 0.71 1.77 0.71-2.82 -8.12-4.94 -1.31-0.67c0 0-0.65-0.26-3.09-1.54 0 0-0.49-0.3-4.78-2.03 0 0-8.47-1.41-9.53 0.35" }, ease: Power1.easeInOut }).
        to(firedEl, .3, { y: 11, attr: { d: "M0.35 1.95l2.11 0.36c0 0 4.57 2.6 4.67 3.52 0.14 1.33-2.43 13.28-0.86 13.84 1.49 0.53 8.07-11.07 10.02-10.67 1.48 0.3 3.11 0.55 4.89 0.73l4.23 1.06 0.71 1.77 0.71-2.82 -8.12-4.94 -1.31-0.67c0 0-0.65-0.26-3.09-1.54 0 0-0.49-0.3-4.78-2.03 0 0-8.47-1.41-9.53 0.35" }, ease: Power1.easeOut }).
        to(firedEl, .3, { y: 12, attr: { d: "M0.35 1.95l2.11 0.36c0 0 1.31 1.71 4.67 3.52 1.1 0.59 2.43 1.2 4 1.75 1.49 0.53 3.2 1.02 5.16 1.42 1.48 0.3 3.11 0.55 4.89 0.73l4.23 1.06 0.71 1.77 0.71-2.82 -8.12-4.94 -1.31-0.67c0 0-0.65-0.26-3.09-1.54 0 0-0.49-0.3-4.78-2.03 0 0-8.47-1.41-9.53 0.35" }, ease: Power1.easeInOut }).
        to(firedEl, .3, { y: 0, attr: { d: "M0.35 12l2.11 0.36c0 0 1.31 1.71 4.67 3.52 1.1 0.59 2.43 1.2 4 1.75 1.49 0.53 3.2 1.02 5.16 1.42 1.48 0.3 3.11 0.55 4.89 0.73l4.23 1.06 0.71 1.77 0.71-2.82 -8.12-4.94 -1.31-0.67c0 0 3.77-12.87 1.34-14.15 0 0-5.54 4.22-9.21 10.59 0 0-8.47-1.41-9.53 0.35" }, ease: Power1.easeInOut });
    
        sub_tl.timeScale(1.4);
    
        var sub_array = {
          'a_num': animations_a.anim_obj.a_count,
          'a_path': firedEl,
          'a_timline': sub_tl };
    
    
        animations_a.anim_obj.anim_array.push(sub_array);
    
        animations_a.anim_obj.anim_array[sub_array.a_num].a_path.on('click', function () {
          console.log('a_clock', sub_array.a_num);
          animations_a.anim_obj.anim_array[sub_array.a_num].a_timline.play();
        });
    
        animations_a.anim_obj.a_count++;
        sub_tl.progress(Math.random());
    
        function onComplete_f() {
          sub_tl.progress(0);
        //   sub_tl.play();
        }
    
      });
    
    }
});


  if($(".futureIndiantriganimation").length){
    var scenef =  new ScrollMagic.Scene({ triggerElement: ".futureIndiantriganimation", triggerHook: 0.5})
    .setClassToggle($('.futureIndian-mount')[0], 'animated')
    // .addIndicators()
    .duration("100%")
    .addTo(controller);
}


$(".triganimation10").each(function(){

    var trigHook = 0.5;

    var timeScrollY = new TimelineMax();
    var timeScrollYInit = TweenMax.staggerTo($(".count1") , 1, {"--yr" : "0px"}, 0.1);
    
    timeScrollY.add(timeScrollYInit,0)
    
    var scene =  new ScrollMagic.Scene({ triggerElement: '.triganimation10', triggerHook: trigHook})
        .setTween(timeScrollY)
        .duration("50%")
        .addTo(controller);
})

// Group Bird Animation End --------------------------------

// Image gallery SCROLL FLIP animation - 03-04-23

// $(document).ready(function() {
    
//         $('.gallery').isotope({
//           itemSelector: '.home-photos_target-item',
//           layoutMode : 'masonry',
//           //percentPosition: true,
//           masonry: {
//             columnWidth: '.home-photos_target-item',
//             //fitWidth: false,
//             gutter: 20
//             //fitWidth: true
//           }
//         });
    
// });


// isotop
function isotoplazyload() {
    $('.gallery').isotope({
      itemSelector: '.home-photos_target-item',
      layoutMode : 'masonry',
      masonry: {
            columnWidth: '.home-photos_target-item',
            gutter: 20
        }
    });
}
// Window Load with resize Event
$(window).on('load resize',function() {
    isotoplazyload();
});


// if($(".home-photos_component").length > 0){
// // SCROLL FLIP POWER-UP
//     window.addEventListener("DOMContentLoaded", (event) => {
//                 // attribute value checker
//         function attr(defaultVal, attrVal) {
//             const defaultValType = typeof defaultVal;
//             if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
//             if (attrVal === "true" && defaultValType === "boolean") return true;
//             if (attrVal === "false" && defaultValType === "boolean") return false;
//             if (isNaN(attrVal) && defaultValType === "string") return attrVal;
//             if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
//             return defaultVal;
//         }
//         gsap.registerPlugin(ScrollTrigger, Flip);
//         ScrollTrigger.normalizeScroll(false);
//                 // scrollflip component
//         $("[tr-scrollflip-element='component']").each(function (index) {
//             let componentEl = $(this),
//             originEl = componentEl.find("[tr-scrollflip-element='origin']"),
//             targetEl = componentEl.find("[tr-scrollflip-element='target']"),
//             scrubStartEl = componentEl.find("[tr-scrollflip-scrubstart]"),
//             scrubEndEl = componentEl.find("[tr-scrollflip-scrubend]");
//             let startSetting = attr("50% 50%", scrubStartEl.attr("tr-scrollflip-scrubstart")),
//             endSetting = attr("bottom bottom", scrubEndEl.attr("tr-scrollflip-scrubend")),
//             staggerSpeedSetting = attr(0, componentEl.attr("tr-scrollflip-staggerspeed")),
//             staggerDirectionSetting = attr("start", componentEl.attr("tr-scrollflip-staggerdirection")),
//             scaleSetting = attr(false, componentEl.attr("tr-scrollflip-scale")),
//             breakpointSetting = attr(0, componentEl.attr("tr-scrollflip-breakpoint"));
//             let componentIndex = index,
//             timeline,
//             resizeTimer;
//                     // asign matching data flip ids
//             originEl.each(function (index) {
//                 let flipId = `${componentIndex}-${index}`;
//                 $(this).attr("data-flip-id", flipId);
//                 targetEl.eq(index).attr("data-flip-id", flipId);
//             });
//                     // create timeline
//             function createTimeline() {
//                 if (timeline) {
//                     timeline.kill();
//                     gsap.set(targetEl, { clearProps: "all" });
//                 }
//                 $("body").addClass("scrollflip-relative");
//                 gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
//                     const state = Flip.getState(originEl);
//                     timeline = gsap.timeline({ scrollTrigger: { trigger: scrubStartEl, endTrigger: scrubEndEl, start: startSetting,  scrub: true, markers: false } });
//                     timeline.add(Flip.from(state, { targets: targetEl,  stagger: { amount: staggerSpeedSetting, from: staggerDirectionSetting } }));
//                 });
//                 $("body").removeClass("scrollflip-relative");
//             }
//             createTimeline();
//                     // update on window resize
//             window.addEventListener("resize", function () {
//                 clearTimeout(resizeTimer);
//                 resizeTimer = setTimeout(function () {
//                     createTimeline();
//                 }, 250);
//             });
//         });
//     });
// }



if($(".rw-tl-Animation").length){
    $(".rw-tl-Animation").each(function(index){
        var newIndex = index + 1
        var className = "show";
        var id = "#philosophy" + newIndex;
        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle($(this)[0], className) // add class toggle
        //.addIndicators({name: newIndex + "(duration: 50)"}) 
        // .duration(""40%"")
        .addTo(controller);   
    });
}
// if($(".rw-ht-hh").length){
//     $(".rw-ht-hh").each(function(index){
//         var newIndex = index + 1
//         var className = "show";
//         var id = "#philosophyTextblue" + newIndex;
//         var newDuration = '25%'
//         if(newIndex === $(".rw-ht-hh").length){
//             newDuration = '200%';
//         }
//         var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
//         .setClassToggle($(this)[0], className) // add class toggle
//         .addIndicators({name: newIndex + "(rw-ht-hh duration: 50)"}) 
//         .duration(newDuration)
//         .addTo(controller);   
//     });
// }



if($(".rw-animtionMoveUp").length){
    $(".rw-animtionMoveUp").each(function(index){
        // var rheight1 = $('.big-head-content [class*="big-title-"]').height();
        // var newIndex = index + 1
        // var className = "show";
        // var id = "#philosophyBig" + newIndex;
        // // var tween = TweenMax.fromTo($(this)[0], 1, {height:0, ease: Power2.easeInOut},{height:rheight1, ease: Power2.easeInOut});
        // var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        // // .setTween(tween)
        // .setClassToggle($(this)[0], className) // add class toggle
        // //.addIndicators({name: newIndex + "(duration: 50)"}) 
        // // .duration(""40%"")
        // .addTo(controller);   

        // var scenetitle = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        // .setClassToggle($('.big-head-content')[0], className) // add class toggle
        // .addTo(controller);   
    });
}
if($(".rw-animtionFlip").length){
    $(".rw-animtionFlip").each(function(index){
        var newIndex = index + 1
        var className = "active";
        var id = "#philosophyFlip" + newIndex;
        var newDuration = '20%'
        if(newIndex === $(".rw-animtionFlip").length){
            newDuration = '300%';
        }
        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle($(this)[0], className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 300)"}) 
        .duration(newDuration)
        .addTo(controller); 

        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle('.retaining-wall-sec', className) // add class toggle
        // .addIndicators({name: newIndex + "(duration: 300)"}) 
        .duration(newDuration)
        .addTo(controller);   
    });
}

if($(".rw-bg-ol-main").length){
    $(".rwFlip-trigger .philosophy-action").each(function(index){
        var newIndex = index + 1
        var className = "active" + newIndex;
        var id = "#philosophyFlip" + newIndex;
        var newDuration = '20%'
        if(newIndex === $(".rwFlip-trigger .philosophy-action").length){
            newDuration = '200%';
        }
        var scene = new ScrollMagic.Scene({triggerElement: id}) //duration: fnDuration(6)
        .setClassToggle('.rw-bg-ol-main', className) // add class toggle
        // .addIndicators({name: newIndex + "tween css class"}) 
        .duration(newDuration)
        .addTo(controller);   
    });
}

// if($(".rw-bg-ol-main").length){
//     var newDuration = '20%'
//     var scene = new ScrollMagic.Scene({triggerElement: "#philosophyFlip1"})
//                     .setClassToggle('.rw-bg-ol-main', 'active01')
//                     .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
//                     .duration(newDuration)
//                     .addTo(controller);
// var scene2 = new ScrollMagic.Scene({triggerElement: "#philosophyFlip2"})
//                     .setClassToggle('.rw-bg-ol-main', 'active02')
//                     .addIndicators({name: "tween css class2"}) // add indicators (requires plugin)
//                     .duration(newDuration)
//                     .addTo(controller);
// var scene3 = new ScrollMagic.Scene({triggerElement: "#philosophyFlip3", duration: '100%'})
//                     .setClassToggle('.rw-bg-ol-main', 'active03')
//                     .addIndicators({name: "tween css class3"}) // add indicators (requires plugin)
//                     .addTo(controller);                    

// }



// Background Video play Start - Jaimin - 13-4-23

jQuery(document).ready(function() {       
	jQuery('.video-box').each(function() {
		jQuery(this).on("mouseover", function() { 
			hoverVideo();
			jQuery(this).addClass('v-play'); 
		});
		jQuery(this).on("mouseout", function() { 
			hideVideo();
			jQuery(this).removeClass('v-play');  
		});
	});
});

function hoverVideo() {  
	jQuery('.bg-video')[0].play(); 
}

function hideVideo() {
	jQuery('.bg-video')[0].pause(); 
	jQuery('.bg-video')[0].currentTime = 0;
} 

// Background Video play End

// if($(".rw-feature-inner-sec").length){
//     $(".rw-feature-inner-sec").each(function(index){
//         var newIndex = index + 1
//         var id = "#rwscaletrigger" + newIndex;
//         var scaletween = TweenMax.from($(this)[0], 1, {scale:2, opacity:0, ease:Linear.easeNone});
//         var pinscalescene = new ScrollMagic.Scene({triggerElement: id, triggerHook: 1, duration: '50%'}) 
//         .setTween(scaletween)
//         //.addIndicators({name: "scaletween inner section" + newIndex }) 
//         .addTo(controller);   
//     });
// }
if($(".rwf-train").length){
    var timelineimgscrollzoomtrain = new TimelineMax();
    var tweenimgscrollzoomvaluetrain = TweenMax.staggerTo(".rwf-train", 0.5, { "--scaleView": "-90px"}, 0.1);
    timelineimgscrollzoomtrain.add(tweenimgscrollzoomvaluetrain, 0)
    var trainscene =  new ScrollMagic.Scene({ triggerElement: ".rw-scale-trigger-01" ,duration: '70%'})
    .setTween(timelineimgscrollzoomtrain)
    .addTo(controller);
}
if($(".rwf-bus").length){
    var timelineimgscrollzoombus = new TimelineMax();
    var tweenimgscrollzoomvaluebus = TweenMax.staggerTo(".rwf-bus", 0.5, { "--scaleView": "50px"}, 0.1);
    timelineimgscrollzoombus.add(tweenimgscrollzoomvaluebus, 0)
    var busscene =  new ScrollMagic.Scene({ triggerElement: ".rw-scale-trigger-01" ,duration: '70%'})
    .setTween(timelineimgscrollzoombus)
    .addTo(controller);
}

if($(".section-retaining").length){
    var sceneTshap1 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapActive"})
        .setClassToggle(".section-shapedrains", "showTshap") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap2 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle1"})
        .setClassToggle(".rwall-images-1", "bigTitleActive1") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap3 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle2"})
        .setClassToggle(".rwall-images-1", "bigTitleActive2") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap4 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle3"})
        .setClassToggle(".rwall-images-1", "bigTitleActive3") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap5 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle4"  ,duration: '40%'})
        .setClassToggle(".rwall-images-1", "bigTitleActive4") // add class toggle
        // .duration("10%")
        // .addIndicators()
        .addTo(controller);
        
    var sceneTshap6 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle6"  ,duration: '70%'})
        .setClassToggle(".rwall-images-1", "bigTitleActive5") // add class toggle
        // .duration("10%")
        // .addIndicators()
        .addTo(controller);
    var sceneTshap7 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle7"  ,duration: '100%'})
        .setClassToggle(".rwall-images-1", "bigTitleActive6") // add class toggle
        // .duration("10%")
        // .addIndicators()
        .addTo(controller);
        
    var sceneTshap8 =  new ScrollMagic.Scene({ triggerElement: ".rwtshapTitle5"})
        .setClassToggle(".rwall-images-1", "titlesmall") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap9 =  new ScrollMagic.Scene({ triggerElement: "#TextTile1"})
        .setClassToggle("#bigheadcontent", "showsubtitle") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneTshap10 =  new ScrollMagic.Scene({ triggerElement: "#TextTile2", triggerHook: 0.2})
        .setClassToggle("#bigheadcontent", "showsubtitle1") // add class toggle
        // .addIndicators()
        .addTo(controller); 

    var sceneTshap11 =  new ScrollMagic.Scene({ triggerElement: "#TextTile3", triggerHook: 0.2})
        .setClassToggle("#bigheadcontent", "showsubtitle2") // add class toggle
        // .addIndicators()
        .addTo(controller);     

    var sceneRW1 =  new ScrollMagic.Scene({ triggerElement: "#triggarSVGRW1", triggerHook: 0.5})
        .setClassToggle(".section-SVGanimation-1", "active") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneRWT1 =  new ScrollMagic.Scene({ triggerElement: "#triggarSVGRW2", triggerHook: 0.5})
        .setClassToggle(".section-SVGanimation-2", "active") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneRW2 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-0", triggerHook: 0.5})
        .setClassToggle('.section-rw-bus-train', 'showbus')
        //  .addIndicators()
        .addTo(controller);
    var sceneRW2 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-51", triggerHook: 0.5})
        .setClassToggle('.section-rw-bus-train', 'showtrain')
        //  .addIndicators()
        .addTo(controller);
    var sceneRW2 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-1", triggerHook: 0.5, duration: '200%'})
        .setClassToggle('.section-rw-bus-train', 'show1')
        //  .addIndicators()
        .addTo(controller);

    var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-2", triggerHook: 0.5, duration: '200%'})
        .setClassToggle('.section-rw-bus-train', 'show2')
        //  .addIndicators()
        .addTo(controller);  

    var sceneRW6 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-3", triggerHook: 0.5, duration: '200%'})
    .setClassToggle('.section-rw-bus-train', 'show5')
    //  .addIndicators()
    .addTo(controller); 
    // var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-2", triggerHook: 0.5, duration: '45vh'})
    //     .setClassToggle('.rw-title-02', 'show')
    //     .addTo(controller);  

    // var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-2", triggerHook: 0.5})
    //     .setClassToggle('.rw-fill-01', 'show')
    //     .addTo(controller);  

    // var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-3", triggerHook: 0.5})
    //     .setClassToggle('.rw-act-4', 'show')
    //     .addTo(controller);            

    // var sceneRW4 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-4", triggerHook: 0.5})
    //     .setClassToggle('.rw-title-03', 'show')
    //     .addTo(controller);

    // var sceneRW5 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-5", triggerHook: 0.5})
    //     .setClassToggle('.rw-title-04', 'show')
    //     .addTo(controller);
    var sceneRW4 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-4", triggerHook: 0.5, duration: '200%'})
        .setClassToggle('.section-rw-bus-train', 'show3')
        // .addIndicators()
        .addTo(controller);

    var sceneRW5 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-5", triggerHook: 0.5, duration: '200%'})
        .setClassToggle('.section-rw-bus-train', 'show4')
        // .addIndicators()
        .addTo(controller);
    var sceneRW6 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-6", triggerHook: 0.5, duration: '200%'})
        .setClassToggle('.section-rw-bus-train', 'show6')
        // .addIndicators()
        .addTo(controller);


    // var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-6", triggerHook: 0.5})
    //     .setClassToggle('.rw-act-5', 'show')
    //     .addTo(controller);  

    // var sceneRW3 =  new ScrollMagic.Scene({ triggerElement: ".triggarWater-7", triggerHook: 0.5})
    //     .setClassToggle('.rw-act-6', 'show')
    //     .addTo(controller);        



}
// Home page Fix action on scroll
if($(".triHookAction-home-1").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-home-1", triggerHook: 0})
    .setClassToggle('.triHookAction-home-1', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-home-1", triggerHook: 1})
    .setClassToggle('.triHookAction-home-1', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".triHookAction-prod-1").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-prod-1", triggerHook: 0})
    .setClassToggle('.triHookAction-prod-1', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-prod-1", triggerHook: 1})
    .setClassToggle('.triHookAction-prod-1', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".triHookAction-prod-2").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-prod-2", triggerHook: 0})
    .setClassToggle('.triHookAction-prod-2', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-prod-2", triggerHook: 1})
    .setClassToggle('.triHookAction-prod-2', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".triHookAction-prod-3").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-prod-3", triggerHook: 0})
    .setClassToggle('.triHookAction-prod-3', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-prod-3", triggerHook: 1})
    .setClassToggle('.triHookAction-prod-3', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".triHookAction-prod-4").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-prod-4", triggerHook: 0})
    .setClassToggle('.triHookAction-prod-4', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-prod-4", triggerHook: 1})
    .setClassToggle('.triHookAction-prod-4', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
// End Home page Fix action on scroll
// Start About page Fix action on scroll
if($(".triHookAction-about-1").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".triHookStart-about-1", triggerHook: 0})
    .setClassToggle('.triHookAction-about-1', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".triHookEnd-about-1", triggerHook: 1})
    .setClassToggle('.triHookAction-about-1', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}

// End About page Fix action on scroll

if($(".fix-trigger-action").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-start", triggerHook: 0})
    .setClassToggle('.fix-trigger-action', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-end", triggerHook: 1})
    .setClassToggle('.fix-trigger-action', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".fix-trigger-action-1").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-start-1", triggerHook: 0})
    .setClassToggle('.fix-trigger-action-1', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-end-1", triggerHook: 1})
    .setClassToggle('.fix-trigger-action-1', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".fix-trigger-action-2").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-start-2", triggerHook: 0})
    .setClassToggle('.fix-trigger-action-2', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-end-2", triggerHook: 1})
    .setClassToggle('.fix-trigger-action-2', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
if($(".fix-trigger-action-3").length){
    var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-start-3", triggerHook: 0})
    .setClassToggle('.fix-trigger-action-3', 'fix-active')
    // .addIndicators()
    .addTo(controller);
    var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-fix-end-3", triggerHook: 1})
    .setClassToggle('.fix-trigger-action-3', 'fix-active-a')
    // .addIndicators()
    .addTo(controller);
}
// if($(".fix-trigger-1").length){
//     var fixTrigger =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-1", triggerHook: 0})
//     .setClassToggle('.fix-trigger-action-1', 'fix-active')
//     .addIndicators()
//     .addTo(controller);
//     var fixTriggera =  new ScrollMagic.Scene({ triggerElement: ".trigger-hook-end-1", triggerHook: 1})
//     .setClassToggle('.fix-trigger-action-1', 'fix-active-a')
//     .addIndicators()
//     .addTo(controller);
// }


if($(".section-ourvalues").length){
    var sceneourValues1 =  new ScrollMagic.Scene({ triggerElement: "#ourValues1", triggerHook: 0.7})
        .setClassToggle(".value-box", "ourvalueact1") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneourValues2 =  new ScrollMagic.Scene({ triggerElement: "#ourValues2", triggerHook: 0.7})
        .setClassToggle(".value-box", "ourvalueact2") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneourValues3 =  new ScrollMagic.Scene({ triggerElement: "#ourValues3", triggerHook: 0.7})
        .setClassToggle(".value-box", "ourvalueact3") // add class toggle
        // .addIndicators()
        .addTo(controller);

    var sceneourValues4 =  new ScrollMagic.Scene({ triggerElement: "#ourValues4", triggerHook: 0.7})
        .setClassToggle(".value-box", "ourvalueact4") // add class toggle
        // .addIndicators()
        .addTo(controller);            
}



if($(".section-rw-featured").length > 0){ 
    AOS.init({
      disable: function () {
        var maxWidth = 767;
        return window.innerWidth < maxWidth;
      }
    });
}


// --------- content replace js----------------------

if($(".pro-list-box").length){ 

    $('.pro-list-item').each(function(i) {

    //var imgsrc = $(this).find('.pro-list-li').data('percent');

        $('.pro-list-li img').hover(function(i) {
          var imgSrc = $(this).attr('src');
          var dataTitle = $(this).attr('data-title');
          var repimgSrc = $('.pro-sol-li').find("img");
          var repTitle = $('.pro-sol-li').find(".pro-list-title");
          $(this).closest('.pro-list-item').toggleClass('active');
          $(this).closest('.pro-item-box').find(repimgSrc).attr('src', imgSrc);
          $(this).closest('.pro-item-box').find(repTitle).text(dataTitle);
          });
    });
}



var $=jQuery;
(function ($) {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

if($(".home-photos_component").length){
    
    var scenegallery =  new ScrollMagic.Scene({ triggerElement: ".galry-btn > .triggarZoom", triggerHook: 0.4})
        .setClassToggle(".home-photos_target-wrap", "active") // add class toggle
        //.addIndicators()
        .addTo(controller);            

}




// Detect Browser Script

var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
var is_chrome = !!window.chrome && !is_opera && !is_Edge;
var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
var is_firefox = typeof window.InstallTrigger !== 'undefined';
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

var os 
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
	// console.log("mac");
	var os = "Mac"
    detectBrowser(os)
}else {
    os = "Windows"
    detectBrowser(os);
}

if(os === "Mac"){
  $('body').addClass('mac_os')
}

function detectBrowser(os) {
   if(is_chrome){
		 if(os === "Mac"){
       $('body').addClass('mac_chrome')
     }
	}
   if(is_firefox){
		 if(os === "Mac"){
       $('body').addClass('mac_firefox')
     }
	}
   if(is_safari){
		 if(os === "Mac"){
       $('body').addClass("mac_safari")
     }
	}
  if(is_opera){
		if(os === "Mac"){
       $('body').addClass("mac_opera")
     }
	}
  if(is_Edge){
		if(os === "Mac"){
       $('body').addClass('mac_edge')
     }
	}
  if(is_explorer){
    if(os === "Mac"){
       $('body').addClass('mac_explorer')
     }
	} 
}


// Get the button
var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Smooth scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}