'use strict';


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

function loder() {
  const loder = document.querySelector('.loder');
  setTimeout(function() {
    loder.style.display = 'none'
  }, 1000)
  loder.classList.add('active');
}

setTimeout(loder, 3500);



const container = document.querySelector('.container'),
      burgerMenu = document.querySelector('.burgerMenu');
container.onclick = function() {
  burgerMenu.classList.toggle('active');
  container.classList.toggle('change');
}


const btnImg = document.querySelector('.btnImg'),
      audio = document.querySelector(".audio");
btnImg.onclick = function() {
    if (audio.paused == true) {
        audio.play();
    } else {
        audio.pause();
    }
}

const navigationLi = document.querySelectorAll('.navigation > ul > li');
for (var navigat of navigationLi) {
  navigat.addEventListener('mouseover', function() {
    mouseoveR();
  })
}


const box = document.querySelector('.box'),
      opacityBox = document.querySelector('.opacityBox'),
      close = document.querySelector('.close');
setTimeout(function() {
    box.classList.add('active');
    opacityBox.classList.add('active');
}, 4000)
close.onclick = function() {
    box.classList.remove('active');
    opacityBox.classList.remove('active');
}

function mouseoveR() {
  let audio2 = new Audio;
	audio2.src = 'MP3.mp3';
	audio2.play();
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