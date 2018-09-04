function Jogador(img){
//Atributos da classe
	//IMAGEM
	this.srcX = 0;
	this.srcY = 0;
	this.largura = 32;
	this.altura = 50;
	this.posicaoX = 0;
	this.posicaoY = 0;
	this.img = img;
	this.contadorAnimacao = 0;

	//MOVIMENTO
	this.moveParaDireita = false;
	this.moveParaEsquerda = false;
	this.moveParaCima = false;
	this.moveParaBaixo = false;
	this.velocidadeBase = 1.5;
	this.velocidadeMax = 3;
	this.velocidade = this.velocidadeBase;

	//TECLAS
	this.DIREITA = 39;
	this.ESQUERDA = 37;
	this.CIMA = 38;
	this.BAIXO = 40;
	this.CORRE = 90;
	this.ENTER = 13;
	this.INTERACAO = 88;

	//AREA DE RENDERIZACAO AO REDOR DO JOGADOR
	this.areaEsquerda;
	this.areaDireita;
	this.areaCima;
	this.areaBaixo;

    //HABILITAR DIALOGO
	this.proximidadeEsquerda;
	this.proximidadeDireita;
	this.proximidadeCima;
	this.proximidadeBaixo;

//Métodos da classe
	//IMAGEM
	this.desenha = function(ctx, pausado){
		ctx.drawImage(this.img, this.srcX, this.srcY, this.largura, this.altura, this.posicaoX, this.posicaoY, this.largura, this.altura);
		if (!pausado) {
			this.anima();
		}
	}

//ÁREA AO REDOR DO PERSONAGEM
	this.verificaArea = function(jogadorX, jogadorY, jogadorLargura, jogadorAltura){
		//RENDERIZAÇÃO DOS PERSONAGENS
		this.areaEsquerda = jogadorX - 445;
		this.areaDireita = (jogadorX + jogadorLargura) + 445;
		//INTERAÇÂO COM OS PERSONAGENS
		this.areaCima = jogadorY - 350;
		this.areaBaixo = (jogadorY + jogadorAltura) + 350;
	}

	this.verificaProximidadeInteracao = function (jogadorX, jogadorY, jogadorLargura, jogadorAltura) {
	    this.proximidadeEsquerda = jogadorX - 35;
	    this.proximidadeDireita = (jogadorX + jogadorLargura) + 35;

	    this.proximidadeCima = jogadorY - 45;
	    this.proximidadeBaixo = (jogadorY + jogadorAltura) + 25;
	}

//ANIMAÇÂO
	this.anima = function(){
		if (this.moveParaDireita || this.moveParaEsquerda || this.moveParaCima || this.moveParaBaixo){
			this.contadorAnimacao++;
			if (this.velocidade == this.velocidadeBase){
				if (this.contadorAnimacao >= 60){
					this.contadorAnimacao = 0;
				}
				this.srcX = Math.floor(this.contadorAnimacao / 15) * this.largura;
		}	else{
				if (this.contadorAnimacao >= 40){
					this.contadorAnimacao = 0;
				}
				this.srcX = Math.floor(this.contadorAnimacao / 10) * this.largura;
			}
		}
	}

//MOVIMENTO
	this.pressionaTecla = function(e, dialogoHabilitado, pausado, ctx){
		switch (e.keyCode){
			case this.DIREITA:
				this.moveParaDireita = true;
				this.moveParaEsquerda = false;
				break;
			case this.ESQUERDA:
				this.moveParaDireita = false;
				this.moveParaEsquerda = true;
				break;
			case this.CIMA:
				this.moveParaCima = true;
				this.moveParaBaixo = false;
				break;
			case this.BAIXO:
				this.moveParaCima = false;
				this.moveParaBaixo = true;
				break;
			case this.CORRE:
				this.velocidade = this.velocidadeMax;
				break;
			case this.ENTER:
				if (!pausado) {
					cenario.pausado = true;
					console.log("Pausado!");
				} else if (pausado) {
					if (!dialogoAtivado){
						cenario.pausado = false;
						console.log("Rodando");
					}
				}
				break;
			case this.INTERACAO:
				if (dialogoHabilitado) {
					if (!pausado) {
						if (!dialogoAtivado) {
							cenario.pausado = true;
							dialogoAtivado = true;
						}
					} else if (pausado) {
						cenario.pausado = false;
						console.log("Rodando");
						dialogoAtivado = false;
					}
				}
				break;
		}
	}

	this.soltaTecla = function(e){
		switch (e.keyCode){
			case this.DIREITA:
				this.moveParaDireita = false;
				break;
			case this.ESQUERDA:
				this.moveParaEsquerda = false;
				break;
			case this.CIMA:
				this.moveParaCima = false;
				break;
			case this.BAIXO:
				this.moveParaBaixo = false;
				break;
			case this.CORRE:
				this.velocidade = this.velocidadeBase;
				break;
		}
		this.srcX = 0;
	}

	this.movimento = function (pausado) {
		if (pausado == false) {
			if (this.moveParaDireita) {
				this.posicaoX += this.velocidade;
				this.srcY = this.altura * 2;
		} else
			if (this.moveParaEsquerda) {
				this.posicaoX -= this.velocidade;
				this.srcY = this.altura * 1;
		} else
			if (this.moveParaCima) {
				this.posicaoY -= this.velocidade;
				this.srcY = this.altura * 3;
		} else
			if (this.moveParaBaixo) {
				this.posicaoY += this.velocidade;
				this.srcY = this.altura * 0;
			}
		}
	}
}

Jogador.prototype.meiaLargura = function () {
	return this.largura/2;
}

Jogador.prototype.meiaAltura = function () {
	return this.altura/2;
}

Jogador.prototype.centroX = function () {
	return this.posicaoX + this.meiaLargura();
}

Jogador.prototype.centroY = function () {
	return this.posicaoY + this.meiaAltura();
}
