document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envio do formulário
    setTimeout(function() {
        // Redirecionar para página de agradecimento
        window.location.href = 'agradecimento.html';
    }, 1000);
});