const imageHeight = 400;
const imageWidth = 600;

var currentImg = 0;
var left = 0;



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



previousArrow.addEventListener('click', function(event) {

    renderImage(currentImg, 'previous');
    console.log('current-img: ' + currentImg);

});


nextArrow.addEventListener('click', function(event) {

    renderImage(currentImg, 'next');
    console.log('current-img: ' + currentImg);
});



var indicatorWrapper = document.createElement('div');
indicatorWrapper.classList.add('carousel-indicator-wrapper');
imageWrapper.appendChild(indicatorWrapper);



var images = document.querySelectorAll('.carousel-image-wrapper > img')

images.forEach(function(value, index) {
    var indicator = document.createElement('div');
    indicator.setAttribute('id', 'img' + index);
    indicator.style.display = 'inline-block';
    indicator.style.backgroundImage = 'url(./images/indicator-off.png)';
    indicator.style.height = '40px';
    indicator.style.width = '40px';
    indicatorWrapper.appendChild(indicator);

    indicator.addEventListener('click', function(event) {
        var imageId = event.target.id.match(/\d+/g);
        renderImage(imageId[0], 'indicatior-click');
        console.log('current-img: ' + currentImg);
    })
})

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

function renderImage(currentImage, action) {
    if (action === 'next') {

        if (currentImage >= noOfImages - 1) {
            var timesRun = 0;
            var interval = setInterval(function() {
                left += 240;
                imageWrapper.style.marginLeft = left + "px";
                timesRun += 1;
                if (timesRun === 10) {
                    clearInterval(interval);
                }
            }, 10)
            currentImage = -1
        } else {
            var timesRun = 0;
            var interval = setInterval(function() {
                left -= 60;
                imageWrapper.style.marginLeft = left + "px";
                timesRun += 1;
                if (timesRun === 10) {
                    clearInterval(interval);
                }
            }, 10);
        }

        nextImg = currentImage + 1;
        currentImg = nextImg;

    }

    if (action === 'previous') {

        if (currentImage <= 0) {
            var timesRun = 0;
            var interval = setInterval(function() {
                left -= 240;
                imageWrapper.style.marginLeft = left + "px";
                timesRun += 1;
                if (timesRun === 10) {
                    clearInterval(interval);
                }
            }, 10)
            currentImage = noOfImages;
        } else {
            var timesRun = 0;
            var interval = setInterval(function() {
                left += 60;
                imageWrapper.style.marginLeft = left + "px";
                timesRun += 1;
                if (timesRun === 10) {
                    clearInterval(interval);
                }
            }, 10);
        }

        previousImg = currentImage - 1;
        currentImg = previousImg;
    }

    if (action === 'indicatior-click') {
        left = -currentImage * 600;
        currentImg = currentImage;
        console.log('m' + currentImg)
    }

    imageWrapper.style.marginLeft = left + "px";
    showIndicator(currentImg);

}

function showIndicator(currentImg) {
    console.log('function called' + currentImg);
    for (var i = 0; i < noOfImages; i++) {
        indicator = document.querySelector('#img' + i);
        if (i === currentImg) {
            indicator.style.backgroundImage = 'url(./images/indicator-on.png)';
        } else {
            indicator.style.backgroundImage = 'url(./images/indicator-off.png)';
        }
    }
}