const elements = [
    { slide: document.querySelector('.earth'), content: document.querySelector('.stability') },
    { slide: document.querySelector('.water'), content: document.querySelector('.flow') },
    { slide: document.querySelector('.air'), content: document.querySelector('.freedom') },
    { slide: document.querySelector('.fire'), content: document.querySelector('.passion') }
];

function handleSlideToggle(clickedIndex) {
    elements.forEach((element, index) => {
        if (index === clickedIndex) {
            element.slide.classList.toggle('active');
            element.content.classList.toggle('active');
        } else {
            element.slide.classList.remove('active');
            element.content.classList.remove('active');
        }
    });
}

elements.forEach((element, index) => {
    element.slide.onclick = function() {
        handleSlideToggle(index);
    };
});
