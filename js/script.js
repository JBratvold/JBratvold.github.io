// gsap.to(".section-title", {duration: 2, x:100});

// Get all elements with the "xyz" class
const sectionTitles = document.querySelectorAll('.section-title');
const sectionTexts = document.querySelectorAll('.section-text');


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
sectionTitles.forEach(sectionTitle => {
    gsap.set(sectionTitle, { opacity: 0, x:-30 });
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the section title is in the viewport
        if (isInViewport(sectionTitle)) {
            // Animate the section title using GSAP
            gsap.to(sectionTitle, { opacity: 1, x: 0, duration: 1 });
        } else {
            // If not in the viewport, you can reset or hide the element
        }
    });
});

// Iterate through each section title and check if it's in the viewport
sectionTexts.forEach(text => {
    gsap.set(text, { opacity: 0, x:30 }); // Set x to 30 for right slide
    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the section title is in the viewport
        if (isInViewport(text)) {
            // Animate the section title using GSAP
            gsap.to(text, { opacity: 1, x: 0, duration: 1});
        } else {
            // If not in the viewport, you can reset or hide the element
            // gsap.to(text, { opacity: 0, x:30 });
        }
    });
});
