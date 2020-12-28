var slideIndex = 1;
var slides = document.getElementsByClassName("Slides");
showSlides(slideIndex);

function changeSlides(n) {
    /* This function will change the slides */
    showSlides(slideIndex += n);
}

function getDetails() {
    /* Getting values from Form to Console*/
    var x = document.getElementById("contactForm");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt += x.elements[i].name + "\t" + x.elements[i].value + "\n";
    }
    console.log(txt);
}

function popUp() {
    window.alert("Thanks!! We'll Contact you soon");
}

function showSlides(n) {
    /* This function will display the slides */
    var i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "None";
    }

    slides[slideIndex - 1].style.display = "block";
}