// Gallery Page JavaScript

// Gallery data with categories
const galleryData = [
    {
        id: 1,
        title: "Truffle Risotto Masterpiece",
        category: "food",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 245,
        date: "Dec 15, 2023",
        description: "Our signature truffle risotto with imported Italian black truffle",
        photographer: "Chef Sebastian",
        camera: "Sony A7III"
    },
    {
        id: 2,
        title: "Elegant Dining Area",
        category: "interior",
        image: "Assets/Images/Gallery-1.jpg",
        likes: 189,
        date: "Dec 12, 2023",
        description: "Our main dining area during the golden hour",
        photographer: "Sarah Johnson",
        camera: "Canon EOS R5"
    },
    {
        id: 3,
        title: "Wine Tasting Event",
        category: "events",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 312,
        date: "Dec 10, 2023",
        description: "Monthly wine tasting event with live jazz music",
        photographer: "Michael Chen",
        camera: "Nikon Z6"
    },
    {
        id: 4,
        title: "Chef in Action",
        category: "chefs",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 178,
        date: "Dec 8, 2023",
        description: "Executive Chef Sebastian preparing Wagyu steak",
        photographer: "Emma Rodriguez",
        camera: "Sony A7IV"
    },
    {
        id: 5,
        title: "Michelin Guide Award",
        category: "awards",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 456,
        date: "Dec 5, 2023",
        description: "Receiving the Michelin Guide recognition 2023",
        photographer: "David Wilson",
        camera: "Canon EOS R6"
    },
    {
        id: 6,
        title: "Chocolate Soufflé",
        category: "food",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 267,
        date: "Dec 3, 2023",
        description: "Perfectly risen chocolate soufflé with vanilla ice cream",
        photographer: "Lisa Thompson",
        camera: "Nikon D850"
    },
    {
        id: 7,
        title: "Private Dining Room",
        category: "interior",
        image: "Assets/Images/Gallery-19.jpg",
        likes: 134,
        date: "Nov 30, 2023",
        description: "Our exclusive private dining room for special occasions",
        photographer: "Robert Kim",
        camera: "Sony A7III"
    },
    {
        id: 8,
        title: "Anniversary Celebration",
        category: "events",
        image: "Assets/Images/footer.webp",
        likes: 289,
        date: "Nov 28, 2023",
        description: "A beautiful anniversary celebration at Ambrosia",
        photographer: "Amanda Lee",
        camera: "Canon EOS R5"
    },
    {
        id: 9,
        title: "Pastry Chef at Work",
        category: "chefs",
        image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 198,
        date: "Nov 25, 2023",
        description: "Pastry Chef Carlos creating his signature desserts",
        photographer: "James Miller",
        camera: "Nikon Z7"
    },
    {
        id: 10,
        title: "TripAdvisor Certificate",
        category: "awards",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 167,
        date: "Nov 22, 2023",
        description: "Travelers' Choice Award 2023 from TripAdvisor",
        photographer: "Sarah Johnson",
        camera: "Canon EOS R6"
    },
    {
        id: 11,
        title: "Fresh Seafood Platter",
        category: "food",
        image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        likes: 324,
        date: "Nov 20, 2023",
        description: "Daily fresh seafood selection from local markets",
        photographer: "Michael Chen",
        camera: "Sony A7IV"
    },
    {
        id: 12,
        title: "Bar Area",
        category: "interior",
        image: "Assets/Images/Gallery-13.jpg",
        likes: 156,
        date: "Nov 18, 2023",
        description: "Our stylish bar with premium selection of spirits",
        photographer: "Emma Rodriguez",
        camera: "Nikon D850"
    }
];

// Instagram data
const instagramData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 234,
        comments: 45
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 189,
        comments: 32
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 312,
        comments: 56
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 267,
        comments: 41
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 198,
        comments: 28
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: 289,
        comments: 52
    }
];


