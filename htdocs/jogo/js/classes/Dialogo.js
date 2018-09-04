function Dialogo(cnv){
	this.bordaCor = "#0984e3";
    this.bordaLargura = cnv.width;
    this.bordaAltura = 15;
    this.bordaPosX = 0;
    this.bordaPosY = 450;

    this.caixaCor = "#b2bec3";
    this.caixaLargura = cnv.width;
    this.caixaAltura = 135;
    this.caixaPosX = 0;
    this.caixaPosY = 465;

    this.texto1;
    this.texto2;
    this.texto3;
    this.textoCor = "#2d3436";
    this.textoFonte = "20px Arial Black sans-serif";
    this.textoAlinhamento = "left";
    this.textoPosX = 20;
    this.textoPosY = 500;


    //Métodos da classe
    this.desenha = function (ctx, mensagemLinha1, mensagemLinha2, mensagemLinha3) {
        //BORDA
        ctx.fillStyle = this.bordaCor;
        ctx.fillRect(this.bordaPosX, this.bordaPosY, this.bordaLargura, this.bordaAltura);

		//CAIXA
        ctx.fillStyle = this.caixaCor;
        ctx.fillRect(this.caixaPosX, this.caixaPosY, this.caixaLargura, this.caixaAltura);

        //TEXTO
        this.texto1 = mensagemLinha1;
        ctx.fillStyle = this.textoCor;
        ctx.font = this.textoFonte;
        ctx.textAlign = this.textoAlinhamento;
        ctx.fillText(this.texto1, this.textoPosX, this.textoPosY);

        this.texto2 = mensagemLinha2;
        ctx.fillText(this.texto2, this.textoPosX, this.textoPosY + 25);

		this.texto3 = mensagemLinha3;
        ctx.fillText(this.texto3, this.textoPosX, this.textoPosY + 50);
    }
}
