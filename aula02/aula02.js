idade = prompt ("Quantos anos você tem?")
if(idade < 18) {
  alert("Voce NAO pode jogar jokenpo")
}

// alert ("Vamos começar a jogar!")

if (idade >= 18) {
  escolhajogador = prompt("Escolha uma das alternativas: 1- Pedra  |  2- Papel  |  3- Tesoura")
  escolhacomputador = Math.floor(Math.random() * 3) + 1;
  
  // jogador pedra, computador pedra -->empate
  // jogador tesoura, computador tesoura -->empate
  // jogador papel, computador papel -->empate
  
  if (escolhajogador == escolhacomputador) {
    alert ("Poxa, empatamos :P")
  }
  
  

  if (escolhajogador == 1) {
    if(escolhacomputador == 2){
       // jogador pedra, computador papel --> computador vence
      alert("Eu venci, escolhi papel XD")
    }
    if (escolhacomputador == 3) {
      // jogador pedra, computador tesoura --> jogador vence
      alert("Aff, voce venceu, eu escolhi tesoura :'(" )
    }
  }
  
  
  
  
  if (escolhajogador == 3) {
    if (escolhacomputador == 1){
      // jogador tesoura, computador pedra --> computador vence
      alert("Eu venci, escolhi pedra XD")
    }
    if (escolhacomputador == 2){
      // jogador tesoura, computador papel --> jogador vence
      alert ("Aff, voce venceu, eu escolhi papel :'(" )
    }
  }
  
  
  
  if (escolhajogador == 2){
    if (escolhacomputador == 1)
      // jogador papel, computador pedra --> jogador vence
      alert ("Aff,, voce venceu, eu escolhi pedra :'(" )
  }
  
 if (escolhacomputador == 3){
    // jogador papel, computador tesoura --> computador vence
   alert ("Eu venci, escolhi tesoura XD")
 }
} 