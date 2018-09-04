function criaPortas(){
	this.portasEntrada = [];
	this.portasSaida = [];

	var portaEntrada1 = {
		esquerda : 2428,
		direita : 2468,
		cima : 1445,
		baixo : 1500
	};
	this.portasEntrada.push(portaEntrada1);
	/*
	var portaEntrada2 = {
		esquerda : ,
		direita : ,
		cima : ,
		baixo : 
	};
	this.portasEntrada.push(portaEntrada2);

	var portaEntrada3 = {
		esquerda : ,
		direita : ,
		cima : ,
		baixo : 
	};	
	this.portasEntrada.push(portaEntrada3);
	*/
	var portaSaida1 = {
		esquerda : 3314,
		direita : 3425,
		cima : 6370,
		baixo : 6400
	};
	this.portasSaida.push(portaSaida1);
	/*
	var portaSaida2 = {
		esquerda : ,
		direita : ,
		cima : ,
		baixo : 
	};
	this.portasSaida.push(portaSaida2);

	var portaSaida3 = {
		esquerda : ,
		direita : ,
		cima : ,
		baixo : 
	};
	this.portasSaida.push(portaSaida3);
	*/	
}

function teleportaJogador(jogador){
	//ENTRADA
	for (var i in portasEntrada) {
		var porta = portasEntrada[i];

		if ((jogador.posicaoX > porta.esquerda && jogador.posicaoX < porta.direita) && (jogador.posicaoY > porta.cima && jogador.posicaoY < porta.baixo)){
			jogador.posicaoX = 3368;
			jogador.posicaoY = 6358;
		}
	}
	//SAÍDA
	for (var i in portasSaida) {
		var porta = portasSaida[i];

		if ((jogador.posicaoX > porta.esquerda && jogador.posicaoX < porta.direita) && (jogador.posicaoY > porta.cima && jogador.posicaoY < porta.baixo)){
			jogador.posicaoX = 2456;
			jogador.posicaoY = 1526;
		}
	}
}