const messages = document.querySelector('.messages');

const form = document.querySelector('form')

form.setAttribute("novalidate",'')

const validation = (element) => {

    let errors = [];

    const onlyLetters = /^[a-zA-Z]+$/;

    if(element.firstName.value.length === 0 || !onlyLetters.test(element.firstName.value)){
        errors.push("Pole imię nie moze być puste lub dane są niepoprawne!")
    }
    if(element.lastName.value.length === 0){
        errors.push("Pole nazwisko nie moze być puste!")
    }
    if(element.street.value.length === 0){
        errors.push("Pole ulica nie moze być puste!")
    }
    
    if(element.houseNumber.value.length === 0 || Number.isNaN(element.houseNumber.value)) {
        errors.push('Dane w polu Numer budynku są niepoprawne!');
    }
    if(Number.isNaN(element.flatNumber.value)){
        errors.push("Dane w polu Numer mieszkania są niepoprawne!")
    }
    if(element.zip.value.length === 0 || !/^[0-9]{2}-[0-9]{3}$/.test(element.zip.value)) {
        errors.push('Dane w polu Kod pocztowy są niepoprawne!');
    }
    if(element.city.value.length === 0){
        errors.push("Pole miejscowość nie moze być puste!")
    }

    if(element.voivodeship.value.length === 0){
        errors.push("Wybierz województwo!")
    }

    return errors
}

const handleSubmit = (e) => {
    
    e.preventDefault();
    messages.innerHTML=''
    const errors = validation(e.target);

    if (errors.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Formularz został wysłany pomyślnie!';
        li.style.color = 'green';  
        messages.appendChild(li);
    } else {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            messages.appendChild(li);
            li.style.color = 'red'; 
        });
    }    
}

form.addEventListener("submit", handleSubmit);