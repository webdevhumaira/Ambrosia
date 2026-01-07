// Enhanced Menu Data
const menuItems = [
    {
        id: 1,
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with black truffle and mozzarella",
        price: "$16.99",
        category: ["starters"],
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: true,
        spiceLevel: 1,
        chefRecommendation: "Our signature starter with imported black truffle"
    },
    {
        id: 2,
        name: "Wagyu Beef Steak",
        description: "Premium A5 Wagyu beef with truffle mashed potatoes",
        price: "$89.99",
        category: ["main"],
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: true,
        spiceLevel: 2,
        chefRecommendation: "Japanese A5 grade Wagyu, aged for 30 days"
    },
    {
        id: 3,
        name: "Truffle Risotto",
        description: "Carnaroli rice with black truffle and Parmigiano-Reggiano",
        price: "$28.99",
        category: ["main", "veg"],
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: false,
        spiceLevel: 1,
        chefRecommendation: "Made with imported Italian Carnaroli rice"
    },
    {
        id: 4,
        name: "Signature Mocktail",
        description: "A refreshing blend of seasonal fruits and herbs",
        price: "$12.99",
        category: ["drinks", "veg"],
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: false,
        spiceLevel: 0,
        chefRecommendation: "Perfect pairing with any dish"
    },
    {
        id: 5,
        name: "Chocolate Soufflé",
        description: "Decadent chocolate soufflé with vanilla bean ice cream",
        price: "$18.99",
        category: ["desserts", "veg"],
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: true,
        spiceLevel: 0,
        chefRecommendation: "Baked to order, requires 20 minutes preparation"
    },
    {
        id: 6,
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy white wine sauce",
        price: "$65.99",
        category: ["main"],
        image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: false,
        spiceLevel: 2,
        chefRecommendation: "Live Maine lobster, prepared tableside"
    },
    {
        id: 7,
        name: "Burrata Salad",
        description: "Fresh burrata with heirloom tomatoes and basil pesto",
        price: "$22.99",
        category: ["starters", "veg"],
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: false,
        spiceLevel: 1,
        chefRecommendation: "Made with imported Italian burrata"
    },
    {
        id: 8,
        name: "Spicy Tuna Tartare",
        description: "Fresh tuna with avocado, chili, and lime",
        price: "$24.99",
        category: ["starters", "spicy"],
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        badge: true,
        spiceLevel: 4,
        chefRecommendation: "Sashimi-grade tuna, prepared fresh daily"
    }
];

// Gallery Data with categories
const galleryItems = [
    {
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        title: "Chef's Special Platter",
        category: "food"
    },
    {
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Restaurant Interior",
        category: "interior"
    },
    {
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Live Cooking Station",
        category: "events"
    },
    {
        image: "https://images.unsplash.com/photo-1559314809-2b99056a8c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Dessert Counter",
        category: "food"
    },
    {
        image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Private Dining Area",
        category: "interior"
    },
    {
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Gourmet Presentation",
        category: "food"
    }
];

// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Initialize custom cursor
    initCustomCursor();

    // Initialize menu
    loadMenuItems();

    // Initialize gallery
    loadGallery();

    // Set min date for reservation to today
    const today = new Date().toISOString().split('T')[0];
    $('#reservation-date').attr('min', today);

    // Generate time slots
    generateTimeSlots();

    // Hero text animation
    setTimeout(() => {
        $('#highlight-text').addClass('animate');
    }, 500);

    // Scroll progress bar
    $(window).on('scroll', function () {
        // Progress bar
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

    // Menu filter functionality
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');

        if (filter === 'all') {
            $('.menu-card').fadeIn(400);
        } else {
            $('.menu-card').each(function () {
                if ($(this).data('category').includes(filter)) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        }
    });

    // Menu search functionality
    $('#menu-search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        if (searchTerm === '') {
            $('.menu-card').fadeIn(400);
        } else {
            $('.menu-card').each(function () {
                const dishName = $(this).find('.menu-title h4').text().toLowerCase();
                const dishDesc = $(this).find('p').text().toLowerCase();

                if (dishName.includes(searchTerm) || dishDesc.includes(searchTerm)) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        }
    });

    // Reservation form step navigation
    $('.next-step').click(function () {
        const nextStep = $(this).data('step');
        goToStep(nextStep);
    });

    $('.prev-step').click(function () {
        const prevStep = $(this).data('step');
        goToStep(prevStep);
    });

    // Guest suggestion buttons
    $('.suggestion-btn').click(function () {
        const guests = $(this).data('guests');
        $('#guests').val(guests);
        showToast('Guest count set to ' + guests + ' people');
    });

    // Update reservation summary
    $('#reservation-form').on('input change', function () {
        updateReservationSummary();
    });

    // Form submission
    $('#reservation-form').submit(function (e) {
        e.preventDefault();

        // Show success modal
        $('#reservationModal').modal('show');

        // Show toast
        showToast('Reservation confirmed successfully!', 'success');

        // Reset form
        setTimeout(() => {
            $('#reservation-form')[0].reset();
            goToStep(1);
            generateTimeSlots();
        }, 2000);
    });

    // WhatsApp button click
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I would like to make a reservation at Ambrosia restaurant.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // WhatsApp reservation confirmation
    $('#whatsapp-reserve').click(function () {
        const phone = "+8801234567890";
        const name = $('#name').val() || 'Customer';
        const date = $('#reservation-date').val() || 'unknown date';
        const time = $('#reservation-time').val() || 'unknown time';
        const guests = $('#guests').val() || 'unknown number';

        const text = `Hello, I would like to confirm my reservation at Ambrosia.\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');

        showToast('Opening WhatsApp for confirmation', 'success');
    });

    // Download menu button
    $('#download-menu').click(function (e) {
        e.preventDefault();
        showToast('Downloading full menu PDF...', 'success');
        // In a real implementation, this would link to a PDF file
    });

    // Book event button
    $('#book-event').click(function () {
        $('html, body').animate({
            scrollTop: $('#reservation').offset().top
        }, 800);

        // Set date to event date
        const eventDate = '2023-12-15';
        $('#reservation-date').val(eventDate);
        goToStep(1);

        showToast('Event date selected. Please choose your time slot.', 'success');
    });

    // Floating reserve button
    $('#floating-reserve').click(function () {
        $('html, body').animate({
            scrollTop: $('#reservation').offset().top
        }, 800);
    });

    // Theme toggle
    $('#theme-toggle').click(function () {
        $('body').toggleClass('light-mode');
        const icon = $(this).find('i');

        if ($('body').hasClass('light-mode')) {
            icon.removeClass('fa-moon').addClass('fa-sun');
            showToast('Light mode activated', 'success');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
            showToast('Dark mode activated', 'success');
        }

        // Save theme preference
        localStorage.setItem('theme', $('body').hasClass('light-mode') ? 'light' : 'dark');
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        $('body').addClass('light-mode');
        $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
    }

    // Video toggle
    $('#video-toggle').click(function () {
        const video = $('#hero-video')[0];
        const icon = $(this).find('i');

        if (video.paused) {
            video.play();
            icon.removeClass('fa-play').addClass('fa-pause');
            $(this).html('<i class="fas fa-pause me-2"></i> Pause Ambience Video');
        } else {
            video.pause();
            icon.removeClass('fa-pause').addClass('fa-play');
            $(this).html('<i class="fas fa-play me-2"></i> Play Ambience Video');
        }
    });

    // Gallery filter
    $('.gallery-filter-btn').click(function () {
        $('.gallery-filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');

        if (filter === 'instagram') {
            $('#instagram-preview').addClass('show');
        } else if (filter === 'all') {
            $('.gallery-item').fadeIn(400);
        } else {
            $('.gallery-item').each(function () {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        }
    });

    // Close Instagram preview
    $('#close-instagram').click(function () {
        $('#instagram-preview').removeClass('show');
    });

    // Submit review button
    $('#submit-review-btn').click(function () {
        showToast('Opening review submission form...', 'success');
        // In a real implementation, this would open a review modal or redirect to Google reviews
    });

    // Initialize countdown timer
    initializeCountdown();

    // Initialize counter animation
    initializeCounters();

    // Update opening status
    updateOpeningStatus();

    // Trigger scroll event to check initial state
    $(window).trigger('scroll');
});

// Initialize custom cursor
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.innerWidth > 768) { // Only enable on larger screens
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
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
                cursorDot.style.width = '16px';
                cursorDot.style.height = '16px';
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.borderColor = 'var(--accent)';
            } else {
                cursorDot.style.width = '8px';
                cursorDot.style.height = '8px';
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.borderColor = 'var(--secondary)';
            }
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }
}

// Load menu items with enhanced features
function loadMenuItems() {
    const menuContainer = $('#menu-items');

    menuItems.forEach(item => {
        const categories = item.category.join(' ');
        const badge = item.badge ? `<span class="chef-badge"><i class="fas fa-star me-1"></i> Chef's Special</span>` : '';

        // Create spice level indicator
        let spiceLevelHtml = '';
        if (item.spiceLevel > 0) {
            spiceLevelHtml = `<div class="spice-level">`;
            for (let i = 0; i < 5; i++) {
                spiceLevelHtml += `<div class="spice-dot ${i < item.spiceLevel ? 'active' : ''}"></div>`;
            }
            spiceLevelHtml += `<span class="ms-2">${item.spiceLevel}/5 spicy</span>`;
            spiceLevelHtml += `</div>`;
        }

        // Chef recommendation tooltip
        const tooltip = item.chefRecommendation ?
            `<div class="chef-tooltip">${item.chefRecommendation}</div>` : '';

        const menuItem = `
                    <div class="col-lg-3 col-md-6 menu-card" data-category="${categories}">
                        ${badge}
                        ${tooltip}
                        <div class="menu-card-icons">
                            <div class="fav-icon" data-id="${item.id}">
                                <i class="far fa-heart"></i>
                            </div>
                            ${item.spiceLevel > 0 ? `<div class="spice-icon" title="Spice Level: ${item.spiceLevel}/5">
                                <i class="fas fa-pepper-hot"></i>
                            </div>` : ''}
                        </div>
                        <div class="menu-img-container">
                            <img src="${item.image}" class="menu-img" alt="${item.name}">
                        </div>
                        <div class="menu-content">
                            <div class="menu-title">
                                <h4>${item.name}</h4>
                                <span class="price">${item.price}</span>
                            </div>
                            <p>${item.description}</p>
                            ${spiceLevelHtml}
                        </div>
                    </div>
                `;

        menuContainer.append(menuItem);
    });

    // Add event listeners to favorite icons
    $('.fav-icon').click(function () {
        const icon = $(this).find('i');
        const itemId = $(this).data('id');

        if ($(this).hasClass('active')) {
            icon.removeClass('fas fa-heart').addClass('far fa-heart');
            $(this).removeClass('active');
            showToast('Removed from favorites');
        } else {
            icon.removeClass('far fa-heart').addClass('fas fa-heart');
            $(this).addClass('active');
            showToast('Added to favorites', 'success');
        }

        // Save favorite state to localStorage
        const favorites = JSON.parse(localStorage.getItem('menuFavorites') || '{}');
        favorites[itemId] = $(this).hasClass('active');
        localStorage.setItem('menuFavorites', JSON.stringify(favorites));
    });

    // Load saved favorites
    const favorites = JSON.parse(localStorage.getItem('menuFavorites') || '{}');
    Object.keys(favorites).forEach(id => {
        if (favorites[id]) {
            $(`.fav-icon[data-id="${id}"]`).addClass('active').find('i').removeClass('far fa-heart').addClass('fas fa-heart');
        }
    });
}

// Load gallery with categories
function loadGallery() {
    const galleryContainer = $('#gallery-items');

    galleryItems.forEach(item => {
        const galleryItem = `
                    <div class="col-lg-4 col-md-6 gallery-item" data-category="${item.category}">
                        <a href="${item.image}" data-lightbox="gallery" data-title="${item.title}">
                            <img src="${item.image}" class="gallery-img" alt="${item.title}">
                            <div class="gallery-overlay">
                                <div>
                                    <h5>${item.title}</h5>
                                    <p class="mb-0">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `;

        galleryContainer.append(galleryItem);
    });

    // Initialize lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300
    });
}

