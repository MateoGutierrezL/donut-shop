<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delicias de Donas</title>
    <link rel="stylesheet" href="styles/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <?php include 'components/header.php'; ?>

    <main>
        <section id="hero">
            <div class="hero-content">
                <h2>El paraíso de las donas te espera</h2>
                <p>Donas frescas y deliciosas, horneadas con amor todos los días.</p>
                <a href="#menu" class="cta-button">Ver Menú</a>
            </div>
            
        </section>

        <section id="menu" class="menu-section">
            <h2 class="section-title">Nuestro Delicioso Menú</h2>
            <div class="menu-grid" id="menu-grid">
                </div>
        </section>

        <aside id="cart-sidebar" class="cart-sidebar">
            <div class="cart-header">
                <h3>🛒 Carrito de Compras</h3>
                <button id="close-cart-btn" class="close-cart-btn">&times;</button>
            </div>
            <div id="cart-items" class="cart-items">
                </div>
            <div class="cart-total">
                <span>Total:</span>
                <span id="cart-total">$0.00</span>
            </div>
            <button class="checkout-btn">Finalizar Compra</button>
        </aside>
    </main>

    <?php include 'components/footer.php'; ?>

    <script src="js/app.js"></script>
</body>
</html>