// Initialize when document is ready
$(document).ready(function () {
    // Load gallery items
    loadGalleryItems();

    // Load Instagram feed
    loadInstagramFeed();

    // Initialize Lightbox
    initLightbox();

    // Initialize Masonry
    initMasonry();

    // Initialize Slideshow
    initSlideshow();

    // Filter functionality
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        filterGallery(filter);
    });

    // Category cards filter
    $('.category-card').click(function () {
        const category = $(this).data('category');
        $('.filter-btn').removeClass('active');
        $(`[data-filter="${category}"]`).addClass('active');
        filterGallery(category);
    });

    // View options
    $('.view-btn').click(function () {
        $('.view-btn').removeClass('active');
        $(this).addClass('active');

        const view = $(this).data('view');
        changeView(view);
    });

    // Search functionality
    $('#search-gallery').on('input', function () {
        searchGallery($(this).val());
    });

    $('#gallery-search').on('input', function () {
        searchGallery($(this).val());
    });

    // Sort functionality
    $('#sort-gallery').change(function () {
        sortGallery($(this).val());
    });

    // Load more button
    $('#load-more').click(function () {
        loadMoreItems();
    });

    // Image info modal
    $(document).on('click', '.info-btn', function () {
        const itemId = $(this).closest('.gallery-item').data('id');
        showImageInfo(itemId);
    });

    // Like button
    $(document).on('click', '.like-btn', function () {
        const btn = $(this);
        const icon = btn.find('i');
        const likesSpan = btn.find('span');
        let likes = parseInt(likesSpan.text());

        if (btn.hasClass('liked')) {
            likes--;
            btn.removeClass('liked');
            icon.removeClass('fas').addClass('far');
            showToast('Removed from favorites');
        } else {
            likes++;
            btn.addClass('liked');
            icon.removeClass('far').addClass('fas');
            showToast('Added to favorites', 'success');
        }

        likesSpan.text(likes);
    });

    // Download featured photo
    $('#download-featured').click(function () {
        showToast('Downloading high-quality image...', 'success');
    });

    // Share featured photo
    $('#share-featured').click(function () {
        shareImage('Featured Photo', 'Check out this beautiful photo from Ambrosia Restaurant!');
    });

    // Video playlist
    $('.playlist-item').click(function () {
        $('.playlist-item').removeClass('active');
        $(this).addClass('active');

        const videoSrc = $(this).data('video');
        $('#main-video').attr('src', videoSrc);

        // Update video info based on selected item
        const title = $(this).find('h6').text();
        $('.video-info h4').text(title);

        // Play video
        const video = $('#main-video')[0];
        video.load();
        video.play();
        $('.video-overlay').hide();
    });

    // Play main video
    $('#play-main-video').click(function () {
        const video = $('#main-video')[0];
        video.play();
        $(this).closest('.video-overlay').hide();
    });

    // Video play/pause
    $('#main-video').on('play', function () {
        $('.video-overlay').hide();
    });

    // Image download from modal
    $(document).on('click', '#modal-download', function () {
        const imageUrl = $('#modal-image').attr('src');
        const imageTitle = $('#modal-title').text();
        downloadImage(imageUrl, imageTitle);
    });

    // Image share from modal
    $(document).on('click', '#modal-share', function () {
        const imageTitle = $('#modal-title').text();
        const imageDesc = $('#modal-description').text();
        shareImage(imageTitle, imageDesc);
    });

    // Close search box
    $('.search-close').click(function () {
        $('#nav-search-box').removeClass('show');
        $('#gallery-search').val('');
        filterGallery($('.filter-btn.active').data('filter'));
    });

    // Nav search button
    $('#nav-search-btn').click(function () {
        $('#nav-search-box').toggleClass('show');
        if ($('#nav-search-box').hasClass('show')) {
            $('#gallery-search').focus();
        }
    });
});

// Load gallery items
function loadGalleryItems() {
    const gridContainer = $('#gallery-grid');
    const masonryContainer = $('#masonry-grid');

    gridContainer.empty();
    masonryContainer.empty();

    galleryData.forEach(item => {
        // Grid layout item
        const gridItem = createGalleryItem(item);
        gridContainer.append(gridItem);

        // Masonry layout item
        const masonryItem = createMasonryItem(item);
        masonryContainer.append(masonryItem);

        // Slideshow item
        const slide = createSlideItem(item);
        $('#slideshow').append(slide);
    });

    // Update slideshow counter
    $('#total-slides').text(galleryData.length);
}

