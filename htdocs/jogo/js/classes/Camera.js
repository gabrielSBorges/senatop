function Camera(cnv){
//Atributos da classe
	this.x = 0,
	this.y = 0,
	this.largura = cnv.width,
	this.altura = cnv.height,

//Métodos da classe
	this.movimento = function(jogadorPX, jogadorPY, jogadorAltura, jogadorLargura){
		if((jogadorPX + (jogadorLargura / 2)) !== (this.largura / 2)){
			this.x = (jogadorPX + (jogadorLargura / 2)) - (this.largura / 2);
		}
		if((jogadorPY + (jogadorAltura / 2)) !== (this.altura / 2)){
			this.y = (jogadorPY + (jogadorAltura / 2)) - (this.altura / 2);
		}
	}
}