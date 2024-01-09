// invertedScript.js holds the same functionality as script.js,
// only inverted script.js has different class and ID names
// due... to being the inverse.

// Change text effect when the user hovers their mouse inside the container
document.addEventListener('DOMContentLoaded', function () {
    // Get the outer container element
    var outerContainer = document.querySelector('.inverted-outer-container');

    // Get the link element
    var link = document.querySelector('.inverted-inner-container h1 a');

    // Adds a mouseover event listener to the outer container
    outerContainer.addEventListener('mouseover', function () {
        // Change the text content and href attribute of the link
        link.textContent = 'Click Me';
        link.href = 'inverted index.html';
    });

    // Adds a mouseout event listener to the outer container
    outerContainer.addEventListener('mouseout', function () {
        // Change the text content and href attribute back to the original values
        link.textContent = 'Bare Minimum';
        link.href = 'index.html'; // Corrected the href attribute
    });
});
