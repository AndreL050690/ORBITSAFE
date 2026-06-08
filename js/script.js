document.addEventListener("DOMContentLoaded", function () {

    const abrirSOS = document.getElementById("abrirSOS");
    const fecharSOS = document.getElementById("fecharSOS");
    const modalSOS = document.getElementById("modalSOS");
    const enviarSOS = document.getElementById("enviarSOS");

    if (abrirSOS) {

        abrirSOS.addEventListener("click", function () {

            modalSOS.style.display = "flex";

        });

    }

    if (fecharSOS) {

        fecharSOS.addEventListener("click", function () {

            modalSOS.style.display = "none";

        });

    }

    if (enviarSOS) {

        enviarSOS.addEventListener("click", function () {

            alert("🚨 SOS transmitido via satélite OrbitSafe com sucesso.");

            modalSOS.style.display = "none";

        });

    }

    window.addEventListener("click", function (event) {

        if (event.target === modalSOS) {

            modalSOS.style.display = "none";

        }

    });

});