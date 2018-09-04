function criaPersonagens(){
  this.personagens = [];

// S P R I T E S ****************************
//Sprites NPC -------------------------------
  var npcSprite1 = new Image();
  npcSprite1.src = "imgs/personagens/npcs/npc_1.png";

  var npcSprite2 = new Image();
  npcSprite2.src = "imgs/personagens/npcs/npc_2.png";

  var npcSprite3 = new Image();
  npcSprite3.src = "imgs/personagens/npcs/npc_3.png";

  var npcSprite4 = new Image();
  npcSprite4.src = "imgs/personagens/npcs/npc_6.png";

//Sprites Desafiantes -----------------------

//Sprites Professores -----------------------
  var profSprite1 = new Image();
  profSprite1.src = "imgs/personagens/professores/prof_1.png";
//Sprites Elite -----------------------------

// O B J E T O S ****************************
//Objetos NPC -------------------------------
  this.npc1 = new Personagem(npcSprite1, 0, 0);
  this.npc1.posicaoX = 2592;
  this.npc1.posicaoY = 1510;
  this.personagens.push(this.npc1);

  this.npc2 = new Personagem(npcSprite2, 0, 1);
  this.npc2.posicaoX = 1344;
  this.npc2.posicaoY = 1584;
  this.personagens.push(this.npc2);

  this.npc3 = new Personagem(npcSprite3, 0, 2);
  this.npc3.posicaoX = 864;
  this.npc3.posicaoY = 1510;
  this.personagens.push(this.npc3);

  this.npc4 = new Personagem(npcSprite4, 0, 3);
  this.npc4.posicaoX = 2335;
  this.npc4.posicaoY = 2050;
  this.personagens.push(this.npc4);

//Objetos Desafiantes ----------------------

//Objetos Professores ----------------------
  this.prof1 = new Personagem(profSprite1, 2, 0);
  this.prof1.posicaoX = 2620;
  this.prof1.posicaoY = 4987;
  this.personagens.push(this.prof1);

//Objetos Elite ----------------------------
}
