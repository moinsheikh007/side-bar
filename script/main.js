const socialBtn = document.getElementById('socialBtn');
const social = document.querySelector('.social');

socialBtn.addEventListener('click', function () {
    social.classList.toggle('open')
})

const menuBar = document.getElementById('menuBar');
const header = document.querySelector('header')
menuBar.onclick = () => {
    header.classList.toggle('active')
}
window.onscroll = () => {
    header.classList.remove('active')
}