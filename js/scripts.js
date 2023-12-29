/*LOGOS AND PICTURES */



window.addEventListener('resize', function () {
  const topNav = document.querySelector(".topnav-logo")
  if (this.window.innerWidth <= 915) {
    topNav.style.width = "125%";
  }

})


/* SLIDESHOW */
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
  if (counter >= carouselImages.length) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter+=3;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener( 'click', ()=> {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter-=3;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=> {
  if (carouselImages[counter].id ==='lastClone') {
    console.log(carouselImages[counter].id)
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length
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
