window.addEventListener('DOMContentLoaded', () => {
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
            e.target.classList.toggle('faq__btn--active')
            e.target.parentElement.parentElement.querySelector('.faq__text').classList.toggle('faq__active') 
        }
    })

    // roadmap

    const roadmap = document.querySelector('.roadmap')
    // const textList = document.querySelectorAll('.roadmap__info')

    roadmap.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn--box')){
            const num = parseInt(e.target.getAttribute('data-btn'))
            const active = roadmap.querySelectorAll('.roadmap__info--active')
            roadmap.querySelector('.box--active').classList.remove('box--active')
            e.target.classList.add('box--active')

            // for (let i = 1; i < num + 1; i++){
            //     roadmap.querySelector(`[data-btn='${i}'`).classList.add('box-checked')
            //     roadmap.querySelector(`[data-btn='${i}'`).previousSibling.classList.add('box--line-checked')
            // }

            if (active.length){
                active.forEach(item => {
                    item.classList.remove('roadmap__info--active')
                })
            }
    
            (roadmap.querySelector(`[data-info='${num}'`)).classList.add('roadmap__info--active')
        }
    })

})