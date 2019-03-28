function Estudante(img, classe, posicaoX, posicaoY) {
    //Atributos da classe
    //Classes dos Estudantes: 0 = Descolado; 1 = Preguiçoso; 2 = Estudioso
    this.srcX = 0;
    this.srcY = 0;
    this.largura = 100;
    this.altura = 151;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
    this.img = img;
    this.classe = classe;
    this.danoNormal = 0;
    this.danoEspecial = 0;
    this.manaMaxima = 100;
    this.vida = 0;
    this.vantagem = 0;

    switch (classe) {
      case 0:
        this.danoNormal = 15;
        this.danoEspecial = 30;
        this.vida = 100;
        this.vantagem = 2;
        break;
      case 1:
        this.danoNormal = 10;
        this.danoEspecial = 30;
        this.vida = 120;
        this.vantagem = 0;
        break;
      case 2:
        this.danoNormal = 10;
        this.danoEspecial = 40;
        this.vida = 100;
        this.vantagem = 1;
        break;
    }

    //Métodos da classe
    this.desenha = function (ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.largura, this.altura, this.posicaoX, this.posicaoY, this.largura, this.altura);
    }
}
