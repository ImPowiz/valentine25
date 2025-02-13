// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        function(){
            displayBearHeart(); // Display the cat-heart.gif
        }
            
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to display the cat.gif initially
function displayBear() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var bearImage = new Image();
    // Set the source (file path) for the cat image
    bearImage.src = 'rGif.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    bearImage.alt = 'Bear';
    // When the cat image is fully loaded, add it to the image container
    bearImage.onload = function() {
        imageContainer.appendChild(bearImage);
    };
}

// Function to display the cat-heart.gif
function displayBearHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var bearHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    bearHeartImage.src = 'r2Gif.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    bearHeartImage.alt = 'Bear Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    bearHeartImage.onload = function() {
        imageContainer.appendChild(bearHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayBear();
