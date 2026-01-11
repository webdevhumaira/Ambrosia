// Contact Page Specific JavaScript
$(document).ready(function () {
    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Theme handled centrally in main.js

    // WhatsApp button click
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I would like to get more information about Ambrosia restaurant.";
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
    });

    // Scroll to top button click
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Form validation
    $('#contactForm').submit(function (e) {
        e.preventDefault();

        let isValid = true;

        // Reset previous errors
        $('.form-control-custom').removeClass('error success');
        $('.validation-message').removeClass('error success').hide();

        // Validate name
        const name = $('#name').val().trim();
        if (name === '') {
            $('#name').addClass('error');
            $('#nameError').text('Please enter your name').addClass('error').show();
            isValid = false;
        } else if (name.length < 2) {
            $('#name').addClass('error');
            $('#nameError').text('Name must be at least 2 characters').addClass('error').show();
            isValid = false;
        } else {
            $('#name').addClass('success');
        }

        // Validate email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#email').addClass('error');
            $('#emailError').text('Please enter your email').addClass('error').show();
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#email').addClass('error');
            $('#emailError').text('Please enter a valid email address').addClass('error').show();
            isValid = false;
        } else {
            $('#email').addClass('success');
        }

        // Validate subject
        const subject = $('#subject').val();
        if (subject === '') {
            $('#subject').addClass('error');
            $('#subjectError').text('Please select a subject').addClass('error').show();
            isValid = false;
        } else {
            $('#subject').addClass('success');
        }

        // Validate message
        const message = $('#message').val().trim();
        if (message === '') {
            $('#message').addClass('error');
            $('#messageError').text('Please enter your message').addClass('error').show();
            isValid = false;
        } else if (message.length < 10) {
            $('#message').addClass('error');
            $('#messageError').text('Message must be at least 10 characters').addClass('error').show();
            isValid = false;
        } else {
            $('#message').addClass('success');
        }

        if (isValid) {
            // Simulate form submission
            setTimeout(() => {
                // Show success modal
                $('#contactSuccessModal').modal('show');

                // Show toast
                showToast('Message sent successfully!', 'success');

                // Reset form
                $('#contactForm')[0].reset();
                $('.form-control-custom').removeClass('success');

                // In a real application, you would submit the form data to a server here
                console.log('Form data:', {
                    name: name,
                    email: email,
                    phone: $('#phone').val(),
                    subject: subject,
                    message: message,
                    newsletter: $('#newsletter').is(':checked')
                });
            }, 500);
        } else {
            showToast('Please fix the errors in the form', 'error');
        }
    });

    // Real-time validation
    $('#name, #email, #subject, #message').on('input change', function () {
        const field = $(this);
        const value = field.val().trim();

        if (value !== '') {
            field.removeClass('error').addClass('success');
            field.next('.validation-message').hide();
        } else {
            field.removeClass('success');
        }
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
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
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

    // Quick link scroll to sections
    $('a[href^="#"]').click(function (e) {
        const target = $(this).attr('href');
        if (target !== '#') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 800);
        }
    });

    // Trigger initial scroll check
    $(window).trigger('scroll');
});