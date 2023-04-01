const form = document.getElementById('camps');
const numeroA = document.getElementById('numero-A');
let formEValido = false;
const numeroB = document.getElementById('numero-B');
const mensagemSucesso = `Operação realizada`;
const mensagemErro = `Número A menor que número B`;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    
        if (numeroB.value > numeroA.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'none';
       
        numeroA.value = '';
        numeroB.value = '';
        
        } else {
            const containerMensagemErro = document.querySelector('.error-message');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        }
})