function validarSenha(event) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Tente novamente.');
        event.preventDefault(); // Impede o envio do formulário
    } else {
        // Redireciona para outra página se as senhas coincidirem
        window.location.href = './html/cep.html'; // Ajuste o caminho se necessário
    }
}

