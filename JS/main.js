function plagin() {
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
      })
}
plagin();


var toggle = document.querySelector('.toggle');
var burMenu = document.querySelector('.burMenu');
var btnLeftBar = document.querySelector('.btnLeftBar');
var leftBar = document.querySelector('.leftBar');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    burMenu.classList.toggle('active');
}
btnLeftBar.onclick = function() {
    leftBar.classList.toggle('active');
}