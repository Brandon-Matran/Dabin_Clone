/* Burger icon */


document.addEventListener('DOMContentLoaded', () => {

    var iconMenu = document.getElementById('icon-menu')

    console.log(iconMenu)
    var hiddenMenu = document.getElementById('hidden-menu')

    console.log(hiddenMenu)



    iconMenu.addEventListener('click', () => {
      console.log("FIRED")
      hiddenMenu.classList.toggle('active')
      //hiddenMenu.style.display = (hiddenMenu.style.display ==='block') ? 'none' : 'block';

  })});


  /* Close hidden menu */

  document.addEventListener('DOMContentLoaded', () => {
    var menuClose = document.getElementById('hidden-menu-close');
    var hiddenMenu = document.getElementById('hidden-menu')

    console.log(menuClose)
    menuClose.addEventListener('click', () => {
    //  hiddenMenu.style.display = 'none';
      hiddenMenu.classList.remove('active')

    })
  });
