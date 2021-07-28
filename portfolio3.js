var slideIndex = 0;
var name=["HTML","CSS","Bootstrap","JavaScript","jQuery","Python","Java","C++","Nodejs","Express.js","MongoDB"];
showSlides();
function showSlides()
 {
  var i;
  var slides = document.querySelectorAll("#skill");
  var names=document.querySelector("#name");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length)
   {
   	slideIndex = 1;
   }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000)
};



var index = 1;
show(index);
function plusSlides(n) {
  show(index += n);
}
function currentSlide(n) {
  show(index = n);
}

function show(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}
