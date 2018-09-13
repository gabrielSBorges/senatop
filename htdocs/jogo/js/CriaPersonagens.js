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

  var npcSprite5 = new Image();
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

  var npcSprite31 = new Image();
  npcSprite31.src = "imgs/personagens/npcs/npc_31.png";

  var npcSprite32 = new Image();
  npcSprite32.src = "imgs/personagens/npcs/npc_32.png";

  var npcSprite33 = new Image();
  npcSprite33.src = "imgs/personagens/npcs/npc_33.png";


  var npcSprite34 = new Image();
  npcSprite34.src = "imgs/personagens/npcs/npc_34.png";

  
  var npcSprite35 = new Image();
  npcSprite35.src = "imgs/personagens/npcs/npc_35.png";

  
  var npcSprite36 = new Image();
  npcSprite36.src = "imgs/personagens/npcs/npc_36.png";

  var npcSprite37 = new Image();
  npcSprite37.src = "imgs/personagens/npcs/npc_37.png";
  //Sprites Desafiantes -----------------------

//Sprites Professores -----------------------
  var profSprite1 = new Image();
  profSprite1.src = "imgs/personagens/professores/prof_1.png";

  var profSprite2 = new Image();
  profSprite2.src = "imgs/personagens/professores/prof_2.png";
//Sprites Elite -----------------------------

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
  //comentei

  this.npc3 = new Personagem(npcSprite3);
  this.npc3.posicaoX = 864;
  this.npc3.posicaoY = 1510;
  this.npc3.id = 2;
  this.npc3.tipo = 0;
  this.personagens.push(this.npc3);

  this.npc4 = new Personagem(npcSprite6);
  this.npc4.posicaoX = 2335;
  this.npc4.posicaoY = 2050;
  this.npc4.id = 3;
  this.npc4.tipo = 0;
  this.personagens.push(this.npc4);
  
  //npc quest (floresta)
  this.npc5 = new Personagem(npcSprite7);
  this.npc5.posicaoX = 3552;
  this.npc5.posicaoY = 1248;
  this.npc5.id = 4;
  this.npc5.tipo = 0;
  this.personagens.push(this.npc5);

 //npc porta (B casa do meio)
  this.npc6 = new Personagem(npcSprite14);
  this.npc6.posicaoX = 1728;
  this.npc6.posicaoY = 1152;
  this.npc6.id = 5;
  this.npc6.tipo = 0;
  this.personagens.push(this.npc6);

  this.npc7 = new Personagem(npcSprite17);
  this.npc7.posicaoX = 1200 ;
  this.npc7.posicaoY = 1049;
  this.npc7.id = 6;
  this.npc7.tipo = 0;
  this.personagens.push(this.npc7);
 

  this.npc8 = new Personagem(npcSprite22);
  this.npc8.posicaoX = 864 ;
  this.npc8.posicaoY = 5616;
  this.npc8.id = 7;
  this.npc8.tipo = 0;
  this.personagens.push(this.npc8);


  this.npc9 = new Personagem(npcSprite27);
  this.npc9.posicaoX =  672;
  this.npc9.posicaoY = 5952;
  this.npc9.id = 8;
  this.npc9.tipo = 0;
  this.personagens.push(this.npc9);

  this.npc10 = new Personagem(npcSprite28);
  this.npc10.posicaoX =  1152;
  this.npc10.posicaoY = 6720;
  this.npc10.id = 9;
  this.npc10.tipo = 0; 
  this.personagens.push(this.npc10);

  this.npc11 = new Personagem(npcSprite26);
  this.npc11.posicaoX =  576;
  this.npc11.posicaoY = 6624;
  this.npc11.id = 10;
  this.npc11.tipo = 0; 
  this.personagens.push(this.npc11);

 
  this.npc12 = new Personagem(npcSprite14);
  this.npc12.posicaoX =  3168 ;
  this.npc12.posicaoY = 6048;
  this.npc12.id = 11;
  this.npc12.tipo = 0; 
  this.personagens.push(this.npc12);

  this.npc13 = new Personagem(npcSprite10);
  this.npc13.posicaoX =   4124 ;
  this.npc13.posicaoY =  6048;
  this.npc13.id = 12;
  this.npc13.tipo = 0; 
  this.personagens.push(this.npc13);

 
  this.npc14 = new Personagem(npcSprite23);
  this.npc14.posicaoX =  3456;
  this.npc14.posicaoY = 4608;
  this.npc14.id = 13;
  this.npc14.tipo = 0; 
  this.personagens.push(this.npc14);
 
  
  this.npc15 = new Personagem(npcSprite18);
  this.npc15.posicaoX = 3360 ;
  this.npc15.posicaoY = 4992;
  this.npc15.id = 14;
  this.npc15.tipo = 0; 
  this.personagens.push(this.npc15);


 
  this.npc16 = new Personagem(npcSprite31);
  this.npc16.posicaoX =  2928;
  this.npc16.posicaoY = 5414;
  this.npc16.id = 15;
  this.npc16.tipo = 0; 
  this.personagens.push(this.npc16);
 
  this.npc17 = new Personagem(npcSprite8);
  this.npc17.posicaoX =  2592 ;
  this.npc17.posicaoY = 6144;
  this.npc17.id = 16;
  this.npc17.tipo = 0; 
  this.personagens.push(this.npc17);


