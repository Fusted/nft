const btn = document.querySelector('.nav__toggle')
const ul = document.querySelector('.nav__links')

btn.addEventListener('click', () => {
    btn.classList.toggle('btn--active')
    ul.classList.toggle('ul--active')
})


    