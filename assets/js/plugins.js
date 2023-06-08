// Gallery 
const filterContainer = document.querySelector(".portfolio-filter"), // the div which contain the items
  portfolioItems = document.querySelectorAll(".portfolio-item"), // all items
  totalPortfolioItems = portfolioItems.length; // length of the items


// lightbox
const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".fa-close"),
  lightboxTxt = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItems; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxCounter.innerHTML = itemIndex + 1 + " / " + totalPortfolioItems;
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItems - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function nextItem() {
  if (itemIndex === totalPortfolioItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}

// closing the lightbox
lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

// aside navbar
const nav = document.querySelector(".wel-nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section"),
  totalAllSection = allSection.length,
  totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    for (let j = 0; j < totalAllSection; j++) {
      allSection[j].classList.remove("back");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showsection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showsection(element) {
  for (let i = 0; i < totalAllSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);


function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalAllSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

let swiper = new Swiper(".slider-intro", {
  spaceBetween: 30,
  loop: true,
  slidesPerView: 1,
});
