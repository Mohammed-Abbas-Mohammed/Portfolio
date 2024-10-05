// script.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.nav_item');
    const sections = Array.from(document.querySelectorAll('.content-section'));
    const nextButton = document.getElementById('next-section');

    // Function to set active section and button
    function setActiveSection(targetId) {
        // Remove active class from all buttons and sections
        buttons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to the clicked button and the corresponding section
        const targetButton = document.querySelector(`button[data-target="${targetId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Click event for navigation buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            // Set active section and button
            setActiveSection(targetId);
        });
    });

    // Click event for next section button
    let currentIndex = sections.findIndex(section => section.classList.contains('active'));
    if (currentIndex === -1) {
        // Default to first section if none is active
        currentIndex = 0;
    }

    nextButton.addEventListener('click', () => {
        // Move to the next section
        currentIndex = (currentIndex + 1) % sections.length;
        const targetId = sections[currentIndex].id;
        
        // Set active section and button
        setActiveSection(targetId);
    });

    // Set default active section on page load
    const defaultSectionId = 'about'; // Set this to your default section ID
    setActiveSection(defaultSectionId);
});



// script.js
document.getElementById('copyButton').addEventListener('click', function() {
    var textArea = document.getElementById('textToCopy');
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        var feedbackElement = document.getElementById('copyFeedback');
        feedbackElement.textContent = 'Email copied to clipboard!';
        
        // Hide the feedback message after 2 seconds
        setTimeout(function() {
            feedbackElement.textContent = '';
        }, 2000); // 2000 milliseconds = 2 seconds
    } catch (err) {
        var feedbackElement = document.getElementById('copyFeedback');
        feedbackElement.textContent = 'Failed to copy text.';
        
        // Optionally, you can also hide this feedback message after 2 seconds
        setTimeout(function() {
            feedbackElement.textContent = '';
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slider');

//     // Adjust animation duration based on the number of icons or container width if needed
//     const iconCount = slider.children.length;
//     const animationDuration = 10; // Base duration in seconds
//     slider.style.animationDuration = `${animationDuration}s`;
// });


// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const navItems = document.querySelectorAll('.nav_item');
//     const sections = Array.from(document.querySelectorAll('section'));
//     const nextButton = document.getElementById('next-section');
    
//     // Smooth scroll function
//     function scrollToSection(targetId) {
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     }

//     // Click event for navigation buttons
//     navItems.forEach(button => {
//         button.addEventListener('click', () => {
//             const targetId = button.getAttribute('data-target');

//             // Remove active class from all buttons
//             navItems.forEach(btn => btn.classList.remove('active'));

//             // Add active class to the clicked button
//             button.classList.add('active');

//             // Scroll to the target section
//             scrollToSection(targetId);
//         });
//     });

//     // Set default section to 'about'
//     const defaultSection = 'about';
//     scrollToSection(defaultSection);
//     const defaultButton = document.querySelector(`button[data-target="${defaultSection}"]`);
//     defaultButton.classList.add('active');
    
//     // Click event for next section button
//     let currentIndex = sections.findIndex(section => section.id === defaultSection);
    
//     nextButton.addEventListener('click', () => {
//         // Move to the next section
//         currentIndex = (currentIndex + 1) % sections.length;
//         const targetId = sections[currentIndex].id;
        
//         // Remove active class from all buttons
//         navItems.forEach(btn => btn.classList.remove('active'));

//         // Add active class to the button corresponding to the target section
//         const targetButton = document.querySelector(`button[data-target="${targetId}"]`);
//         targetButton.classList.add('active');
        
//         // Scroll to the target section
//         scrollToSection(targetId);
//     });
// });

