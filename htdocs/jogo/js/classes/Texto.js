function Texto(cnv, ctx, texto) {
    //Atributos da classe
    this.texto = texto;
    this.cor = "#ffda79";
    this.fonte = "50px Arial Black, sans-serif";
    this.alinhamento = "center";
    this.posicaoX = ((cnv.width - ctx.measureText(this.texto).width) / 2) + 18;
    this.posicaoY = 318;

    this.faixaCor = "#2c2c54";
    this.faixaLargura = cnv.width;
    this.faixaAltura = 60;
    this.faixaPosX = 0;
    this.faixaPosY = (cnv.height - this.faixaAltura) / 2;

    //Métodos da classe
    this.desenha = function (ctx) {
        //FAIXA
        ctx.fillStyle = this.faixaCor;
        ctx.fillRect(this.faixaPosX, this.faixaPosY, this.faixaLargura, this.faixaAltura);

        //TEXTO
        ctx.fillStyle = this.cor;
        ctx.font = this.fonte;
        ctx.textAlign = this.alinhamento;
        ctx.fillText(this.texto, this.posicaoX, this.posicaoY);
    }
}