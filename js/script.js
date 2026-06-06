// Aguarda todo o HTML da página carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura o formulário e o modal da página de Contato usando os IDs que criamos
    const formContato = document.getElementById("form-contato");
    const modalFeedback = document.getElementById("modal-feedback");
    const btnFecharModal = document.getElementById("btn-fechar-modal");

    // Verifica se o formulário existe na página atual (para não dar erro nas outras páginas)
    if (formContato) {
        
        // Fica "escutando" o momento em que o usuário clica em "Enviar"
        formContato.addEventListener("submit", function(evento) {
            // Impede a página de recarregar (padrão do formulário)
            evento.preventDefault(); 

            // Reseta todas as mensagens de erro antes de validar novamente
            limparErros();

            let formularioValido = true;

            // 1. Captura os valores digitados nos campos
            const campoNome = document.getElementById("nome").value.trim();
            const campoEmail = document.getElementById("email").value.trim();
            const campoMensagem = document.getElementById("mensagem").value.trim();

            // 2. Validação do Nome (Não pode estar vazio)
            if (campoNome === "") {
                mostrarErro("erro-nome", "Por favor, preencha o seu nome completo.");
                formularioValido = false;
            }

            // 3. Validação do E-mail (Deve ter formato válido usando Expressão Regular)
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (campoEmail === "") {
                mostrarErro("erro-email", "O e-mail é obrigatório.");
                formularioValido = false;
            } else if (!regexEmail.test(campoEmail)) {
                mostrarErro("erro-email", "Por favor, insira um e-mail corporativo válido.");
                formularioValido = false;
            }

            // 4. Validação da Mensagem (Não pode estar vazia)
            if (campoMensagem === "") {
                mostrarErro("erro-mensagem", "Descreva a sua solicitação antes de enviar.");
                formularioValido = false;
            }

            // 5. Se tudo estiver correto, exibe o Modal de Sucesso!
            if (formularioValido) {
                // Mostra o modal alterando o estilo (isso fará ele aparecer na tela)
                modalFeedback.style.display = "flex";
                
                // Limpa os campos do formulário para o próximo uso
                formContato.reset();
            }
        });
    }

    // --- FUNÇÕES AUXILIARES ---

    // Função para injetar o texto de erro no HTML e deixá-lo visível
    function mostrarErro(idSpan, mensagem) {
        const spanErro = document.getElementById(idSpan);
        if (spanErro) {
            spanErro.textContent = mensagem;
            spanErro.style.display = "block"; // Torna a mensagem visível
        }
    }

    // Função para esconder e limpar todos os textos de erro
    function limparErros() {
        const spansErro = document.querySelectorAll(".msg-erro");
        spansErro.forEach(function(span) {
            span.textContent = "";
            span.style.display = "none";
        });
    }

    // --- LÓGICA DO MODAL ---

    // Se o botão de fechar o modal existir, fecha ele ao clicar
    if (btnFecharModal) {
        btnFecharModal.addEventListener("click", function() {
            modalFeedback.style.display = "none";
        });
    }
});