window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var fixed = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixed) {
    nav.classList.add("fixed")
  } else {
    nav.classList.remove("fixed");
  }
}