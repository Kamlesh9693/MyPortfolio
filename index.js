// Scroll to Top Button
const scrollToTopButton = document.querySelector('.footer-iconTop a');
const rootElement = document.documentElement;

window.addEventListener('scroll', () => {
    if (rootElement.scrollTop > 200) {
        scrollToTopButton.style.display = 'block'; // Show button when scrolling down
    } else {
        scrollToTopButton.style.display = 'none'; // Hide button when at the top
    }
});

scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default anchor click behavior
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll to top
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form field values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mobile = form.querySelector('input[type="number"]').value;
    const subject = form.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = form.querySelector('textarea').value;

    // Simple validation
    if (!name || !email || !mobile || !subject || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Process form submission (e.g., send data to server or show a success message)
    alert("Your message has been sent successfully!");

    // Clear form after submission (optional)
    form.reset();
});
