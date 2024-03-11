// knappen för dropdwon menu
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


// darkmode
function myFunction() {
    var currentColor = document.body.style.backgroundColor;

    if (currentColor === "grey") {
        document.body.style.backgroundColor = "";
        document.querySelector('button').textContent = "Light ";
    }

    else {
        document.body.style.backgroundColor = "grey";
        document.querySelector('button').textContent = "Dark ";
    }
}