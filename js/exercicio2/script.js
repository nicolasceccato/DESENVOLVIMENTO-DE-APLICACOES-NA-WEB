function testeVal(){
    let nome = document.Form.Nome.value;
    let sobrenome = document.Form.Sobrenome.value;
    let profissao = document.Form.Profissao.value;
    let idade = document.Form.Idade.value;

    if (nome === '' || sobrenome === '' || profissao === '' || idade === ''){
        alert("Necessário preencher todos os campos antes de enviar o formulario!!!");
    } else {
        alert("Enviado!");
    }
}