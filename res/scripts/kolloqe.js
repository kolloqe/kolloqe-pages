$(document).ready(function () {
  // autoset active nav on scroll
  const sections = document.querySelectorAll(".mainsection");
  const navLi = document.querySelectorAll("nav .navbar-collapse ul li");
  
  window.addEventListener("scroll", () => {
    let current = "kolloqe";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("nav-link-active");
      if (li.classList.contains(current)) {
        li.classList.add("nav-link-active");
      }
    });
  });

  // handling navigation
  $(".nav-item").click(function () {
    $(this)
      .addClass("nav-link-active")
      .siblings()
      .removeClass("nav-link-active");
  });
});
