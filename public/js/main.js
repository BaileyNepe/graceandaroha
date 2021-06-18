$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav--menu");
const navLink = document.querySelectorAll(".nav--link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("fixed");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hamburger.classList.remove("fixed");
}

$(document).ready(function () {
  if (window.innerWidth < 600) {
    $("#header-nav").removeClass("fixed-top");
  }
});

$(function () {
  $(window).bind("resize", function () {
    console.log($(this).width());
    if ($(this).width() < 600) {
      $("#header-nav").removeClass("fixed-top").addClass("test");
    } else {
      $("#header-nav").removeClass("test").addClass("fixed-top");
    }
  });
});
