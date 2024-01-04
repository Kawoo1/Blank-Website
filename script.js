//Change text effect when the user hovers their mouse inside the container
document.addEventListener('DOMContentLoaded', function () {
    // Get the outer container element
    var outerContainer = document.querySelector('.outer-container');

    // Get the link element
    var link = document.getElementById('link');

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
        link.href = 'inverted index.html';
    });
});

