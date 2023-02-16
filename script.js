let inputName = document.querySelector('.shopping__input-name')
let inputPrice = document.querySelector('.shopping__input-price')
let btnAdd = document.querySelector('.btn--primary')
let ulList = document.querySelector('.shoppinglist__items')
let errorInfo = document.querySelector('.shoppinglist__error')
let newProducts 

//newProduct List
const addNewProducts = () => {
    if(inputName.value !== '' && inputPrice.value !== '') {
        newProducts = document.createElement('li')
        newProducts.textContent = inputName.value
        newProducts.classList.add('shoppinglist__item')
        createNewTools()

        ulList.append(newProducts)
        inputName.value = ''
        inputPrice.value = ''
        errorInfo.value = ''
    } else {
        errorInfo.textContent = 'Uzupełnij nazwę oraz cenę'
    }
}

const createNewTools = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('shoppinglist__tools')
    newProducts.append(toolsPanel)

    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btn--secondary')
    btnDelete.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(btnDelete)
}

btnAdd.addEventListener('click', addNewProducts)

//delete products
const checkClick = (e) => {
    if(e.target.matches('.btn--secondary')) {
        deleteProducts(e)
    }
}

const deleteProducts = (e) => {
    e.target.closest('li').remove()
}
ulList.addEventListener('click', checkClick)
//Add price to Array
