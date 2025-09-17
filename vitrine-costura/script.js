// ======================
// GALERIA + LIGHTBOX
// ======================
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// ======================
// ENVIO DE MENSAGEM PARA WHATSAPP
// ======================
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('Pedidos').value;
    const numero = '5511967192616'; // coloque seu número aqui sem traços

    const url = `https://wa.me/${numero}?text=Nome:%20${encodeURIComponent(nome)}%0AMensagem:%20${encodeURIComponent(msg)}`;

    if(confirm("Sua mensagem será enviada pelo WhatsApp. Continuar?")) {
        window.open(url, '_blank');
        // Limpa o formulário após enviar
        form.reset();
    }
});

// Botão Instagram
const instagramBtn = document.getElementById('instagramBtn');
instagramBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/fofys_atelie/', '_blank'); // substitua 'seuusuario' pelo perfil da costureira
});
