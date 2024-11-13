// Function to toggle visibility of a section
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}
// Add event listeners for buttons to show/hide sections
document.addEventListener('DOMContentLoaded', function () {
    var aboutButton = document.getElementById('about-button');
    var servicesButton = document.getElementById('services-button');
    var contactButton = document.getElementById('contact-button');
    if (aboutButton) {
        aboutButton.addEventListener('click', function () { return toggleSection('about'); });
    }
    if (servicesButton) {
        servicesButton.addEventListener('click', function () { return toggleSection('services'); });
    }
    if (contactButton) {
        contactButton.addEventListener('click', function () { return toggleSection('contact'); });
    }
});
