let earthSlide = document.querySelector('.earth');
let mountain = document.querySelector('.stability')

earthSlide.onclick = function()
{
    earthSlide.classList.toggle('active');
    mountain.classList.toggle('active')
}