/**********************
 * ENHANCED MENU DATA *
 **********************/

// const menuItems = [
//     {
//         id: 1,
//         name: "Truffle Arancini",
//         description: "Crispy risotto balls filled with black truffle and mozzarella",
//         price: "$16.99",
//         category: ["starters"],
//         image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: true,
//         spiceLevel: 1,
//         sweetLevel: 0,
//     },
//     {
//         id: 2,
//         name: "Wagyu Beef Steak",
//         description: "Premium A5 Wagyu beef with truffle mashed potatoes",
//         price: "$89.99",
//         category: ["main"],
//         image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: true,
//         spiceLevel: 2,
//         sweetLevel: 0,
//     },
//     {
//         id: 3,
//         name: "Truffle Risotto",
//         description: "Carnaroli rice with black truffle and Parmigiano-Reggiano",
//         price: "$28.99",
//         category: ["main", "veg"],
//         image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 1,
//         sweetLevel: 0,
//     },
//     {
//         id: 4,
//         name: "Signature Mocktail",
//         description: "A refreshing blend of seasonal fruits and herbs",
//         price: "$12.99",
//         category: ["drinks", "veg"],
//         image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 0,
//         sweetLevel: 3,
//     },
//     {
//         id: 5,
//         name: "Chocolate Soufflé",
//         description: "Decadent chocolate soufflé with vanilla bean ice cream",
//         price: "$18.99",
//         category: ["desserts", "veg"],
//         image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: true,
//         spiceLevel: 0,
//         sweetLevel: 5,
//     },
//     {
//         id: 6,
//         name: "Lobster Thermidor",
//         description: "Fresh lobster in creamy white wine sauce",
//         price: "$65.99",
//         category: ["main"],
//         image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 2,
//         sweetLevel: 0,
//     },
//     {
//         id: 7,
//         name: "Burrata Salad",
//         description: "Fresh burrata with heirloom tomatoes and basil pesto",
//         price: "$22.99",
//         category: ["starters", "veg"],
//         image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 1,
//         sweetLevel: 0,
//     },
//     {
//         id: 8,
//         name: "Spicy Tuna Tartare",
//         description: "Fresh tuna with avocado, chili, and lime",
//         price: "$24.99",
//         category: ["starters", "spicy"],
//         image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: true,
//         spiceLevel: 4,
//         sweetLevel: 0,
//     },
//     {
//         id: 9,
//         name: "Tiramisu",
//         description: "Classic Italian dessert with coffee-soaked ladyfingers",
//         price: "$14.99",
//         category: ["desserts", "veg"],
//         image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 0,
//         sweetLevel: 4,
//     },
//     {
//         id: 10,
//         name: "Mango Sticky Rice",
//         description: "Thai dessert with sweet mango and coconut rice",
//         price: "$12.99",
//         category: ["desserts", "veg"],
//         image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//         badge: true,
//         spiceLevel: 0,
//         sweetLevel: 5,
//     },
//     {
//         id: 11,
//         name: "Special Chimni",
//         description: "Fresh lobster in creamy white wine sauce",
//         price: "$65.99",
//         category: ["main"],
//         image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 2,
//         sweetLevel: 0,
//     },
//     {
//         id: 12,
//         name: "Burrata Salad",
//         description: "Fresh burrata with heirloom tomatoes and basil pesto",
//         price: "$22.99",
//         category: ["starters", "veg"],
//         image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//         badge: false,
//         spiceLevel: 0,
//         sweetLevel: 2,
//     }
// ];



/********************************
 * GALLERY DATA WITH CATEGORIES *
 ********************************/

const galleryItems = [
    {
        image: "Assets/Images/Gallery-1.jpg",
        title: "Ambrosia Interior",
        category: "interior"
    },
    {
        image: "Assets/Images/Gallery-7.jpg",
        title: "Food Item",
        category: "food"
    },
    {
        image: "Assets/Images/footer.webp",
        title: "Family Dining",
        category: "events"
    },
    {
        image: "Assets/Images/Gallery-19.jpg",
        title: "Entertainment Moments",
        category: "interior"
    },
    {
        image: "Assets/Images/Gallery-10.jpg",
        title: "Serving Area",
        category: "food"
    },
    {
        image: "Assets/Images/Gallery-13.jpg",
        title: "Events Presentation",
        category: "events"
    }
];



