const PREV = document.getElementById("prev");
const NEXT = document.getElementById("next");

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide((slideIndex += n));
}

function showSlide(n) {
    let slides = document.getElementsByClassName("quote");
    let pictures = document.getElementsByClassName("picture");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    pictures[slideIndex - 1].style.display = "block";
}

PREV.addEventListener("click", () => {
    changeSlide(-1);
});

NEXT.addEventListener("click", () => {
    changeSlide(1);
});
