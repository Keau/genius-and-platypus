$(document).on('scroll', function(){
    if ($('#main-nav')[0].offsetTop < $(document).scrollTop()){
        $("#main-nav").css({position: "fixed", top:0, left:0, width: "100%"});
    }
    if ($(document).scrollTop() < $("#main-nav-position-saver")[0].offsetTop){
        $("#main-nav").css({position: "static", top: 0});
    }
});