function agregarAlCarrito(nombreProducto) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = `🛒 ¡${nombreProducto} agregado al carrito!`;
    notificacion.classList.remove('oculta');

    setTimeout(() => {
        notificacion.classList.add('oculta');
    }, 3000);
}
document.title="Hey Music Store";