// Generate time slots for reservation
function generateTimeSlots() {
    const timeSlotsContainer = $('#time-slots');
    timeSlotsContainer.empty();

    const timeSlots = [
        { time: '18:00', booked: false },
        { time: '18:30', booked: false },
        { time: '19:00', booked: true }, // Example of booked slot
        { time: '19:30', booked: false },
        { time: '20:00', booked: false },
        { time: '20:30', booked: true }, // Example of booked slot
        { time: '21:00', booked: false },
        { time: '21:30', booked: false }
    ];

    timeSlots.forEach(slot => {
        const timeSlot = $(`<div class="time-slot ${slot.booked ? 'booked' : ''}">${slot.time}</div>`);

        if (!slot.booked) {
            timeSlot.click(function () {
                $('.time-slot').removeClass('selected');
                $(this).addClass('selected');
                $('#reservation-time').val(slot.time);
            });
        }

        timeSlotsContainer.append(timeSlot);
    });
}

// Reservation form step navigation
function goToStep(step) {
    $('.form-step').removeClass('active');
    $(`#step-${step}`).addClass('active');

    $('.step').removeClass('active');
    $(`.step:nth-child(${step})`).addClass('active');

    // Scroll to form
    if (step > 1) {
        $('html, body').animate({
            scrollTop: $('#reservation-form').offset().top - 100
        }, 500);
    }
}