/*************************************
 * INITIALIZE WHEN DOCUMENT IS READY *
 *************************************/

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

    // Initialize animations
    initAnimations();

    // Initialize nav search
    initSearch();

    // Generate time slots
    generateTimeSlots();

    // Initialize countdown timer
    initializeCountdown();

    // Initialize counter animation
    initializeCounters();

    // Update opening status
    updateOpeningStatus();

    // Initialize cuisine sliders
    initCuisineSliders();

    // Load cuisine data
    loadCuisineData();

    // Trigger scroll event to check initial state
    $(window).trigger('scroll');

    // Set min date for reservation to today
    const today = new Date().toISOString().split('T')[0];
    $('#reservation-date').attr('min', today);

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
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    // Menu filter functionality
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');

        if (filter === 'all') {
            $('.menu-card').fadeIn(400);
        } else if (filter === 'spicy') {
            $('.menu-card').each(function () {
                const spiceLevel = parseInt($(this).data('spice')) || 0;
                if (spiceLevel > 0) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        } else if (filter === 'sweet') {
            $('.menu-card').each(function () {
                const sweetLevel = parseInt($(this).data('sweet')) || 0;
                if (sweetLevel > 0) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
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

                // Also search for sweet/spice terms
                const isSweet = dishName.includes('sweet') || dishDesc.includes('sweet') ||
                    dishName.includes('dessert') || dishDesc.includes('dessert') ||
                    dishName.includes('chocolate') || dishDesc.includes('chocolate');
                const isSpicy = dishName.includes('spicy') || dishDesc.includes('spicy') ||
                    dishName.includes('chili') || dishDesc.includes('chili');

                if (dishName.includes(searchTerm) || dishDesc.includes(searchTerm) ||
                    (searchTerm.includes('sweet') && isSweet) ||
                    (searchTerm.includes('spicy') && isSpicy)) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        }
    });

    // Quick Select suggestions (index page reservation section)
    $('.suggestion-btn').click(function () {
        const guests = $(this).data('guests');
        if ($('#guests').length) {
            $('#guests').val(guests).trigger('change');
        }
        // If the compact guest counter exists, update it too
        if ($('#guestCount').length) {
            $('#guestCount').text(guests);
            if (typeof updateTableRecommendations === 'function') {
                updateTableRecommendations(guests);
            }
        }
        $('.suggestion-btn').removeClass('active');
        $(this).addClass('active');
    });

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

    // Next / Previous step handlers for index reservation section
    $(document).on('click', '.next-step', function () {
        const target = parseInt($(this).data('step'));
        const current = parseInt($('.form-step.active').attr('id')?.split('-')[1] || 1);

        // Step 1 validation
        if (current === 1) {
            if (!$('#reservation-date').val()) {
                showToast('Please select a date', 'error');
                return;
            }
            if (!$('.time-slot.selected').length) {
                showToast('Please select a time slot', 'error');
                return;
            }
            if (!$('#guests').val()) {
                showToast('Please choose number of guests', 'error');
                return;
            }
        }

        // Step 2 validation and update
        if (current === 2) {
            if (!$('#name').val().trim()) {
                showToast('Please enter your name', 'error');
                $('#name').focus();
                return;
            }
            if (!$('#phone').val().trim()) {
                showToast('Please enter your phone number', 'error');
                $('#phone').focus();
                return;
            }
            updateReservationSummary();
        }

        goToStep(target);
    });

    $(document).on('click', '.prev-step', function () {
        const target = parseInt($(this).data('step'));
        goToStep(target);
    });

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


    // Quick navigation smooth scroll
    $('.quick-nav-item').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

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
});




/****************************
 * INITIALIZE CUSTOM CURSOR *
 ****************************/

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



/******************************************
 * LOAD MENU ITEMS WITH ENHANCED FEATURES *
 ******************************************/

