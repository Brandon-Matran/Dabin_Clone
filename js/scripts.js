let isMouseInsideContainer = false;

function toggleAriaExpanded(value, link) {
  const helpLink = link;
  const helpListContainer = helpLink.nextElementSibling;

  helpLink.setAttribute("aria-expanded", value);

  if (value) {
    helpListContainer.style.display = "block";
    helpListContainer.style.opacity = 1;
  } else {
    if (!isMouseInsideContainer) {
      hideContainer();
    }
  }
}

function onContainerMouseEnter() {
  console.log("onContainerMouseEnter", isMouseInsideContainer);
  isMouseInsideContainer = true;
}

function onContainerMouseLeave() {
  isMouseInsideContainer = false;
  hideContainer();
}

function hideContainer() {
  const helpLink = document.querySelector(".help-link");
  const helpListContainer = helpLink.nextElementSibling;
  helpListContainer.style.display = "none";
  helpListContainer.style.opacity = 0;
}

// document.addEventListener("DOMContentLoaded", function () {
//   let slideIndex = 1;
//   let slides = document.getElementsByClassName("mySlides");
//   console.log(slides[1].clientWidth);

//   let counter = 1;
//   const size = slides[0].clientWidth;

//   function plusSlides(n) {
//     showSlides((slideIndex += n));
//   }

//   function showSlides(n) {
//     let i;

//     if (n > slides.length) {
//       slideIndex = 1;
//       counter++;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//       counter--;
//     }
//     if (counter % 2 === 0) {
//       updateImageSources(
//         "./resources/products/img1.png",
//         "./resources/products/img2.png",
//         "./resources/products/img3.png"
//       );
//     } else {
//       updateImageSources(
//         "./resources/products/img4.png",
//         "./resources/products/img5.png",
//         "./resources/products/img6.png"
//       );
//     }
//         // Apply transition and transform for the sliding effect
//         for (let i = 0; i < slides.length; i++) {
//           slides[i].style.transition = "transform 0.4s ease-in-out";

//         }
//   }

//   function updateImageSources(source1, source2, source3) {
//     document.getElementById("image1").src = source1;
//     document.getElementById("image2").src = source2;
//     document.getElementById("image3").src = source3;
//   }

//   showSlides(slideIndex);
//   window.plusSlides = plusSlides;
// });

document.addEventListener("DOMContentLoaded", function() {
const carouselSlide = document.querySelector('.slideshow-slide');
const carouselImages = document.querySelectorAll('.slideshow-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth
console.log(size)

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener( 'click', ()=> {
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener( 'click', ()=> {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=> {
  if (carouselImages[counter].id ==='lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

carouselSlide.addEventListener('transitionend', ()=> {
  if (carouselImages[counter].id ==='firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})
})
