// Aguarda todo o conteúdo HTML da página ser carregado
document.addEventListener("DOMContentLoaded", function () {

// Seleciona os elementos relacionados ao modal SOS
    const abrirSOS = document.getElementById("abrirSOS");
    const fecharSOS = document.getElementById("fecharSOS");
    const modalSOS = document.getElementById("modalSOS");
    const enviarSOS = document.getElementById("enviarSOS");

// Evento para abrir a janela de emergência SOS
    if (abrirSOS) {

        abrirSOS.addEventListener("click", function () {

// Exibe o modal na tela
            modalSOS.style.display = "flex";

        });

    }

 // Evento para fechar a janela de emergência

    if (fecharSOS) {

        fecharSOS.addEventListener("click", function () {

 // Oculta o modal
            
            modalSOS.style.display = "none";

        });

    }

// Evento responsável por transmitir o alerta SOS

    if (enviarSOS) {

        enviarSOS.addEventListener("click", function () {

 // Exibe uma mensagem de confirmação

            alert("🚨 SOS transmitido via satélite OrbitSafe com sucesso.");

 // Fecha o modal após o envio

            modalSOS.style.display = "none";

        });

    }

// Fecha o modal caso o usuário clique fora da área de conteúdo

    window.addEventListener("click", function (event) {

        if (event.target === modalSOS) {

 // Oculta o modal

            modalSOS.style.display = "none";

        }

    });

});