document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (para versão responsiva)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header .container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
    });
    
    // Filtros - simulação de filtragem
    const filterSelects = document.querySelectorAll('.filter-group select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            // Aqui você implementaria a lógica de filtragem real
            console.log(`Filtrando por: ${this.id} = ${this.value}`);
        });
    });
    
    // Efeito hover nos cards de produto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.product-actions').style.bottom = '0';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.product-actions').style.bottom = '-50px';
        });
    });
    
    // Adicionar ao carrinho
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Simular adição ao carrinho
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            console.log(`Adicionado ao carrinho: ${productName} - ${productPrice}`);
            
            // Atualizar contador do carrinho
            const cartCount = document.querySelector('.cart-count') || document.createElement('span');
            if (!document.querySelector('.cart-count')) {
                cartCount.className = 'cart-count';
                document.querySelector('.cart-btn').appendChild(cartCount);
            }
            
            const currentCount = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = currentCount + 1;
            
            // Feedback visual
            this.textContent = 'Adicionado!';
            setTimeout(() => {
                this.textContent = 'Add Carrinho';
            }, 2000);
        });
    });
    
    // Visualização rápida
    const quickViewBtns = document.querySelectorAll('.quick-view');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Simular visualização rápida
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            console.log(`Visualização rápida: ${productName}`);
            
            // Aqui você poderia abrir um modal com mais detalhes
            alert(`Visualização rápida: ${productName}`);
        });
    });
});