// Sample Wishlist Data
const wishlistData = [
    {
        id: 1,
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with black truffle and mozzarella",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "starters",
        tags: ["veg", "popular", "new"],
        addedDate: "2024-01-15"
    },
    {
        id: 2,
        name: "Wagyu Beef Steak",
        description: "Premium A5 Wagyu beef with truffle mashed potatoes",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "main",
        tags: ["spicy", "special"],
        addedDate: "2024-01-10"
    },
    {
        id: 3,
        name: "Chocolate Soufflé",
        description: "Decadent chocolate soufflé with vanilla bean ice cream",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "desserts",
        tags: ["veg", "popular"],
        addedDate: "2024-01-05"
    },
    {
        id: 4,
        name: "Signature Mocktail",
        description: "A refreshing blend of seasonal fruits and herbs",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "drinks",
        tags: ["veg", "new"],
        addedDate: "2024-01-03"
    },
    {
        id: 5,
        name: "Lobster Thermidor",
        description: "Fresh lobster in creamy white wine sauce",
        price: 65.99,
        image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "main",
        tags: ["special"],
        addedDate: "2024-01-01"
    }
];

// Sample Recommendations Data
const recommendationsData = [
    {
        id: 6,
        name: "Burrata Salad",
        description: "Fresh burrata with heirloom tomatoes and basil pesto",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "starters",
        tags: ["veg", "new"]
    },
    {
        id: 7,
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso and mascarpone",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "desserts",
        tags: ["veg", "popular"]
    },
    {
        id: 8,
        name: "Wine Pairing Set",
        description: "Selection of 3 premium wines with cheese board",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "drinks",
        tags: ["special"]
    }
];

// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize theme toggle
    initTheme();

    // Load wishlist items
    loadWishlistItems();

    // Load recommendations
    loadRecommendations();

    // Update statistics
    updateStatistics();

    // Initialize event handlers
    initEventHandlers();

    // Initialize other features
    initOtherFeatures();
});

// Theme Management
function initTheme() {
    const themeToggle = $('#theme-toggle');
    const body = $('body');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.addClass('light-mode');
        themeToggle.find('i').removeClass('fa-moon').addClass('fa-sun');
    }

    // Use centralized theme handling if available
    if (window.setTheme) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        window.setTheme(savedTheme, false);
    }
}

// Load Wishlist Items
function loadWishlistItems() {
    const container = $('#wishlistItems');
    container.empty();

    // Load from localStorage if available
    let items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;

    if (items.length === 0) {
        $('#emptyWishlist').show();
        return;
    }

    items.forEach((item, index) => {
        const tagsHtml = item.tags.map(tag => {
            switch (tag) {
                case 'veg': return '<span class="item-tag tag-veg">Vegetarian</span>';
                case 'spicy': return '<span class="item-tag tag-spicy">Spicy</span>';
                case 'popular': return '<span class="item-tag tag-popular">Popular</span>';
                case 'new': return '<span class="item-tag tag-new">New</span>';
                case 'special': return '<span class="item-tag tag-spicy">Chef\'s Special</span>';
                default: return '';
            }
        }).join('');

        const itemHtml = `
                    <div class="wishlist-item fade-in" data-id="${item.id}" data-category="${item.category}">
                        <div class="item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        
                        <div class="item-content">
                            <div class="item-header">
                                <div class="item-title">
                                    <h4>${item.name}</h4>
                                    <div class="item-tags">
                                        ${tagsHtml}
                                        <span class="badge" style="background: var(--secondary); color: var(--dark);">
                                            ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                        </span>
                                    </div>
                                </div>
                                <div class="item-price">$${item.price.toFixed(2)}</div>
                            </div>
                            
                            <p class="item-description">${item.description}</p>
                            
                            <div class="item-actions">
                                <button class="item-action-btn btn-order" data-id="${item.id}">
                                    <i class="fas fa-shopping-cart me-1"></i> Add to Order
                                </button>
                                <button class="item-action-btn btn-move" data-id="${item.id}">
                                    <i class="fas fa-exchange-alt me-1"></i> Move to Menu
                                </button>
                                <button class="item-action-btn btn-remove" data-id="${item.id}">
                                    <i class="fas fa-trash me-1"></i> Remove
                                </button>
                                <small class="text-muted ms-auto">
                                    Added: ${new Date(item.addedDate).toLocaleDateString()}
                                </small>
                            </div>
                        </div>
                    </div>
                `;

        container.append(itemHtml);

        // Add animation delay
        setTimeout(() => {
            $(container.children().last()).addClass('visible');
        }, index * 100);
    });
}

