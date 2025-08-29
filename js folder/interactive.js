const navBarToggle = document.querySelector('.navbar-toggle')
const navBarMenu = document.querySelector('.navbar-menu')
navBarToggle.addEventListener('click',function(){
    navBarToggle.classList.toggle('active')
    navBarMenu.classList.toggle('active')
})