// const addElement = () => {
//     const lista = document.getElementById("lista")
// //cria elemento
//     const item0 = document.createElement("li")
//     item0.innerHTML = "item 0"

// //insere elemento no inicio
//     lista.insertAdjacentElement('afterbegin', item0)

//     const item5 = document.createElement("li")
//     //obrigatoriamente no final
//     lista.appendChild(item5)
//     item5.innerHTML = "item 5"
// }


// addElement()

const addToList = () => {
    const container = document.getElementById("container")
    container.innerHTML += "<p>Banana</p>"
}