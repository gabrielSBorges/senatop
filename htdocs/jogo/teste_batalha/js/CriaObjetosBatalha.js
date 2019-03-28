//IMAGENS
var descoladoSprite = new Image();
descoladoSprite.src = "imgs/personagens/estudantes/estu_descolado_1.png";

var preguicosoSprite = new Image();
preguicosoSprite.src = "imgs/personagens/estudantes/estu_preguicoso_1.png";

var barra_vida_vaziaSprite = new Image();
barra_vida_vaziaSprite.src = "imgs/outros/barra_vida.png";

var barra_vida_cheiaSprite = new Image();
barra_vida_cheiaSprite.src = "imgs/outros/barra_vida_verde.png";

var barra_mana_cheiaSprite = new Image();
barra_mana_cheiaSprite.src = "imgs/outros/barra_mana_azul.png";

var divisor_manaSprite = new Image();
divisor_manaSprite.src = "imgs/outros/divisor_barra_mana.png";


//OBJETOS
//this.objetoNome = new Estudante(sprite, classe, posicaoX, posicaoY);
this.estudanteAliado = new Estudante(descoladoSprite, 0, 200, 290);
this.aliadoVidaTotal = this.estudanteAliado.vida;

this.estudanteInimigo = new Estudante(preguicosoSprite, 1, 490, 110);
this.inimigoVidaTotal = this.estudanteInimigo.vida;


//Barras de vida e mana
//ALIADO
var barraVidaVaziaAliado = new Sprite(barra_vida_vaziaSprite);
barraVidaVaziaAliado.largura = 200;
barraVidaVaziaAliado.altura = 33;
barraVidaVaziaAliado.posicaoX = 10;
barraVidaVaziaAliado.posicaoY = 500;

this.barraVidaCheiaAliado = new Sprite(barra_vida_cheiaSprite);
this.barraVidaCheiaAliado.largura = 165;
this.barraVidaCheiaAliado.altura = 8;
this.barraVidaCheiaAliado.posicaoX = barraVidaVaziaAliado.posicaoX + 29;
this.barraVidaCheiaAliado.posicaoY = barraVidaVaziaAliado.posicaoY + 6;
this.barraVidaCheiaAliadoTotal = this.barraVidaCheiaAliado.largura;

this.barraManaCheiaAliado = new Sprite(barra_mana_cheiaSprite);
this.barraManaCheiaAliado.largura = 165;
this.barraManaCheiaAliado.altura = 8;
this.barraManaCheiaAliado.posicaoX = barraVidaVaziaAliado.posicaoX + 29;
this.barraManaCheiaAliado.posicaoY = barraVidaVaziaAliado.posicaoY + 19;
this.barraManaCheiaAliadoTotal = this.barraManaCheiaAliado.largura;

var divisorBarra1 = new Sprite(divisor_manaSprite);
divisorBarra1.largura = 200;
divisorBarra1.altura = 33;
divisorBarra1.posicaoX = 10;
divisorBarra1.posicaoY = 500;

//INIMIGO
var barraVidaVaziaInimigo = new Sprite(barra_vida_vaziaSprite);
barraVidaVaziaInimigo.largura = 200;
barraVidaVaziaInimigo.altura = 33;
barraVidaVaziaInimigo.posicaoX = 590;
barraVidaVaziaInimigo.posicaoY = 10;

this.barraVidaCheiaInimigo = new Sprite(barra_vida_cheiaSprite);
this.barraVidaCheiaInimigo.largura = 165;
this.barraVidaCheiaInimigo.altura = 8;
this.barraVidaCheiaInimigo.posicaoX = barraVidaVaziaInimigo.posicaoX + 29;
this.barraVidaCheiaInimigo.posicaoY = barraVidaVaziaInimigo.posicaoY + 6;
this.barraVidaCheiaInimigoTotal = this.barraVidaCheiaInimigo.largura;

this.barraManaCheiaInimigo = new Sprite(barra_mana_cheiaSprite);
this.barraManaCheiaInimigo.largura = 165;
this.barraManaCheiaInimigo.altura = 8;
this.barraManaCheiaInimigo.posicaoX = barraVidaVaziaInimigo.posicaoX + 29;
this.barraManaCheiaInimigo.posicaoY = barraVidaVaziaInimigo.posicaoY + 19;
this.barraManaCheiaInimigoTotal = this.barraManaCheiaAliado.largura;

var divisorBarra2 = new Sprite(divisor_manaSprite);
divisorBarra2.largura = 200;
divisorBarra2.altura = 33;
divisorBarra2.posicaoX = 590;
divisorBarra2.posicaoY = 10;

//Funções
function desenhaObjetosDaCena(ctx){
  estudanteAliado.desenha(ctx);
  estudanteInimigo.desenha(ctx);
  barraVidaVaziaAliado.desenha(ctx);
  barraVidaVaziaInimigo.desenha(ctx);
  barraVidaCheiaInimigo.desenha(ctx);
  barraVidaCheiaAliado.desenha(ctx);
  barraManaCheiaAliado.desenha(ctx);
  barraManaCheiaInimigo.desenha(ctx);
  divisorBarra1.desenha(ctx);
  divisorBarra2.desenha(ctx);
}

function desenhaOpcoes(){
  var opcao1 = "GOLPE NORMAL";
  var opcao2 = "GOLPE ESPECIAL";
  var opcao3 = "CURAR";
  var opcao4 = "PASSAR";

  var textoPosX = 50;
  var textoPosY = 582;
  var corAtivoDesativo;

  if (!acaoBloqueada) {
    corAtivoDesativo = "#dfe6e9";
  }else{
    corAtivoDesativo = "#636e72";
  }

  var borda = new Forma("retangulo", "#192a56", 0, 543, cnv.width, 7);
  var caixa = new Forma("retangulo", "#273c75", 0, 550, cnv.width, 50);
  this.seta = new Forma("triangulo", corAtivoDesativo, 30, 565, 10, 10, 20);

  switch (opcaoAtual) {
    case 0:
      this.seta.valor1 = 30;
      break;
    case 1:
      this.seta.valor1 = 260;
      break;
    case 2:
      this.seta.valor1 = 500;
      break;
    case 3:
      this.seta.valor1 = 640;
      break;
  }

  borda.desenha(ctx);
  caixa.desenha(ctx);
  seta.desenha(ctx);

  ctx.fillStyle = corAtivoDesativo;
  ctx.font = "18px Arial Black";
  ctx.textAlign = "left";

  ctx.fillText(opcao1, textoPosX, textoPosY);
  ctx.fillText(opcao2, textoPosX + 230, textoPosY);
  ctx.fillText(opcao3, textoPosX + 470, textoPosY);
  ctx.fillText(opcao4, textoPosX + 610, textoPosY);
}
