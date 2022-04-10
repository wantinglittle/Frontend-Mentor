// Theme switch
const themeSwitch = document.querySelector('.theme-switch-container')
const switchDot = document.querySelector('.theme-switch')


themeSwitch.addEventListener('click', () => {
    const deleteKey = document.querySelector('.del')
    const answerContainer = document.querySelector('.answer-container')
    const resetKey = document.querySelector('.reset')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const keypad = document.querySelector('.keypad-container')
    const themeSwitchContainer = document.querySelector('.theme-switch-container')
    switchDot.classList.toggle('flip-theme-switch')
    body.classList.toggle('body-light')
    keypad.classList.toggle('keypad-light')
    deleteKey.classList.toggle('delete-reset-light')
    resetKey.classList.toggle('delete-reset-light')
    header.classList.toggle('header-light')
    themeSwitchContainer.classList.toggle('keypad-light')
    answerContainer.classList.toggle('answer-container-light')
})  


// ** Calculator functions **

//enter numbers besides zero
let decimalSwitch = 0
const numbers = document.querySelectorAll('.numbers')
let screen = document.querySelector('.screen')
const maxLength = 14


numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (screen.innerHTML.length >= maxLength) {
            return
        }
        
        if(decimalSwitch==1 || screen.innerHTML!='0.' && computingCode==0) { 
        screen.innerHTML+= number.innerHTML
        console.log(screen.innerHTML.length)
        } 

        if(computingCode==5) {
            screen.innerHTML = number.innerHTML
            answer=0
            computingCode=0    
        }

        else {
        screen.innerHTML = number.innerHTML
        
        } 
    })
})

//enter zero
const zero = document.querySelector('.zero')
zero.addEventListener('click', () => {
    if (screen.innerHTML.length >= maxLength) {
        return
    }
    if(decimalSwitch!=0 || screen.innerHTML!='0.' && computingCode==0) {
        screen.innerHTML+='0'
    }
    if(computingCode!=0) {
        screen.innerHTML=='0.'
    }

})

//reset key
const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    screen.innerHTML = '0.'
    decimalSwitch=0
    answer=0
    computingCode=0
})

//delete key
const deleteKey = document.querySelector('.del')
deleteKey.addEventListener('click', () => {
    if(screen.innerHTML.length===1 && computingCode!=5)
    screen.innerHTML='0.'
    if(decimalSwitch!=0 || screen.innerHTML!='0.' && computingCode != 5 && screen.innerHTML.length>1) {
        screen.innerHTML=screen.innerHTML.slice(0, (screen.innerHTML.length-1))
    }

})

//decimal key
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    if (screen.innerHTML.length >= maxLength) {
        return
    }
    decimalSwitch=1
    if(screen.innerHTML.indexOf('.')==-1 && computingCode==0) {
        screen.innerHTML+='.'
    }
})

//arithmetic keys

const add = document.querySelector('.plus')
const sub = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equals = document.querySelector('.equals')
let computingCode = 0
let answer = 0

//Calculation funtion
let compute = () => {
    if (computingCode==0) {
        answer = parseInt(screen.innerHTML)
    }
    if (computingCode==1) {
        answer+= parseInt(screen.innerHTML)
    }
    if (computingCode==2) {
        answer-= parseInt(screen.innerHTML)
    }
    if (computingCode==3) {
        answer*= parseInt(screen.innerHTML)
    }
    if (computingCode==4) {
        answer/= parseInt(screen.innerHTML)
    }
}


add.addEventListener('click', () => {
    compute()
    computingCode=1
    
})

sub.addEventListener('click', () => {
    compute()
    computingCode=2
    
})

multiply.addEventListener('click', () => {
    compute()
    computingCode=3
    
})

divide.addEventListener('click', () => {
    compute()
    computingCode=4
    
})

equals.addEventListener('click', () => {
    compute()
    screen.innerHTML=answer
    computingCode=5
})
