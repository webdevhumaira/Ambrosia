// Reviews Page JavaScript

// Sample reviews data
const reviewsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        date: "December 15, 2023",
        rating: 5,
        title: "An unforgettable dining experience!",
        content: "From the moment we walked in, the service was impeccable. The Wagyu steak was cooked to perfection, and the wine pairing suggestion was spot on. The ambience was elegant yet comfortable. We'll definitely be back for our anniversary!",
        category: "food",
        helpful: 42,
        verified: true,
        avatarColor: "#FF6B6B",
        aspectRatings: {
            food: 5,
            service: 5,
            ambience: 5,
            value: 4
        }
    },
    {
        id: 2,
        name: "Michael Chen",
        date: "December 10, 2023",
        rating: 5,
        title: "Perfect anniversary dinner",
        content: "Booked a private booth for our anniversary. The staff went above and beyond to make it special - rose petals on the table, complimentary champagne, and a personalized dessert. The lobster thermidor was divine!",
        category: "service",
        helpful: 28,
        verified: true,
        avatarColor: "#4ECDC4",
        aspectRatings: {
            food: 5,
            service: 5,
            ambience: 5,
            value: 5
        }
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        date: "December 5, 2023",
        rating: 4,
        title: "Excellent food, slightly slow service",
        content: "The truffle risotto was absolutely divine - best I've ever had. Service was a bit slow between courses, but the staff was very attentive when they were at our table. The chocolate soufflé is a must-try!",
        category: "food",
        helpful: 15,
        verified: false,
        avatarColor: "#FFD166",
        aspectRatings: {
            food: 5,
            service: 3,
            ambience: 4,
            value: 4
        }
    },
    {
        id: 4,
        name: "David Wilson",
        date: "November 28, 2023",
        rating: 5,
        title: "Business dinner success",
        content: "Hosted an important business dinner here and everything was flawless. The private dining room was perfect, food came out timely, and my clients were very impressed. Special thanks to Chef Sebastian for the personal attention.",
        category: "service",
        helpful: 19,
        verified: true,
        avatarColor: "#06D6A0",
        aspectRatings: {
            food: 5,
            service: 5,
            ambience: 5,
            value: 4
        }
    },
    {
        id: 5,
        name: "Lisa Thompson",
        date: "November 20, 2023",
        rating: 3,
        title: "Good but overpriced",
        content: "The food was good quality, but portions were small for the price. The burrata salad was excellent, but the main course was just okay. Service was good but not exceptional. Probably won't return at these prices.",
        category: "value",
        helpful: 8,
        verified: false,
        avatarColor: "#118AB2",
        aspectRatings: {
            food: 4,
            service: 3,
            ambience: 4,
            value: 2
        }
    },
    {
        id: 6,
        name: "Robert Kim",
        date: "November 15, 2023",
        rating: 5,
        title: "Worth every penny",
        content: "Celebrated my promotion here. The tasting menu was incredible - each course was better than the last. The sommelier's wine recommendations were perfect. The attention to detail is what sets this place apart.",
        category: "food",
        helpful: 31,
        verified: true,
        avatarColor: "#073B4C",
        aspectRatings: {
            food: 5,
            service: 5,
            ambience: 5,
            value: 5
        }
    },
    {
        id: 7,
        name: "Amanda Lee",
        date: "November 10, 2023",
        rating: 4,
        title: "Beautiful atmosphere",
        content: "The restaurant interior is stunning - perfect for Instagram photos! Food was great, especially the tuna tartare. Noise level was a bit high for a romantic dinner, but overall a great experience.",
        category: "ambience",
        helpful: 12,
        verified: false,
        avatarColor: "#EF476F",
        aspectRatings: {
            food: 4,
            service: 4,
            ambience: 5,
            value: 4
        }
    },
    {
        id: 8,
        name: "James Miller",
        date: "November 5, 2023",
        rating: 5,
        title: "Exceptional from start to finish",
        content: "Every aspect was perfect. The host remembered our names, the server was knowledgeable without being pretentious, and the chef came out to check on us. The beef kala bhuna had amazing flavor. Highly recommend!",
        category: "service",
        helpful: 24,
        verified: true,
        avatarColor: "#7209B7",
        aspectRatings: {
            food: 5,
            service: 5,
            ambience: 5,
            value: 5
        }
    }
];

