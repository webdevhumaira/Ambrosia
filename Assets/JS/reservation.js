// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize date picker
    initDatePicker();

    // Generate time slots
    generateTimeSlots();

    // Generate table options
    generateTableOptions();

    // Initialize guest counter
    initGuestCounter();

    // Initialize form navigation
    initFormNavigation();

    // Initialize form validation and submission
    initFormSubmission();

    // Initialize summary updates
    initSummaryUpdates();

    // Initialize other features
    initOtherFeatures();

    // Theme handled centrally in main.js
});


// Helper: tolerant selector for camelCase/kebab-case IDs
function el(selectorCamel, selectorKebab) {
    const $c = $(selectorCamel);
    if ($c.length) return $c;
    // Fallback to provided kebab or convert camelCase to kebab
    return $(selectorKebab || selectorCamel.replace(/([A-Z])/g, m => `-${m.toLowerCase()}`));
}

// Date Picker
function initDatePicker() {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 90); // 3 months in advance

    const $reservationDate = el('#reservationDate', '#reservation-date');

    $reservationDate.flatpickr({
        minDate: 'today',
        maxDate: maxDate,
        dateFormat: 'Y-m-d',
        disable: [
            function (date) {
                // Disable Mondays
                return (date.getDay() === 1);
            }
        ],
        onChange: function (selectedDates, dateStr) {
            updateTimeSlots(dateStr);
            updateSummary();
        }
    });

    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    $reservationDate.flatpickr('setDate', tomorrow);
} 

// Time Slots
function generateTimeSlots() {
    const container = el('#timeSlots', '#time-slots');
    container.empty();

    // Generate time slots from 6 PM to 10:30 PM
    const slots = [];
    for (let hour = 18; hour <= 22; hour++) {
        slots.push(`${hour}:00`);
        if (hour < 22) {
            slots.push(`${hour}:30`);
        }
    }

    // Randomly mark some slots as booked
    const bookedSlots = ['19:00', '20:30']; // Example booked slots

    slots.forEach(slot => {
        const isBooked = bookedSlots.includes(slot);
        const button = $(`
                    <button type="button" class="time-slot-btn ${isBooked ? 'booked' : ''}" 
                            data-time="${slot}" ${isBooked ? 'disabled' : ''}>
                        ${slot}
                        ${isBooked ? '<br><small class="text-muted">Booked</small>' : ''}
                    </button>
                `);

        if (!isBooked) {
            button.click(function () {
                $('.time-slot-btn').removeClass('selected');
                $(this).addClass('selected');
                el('#selectedTime', '#reservation-time').val(slot);
                updateSummary();
            });
        }

        container.append(button);
    });

    // Select first available slot
    container.find('.time-slot-btn:not(.booked)').first().click();
} 

function updateTimeSlots(dateStr) {
    // In a real application, this would fetch available slots from server
    // For demo, we'll just regenerate with random availability
    generateTimeSlots();
}

// Table Options
function generateTableOptions() {
    const container = $('#tableSelection');
    container.empty();

    const tables = [
        { id: 'table-1', type: 'standard', seats: 2, available: true },
        { id: 'table-2', type: 'standard', seats: 2, available: true },
        { id: 'table-3', type: 'standard', seats: 4, available: true },
        { id: 'table-4', type: 'booth', seats: 4, available: true },
        { id: 'table-5', type: 'window', seats: 2, available: true },
        { id: 'table-6', type: 'private', seats: 6, available: false },
        { id: 'table-7', type: 'chef', seats: 2, available: true },
        { id: 'table-8', type: 'family', seats: 8, available: true }
    ];

    tables.forEach(table => {
        const icon = getTableIcon(table.type);
        const tableItem = $(`
                    <div class="table-item ${!table.available ? 'booked' : ''}" 
                         data-table="${table.id}" 
                         data-type="${table.type}" 
                         data-seats="${table.seats}"
                         ${!table.available ? 'style="opacity:0.5;cursor:not-allowed"' : ''}>
                        <div class="table-icon">${icon}</div>
                        <h6>${table.type.charAt(0).toUpperCase() + table.type.slice(1)}</h6>
                        <small>${table.seats} seats</small>
                        ${!table.available ? '<div class="table-badge">Booked</div>' : ''}
                        ${table.available ? '<div class="table-badge" style="background:#28a745;">Available</div>' : ''}
                    </div>
                `);

        if (table.available) {
            tableItem.click(function () {
                $('.table-item').removeClass('selected');
                $(this).addClass('selected');
                $('#selectedTable').val(table.id);
                updateSummary();
            });
        }

        container.append(tableItem);
    });

    // Select first available table
    container.find('.table-item:not(.booked)').first().click();
}

