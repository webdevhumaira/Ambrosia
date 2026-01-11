/*************************
 * THEME MANAGEMENT SYSTEM *
 *************************/

// Global theme functions
window.updateThemeColors = function () {
    const body = $('body');
    const isLightMode = body.hasClass('light-mode');
    const root = document.documentElement;

    if (isLightMode) {
        root.style.setProperty('--primary', '#C41E3A');
        root.style.setProperty('--secondary', '#E67E22');
        root.style.setProperty('--accent', '#F39C12');
        root.style.setProperty('--dark', '#F5F7FA');
        root.style.setProperty('--dark-light', '#FFFFFF');
        root.style.setProperty('--light', '#2C3E50');
        root.style.setProperty('--light-border', '#E0E0E0');
    } else {
        root.style.setProperty('--primary', '#6D301C');
        root.style.setProperty('--secondary', '#F7B248');
        root.style.setProperty('--accent', '#fbb448');
        root.style.setProperty('--dark', '#121212');
        root.style.setProperty('--dark-light', '#1a1a1a');
        root.style.setProperty('--light', '#f8f9fa');
        root.style.setProperty('--light-border', '#333');
    }
};

window.setTheme = function (theme, notify = true) {
    const body = $('body');
    const html = $('html');
    const themeToggleIcon = $('#theme-toggle i');

    if (theme === 'light') {
        body.addClass('light-mode');
        html.attr('data-theme', 'light');
        themeToggleIcon.removeClass('fa-moon').addClass('fa-sun');
        if (notify) window.showToast?.('Light mode activated', 'success');
    } else {
        body.removeClass('light-mode');
        html.attr('data-theme', 'dark');
        themeToggleIcon.removeClass('fa-sun').addClass('fa-moon');
        if (notify) window.showToast?.('Dark mode activated', 'success');
    }
    
    localStorage.setItem('theme', theme);
    window.updateThemeColors();

    // Dispatch event for other components
    try {
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
        if (window.jQuery) $(document).trigger('themeChanged', theme);
    } catch (e) {
        console.warn('[Theme] Event dispatch failed', e);
    }
};

window.toggleTheme = function () {
    const isLight = $('body').hasClass('light-mode');
    window.setTheme(isLight ? 'dark' : 'light');
};

// Initialize theme when DOM is ready
$(document).ready(function () {
    // Theme toggle button event
    $(document).on('click', '#theme-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[Theme] Toggle clicked');
        window.toggleTheme();
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    window.setTheme(savedTheme, false);
    
    console.log('[Theme] Initialized, current theme:', savedTheme);
});