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


/* SHOPIFY SECTION */
document.addEventListener("DOMContentLoaded", function() {
if (window.innerWidth <= 915) {
  let parentContainer = document.getElementById('featured-content-container')
  let featuredText = document.getElementById('show-content-text')
  let musicContainer = document.getElementById('featured-content-image')

  parentContainer.insertBefore(musicContainer, featuredText);

  let parentContainer2 = document.getElementById('stage-container')
  let merchText = document.getElementById('merch-content-text')
  let stageContainer = document.getElementById('stage-image-container')

  parentContainer2.insertBefore(stageContainer, merchText);

  let parentContainer3 = document.getElementById('footer-sub-container')
  let footerSubText = document.getElementById('footer-sub-paragraph')
  let paymentIcons = document.getElementById('payment-icons')

  parentContainer3.insertBefore(paymentIcons, footerSubText);
}});



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

  if (window.innerWidth >= 915) {
  if (counter >= carouselImages.length) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter+=3;
  counter = Math.min(counter, carouselImages.length - 1);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  else {
    if (counter >= carouselImages.length) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})

prevBtn.addEventListener( 'click', ()=> {

  if (counter <= 0) return;
  if (window.innerWidth >= 915) {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter-=3;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
} else {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

})

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  } else if (carouselImages[counter].id === 'firstClone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

})


/* Burger icon */


document.addEventListener('DOMContentLoaded', () => {

  var iconMenu = document.getElementById('icon-menu')

  console.log(iconMenu)
  var hiddenMenu = document.getElementById('hidden-menu')

  console.log(hiddenMenu)



  iconMenu.addEventListener('click', () => {
    console.log("FIRED")
    hiddenMenu.style.display = (hiddenMenu.style.display ==='block') ? 'none' : 'block';

})});


/* Close hidden menu */

document.addEventListener('DOMContentLoaded', () => {
  var menuClose = document.getElementById('hidden-menu-close');
  var hiddenMenu = document.getElementById('hidden-menu')

  console.log(menuClose)
  menuClose.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
  })
});
