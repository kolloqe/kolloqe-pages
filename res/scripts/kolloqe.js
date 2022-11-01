$(document).ready(function () {
  // consent notice
  if (window.visualViewport.height / 2 > $(document).scrollTop()) {
    Toastify({
      text: "Hi there👋🏽, Click here to view the copyright notice",
      duration: 5000,
      destination: "#copyright",
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #FF9800, #FBC02D)", // "linear-gradient(to right, #2196F3, #7E57C2)",
      offset: {
        y: 75,
        x: 0,
      },
    }).showToast();
  }

  // autoset active nav on scroll
  const sections = document.querySelectorAll(".mainsection");
  const navLi = document.querySelectorAll("nav .navbar-collapse ul li");

  window.addEventListener("scroll", () => {
    let current = "kolloqe";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const distanceToTop = $(window).scrollTop();
      if (91 >= sectionTop - distanceToTop) {
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

  // handling toast requests
  $(".toastTrigger").click(function () {
    let type = String($(this).data("toast-type"));
    let toastColor = "linear-gradient(to right, #4CAF50, #8BC34A)";

    if (type == "success") {
      toastColor = "linear-gradient(to right, #4CAF50, #8BC34A)";
    } else if (type == "error") {
      toastColor = "linear-gradient(to right, #F44336, #EC407A)";
    } else if (type == "warning") {
      toastColor = "linear-gradient(to right, #FF9800, #FBC02D)";
    } else if (type == "info") {
      toastColor = "linear-gradient(to right, #2196F3, #7E57C2)";
    }

    Toastify({
      text: String($(this).data("toast-message")),
      duration: Number($(this).data("toast-duration")) || 3000,
      destination: String($(this).data("toast-url")),
      newWindow:
        String($(this).data("toast-new-window")) == "true" ? true : false,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: toastColor,
      offset: {
        y: 75,
        x: 0,
      },
    }).showToast();
  });
});
