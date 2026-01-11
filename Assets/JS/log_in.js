// Initialize when document is ready
$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 1000);

    // Initialize theme toggle (call only if available)
    if (typeof initTheme === 'function') initTheme();

    // Initialize login functionality
    initLogin();

    // Initialize dashboard functionality
    initDashboard();

    // Initialize other features
    initOtherFeatures();
});


// Login Functionality
function initLogin() {
    // Check if user is already logged in
    const userData = localStorage.getItem('ambrosiaUser');
    if (userData) {
        showDashboard(JSON.parse(userData));
    }

    // Login form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();

        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val().trim();
        const rememberMe = $('#rememberMe').is(':checked');

        // Simple validation
        if (!email || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Simulate login (in real app, this would be server-side)
        simulateLogin(email, password, rememberMe);
    });

    // Show/Hide password
    $('#showPassword').click(function () {
        const passwordField = $('#loginPassword');
        const type = passwordField.attr('type');
        const icon = $(this).find('i');

        if (type === 'password') {
            passwordField.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
            $(this).html('<i class="far fa-eye-slash"></i> Hide Password');
        } else {
            passwordField.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
            $(this).html('<i class="far fa-eye"></i> Show Password');
        }
    });

    // Forgot password
    $('#forgotPassword').click(function (e) {
        e.preventDefault();
        const forgotModal = new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
        forgotModal.show();
    });

    // Send reset link
    $('#sendResetLink').click(function () {
        const email = $('#resetEmail').val().trim();
        if (!email || !validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Simulate sending reset link
        setTimeout(() => {
            $('#forgotPasswordModal').modal('hide');
            showToast('Password reset link sent to your email', 'success');
            $('#resetEmail').val('');
        }, 1000);
    });

    // Social login (demo only)
    $('#googleLogin').click(function () {
        showToast('Google login would be implemented here', 'info');
    });

    $('#facebookLogin').click(function () {
        showToast('Facebook login would be implemented here', 'info');
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function simulateLogin(email, password, rememberMe) {
    // Show loading state
    const loginBtn = $('.login-btn');
    const originalText = loginBtn.html();
    loginBtn.html('<i class="fas fa-spinner fa-spin me-2"></i> Logging in...');
    loginBtn.prop('disabled', true);

    // Simulate API call delay
    setTimeout(() => {
        // For demo purposes, accept any email/password combination
        const userData = {
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            membership: 'Gold',
            points: 1250,
            joinDate: '2023-01-15',
            avatarText: email.charAt(0).toUpperCase()
        };

        // Save user data
        localStorage.setItem('ambrosiaUser', JSON.stringify(userData));
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }

        // Show dashboard
        showDashboard(userData);
        showToast('Login successful! Welcome back!', 'success');

        // Reset button
        loginBtn.html(originalText);
        loginBtn.prop('disabled', false);
    }, 1500);
}

function showDashboard(userData) {
    // Hide login form, show dashboard
    $('#loginContainer').hide();
    $('#dashboard').show();
    $('#logoutBtn').show();

    // Update user information
    $('#userName').text(`Welcome, ${userData.name}!`);
    $('#userAvatar').html(`<span>${userData.avatarText}</span>`);
    $('#membershipLevel').text(`${userData.membership} Member`);
    $('#profileName').val(userData.name);
    $('#profileEmail').val(userData.email);
    $('#pointsBalance').text(userData.points.toLocaleString());

    // Update membership badge color
    updateMembershipBadge(userData.membership);
}

function updateMembershipBadge(level) {
    const badge = $('#membershipLevel');
    badge.removeClass('gold platinum vip');

    switch (level.toLowerCase()) {
        case 'gold':
            badge.addClass('gold');
            badge.css('background', 'linear-gradient(135deg, #FFD700, #FFA500)');
            break;
        case 'platinum':
            badge.addClass('platinum');
            badge.css('background', 'linear-gradient(135deg, #E5E4E2, #C0C0C0)');
            break;
        case 'vip':
            badge.addClass('vip');
            badge.css('background', 'linear-gradient(135deg, #6D301C, #8B4513)');
            badge.css('color', 'white');
            break;
    }
}

// Dashboard Functionality
function initDashboard() {
    // Tab switching
    $('.tab-btn').click(function () {
        const tabId = $(this).data('tab');

        // Update active tab
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        // Show corresponding content
        $('.tab-content').removeClass('active');
        $(`#${tabId}-tab`).addClass('active');
    });

    // New reservation button
    $('#newReservationBtn').click(function () {
        window.location.href = 'reservation.html';
    });

    // Update profile
    $('#updateProfileBtn').click(function () {
        const name = $('#profileName').val().trim();
        const email = $('#profileEmail').val().trim();
        const phone = $('#profilePhone').val().trim();

        if (!name || !email) {
            showToast('Name and email are required', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Update user data
        const userData = JSON.parse(localStorage.getItem('ambrosiaUser'));
        userData.name = name;
        userData.email = email;
        userData.avatarText = name.charAt(0).toUpperCase();
        localStorage.setItem('ambrosiaUser', JSON.stringify(userData));

        // Update UI
        $('#userName').text(`Welcome, ${name}!`);
        $('#userAvatar').html(`<span>${name.charAt(0).toUpperCase()}</span>`);

        showToast('Profile updated successfully!', 'success');
    });

    // Upgrade membership
    $('#upgradeMembershipBtn').click(function () {
        const userData = JSON.parse(localStorage.getItem('ambrosiaUser'));

        if (userData.membership === 'Gold' && userData.points >= 2000) {
            userData.membership = 'Platinum';
            localStorage.setItem('ambrosiaUser', JSON.stringify(userData));
            updateMembershipBadge('Platinum');
            $('#membershipLevel').text('Platinum Member');
            showToast('Congratulations! You are now a Platinum member!', 'success');
        } else if (userData.membership === 'Gold') {
            showToast('You need 2,000 points to upgrade to Platinum', 'info');
        } else {
            showToast('You already have the highest membership tier!', 'info');
        }
    });

    // Logout
    $('#logoutBtn').click(function () {
        // Clear user data
        localStorage.removeItem('ambrosiaUser');

        // Show login form, hide dashboard
        $('#dashboard').hide();
        $('#logoutBtn').hide();
        $('#loginContainer').show();

        // Reset form
        $('#loginForm')[0].reset();
        $('#loginPassword').attr('type', 'password');
        $('#showPassword').html('<i class="far fa-eye"></i> Show Password');

        showToast('You have been logged out successfully', 'success');
    });

    // Redeem reward buttons
    $('.benefit-card .btn-primary-custom').click(function (e) {
        if ($(this).text().includes('Redeem')) {
            e.preventDefault();
            const card = $(this).closest('.benefit-card');
            const reward = card.find('h5').text();
            showToast(`Would redeem: ${reward}`, 'info');
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