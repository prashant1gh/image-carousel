# Image Carousel made with vannila JS

![Screenshot](./images/screenshot1.png)

## How to Use

Include CSS
First, include CSS files into your HTML head:

```html
<link rel="stylesheet" href="carousel.css">
```

### Include JS

include carousel.js into the footer(before body tag closes).

```html
<script src="carousel.js"></script>
```

### Set HTML

You don't need any special markup. All you need is to wrap your divsinside the container element ```<div class="carousel">```. Class "carousel" is mandatory to apply proper styles that come from carousel.css file. Default nav controls like dots and next / previous buttons are included in carousel.css file.

```html
<!-- Set up your HTML -->
<div class="carousel">
        <div class="carousel-image-wrapper">
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
        </div>
    </div>
```
