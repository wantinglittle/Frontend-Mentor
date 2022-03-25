const bookmarkCircle = document.querySelector('.bookmark-image');
const bookmarkButton = document.querySelector('.bookmark');

const bookmarkChange = () => {
    bookmarkCircle.classList.toggle("bookmark-image-toggle")
    bookmarkButton.classList.toggle("bookmark-toggle")
    if(bookmarkButton.innerHTML==='Bookmark'){
        bookmarkButton.innerHTML='Bookmarked'
    } else if(bookmarkButton.innerHTML==='Bookmarked') {
        bookmarkButton.innerHTML='Bookmark'
    }
}

bookmarkCircle.addEventListener('click', bookmarkChange)
bookmarkButton.addEventListener('click', bookmarkChange)

// M O D A L
const modal = document.querySelector('.modal-container')
const selectReward1 = document.querySelector('.back-this-project')
const selectReward2 = document.querySelector('.bamboo-button')
const selectReward3 = document.querySelector('.black-button')
const closeModal = document.querySelector('.close-modal')
const content = document.querySelector('.content')
const topOne = document.querySelector('.top')

document.getElementById("choice4").disabled = true

const showModal = () => {
    modal.classList.add('show-modal')
    content.classList.add('content-dark')
    topOne.classList.add('content-dark')
}

selectReward1.addEventListener('click', showModal)
selectReward2.addEventListener('click', showModal)
selectReward3.addEventListener('click', showModal)

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    content.classList.remove('content-dark')
    topOne.classList.remove('content-dark')
})

// Appearance of pledge amount sub-box
const noPledge = document.querySelector('.no-pledge-enter')
const bambooPledge = document.querySelector('.bamboo-enter-your-pledge')
const blackPledge = document.querySelector('.black-enter-your-pledge')

const noSelector = document.querySelector('.no-selector')
const noContainer = document.querySelector('.no-pledge-container')
const modalNo = document.querySelector('.modal-no-pledge')

const bambooSelector = document.querySelector('.bamboo-selector')
const bambooContainer = document.querySelector('.bamboo-container')
const modalBamboo = document.querySelector('.modal-bamboo')

const blackSelector = document.querySelector('.black-selector')
const blackContainer = document.querySelector('.black-container')
const modalBlack = document.querySelector('.modal-black')

const bambooPledgeAmt = document.querySelector('.bamboo-pledge-amount')
const blackPledgeAmt = document.querySelector('.black-pledge-amount')

let dollarAmount=0


noSelector.addEventListener('click', () => {
    blackPledge.classList.remove('enter-your-pledge-appear')
    blackContainer.classList.remove('add-container-border')
    modalBlack.classList.remove('change-modal-box-border')
    
    bambooPledge.classList.remove('enter-your-pledge-appear')
    bambooContainer.classList.remove('add-container-border')
    modalBamboo.classList.remove('change-modal-box-border')

    noPledge.classList.add('enter-your-pledge-appear')
    noContainer.classList.add('add-container-border')
    modalNo.classList.add('change-modal-box-border')

    dollarAmount=0
    
})

bambooSelector.addEventListener('click', () => {
    noPledge.classList.remove('enter-your-pledge-appear')
    noContainer.classList.remove('add-container-border')
    modalNo.classList.remove('change-modal-box-border')

    blackPledge.classList.remove('enter-your-pledge-appear')
    blackContainer.classList.remove('add-container-border')
    modalBlack.classList.remove('change-modal-box-border')
    
    bambooPledge.classList.add('enter-your-pledge-appear')
    bambooContainer.classList.add('add-container-border')
    modalBamboo.classList.add('change-modal-box-border')

    bambooPledgeAmt.value=25

    bambooPledgeAmt.addEventListener('change', () => {
        dollarAmount=parseInt(bambooPledgeAmt.value)
    })
    
})

blackSelector.addEventListener('click', () => {
    noPledge.classList.remove('enter-your-pledge-appear')
    noContainer.classList.remove('add-container-border')
    modalNo.classList.remove('change-modal-box-border')

    bambooPledge.classList.remove('enter-your-pledge-appear')
    bambooContainer.classList.remove('add-container-border')
    modalBamboo.classList.remove('change-modal-box-border')
    
    blackPledge.classList.add('enter-your-pledge-appear')
    blackContainer.classList.add('add-container-border')
    modalBlack.classList.add('change-modal-box-border')

    blackPledgeAmt.value=75

    blackPledgeAmt.addEventListener('change', () => {
        dollarAmount=parseInt(blackPledgeAmt.value)
    })
})

//only positive whole numbers can be entered for pledge
let pledgeAmount = document.querySelectorAll('.pledge-amount')
pledgeAmount.forEach((p) => { 
    p.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 45 && e.keyCode < 58) 
      || e.keyCode == 8
      || e.keyCode == 37
      || e.keyCode == 39)) {
        return false;
        }
    }
})

// submission of pledge amount which updates progress dollar amount




// After clicking continue, pop up 'thanks' box and update progress info 

const contin = document.querySelectorAll('.continue')
const thanks = document.querySelector('.thanks-box')
const gotIt = document.querySelector('.got-it')
const totalBackers = document.querySelector('.total-backers-top')
let pledgeProgress = document.querySelector('.total-dollars-top')
let backers=5007
let newProgress=89914

contin.forEach((c) => {
    c.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    thanks.classList.add('show-thanks')
    newProgress+=dollarAmount
    pledgeProgress.textContent='$' + newProgress.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
})

gotIt.addEventListener('click', () => {
    thanks.classList.remove('show-thanks')
    content.classList.remove('content-dark')
    topOne.classList.remove('content-dark')
    totalBackers.textContent=(backers+1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    backers++
})

//  Mobile menu

const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.menu-container')
const closeMobile = document.querySelector('.mobile-menu-close')

hamburger.addEventListener('click', () => {
    content.classList.add('content-dark')
    topOne.classList.add('content-dark')
    closeMobile.style.display = ('block')
    hamburger.style.display = ('none')
    mobileMenu.style.display = ('flex')
    mobileMenu.style.brightness = ('100%')
})