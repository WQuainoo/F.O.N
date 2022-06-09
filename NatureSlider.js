let earthSlide = document.querySelector('.earth')
let mountain = document.querySelector('.stability')

let waterSlide = document.querySelector('.water')
let river = document.querySelector('.flow')

let airSlide = document.querySelector('.air')
let airy = document.querySelector('.freedom')

let fireSlide = document.querySelector('.fire')
let flames = document.querySelector('.passion')

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

airSlide.onclick = function()
{
    airSlide.classList.toggle('active');
    airy.classList.toggle('active')
}

fireSlide.onclick = function()
{
    fireSlide.classList.toggle('active');
    flames.classList.toggle('active')
}

