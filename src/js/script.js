const btn = document.querySelector('.nav__toggle')
const ul = document.querySelector('.nav__links')

btn.addEventListener('click', () => {
    btn.classList.toggle('btn--active')
    ul.classList.toggle('ul--active')
})


const faqBtns = document.querySelectorAll('.faq__btn')
const faqWrapper = document.querySelector('.faq__wrapper')

faqWrapper.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('faq__btn')){
        e.target.parentElement.parentElement.querySelector('.faq__text').classList.toggle('faq__active') 
    }
})

