let shouldMove = false
const captcha = document.querySelector('#captcha')
const handle = document.querySelector('#handle')
const button = document.querySelector('#handle span')

button.addEventListener('mousedown', (e) => {
  shouldMove = true
})

window.addEventListener('mousemove', (e) => {
  if (shouldMove) {
    const offsetLeft = handle.getBoundingClientRect().left
    const buttonWidth = button.getBoundingClientRect().width
    
    captcha.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`)
  }
})

window.addEventListener('mouseup', (e) => {
  if (shouldMove) {
    const finalOffset = e.clientX - handle.getBoundingClientRect().left
    
    if (finalOffset >= 430 && finalOffset <= 450) {
      // pass
      captcha.classList.add('passed')
    } else {
      // failed
      captcha.style.setProperty('--moved', '0px')
    }
    
    shouldMove = false
  }
})