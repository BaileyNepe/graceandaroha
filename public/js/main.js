$(function () {
  $(document).scroll(function () {
    var e = $('.navbar-fixed-top');
    e.toggleClass('scrolled', $(this).scrollTop() > e.height());
  });
});
const hamburger = document.querySelector('.hamburger'),
  navMenu = document.querySelector('.nav--menu'),
  navLink = document.querySelectorAll('.nav--link');
function mobileMenu() {
  hamburger.classList.toggle('active'), navMenu.classList.toggle('active'), hamburger.classList.toggle('fixed');
}
function closeMenu() {
  hamburger.classList.remove('active'), navMenu.classList.remove('active'), hamburger.classList.remove('fixed');
}
hamburger.addEventListener('click', mobileMenu),
  navLink.forEach((e) => e.addEventListener('click', closeMenu)),
  $(document).ready(function () {
    window.innerWidth < 600 && $('#header-nav').removeClass('fixed-top');
  }),
  $(function () {
    $(window).bind('resize', function () {
      console.log($(this).width()), $(this).width() < 600 ? $('#header-nav').removeClass('fixed-top').addClass('test') : $('#header-nav').removeClass('test').addClass('fixed-top');
    });
  });
