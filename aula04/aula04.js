// preciso criar uma lista com os 3 jogadores
personagem = ["", "", ""]
sims = ["", "", ""]

forcapersonagem = 0
forcasims = 0
alert("O array personagem contem: " + personagem)
for(let i=0; i<3; i++) {
  escolhapersonagem = prompt("Digite o nome do seu Sim " + (i + 1))
  personagem [i] = escolhapersonagem
  // calcular a força de cada jogador, e depois somar pra saber a força do time
  forcapersonagem = forcapersonagem + Math.floor(Math.random() * 10) + 1
  // forcapersonagem += Math.floor(Math.random() * 10) + 1 / maneira mais avançada de fazer a mesma coisa
}
console.log("Agora, o array personagem contém: " + personagem)
console.log("InicioSims: " + sims)
for(let i=0; i<3; i++){
  indicealeatorio = Math.floor(Math.random() * 10)
  simspossiveis = ["Mortimer Goth", "Bella Goth", "Cassandra Goth", "Alexander Goth", "Moira Fyres", "Morgan Fyres", "Dominic Fyres", "Dina Caliente", "Nina Caliente", "Don Lothario"]
  sims[i] = simspossiveis[indicealeatorio]
  // calcular a força de cada jogador do time do computador
  forcasims = forcasims + Math.floor(Math.random() * 10) + 1
  // forcasims += Math.floor(Math.random() * 10) + 1 / maneira mais avançada de fazer a mesma coisa
}
console.log("FinalSims: " + sims)


// comparar os dois times para saber quem venceu
if(forcapersonagem > forcasims){
  alert("Uau, voce ganhou dos Sims com uma força incrível de " + forcapersonagem)
} 
else {
  if(forcapersonagem < forcasims){
    alert("Voce perdeu para os Sims dessa vez, eles tinham uma força de " + forcasims)
  }
  else{
    alert("Voces treinaram juntos? Quais as chances de voces terem a mesma força? Aconteceu, voces empataram.")
  }
}