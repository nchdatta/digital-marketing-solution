// console.log('Hello')
// navbar scroll 
const navbar = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('navbar_scrolled');
    } else {
        navbar.classList.remove("navbar_scrolled");
    }
};

// Hide nav 
const navLink = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');
navLink.forEach((value) => {
    value.addEventListener('click', () => {
        navCollapse.classList.remove('show');
    })
});

// Owl carousel for client
$(document).ready(function () {
    $('.owl-carousel-client').owlCarousel({
        items: 6,
        rtl: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});



// Owl carousel for testimonial section 
$(document).ready(function () {
    $('.owl-carousel-testimonial').owlCarousel({
        items: 4,
        rtl: false,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            }
        }
    })
});