// Initialize when document is ready
$(document).ready(function () {
    // Load reviews
    loadReviews();

    // Filter reviews by rating
    $('.rating-btn').click(function () {
        $('.rating-btn').removeClass('active');
        $(this).addClass('active');
        filterReviews();
    });

    // Filter reviews by category
    $('.category-btn').click(function () {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        filterReviews();
    });

    // Sort reviews
    $('#sort-reviews').change(function () {
        sortReviews($(this).val());
    });

    // Write review button
    $('#write-review-btn').click(function () {
        $('#reviewModal').modal('show');
    });

    // Star rating selection
    $('.stars-select i').click(function () {
        const rating = $(this).data('rating');
        setRating(rating);
    });

    // Hover effect for stars
    $('.stars-select i').hover(
        function () {
            const rating = $(this).data('rating');
            highlightStars(rating);
        },
        function () {
            const currentRating = $('#rating-value').val();
            highlightStars(currentRating);
        }
    );

    // Aspect rating selection
    $('.aspect-stars i').click(function () {
        const aspect = $(this).data('aspect');
        const value = $(this).data('value');
        setAspectRating(aspect, value);
    });

    // Character count for review content
    $('#review-content').on('input', function () {
        const count = $(this).val().length;
        $('#char-count').text(`${count}/500 characters`);

        if (count > 500) {
            $(this).val($(this).val().substring(0, 500));
            $('#char-count').text('500/500 characters').addClass('text-danger');
        } else {
            $('#char-count').removeClass('text-danger');
        }
    });

    // Submit review form
    $('#submit-review-form').submit(function (e) {
        e.preventDefault();
        submitReview();
    });

    // Load more reviews
    $('#load-more-reviews').click(function () {
        loadMoreReviews();
    });

    // Search reviews
    $('#global-search').on('input', function () {
        searchReviews($(this).val());
    });

    // Close search box
    $('.search-close').click(function () {
        $('#nav-search-box').removeClass('show');
        $('#global-search').val('');
        filterReviews();
    });

    // Nav search button
    $('#nav-search-btn').click(function () {
        $('#nav-search-box').toggleClass('show');
        if ($('#nav-search-box').hasClass('show')) {
            $('#global-search').focus();
        }
    });

    // Initialize helpful buttons
    $(document).on('click', '.helpful-btn', function () {
        const reviewId = $(this).data('id');
        toggleHelpful(reviewId, $(this));
    });

    // Update review count
    updateReviewCount();
});

