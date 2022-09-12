let burgerButton = document.getElementById('toggle-menu');
let navBar = document.getElementById('nav-list');


burgerButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

let links = document.querySelectorAll('.navlist')

for (i of links) {
    i.addEventListener('click', function () {
        navBar.classList.toggle('toggle');
        burgerButton.classList.toggle('active');
    })
}



$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
});

function msg() {
    alert("თქვენი შეტყობინება წარმატებით გაიგზავნა!");
};