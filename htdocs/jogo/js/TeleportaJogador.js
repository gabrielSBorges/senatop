function criaPortas() {
  this.portasEntrada = [];
  this.portasSaida = [];

									

  //Entrada1
  this.portaEntrada1 = new Porta(3314,3425,6370,6400,3368,6358);
  this.portasEntrada.push(this.portaEntrada1);
 
 /*
  var portaEntrada2 = new Porta(3314,3425,6370,6400,2456,1526);
  this.portas.push(portaEntrada2);

  var portaEntrada3 = new Porta(0,0,0,0,0,0);
  this.portas.push(portaEntrada3);
  
  this.portaSaida1 = new Porta(3314,3425,6370,6400,2456,1526);
  this.portasSaida.push(this.portaSaida1);

  var portaSaida2 = new Porta(0,0,0,0,0,0);
  this.portas.push(portaSaida2);

  var portaSaida3 = new Porta(0,0,0,0,0,0);
  this.portas.push(portaSaida3);
  */
  
}

function teleportaJogador(jogadorX, jogadorY){
  for (var i in portasEntrada){
	var porta = portasEntrada[i];
	
	var jogadorDentroX = 3314;//jogadorX > porta.paredeEsquerda && jogadorX < porta.paredeDireita;
	var jogadorDentroY = 6370;//jogadorY > porta.paredeCima && jogadorY < porta.paredeBaixo;
	
	
    if (jogadorX == jogadorDentroX && jogadorY == jogadorDentroY) {
		console.log(jogadorDentroX);
		/*
		jogador.posicaoX = porta.jogadorPosDestinoX;
		jogador.posicaoY = porta.jogadorPosDestinoY;
		*/
    }
  }
  
  for (var i in portasSaida){
	var porta = portasSaida[i];
    if ((jogadorX < porta.paredeEsquerda && jogadorX > porta.paredeDireita) && (jogadorY < porta.paredeCima && jogadorY > porta.paredeBaixo)) {
		jogador.posicaoX = porta.jogadorPosDestinoX;
		jogador.posicaoY = porta.jogadorPosDestinoY;
    }  
  }
}
