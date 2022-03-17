const button = document.querySelector(".share-circle");
const popupBubble = document.querySelector(".share-popup");
const popupCorner = document.querySelector(".box-corner");


button.addEventListener('click', function(){
    popupBubble.classList.toggle("popup-group")
    popupCorner.classList.toggle("popup-group")

})

const popupButtonSC = document.querySelector(".share-circle-sc");
const popupArrowSC = document.querySelector(".share-arrow-sc");


popupButtonSC.addEventListener('click', function(){
    popupButtonSC.classList.toggle("share-click-circle")
    popupArrowSC.classList.toggle("share-click-arrow")
    popupBubble.classList.toggle("popup-group")
    popupCorner.classList.toggle("popup-group")
})