// Load Recommendations
function loadRecommendations() {
    const container = $('#recommendations');
    container.empty();

    recommendationsData.forEach((item, index) => {
        const tagsHtml = item.tags.map(tag => {
            switch (tag) {
                case 'veg': return '<span class="badge bg-success me-1">Veg</span>';
                case 'popular': return '<span class="badge bg-warning me-1">Popular</span>';
                case 'new': return '<span class="badge bg-primary me-1">New</span>';
                case 'special': return '<span class="badge" style="background: var(--secondary); color: var(--dark);">Special</span>';
                default: return '';
            }
        }).join('');

        const itemHtml = `
                    <div class="col-md-4 mb-4">
                        <div class="card menu-card h-100 fade-in">
                            <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h5 class="card-title">${item.name}</h5>
                                    <div class="menu-price">$${item.price.toFixed(2)}</div>
                                </div>
                                <div class="mb-3">
                                    ${tagsHtml}
                                </div>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <div class="card-footer border-0 bg-transparent">
                                <button class="menu-order-btn w-100 add-to-wishlist" data-id="${item.id}">
                                    <i class="fas fa-heart me-2"></i> Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                `;

        container.append(itemHtml);

        // Add animation delay
        setTimeout(() => {
            $(container.children().last()).addClass('visible');
        }, index * 100);
    });
}

// Update Statistics
function updateStatistics() {
    let items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;

    // Calculate total value
    const totalValue = items.reduce((sum, item) => sum + item.price, 0);

    // Count categories
    const categories = [...new Set(items.map(item => item.category))];

    // Update UI
    $('#totalItems').text(items.length);
    $('#totalValue').text('$' + totalValue.toFixed(2));
    $('#categories').text(categories.length);

    // Update navbar badge
    $('.wishlist-count-badge').text(items.length);

    // Update empty state
    if (items.length === 0) {
        $('#emptyWishlist').show();
    } else {
        $('#emptyWishlist').hide();
    }
}

