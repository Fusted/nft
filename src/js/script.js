window.addEventListener('DOMContentLoaded', () => {
    
    const roadmap = document.querySelector('.roadmap')

    roadmap.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn--box')){
            const num = parseInt(e.target.getAttribute('data-btn'))
            const active = roadmap.querySelectorAll('.roadmap__info--active')
            roadmap.querySelector('.box--active').classList.remove('box--active')
            e.target.classList.add('box--active')

            if (active.length){
                active.forEach(item => {
                    item.classList.remove('roadmap__info--active')
                })
            }
    
            (roadmap.querySelector(`[data-info='${num}'`)).classList.add('roadmap__info--active')
        }
    })

    const faqBtns = document.querySelectorAll('.faq__btn')
    const faqWrapper = document.querySelector('.faq__wrapper')

    faqWrapper.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('faq__btn')){
            e.target.classList.toggle('faq__btn--active')
            e.target.parentElement.parentElement.querySelector('.faq__text').classList.toggle('faq__active') 
        }
    })
})