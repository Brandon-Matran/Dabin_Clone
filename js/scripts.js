let isMouseInsideContainer = false;

function toggleAriaExpanded(value, link) {
  const helpLink = link;
  const helpListContainer = helpLink.nextElementSibling;

  helpLink.setAttribute('aria-expanded', value);

  if (value) {
    helpListContainer.style.display = 'block';
    helpListContainer.style.opacity = 1;
  } else {
    if (!isMouseInsideContainer) {
      hideContainer();
    }
  }
}

function onContainerMouseEnter() {
    console.log("onContainerMouseEnter", isMouseInsideContainer)
  isMouseInsideContainer = true;
}

function onContainerMouseLeave() {
  isMouseInsideContainer = false;
  hideContainer();

}

function hideContainer() {
  const helpLink = document.querySelector('.help-link');
  const helpListContainer = helpLink.nextElementSibling;
  helpListContainer.style.display = 'none';
  helpListContainer.style.opacity = 0;
}
