(function cenaInicio(){
	cnv = document.querySelector("canvas");
	ctx = cnv.getContext("2d");

	var paginaAtual = 0;
	var selecionadoJogador = false;
	var mostraInstrucao = true;
	var rodandoInicio = true;

	var linha1 = "";
	var linha2 = "";
	var linha3 = "";
	var linha4 = "";
	var linha5 = "";

	var textoCor = "#2d3436";
	var textoFonte = "19px Arial Black";
	var textoAlinhamento = "left";
	var textoPosX = 348;
	var textoPosY = 135;

	var spritesPersonagens = [];

//CRIAÇÃO DAS IMAGENS
	var cenarioBackground = new Image();
	cenarioBackground.src = "imgs/cenas/cena_inicio.png";

	//Protagonistas
	var meninaSprite1 = new Image();
	meninaSprite1.src = "imgs/personagens/protagonistas/menina_sprite1.png";

	var meninoSprite1 = new Image();
	meninoSprite1.src = "imgs/personagens/protagonistas/menino_sprite1.png";

	var meninaSprite2 = new Image();
	meninaSprite2.src = "imgs/personagens/protagonistas/menina_sprite2.png";

	var meninoSprite2 = new Image();
	meninoSprite2.src = "imgs/personagens/protagonistas/menino_sprite2.png";

	//Outros
	var apresentadorSprite = new Image();
	apresentadorSprite.src = "imgs/personagens/outros/apresentador.png";

	var molduraSprite = new Image();
	molduraSprite.src = "imgs/outros/molde_protagonistas.png";

	var caixaMensagemSprite = new Image();
	caixaMensagemSprite.src = "imgs/outros/caixa_mensagem.png";

	var jogadorSprite = new Image();
	jogadorSprite.src = "";

//CRIAÇÃO DOS ELEMENTOS/OBJETOS
	var cenario = new Cena(cenarioBackground);
	cenario.width = 800;
	cenario.height = 600;

	var apresentador = new Sprite(apresentadorSprite);
	apresentador.largura = 270;
	apresentador.altura = 500;
	apresentador.posicaoX = 30;
	apresentador.posicaoY = 80;

//Molduras
	var moldura1 = new Sprite(molduraSprite);
	moldura1.largura = 50;
	moldura1.altura = 70;
	moldura1.posicaoX =  471.5;
	moldura1.posicaoY = 335;
	spritesPersonagens.push(moldura1);

	var moldura2 = new Sprite(molduraSprite);
	moldura2.largura = 50;
	moldura2.altura = 70;
	moldura2.posicaoX =  571.5;
	moldura2.posicaoY = 335;
	spritesPersonagens.push(moldura2);

	var moldura3 = new Sprite(molduraSprite);
	moldura3.largura = 50;
	moldura3.altura = 70;
	moldura3.posicaoX =  471.5;
	moldura3.posicaoY = 415;
	spritesPersonagens.push(moldura3);

	var moldura4 = new Sprite(molduraSprite);
	moldura4.largura = 50;
	moldura4.altura = 70;
	moldura4.posicaoX =  571.5;
	moldura4.posicaoY = 415;
	spritesPersonagens.push(moldura4);

//Personagens
	var menino1 = new Sprite(meninoSprite1);
	menino1.largura = 32;
	menino1.altura = 50;
	menino1.posicaoX = 580;
	menino1.posicaoY = 340;
	spritesPersonagens.push(menino1);

	var menina1 = new Sprite(meninaSprite1);
	menina1.largura = 32;
	menina1.altura = 50;
	menina1.posicaoX = 480;
	menina1.posicaoY = 340;
	spritesPersonagens.push(menina1);

	var menino2 = new Sprite(meninoSprite2);
	menino2.largura = 32;
	menino2.altura = 50;
	menino2.posicaoX = 580;
	menino2.posicaoY = 420;
	spritesPersonagens.push(menino2);

	var menina2 = new Sprite(meninaSprite2);
	menina2.largura = 32;
	menina2.altura = 50;
	menina2.posicaoX = 480;
	menina2.posicaoY = 420;
	spritesPersonagens.push(menina2);

	var caixaMensagem = new Sprite(caixaMensagemSprite);
	caixaMensagem.largura = 460;
	caixaMensagem.altura = 200;
	caixaMensagem.posicaoX = 310;
	caixaMensagem.posicaoY = 100;


//FUNÇÕES PRINCIPAIS
	window.addEventListener("keydown", function(e){
		var TECLA1 = 97;
		var TECLA2 = 98;
		var TECLA3 = 99;
		var TECLA4 = 100;
		var DIREITA = 39;
		var ESQUERDA = 37;
		var ENTER = 13;

		if (rodandoInicio){
			switch (e.keyCode){
				//Avança para próxima fala
				case DIREITA:
					if (paginaAtual < 1) {
						paginaAtual += 1;
						mostraInstrucao = false;
					}
					break;
				case ESQUERDA:
					if (paginaAtual > 0) {
						paginaAtual -= 1;
						if (paginaAtual == 1 && selecionadoJogador == true) {
							selecionadoJogador = false;
						}
					}
					break;
				case ENTER:
					if ((paginaAtual == 2) && selecionadoJogador) {
						rodandoInicio = false;

						cenaExploracao(jogadorSprite, 2264, 2544);
						break;
					}
				case TECLA1:
					if(!selecionadoJogador && (paginaAtual == 1)){
						jogadorSprite.src = meninaSprite1.src;
						selecionadoJogador = true;
						paginaAtual += 1;
						break;
					}
				case TECLA2:
					if(!selecionadoJogador && (paginaAtual == 1)){
						jogadorSprite.src = meninoSprite1.src;
						selecionadoJogador = true;
						paginaAtual += 1;
						break;
					}
				case TECLA3:
					if(!selecionadoJogador && (paginaAtual == 1)){
						jogadorSprite.src = meninaSprite2.src;
						selecionadoJogador = true;
						paginaAtual += 1;
						break;
					}
				case TECLA4:
					if(!selecionadoJogador && (paginaAtual == 1)){
						jogadorSprite.src = meninoSprite2.src;
						selecionadoJogador = true;
						paginaAtual += 1;
						break;
					}
			}
		}
	}, false);

	//DESENHA OS ELEMENTOS NA TELA
	function desenhaElementos(i){
		ctx.save();
		if (rodandoInicio) {
			cenario.desenha(ctx);
			apresentador.desenha(ctx);
			caixaMensagem.desenha(ctx);
			desenhaTexto();

			if (paginaAtual == 0){
				desenhaInstrucao(1);
			}else if (paginaAtual == 1) {
				for (var i in spritesPersonagens) {
					spritesPersonagens[i].desenha(ctx);
				}
				desenhaNumeracao();
				desenhaInstrucao(2);
			}else if (paginaAtual == 2) {
				desenhaInstrucao(3);
			}
		}
		ctx.restore();
	}

	function desenhaTexto(){
	  switch (paginaAtual){
		case 0:
			linha1 = mensagensInicio[0][0];
			linha2 = mensagensInicio[0][1];
			linha3 = mensagensInicio[0][2];
			linha4 = mensagensInicio[0][3];
			linha5 = mensagensInicio[0][4];
		  break;
		case 1:
			linha1 = mensagensInicio[1][0];
			linha2 = mensagensInicio[1][1];
			linha3 = mensagensInicio[1][2];
			linha4 = mensagensInicio[1][3];
			linha5 = mensagensInicio[1][4];
		  break;
		case 2:
			linha1 = mensagensInicio[2][0];
			linha2 = mensagensInicio[2][1];
			linha3 = mensagensInicio[2][2];
			linha4 = mensagensInicio[2][3];
			linha5 = mensagensInicio[2][4];
		  break;
		case 3:
			linha1 = mensagensInicio[3][0];
			linha2 = mensagensInicio[3][1];
			linha3 = mensagensInicio[3][2];
			linha4 = mensagensInicio[3][3];
			linha5 = mensagensInicio[3][4];
		  break;
	  }

		ctx.fillStyle = textoCor;
		ctx.font = textoFonte;
		ctx.textAlign = textoAlinhamento;

		ctx.fillText(linha1, textoPosX, textoPosY);
		ctx.fillText(linha2, textoPosX, textoPosY + 25);
		ctx.fillText(linha3, textoPosX, textoPosY + 50);
		ctx.fillText(linha4, textoPosX, textoPosY + 75);
		ctx.fillText(linha5, textoPosX, textoPosY + 100);
	}

	function desenhaInstrucao(instrucaoAtual){
		switch (instrucaoAtual){
			case 1:
				ctx.fillStyle = "#dfe6e9";
				ctx.font = "15px Arial Black";
				ctx.textAlign = textoAlinhamento;
				ctx.fillText("Use a seta direita/esquerda para avançar/voltar as falas.", 300, 560);
				break;
			case 2:
				ctx.fillStyle = "#dfe6e9";
				ctx.font = "15px Arial Black";
				ctx.textAlign = textoAlinhamento;
				ctx.fillText("Use as teclas 1, 2, 3 ou 4 para escolher seu personagem.", 300, 560);
				break;
			case 3:
				ctx.fillStyle = "#dfe6e9";
				ctx.font = "15px Arial Black";
				ctx.textAlign = textoAlinhamento;
				ctx.fillText("Pressione ENTER para inciar o jogo.", 300, 560);
				break;
		}
	}

	function desenhaNumeracao(){
		ctx.fillStyle = "#2c2c54";
		ctx.font = "15px Arial Black";
		ctx.textAlign = textoAlinhamento;
		ctx.fillText("1", 490.8, 401);

		ctx.fillText("2", 591.5, 401);

		ctx.fillText("3", 490.8, 482);

		ctx.fillText("4", 591.5, 482);
	}

	//ATUALIZAÇÃO E INICIALIZAÇÃO
	function loop(){
	    window.requestAnimationFrame(loop, cnv);
	    desenhaElementos();
	}

	function iniciar() {
		loop();
	}

	cenarioBackground.onload = function(){
		iniciar();
	}
})();
