window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 102, 204, 0.9)';
        navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'linear-gradient(to right, #0066cc, #3399ff)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});
