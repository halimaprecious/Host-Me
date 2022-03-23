// $(document).ready(function(){
//     $("#section2").hide();

// });

// let images_array= [
//     "./images/alexandru-acea-Zg9R__O-8fM-unsplash.jpg",
//     "./images/gilberto-olimpio-YuZNOdHzQM8-unsplash.jpg",
//     "./images/marcus-loke-WQJvWU_HZFo-unsplash.jpg",
//     "./images/markus-winkler-X-TxwCVtgxo-unsplash (copy).jpg",
//     "./images/norbert-levajsics-oTJ92KUXHls-unsplash.jpg",
//     "./images/jan-antonin-kolar-KXED2PLneek-unsplash.jpg",
    
// ]
// let image=$(".my-images");

// let i =0;
// setInterval(function(){
//     i =(i ++) % images_array.length
    
    
//     $(document).ready(function(){
//         image.fadeOut(1000, () => {
//             image.attr("src" ,images_array[i]);
//             image.fadeIn(1000);

// });

// });

// });

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}