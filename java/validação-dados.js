document.getElementById('formular').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const dataNascimento = document.getElementById('idDtNascimento').value;
            const genero = document.getElementById('genero').value;
            const cpf = document.getElementById('idDocumento').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('idTelefone').value;
            const login = document.getElementById('login').value;
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmar-senha').value;

            const response = await fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, dataNascimento, genero, cpf, email, telefone, login, senha })
            });

            const data = await response.json();
            alert(data.message);
        });

function validarSenha(event) {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Tente novamente.');
        event.preventDefault(); // Impede o envio do formulário
    }
}
