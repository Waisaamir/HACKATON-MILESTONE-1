// Function to toggle visibility of a section
function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Add event listeners for buttons to show/hide sections
document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('about-button');
    const servicesButton = document.getElementById('services-button');
    const contactButton = document.getElementById('contact-button');

    if (aboutButton) {
        aboutButton.addEventListener('click', () => toggleSection('about'));
    }
    if (servicesButton) {
        servicesButton.addEventListener('click', () => toggleSection('services'));
    }
    if (contactButton) {
        contactButton.addEventListener('click', () => toggleSection('contact'));
    }
});
