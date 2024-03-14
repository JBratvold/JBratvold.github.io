// gsap.to(".section-title", {duration: 2, x:100});

// Get all elements with the "xyz" class
const sectionTitles = document.querySelectorAll('.section-title');
const sectionTexts = document.querySelectorAll('.section-text');
const slidesFromLeft = document.querySelectorAll('.slide-in-from-left');
const slidesFromRight = document.querySelectorAll('.slide-in-from-right');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Iterate through each section title and check if it's in the viewport
slidesFromRight.forEach(item => {
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
slidesFromLeft.forEach(item => {
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
