$(document).ready(

    setTimeout(function () {

        $('.content-form').css("opacity", "1");
        $('.content-form').css("transform", "translate(0px)");
    }, 100)
)

//Email

$('#email').on('focus', function () {

    $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
})

$('#email').on('focusout', function () {

    if ($('#email').val().length < 1) {

        $('.lbl-email').css("margin-top", "10px");
        $('.lbl-email').css("font-size", "20px");
    } else {
        $('.lbl-email').css("margin-top", "-20px");
        $('.lbl-email').css("font-size", "14px");
    }
})


// Confirmar Email

$('#confir-email').on('focus', function () {

    $('.lbl-confir-email').css("margin-top", "20px");
    $('.lbl-confir-email').css("font-size", "14px");
})

$('#confir-email').on('focusout', function () {

    if ($('#confir-email').val().length < 1) {

        $('.lbl-confir-email').css("margin-top", "50px");
        $('.lbl-confir-email').css("font-size", "20px");
    } else {
        $('.lbl-confir-email').css("margin-top", "20px");
        $('.lbl-confir-email').css("font-size", "14px");
    }
})

//Contraseña

$('#clave').on('focus', function () {

    $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
})

$('#clave').on('focusout', function () {

    if ($('#clave').val().length < 1) {

        $('.lbl-clave').css("margin-top", "50px");
        $('.lbl-clave').css("font-size", "20px");
    } else {
        $('.lbl-clave').css("margin-top", "20px");
        $('.lbl-clave').css("font-size", "14px");
    }
})

// Confirmar Contraseña

$('#confir-clave').on('focus', function () {

    $('.lbl-confir-clave').css("margin-top", "20px");
    $('.lbl-confir-clave').css("font-size", "14px");
})

$('#confir-clave').on('focusout', function () {

    if ($('#confir-clave').val().length < 1) {

        $('.lbl-confir-clave').css("margin-top", "50px");
        $('.lbl-confir-clave').css("font-size", "20px");
    } else {
        $('.lbl-confir-clave').css("margin-top", "20px");
        $('.lbl-confir-clave').css("font-size", "14px");
    }
})
