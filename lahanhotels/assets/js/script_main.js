//slick.js

//$(function(){
//    $('.visual .slide').slick({
//        arrows: false,  //화살표
//        dots: false, //인디케이스 해제
//        fade: true,//페이드효과
//        autoplay: true,//자동재생
//        autoplaySpeed:4000,// 재생시간
//        pauseOnHover: false,//마우스 호버시 정지
//        pauseOnFocus: false //포커스시 정지
//    });
//});

//a링크
$(document).on('click', 'a[href="#"]',function(e){
    e.preventDefault();
});
//탭메뉴
$(function(){
    $('.intro .room .tabBox li a').on('click', function(){
        var num = $('.intro .room .tabBox li a').index($(this));
        $('.intro .room .tab').removeClass('on');
        $('.intro .room .tab:eq('+ num +')').addClass('on');
    });
});

//scroll ani
$(function(){
    $('.ani').scrolla({
        mobile: true,
        once: false //스크롤에 따라 활성화-false
    })
});