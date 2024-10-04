const form = document.querySelector('form')



const validation = (element) => {

    const errors = []

    document.querySelector('label[for="formLogin"]').style.color = 'black';
    document.querySelector('label[for="formPass1"]').style.color = 'black';
    document.querySelector('label[for="formPass2"]').style.color = 'black';
    document.querySelector('label[for="formAccept"]').style.color = 'black';


    if(!element.formLogin.value.includes('@')) {

        errors.push('Mail musi zawierać @')

        document.querySelector('label[for="formLogin"]').style.color = 'red';
    }

    if(element.formPass1.value !== element.formPass2.value) {

        errors.push('Hasła nie są takie same ')
        document.querySelector('label[for="formPass1"]').style.color = 'red';
        document.querySelector('label[for="formPass2"]').style.color = 'red';
    }

    if (element.formPass1.value.length === 0) {
        
        errors.push('Hasła nie mogą być puste')
        document.querySelector('label[for="formPass1"]').style.color = 'red';
        document.querySelector('label[for="formPass2"]').style.color = 'red';
    }

    if(!element.formAccept.checked){

        errors.push('Musisz zaakceptować regulamin')
        document.querySelector('label[for="formAccept"]').style.color = 'red';
    }

    return errors
}

const addErrors = (errors) => {

    if (errors.length !== 0) {
        console.log(errors);
        return;
    }

    console.log('Done')

}

const handleSubimt = (e) => {
    e.preventDefault()
    addErrors(validation(e.target))
}


form.addEventListener('submit',handleSubimt)