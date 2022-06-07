let earthSlide = document.querySelector('.earth')
let mountain = document.querySelector('.stability')

let waterSlide = document.querySelector('.water')
let river = document.querySelector('.flow')

earthSlide.onclick = function()
{
    earthSlide.classList.toggle('active');
    mountain.classList.toggle('active')
}

waterSlide.onclick = function()
{
    waterSlide.classList.toggle('active');
    river.classList.toggle('active')
}
