$(document).ready(function () {
   var top_menu = $('.top-header__menu');
   var header_active = $('.header__active');

   top_menu.click(function () {
       top_menu.toggleClass('top-header__menu-active');
       header_active.toggleClass('header__active-show');
   });
});