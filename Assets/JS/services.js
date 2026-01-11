// Services Page Specific JavaScript
$(document).ready(function () {
    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Theme handled centrally in main.js

    // WhatsApp button click
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I would like to inquire about event services at Ambrosia restaurant.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // Scroll progress bar
    $(window).on('scroll', function () {
        const winHeight = $(window).height();
        const docHeight = $(document).height();
        const winTop = $(window).scrollTop();
        const progress = (winTop / (docHeight - winHeight)) * 100;
        $('#scroll-progress').css('width', progress + '%');

        // Sticky navbar
        if ($(window).scrollTop() > 100) {
            $('#main-nav').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('scrolled');
        }

        // Scroll to top button
        if ($(window).scrollTop() > 300) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        // Fade in animation for elements
        $('.fade-in').each(function () {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowTop = $(window).scrollTop();

            if (elementTop < windowTop + $(window).height() - elementVisible) {
                $(this).addClass('visible');
            }
        });

        // Stagger animation for service cards
        $('.stagger-item').each(function (index) {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowTop = $(window).scrollTop();

            if (elementTop < windowTop + $(window).height() - elementVisible) {
                setTimeout(() => {
                    $(this).addClass('visible');
                }, index * 100);
            }
        });
    });

    // Scroll to top button click
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Open inquiry modal
    $('#open-inquiry-modal').click(function () {
        $('#serviceInquiryModal').modal('show');
    });

    // Package inquiry buttons
    $('[data-service]').click(function () {
        const serviceType = $(this).data('service');
        $('#inquiry-service').val(serviceType);
        $('#serviceInquiryModal').modal('show');
    });

    // Service inquiry form submission
    $('#serviceInquiryForm').submit(function (e) {
        e.preventDefault();

        // Simple validation
        let isValid = true;
        $(this).find('input[required], select[required]').each(function () {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (isValid) {
            // Simulate form submission
            setTimeout(() => {
                $('#serviceInquiryModal').modal('hide');
                showToast('Service inquiry submitted successfully! We will contact you soon.', 'success');

                // Reset form
                $('#serviceInquiryForm')[0].reset();

                // In real application, submit to server
                console.log('Service inquiry submitted');
            }, 500);
        } else {
            showToast('Please fill in all required fields', 'error');
        }
    });

    // Initialize lightbox for gallery
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300
    });

    // Show toast notification
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

    // Custom cursor (simplified version)
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });

            // Check if hovering over clickable elements
            const target = e.target;
            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
                cursorDot.style.width = '16px';
                cursorDot.style.height = '16px';
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
            } else {
                cursorDot.style.width = '8px';
                cursorDot.style.height = '8px';
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
            }
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }

    // Trigger initial scroll check
    $(window).trigger('scroll');
});