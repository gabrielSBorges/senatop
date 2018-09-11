function criaPortas() {
  this.portas = [];

  //Entrada1
  var porta1 = new Porta(3314,3425,6370,6400,3368,6358);
  this.portas.push(porta1);
  //Saida1
  var porta2 = new Porta(3314,3425,6370,6400,2456,1526);
  this.portas.push(porta2);

  /*
  var porta3 = new Porta(0,0,0,0,0,0);
  this.portas.push(porta3);

  var porta4 = new Porta(0,0,0,0,0,0);
  this.portas.push(porta4);

  var porta5 = new Porta(0,0,0,0,0,0);
  this.portas.push(porta5);

  var porta6 = new Porta(0,0,0,0,0,0);
  this.portas.push(porta6);
  */
}

function teleportaJogador(jogadorX, jogadorY){
  for (var i in portas){
    var porta = portas[i];
    if ((jogador.posicaoX > porta.paredeEsquerda && jogador.posicaoX < porta.paredeDireita) && (jogador.posicaoY > porta.paredeCima && jogador.posicaoY < porta.paredeBaixo)) {
			jogador.posicaoX = 3368;
      jogador.posicaoY = 6358;
    }
  }
}
