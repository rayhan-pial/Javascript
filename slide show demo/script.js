const slideshow = document.querySelectorAll(".slideshow-element");

let count = 1;
setInterval(() => {
    count ++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if (count>slideshow.length){

        slideshow[0].classList.add("current");
        count = 1;
    }else{

        currentElement.nextElementSibling.classList.add("current");

    }


}, 1000);