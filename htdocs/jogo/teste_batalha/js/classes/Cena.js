function Cena(img){
	//Atributos da classe
	this.srcX = 0;
	this.srcY = 0;
	this.width = 0;
	this.height = 0;
	this.posicaoX = 0; 
	this.posicaoY = 0;
	this.img = img;

	this.pausado = true;

	//Métodos da classe
	this.desenha = function(ctx){
		ctx.drawImage(this.img, this.srcX, this.srcY, this.width, 
		this.height, this.posicaoX, this.posicaoY, this.width, this.height);
	}
}