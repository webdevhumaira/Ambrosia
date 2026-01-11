// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize animations
    initAnimations();

    // Initialize statistics counter
    initStatistics();

    // Initialize testimonial carousel
    initTestimonialCarousel();

    // Initialize other features
    initOtherFeatures();

    // Theme handled centrally in main.js

});

// Animations
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

// Statistics Counter
function initStatistics() {
    $('.stat-number').each(function () {
        const $this = $(this);
        const countTo = parseInt($this.data('count'));

        $({ countNum: 0 }).animate({ countNum: countTo }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(countTo);
            }
        });
    });
}

// Testimonial Carousel
function initTestimonialCarousel() {
    $('#testimonialCarousel').carousel({
        interval: 5000,
        wrap: true,
        keyboard: true
    });

    // Pause on hover
    $('#testimonialCarousel').hover(
        function () {
            $(this).carousel('pause');
        },
        function () {
            $(this).carousel('cycle');
        }
    );
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
    });

    // Scroll to top
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Gallery item click
    $('.gallery-item').click(function () {
        const imgSrc = $(this).find('img').attr('src');
        const title = $(this).find('h5').text();
        const desc = $(this).find('small').text();

        // Create modal for image view
        const modalHtml = `
                    <div class="modal fade" id="galleryModal" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header border-0">
                                    <h5 class="modal-title">${title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body p-0">
                                    <img src="${imgSrc}" class="img-fluid w-100" alt="${title}">
                                </div>
                                <div class="modal-footer border-0">
                                    <small class="text-muted">${desc}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        // Remove existing modal if any
        $('#galleryModal').remove();

        // Add modal to body and show
        $('body').append(modalHtml);
        const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
        galleryModal.show();
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