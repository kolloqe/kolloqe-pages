$(document).ready(function () {
  // handling navigation
  $(".nav-item").click(function (){
    $(this).addClass("nav-link-active").siblings().removeClass("nav-link-active");
  });
});