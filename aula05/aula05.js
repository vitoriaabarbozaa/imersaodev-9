// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual o nome do criador do The Sims?", 
    respostas: [
      {opcao: "Shigeru Miyamoto", correto: false},
      {opcao: "Will Wright", correto: true},
      {opcao: "Sid Meier", correto: false},
      {opcao: "Gabe Newell", correto: false}
    ]
  },
  {
    pergunta: "Em que linguagem os Sims se comunicam?", 
    respostas: [
      {opcao: "Simlish", correto: true},
      {opcao: "Inglês", correto: false},
      {opcao: "Simspeak", correto: false},
      {opcao: "Esperanto", correto: false}
    ]
  },
  {
    pergunta: "Qual dessas opções NÃO é uma expansão oficial do The Sims 4?", 
    respostas: [
      {opcao: "Estações", correto: false},
      {opcao: "Vida Universitária", correto: false},
      {opcao: "Vida Selvagem", correto: true},
      {opcao: "Vida Campestre", correto: false}
    ]
  },
  {
    pergunta: "O que acontece se um Sim for deixado com a bexiga cheia por muito tempo?", 
    respostas: [
      {opcao: "Ele morre", correto: false},
      {opcao: "Ele explode", correto: false},
      {opcao: "Ele faz xixi nas calças", correto: true},
      {opcao: "Ele desmaia", correto: false}
    ]
  },
  {
    pergunta: "Qual dessas criaturas sobrenaturais ainda não apareceu oficialmente no The Sims 4 (até 2024)?", 
    respostas: [
      {opcao: "Vampiros", correto: false},
      {opcao: "Fantasmas", correto: false},
      {opcao: "Fadas", correto: true},
      {opcao: "Feiticeiros", correto: false}
    ]
  }
];




// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();