function getTableIcon(type) {
    const icons = {
        'standard': '<i class="fas fa-chair"></i>',
        'booth': '<i class="fas fa-couch"></i>',
        'window': '<i class="fas fa-window-maximize"></i>',
        'private': '<i class="fas fa-user-secret"></i>',
        'chef': '<i class="fas fa-utensils"></i>',
        'family': '<i class="fas fa-users"></i>'
    };
    return icons[type] || '<i class="fas fa-chair"></i>';
}

// Guest Counter
function initGuestCounter() {
    let guestCount = 2;

    $('#increaseGuests').click(function () {
        if (guestCount < 10) {
            guestCount++;
            updateGuestCount();
        }
    });

    $('#decreaseGuests').click(function () {
        if (guestCount > 1) {
            guestCount--;
            updateGuestCount();
        }
    });

    function updateGuestCount() {
        $('#guestCount').text(guestCount);
        $('#guests').val(guestCount);

        // Update table recommendations based on guest count
        updateTableRecommendations(guestCount);
        updateSummary();
    }

    updateGuestCount();
}

function updateTableRecommendations(guests) {
    $('.table-item').each(function () {
        const seats = parseInt($(this).data('seats'));
        if (seats >= guests && seats <= guests + 2) {
            $(this).addClass('recommended');
        } else {
            $(this).removeClass('recommended');
        }
    });
}

// Form Navigation
function initFormNavigation() {
    // Next buttons (support multiple class variations)
    $('.btn-next, .btn-reservation, .next-step').click(function () {
        const nextStep = $(this).data('next') || $(this).data('step');
        goToStep(nextStep);
    });

    // Previous buttons
    $('.btn-prev, .prev-step').click(function () {
        const prevStep = $(this).data('prev') || $(this).data('step');
        goToStep(prevStep);
    });

    // Progress step clicks (support different markup)
    $('.progress-step, .step').click(function () {
        const step = $(this).data('step') || $(this).text().trim();
        goToStep(parseInt(step));
    });
} 

function goToStep(step) {
    // Validate current step before proceeding
    if (!validateStep(parseInt(step) - 1)) return;

    // Update active step
    $('.form-step').removeClass('active');
    $(`#step-${step}`).addClass('active');

    // Update progress indicators
    $('.progress-step').removeClass('active completed');
    $('.progress-step').each(function () {
        const stepNum = $(this).data('step');
        if (stepNum < step) {
            $(this).addClass('completed');
        } else if (stepNum == step) {
            $(this).addClass('active');
        }
    });

    // Scroll to top of form
    $('html, body').animate({
        scrollTop: $('.reservation-container').offset().top - 100
    }, 500);

    // Update summary when reaching confirmation step
    if (step === 4) {
        updateSummary();
    }
}

function validateStep(step) {
    switch (step) {
        case 1:
            if (!$('#reservationDate').val()) {
                showToast('Please select a date', 'error');
                return false;
            }
            if (!$('.time-slot-btn.selected').length) {
                showToast('Please select a time slot', 'error');
                return false;
            }
            break;

        case 2:
            if (!$('#fullName').val().trim()) {
                showToast('Please enter your name', 'error');
                $('#fullName').focus();
                return false;
            }
            if (!$('#phone').val().trim()) {
                showToast('Please enter your phone number', 'error');
                $('#phone').focus();
                return false;
            }
            break;

        case 3:
            if (!$('.table-item.selected').length) {
                showToast('Please select a table preference', 'error');
                return false;
            }
            break;
    }
    return true;
}

// Form Submission
function initFormSubmission() {
    const $form = el('#reservationForm', '#reservation-form');

    function processReservationSubmit(e) {
        e.preventDefault();

        // Validate terms agreement
        const $terms = el('#terms');
        if ($terms.length && !$terms.is(':checked')) {
            showToast('Please agree to the terms and conditions', 'error');
            return;
        }

        // Show success modal if present; otherwise fall back to toast
        const modalEl = document.getElementById('successModal');
        if (modalEl) {
            const successModal = new bootstrap.Modal(modalEl);
            successModal.show();
        } else {
            showToast('Reservation confirmed! You will receive a confirmation shortly.', 'success');
        }

        // Generate reservation ID
        const reservationId = 'AMB-' + new Date().getFullYear() + '-' +
            Math.random().toString(36).substr(2, 6).toUpperCase();
        el('#reservationId').text(reservationId);

        // Send confirmation (in real app, this would be server-side)
        sendConfirmation(reservationId);

        // Reset form after 5 seconds
        setTimeout(resetForm, 5000);
    }

    // Attach handler directly if form element exists, otherwise use delegated handler
    if ($form.length) {
        $form.off('submit.reservation').on('submit.reservation', processReservationSubmit);
    } else {
        $(document).off('submit.reservation', '#reservation-form, #reservationForm').on('submit.reservation', '#reservation-form, #reservationForm', processReservationSubmit);
    }

    // WhatsApp confirmation (support multiple IDs)
    $(document).off('click.whatsapp', '#whatsappConfirm, #whatsapp-reserve').on('click.whatsapp', '#whatsappConfirm, #whatsapp-reserve', function () {
        const phone = "+8801234567890";
        const name = el('#fullName', '#name').val();
        const date = el('#reservationDate', '#reservation-date').val();
        const time = $('.time-slot-btn.selected').data('time') || $('.time-slot.selected').text();
        const guests = el('#guests').val();
        const reservationId = el('#reservationId').text() || '';

        const text = `Hello, I would like to confirm my reservation at Ambrosia.\n\n` +
            `Reservation ID: ${reservationId}\n` +
            `Name: ${name}\n` +
            `Date: ${date}\n` +
            `Time: ${time}\n` +
            `Guests: ${guests}\n\n` +
            `Please confirm this reservation.`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');

        showToast('Opening WhatsApp for confirmation', 'success');
    });
} 

