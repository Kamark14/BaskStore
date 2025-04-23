document.addEventListener('DOMContentLoaded', function() {
    // Validação de senha no cadastro
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordHintItems = document.querySelectorAll('.password-hint li');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Validar comprimento
            if (password.length >= 8) {
                passwordHintItems[0].classList.add('valid');
            } else {
                passwordHintItems[0].classList.remove('valid');
            }
            
            // Validar número
            if (/\d/.test(password)) {
                passwordHintItems[1].classList.add('valid');
            } else {
                passwordHintItems[1].classList.remove('valid');
            }
            
            // Validar caractere especial
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                passwordHintItems[2].classList.add('valid');
            } else {
                passwordHintItems[2].classList.remove('valid');
            }
        });
        
        // Confirmar senha
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', function() {
                if (this.value !== passwordInput.value) {
                    this.setCustomValidity('As senhas não coincidem');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
    }
    
    // Simular login/cadastro
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (form.id === 'login-form') {
                console.log('Login realizado com:', {
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                });
                
                // Redirecionar após login (simulação)
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                console.log('Cadastro realizado com:', {
                    name: document.getElementById('name')?.value,
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                });
                
                // Redirecionar após cadastro (simulação)
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            }
        });
    });
    
    // Login social (simulação)
    const socialBtns = document.querySelectorAll('.btn-social');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('btn-google') ? 'Google' : 'Facebook';
            console.log(`Login com ${provider}`);
            
            // Redirecionar após login social (simulação)
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    });
});