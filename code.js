//Crie um site onde o usuário insere o endereço e o sistema o exibe formatado//

function DADOSPESSOAIS() {

    var area = document.getElementById("area")

  var nome = document.getElementById("Nome")
  var rua = document.getElementById("Rua")
  var numero = document.getElementById("Numero")
  var bairro = document.getElementById("Bairro")
  var cidade = document.getElementById("Cidade")
  var estado = document.getElementById("Estado")
  var cep = document.getElementById("CEP")
  
   area.innerHTML ="ENDEREÇO FORMATADO:" + " " + nome.value + ", " + rua.value + ", " + numero.value + ", " + bairro.value +
   ", " + cidade.value + ", " + estado.value + ", " + cep.value + "." 

}