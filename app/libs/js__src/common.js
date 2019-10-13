// $(".scrollThis").click(function (e){
//     e.preventDefault();
//     var $this = $(this);
//     $('html, body').animate({
//     scrollTop: $($this.attr('href')).offset().top
//     }, 500);
//     });
//let formContainer = document.getElementById('form-section');
//let button = document.querySelector('.button');

// button.addEventListener('click', function() {
//   formContainer.scrollIntoView({behavior: "smooth"});
//   console.log('К этой кнопке');
// });

// function scrollToElement(theElement) {
//   if (typeof theElement === "string") theElement = document.getElementById(theElement);
//   var selectedPosX = 0;
//   var selectedPosY = 0;
   
//   while (theElement != null) {
//     selectedPosX += theElement.offsetLeft;
//     selectedPosY += theElement.offsetTop;
//     theElement = theElement.offsetParent;
//   }
    
//   window.scrollTo(selectedPosX, selectedPosY);
// }
    
// scrollToElement('#form-container'); // теперь это будет работать

// let button = document.querySelector('.header__button');
// let footer = document.getElementById('footer');

// console.log(footer);

// button.addEventListener('click', function(event) {
//   footer.scrollIntoView({
//       'behavior': 'smooth'
//   });
// });