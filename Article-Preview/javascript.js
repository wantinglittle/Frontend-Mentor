const button = document.querySelector(".share-button");
const popupBubble = document.querySelector(".share-popup");
const popupCorner = document.querySelector(".box-corner");


button.addEventListener('click', function(){
    popupBubble.classList.toggle("popup-group")
    popupCorner.classList.toggle("popup-group")

})

