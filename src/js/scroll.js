function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop - 100,
        behavior: 'smooth'
    })
}

const navWrapper = document.querySelector('.nav__links')


navWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('data-scroll')
        scrollTo(document.getElementById(id))
    }
})


document.querySelector('#more').addEventListener('click', () => {
    scrollTo(document.querySelector('#purpose'))
})