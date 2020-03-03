var slideIndex = 1;
var titles = ["The Africa Project", "Field Lane Sponsor", "The JA School Project", "The Kenya Project"];
var links = ["html/projects/africa.html", "html/projects/fieldLane.html", "html/projects/jaSchool.html", "html/projects/kenya.html"];
var slides = document.getElementsByClassName("slide");
var projectText = document.getElementById("mainText");

var loop = setInterval("plusSlides(1);", 7000);
showSlides(slideIndex); 

function plusSlides(n) { 
    showSlides(slideIndex += n); 
    clearInterval(loop); 
    loop = setInterval("plusSlides(1);", 7000); }

function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    var i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slides[0].parentElement.href = links[slideIndex-1];
    projectText.innerHTML = titles[slideIndex-1];

}