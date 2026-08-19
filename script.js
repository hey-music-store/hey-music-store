function agregarAlCarrito(nombreProducto) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = `🛒 ¡${nombreProducto} agregado al carrito!`;
    notificacion.classList.remove('oculta');

    setTimeout(() => {
        notificacion.classList.add('oculta');
    }, 3000);
}
document.getElementById('search-bar').addEventListener('input', (e) => { 
    const search = e.target.value.toLowerCase(); 
    const cards = document.querySelectorAll('.cat-card'); 
    cards.forEach(card => { 
        const name = card.querySelector('span').textContent.toLowerCase(); 
        card.style.display = name.includes(search)? '';
    })                   
    }); 
