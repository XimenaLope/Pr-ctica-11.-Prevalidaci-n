function validacion(){
  valor = document.getElementById("title").value;
if( valor === null || valor.length === 0 || /^\s+$/.test(valor) ) {
  alert("Coloca un titulo valido");
  return false;
}
valor = document.getElementById("Descripcion").value;
if( valor === null || valor.length === 0 || /^\s+$/.test(valor) ) {
alert("Coloca una Descripcion valida");
return false;
}
  elemento = document.getElementById("accept");
   if( !elemento.checked ) {
     alert("Acepta las licencias de software");
    return false;
  }

  }
