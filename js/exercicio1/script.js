document.addEventListener("DOMContentLoaded", function() {
    const maiusculaCheckbox = document.getElementById("maiuscula");
    const minusculaCheckbox = document.getElementById("minuscula");

    maiusculaCheckbox.addEventListener("change", function() {
        if (maiusculaCheckbox.checked) {
            maiuscula();
        }
    });

    minusculaCheckbox.addEventListener("change", function() {
        if (minusculaCheckbox.checked) {
            minuscula();
        }
    });
});

function minuscula() {
    console.log("entrou na funcao minuscula");
    document.Form.Nome.value = document.Form.Nome.value.toLowerCase();
    document.Form.Sobrenome.value = document.Form.Sobrenome.value.toLowerCase();
    document.Form.Profissao.value = document.Form.Profissao.value.toLowerCase();

    document.Form.Maiuscula.checked = false;
    console.log("saiu da funcao minuscula");
};

function maiuscula() {
    console.log("entrou na funcao maiuscula");
    document.Form.Nome.value = document.Form.Nome.value.toUpperCase();
    document.Form.Sobrenome.value = document.Form.Sobrenome.value.toUpperCase();
    document.Form.Profissao.value = document.Form.Profissao.value.toUpperCase();

    document.Form.Minuscula.checked = false;
    console.log("saiu da funcao maiuscula");
};


