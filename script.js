//Change text effect when the user hovers their mouse inside the container
document.addEventListener('DOMContentLoaded', function () {
    // Get the outer container element
    var outerContainer = document.querySelector('.outer-container');

    // Get the inner container element with the h1 tag
    var innerContainer = document.querySelector('.inner-container h1');

    // Add mouseover event listener to the outer container
    outerContainer.addEventListener('mouseover', function () {
        // Change the text content of the h1 tag inside the inner container
        innerContainer.textContent = 'Click Me';
    });

    // Add mouseout event listener to the outer container
    outerContainer.addEventListener('mouseout', function () {
        // Change the text content back to 'Bare Minimum' when the mouse leaves the outer container
        innerContainer.textContent = 'Bare Minimum';
    });
});
