$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Theme handled centrally in main.js

    // WhatsApp button click
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I would like to get a quote for an event at Ambrosia restaurant.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // Event type selection
    $('.event-type-card').click(function () {
        $('.event-type-card').removeClass('selected');
        $(this).addClass('selected');
        const eventType = $(this).data('type');
        $('#event-type').val(eventType);
    });

    // Guest range slider
    $('#guest-range').on('input', function () {
        const guests = $(this).val();
        $('#guest-value').text(guests + ' Guests');
        $('#guests').val(guests);
    });

    // Budget selection
    $('.budget-option').click(function () {
        $('.budget-option').removeClass('selected');
        $(this).addClass('selected');
        const budget = $(this).data('budget');
        $('#budget').val(budget);
    });

    // Form navigation
    let currentStep = 1;

    function updateProgress() {
        $('.progress-step').removeClass('active');
        $(`.progress-step[data-step="${currentStep}"]`).addClass('active');

        $('.form-step').removeClass('active');
        $(`#step-${currentStep}`).addClass('active');

        // Scroll to top of form
        $('html, body').animate({
            scrollTop: $('.quote-form-container').offset().top - 100
        }, 300);
    }

    // Next step 1
    $('#next-step-1').click(function () {
        // Validate step 1
        const eventType = $('#event-type').val();
        const eventDate = $('#event-date').val();
        const eventTime = $('#event-time').val();
        const budget = $('#budget').val();

        if (!eventType || !eventDate || !eventTime || !budget) {
            showToast('Please fill all required fields in Event Details', 'error');
            return;
        }

        currentStep = 2;
        updateProgress();
    });

    // Next step 2
    $('#next-step-2').click(function () {
        // Validate step 2
        const fullName = $('#full-name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();

        if (!fullName || !phone || !email) {
            showToast('Please fill all required fields in Contact Information', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Update summary
        updateSummary();

        currentStep = 3;
        updateProgress();
    });

    // Previous step 2
    $('#prev-step-2').click(function () {
        currentStep = 1;
        updateProgress();
    });

    // Previous step 3
    $('#prev-step-3').click(function () {
        currentStep = 2;
        updateProgress();
    });

    // Update summary function
    function updateSummary() {
        // Event type mapping
        const eventTypeMap = {
            'wedding': 'Wedding',
            'corporate': 'Corporate Event',
            'birthday': 'Birthday Party',
            'anniversary': 'Anniversary',
            'family': 'Family Gathering',
            'other': 'Other Event'
        };

        // Budget mapping
        const budgetMap = {
            'economy': 'Economy (Up to $2,000)',
            'standard': 'Standard ($2,000 - $5,000)',
            'premium': 'Premium ($5,000 - $10,000)',
            'luxury': 'Luxury ($10,000+)'
        };

        // Time mapping
        const timeMap = {
            'morning': 'Morning (9 AM - 12 PM)',
            'afternoon': 'Afternoon (12 PM - 4 PM)',
            'evening': 'Evening (4 PM - 8 PM)',
            'night': 'Night (8 PM - 12 AM)'
        };

        // Update summary values
        $('#summary-event-type').text(eventTypeMap[$('#event-type').val()] || 'Not selected');
        $('#summary-event-date').text($('#event-date').val() || 'Not selected');
        $('#summary-event-time').text(timeMap[$('#event-time').val()] || 'Not selected');
        $('#summary-guests').text($('#guests').val() + ' Guests');
        $('#summary-budget').text(budgetMap[$('#budget').val()] || 'Not selected');
        $('#summary-name').text($('#full-name').val() || 'Not provided');
        $('#summary-email').text($('#email').val() || 'Not provided');
        $('#summary-phone').text($('#phone').val() || 'Not provided');
    }

    // Form submission
    $('#quoteForm').submit(function (e) {
        e.preventDefault();

        // Validate terms acceptance
        if (!$('#terms').is(':checked')) {
            showToast('Please accept the terms and conditions', 'error');
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            // Hide all steps and show success message
            $('.form-step').removeClass('active');
            $('#step-success').addClass('active');

            // Show success toast
            showToast('Your quote request has been submitted successfully! We will contact you within 24 hours.', 'success');

            // Reset form after 5 seconds
            setTimeout(() => {
                // In a real application, you would submit to a server here
                console.log('Quote request submitted:', {
                    eventType: $('#event-type').val(),
                    eventDate: $('#event-date').val(),
                    eventTime: $('#event-time').val(),
                    guests: $('#guests').val(),
                    budget: $('#budget').val(),
                    name: $('#full-name').val(),
                    phone: $('#phone').val(),
                    email: $('#email').val(),
                    company: $('#company').val(),
                    address: $('#address').val(),
                    requirements: $('#requirements').val()
                });
            }, 500);
        }, 1000);
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

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    $('#event-date').attr('min', today);

    // Custom cursor (simplified)
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
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('event-type-card') || target.classList.contains('budget-option')) {
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
    });

    // Scroll to top button click
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Trigger initial scroll check
    $(window).trigger('scroll');
});