// Create gallery item for grid layout
function createGalleryItem(item) {
    return `
        <div class="col-lg-4 col-md-6 gallery-item" data-id="${item.id}" data-category="${item.category}">
            <a href="${item.image}" data-lightbox="gallery" data-title="${item.title}">
                <img src="${item.image}" class="gallery-img" alt="${item.title}">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h4 class="gallery-title">${item.title}</h4>
                        <p class="gallery-category">${item.category}</p>
                        <div class="gallery-actions">
                            <button class="gallery-action-btn like-btn" title="Like">
                                <i class="far fa-heart"></i>
                                <span style="display: none">${item.likes}</span>
                            </button>
                            <button class="gallery-action-btn info-btn" title="Info">
                                <i class="fas fa-info"></i>
                            </button>
                            <button class="gallery-action-btn" title="Share">
                                <i class="fas fa-share-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Create masonry item
function createMasonryItem(item) {
    // Random height for masonry effect
    const heights = [250, 300, 350, 400];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];

    return `
        <div class="masonry-item" data-id="${item.id}" data-category="${item.category}">
            <a href="${item.image}" data-lightbox="gallery" data-title="${item.title}">
                <img src="${item.image}" class="masonry-img" alt="${item.title}" style="height: ${randomHeight}px;">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h4 class="gallery-title">${item.title}</h4>
                        <p class="gallery-category">${item.category}</p>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Create slide item
function createSlideItem(item) {
    return `
        <div class="slide" data-id="${item.id}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="slide-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;
}

// Load Instagram feed
function loadInstagramFeed() {
    const container = $('#instagram-grid');

    instagramData.forEach(item => {
        const instagramItem = `
            <div class="col-lg-4 col-md-6">
                <div class="instagram-item">
                    <img src="${item.image}" class="instagram-img" alt="Instagram Post">
                    <div class="instagram-overlay">
                        <div class="instagram-stats">
                            <span>
                                <i class="fas fa-heart"></i> ${item.likes}
                            </span>
                            <span>
                                <i class="fas fa-comment"></i> ${item.comments}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.append(instagramItem);
    });
}

// Initialize Lightbox
function initLightbox() {
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'positionFromTop': 100
    });
}

// Initialize Masonry
function initMasonry() {
    const $grid = $('#masonry-grid');
    $grid.masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item',
        percentPosition: true,
        gutter: 30
    });

    // Refresh masonry after images load
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}

// Initialize Slideshow
function initSlideshow() {
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    let slideshowInterval;

    // Show first slide
    slides.eq(currentSlide).addClass('active');

    // Next slide function
    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.eq(currentSlide).addClass('active');
        updateSlideCounter();
    }

    // Previous slide function
    function prevSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides.eq(currentSlide).addClass('active');
        updateSlideCounter();
    }

    // Update slide counter
    function updateSlideCounter() {
        $('#current-slide').text(currentSlide + 1);
    }

    // Start slideshow
    function startSlideshow() {
        slideshowInterval = setInterval(nextSlide, 5000);
        $('#play-pause').html('<i class="fas fa-pause"></i>');
    }

    // Stop slideshow
    function stopSlideshow() {
        clearInterval(slideshowInterval);
        $('#play-pause').html('<i class="fas fa-play"></i>');
    }

    // Toggle slideshow
    function toggleSlideshow() {
        if ($('#play-pause').find('i').hasClass('fa-pause')) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    }

    // Event listeners
    $('#next-slide').click(function () {
        stopSlideshow();
        nextSlide();
        startSlideshow();
    });

    $('#prev-slide').click(function () {
        stopSlideshow();
        prevSlide();
        startSlideshow();
    });

    $('#play-pause').click(function () {
        toggleSlideshow();
    });

    // Start slideshow automatically
    startSlideshow();
}

// Filter gallery
function filterGallery(filter) {
    if (filter === 'all') {
        $('.gallery-item, .masonry-item, .slide').fadeIn(300);
    } else {
        $('.gallery-item, .masonry-item, .slide').each(function () {
            if ($(this).data('category') === filter) {
                $(this).fadeIn(300);
            } else {
                $(this).fadeOut(300);
            }
        });
    }

    // Update masonry layout
    $('#masonry-grid').masonry('layout');
}

// Change view mode
function changeView(view) {
    switch (view) {
        case 'grid':
            $('#gallery-container').show();
            $('#masonry-container').hide();
            $('#slideshow-container').hide();
            break;
        case 'masonry':
            $('#gallery-container').hide();
            $('#masonry-container').show();
            $('#slideshow-container').hide();
            // Refresh masonry
            $('#masonry-grid').masonry('layout');
            break;
        case 'slideshow':
            $('#gallery-container').hide();
            $('#masonry-container').hide();
            $('#slideshow-container').show();
            break;
    }
}

