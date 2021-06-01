function slider() {
  var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
}
slider();



var container = document.querySelector('.container');
var burgerMenu = document.querySelector('.burgerMenu');
container.onclick = function() {
  burgerMenu.classList.toggle('active');
  container.classList.toggle('change');
}


var btnImg = document.querySelector('.btnImg');
var audio = document.querySelector(".audio");
btnImg.onclick = function() {
    if (audio.paused == true) {
        audio.play();
    } else {
        audio.pause();
    }
}

var navigationLi = document.querySelectorAll('.navigation > ul > li');
for (var navigat of navigationLi) {
  navigat.addEventListener('mouseover', function() {
    mouseoveR();
  })
}


var box = document.querySelector('.box');
var opacityBox = document.querySelector('.opacityBox');
var close = document.querySelector('.close');
setTimeout(function() {
    box.classList.add('active');
    opacityBox.classList.add('active');
}, 3000)
close.onclick = function() {
    box.classList.remove('active');
    opacityBox.classList.remove('active');
}

function mouseoveR() {
  var audio2 = new Audio;
	audio2.src = 'MP3.mp3';
	audio2.play();
  muted = 'muted';
}






function svgAnimater() {
    var nameSvg = ['webDis', 'arrow', 'nameD', 'nameI', 'nameM', 'nameA'];
    for (var i = 0; i < nameSvg.length; i++) {
      function test() {
        var svgID = nameSvg[i];
  
        return new Vivus(
          svgID, {
            type: 'sync',
            duration: 200,
          }
        );

      }
      test();
      function test2() {
        var svgID = nameSvg[1];
  
        return new Vivus(
          svgID, {
            type: 'sync',
            duration: 100,
          }
        );

      }
      test2();
    }
  }
  svgAnimater();