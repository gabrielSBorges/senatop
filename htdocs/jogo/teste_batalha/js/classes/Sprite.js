function Sprite(img) {
    //Atributos da classe
    this.srcX = 0;
    this.srcY = 0;
    this.largura = 0;
    this.altura = 0;
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.img = img;

    //Métodos da classe
    this.desenha = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.largura, this.altura, this.posicaoX, this.posicaoY, this.largura, this.altura);
    }
}
