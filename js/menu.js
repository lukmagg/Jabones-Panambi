addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.querySelector('.btn-menu');
    if (botonMenu) {
        botonMenu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menu-items');
            menuItems.classList.toggle('show');
        })
    }
})