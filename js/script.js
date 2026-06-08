
document.addEventListener("DOMContentLoaded", function() {
    
    
    const formContato = document.getElementById("form-contato");
    const modalFeedback = document.getElementById("modal-feedback");
    const btnFecharModal = document.getElementById("btn-fechar-modal");

  
    if (formContato) {
        
     
        formContato.addEventListener("submit", function(evento) {
            
            evento.preventDefault(); 

           
            limparErros();

            let formularioValido = true;

           
            const campoNome = document.getElementById("nome").value.trim();
            const campoEmail = document.getElementById("email").value.trim();
            const campoMensagem = document.getElementById("mensagem").value.trim();

           
            if (campoNome === "") {
                mostrarErro("erro-nome", "Por favor, preencha o seu nome completo.");
                formularioValido = false;
            }

            
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (campoEmail === "") {
                mostrarErro("erro-email", "O e-mail é obrigatório.");
                formularioValido = false;
            } else if (!regexEmail.test(campoEmail)) {
                mostrarErro("erro-email", "Por favor, insira um e-mail corporativo válido.");
                formularioValido = false;
            }

           
            if (campoMensagem === "") {
                mostrarErro("erro-mensagem", "Descreva a sua solicitação antes de enviar.");
                formularioValido = false;
            }

          
            if (formularioValido) {
              
                modalFeedback.style.display = "flex";
                
                
                formContato.reset();
            }
        });
    }

   
    function mostrarErro(idSpan, mensagem) {
        const spanErro = document.getElementById(idSpan);
        if (spanErro) {
            spanErro.textContent = mensagem;
            spanErro.style.display = "block"; 
        }
    }

    
    function limparErros() {
        const spansErro = document.querySelectorAll(".msg-erro");
        spansErro.forEach(function(span) {
            span.textContent = "";
            span.style.display = "none";
        });
    }

   
    if (btnFecharModal) {
        btnFecharModal.addEventListener("click", function() {
            modalFeedback.style.display = "none";
        });
    }
});