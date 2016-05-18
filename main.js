$(document).ready(function() {
        $('#about-btn').addClass('btn-primary');
        $('.skills').hide();
        $('.experience').hide();
        $('.contact').hide();
});

function showAbout() {
        $('.nav-btn').removeClass('btn-primary');
        $('#about-btn').addClass('btn-primary');
        $('.content').hide();
        $('.about').show();
}

function showSkills() {
        $('.nav-btn').removeClass('btn-primary');
        $('#skills-btn').addClass('btn-primary');
        $('.content').hide();
        $('.skills').show();
}

function showExp() {
        $('.nav-btn').removeClass('btn-primary');
        $('#experience-btn').addClass('btn-primary');
        $('.content').hide();
        $('.experience').show();
}

function showContact() {
        $('.nav-btn').removeClass('btn-primary');
        $('#contact-btn').addClass('btn-primary');
        $('.content').hide();
        $('.contact').show();
}

function submitRating() {
        var rating = $('#rating input:radio:checked').val()
        // console.log(rating);
        if (rating == undefined) {
                $('.error').show();
                $('.success').hide();
        } else {
                $('.success').show();
                $('.error').hide();
                $('#ratingNum').text(rating);
                // place function to submit rating to desired destination here
        }
}

function submitForm() {
        alert('Thanks for trying to get in touch with me! Unfortunately, this form doesnt actually email me!')
}