function loadMenuItems() {
    const menuContainer = $('#menu-items');
    menuContainer.empty(); // Clear existing items

    menuItems.forEach(item => {
        const categories = item.category.join(' ');

        // Chef's Special Ribbon
        const chefBadge = item.badge ? `
            <div class="chef-ribbon">
                <div class="chef-ribbon-content">
                    <i class="fas fa-star"></i> Chef's Pick
                </div>
            </div>
        ` : '';

        // Chef recommendation tooltip
        const tooltip = item.chefRecommendation ?
            `<div class="chef-recommendation-tooltip">${item.chefRecommendation}</div>` : '';

        // Create spice level indicator
        let spiceLevelHtml = '';
        if (item.spiceLevel > 0) {
            spiceLevelHtml = `
                <div class="level-indicator-row">
                    <span class="level-label">Spice:</span>
                    <div class="spice-level">
            `;
            for (let i = 0; i < 5; i++) {
                spiceLevelHtml += `<div class="spice-dot ${i < item.spiceLevel ? 'active' : ''}"></div>`;
            }
            spiceLevelHtml += `
                        <span class="ms-2">${item.spiceLevel}/5</span>
                    </div>
                </div>
            `;
        }

        // Create sweet level indicator (NEW)
        let sweetLevelHtml = '';
        if (item.sweetLevel > 0) {
            sweetLevelHtml = `
                <div class="level-indicator-row">
                    <span class="level-label">Sweet:</span>
                    <div class="sweet-level">
            `;
            for (let i = 0; i < 5; i++) {
                sweetLevelHtml += `<div class="sweet-dot ${i < item.sweetLevel ? 'active' : ''}"></div>`;
            }
            sweetLevelHtml += `
                        <span class="ms-2">${item.sweetLevel}/5</span>
                    </div>
                </div>
            `;
        }

        // Determine which icons to show
        let cardIcons = '<div class="menu-card-icons">';
        cardIcons += `<div class="fav-icon" data-id="${item.id}"><i class="far fa-heart"></i></div>`;

        if (item.spiceLevel > 0) {
            cardIcons += `<div class="spice-icon" title="Spice Level: ${item.spiceLevel}/5"><i class="fas fa-pepper-hot"></i></div>`;
        }

        if (item.sweetLevel > 0) {
            cardIcons += `<div class="sweet-icon" title="Sweet Level: ${item.sweetLevel}/5"><i class="fas fa-candy-cane"></i>`;
            cardIcons += `<div class="sweet-tooltip">Sweetness: ${item.sweetLevel}/5</div></div>`;
        }

        cardIcons += '</div>';

        // Alternative: Combined level display
        const combinedLevels = `
            ${item.spiceLevel > 0 || item.sweetLevel > 0 ? `
                <div class="combined-level">
                    ${item.spiceLevel > 0 ? `
                        <div class="level-container">
                            <span class="level-name">🌶️ Spicy:</span>
                            <span class="level-value spicy">${item.spiceLevel}/5</span>
                        </div>
                    ` : ''}
                    ${item.sweetLevel > 0 ? `
                        <div class="level-container">
                            <span class="level-name">🍭 Sweet:</span>
                            <span class="level-value sweet">${item.sweetLevel}/5</span>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        `;

        const menuItem = `
            <div class="col-lg-3 col-md-6 menu-card" data-category="${categories}" data-spice="${item.spiceLevel}" data-sweet="${item.sweetLevel}">
                ${chefBadge}
                ${tooltip}
                ${cardIcons}
                <div class="menu-img-container">
                    <img src="${item.image}" class="menu-img" alt="${item.name}">
                </div>
                <div class="menu-content">
                    <div class="menu-title">
                        <h4>${item.name}</h4>
                        <span class="price">${item.price}</span>
                    </div>
                    <p>${item.description}</p>
                    
                    <!-- Option 1: Separate spice/sweet indicators -->
                    ${spiceLevelHtml || sweetLevelHtml ? `
                        <div class="level-indicators">
                            ${spiceLevelHtml}
                            ${sweetLevelHtml}
                        </div>
                    ` : ''}
                    
                    <!-- Option 2: Combined level display (choose one) -->
                    <!-- ${combinedLevels} -->
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



/********************************
 * LOAD GALLERY WITH CATEGORIES *
 ********************************/

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



/***************************************
 * GENERATE TIME SLOTS FOR RESERVATION *
 ***************************************/

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



/************************************
 * RESERVATION FORM STEP NAVIGATION *
 ************************************/

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



/******************************
 * UPDATE RESERVATION SUMMARY *
 ******************************/

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



/***************************
 * SHOW TOAST NOTIFICATION *
 ***************************/

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



/******************************
 * INITIALIZE COUNTDOWN TIMER *
 ******************************/

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



/**************************************
 * INITIALIZE COUNTERS WITH ANIMATION *
 **************************************/

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


/*************************
 * UPDATE OPENING STATUS *
 *************************/

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


/********************************
 * WHATSAPP CONFIRMATION BUTTON *
 ********************************/

$('#whatsapp-confirm').click(function () {
    const phone = "+8801234567890";
    const text = "Hello, I would like to confirm my reservation at Ambrosia restaurant.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    $('#reservationModal').modal('hide');
});



/*********************************
 * INITIALIZE VIDEO TESTIMONIALS *
 *********************************/

function initVideoTestimonials() {
    $('.video-testimonial').each(function () {
        const video = $(this).find('video')[0];
        const playBtn = $(this).find('.play-btn');

        // Mute and set volume for auto-play
        video.muted = true;
        video.volume = 0;

        // Auto-play on hover
        $(this).hover(
            function () {
                video.play();
            },
            function () {
                video.pause();
            }
        );

        // Play/pause on click
        playBtn.click(function (e) {
            e.stopPropagation();
            if (video.paused) {
                video.play();
                $(this).html('<i class="fas fa-pause"></i>');
            } else {
                video.pause();
                $(this).html('<i class="fas fa-play"></i>');
            }
        });
    });
}



/***********************************
 * INITIALIZE SEARCH FUNCTIONALITY *
 ***********************************/

function initSearch() {
    $('#nav-search-btn').click(function () {
        $('#nav-search-box').toggleClass('show');
        if ($('#nav-search-box').hasClass('show')) {
            $('#global-search').focus();
        }
    });

    $('.search-close').click(function () {
        $('#nav-search-box').removeClass('show');
    });

    // Global search functionality
    $('#global-search').on('input', function () {
        const term = $(this).val().toLowerCase();

        if (term.length > 2) {
            // Search in menu items
            $('.menu-card').each(function () {
                const name = $(this).find('.menu-title h4').text().toLowerCase();
                const desc = $(this).find('p').text().toLowerCase();

                if (name.includes(term) || desc.includes(term)) {
                    $(this).addClass('search-highlight');
                    // Scroll to menu section
                    $('html, body').animate({
                        scrollTop: $('#menu').offset().top - 100
                    }, 500);
                } else {
                    $(this).removeClass('search-highlight');
                }
            });

            // Search in chefs
            $('.chef-card').each(function () {
                const name = $(this).find('h4').text().toLowerCase();
                const specialty = $(this).find('p:contains("Specialty")').text().toLowerCase();

                if (name.includes(term) || specialty.includes(term)) {
                    $(this).addClass('search-highlight');
                    // Scroll to chefs section
                    $('html, body').animate({
                        scrollTop: $('#chefs').offset().top - 100
                    }, 500);
                } else {
                    $(this).removeClass('search-highlight');
                }
            });
        } else {
            $('.search-highlight').removeClass('search-highlight');
        }
    });
}


/***********************
 * INITIALIZE WISHLIST *
 ***********************/

function initWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];

    // Update wishlist count
    function updateWishlistCount() {
        $('.wishlist-count').text(wishlist.length);
    }

    // Add to wishlist functionality for menu items
    $(document).on('click', '.fav-icon', function () {
        const card = $(this).closest('.menu-card');
        const itemId = card.data('id');
        const itemName = card.find('.menu-title h4').text();
        const itemPrice = card.find('.price').text();
        const itemImg = card.find('.menu-img').attr('src');

        // Check if already in wishlist
        const existingIndex = wishlist.findIndex(item => item.id === itemId);

        if (existingIndex === -1) {
            // Add to wishlist
            wishlist.push({
                id: itemId,
                name: itemName,
                price: itemPrice,
                image: itemImg
            });

            showToast(`${itemName} added to wishlist`, 'success');
        } else {
            // Remove from wishlist
            wishlist.splice(existingIndex, 1);
            showToast(`${itemName} removed from wishlist`);
        }

        // Save to localStorage
        localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
        updateWishlistCount();

        // Update icon
        const icon = $(this).find('i');
        if (icon.hasClass('far')) {
            icon.removeClass('far').addClass('fas');
        } else {
            icon.removeClass('fas').addClass('far');
        }
    });

    // Load saved wishlist state
    wishlist.forEach(item => {
        $(`.menu-card[data-id="${item.id}"] .fav-icon`).addClass('active').find('i').removeClass('far').addClass('fas');
    });

    updateWishlistCount();

    // Wishlist modal
    $('.wishlist-icon').click(function (e) {
        e.preventDefault();
        $('#wishlistModal').modal('show');
        displayWishlistItems();
    });
}

// Display wishlist items in modal
function displayWishlistItems() {
    const container = $('#wishlist-items');
    const wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];

    container.empty();

    if (wishlist.length === 0) {
        container.html('<p class="text-center" id="empty-wishlist">Your wishlist is empty</p>');
        return;
    }

    wishlist.forEach(item => {
        const itemHtml = `
            <div class="wishlist-item d-flex align-items-center mb-3 p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px;">
                <img src="${item.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; margin-right: 15px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <p class="mb-0 text-secondary">${item.price}</p>
                </div>
                <button class="btn btn-sm btn-danger remove-wishlist" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        container.append(itemHtml);
    });

    // Add remove functionality
    $('.remove-wishlist').click(function () {
        const itemId = $(this).data('id');
        let wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
        wishlist = wishlist.filter(item => item.id !== itemId);
        localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
        displayWishlistItems();
        updateWishlistCount();

        // Update icon on menu card
        $(`.menu-card[data-id="${itemId}"] .fav-icon`).removeClass('active').find('i').removeClass('fas').addClass('far');
    });
}


/******************************
 * UPDATE LIVE OPENING STATUS *
 ******************************/

function updateLiveStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let status = 'Open Now';
    let statusClass = 'status-open';

    // Sunday to Thursday: 11 AM - 10 PM
    // Friday to Saturday: 11 AM - 11 PM
    const isWeekend = day === 5 || day === 6; // Friday = 5, Saturday = 6

    if (isWeekend) {
        if (hour < 11 || hour >= 23) {
            status = 'Closed Now';
            statusClass = 'status-closed';
        }
    } else {
        if (hour < 11 || hour >= 22) {
            status = 'Closed Now';
            statusClass = 'status-closed';
        }
    }

    // Update status in FAQ section
    $('#live-status').text(status).removeClass('status-open status-closed').addClass(statusClass);

    // Update table availability
    const availableTables = Math.floor(Math.random() * 20) + 5; // Random 5-25 tables
    $('#available-tables').text(availableTables);

    // Update every minute
    setTimeout(updateLiveStatus, 60000);
}