function sendConfirmation(reservationId) {
    // In a real application, this would send data to server
    console.log('Reservation submitted:', {
        id: reservationId,
        name: $('#fullName').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        date: $('#reservationDate').val(),
        time: $('.time-slot-btn.selected').data('time'),
        guests: $('#guests').val(),
        table: $('.table-item.selected').data('table')
    });

    showToast('Reservation confirmed! You will receive a confirmation call shortly.', 'success');
}

function resetForm() {
    // Reset form to initial state
    $('#reservationForm')[0].reset();
    goToStep(1);
    generateTimeSlots();
    generateTableOptions();
    initGuestCounter();

    // Close modal
    $('#successModal').modal('hide');
}

// Summary Updates
function initSummaryUpdates() {
    // Update summary when form changes
    $('#reservationForm').on('change input', function () {
        updateSummary();
    });

    // Initial update
    updateSummary();
}

function updateSummary() {
    // Date & Time
    const date = el('#reservationDate', '#reservation-date').val();
    const time = $('.time-slot-btn.selected').data('time');
    el('#summaryDateTime').text(date && time ? `${date} at ${time}` : 'Not selected');

    // Guests
    const guests = el('#guests').val();
    el('#summaryGuests').text(`${guests} ${guests == 1 ? 'person' : 'people'}`);

    // Name
    const name = el('#fullName', '#name').val();
    el('#summaryName').text(name || 'Not provided');

    // Phone
    const phone = el('#phone').val();
    el('#summaryPhone').text(phone || 'Not provided');

    // Occasion
    const occasion = el('#occasion').val();
    el('#summaryOccasion').text(occasion ? occasion.replace(/([A-Z])/g, ' $1').trim() : 'None');

    // Table
    const table = $('.table-item.selected').data('type');
    el('#summaryTable').text(table ? table.charAt(0).toUpperCase() + table.slice(1) : 'Standard');

    // Additional Services
    const services = [];
    if (el('#winePairing').is(':checked')) services.push('Wine Pairing');
    if (el('#flowers').is(':checked')) services.push('Flowers');
    if (el('#cake').is(':checked')) services.push('Special Cake');
    if (el('#photography').is(':checked')) services.push('Photography');
    el('#summaryServices').text(services.length > 0 ? services.join(', ') : 'None');

    // Calculate total
    let total = 0;
    if (el('#winePairing').is(':checked')) total += 25;
    if (el('#flowers').is(':checked')) total += 15;
    if (el('#cake').is(':checked')) total += 35;
    if (el('#photography').is(':checked')) total += 50;
    el('#summaryTotal').text(`$${total.toFixed(2)}`);

    // Update available tables count
    updateAvailableTables();
} 

function updateAvailableTables() {
    // Random count for demo
    const available = Math.floor(Math.random() * 15) + 5;
    $('#available-tables').text(available);
}

// Other Features
function initOtherFeatures() {
    // Ambience selection
    $('.table-item[data-ambience]').click(function () {
        $('.table-item[data-ambience]').removeClass('selected');
        $(this).addClass('selected');
        $('#ambience').val($(this).data('ambience'));
        updateSummary();
    });

    // Quick Select suggestions (sets number of guests on click)
    $('.suggestion-btn').click(function () {
        const guests = $(this).data('guests');

        // Update select or hidden input value
        if ($('#guests').length) {
            $('#guests').val(guests).trigger('change');
        }

        // Update guest display (for reservation page with counter)
        if ($('#guestCount').length) {
            $('#guestCount').text(guests);
            updateTableRecommendations(guests);
            updateSummary();
        }

        // Visual active state
        $('.suggestion-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Scroll progress
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

    // Scroll to top
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // WhatsApp button
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I need help with my reservation at Ambrosia restaurant.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // Custom cursor
    initCustomCursor();
}

function initCustomCursor() {
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
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }
}

function showToast(message, type = 'success') {
    const toast = $('#toast');
    $('#toast-message').text(message);
    toast.removeClass('success error').addClass(type).addClass('show');
    setTimeout(() => {
        toast.removeClass('show');
    }, 3000);
}

// Initialize
$(window).trigger('scroll');