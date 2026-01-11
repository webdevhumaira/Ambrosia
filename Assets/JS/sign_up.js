// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize theme toggle
    initTheme();

    // Initialize signup functionality
    initSignup();

    // Initialize other features
    initOtherFeatures();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (window.setTheme) {
        window.setTheme(savedTheme, false);
    } else {
        if (savedTheme === 'light') $('body').addClass('light-mode');
    }
    if (window.updateThemeColors) window.updateThemeColors();
}

// Signup Functionality
function initSignup() {
    // Password strength indicator
    $('#signupPassword').on('input', function () {
        checkPasswordStrength($(this).val());
    });

    // Password confirmation check
    $('#confirmPassword').on('input', function () {
        checkPasswordMatch();
    });

    // Form submission
    $('#signupForm').submit(function (e) {
        e.preventDefault();

        // Get form values
        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#signupEmail').val().trim();
        const password = $('#signupPassword').val();
        const confirmPassword = $('#confirmPassword').val();
        const phone = $('#phone').val().trim();
        const birthDate = $('#birthDate').val();
        const termsAgreed = $('#termsAgreement').is(':checked');

        // Validation
        if (!validateForm(firstName, lastName, email, password, confirmPassword, termsAgreed)) {
            return;
        }

        // Create account
        createAccount(firstName, lastName, email, password, phone, birthDate);
    });
}

function checkPasswordStrength(password) {
    let strength = 0;
    let text = '';
    let color = '';

    // Check password length
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;

    // Check for mixed case
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;

    // Check for numbers
    if (/\d/.test(password)) strength++;

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Determine strength level
    switch (strength) {
        case 0:
        case 1:
            text = 'Very Weak';
            color = '#dc3545';
            break;
        case 2:
            text = 'Weak';
            color = '#ffc107';
            break;
        case 3:
            text = 'Good';
            color = '#28a745';
            break;
        case 4:
            text = 'Strong';
            color = '#20c997';
            break;
        case 5:
            text = 'Very Strong';
            color = '#198754';
            break;
    }

    // Update UI
    const percentage = (strength / 5) * 100;
    $('#passwordStrength').css({
        width: percentage + '%',
        backgroundColor: color
    });
    $('#passwordStrengthText').text('Password strength: ' + text).css('color', color);
}

function checkPasswordMatch() {
    const password = $('#signupPassword').val();
    const confirmPassword = $('#confirmPassword').val();
    const matchElement = $('#passwordMatch');

    if (!confirmPassword) {
        matchElement.text('');
        return;
    }

    if (password === confirmPassword) {
        matchElement.text('Passwords match ✓').css('color', '#28a745');
    } else {
        matchElement.text('Passwords do not match ✗').css('color', '#dc3545');
    }
}

function validateForm(firstName, lastName, email, password, confirmPassword, termsAgreed) {
    // Check required fields
    if (!firstName || !lastName) {
        showToast('Please enter your first and last name', 'error');
        return false;
    }

    if (!email) {
        showToast('Please enter your email address', 'error');
        return false;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return false;
    }

    if (!password) {
        showToast('Please create a password', 'error');
        return false;
    }

    if (password.length < 8) {
        showToast('Password must be at least 8 characters long', 'error');
        return false;
    }

    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return false;
    }

    if (!termsAgreed) {
        showToast('Please agree to the Terms & Conditions', 'error');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function createAccount(firstName, lastName, email, password, phone, birthDate) {
    // Show loading state
    const signupBtn = $('.signup-btn');
    const originalText = signupBtn.html();
    signupBtn.html('<i class="fas fa-spinner fa-spin me-2"></i> Creating Account...');
    signupBtn.prop('disabled', true);

    // Simulate API call delay
    setTimeout(() => {
        // Create user data
        const fullName = firstName + ' ' + lastName;
        const userData = {
            name: fullName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone || '',
            birthDate: birthDate || '',
            membership: 'Bronze',
            points: 500, // Welcome bonus
            joinDate: new Date().toISOString().split('T')[0],
            avatarText: firstName.charAt(0).toUpperCase()
        };

        // In a real app, this would be saved to a database
        // For demo, we'll save to localStorage
        localStorage.setItem('ambrosiaUser', JSON.stringify(userData));

        // Show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Reset button
        signupBtn.html(originalText);
        signupBtn.prop('disabled', false);

        // Reset form
        $('#signupForm')[0].reset();
        $('#passwordStrength').css('width', '0%');
        $('#passwordStrengthText').text('Password strength: None').css('color', '');
        $('#passwordMatch').text('');
    }, 2000);
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