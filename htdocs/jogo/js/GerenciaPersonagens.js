function gerenciaPersonagens(){
    var balaoSprite = new Image();
    balaoSprite.src = "imgs/outros/balao_dialogo.png";

    this.balao = new Sprite(balaoSprite);
    this.balao.largura = 30;
    this.balao.altura = 30;

    this.dialogoHabilitado = false;
    this.dialogoAtivado = false;

    this.personagemID;
    this.personagemTipo;

    this.personagemAtivoPosX;
    this.personagemAtivoPosY;

    var mensagemLinha1 = "";
    var mensagemLinha2 = "";
    var mensagemLinha3 = "";
}

function desenhaPersonagem(ctx, areaDireita, areaEsquerda, areaCima, areaBaixo){
	for (var i in personagens) {
	  var personagem = personagens[i];

		if (personagem.posicaoX >= areaEsquerda && personagem.posicaoX <= areaDireita && personagem.posicaoY >= areaCima && personagem.posicaoY <= areaBaixo){
      personagem.desenha(ctx);
		}
	}
}

function desenhaBalao(ctx){
  if (dialogoHabilitado) {
    balao.posicaoX = personagemAtivoPosX + 2;
    balao.posicaoY = personagemAtivoPosY - 10;

    balao.desenha(ctx);
  }
}

function habilitaDialogo(proximidadeDireita, proximidadeEsquerda, proximidadeCima, proximidadeBaixo) {
  for (var i in personagens) {
    var personagem = personagens[i];

    if (personagem.posicaoX >= proximidadeEsquerda && (personagem.posicaoX + personagem.largura) <= proximidadeDireita && personagem.posicaoY >= proximidadeCima && (personagem.posicaoY + personagem.altura) <= proximidadeBaixo) {
      dialogoHabilitado = true;
      personagemID = personagem.id;
      personagemTipo = personagem.tipo;


      personagemAtivoPosX = personagem.posicaoX;
      personagemAtivoPosY = personagem.posicaoY;

      switch (personagemTipo){
        case 0:
          mensagemLinha1 = mensagensNpcs[personagemID][0];
          mensagemLinha2 = mensagensNpcs[personagemID][1];
          mensagemLinha3 = mensagensNpcs[personagemID][2];
          mensagemLinha3 = mensagensNpcs[personagemID][3];
          mensagemLinha3 = mensagensNpcs[personagemID][4];
          break;
        case 1:
          mensagemLinha1 = mensagensDesafiantes[personagemID][0];
          mensagemLinha2 = mensagensDesafiantes[personagemID][1];
          mensagemLinha3 = mensagensDesafiantes[personagemID][2];
          mensagemLinha3 = mensagensDesafiantes[personagemID][3];
          mensagemLinha3 = mensagensDesafiantes[personagemID][4];
          break;
        case 2:
          mensagemLinha1 = mensagensProfessores[personagemID][0];
          mensagemLinha2 = mensagensProfessores[personagemID][1];
          mensagemLinha3 = mensagensProfessores[personagemID][2];
          mensagemLinha3 = mensagensProfessores[personagemID][3];
          mensagemLinha3 = mensagensProfessores[personagemID][4];
          break;
        case 3:
          mensagemLinha1 = mensagensElite[personagemID][0];
          mensagemLinha2 = mensagensElite[personagemID][1];
          mensagemLinha3 = mensagensElite[personagemID][2];
          mensagemLinha3 = mensagensElite[personagemID][3];
          mensagemLinha3 = mensagensElite[personagemID][4];
          break;
      }
      break;
    } else{
        dialogoHabilitado = false;
    }
  }
}
