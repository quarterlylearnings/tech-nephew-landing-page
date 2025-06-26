// Simple footer loader
async function loadFooter() {
    try {
        const response = await fetch('../templates/footer.html');
        const footerHTML = await response.text();
        document.getElementById('footer-placeholder').innerHTML = footerHTML;
    } catch (error) {
        console.error('Could not load footer:', error);
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}