// Load reviews into container
function loadReviews() {
    const container = $('#reviews-container');
    container.empty();

    // Sort by newest first by default
    const sortedReviews = [...reviewsData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    sortedReviews.forEach(review => {
        container.append(createReviewCard(review));
    });

    updateReviewCount();
}

// Create review card HTML
function createReviewCard(review) {
    const stars = getStarsHTML(review.rating);
    const aspectRatings = createAspectRatingsHTML(review.aspectRatings);
    const avatarText = review.name.split(' ').map(n => n[0]).join('').toUpperCase();

    return `
        <div class="review-card" data-rating="${review.rating}" data-category="${review.category}">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar" style="background: ${review.avatarColor}">
                        ${avatarText}
                    </div>
                    <div class="reviewer-details">
                        <h5>${review.name} ${review.verified ? '<i class="fas fa-check-circle text-success ms-2" title="Verified"></i>' : ''}</h5>
                        <p class="review-date">${review.date}</p>
                    </div>
                </div>
                <div class="review-rating">
                    <div class="review-stars">${stars}</div>
                    <p class="rating-value">${review.rating}.0/5.0</p>
                </div>
            </div>
            
            <h4 class="review-title">${review.title}</h4>
            <p class="review-content">${review.content}</p>
            
            ${aspectRatings}
            
            <div class="review-actions">
                <button class="helpful-btn" data-id="${review.id}">
                    <i class="far fa-thumbs-up"></i> Helpful (${review.helpful})
                </button>
                <div class="review-response">
                    <span class="response-label"><i class="fas fa-reply me-2"></i>Management Response</span>
                    <p>Thank you for your detailed review, ${review.name.split(' ')[0]}! We're delighted you enjoyed your experience and appreciate your feedback. We hope to welcome you back soon!</p>
                </div>
            </div>
        </div>
    `;
}

// Get stars HTML
function getStarsHTML(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Create aspect ratings HTML
function createAspectRatingsHTML(ratings) {
    return `
        <div class="category-ratings-mini">
            <div class="category-rating">
                <div class="category-label">Food Quality</div>
                <div class="category-stars">${getStarsHTML(ratings.food)}</div>
            </div>
            <div class="category-rating">
                <div class="category-label">Service</div>
                <div class="category-stars">${getStarsHTML(ratings.service)}</div>
            </div>
            <div class="category-rating">
                <div class="category-label">Ambience</div>
                <div class="category-stars">${getStarsHTML(ratings.ambience)}</div>
            </div>
            <div class="category-rating">
                <div class="category-label">Value</div>
                <div class="category-stars">${getStarsHTML(ratings.value)}</div>
            </div>
        </div>
    `;
}

// Filter reviews based on selected filters
function filterReviews() {
    const ratingFilter = $('.rating-btn.active').data('rating');
    const categoryFilter = $('.category-btn.active').data('category');
    const searchTerm = $('#global-search').val().toLowerCase();

    $('.review-card').each(function () {
        const rating = $(this).data('rating');
        const category = $(this).data('category');
        const title = $(this).find('.review-title').text().toLowerCase();
        const content = $(this).find('.review-content').text().toLowerCase();
        const reviewer = $(this).find('.reviewer-details h5').text().toLowerCase();

        let show = true;

        // Apply rating filter
        if (ratingFilter !== 'all' && rating != ratingFilter) {
            show = false;
        }

        // Apply category filter
        if (categoryFilter !== 'all' && category !== categoryFilter) {
            show = false;
        }

        // Apply search filter
        if (searchTerm && !title.includes(searchTerm) && !content.includes(searchTerm) && !reviewer.includes(searchTerm)) {
            show = false;
        }

        if (show) {
            $(this).fadeIn(300);
        } else {
            $(this).fadeOut(300);
        }
    });

    updateReviewCount();
}

// Search reviews
function searchReviews(term) {
    filterReviews();
}

// Sort reviews
function sortReviews(method) {
    const container = $('#reviews-container');
    const reviews = container.find('.review-card').get();

    reviews.sort(function (a, b) {
        const aRating = $(a).data('rating');
        const bRating = $(b).data('rating');
        const aDate = new Date($(a).find('.review-date').text());
        const bDate = new Date($(b).find('.review-date').text());
        const aHelpful = parseInt($(a).find('.helpful-btn').text().match(/\d+/)[0]);
        const bHelpful = parseInt($(b).find('.helpful-btn').text().match(/\d+/)[0]);

        switch (method) {
            case 'newest':
                return bDate - aDate;
            case 'oldest':
                return aDate - bDate;
            case 'highest':
                return bRating - aRating;
            case 'lowest':
                return aRating - bRating;
            case 'helpful':
                return bHelpful - aHelpful;
            default:
                return 0;
        }
    });

    $.each(reviews, function (index, review) {
        container.append(review);
    });
}

// Update review count
function updateReviewCount() {
    const visibleCount = $('.review-card:visible').length;
    const totalCount = $('.review-card').length;
    $('#reviews-count').text(`Showing ${visibleCount} of ${totalCount} reviews`);
}

// Set rating for new review
function setRating(rating) {
    $('#rating-value').val(rating);
    highlightStars(rating);

    // Update rating text
    const ratingTexts = {
        1: "Poor - Very disappointed",
        2: "Fair - Could be better",
        3: "Good - Met expectations",
        4: "Very Good - Exceeded expectations",
        5: "Excellent - Outstanding experience"
    };

    $('#rating-text').text(ratingTexts[rating] || "Select a rating");
}

// Highlight stars
function highlightStars(rating) {
    $('.stars-select i').each(function () {
        const starRating = $(this).data('rating');
        if (starRating <= rating) {
            $(this).removeClass('far').addClass('fas active');
        } else {
            $(this).removeClass('fas active').addClass('far');
        }
    });
}

// Set aspect rating
function setAspectRating(aspect, value) {
    $(`.aspect-stars[data-aspect="${aspect}"] i`).each(function () {
        const starValue = $(this).data('value');
        if (starValue <= value) {
            $(this).removeClass('far').addClass('fas active');
        } else {
            $(this).removeClass('fas active').addClass('far');
        }
    });
}

// Submit review
function submitReview() {
    const name = $('#review-name').val();
    const email = $('#review-email').val();
    const title = $('#review-title').val();
    const content = $('#review-content').val();
    const rating = $('#rating-value').val();
    const recommend = $('#recommend-check').is(':checked');

    if (!rating) {
        showToast('Please select a rating', 'error');
        return;
    }

    if (!name || !email || !title || !content) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    // Generate aspect ratings (in a real app, these would come from the form)
    const aspectRatings = {
        food: 5,
        service: 5,
        ambience: 5,
        value: 5
    };

    // Create new review object
    const newReview = {
        id: reviewsData.length + 1,
        name: name,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        rating: parseInt(rating),
        title: title,
        content: content,
        category: 'food',
        helpful: 0,
        verified: false,
        avatarColor: getRandomColor(),
        aspectRatings: aspectRatings
    };

    // Add to beginning of reviews array
    reviewsData.unshift(newReview);

    // Add to DOM
    const newReviewCard = createReviewCard(newReview);
    $('#reviews-container').prepend(newReviewCard);

    // Reset form
    $('#submit-review-form')[0].reset();
    $('#char-count').text('0/500 characters');
    setRating(0);
    $('.aspect-stars i').removeClass('fas active').addClass('far');

    // Close modal
    $('#reviewModal').modal('hide');

    // Show success message
    showToast('Thank you for your review! It will appear after moderation.', 'success');

    // Update count
    updateReviewCount();
}

// Load more reviews (simulate loading)
function loadMoreReviews() {
    const btn = $('#load-more-reviews');
    btn.html('<i class="fas fa-spinner fa-spin me-2"></i> Loading...').prop('disabled', true);

    // Simulate API call
    setTimeout(() => {
        // In a real app, you would fetch more reviews from server
        showToast('No more reviews to load', 'info');
        btn.html('<i class="fas fa-sync me-2"></i> Load More Reviews').prop('disabled', false);
    }, 1500);
}

// Toggle helpful
function toggleHelpful(reviewId, button) {
    const icon = button.find('i');
    const countText = button.text().match(/\d+/)[0];
    let count = parseInt(countText);

    if (button.hasClass('active')) {
        // Already marked helpful, remove
        count--;
        button.removeClass('active');
        icon.removeClass('fas').addClass('far');
        showToast('Removed helpful vote');
    } else {
        // Mark as helpful
        count++;
        button.addClass('active');
        icon.removeClass('far').addClass('fas');
        showToast('Marked as helpful', 'success');
    }

    // Update count in button
    button.html(`<i class="${icon.hasClass('fas') ? 'fas' : 'far'} fa-thumbs-up"></i> Helpful (${count})`);

    // In a real app, you would update this on the server
}

// Get random color for avatar
function getRandomColor() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0',
        '#118AB2', '#073B4C', '#EF476F', '#7209B7',
        '#3A86FF', '#FB5607', '#8338EC', '#FF006E'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = $('#toast');
    $('#toast-message').text(message);

    toast.removeClass('success error info');
    toast.addClass(type);
    toast.addClass('show');

    setTimeout(() => {
        toast.removeClass('show');
    }, 3000);
}

// Add to main.js compatibility
$(document).ready(function () {
    // Theme handled centrally in main.js

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

    // Floating reserve button
    $('#floating-reserve').click(function () {
        window.location.href = 'reservation.html';
    });

    // WhatsApp button click
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I would like to make a reservation at Ambrosia restaurant.";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);
});