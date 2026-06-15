/* ============================================
   DARKMODE.JS — Dark Mode Toggle
   Color Hunt Edition
============================================ */

document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('darkToggle');
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark');
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle dark mode on click
    btn.addEventListener('click', function() {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        btn.innerHTML = isDark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });

});
