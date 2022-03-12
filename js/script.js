const images = [
    'images/slider_1.jpg',
    'images/slider_2.jpg',
    'images/slider_3.jpg',
    'images/slider_4.jpg',
    'images/slider_5.jpg'
];

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1500)