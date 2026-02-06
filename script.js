// 1. Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if user previously selected dark mode
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    toggleButton.innerText = "☀️ Light Mode";
}

toggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        toggleButton.innerText = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.innerText = "☀️ Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});

// 2. Simple Form Validation (Only runs on Contact page)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop form from actually sending
        
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Reset errors
        document.querySelectorAll('.error').forEach(el => el.innerText = '');

        // Validate Name
        if (name.value.trim() === '') {
            document.getElementById('nameError').innerText = "Name is required.";
            isValid = false;
        }

        // Validate Email
        if (!email.value.includes('@') || !email.value.includes('.')) {
            document.getElementById('emailError').innerText = "Please enter a valid email.";
            isValid = false;
        }

        // Validate Message
        if (message.value.trim() === '') {
            document.getElementById('messageError').innerText = "Message cannot be empty.";
            isValid = false;
        }

        if (isValid) {
            alert('Thank you, Chris will get back to you soon!');
            contactForm.reset();
        }
    });
}
