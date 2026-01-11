$(document).ready(function () {
    // Hide preloader
    setTimeout(function () {
        $('#preloader').addClass('hidden');
    }, 2000);

    // Theme handled centrally in main.js

    // Apply button click handler
    $('.apply-btn').click(function () {
        const position = $(this).data('position');
        $('#applicant-position').val(position);

        // Scroll to application form
        $('html, body').animate({
            scrollTop: $('#careerApplicationForm').offset().top - 100
        }, 800);

        showToast(`Now applying for: ${position}`);
    });

    // File upload handling
    const fileUploadArea = $('#fileUploadArea');
    const fileInput = $('#applicant-resume');
    const fileName = $('#fileName');

    // Click on upload area
    fileUploadArea.click(function () {
        fileInput.click();
    });

    // File input change
    fileInput.change(function () {
        const file = this.files[0];
        if (file) {
            // Check file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                showToast('File size must be less than 5MB', 'error');
                this.value = '';
                fileName.html('');
                return;
            }

            // Check file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                showToast('Only PDF, DOC, and DOCX files are allowed', 'error');
                this.value = '';
                fileName.html('');
                return;
            }

            // Display file name
            fileName.html(`
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <i class="fas fa-check-circle me-2"></i>
                            <div>
                                <strong>${file.name}</strong> (${(file.size / 1024).toFixed(1)} KB)
                            </div>
                        </div>
                    `);
        }
    });

    // Form submission
    $('#careerApplicationForm').submit(function (e) {
        e.preventDefault();

        // Basic validation
        const name = $('#applicant-name').val();
        const email = $('#applicant-email').val();
        const phone = $('#applicant-phone').val();
        const position = $('#applicant-position').val();
        const experience = $('#applicant-experience').val();
        const message = $('#applicant-message').val();
        const file = fileInput[0].files[0];
        const terms = $('#applicant-terms').is(':checked');

        if (!name || !email || !phone || !position || !experience || !message || !file || !terms) {
            showToast('Please fill all required fields and upload your resume', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        // Show success modal
        $('#applicationModal').modal('show');

        // Reset form
        setTimeout(() => {
            $('#careerApplicationForm')[0].reset();
            fileName.html('');
            showToast('Application submitted successfully!', 'success');
        }, 1000);

        // In a real application, you would submit to a server here
        console.log('Career application submitted:', {
            name,
            email,
            phone,
            position,
            experience,
            message,
            fileName: file.name,
            fileSize: file.size
        });
    });

    // Show toast
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
});