const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza!',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim!',
  'Minhas fontes dizem que não.',
  'Provavelmente',
  'Não é possível prever agora',
  'Pespectiva boa!',
  'As pespectivas não são boas.',
  'Sim.',
  'Concentre-se na pergunta novamente.',
  'Sinais apontam que sim.'
]
// O atributo .length vai fazer com que o javascript faça uma  busca desde a resposta da posição 0, até qualquer resposta disponível no código.

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite a sua pergunta')
    return
  }

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
}
