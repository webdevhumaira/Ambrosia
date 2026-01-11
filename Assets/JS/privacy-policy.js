$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Theme handled centrally in main.js

    // Table of Contents smooth scroll
    $('.toc-list a').click(function (e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const targetElement = $(targetId);

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 100
            }, 800);
        }
    });

    // Show toast
    function showToast(message, type = 'success') {
        const toast = $('#toast');
        $('#toast-message').text(message);

        toast.removeClass('success error');
        toast.addClass(type);
        toast.addClass('show');

        setTimeout(() => {
            toast.removeClass('show');
        }, 3000);
    }
});