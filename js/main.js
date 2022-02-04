/* ========== declaring constants for show/hide nav_menu */
const navMenu = document.querySelector('#nav-menu'),
      navClose = document.querySelector('#nav-close'),
      navToggle = document.querySelector('#nav-toggle');


/* ========== Opening the nav_menu ========== */
/* ========== checking if constant is valid ========== */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('open_menu');
    })
}


/* ========== Closing the nav_menu */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open_menu');
    })
}


/* ========== removing the nav_menu by clicking on the links */
const navLink = document.querySelectorAll('.nav_link');

function removeMenu() {
    navMenu.classList.remove('open_menu');
}

for(let link of navLink){link.addEventListener('click', removeMenu)};

/* ========== Projects slide with Swiper */
let swiper = new Swiper(".projects_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

/* ========== adding a border-shadow effect to the Header section when scrolling down ========== */
function scrollDownHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollDownHeader)

/* ====== Show the scroll up Button ======== */
function scrollUpBtn() {
    const scrollUp = document.getElementById('scrollUp-btn');
    if(this.scrollY > 560) {
        scrollUp.classList.add('show_scroll-btn');
    }else {
        scrollUp.classList.remove('show_scroll-btn');
    }
}
window.addEventListener('scroll', scrollUpBtn);


/*========== change color on envelop ==========*/
$(document).ready(() => {
    let envelope = () => {
        $('#nav-icon').toggleClass('uil-envelope-alt uil-envelope-upload envelope')
  }
    $('#contact-link-a').on('mouseover mouseout', envelope)
})



/* moving the Download CV button on screen size */
/* Contact link text moved outside of the container when in bigger screens */
/* JavaScript Media Queries */

$(document).ready(function() {
    /* ========== when resizing the window ========== */
    $(window).resize(() => {
            if(window.innerWidth >= 767) {
                $('#p-wrapper').append($('#data-button'));
                $('#contact-link-a').append($('.contact-text'));
            }else {
                $('#about-container').append($('#data-button'));
                $('#nav-icon-border').append($('.contact-text'));
            }
    })

    /* ========== when at the active viewport */
    if($(window).width() >= 767) {
        $('#p-wrapper').append($('#data-button'));
        $('#contact-link-a').append($('.contact-text'));
    }else {
        $('#about-container').append($('#data-button'));
        $('#nav-icon-border').append($('.contact-text'));
    }
})