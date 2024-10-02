const submitButton = document.querySelector('input[type="submit"]')
const nameInput = document.querySelector('input[name="firstName"]')
const surnameInput = document.querySelector('input[name="lastName"]')
const list = document.querySelector('ul')

const handleClick = (e) => {
    e.preventDefault()

    const name = nameInput.value
    const surname = surnameInput.value
    const newLi = document.createElement("li")
    newLi.innerText = (`${name} ${surname}`)
    newLi.className = "user-list__person"
    list.appendChild(newLi)
}

submitButton.addEventListener("click", handleClick)
