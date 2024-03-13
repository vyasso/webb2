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

    if (currentColor === "rgb(100, 100, 100)") {
        document.body.style.backgroundColor = "rgb(220, 220, 220)";
        document.querySelector('button').textContent = "Light ";
    }

    else {
        document.body.style.backgroundColor = "rgb(100, 100, 100)";
        document.querySelector('button').textContent = "Dark ";
    }
}