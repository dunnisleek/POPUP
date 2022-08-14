const button = document.querySelector('button');
const showPop = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector(".close-icon")
const backgroundOverlay = document.querySelector('.popup-wrapper')

//show popup
button.addEventListener('click', () =>{
   showPop.style.display="block"
});

//close popup
closeButton.addEventListener('click',() =>{
    showPop.style.display="none"
})

//close on click on overlay

backgroundOverlay.addEventListener("click",() =>{
    showPop.style.display="none"
})
