var maior=0, menor=0
var totalCadastro=0

function cadastro () {
  if (totalCadastro>=10) {
    alert('Limite de 10 cadastros atingido!')
    return
  }

  var nome=document.getElementById('nome')
  var end=document.getElementById('end')
  var tel=document.getElementById('tel')
  var idade=parseInt(document.getElementById('idade').value)

  if (nome.value.trim() === "" || end.value.trim() === "" || tel.value.trim() === "" || isNaN(idade)) {
    alert('Por favor, preencha todos os campos!')
    return
  } else if (idade>=18) {
    maior++
  } else {
    menor++
  }

  totalCadastro++

  document.getElementById('sit').innerHTML= `Cadastro realizados com sucesso! Total de cadastros: ${totalCadastro}. <br>Foram cadastradas ${maior} pessoa(s) maior(es) de idade e ${menor} menor(es) de idade.`
}