// Update reservation summary
function updateReservationSummary() {
    const date = $('#reservation-date').val();
    const time = $('#reservation-time').val();
    const guests = $('#guests').val();
    const name = $('#name').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const requests = $('#special-requests').val();

    let summaryHTML = `
                <p><strong>Date:</strong> ${date || 'Not selected'}</p>
                <p><strong>Time:</strong> ${time || 'Not selected'}</p>
                <p><strong>Guests:</strong> ${guests || 'Not selected'}</p>
                <p><strong>Name:</strong> ${name || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            `;

    if (email) {
        summaryHTML += `<p><strong>Email:</strong> ${email}</p>`;
    }

    if (requests) {
        summaryHTML += `<p><strong>Special Requests:</strong> ${requests}</p>`;
    }

    $('#reservation-summary').html(summaryHTML);
}

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

// Initialize countdown timer
function initializeCountdown() {
    // Set the date we're counting down to (December 15, 2023)
    const countDownDate = new Date("Dec 15, 2023 19:00:00").getTime();

    // Update the count down every 1 second
    const countdownFunction = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        $('#days').text(days.toString().padStart(2, '0'));
        $('#hours').text(hours.toString().padStart(2, '0'));
        $('#minutes').text(minutes.toString().padStart(2, '0'));
        $('#seconds').text(seconds.toString().padStart(2, '0'));

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            $('#event-countdown').html("<h4 class='text-secondary'>Event has started!</h4>");
        }
    }, 1000);
}

// Initialize counters with animation
function initializeCounters() {
    $('.counter-item').each(function () {
        $(this).css('opacity', '0');
    });

    // Animate counters when in view
    $(window).on('scroll', function () {
        $('.counter-item').each(function () {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowTop = $(window).scrollTop();

            if (elementTop < windowTop + $(window).height() - elementVisible) {
                $(this).css('opacity', '1');

                const counter = $(this).find('.counter');
                const target = parseInt(counter.data('count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (current > target) current = target;
                        counter.text(Math.floor(current));
                        setTimeout(updateCounter, 16);
                    } else {
                        counter.text(target);
                    }
                };

                updateCounter();
            }
        });
    });
}

// Update opening status
function updateOpeningStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Restaurant hours: 11 AM - 11 PM
    const openHour = 11;
    const closeHour = 23;

    let statusText = '';
    let statusClass = '';

    if (currentHour >= openHour && currentHour < closeHour) {
        statusText = 'Open Now • Closes at 11:00 PM';
        statusClass = 'status-open';
    } else {
        statusText = 'Closed Now • Opens at 11:00 AM';
        statusClass = 'status-closed';
    }

    $('#opening-status-text').text(statusText);
    $('#current-status').text(statusText.split('•')[0].trim());
    $('#current-status').removeClass('status-open status-closed').addClass(statusClass);
}

// WhatsApp confirmation button
$('#whatsapp-confirm').click(function () {
    const phone = "+8801234567890";
    const text = "Hello, I would like to confirm my reservation at Ambrosia restaurant.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    $('#reservationModal').modal('hide');
});