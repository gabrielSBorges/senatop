(function cenaInicio(){
	cnv = document.querySelector("canvas");
	ctx = cnv.getContext("2d");

	var M = 77;
	var F = 70;
	var ENTER = 13;
	var DIREITA = 39;
	var ESQUERDA = 37;

	var mensagemAtual = 0;
	var pronto = false;

//CRIAÇÃO DAS IMAGENS
	var cenarioBackground = new Image();
	cenarioBackground.src = "imgs/cenas/cena_inicio.png";

	var apresentadorSprite = new Image();
	apresentadorSprite.src = "imgs/personagens/outros/professor_teste.png";

	var caixaMensagemSprite = new Image();
	caixaMensagemSprite.src = "imgs/outros/caixa_mensagem.png";

	var meninaSprite = new Image();
	meninaSprite.src = "imgs/personagens/protagonistas/menina_sprite.png";

	var meninaSprite = new Image();
	meninaSprite.src = "imgs/personagens/protagonistas/menino_sprite.png";

	var jogadorSprite = new Image();
	jogadorSprite.src = "";

//CRIAÇÃO DOS ELEMENTOS/OBJETOS
	this.cenario = new Cena(cenarioBackground);
	this.cenario.width = 800;
	this.cenario.height = 600;

	this.apresentador = new Sprite(apresentadorSprite);
	this.apresentador.largura = 270;
	this.apresentador.altura = 500;
	this.apresentador.posicaoX = 30;
	this.apresentador.posicaoY = 80;

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

	function pressionaTecla(e){
		switch (e.keyCode){
			case DIREITA:
				if (mensagemAtual < 4) {
						mensagemAtual += 1;
				}
				break;
			case ESQUERDA:
				if (mensagemAtual > 0) {
						mensagemAtual -= 1;
				}
				break;
			case F:
				jogadorSprite.src = "imgs/personagens/protagonistas/menina_sprite.png";
				pronto = true;
				break;
			case M:
				jogadorSprite.src = "imgs/personagens/protagonistas/menino_sprite.png";
				pronto = true;
				break;
			case ENTER:
				if (pronto) {
					cenaExploracao(jogadorSprite);
				}
				break;
		}
	}

	//DESENHA OS ELEMENTOS NA TELA
	function desenhaElementos(){
		ctx.save();
		this.cenario.desenha(ctx);
		this.apresentador.desenha(ctx);
		this.caixaMensagem.desenha(ctx);
		ctx.restore();
	}

	//ATUALIZAÇÃO E INICIALIZAÇÃO
	function update(){

	}

	function loop(){
	    window.requestAnimationFrame(loop, cnv);
	    desenhaElementos();
	    update();
	}

	function iniciar() {
		loop();
	}

	cenarioBackground.onload = function(){
		iniciar();
	}
})();
