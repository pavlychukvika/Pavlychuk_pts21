let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelectorAll('.open-popup');
let closePopupBtn = document.querySelector('.close-popup');


openPopupBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');

        
    })
});

closePopupBtn.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
