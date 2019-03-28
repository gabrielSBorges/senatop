function cenaExploracao(jogadorSprite, jogadorPosX, jogadorPosY){
	this.cnv = document.querySelector("canvas");
	this.ctx = cnv.getContext("2d");

//CRIAÇÃO DAS IMAGENS
	var cenarioBackground = new Image();
	cenarioBackground.src = "imgs/cenas/mapa_exploracao.png";

//CRIAÇÃO DOS ELEMENTOS/OBJETOS
	this.cenario = new Cena(cenarioBackground);
	this.cenario.width = 4560;
	this.cenario.height = 7200;

	this.jogador = new Jogador(jogadorSprite);
	this.jogador.posicaoX = jogadorPosX;
	this.jogador.posicaoY = jogadorPosY;

	criaPersonagens();

	gerenciaPersonagens();

	criaPortas();

	this.camera = new Camera(cnv);

	this.infoPausa = new Texto(cnv, ctx, "PAUSADO");

	this.instrucoes = new Instrucao(cnv, ctx);
	this.instrucoes.texto1 = "Use as setas para se movimentar";
	this.instrucoes.texto2 = "Z para correr";
	this.instrucoes.texto3 = "X para interagir";
	this.instrucoes.texto4 = "ENTER para pausar ou retomar o jogo";
	this.instrucoes.texto5 = "ESC para sair";

	var caixaDialogo = new Dialogo(cnv);

//FUNÇÕES PRINCIPAIS
	//MOVIMENTAÇÃO DO JOGADOR
	window.addEventListener("keydown", function(e){
    jogador.pressionaTecla(e, dialogoHabilitado, this.cenario.pausado, ctx);
	}, false);

	window.addEventListener("keyup", function(e){
		jogador.soltaTecla(e);
	}, false);

	//DESENHA OS ELEMENTOS NA TELA
	function desenhaElementos(){
		ctx.save();
		ctx.translate(- camera.x, - camera.y);
		this.cenario.desenha(ctx);
		jogador.desenha(ctx, this.cenario.pausado);
		desenhaPersonagem(ctx, jogador.areaDireita, jogador.areaEsquerda, jogador.areaCima, jogador.areaBaixo);
		desenhaBalao(ctx);
		ctx.restore();

		if (cenario.pausado){
	    if (!dialogoAtivado){
        this.infoPausa.desenha(ctx);
        this.instrucoes.desenha(ctx);
	    }
		}

		if (dialogoAtivado) {
			caixaDialogo.desenha(ctx, mensagemLinha1, mensagemLinha2, mensagemLinha3, mensagemLinha4, mensagemLinha5);
		}
	}

	//ATUALIZAÇÃO E INICIALIZAÇÃO
	function update(){
		jogador.movimento(this.cenario.pausado);
		camera.movimento(jogador.posicaoX, jogador.posicaoY, jogador.largura, jogador.altura);
		colisaoCoordenadas(jogador);
	}

	function loop(){
		window.requestAnimationFrame(loop, cnv);
		desenhaElementos();
		update();
		teleportaJogador(jogador);

		habilitaDialogo(jogador.proximidadeDireita, jogador.proximidadeEsquerda, jogador.proximidadeCima, jogador.proximidadeBaixo);
		jogador.verificaArea(jogador.posicaoX, jogador.posicaoY, jogador.largura, jogador.altura);
		jogador.verificaProximidadeInteracao(jogador.posicaoX, jogador.posicaoY, jogador.largura, jogador.altura);
	}

	function iniciar() {
	  this.cenario.pausado = true;
		loop();
	}

	cenarioBackground.onload = function(){
		iniciar();
	}
};
