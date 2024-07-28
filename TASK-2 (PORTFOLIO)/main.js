var typed = new Typed(".text",{
    strings: ["Full stack Web Developer"],
    typeSpeed: 100,
    
})

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = 100; // Adjust this value as needed
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});


const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});