document.addEventListener('DOMContentLoaded', () => {
    // Smooth Page Load (makes the body fade in)
    document.body.style.opacity = 1;

    // --- NEW AND RELIABLE 'FADE IN ON SCROLL' CODE ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkElementsOnScroll() {
        const windowHeight = window.innerHeight;

        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            // If the top of the element is visible in the window
            if (elementTop < windowHeight - 100) { // -100 makes it trigger a bit sooner
                element.classList.add('appear');
            }
        });
    }

    // Check elements when the page first loads
    checkElementsOnScroll();

    // Check elements again every time the user scrolls
    window.addEventListener('scroll', checkElementsOnScroll);
    // --- END OF NEW ANIMATION CODE ---


    // Smooth Scrolling for Navigation Links (This code remains the same)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const extraOffset = 10;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - extraOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});