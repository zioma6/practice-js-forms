const input = document.querySelector('input');
const parentUl = document.querySelector(`.images-list`);
const toClone = document.querySelector('.images-list__item--prototype');

const checkType = (elements) => {

    const images = []

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type.includes('image')) {
            images.push(element);  
        }
    }

    return images;
}

const addToList = (images) => {

    images.forEach(element => {
        
        newLi = toClone.cloneNode(true);
        newLi.classList.remove('images-list__item--prototype');
        
        const nameFile = element.name;
        const sizeFile = (element.size / 1000000).toFixed(2);
       
        newLi.innerText = `Nazwa: ${nameFile} Rozmiar: ${sizeFile} MB`;

        parentUl.appendChild(newLi);
    });

    return
}

const clearList = () =>{

    parentUl.innerHTML = '';
    parentUl.appendChild(toClone);
}
 

const handelChange = (e) => {
    const files = e.target.files; 
    clearList();
    addToList(checkType(files));
}
                                                               
input.addEventListener('change', handelChange);

