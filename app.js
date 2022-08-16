let cardOneDetails = document.querySelector('.cardOneDetails')
let firstCard = document.querySelector('.firstCard');
let removeBtn = document.querySelector('.removeBtn')
let messageOne = document.querySelector('.messageOne')
const buyBtn = document.querySelector('.buyBtn')

firstCard.addEventListener('click', ()=>{
    cardOneDetails.style.display = 'block'
})

removeBtn.addEventListener('click',()=>{
    cardOneDetails.style.display = 'none'
})

buyBtn.addEventListener('click',()=>{
    messageOne.style.display = 'block'
})