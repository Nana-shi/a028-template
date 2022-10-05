const addItemLista = ()=>{
    let input = document.getElementById("meu-input")
    let lista = document.getElementById("lista")
    lista.innerHTML += `<li> ${input.value} </li>`

    input.value = ""
}