function confereUsuario(event){
    event.preventDefault();

    const usuario= document.getElementById("idLogin").value;
    const senha = document.getElementById("idSenha").value;
    
    // validar usuario via banco

     localStorage.setItem('user',usuario);

    //Fazer redirect para a pagina principal


    window.location.href = "./principal.html"; 

    



    // if (login==usuario.value && pass==senha.value) {
        
    //     alert("USUÁRIO LOGADO COM SUCESSO");
    //     window.location.href = "./principal.html";  
    // }else{
    //     alert("USUÁRIO   E SENHA INVÁLIDOS");
    // }

}