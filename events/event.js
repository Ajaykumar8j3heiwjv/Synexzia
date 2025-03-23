// Function to handle the back button click
function goBack() {
    // You can replace this with your specific back navigation logic
    window.history.back();
    // If you want to navigate to a specific page instead:
    // window.location.href = 'your-previous-page.html';
}

// Function to handle the register button click
function register() {
    // You can replace this with your registration logic
    // For example, show a modal or redirect to a registration page
    // alert('Registration form will open here!');
    // Example redirect:
    window.location.href = 'https://forms.gle/QgEmRGXHa66GJtVZA';
}

// Add some visual effects when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Fade in the content card
    const contentCard = document.querySelector('.content-card');
    contentCard.style.opacity = '0';
    
    setTimeout(() => {
        contentCard.style.transition = 'opacity 1s ease';
        contentCard.style.opacity = '1';
    }, 100);
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Add responsive behavior for mobile devices
function checkMobile() {
    const isMobile = window.innerWidth <= 768;
    const sections = document.querySelectorAll('.section');
    
    if (isMobile) {
        sections.forEach(section => {
            section.style.marginBottom = '15px';
        });
    } else {
        sections.forEach(section => {
            section.style.marginBottom = '25px';
        });
    }
}

// Run on load and resize
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);