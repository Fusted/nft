import { rap } from "./pages/rappers";
import {purpose} from './pages/purpose'
import { roadmap } from "./pages/roadmap";
import randomWord from "./random";
import { qr } from "./pages/qr";
import pas from "./pages/pas";

function notTrue(){
    
    for (let i = 0; i < 10; i++){
        localStorage.setItem(randomWord(), randomWord())
    }
    
    localStorage.setItem('fuck', 'true')
    localStorage.setItem('hfynakgyv', 'vyndlbugv')

    for (let i = 0; i < 10; i++){
        localStorage.setItem(randomWord(), randomWord())
    }
    main.remove()
}

const options = [rap, purpose, roadmap]

const main = document.querySelector('main')

document.querySelector('#rap').addEventListener('click', () => {
    notTrue()
    document.querySelector('.intro').innerHTML = rap
})

document.querySelector('#purpose').addEventListener('click', () => {
    notTrue()
    document.querySelector('.intro').innerHTML = purpose
})

document.querySelector('#parity').addEventListener('click', () => {
    notTrue()
    document.querySelector('.intro').innerHTML = purpose
})


document.querySelector('#roadmap').addEventListener('click', () => {
    notTrue()
    document.querySelector('.intro').innerHTML = roadmap
    
    document.querySelector('.roadmap').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn--box')){
            const num = parseInt(e.target.getAttribute('data-btn'))
            const active = document.querySelectorAll('.roadmap__info--active')
            document.querySelector('.box--active').classList.remove('box--active')
            e.target.classList.add('box--active')

            

            if (active.length){
                active.forEach(item => {
                    item.classList.remove('roadmap__info--active')
                })
            }
    
            (document.querySelector(`[data-info='${num}'`)).classList.add('roadmap__info--active')
        }
    })
})


document.querySelector('.mint').addEventListener('click', () => {
    console.error('Syntax error: nothing woring can not access');
    console.error("Uncaught ReferenceError: Cannot access 'button' before initialization you need to go on 6th roadmap and wait 10 second")
    setTimeout(() => {
        localStorage.setItem('hfynakgyv', 'true')
    }, 10000)

})



// if (localStorage.getItem('fuck') == 'true'){
//     main.remove()
//     document.querySelector('.intro').innerHTML = options[Math.floor(Math.random() * 3)]

//     if (Math.floor(Math.random() * 5) == 0) {
//          console.log('+')
//         document.querySelector('body').innerHTML += qr
//     }
    
// }





