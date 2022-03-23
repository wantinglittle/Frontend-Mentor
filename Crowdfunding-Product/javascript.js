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
const topone = document.querySelector('.top')

document.getElementById("choice4").disabled = true

const showModal = () => {
    modal.classList.add('show-modal')
    content.classList.add('content-dark')
    topone.classList.add('content-dark')
}

selectReward1.addEventListener('click', showModal)
selectReward2.addEventListener('click', showModal)
selectReward3.addEventListener('click', showModal)

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    content.classList.remove('content-dark')
    topone.classList.remove('content-dark')
})