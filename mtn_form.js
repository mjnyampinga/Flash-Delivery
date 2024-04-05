document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Payment done successfully!';
    thankYouMessage.style.color = '#FF69B4'; // Style the thank you message as needed
    thankYouMessage.style.textAlign = 'center'; // Center the thank you message
    thankYouMessage.style.marginTop = '20px'; // Add some top margin to the thank you message

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.display = 'block'; // Display the OK button as a block-level element
    okButton.style.margin = 'auto'; // Center the OK button horizontally
    okButton.style.marginTop = '20px'; // Add some top margin to the OK button

    // Function to handle OK button click event
    function redirectToHomepage() {
        window.location.href = 'index.html'; // Replace 'index.html' with your homepage URL
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        form.appendChild(thankYouMessage); // Append thank you message to the form
        form.appendChild(okButton); // Append OK button to the form
    });

    // Event listener for OK button click
    okButton.addEventListener('click', redirectToHomepage);
});
