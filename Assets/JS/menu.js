// Menu Page Specific JavaScript
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize custom cursor (from main.js)
    initCustomCursor();


    // Scroll progress bar
    $(window).on('scroll', function () {
        const winHeight = $(window).height();
        const docHeight = $(document).height();
        const winTop = $(window).scrollTop();
        const progress = (winTop / (docHeight - winHeight)) * 100;
        $('#scroll-progress').css('width', progress + '%');

        // Show/hide quick navigation
        if ($(window).scrollTop() > 500) {
            $('#menu-quick-nav').addClass('show');
        } else {
            $('#menu-quick-nav').removeClass('show');
        }

        // Update active quick nav item
        const scrollPos = $(document).scrollTop() + 100;
        $('.quick-nav-item').each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.quick-nav-item').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // Quick navigation smooth scroll
    $('.quick-nav-item').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 800);
    });

    // Menu search functionality
    $('#menu-page-search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        if (searchTerm === '') {
            $('.menu-item-highlight, .menu-card').removeClass('search-highlight');
            $('.menu-section').show();
        } else {
            $('.menu-item-highlight, .menu-card').each(function () {
                const text = $(this).text().toLowerCase();
                if (text.includes(searchTerm)) {
                    $(this).addClass('search-highlight');
                    $(this).closest('.menu-section').show();
                } else {
                    $(this).removeClass('search-highlight');
                }
            });
        }
    });

    // Filter buttons
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        const filter = $(this).data('filter');

        if (filter === 'all') {
            $('.menu-section').show();
            $('.menu-item-highlight, .menu-card').show();
        } else {
            $('.menu-item-highlight, .menu-card').each(function () {
                const hasClass = $(this).find(`.${filter}`).length > 0;
                if (hasClass) {
                    $(this).show();
                    $(this).closest('.menu-section').show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    // Order functionality
    let orderItems = [];
    let orderTotal = 0;

    $('.menu-order-btn').click(function () {
        const itemCard = $(this).closest('.menu-item-highlight, .menu-card, tr');
        const itemName = itemCard.find('h4, h5, h6, strong').first().text();
        const itemPrice = itemCard.find('.menu-price').text();
        const priceValue = parseFloat(itemPrice.replace('$', ''));

        // Add to order array
        orderItems.push({
            name: itemName,
            price: priceValue
        });

        // Update total
        orderTotal += priceValue;

        // Show toast notification
        showToast(`${itemName} added to order`, 'success');

        // Update floating cart indicator
        updateCartIndicator();
    });

    // Update cart indicator
    function updateCartIndicator() {
        if (orderItems.length > 0) {
            if ($('#cart-indicator').length === 0) {
                $('#floating-reserve').after(`
                            <div id="cart-indicator" style="position: fixed; bottom: 160px; right: 30px; background: var(--secondary); color: var(--dark); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.3); cursor: pointer; z-index: 999;">
                                <i class="fas fa-shopping-cart"></i>
                                <span style="position: absolute; top: -5px; right: -5px; background: #dc3545; color: white; width: 20px; height: 20px; border-radius: 50%; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;">${orderItems.length}</span>
                            </div>
                        `);

                $('#cart-indicator').click(function () {
                    showOrderModal();
                });
            } else {
                $('#cart-indicator span').text(orderItems.length);
            }
        }
    }

    // Show order modal
    function showOrderModal() {
        const orderItemsContainer = $('#order-items');
        orderItemsContainer.empty();

        if (orderItems.length === 0) {
            orderItemsContainer.html('<p class="text-center">No items in your order yet</p>');
        } else {
            let itemsHtml = '';
            orderItems.forEach((item, index) => {
                itemsHtml += `
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div>
                                    <h6 class="mb-0">${item.name}</h6>
                                    <small>$${item.price.toFixed(2)}</small>
                                </div>
                                <button class="btn btn-sm btn-danger remove-item" data-index="${index}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        `;
            });
            orderItemsContainer.html(itemsHtml);

            // Add remove functionality
            $('.remove-item').click(function () {
                const index = $(this).data('index');
                orderTotal -= orderItems[index].price;
                orderItems.splice(index, 1);
                showOrderModal();
                updateCartIndicator();
            });
        }

        $('#order-total').text('$' + orderTotal.toFixed(2));
        $('#orderModal').modal('show');
    }

    // Confirm order
    $('#confirm-order').click(function () {
        if (orderItems.length === 0) {
            showToast('Please add items to your order first', 'error');
            return;
        }

        const phone = "+8801234567890";
        let orderText = "Hello, I would like to place an order:\n\n";

        orderItems.forEach(item => {
            orderText += `• ${item.name} - $${item.price}\n`;
        });

        orderText += `\nTotal: $${orderTotal.toFixed(2)}\n\nPlease deliver to my table.`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(orderText)}`;
        window.open(url, '_blank');

        // Reset order
        orderItems = [];
        orderTotal = 0;
        $('#orderModal').modal('hide');
        $('#cart-indicator').remove();
        showToast('Order sent via WhatsApp!', 'success');
    });

    // Theme handled centrally in main.js

    // WhatsApp button
    $('#whatsapp-float').click(function () {
        const phone = "+8801234567890";
        const text = "Hello, I'm looking at your menu. Can you help me with recommendations?";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    });

    // Reserve button
    $('#floating-reserve').click(function () {
        window.location.href = 'index.html#reservation';
    });

    // Scroll to top
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Show scroll to top button
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });

    // Functions from main.js
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
});