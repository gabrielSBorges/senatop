function Personagem(img){
//Atributos da classe
	//TIPO = 0: NPC, 1: DESAFIANTE, 2: PROFESSORES, 3: ELITE
	this.tipo = 0;
	this.id = 0;
	this.srcX = 0;
	this.srcY = 0;
	this.largura = 32;
	this.altura = 44;
	this.posicaoX = 0;
	this.posicaoY = 0;
	this.img = img;

//Métodos da classe
	this.desenha = function(ctx){
		ctx.drawImage(this.img, this.srcX, this.srcY, this.largura, this.altura, this.posicaoX, this.posicaoY, this.largura, this.altura);
	}
}
