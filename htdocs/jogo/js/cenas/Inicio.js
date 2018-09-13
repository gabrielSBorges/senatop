(function cenaInicio(){
	cnv = document.querySelector("canvas");
	ctx = cnv.getContext("2d");

	this.paginaAtual = 0;
	this.selecionando = false;
	this.pronto = false;
	this.mostraInstrucao = true;
	this.selecionado = false;
	this.rodandoInicio = true;

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

//CRIAÇÃO DAS IMAGENS
	var cenarioBackground = new Image();
	cenarioBackground.src = "imgs/cenas/cena_inicio.png";

	this.apresentadorSprite = new Image();
	this.apresentadorSprite.src = "imgs/personagens/outros/professor_teste.png";

	this.meninaSprite = new Image();
	this.meninaSprite.src = "imgs/personagens/protagonistas/menina_sprite.png";

	this.meninoSprite = new Image();
	this.meninoSprite.src = "imgs/personagens/protagonistas/menino_sprite.png";

	this.jogadorSprite = new Image();
	this.jogadorSprite.src = "";

	var caixaMensagemSprite = new Image();
	caixaMensagemSprite.src = "imgs/outros/caixa_mensagem.png";

//CRIAÇÃO DOS ELEMENTOS/OBJETOS
	var cenario = new Cena(cenarioBackground);
	cenario.width = 800;
	cenario.height = 600;

	var apresentador = new Sprite(apresentadorSprite);
	apresentador.largura = 270;
	apresentador.altura = 500;
	apresentador.posicaoX = 30;
	apresentador.posicaoY = 80;

	var menino = new Sprite(meninoSprite);
	menino.largura = 32;
	menino.altura = 50;
	menino.posicaoX = 580;
	menino.posicaoY = 245;

	var menina = new Sprite(meninaSprite);
	menina.largura = 32;
	menina.altura = 50;
	menina.posicaoX = 480;
	menina.posicaoY = 245;

	this.caixaMensagem = new Sprite(caixaMensagemSprite);
	this.caixaMensagem.largura = 460;
	this.caixaMensagem.altura = 200;
	this.caixaMensagem.posicaoX = 310;
	this.caixaMensagem.posicaoY = 100;


//FUNÇÕES PRINCIPAIS
	//MOVIMENTAÇÃO DO JOGADOR
	window.addEventListener("keydown", function(e){
		pressionaTecla(e);
	}, false);



	//DESENHA OS ELEMENTOS NA TELA
	function desenhaElementos(){
		ctx.save();
		if (!pronto) {
			cenario.desenha(ctx);
			apresentador.desenha(ctx);

			caixaMensagem.desenha(ctx);
			desenhaTexto();

			if (paginaAtual == 3) {
				menino.desenha(ctx);
				menina.desenha(ctx);
			}

			if (this.mostraInstrucao){
				desenhaInstrução();
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
		case 4:
		  linha1 = mensagensInicio[4][0];
		  linha2 = mensagensInicio[4][1];
		  linha3 = mensagensInicio[4][2];
			linha4 = mensagensInicio[4][3];
			linha5 = mensagensInicio[4][4];
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

	function desenhaInstrução(){
		ctx.fillStyle = "#dfe6e9";
		ctx.font = "15px Arial Black";
		ctx.textAlign = textoAlinhamento;
		ctx.fillText("Use a seta direita/esquerda para avançar/voltar as falas.", 300, 560);
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
