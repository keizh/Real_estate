/*=============== CHANGE BACKGROUND HEADER ===============*/

const header = document.querySelector("header");

window.addEventListener("scroll", function (e) {
  e.preventDefault();

  var scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
});

/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper(".popular-swiper", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  loop: true,
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },

  breakpoints: {
    545: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== VALUE ACCORDION ===============*/

const acc_array = document.querySelectorAll(".acc");

acc_array.forEach(function (accordion) {
  const arrow = accordion.querySelector(".arrow-down-icon");

  arrow.addEventListener("click", function (e) {
    if (accordion.classList.contains("active-acc")) {
      accordion.classList.remove("active-acc");
    } else {
      acc_array.forEach((acc) => {
        acc.classList.remove("active-acc");
      });
      accordion.classList.add("active-acc");
    }
  });
});

/*=============== ACTIVE SCROLL SECTIONS ===============*/

const sections = document.querySelectorAll(" section[id]");

window.addEventListener("scroll", function (e) {
  var scrollY = window.scrollY;
  sections.forEach(function (section) {
    const sectiontop = section.offsetTop - 67.46;
    const sectionheight = section.offsetHeight;
    const sectionid = section.getAttribute("id");
    const link = document.querySelector(`a[href*='#${sectionid}']`);

    // console.log(link);
    if (scrollY > sectiontop && scrollY < sectiontop + sectionheight) {
      link.classList.add("active-section");
    } else {
      link.classList.remove("active-section");
    }
  });
});

/*=============== SHOW SCROLL UP ===============*/

document.querySelector(".scroll-up").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("efwf");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", function (e) {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
