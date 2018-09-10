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
	
	var linha1 = "";
	var linha2 = "";
	var linha3 = "";
	
	var texto1 = "";
	var texto2 = "";
	var texto3 = "";
	
	var textoCor = "#2d3436";
    var textoFonte = "19px Arial Black";
    var textoAlinhamento = "left";
	var textoPosX = 348;
	var textoPosY = 135;

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
						console.log(mensagemAtual);
				}
				break;
			case ESQUERDA:
				if (mensagemAtual > 0) {
						mensagemAtual -= 1;
						console.log(mensagemAtual);
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

	function desenhaTexto(){
		switch (mensagemAtual){
			case 0:
				linha1 = mensagensInicio[0][0];
				linha2 = mensagensInicio[0][1];
				linha3 = mensagensInicio[0][2];
				break;
			case 1:
				linha1 = mensagensInicio[1][0];
				linha2 = mensagensInicio[1][1];
				linha3 = mensagensInicio[1][2];
				break;
			case 2:
				linha1 = mensagensInicio[2][0];
				linha2 = mensagensInicio[2][1];
				linha3 = mensagensInicio[2][2];
				break;
			case 3:
				linha1 = mensagensInicio[3][0];
				linha2 = mensagensInicio[3][1];
				linha3 = mensagensInicio[3][2];
				break;
			case 4:
				linha1 = mensagensInicio[4][0];
				linha2 = mensagensInicio[4][1];
				linha3 = mensagensInicio[4][2];
				break;
		}
		
		ctx.fillStyle = textoCor;
        ctx.font = textoFonte;
        ctx.textAlign = textoAlinhamento;
		
		texto1 = linha1;
        ctx.fillText(texto1, textoPosX, textoPosY);

        texto2 = linha2;
        ctx.fillText(texto2, textoPosX, textoPosY + 25);

		texto3 = linha3;
        ctx.fillText(texto3, textoPosX, textoPosY + 50);
	}
	
	//DESENHA OS ELEMENTOS NA TELA
	function desenhaElementos(){
		ctx.save();
		this.cenario.desenha(ctx);
		this.apresentador.desenha(ctx);
		this.caixaMensagem.desenha(ctx);
		ctx.restore();
		
		desenhaTexto();
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
