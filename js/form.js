/* ============================================
   FORM.JS — Bootstrap 5 Form Validation
   Color Hunt Edition
============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('regForm');
    const success = document.getElementById('formSuccess');
    // Guard against pages that do not contain the registration form
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (form.checkValidity()) {
            // Valid — hide form, show success
            form.style.display = 'none';
            success.style.display = 'block';
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // Invalid — show Bootstrap validation feedback
            form.classList.add('was-validated');
        }
    });

});
