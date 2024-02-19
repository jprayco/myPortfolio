$(document).ready(function() {
    $('#id_know_more').click(function() {
        $(this).addClass('d-none')
        console.log('click')
    })

    /*  $('#project_1').attr("checked", true); */
    let project_1 = $('#project_1')
    let project_2 = $('#project_2')
    let project_3 = $('#project_3')

    let card_1 = $('#card_1')
    let card_2 = $('#card_2')
    let card_3 = $('#card_3')


    let prev = $('#prev')
    let next = $('#next')

    prev.click(function() {
        console.log('prev')
        clearInterval(slideStop)
        if (project_1.is(':checked')) {
            console.log('card 1')

            card_1.removeClass('card_left card_right')
            card_2.removeClass('card_left selected_card')
            card_3.removeClass('selected_card card_right')

            card_1.addClass('selected_card')
            card_2.addClass('card_right')
            card_3.addClass('card_left')


            $('#project_1').prop("checked", false);
            $('#project_2').prop("checked", true);
            $('#project_3').prop("checked", false);

        } else if (project_2.is(':checked')) {

            card_1.removeClass('selected_card card_right')
            card_2.removeClass('card_right card_left')
            card_3.removeClass('card_left selected_card')

            card_1.addClass('card_left')
            card_2.addClass('selected_card')
            card_3.addClass('card_right')

            $('#project_1').prop("checked", false);
            $('#project_2').prop("checked", false);
            $('#project_3').prop("checked", true);

        } else if (project_3.is(':checked')) {

            card_1.removeClass('selected_card card_left')
            card_2.removeClass('card_right selected_card')
            card_3.removeClass('card_left card_right')

            card_1.addClass('card_right')
            card_2.addClass('card_left')
            card_3.addClass('selected_card')

            $('#project_1').prop("checked", true);
            $('#project_2').prop("checked", false);
            $('#project_3').prop("checked", false);
        }
    })

    next.click(function() {
        console.log('next')
        clearInterval(slideStop)
        nextslide();
    })


    function nextslide() {
        if (project_1.is(':checked')) {
            console.log('card 1')

            card_1.removeClass('card_left card_right')
            card_2.removeClass('card_left selected_card')
            card_3.removeClass('selected_card card_right')

            card_1.addClass('selected_card')
            card_2.addClass('card_right')
            card_3.addClass('card_left')


            $('#project_1').prop("checked", false);
            $('#project_2').prop("checked", false);
            $('#project_3').prop("checked", true);

        } else if (project_2.is(':checked')) {

            card_1.removeClass('selected_card card_right')
            card_2.removeClass('card_right card_left')
            card_3.removeClass('card_left selected_card')

            card_1.addClass('card_left')
            card_2.addClass('selected_card')
            card_3.addClass('card_right')

            $('#project_1').prop("checked", true);
            $('#project_2').prop("checked", false);
            $('#project_3').prop("checked", false);

        } else if (project_3.is(':checked')) {

            card_1.removeClass('selected_card card_left')
            card_2.removeClass('card_right selected_card')
            card_3.removeClass('card_left card_right')

            card_1.addClass('card_right')
            card_2.addClass('card_left')
            card_3.addClass('selected_card')

            $('#project_1').prop("checked", false);
            $('#project_2').prop("checked", true);
            $('#project_3').prop("checked", false);
        }
    }


    let slideStop = setInterval(nextslide, 1500)

    function reveal() {
        var reveals = $(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

})