this.npc18 = new Personagem(npcSprite37);
this.npc18.posicaoX =  1344 ;
this.npc18.posicaoY =  6048;
this.npc18.id = 17;
this.npc18.tipo = 0; 
this.personagens.push(this.npc18);

this.npc19 = new Personagem(npcSprite34);
this.npc19.posicaoX = 384;
this.npc19.posicaoY = 5366;
this.npc19.id = 18;
this.npc19.tipo = 0; 
this.personagens.push(this.npc19);





this.npc20 = new Personagem(npcSprite13);
this.npc20.posicaoX =  816 ;
this.npc20.posicaoY =  3542;
this.npc20.id = 19;
this.npc20.tipo = 0; 
this.personagens.push(this.npc20);


this.npc21 = new Personagem(npcSprite16);
this.npc21.posicaoX =  336;
this.npc21.posicaoY = 3984;
this.npc21.id = 20;
this.npc21.tipo = 0; 
this.personagens.push(this.npc21);



this.npc22 = new Personagem(npcSprite26);
this.npc22.posicaoX = 1872;
this.npc22.posicaoY =  3984;
this.npc22.id = 21;
this.npc22.tipo = 0; 
this.personagens.push(this.npc22);

this.npc22 = new Personagem(npcSprite4);
this.npc22.posicaoX = 1872;
this.npc22.posicaoY =  3984;
this.npc22.id = 21;
this.npc22.tipo = 0; 
this.personagens.push(this.npc22);



this.npc23 = new Personagem(npcSprite29);
this.npc23.posicaoX = 1594;
this.npc23.posicaoY = 3970;
this.npc23.id = 22;
this.npc23.tipo = 0; 
this.personagens.push(this.npc23);


this.npc24 = new Personagem(npcSprite5);
this.npc24.posicaoX =  720 ;
this.npc24.posicaoY = 4512;
this.npc24.id = 23;
this.npc24.tipo = 0; 
this.personagens.push(this.npc24);


this.npc25 = new Personagem(npcSprite21);
this.npc25.posicaoX = 2112;
this.npc25.posicaoY = 3552;
this.npc25.id = 24;
this.npc25.tipo = 0; 
this.personagens.push(this.npc25);


this.npc26 = new Personagem(npcSprite9);
this.npc26.posicaoX =  1824 ;
this.npc26.posicaoY = 3792;
this.npc26.id = 25;
this.npc26.tipo = 0; 
this.personagens.push(this.npc26);


this.npc27 = new Personagem(npcSprite11);
this.npc27.posicaoX = 1349 ;
this.npc27.posicaoY = 5400;
this.npc27.id = 26;
this.npc27.tipo = 0; 
this.personagens.push(this.npc27);



this.npc28 = new Personagem(npcSprite15);
this.npc28.posicaoX = 1680 ;
this.npc28.posicaoY = 5472;
this.npc28.id = 27;
this.npc28.tipo = 0; 
this.personagens.push(this.npc28);



this.npc29 = new Personagem(npcSprite12);
this.npc29.posicaoX = 432;
this.npc29.posicaoY =  6192;
this.npc29.id = 28;
this.npc29.tipo = 0; 
this.personagens.push(this.npc29);



this.npc30 = new Personagem(npcSprite24);
this.npc30.posicaoX =  1488;
this.npc30.posicaoY = 6624;
this.npc30.id = 29;
this.npc30.tipo = 0; 
this.personagens.push(this.npc30);
/*
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
21
22
23
24
26
27
28
29
31
34
37
*/
/*












  this.npc31 = new Personagem(npcSprite26);
this.npc31.posicaoX =  576;
this.npc31.posicaoY = 6624;
this.npc31.id = 30;
this.npc31.tipo = 0; 
this.personagens.push(this.npc31);

  this.npc32 = new Personagem(npcSprite26);
this.npc32.posicaoX =  576;
this.npc32.posicaoY = 6624;
this.npc32.id = 31;
this.npc32.tipo = 0; 
this.personagens.push(this.npc32);

  this.npc33 = new Personagem(npcSprite26);
this.npc33.posicaoX =  576;
this.npc33.posicaoY = 6624;
this.npc33.id = 32;
this.npc33.tipo = 0; 
this.personagens.push(this.npc33);
*/
 

//Objetos Desafiantes ----------------------

//Objetos Professores ----------------------
  this.prof1 = new Personagem(profSprite1);
  this.prof1.posicaoX = 2620;
  this.prof1.posicaoY = 4987;
  this.prof1.id = 0;
  this.prof1.tipo = 2;
  this.personagens.push(this.prof1);

//Objetos Elite ----------------------------
}
