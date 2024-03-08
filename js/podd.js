const toggleBotton = document.querySelector('.toggle-botton')
const togglebottonIcon = document.querySelector('.toggle-botton i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggleBotton.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    togglebottonIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

