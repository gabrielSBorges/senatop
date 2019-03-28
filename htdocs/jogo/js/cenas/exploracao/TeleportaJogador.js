function criaPortas() {
    this.portas = [];

    //Entrada1
    var porta1 = new Porta(2438,2472,1448,1490,3368,6358);
    this.portas.push(porta1);
    //Saida1
    var porta2 = new Porta(3314,3425,6370,6400,2456,1526);
    this.portas.push(porta2);

    //Entrada 2
    var porta3 = new Porta(1679,1726,1082,1102,729,6719);
      this.portas.push(porta3);

    //Saida 2
    var porta4 = new Porta(669,814,6744,6791,1686,1129);
    this.portas.push(porta4);

    //Entrada 3
    var porta5 = new Porta(959,1006,979,1004,1401,4801);
    this.portas.push(porta5);

    //Saida 3
    var porta6 = new Porta(1341,1485,4822,4847,966,1046);
    this.portas.push(porta6);

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
