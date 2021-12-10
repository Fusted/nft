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
        const id = e.target.getAttribute('data-scroll').substr(1)
        console.log(id)
        scrollTo(document.querySelector(`#${id}`))
    }
})