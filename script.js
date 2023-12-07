document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to specific height within sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);
            
            if (targetSectionId === "#services") {
                const targetHeight = targetSection.offsetTop; // Adjust the height as needed
                window.scrollTo({
                    top: targetHeight,
                    behavior: 'smooth'
                });
            }
            else{
                const targetHeight = targetSection.offsetTop - 100; // Adjust the height as needed
                window.scrollTo({
                    top: targetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
