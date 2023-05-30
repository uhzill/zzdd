$(document).ready( function() {


    // 리사이즈 새로고침
    $(window).resize(function(){
        document.location.reload();
    });


    
    // Hamburger button
    var toggle = true;

    $(".hamburger_btn").on("click", function() {
        if(innerWidth > 750){

            $("nav").css('left', '');

            if(toggle){
                toggle = false;
                $("nav").css('right', '0');

            } else {
                toggle = true;
                $("nav").css('right', '-50vw');
            }

            $(this).toggleClass("active");
        }
        else if (innerWidth <= 750) {

            $("nav").css('right', '-100vw');

            if(toggle){
                toggle = false;
                $("nav").css('left', '0');

            } else {
                toggle = true;
                $("nav").css('left', '100vw');
            }

            $(this).toggleClass("active");
        }
    });



    // Contact hortcut button




    // 가로스크롤


});