async function loadFooter() {
    try {
        const response = await fetch('/templates/footer.html');
        const html = await response.text();
        document.getElementById('footer-placeholder').innerHTML = html;
    } catch (e) {
        console.error('Could not load footer:', e);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
