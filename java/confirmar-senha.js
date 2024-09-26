
function validarSenha(event) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Tente novamente.');
        event.preventDefault(); // Impede o envio do formulário
    }
}
