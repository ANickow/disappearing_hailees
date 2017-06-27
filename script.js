$(document).ready(function(){

    $("img").click(function(){
        $(this).css('opacity', '0.0');
    });

    $("button").click(function(){
        $("img").css('opacity', '1.0');
    });
});