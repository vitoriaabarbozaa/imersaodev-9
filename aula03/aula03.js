ganhou = 0 //se for 1, perdeu. se for 0, ganhou

for(let rodada = 1; rodada<= 3; rodada++){
    
escolhajogador = prompt("Nível " + rodada + "- escolha a Planta-Vaca (1, 2 ou 3)");
plantaraivosa = Math.floor(Math.random() * 3) + 1;
    
    if (escolhajogador == plantaraivosa) {
        // escolheu a planta com raiva
        alert("A Planta-Vaca Raivosa te pegou. Fim de Jogo.");
      rodada = 1000;
      ganhou = 1
    }  else {
        alert("Dessa vez a Planta-Vaca estava dormindo. Deu sorte, passe para a próxima fase."); // Avança para a próxima rodada
    }
}

// Veio pra cá quando rodada >= 4 e perdeu é false
if (ganhou == 0) {
    alert("Você passou por todas as Plantas-Vaca que estavam dormindo. Parabéns pela sorte, você venceu!");
}