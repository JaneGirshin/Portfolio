$(document).ready(() => {
    $('.menu-toggler').on('click', () => {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', () => {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});




function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
        alert("Name can't be blank") ;
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name") ; // Validation Message
        return false;
    }
    return true;
}

function validateEmail () {
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert("Email can't be blank") ; // Validation Message
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address") ; // Validation Message
        return false;
    }
    return true;
}


function validateForm() {
    if (!validateName() || !validateEmail()) {  
        alert("Form not submitted"); // Validation Message
        return false;
    }
    else {
        submitted=true;
        return true;
    }
}