// Event Handlers
function initEventHandlers() {
    // Category filters
    $('.category-btn').click(function () {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');

        const category = $(this).data('category');
        filterByCategory(category);
    });

    // Sort by
    $('#sortBy').change(function () {
        sortWishlist($(this).val());
    });

    // Filter by
    $('#filterBy').change(function () {
        filterWishlist($(this).val());
    });

    // Remove item
    $(document).on('click', '.btn-remove', function () {
        const itemId = $(this).data('id');
        removeFromWishlist(itemId);
    });

    // Add to order
    $(document).on('click', '.btn-order', function () {
        const itemId = $(this).data('id');
        const item = getItemById(itemId);
        showToast(`"${item.name}" added to your order!`, 'success');
    });

    // Move to menu
    $(document).on('click', '.btn-move', function () {
        const itemId = $(this).data('id');
        const item = getItemById(itemId);
        showToast(`"${item.name}" saved to your menu favorites!`, 'success');
    });

    // Add recommendation to wishlist
    $(document).on('click', '.add-to-wishlist', function () {
        const itemId = $(this).data('id');
        const item = recommendationsData.find(r => r.id === itemId);

        if (item) {
            addToWishlist(item);
            $(this).html('<i class="fas fa-check me-2"></i> Added!');
            $(this).prop('disabled', true);
        }
    });

    // Share wishlist
    $('#shareWishlistBtn').click(function () {
        const shareModal = new bootstrap.Modal(document.getElementById('shareModal'));
        shareModal.show();
    });

    // Export wishlist
    $('#exportWishlistBtn').click(function () {
        const exportModal = new bootstrap.Modal(document.getElementById('exportModal'));
        exportModal.show();
    });

    // Clear wishlist
    $('#clearWishlistBtn').click(function () {
        if (confirm('Are you sure you want to clear your entire wishlist?')) {
            clearWishlist();
        }
    });

    // Share options
    $('#shareWhatsApp').click(function () {
        const items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;
        let message = "Check out my Ambrosia wishlist! 🍽️\n\n";

        items.forEach(item => {
            message += `• ${item.name} - $${item.price}\n`;
        });

        message += `\nTotal: $${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}\n`;
        message += "https://ambrosia.com/wishlist/share/abc123";

        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    $('#shareEmail').click(function () {
        const items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;
        const subject = "My Ambrosia Restaurant Wishlist";
        let body = "Hi,\n\nHere's my wishlist from Ambrosia Restaurant:\n\n";

        items.forEach(item => {
            body += `• ${item.name} - $${item.price}\n   ${item.description}\n\n`;
        });

        body += `Total: $${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}\n\n`;
        body += "View online: https://ambrosia.com/wishlist/share/abc123";

        const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(url, '_blank');
    });

    $('#copyLinkBtn').click(function () {
        const linkInput = $('#shareableLink');
        linkInput.select();
        document.execCommand('copy');
        showToast('Link copied to clipboard!', 'success');
    });

    $('#copyLink').click(function () {
        $('#copyLinkBtn').click();
    });

    // Export options
    $('#exportPDF').click(function () {
        showToast('Generating PDF export...', 'info');
        setTimeout(() => {
            showToast('PDF exported successfully!', 'success');
            $('#exportModal').modal('hide');
        }, 1500);
    });

    $('#exportCSV').click(function () {
        const items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;
        let csv = 'Name,Description,Price,Category,Tags\n';

        items.forEach(item => {
            csv += `"${item.name}","${item.description}",${item.price},${item.category},"${item.tags.join(',')}"\n`;
        });

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ambrosia-wishlist.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        showToast('CSV exported successfully!', 'success');
        $('#exportModal').modal('hide');
    });
}

// Wishlist Functions
function getItemById(id) {
    const items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;
    return items.find(item => item.id === id);
}

function addToWishlist(item) {
    let items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;

    // Check if already in wishlist
    if (!items.find(i => i.id === item.id)) {
        items.push({
            ...item,
            addedDate: new Date().toISOString().split('T')[0]
        });
        localStorage.setItem('ambrosiaWishlist', JSON.stringify(items));
        loadWishlistItems();
        updateStatistics();
        showToast(`"${item.name}" added to wishlist!`, 'success');
    } else {
        showToast(`"${item.name}" is already in your wishlist!`, 'info');
    }
}

function removeFromWishlist(id) {
    let items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;
    const item = items.find(i => i.id === id);

    items = items.filter(i => i.id !== id);
    localStorage.setItem('ambrosiaWishlist', JSON.stringify(items));

    loadWishlistItems();
    updateStatistics();
    showToast(`"${item.name}" removed from wishlist`, 'success');
}

function clearWishlist() {
    localStorage.removeItem('ambrosiaWishlist');
    loadWishlistItems();
    updateStatistics();
    showToast('Wishlist cleared!', 'success');
}

function filterByCategory(category) {
    $('.wishlist-item').each(function () {
        if (category === 'all' || $(this).data('category') === category) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function sortWishlist(sortBy) {
    let items = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || wishlistData;

    switch (sortBy) {
        case 'name':
            items.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            items.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            items.sort((a, b) => b.price - a.price);
            break;
        case 'category':
            items.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'date':
        default:
            items.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
            break;
    }

    localStorage.setItem('ambrosiaWishlist', JSON.stringify(items));
    loadWishlistItems();
}

function filterWishlist(filterBy) {
    $('.wishlist-item').each(function () {
        const $item = $(this);
        let showItem = true;

        switch (filterBy) {
            case 'veg':
                showItem = $item.find('.tag-veg').length > 0;
                break;
            case 'spicy':
                showItem = $item.find('.tag-spicy').length > 0;
                break;
            case 'available':
                // For demo, all items are available
                showItem = true;
                break;
            case 'all':
            default:
                showItem = true;
                break;
        }

        if (showItem) {
            $item.show();
        } else {
            $item.hide();
        }
    });
}

// Other Features
function initOtherFeatures() {
    // Custom cursor
    initCustomCursor();

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

        // Fade in animations
        $('.fade-in').each(function () {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowTop = $(window).scrollTop();

            if (elementTop < windowTop + $(window).height() - elementVisible) {
                $(this).addClass('visible');
            }
        });
    });

    // Scroll to top
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
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
    toast.removeClass('success error info').addClass(type).addClass('show');
    setTimeout(() => {
        toast.removeClass('show');
    }, 3000);
}