/**************************
 * ADD CLICK SOUND EFFECT *
 **************************/

function playClickSound() {
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
        audio.volume = 0.1;
        audio.play();
    } catch (e) {
        console.log('Sound playback not supported');
    }
}

// Add vibration on click (mobile only)
function vibrateOnClick() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}



/***************************************
 * APPLY MICRO-INTERACTIONS TO BUTTONS *
 ***************************************/

$(document).on('click', 'button, .btn, a[href^="#"]', function (e) {
    playClickSound();
    vibrateOnClick();

    // Add ripple effect
    const ripple = $('<span class="ripple"></span>');
    const posX = e.pageX - $(this).offset().left;
    const posY = e.pageY - $(this).offset().top;

    ripple.css({
        left: posX,
        top: posY
    });

    $(this).append(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});



/**************
 * ANIMATIONS *
 **************/

function initAnimations() {
    // Check if elements are in viewport
    function checkScroll() {
        $('.fade-in').each(function () {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowTop = $(window).scrollTop();

            if (elementTop < windowTop + $(window).height() - elementVisible) {
                $(this).addClass('visible');
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll
    $(window).on('scroll', checkScroll);
}







/**********************************
 * CUISINE SLIDER FUNCTIONALITY *
 **********************************/

// Cuisine Data (Based on your provided menu)
const cuisineData = {
    // Thai Cuisine
    "thai-appetizers": [
        {
            id: 1001,
            name: "Fried Prawn (Goong Tod) - 8Pcs",
            price: "Tk. 790",
            description: "DEEP FRIED SEA FRESH PRAWN COOKING WITH BREAD CRUMP SERVED WITH PALM SAUCE",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "8 Pieces",
            spiceLevel: 2
        },
        {
            id: 1002,
            name: "Prawn Cake (Todmin Goong) - 6Pcs",
            price: "Tk. 820",
            description: "CHOPED GOLDEN PRAWN MIXED WITH THAI SPICY SERVED WITH SWEET & SOUR SAUCE",
            image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "6 Pieces",
            spiceLevel: 3
        },
        {
            id: 1003,
            name: "Stick Golden Prawn (Stay Goong) - 8Pcs",
            price: "Tk. 830",
            description: "GRILLED STICK GOLDEN PRAWN SERVED WITH CUCUMBER & PEANUT SAUCE",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "8 Pieces",
            spiceLevel: 2
        },
        {
            id: 1004,
            name: "Stick Chicken (Stay Kai) - 8Pcs",
            price: "Tk. 830",
            description: "GRILLED CHICKEN FILLET COOKING THAI SPICY SERVED WITH CUCUMBER & PEANUT SAUCE",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "8 Pieces",
            spiceLevel: 3
        },
        {
            id: 1005,
            name: "Stick Beef (Stay Naam) - 6Pcs",
            price: "Tk. 950",
            description: "GRILLED BEEF FILLET COMBINATION IN THAI SPICY SERVED WITH PEANUT SAUCE",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "6 Pieces",
            spiceLevel: 4
        }
    ],
    
    "thai-salad": [
        {
            id: 1101,
            name: "Grilled Chicken/Beef Salad",
            price: "Tk. 670",
            description: "SLICE GRILLED CHICKEN OR BEEF WITH LIME JUICE RICE POWDER, CHILLI POWDER, SPRING ONION & MINT LEAF",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Fresh",
            spiceLevel: 3
        },
        {
            id: 1102,
            name: "Spicy Chicken Salad (Laab Kai)",
            price: "Tk. 820",
            description: "CHOPPED CHICKEN FILLET WITH THAI SPICY HERBS & LEMON JUICE",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Spicy",
            spiceLevel: 4
        },
        {
            id: 1103,
            name: "Mixed Sea Food Salad",
            price: "Tk. 880",
            description: "FISH FILLET, FRESH CRABS, FRESH SEA PRAWN WITH TOMATO ONION, LEMON JUICE, CHILLI",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Sea Food",
            spiceLevel: 2
        },
        {
            id: 1104,
            name: "Spicy Cuttle Fish Salad",
            price: "Tk. 880",
            description: "SLICE CUTTLE FISH WITH LEMON JUICE, CHILLI POWDER RICE POWDER ONION & SPICY HERBS",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Spicy",
            spiceLevel: 4
        },
        {
            id: 1105,
            name: "Papaya Salad (Somotom Thai)",
            price: "Tk. 460",
            description: "GREEN PAPAYA SALAD WITH LIME JUICE, FRESH TOMATO DRY SHRIMP, FRESH CHILLI, DRY CHILLI",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Vegetarian",
            spiceLevel: 3
        }
    ],
    
    // Add more categories as needed...
    "thai-soup": [
        {
            id: 1201,
            name: "Clear Prawn Soup",
            price: "Tk. 790",
            description: "FRESH SEA PRAWN OR SLICE CHICKEN ONION WITH THAI HERBS",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Clear Soup",
            spiceLevel: 2
        },
        {
            id: 1202,
            name: "Tomyam Goong Special",
            price: "Tk. 870",
            description: "FRESH SEA PRAWN OR SLICE CHICKEN WITH COCONUT MILK & THAI HERBS",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Special",
            spiceLevel: 3
        },
        {
            id: 1203,
            name: "Sweet King Prawn Soup",
            price: "Tk. 1150",
            description: "SPECIAL SWEET KING PRAWN WITH SPICY THAI HERBS, RED CHILLI PASTE COCONUT MILK & LIME JUICE",
            image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "King Prawn",
            spiceLevel: 2
        }
    ],
    
    // Chinese Cuisine
    "chinese-appetizers": [
        {
            id: 2001,
            name: "Spring Rolls - 6Pcs",
            price: "Tk. 450",
            description: "CRISPY VEGETABLE SPRING ROLLS WITH SWEET & SOUR SAUCE",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Vegetarian",
            spiceLevel: 1
        },
        {
            id: 2002,
            name: "Chicken Dim Sum - 8Pcs",
            price: "Tk. 680",
            description: "STEAMED CHICKEN DUMPLINGS WITH SOYA SAUCE",
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "Steamed",
            spiceLevel: 1
        }
    ]
};

// Initialize cuisine sliders
function initCuisineSliders() {
    // Initialize all sliders
    $('.slider-container').each(function() {
        const container = $(this);
        const track = container.find('.slider-track');
        const prevBtn = container.find('.slider-nav.prev');
        const nextBtn = container.find('.slider-nav.next');
        const items = track.find('.slider-food-card');
        
        if (items.length === 0) return;
        
        const itemWidth = items.outerWidth(true);
        const visibleItems = Math.floor(container.width() / itemWidth);
        let currentPosition = 0;
        let maxPosition = 0;
        
        // Calculate max position
        function calculateMaxPosition() {
            const containerWidth = container.width();
            const trackWidth = items.length * itemWidth;
            maxPosition = Math.max(0, trackWidth - containerWidth);
        }
        
        // Update buttons state
        function updateButtons() {
            prevBtn.prop('disabled', currentPosition >= 0);
            nextBtn.prop('disabled', currentPosition <= -maxPosition);
        }
        
        // Move slider
        function moveSlider(position) {
            track.css('transform', `translateX(${position}px)`);
            currentPosition = position;
            updateButtons();
        }
        
        // Next button click
        nextBtn.click(function() {
            if (currentPosition <= -maxPosition) return;
            
            const moveBy = container.width() * 0.8;
            const newPosition = Math.max(currentPosition - moveBy, -maxPosition);
            moveSlider(newPosition);
        });
        
        // Previous button click
        prevBtn.click(function() {
            if (currentPosition >= 0) return;
            
            const moveBy = container.width() * 0.8;
            const newPosition = Math.min(currentPosition + moveBy, 0);
            moveSlider(newPosition);
        });
        
        // Touch sliding for mobile
        let startX = 0;
        let startPosition = 0;
        let isDragging = false;
        
        track.on('touchstart', function(e) {
            startX = e.originalEvent.touches[0].clientX;
            startPosition = currentPosition;
            isDragging = true;
            track.css('transition', 'none');
        });
        
        track.on('touchmove', function(e) {
            if (!isDragging) return;
            
            const currentX = e.originalEvent.touches[0].clientX;
            const diff = currentX - startX;
            const newPosition = startPosition + diff;
            
            // Limit dragging within bounds
            if (newPosition > 0) {
                moveSlider(0);
            } else if (newPosition < -maxPosition) {
                moveSlider(-maxPosition);
            } else {
                track.css('transform', `translateX(${newPosition}px)`);
            }
        });
        
        track.on('touchend', function(e) {
            if (!isDragging) return;
            
            isDragging = false;
            track.css('transition', 'transform 0.5s ease');
            
            const endX = e.originalEvent.changedTouches[0].clientX;
            const diff = endX - startX;
            
            // If swipe was significant, move to next/prev item
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swipe right - previous
                    const moveBy = itemWidth * visibleItems;
                    const newPosition = Math.min(currentPosition + moveBy, 0);
                    moveSlider(newPosition);
                } else {
                    // Swipe left - next
                    const moveBy = itemWidth * visibleItems;
                    const newPosition = Math.max(currentPosition - moveBy, -maxPosition);
                    moveSlider(newPosition);
                }
            } else {
                // Return to current position
                moveSlider(currentPosition);
            }
        });
        
        // Mouse drag for desktop
        track.on('mousedown', function(e) {
            startX = e.clientX;
            startPosition = currentPosition;
            isDragging = true;
            track.css('transition', 'none');
            e.preventDefault();
        });
        
        $(document).on('mousemove', function(e) {
            if (!isDragging) return;
            
            const currentX = e.clientX;
            const diff = currentX - startX;
            const newPosition = startPosition + diff;
            
            // Limit dragging within bounds
            if (newPosition > 0) {
                moveSlider(0);
            } else if (newPosition < -maxPosition) {
                moveSlider(-maxPosition);
            } else {
                track.css('transform', `translateX(${newPosition}px)`);
            }
        });
        
        $(document).on('mouseup', function(e) {
            if (!isDragging) return;
            
            isDragging = false;
            track.css('transition', 'transform 0.5s ease');
            
            const endX = e.clientX;
            const diff = endX - startX;
            
            // If drag was significant, move to next/prev item
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Drag right - previous
                    const moveBy = itemWidth * visibleItems;
                    const newPosition = Math.min(currentPosition + moveBy, 0);
                    moveSlider(newPosition);
                } else {
                    // Drag left - next
                    const moveBy = itemWidth * visibleItems;
                    const newPosition = Math.max(currentPosition - moveBy, -maxPosition);
                    moveSlider(newPosition);
                }
            } else {
                // Return to current position
                moveSlider(currentPosition);
            }
        });
        
        // Handle window resize
        $(window).on('resize', function() {
            calculateMaxPosition();
            updateButtons();
            
            // Reset position if needed
            if (currentPosition < -maxPosition) {
                moveSlider(-maxPosition);
            }
        });
        
        // Initial calculations
        calculateMaxPosition();
        updateButtons();
    });
}

// Load cuisine data
function loadCuisineData() {
    // Loop through all slider tracks and load data
    $('.slider-track').each(function() {
        const track = $(this);
        const category = track.data('category');
        
        if (!category || !cuisineData[category]) return;
        
        const items = cuisineData[category];
        
        // Clear existing content
        track.empty();
        
        // Add food items
        items.forEach(item => {
            const wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
            const isInWishlist = wishlist.some(w => w.id === item.id);
            const heartIcon = isInWishlist ? 'fas fa-heart' : 'far fa-heart';
            const heartClass = isInWishlist ? 'active' : '';
            
            // Create spice level dots
            let spiceDots = '';
            for (let i = 0; i < 5; i++) {
                spiceDots += `<div class="spice-dot ${i < item.spiceLevel ? 'active' : ''}"></div>`;
            }
            
            const foodItem = `
                <div class="slider-food-card" data-id="${item.id}">
                    <div class="food-item-icons">
                        <div class="food-fav-icon ${heartClass}" data-id="${item.id}">
                            <i class="${heartIcon}"></i>
                        </div>
                    </div>
                    <img src="${item.image}" alt="${item.name}" class="slider-food-img">
                    <div class="slider-food-content">
                        <div class="slider-food-header">
                            <div>
                                <h5 class="slider-food-title">${item.name}</h5>
                                <span class="slider-food-badge">${item.badge}</span>
                            </div>
                            <div class="slider-food-price">${item.price}</div>
                        </div>
                        <p class="slider-food-description">${item.description}</p>
                        ${item.spiceLevel > 0 ? `
                            <div class="spice-indicator">
                                <span style="font-size: 0.8rem; margin-right: 5px;">Spice:</span>
                                ${spiceDots}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
            track.append(foodItem);
        });
        
        // Add event listener for wishlist icons
        track.find('.food-fav-icon').click(function(e) {
            e.stopPropagation();
            const itemId = parseInt($(this).data('id'));
            const item = items.find(item => item.id === itemId);
            
            if (item) {
                toggleFoodWishlist(item, $(this));
            }
        });
    });
    
    // Reinitialize sliders after loading data
    initCuisineSliders();
}

// Toggle food item in wishlist
function toggleFoodWishlist(item, element) {
    let wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
    const existingIndex = wishlist.findIndex(w => w.id === item.id);
    
    if (existingIndex === -1) {
        // Add to wishlist
        wishlist.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: 'index'
        });
        showToast(`${item.name} added to wishlist`, 'success');
        element.addClass('active').find('i').removeClass('far fa-heart').addClass('fas fa-heart');
    } else {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showToast(`${item.name} removed from wishlist`);
        element.removeClass('active').find('i').removeClass('fas fa-heart').addClass('far fa-heart');
    }
    
    localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// Update wishlist count
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
    $('.wishlist-count').text(wishlist.length);
}

// Load saved wishlist state
function loadWishlistState() {
    const wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
    
    // Update all wishlist icons
    $('.food-fav-icon').each(function() {
        const itemId = parseInt($(this).data('id'));
        const icon = $(this).find('i');
        
        if (wishlist.some(item => item.id === itemId)) {
            $(this).addClass('active');
            icon.removeClass('far fa-heart').addClass('fas fa-heart');
        } else {
            $(this).removeClass('active');
            icon.removeClass('fas fa-heart').addClass('far fa-heart');
        }
    });
}

// Initialize on document ready
$(document).ready(function() {
    // Update wishlist count
    updateWishlistCount();
    
    // Load wishlist state
    loadWishlistState();
});