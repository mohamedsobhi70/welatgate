
if ($('.gallery-item').length) {
    $(".gallery-item").on("click", function () {
        return false;
    })
    $(".gallery-item").magnificPopup({
        midClick: true,
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function (openerElement) {
                return openerElement.is('a') ? openerElement : openerElement.parents('.gallery-item');
            }
        }
    });
}