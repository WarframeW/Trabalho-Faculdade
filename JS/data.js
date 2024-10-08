
function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }
  
  function ajustaData(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona a barra entre o dia e o mês
    v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
    //Adiciona a barra entre o mês e o ano
    v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
  }