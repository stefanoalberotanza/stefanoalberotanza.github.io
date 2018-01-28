console.log("hello");
$(document).ready(function() {
    $(".about__span--italian").hover(function(){
        $(".about__image").animate({opacity: 1},"slow").css("background-image","url(/img/me_sito_medium.png)");
    });
    $(".about__span--swim").hover(function(){
        $(".about__image").animate({opacity: 1},"slow").css("background-image","url(/img/ticTacToe.PNG");
    });
});