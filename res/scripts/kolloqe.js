$(document).ready(function () {
  // handling navigation
  $(".nav-link-li").click(function (){
    $(this).addClass("nav-link-active").siblings().removeClass("nav-link-active");
  });
});