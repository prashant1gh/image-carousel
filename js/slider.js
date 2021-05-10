const imageHeight = 400;
const imageWidth = 600;


var imageWrapper = document.querySelector('.carousel-image-wrapper');
addUIElements();


var previousArrow = document.querySelector('.previous-arrow');
var nextArrow = document.querySelector('.next-arrow');
var carousel = document.querySelector('.carousel');

var noOfImages = document.querySelectorAll('.carousel-image-wrapper > img').length;

carousel.style.width = imageWidth + 'px';
carousel.style.margin = '10%';
var totalSliderWidth = noOfImages * imageWidth
imageWrapper.style.width = totalSliderWidth + 'px';

var left = 0;
var right = 0;

previousArrow.addEventListener('click', function(event) {


    left += imageWidth;

    imageWrapper.style.marginLeft = left + "px";
});


nextArrow.addEventListener('click', function(event) {

    left -= imageWidth
    imageWrapper.style.marginLeft = left + "px";
});

function addUIElements() {
    var leftArrow = document.createElement('div');
    var rightArrow = document.createElement('div');


    leftArrow.style.backgroundImage = 'url(./images/left-arrow.png)';
    rightArrow.style.backgroundImage = 'url(./images/right-arrow.png)';

    leftArrow.classList.add('previous-arrow');
    rightArrow.classList.add('next-arrow');

    imageWrapper.appendChild(leftArrow);
    imageWrapper.appendChild(rightArrow);



}

var indicatorWrapper = document.createElement('div');
indicatorWrapper.classList.add('carousel-indicator-wrapper');
imageWrapper.appendChild(indicatorWrapper);



var images = document.querySelectorAll('.carousel-image-wrapper > img')

images.forEach(function(value, index) {
    var indicator = document.createElement('div');
    indicator.setAttribute('id', index);
    indicator.style.display = 'inline-block';
    indicator.style.backgroundImage = 'url(./images/indicator-off.png)';
    indicator.style.height = '40px';
    indicator.style.width = '40px';
    indicatorWrapper.appendChild(indicator);

    indicator.addEventListener('click', function(event) {
        var imageId = event.target.id
        left = -imageId * 600
        imageWrapper.style.marginLeft = left + "px";
    })
})