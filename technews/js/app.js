document.querySelector('.menu-bar').addEventListener('click', function (){
  document.querySelector('.nav-menu').classList.toggle('show')
})

// ScrollReveal().reveal('body',{ delay:500 });
ScrollReveal().reveal('.nav-main',{ delay:500 });
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{ delay:500 });
ScrollReveal().reveal('.card-banner',{ delay:500 });
ScrollReveal().reveal('.card-banner-two',{ delay:500 });

// setTimeout(function () {
//   location.href = "/technews"
// }, 600)