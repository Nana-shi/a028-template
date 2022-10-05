const changeButtonType = (event) => {
    event.preventDefault()
    let input = document.getElementById("password")
    input.setAttribute("type", "password")
}

const changeToDarkMode = () => {
    const form = document.getElementById("form")

    form.classList.remove("light")
    form.classList.add("dark")
}

changeToDarkMode()