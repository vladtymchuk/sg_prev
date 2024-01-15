$(document).ready(function(){
    $('a').click(function (e) {
        const header = $('container-fluid').outerHeight();
        const linkHref = $(this).attr('href');
        // let $location = $(`[href="${window.location.hash}"]`)[0];
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - header
        }, 1000);
        $(`[href="${window.location.hash}"]`)[0].click();
        e.preventDefault();
    });
});