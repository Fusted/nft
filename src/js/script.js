import {qr2} from './pages/qr2'

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
    var word = ''

    roadmap.addEventListener('click', (e) => {

        if (e.target.classList.contains('btn--box')){
            const num = parseInt(e.target.getAttribute('data-btn'))
            const active = roadmap.querySelectorAll('.roadmap__info--active')
            roadmap.querySelector('.box--active').classList.remove('box--active')
            e.target.classList.add('box--active')


            if (num == 6 && localStorage.getItem('hfynakgyv') == 'true'){
                roadmap.addEventListener('click', (e) => pas(e))
                console.error('UGFzc3dvcmQ6IDAxMDEgMDAxMSAxMDAxIDAwMDE') //5391
            }

            if (active.length){
                active.forEach(item => {
                    item.classList.remove('roadmap__info--active')
                })
            }
    
            (roadmap.querySelector(`[data-info='${num}'`)).classList.add('roadmap__info--active')
        }
        
    })


    function pas(e){
        if (e.target.classList.contains('btn--box')){
            word += parseInt(e.target.getAttribute('data-btn'))
            if (word.length > 4){
                word = word.slice(1, 5)
            }

            if (word == '5391'){
                const a = prompt('drowssap')
                if (a == '1935'){
                    if (confirm('JS это безопасно?')){
                        if (confirm('Уверен?')){
                            alert('Земля тебе металлом')
                        } else {
                            alert('Не зря сомневаешься')
                        }
                    } else {
                        alert ('aHR0cDovL3FyY29kZXIucnUvY29kZS8/aHR0cHMlM0ElMkYlMkZ5b3V0dS5iZSUyRmRRdzR3OVdnWGNRJTNGdCUzRDg1JjQmMA==')   
                    }
                    
                } else if (a == '5391'){
                    alert('Это все???')
                } else {
                    alert('Не угадал')
                }
            }
        } 
    }
})