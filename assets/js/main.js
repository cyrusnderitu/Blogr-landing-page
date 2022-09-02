const dropdown = document.querySelectorAll('.dropdown')
const menuOpen = document.querySelector('.menu_icon')
const menuClose = document.querySelector('.close_icon')
const menu = document.querySelector('.nav_menu')

dropdown.forEach(item=>{
    const menu = item.querySelector('.dropdown-menu')
    const arrow = item.querySelector('.arrow_dark-icon')
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        menu.classList.toggle('open')
        arrow.classList.toggle('invert')
    })
})

menuOpen.addEventListener("click", ()=>{
    menu.classList.add('show')
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
})
menuClose.addEventListener("click", ()=>{
    menu.classList.remove('show')
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
})