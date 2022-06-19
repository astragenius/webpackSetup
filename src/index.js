import './scss/index.scss'
import hallo from './js/test.js'

hallo()
console.log('hallo welt')
console.log('Hallo errrr!!!!!!!')
console.log('Hallo errrr!!!!!!!')
console.log(19 * 5)

if (module.hot) {
    module.hot.accept()
}

document.querySelector('h1').innerText = 'Hallow welt'
