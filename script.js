// Jaar in footer
document.getElementById('year').textContent = new Date().getFullYear();

// CV download (placeholder)
document.getElementById('downloadCv').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Nog geen CV toegevoegd. Zet je CV als PDF in /assets/cv.pdf en verander de link in de code.');
});

// Contact formulier → mailto
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // ✅ Vervang dit door je eigen emailadres
    const to = 'jouwmail@example.com';

    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}\n\n(Verstuurd via portfolio website)`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});