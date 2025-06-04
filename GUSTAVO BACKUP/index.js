// CÓDIGO PARA O FADE DAS SEÇÕES
const fadeSections = document.querySelectorAll(".fade-section");

function showSectionsOnScroll() {
  fadeSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showSectionsOnScroll);

showSectionsOnScroll();
// FIM DO CÓDIGO PARA O FADE DAS SEÇÕES

// CÓDIGO DA SEÇÃO CARROSEL
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: -5,
    stretch: -50,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  initialSlide: 5,
});
// FIM DO CÓDIGO DA SEÇÃO CARROSEL


let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    header.style.top = "-100px"; // esconde
  } else {
    // Rolando para cima
    header.style.top = "0"; // mostra
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evita valores negativos
});


