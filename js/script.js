$(document).ready(function(){
    var swiper = new Swiper(".bannerSwiper", {
        loop: "true",
        speed: 1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 햄버거
    $('.hamburger').click(function(){
        $('.hamburger-menu').addClass('active');
    });
    $('.hamburger-menu .x-btn').click(function(){
        $('.hamburger-menu').removeClass('active');
    });

    $('.h-menu-head').click(function(){
        $(this).siblings('.h-sub-menu').slideDown();
        $(this).parents().siblings().children('.h-sub-menu').slideUp();
    });

    // // 스크롤
    var ww = $(window).width();
    if(ww > 1124){
        $(window).scroll(function(){
            const sct = $(window).scrollTop();
            var wh = $(window).height();
            console.log(sct);
            var con1 = $('.wrap').height();
            var ww = $(window).width();
            var cw = $('.sec-3 .container').width();
            console.log(sct);
            const sec3 = $('.sec-3').offset().top;
            const sec3h = $('.sec-3').height();
            const sec4 = $('.sec-4').offset().top;
            const sec4h = $('.sec-4').height();
            const bh = $('.sec-3 .right').height();

            if(sct >= sec3 && sct < sec4 - bh){
                $('.sec-3 .right').css({
                    position: 'fixed',
                    top: 0,
                    right: parseInt((ww - cw) / 2),
                })
            }else if(sct < sec3){
                $('.sec-3 .right').css({
                    position: 'static',
                })
            }else if(sct >= sec4 - bh){
                $('.sec-3 .right').css({
                    position: 'absolute',
                    top: 'auto',
                    right: 0,
                    bottom: 36,
                })
            }
            });
    }else{
        
    }

    // footer sub-menu-box
    $('.f-menu-head').click(function(){
        // $(this).siblings('.f-sub-menu').toggleClass('active');
        $(this).siblings('.f-sub-menu').slideToggle();
    });
    
    // sec-3 right 박스, footer info 박스 이동
    layout();
    function layout(){
        var ww = $(window).width();

        // if(ww > 1124){
        //     $(window).scroll(function(){
        //         const sct = $(window).scrollTop();
        //         var wh = $(window).height();
        //         console.log(sct);
        //         var con1 = $('.wrap').height();
        //         var ww = $(window).width();
        //         var cw = $('.sec-3 .container').width();
        //         console.log(sct);
        //         const sec3 = $('.sec-3').offset().top;
        //         const sec3h = $('.sec-3').height();
        //         const sec4 = $('.sec-4').offset().top;
        //         const sec4h = $('.sec-4').height();
        //         const bh = $('.sec-3 .right').height();
    
        //         if(sct >= sec3 && sct < sec4 - bh){
        //             $('.sec-3 .right').css({
        //                 position: 'fixed',
        //                 top: 0,
        //                 right: parseInt((ww - cw) / 2),
        //             })
        //         }else if(sct < sec3){
        //             $('.sec-3 .right').css({
        //                 position: 'static',
        //             })
        //         }else if(sct >= sec4 - bh){
        //             $('.sec-3 .right').css({
        //                 position: 'absolute',
        //                 top: 'auto',
        //                 right: 0,
        //                 bottom: 36,
        //             })
        //         }
        //         });
        // }else{
        //     $(window).scroll(function(){
        //         if(sct >= sec3 && sct < sec4){
        //             $('.sec-3 .right').css({
        //                 positio: 'static'
        //             })
        //         }else{

        //         }
        //     });
        // }

        if(ww <= 1124){
            $('.sec-3 .right').insertBefore('.sec-3 .left');
        }else{
            $('.sec-3 .right').insertAfter('.sec-3 .left');
        }
    }

    $(window).resize(function(){
        ww = $(window).width();
        layout();
    });
    
}); //end
