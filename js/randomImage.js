const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['pexels-pixabay-37351.jpg', 'pexels-rethaferguson-3820296.jpg', 'pexels-thelazyartist-2247179.jpg', 'pexels-tirachard-kumtanom-112571-1001850.jpg'];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomImg = Math.floor(Math.random() * images.length);
    console.log(randomImg);
    image.style.backgroundImage = images[randomImg];

    image.src = 'img/' + images[randomImg];
}