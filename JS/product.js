document.addEventListener('DOMContentLoaded', function() {
    // Troca de imagens ao clicar nas thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove a classe active de todas as thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Adiciona a classe active apenas na thumbnail clicada
            this.classList.add('active');
            
            // Atualiza a imagem principal
            const newSrc = this.src.replace('-thumb', '-large');
            mainImage.src = newSrc;
        });
    });
    
    // Seletor de quantidade
    const qtyMinus = document.querySelector('.qty-minus');
    const qtyPlus = document.querySelector('.qty-plus');
    const qtyInput = document.getElementById('quantity');
    
    qtyMinus.addEventListener('click', function() {
        let value = parseInt(qtyInput.value);
        if (value > 1) {
            qtyInput.value = value - 1;
        }
    });
    
    qtyPlus.addEventListener('click', function() {
        let value = parseInt(qtyInput.value);
        if (value < 10) {
            qtyInput.value = value + 1;
        }
    });
    
    // Tabs de descrição
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove a classe active de todos os botões e conteúdos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Adiciona a classe active apenas no botão e conteúdo clicado
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Adicionar ao carrinho
    const addToCartBtn = document.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        const productName = document.querySelector('.product-info h1').textContent;
        const productPrice = document.querySelector('.current-price').textContent;
        const quantity = qtyInput.value;
        const size = document.getElementById('size').value;
        
        // Validação do tamanho
        if (!size) {
            alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
            return;
        }
        
        // Simular adição ao carrinho
        console.log(`Adicionado ao carrinho: ${productName} - Tamanho: ${size} - Quantidade: ${quantity} - Preço: ${productPrice}`);
        
        // Feedback visual
        this.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho';
        }, 2000);
        
        // Atualizar contador do carrinho (se existir)
        const cartCount = document.querySelector('.cart-count') || document.createElement('span');
        if (!document.querySelector('.cart-count')) {
            cartCount.className = 'cart-count';
            document.querySelector('.cart-btn').appendChild(cartCount);
        }
        
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + parseInt(quantity);
    });
    
    // Botão de favoritos
    const wishlistBtn = document.querySelector('.btn-wishlist');
    wishlistBtn.addEventListener('click', function() {
        const productName = document.querySelector('.product-info h1').textContent;
        
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-heart"></i> Favoritado';
            console.log(`Adicionado aos favoritos: ${productName}`);
        } else {
            this.innerHTML = '<i class="far fa-heart"></i> Favoritos';
            console.log(`Removido dos favoritos: ${productName}`);
        }
    });
});