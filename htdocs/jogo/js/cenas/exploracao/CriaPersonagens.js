
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
  npcSprite4.src = "imgs/personagens/npcs/npc_4.png";

  var npcSprite5= new Image();
  npcSprite5.src = "imgs/personagens/npcs/npc_5.png";

  var npcSprite6 = new Image();
  npcSprite6.src = "imgs/personagens/npcs/npc_6.png";

  var npcSprite7 = new Image();
  npcSprite7.src = "imgs/personagens/npcs/npc_7.png";

  var npcSprite8 = new Image();
  npcSprite8.src = "imgs/personagens/npcs/npc_8.png";

  var npcSprite9 = new Image();
  npcSprite9.src = "imgs/personagens/npcs/npc_9.png";

  var npcSprite10 = new Image();
  npcSprite10.src = "imgs/personagens/npcs/npc_10.png";

  var npcSprite11 = new Image();
  npcSprite11.src = "imgs/personagens/npcs/npc_11.png";

  var npcSprite12 = new Image();
  npcSprite12.src = "imgs/personagens/npcs/npc_12.png";

  var npcSprite13 = new Image();
  npcSprite13.src = "imgs/personagens/npcs/npc_13.png";

  var npcSprite14 = new Image();
  npcSprite14.src = "imgs/personagens/npcs/npc_14.png";

  var npcSprite15 = new Image();
  npcSprite15.src = "imgs/personagens/npcs/npc_15.png";

  var npcSprite16 = new Image();
  npcSprite16.src = "imgs/personagens/npcs/npc_16.png";

  var npcSprite17 = new Image();
  npcSprite17.src = "imgs/personagens/npcs/npc_17.png";

  var npcSprite18 = new Image();
  npcSprite18.src = "imgs/personagens/npcs/npc_18.png";

  var npcSprite19 = new Image();
  npcSprite19.src = "imgs/personagens/npcs/npc_19.png";

  var npcSprite20 = new Image();
  npcSprite20.src = "imgs/personagens/npcs/npc_20.png";

  var npcSprite21 = new Image();
  npcSprite21.src = "imgs/personagens/npcs/npc_21.png";

  var npcSprite22 = new Image();
  npcSprite22.src = "imgs/personagens/npcs/npc_22.png";

  var npcSprite23 = new Image();
  npcSprite23.src = "imgs/personagens/npcs/npc_23.png";

  var npcSprite24 = new Image();
  npcSprite24.src = "imgs/personagens/npcs/npc_24.png";

  var npcSprite25 = new Image();
  npcSprite25.src = "imgs/personagens/npcs/npc_25.png";

  var npcSprite26 = new Image();
  npcSprite26.src = "imgs/personagens/npcs/npc_26.png";

  var npcSprite27 = new Image();
  npcSprite27.src = "imgs/personagens/npcs/npc_27.png";

  var npcSprite28 = new Image();
  npcSprite28.src = "imgs/personagens/npcs/npc_28.png";

  var npcSprite29 = new Image();
  npcSprite29.src = "imgs/personagens/npcs/npc_29.png";

  var npcSprite30 = new Image();
  npcSprite30.src = "imgs/personagens/npcs/npc_30.png";

  //Sprites Professores -----------------------
  var profSprite1 = new Image();
  profSprite1.src = "imgs/personagens/professores/prof_1.png";

  var profSprite2 = new Image();
  profSprite2.src = "imgs/personagens/professores/prof_2.png";

  var profSprite3= new Image();
  profSprite3.src = "imgs/personagens/professores/prof_3.png";

  var profSprite4= new Image();
  profSprite4.src = "imgs/personagens/professores/prof_4.png";
  //Sprites Elite -----------------------------
  var eliteSprite1 = new Image();
  eliteSprite1.src = "imgs/personagens/elite/elite_1.png";

  var eliteSprite2 = new Image();
  eliteSprite2.src = "imgs/personagens/elite/elite_2.png";

  var eliteSprite3 = new Image();
  eliteSprite3.src = "imgs/personagens/elite/elite_3.png";

  var eliteSprite4 = new Image();
  eliteSprite4.src = "imgs/personagens/elite/elite_4.png";

  // O B J E T O S ****************************
    //PERSONAGENS PODEM SER DOS SEGUINTES TIPOS: 0 = NPC, 1 = Desafiante, 2 = Professor e 3 = Elite
  //Objetos NPC -------------------------------
  this.npc1 = new Personagem(npcSprite1);
  this.npc1.posicaoX = 2592;
  this.npc1.posicaoY = 1510;
  this.npc1.id = 0;
  this.npc1.tipo = 0;
  this.personagens.push(this.npc1);

  this.npc2 = new Personagem(npcSprite2);
  this.npc2.posicaoX = 1344;
  this.npc2.posicaoY = 1584;
  this.npc2.id = 1;
  this.npc2.tipo = 0;
  this.personagens.push(this.npc2);

  this.npc3 = new Personagem(npcSprite3);
  this.npc3.posicaoX = 864;
  this.npc3.posicaoY = 1510;
  this.npc3.id = 2;
  this.npc3.tipo = 0;
  this.personagens.push(this.npc3);

  this.npc4 = new Personagem(npcSprite4);
  this.npc4.posicaoX = 2335;
  this.npc4.posicaoY = 2050;
  this.npc4.id = 3;
  this.npc4.tipo = 0;
  this.personagens.push(this.npc4);

  this.npc5 = new Personagem(npcSprite5);
  this.npc5.posicaoX =  3552;
  this.npc5.posicaoY = 1248;
  this.npc5.id = 4;
  this.npc5.tipo = 0;
  this.personagens.push(this.npc5);

  this.npc6 = new Personagem(npcSprite6);
  this.npc6.posicaoX = 1728;
  this.npc6.posicaoY = 1152;
  this.npc6.id = 5;
  this.npc6.tipo = 0;
  this.personagens.push(this.npc6);

  this.npc7 = new Personagem(npcSprite7);
  this.npc7.posicaoX = 1200 ;
  this.npc7.posicaoY = 1049;
  this.npc7.id = 6;
  this.npc7.tipo = 0;
  this.personagens.push(this.npc7);

  this.npc8 = new Personagem(npcSprite8);
  this.npc8.posicaoX = 432;
  this.npc8.posicaoY = 2400;
  this.npc8.id = 7;
  this.npc8.tipo = 0;
  this.personagens.push(this.npc8);

  this.npc9 = new Personagem(npcSprite9);
  this.npc9.posicaoX =  2880;
  this.npc9.posicaoY = 384;
  this.npc9.id = 8;
  this.npc9.tipo = 0;
  this.personagens.push(this.npc9);

  this.npc10 = new Personagem(npcSprite10);
  this.npc10.posicaoX = 3312;
  this.npc10.posicaoY = 842;
  this.npc10.id = 9;
  this.npc10.tipo = 0;
  this.personagens.push(this.npc10);

  this.npc11 = new Personagem(npcSprite11);
  this.npc11.posicaoX = 2688;
  this.npc11.posicaoY = 2400;
  this.npc11.id = 10;
  this.npc11.tipo = 0;
  this.personagens.push(this.npc11);

  this.npc12 = new Personagem(npcSprite12);
  this.npc12.posicaoX =  3072 ;
  this.npc12.posicaoY = 1968;
  this.npc12.id = 11;
  this.npc12.tipo = 0;
  this.personagens.push(this.npc12);

  this.npc13 = new Personagem(npcSprite13);
  this.npc13.posicaoX = 2124 ;
  this.npc13.posicaoY = 3544;
  this.npc13.id = 12;
  this.npc13.tipo = 0;
  this.personagens.push(this.npc13);

  this.npc14 = new Personagem(npcSprite14);
  this.npc14.posicaoX = 1444 ;
  this.npc14.posicaoY = 3694;
  this.npc14.id = 13;
  this.npc14.tipo = 0;
  this.personagens.push(this.npc14);

  this.npc15 = new Personagem(npcSprite15);
  this.npc15.posicaoX = 2951;
  this.npc15.posicaoY = 4584;
  this.npc15.id = 14;
  this.npc15.tipo = 0;
  this.personagens.push(this.npc15);

  this.npc16 = new Personagem(npcSprite16);
  this.npc16.posicaoX = 1976;
  this.npc16.posicaoY = 4506;
  this.npc16.id = 15;
  this.npc16.tipo = 0;
  this.personagens.push(this.npc16);

  this.npc17 = new Personagem(npcSprite17);
  this.npc17.posicaoX = 405;
  this.npc17.posicaoY = 3814;
  this.npc17.id = 16;
  this.npc17.tipo = 0;
  this.personagens.push(this.npc17);

  this.npc18 = new Personagem(npcSprite18);
  this.npc18.posicaoX = 1724;
  this.npc18.posicaoY = 4064;
  this.npc18.id = 17;
  this.npc18.tipo = 0;
  this.personagens.push(this.npc18);

  this.npc19 = new Personagem(npcSprite19);
  this.npc19.posicaoX = 2084;
  this.npc19.posicaoY = 4004;
  this.npc19.id = 18;
  this.npc19.tipo = 0;
  this.personagens.push(this.npc19);

  this.npc20 = new Personagem(npcSprite20);
  this.npc20.posicaoX = 481;
  this.npc20.posicaoY =  3780;
  this.npc20.id = 19;
  this.npc20.tipo = 0;
  this.personagens.push(this.npc20);

  this.npc21 = new Personagem(npcSprite21);
  this.npc21.posicaoX = 2075;
  this.npc21.posicaoY = 4699;
  this.npc21.id = 20;
  this.npc21.tipo = 0;
  this.personagens.push(this.npc21);

  this.npc22 = new Personagem(npcSprite22);
  this.npc22.posicaoX = 689;
  this.npc22.posicaoY = 4709;
  this.npc22.id = 21;
  this.npc22.tipo = 0;
  this.personagens.push(this.npc22);

  this.npc23 = new Personagem(npcSprite23);
  this.npc23.posicaoX = 1209;
  this.npc23.posicaoY = 5942;
  this.npc23.id = 22;
  this.npc23.tipo = 0;
  this.personagens.push(this.npc23);

  this.npc24 = new Personagem(npcSprite24);
  this.npc24.posicaoX = 2844;
  this.npc24.posicaoY = 6142;
  this.npc24.id = 23;
  this.npc24.tipo = 0;
  this.personagens.push(this.npc24);

  this.npc25 = new Personagem(npcSprite25);
  this.npc25.posicaoX = 1064;
  this.npc25.posicaoY = 5518;
  this.npc25.id = 24;
  this.npc25.tipo = 0;
  this.personagens.push(this.npc25);

  this.npc26 = new Personagem(npcSprite26);
  this.npc26.posicaoX = 3080;
  this.npc26.posicaoY = 5609;
  this.npc26.id = 25;
  this.npc26.tipo = 0;
  this.personagens.push(this.npc26);

  this.npc27 = new Personagem(npcSprite27);
  this.npc27.posicaoX = 3460;
  this.npc27.posicaoY = 5812;
  this.npc27.id = 26;
  this.npc27.tipo = 0;
  this.personagens.push(this.npc27);

  this.npc28 = new Personagem(npcSprite28);
  this.npc28.posicaoX = 577 ;
  this.npc28.posicaoY =  5379;
  this.npc28.id = 27;
  this.npc28.tipo = 0;
  this.personagens.push(this.npc28);

  this.npc29 = new Personagem(npcSprite29);
  this.npc29.posicaoX = 1646;
  this.npc29.posicaoY = 5513;
  this.npc29.id = 28;
  this.npc29.tipo = 0;
  this.personagens.push(this.npc29);

  this.npc30 = new Personagem(npcSprite30);
  this.npc30.posicaoX = 3226;
  this.npc30.posicaoY = 4981;
  this.npc30.id = 29;
  this.npc30.tipo = 0;
  this.personagens.push(this.npc30);