// Search gallery
function searchGallery(query) {
    const searchTerm = query.toLowerCase().trim();

    if (searchTerm === '') {
        filterGallery($('.filter-btn.active').data('filter'));
        return;
    }

    $('.gallery-item, .masonry-item, .slide').each(function () {
        const title = $(this).find('.gallery-title, .slide-info h3').text().toLowerCase();
        const category = $(this).data('category');

        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            $(this).fadeIn(300);
        } else {
            $(this).fadeOut(300);
        }
    });

    // Update masonry layout
    $('#masonry-grid').masonry('layout');
}

// Sort gallery
function sortGallery(method) {
    const container = $('#gallery-grid');
    const items = container.find('.gallery-item').get();

    items.sort(function (a, b) {
        const aTitle = $(a).find('.gallery-title').text();
        const bTitle = $(b).find('.gallery-title').text();
        const aLikes = parseInt($(a).find('.like-btn span').text());
        const bLikes = parseInt($(b).find('.like-btn span').text());

        switch (method) {
            case 'newest':
                // For demo, we'll use ID as proxy for date
                return $(b).data('id') - $(a).data('id');
            case 'oldest':
                return $(a).data('id') - $(b).data('id');
            case 'popular':
                return bLikes - aLikes;
            case 'az':
                return aTitle.localeCompare(bTitle);
            case 'za':
                return bTitle.localeCompare(aTitle);
            default:
                return 0;
        }
    });

    $.each(items, function (index, item) {
        container.append(item);
    });
}

// Load more items (simulated)
function loadMoreItems() {
    const btn = $('#load-more');
    btn.html('<i class="fas fa-spinner fa-spin me-2"></i> Loading...').prop('disabled', true);

    // Simulate API call
    setTimeout(() => {
        // In a real app, you would fetch more items from server
        showToast('No more photos to load', 'info');
        btn.html('<i class="fas fa-plus me-2"></i> Load More Photos').prop('disabled', false);
    }, 1500);
}

// Show image info modal
function showImageInfo(itemId) {
    const item = galleryData.find(i => i.id === itemId);

    if (!item) return;

    // Populate modal
    $('#modal-image').attr('src', item.image);
    $('#modal-title').text(item.title);
    $('#modal-description').text(item.description);
    $('#modal-date').text(item.date);
    $('#modal-camera').text(item.camera);
    $('#modal-photographer').text(item.photographer);
    $('#modal-likes').text(`${item.likes} likes`);

    // Show modal
    $('#imageInfoModal').modal('show');
}

// Download image
function downloadImage(url, title) {
    // In a real app, this would trigger a download
    // For demo, we'll show a toast
    showToast(`Downloading "${title}"...`, 'success');

    // Simulate download
    setTimeout(() => {
        showToast('Download complete!', 'success');
    }, 1000);
}

// Share image
function shareImage(title, description) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: description,
            url: window.location.href
        })
            .then(() => showToast('Shared successfully!', 'success'))
            .catch(error => console.log('Sharing failed:', error));
    } else {
        // Fallback: copy to clipboard
        const text = `${title}: ${description} ${window.location.href}`;
        navigator.clipboard.writeText(text)
            .then(() => showToast('Link copied to clipboard!', 'success'))
            .catch(err => showToast('Failed to copy link', 'error'));
    }
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

    // Initialize custom cursor
    initCustomCursor();
});

// Custom cursor function (from main.js)
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


// Fix light mode compatibility for gallery
function fixGalleryLightMode() {
    if ($('body').hasClass('light-mode')) {
        // Update gallery controls
        $('.gallery-controls').css({
            'background': '#f8f9fa',
            'border': '1px solid rgba(0,0,0,0.1)'
        });

        // Update filter buttons
        $('.filter-btn').each(function () {
            if ($(this).hasClass('active')) {
                $(this).css({
                    'background': 'var(--primary)',
                    'color': 'white'
                });
            } else {
                $(this).css({
                    'background': 'rgba(0,0,0,0.05)',
                    'color': 'var(--text-light)'
                });
            }
        });

        // Update view buttons
        $('.view-btn').css({
            'background': 'rgba(0,0,0,0.05)',
            'border-color': 'rgba(0,0,0,0.1)',
            'color': 'var(--text-light)'
        });

        $('.view-btn.active').css({
            'background': 'var(--primary)',
            'color': 'white'
        });
    }
}

// Update in document ready
$(document).ready(function () {
    // ... existing code

    // Fix light mode styles
    fixGalleryLightMode();

    // Re-fix on theme change
    $(document).on('themeChanged', function () {
        setTimeout(fixGalleryLightMode, 100);
    });
});