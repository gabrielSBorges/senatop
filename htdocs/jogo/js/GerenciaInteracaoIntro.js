function pressionaTecla(e){
	var M = 77;
	var F = 70;
	var ENTER = 13;
	var DIREITA = 39;
	var ESQUERDA = 37;

	if (rodandoInicio){
		switch (e.keyCode){
			//Avança para próxima fala
			case DIREITA:
				if (paginaAtual < 3) {
					paginaAtual += 1;
					mostraInstrucao = false;
				}
				break;
			case ESQUERDA:
				if (paginaAtual > 0 && paginaAtual != 4) {
					paginaAtual -= 1;
					mostraInstrucao
				}
				break;
				
			//Confirma
			case ENTER:
				if ((paginaAtual == 4) && selecionado) {
					rodandoInicio = false;
					pronto = true;
					cenaExploracao(jogadorSprite);
					break;
				}
				
			//Seleciona Personagem
			case F:
				if(!selecionado && (paginaAtual == 3)){
					jogadorSprite.src = "imgs/personagens/protagonistas/menina_sprite.png";
					selecionado = true;
					paginaAtual += 1;
					break;
				}	
			case M:
				if(!selecionado && (paginaAtual == 3)){
					jogadorSprite.src = "imgs/personagens/protagonistas/menino_sprite.png";
					selecionado = true;
					paginaAtual += 1;
					break;
				}
		}
	}
}
