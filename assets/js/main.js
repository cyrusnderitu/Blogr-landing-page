const dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach(item=>{
    const menu = item.querySelector('.dropdown-menu')
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        menu.classList.toggle('open')
    })
})