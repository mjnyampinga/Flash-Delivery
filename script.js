document.addEventListener('DOMContentLoaded', function() {
    // Define constants
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cartIcon');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.querySelector('#cartModal .close');
    const cartItemsList = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const navToggle = document.querySelector('.logo');
    const navMenu = document.querySelector('nav ul');

    // Initialize cart from local storage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Open cart modal when clicking on cart icon
    cartIcon.addEventListener('click', function() {
        updateCart();
        cartModal.style.display = 'block';
    });

    // Close cart modal
    function closeModalFunction() {
        cartModal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeModalFunction);

    // Close cart modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeModalFunction();
        }
    });

    // Add product to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.dataset.productId;
            const productName = this.parentElement.querySelector('h3').innerText;
            const productPrice = this.parentElement.querySelector('.price').innerText;
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCart();
            updateLocalStorage();
        });
    });

    // Update cart content and total
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(li);
            total += parseFloat(item.price.replace('$', ''));
        });
        document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
        document.getElementById('cartItemCount').textContent = cart.length;
    }

    // Update local storage with cart data
    function updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Checkout button functionality
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            // Display checkout options and payment methods
            // For demonstration purposes, let's assume we're showing a modal
            const checkoutOptionsModal = document.getElementById('checkoutOptionsModal');
            checkoutOptionsModal.style.display = 'block';
            closeModalFunction(); // Close cart modal after checkout
        } else {
            alert('Your cart is empty. Please add items before proceeding to checkout.');
        }
    });

    // Clear cart button functionality
    clearCartBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your cart?')) {
            cart = [];
            updateCart();
            updateLocalStorage();
            
        }
        
    }); 

    // Toggle navigation menu on small screens
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Hide navigation menu when a menu item is clicked
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Login button functionality
    loginBtn.addEventListener('click', function() {
        alert('You can now login!');
        userName = document.getElementById('userName').value;
        password = document.getElementById('password').value;

        // Add logic for handling login
    });

    // Register button functionality
    registerBtn.addEventListener('click', function() {
        // Display registration form
        alert('You can now register your account!');
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
        tel = document.getElementById('tel').value;
    });

    // Load cart items from local storage on page load
    updateCart();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the close icon element
    const closeIcon = document.querySelector('.close');

    // Add event listener to the close icon
    closeIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        window.location.href = 'index.html'; // Redirect to the home page
        // Assuming 'index.html' is your home page
    });

    // Function to hide the place order bar
    function hidePlaceOrderBar() {
        const placeOrderBar = document.getElementById('checkoutOptionsModal');
        placeOrderBar.style.display = 'none';
    }

    // Call hidePlaceOrderBar function
    hidePlaceOrderBar();
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the close button element
    var closeButton = document.querySelector('.close');

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        // Redirect to the homepage
        window.location.href = 'index.html'; // Replace 'index.html' with the path to your homepage
    });
});
