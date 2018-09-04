function Personagem(img, tipo, id){
//Atributos da classe
	this.tipo = tipo;
	this.id = id;
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