//Objetos Professores ----------------------
  this.prof1 = new Personagem(profSprite1);
  this.prof1.posicaoX =  684;
  this.prof1.posicaoY = 3779;
  this.prof1.id = 0;
  this.prof1.tipo = 2;
  this.personagens.push(this.prof1);

  this.prof2 = new Personagem(profSprite2);
  this.prof2.posicaoX = 714;
  this.prof2.posicaoY = 4506;
  this.prof2.id = 1;
  this.prof2.tipo = 2;
  this.personagens.push(this.prof2);

  this.prof3 = new Personagem(profSprite3);
  this.prof3.posicaoX = 869;
  this.prof3.posicaoY = 5596;
  this.prof3.id = 2;
  this.prof3.tipo = 2;
  this.personagens.push(this.prof3);

  this.prof4 = new Personagem(profSprite4);
  this.prof4.posicaoX = 4124;
  this.prof4.posicaoY = 6040;
  this.prof4.id = 3;
  this.prof4.tipo = 2;
  this.personagens.push(this.prof4);
//Objetos Elite ----------------------------

  this.elite1 = new Personagem(eliteSprite1);
  this.elite1.posicaoX = 2982;
  this.elite1.posicaoY = 3700;
  this.elite1.id = 0;
  this.elite1.tipo = 3;
  this.personagens.push(this.elite1);

  this.elite2 = new Personagem(eliteSprite2);
  this.elite2.posicaoX =  2982;
  this.elite2.posicaoY = 4088;
  this.elite2.id = 1;
  this.elite2.tipo = 3;
  this.personagens.push(this.elite2);

  this.elite3 = new Personagem(eliteSprite3);
  this.elite3.posicaoX =  3750;
  this.elite3.posicaoY = 3700;
  this.elite3.id = 2;
  this.elite3.tipo = 3;
  this.personagens.push(this.elite3);

  this.elite4 = new Personagem(eliteSprite4);
  this.elite4.posicaoX =  3750;
  this.elite4.posicaoY = 4088;
  this.elite4.id = 3;
  this.elite4.tipo = 3;
  this.personagens.push(this.elite4);
}
