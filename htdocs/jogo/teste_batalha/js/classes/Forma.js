function Forma(tipo, cor, valor1, valor2, valor3, valor4, valor5){
  this.tipo = tipo;
  this.cor = cor;
  this.valor1 = valor1;
  this.valor2 = valor2;
  this.valor3 = valor3;
  this.valor4 = valor4;
  this.valor5 = valor5;

  if ((this.valor5 == "") || (this.valor5 == null)){
    this.valor5 = 0;
  }

  this.desenha = function(ctx){
    ctx.fillStyle = this.cor;

    if (this.tipo == "retangulo"){
      ctx.fillRect(this.valor1, this.valor2, this.valor3, this.valor4);
    }else if (this.tipo == "triangulo"){
  		ctx.beginPath();
  		ctx.moveTo(this.valor1, this.valor2);
  		ctx.lineTo((this.valor1 + this.valor3), (this.valor2 + this.valor4));
  		ctx.lineTo(this.valor1, (this.valor2 + this.valor5));
  		ctx.fill();
    }
  }
}
