document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    // Datos de las donas para la tienda
    const donuts = [
        { id: 1, name: "Dona Clásica Glaseada", price: 1.50, image: "images/donaClasicaGlaseado" },
        { id: 2, name: "Dona de Chocolate Doble", price: 2.00, image: "images/donaChocolateDoble" },
        { id: 3, name: "Dona de Fresa con Chispas", price: 1.75, image: "images/donaFresaChispas" },
        { id: 4, name: "Dona de Matcha", price: 2.50, image: "images/donaMatcha" },
        { id: 5, name: "Dona de Canela", price: 1.60, image: "images/donaCanela" },
        { id: 6, name: "Dona de Café", price: 2.20, image: "images/donaCafe" }
    ];

    let cart = [];

    // Función para renderizar las donas en la página
    function renderDonuts() {
        menuGrid.innerHTML = '';
        donuts.forEach(donut => {
            const donutCard = document.createElement('div');
            donutCard.classList.add('donut-card');
            donutCard.innerHTML = `
                <img src="${donut.image}" alt="${donut.name}" class="donut-image">
                <h3 class="donut-name">${donut.name}</h3>
                <p class="donut-price">$${donut.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${donut.id}">Añadir al carrito</button>
            `;
            menuGrid.appendChild(donutCard);
        });
    }

    // Función para abrir y cerrar el carrito
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Función para añadir una dona al carrito
    function addToCart(donutId) {
        const donut = donuts.find(d => d.id == donutId);
        if (donut) {
            const existingItem = cart.find(item => item.id == donutId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...donut, quantity: 1 });
            }
            updateCartUI();
        }
    }

    // Event listener para los botones "Añadir al carrito"
    menuGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const donutId = e.target.dataset.id;
            addToCart(donutId);
        }
    });

    // Función para actualizar la interfaz del carrito
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let totalItems = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <span>x${item.quantity}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
            totalItems += item.quantity;
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        cartCountElement.textContent = totalItems;
    }

    // Inicializar la tienda
    renderDonuts();
});
