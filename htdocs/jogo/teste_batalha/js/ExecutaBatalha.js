(this.batalha = function(){
	cnv = document.querySelector("canvas");
	ctx = cnv.getContext("2d");

	this.opcaoAtual = 0;
	this.batalhando = true;
	this.acaoBloqueada = false;
	this.ganhou;

	this.manaMaximaAliado = 100;
	this.manaAtualAliado = 50;
	this.manaMaximaInimigo = 100;
	this.manaAtualInimigo = 50;
	this.manaCusto = 50;

	this.vidaInimigo = estudanteInimigo.vida;
	this.vidaAliado = estudanteAliado.vida;

	this.danoNormalAliado = estudanteAliado.danoNormal;
	this.danoEspecialAliado = estudanteAliado.danoEspecial;

	this.danoNormalInimigo = estudanteInimigo.danoNormal;
	this.danoEspecialInimigo = estudanteInimigo.danoEspecial;

	this.porcentagemVidaAliado = 0;
	this.porcentagemVidaInimigo = 0;

//CRIAÇÃO DO CENÁRIO
	var cenarioBackground = new Image();
	cenarioBackground.src = "imgs/cenas/cena_batalha.png";

	var cenario = new Cena(cenarioBackground);
	cenario.width = 800;
	cenario.height = 600;

	var infoVitoria = new Texto(cnv, ctx, "VITÓRIA");
	var infoDerrota = new Texto(cnv, ctx, "DERROTA");

	this.porcentagemManaAliado = (manaAtualAliado * 100) / manaMaximaAliado;
	barraManaCheiaAliado.largura = (barraManaCheiaAliadoTotal * porcentagemManaAliado) / 100;

	this.porcentagemManaInimigo = (manaAtualInimigo * 100) / manaMaximaInimigo;
	barraManaCheiaInimigo.largura = (barraManaCheiaInimigoTotal * porcentagemManaInimigo) / 100;
//FUNÇÕES
	window.addEventListener("keydown", function(e){
		var CONFIRMA = 32;
		var RESETA = 82;
		var DIREITA = 39;
		var ESQUERDA = 37;

		if (batalhando){
			if (!acaoBloqueada){
				switch (e.keyCode){
					case DIREITA:
						if (opcaoAtual < 3) {
							opcaoAtual += 1;
						}
						break;
					case ESQUERDA:
						if (opcaoAtual > 0) {
							opcaoAtual -= 1;
						}
						break;
					case CONFIRMA:
	          			switch (opcaoAtual){
	          				case 1:
								if (manaAtualAliado >= manaCusto){
		          					calculaJogadaAliado();
		          					acaoBloqueada = true;
	          					}
								break;
							case 2:
								if (manaAtualAliado >= manaCusto && vidaAliado < aliadoVidaTotal){
		          					calculaJogadaAliado();
		          					acaoBloqueada = true;
	          					}
								break;
							default:
								calculaJogadaAliado();
	          					acaoBloqueada = true;
								break;
	          			}
						break;
					case RESETA:
						estudanteInimigo.vida = inimigoVidaTotal;
						estudanteAliado.vida = aliadoVidaTotal;
						barraVidaCheiaAliado.largura = 165;
						barraVidaCheiaInimigo.largura = 165;
						opcaoAtual = 0;
						batalhando = false;
						acaoBloqueada = true;
						batalha();
						break;
				}
			}
		}
	}, false);

	function desenhaElementos(){
		ctx.save();
			cenario.desenha(ctx);
			desenhaObjetosDaCena(ctx);
			desenhaOpcoes();

			if (this.ganhou == true) {
				infoVitoria.desenha(ctx);
			} else if (this.ganhou == false) {
				infoDerrota.desenha(ctx);
			}

		ctx.restore();
	}

//ATUALIZAÇÃO E INICIALIZAÇÃO
	function loop(){
	    window.requestAnimationFrame(loop, cnv);
	  	desenhaElementos();
	}

	cenarioBackground.onload = function(){
		loop();
	}
})();
