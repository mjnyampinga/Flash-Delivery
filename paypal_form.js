document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#paypalForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // You can perform additional validation here
        
        // Example: Get form data
        const formData = new FormData(form);
        
        // Example: Send form data to server using fetch API
        fetch('process_paypal_payment.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response data
            console.log(data);
            // Display thank you message
            const thankYouMessage = document.createElement('div');
            thankYouMessage.textContent = 'Thank you for your submission!';
            document.body.appendChild(thankYouMessage);
            
            // Create OK button for redirection
            const okButton = document.createElement('button');
            okButton.textContent = 'OK';
            okButton.addEventListener('click', function() {
                window.location.href = 'index.html'; // Redirect to homepage
            });
            document.body.appendChild(okButton);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with your fetch operation:', error);
        });
    });
});
