// gsap.to(".section-title", {duration: 2, x:100});

// Get all elements with the "xyz" class
const slideLeft = document.querySelectorAll('.slide-left');
const slideRight = document.querySelectorAll('.slide-right');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const threshold = 0.7; // Adjust this value to change the trigger point

    return (
        rect.top <= window.innerHeight * threshold &&
        rect.bottom >= 0
    );
}

// Iterate through each section title and check if it's in the viewport
slideRight.forEach(item => {
    gsap.set(item, { opacity: 0, x:-30 });
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the section title is in the viewport
        if (isInViewport(item)) {
            // Animate the section title using GSAP
            gsap.to(item, { opacity: 1, x: 0, duration: 1 });
        } else {
            // If not in the viewport, you can reset or hide the element
        }
    });
});

// Iterate through each section title and check if it's in the viewport
slideLeft.forEach(item => {
    gsap.set(item, { opacity: 0, x:30 }); // Set x to 30 for right slide
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the section title is in the viewport
        if (isInViewport(item)) {
            // Animate the section title using GSAP
            gsap.to(item, { opacity: 1, x: 0, duration: 1});
        } else {
            // If not in the viewport, you can reset or hide the element
            // gsap.to(text, { opacity: 0, x:30 });
        }
    });
});
