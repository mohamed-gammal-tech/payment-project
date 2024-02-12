// Example of JavaScript code if you need to handle the 'Select' button click
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to buttons
    var buttons = document.querySelectorAll('.card button');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        alert('You have selected a plan!');
        // You can add more functionality here as required
      });
    });
  });
  