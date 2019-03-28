function Instrucao(cnv, ctx) {
    //Atributos da classe
    this.cor = "#dfe6e9";
    this.fonte = "18px Arial Black, sans-serif";
    this.alinhamento = "center";
    this.posicaoX = ((cnv.width - ctx.measureText(this.texto).width) / 2) + 18;
    this.posicaoY = 380;
    
    this.texto1;
    this.texto2;
    this.texto3;
    this.texto4;
    this.texto5;

    this.faixaCor = "#2d3436";
    this.faixaLargura = 420;
    this.faixaAltura = 125;
    this.faixaPosX = 185;
    this.faixaPosY = 350;

    //Métodos da classe
    this.desenha = function (ctx) {
        //FAIXA
        ctx.fillStyle = this.faixaCor;
        ctx.fillRect(this.faixaPosX, this.faixaPosY, this.faixaLargura, this.faixaAltura);

        //TEXTO
        ctx.fillStyle = this.cor;
        ctx.font = this.fonte;
        ctx.textAlign = this.alinhamento;

        ctx.fillText(this.texto1, this.posicaoX, this.posicaoY);
        ctx.fillText(this.texto2, this.posicaoX, this.posicaoY + 20);
        ctx.fillText(this.texto3, this.posicaoX, this.posicaoY + 40);
        ctx.fillText(this.texto4, this.posicaoX, this.posicaoY + 60);
        ctx.fillText(this.texto5, this.posicaoX, this.posicaoY + 80);
    }
}