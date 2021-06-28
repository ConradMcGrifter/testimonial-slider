//initialze starting slide
var slideIndex = 1;
showSlides(slideIndex);

// this function is used on the next and prev arrows (it says plusSlides but it can take a negative number to subtract from the slide index)
function plusSlides(n) {
showSlides((slideIndex += n));
}

//this function is used on the dots
function currentSlide(n) {
showSlides((slideIndex = n));
}

function showSlides(n) {
var i;

    var slides = document.getElementsByClassName("mySlides"); //this targets the containers that hold the slide image and the caption text and the current slide number

    var dots = document.getElementsByClassName("dot");
    //if the parameter number is greater than the slide length, reset to 1 (start)
    if (n > slides.length) {
        slideIndex = 1;
    }

    //if number is less than 1 -- set the current slide to whatever the length of the slides is. this is for when the left arrow is clicked (go in reverse)
    if (n < 1) {
        slideIndex = slides.length;
    }

    //this loops over the individual slides and sets display to none

    //this loops over the individual dots and removesthe active class
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    //this takes the slide index and subtracts 1 so it can target the proper element in the slides array (because arrays use 0 based indexing) and it displays that element
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

}
