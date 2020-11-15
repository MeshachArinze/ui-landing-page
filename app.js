document.addEventListener("DOMContentLoaded", ()=>{
    const header = document.querySelector("header");
    const btn =  document.querySelector(".div button");
    const nav = document.querySelector(".navbar");
    const navlist = document.querySelector("nav ul");
    const navlink = document.querySelector("nav ul li a");

    /*const slideshows = document.querySelectorAll('[data-component="slideshow"]');
    */
    
    btn.addEventListener("click", (ev)=>{
        nav.classList.toggle("showNav");
    })
   /* slideshows.forEach(initSlideShow);
    function initSlideShow() {

        let slides = document.querySelectorAll(`#${slideshow.id} [role="list] .slide`);
        let index = 0, time = 5000;

        slides[index].classList.add("active");

        setInterval( () => {
            slides[index].classList.remove('active');

            index++;
            if(index === slides.length) index = 0;
            slides[index].classList.add('active');
        }, time);
    } */
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");

  let i;
  for(i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex -1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

})