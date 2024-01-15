$(document).ready(function(){
    function random(owlSelector){
        owlSelector.children().sort(function(){
            return Math.round(Math.random());
        }).each(function(){
          $(this).appendTo(owlSelector);
        });
      }

    $("#testimonial-slider").owlCarousel({
    items:3,
        center: true,
    itemsDesktop:[1000,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[767,1],
    pagination:false,
    transitionStyle:"fade",
        mouseDrag: false,
    navigation:true,
    centerMode: true,
    navigationText:["",""],
        beforeInit : function(elem){
        //Parameter elem pointing to $("#owl-demo")
        random(elem);
      },
        info: true,
    autoPlay:false
    });
});

