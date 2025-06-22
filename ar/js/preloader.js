document.addEventListener('DOMContentLoaded', function() {
    // Show preloader immediately
    const preloader = document.getElementById('preloader-active');
    if (preloader) {
        preloader.style.display = 'flex';
    }

    // Hide preloader after content is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 1000); // Adjust this time based on your content loading time
    });
});
