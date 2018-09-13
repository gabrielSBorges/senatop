function criaPortas() {
  this.portas = [];

  //Entrada1
  var porta1 = new Porta(2442,2468,1448,1490,3368,6358);
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

function teleportaJogador(jogador){
    var jogadorPosX = jogador.posicaoX;
    var jogadorPosY = jogador.posicaoY;

    for (i in portas){
        var porta = portas[i];

        if (jogadorPosX > porta.paredeEsquerda && jogadorPosX < porta.paredeDireita && jogadorPosY > porta.paredeCima && jogadorPosY < porta.paredeBaixo){
            jogador.posicaoX = porta.jogadorPosDestinoX;
            jogador.posicaoY = porta.jogadorPosDestinoY;
        }
    }
}
