function colisaoCoordenadas(jogador){
//portas trancadas para o teste
  /*colisao(jogador,1452,1115,250,20);
  colisao(jogador,1730,1105,330,35);
  colisao(jogador,2172, 1490,270,27);
  colisao(jogador,2500, 1490,270,27);
  colisao(jogador,404, 1020,580,15);
  colisao(jogador,1015, 1010,282,25);
  colisao(jogador,2207,2600,200,80);
//------------
  colisao(jogador,1452,1115,220,20);
  colisao(jogador,1730,1105,330,35);
  colisao(jogador,2172, 1490,270,27);
  colisao(jogador,2500, 1490,270,27);
  colisao(jogador,404, 1020,550,15);
  colisao(jogador,1015, 1010,282,25);
  colisao(jogador,2164, 540,17,980);
  colisao(jogador,2755 ,540,17,930);
  colisao(jogador,2727, 1497,62,33);
  colisao(jogador,2168, 528,600,20);
  colisao(jogador,1456, 624,590,20);
  colisao(jogador,2010 ,624,40,460);
  colisao(jogador,1453,624,40,460);
  colisao(jogador,443, 382,800,20);
  colisao(jogador,1255 ,370,25,640);
  colisao(jogador,376,2015,1398,124);
  colisao(jogador,376,1485,1020,24);
  colisao(jogador,1920,2015,248,124);
  colisao(jogador,2451,2015,426,79);
  colisao(jogador,2978, 2015,426,79);
  colisao(jogador,2451,2450,826,79);
  colisao(jogador,331,2450,1726,79);
  colisao(jogador,2361,2022,10,800);
  colisao(jogador,2188,2022,10,800);
  colisao(jogador,1392,2022,10,250);
  colisao(jogador,1523,2022,10,250);
  colisao(jogador,2656,2022,30,570);
  colisao(jogador,2015,2022,30,570);
  colisao(jogador,331,310,100,2300);
  colisao(jogador,331,310,3600,50);
  colisao(jogador,3276,310,30,630);
  colisao(jogador,3276,1100,30,1030);
  colisao(jogador,3276,1100,1030,30);
  colisao(jogador,3265,2100,30,130);
  colisao(jogador,3265,2355,30,230);
  colisao(jogador,3427,1100,26,1030);
  colisao(jogador,3747,1100,26,1330);
  colisao(jogador,3306,1973,300,10);
  colisao(jogador,3609,1973,35,230);
  colisao(jogador,3295,2212,350,20);
  colisao(jogador,3295,2355,530,20);
  colisao(jogador,1402 ,2269,127,10);
  colisao(jogador,3884,360,20,230);
  colisao(jogador,3884,725,20,830);
  colisao(jogador,3902,460,20,250);
  colisao(jogador,3453, 1260,95,10);
  colisao(jogador,3653, 1260,150,10);
  colisao(jogador,3518 ,1210,150,10);
  colisao(jogador,1403, 1493,20,170);
  colisao(jogador,1403, 1827,20,170);
  colisao(jogador,1443,1648,43,25);
  colisao(jogador,2540,1505,43,25);
  colisao(jogador,1781,1123,43,25);
  colisao(jogador,1062,1018,43,25);
  colisao(jogador,2983,5395,130,30);
  colisao(jogador,3229,6019,120,30);
  colisao(jogador,2560,3457,33,3000);
  colisao(jogador,4174,3457,33,3000);
  colisao(jogador,2560,3508,3000,23);
  colisao(jogador,2560,6425,3000,23);
  colisao(jogador,2735,3457,52,1120);
  colisao(jogador,3981,3457,52,1120);
  colisao(jogador,2735,4510,577,73);
  colisao(jogador,3452,4510,577,73);
  colisao(jogador,2560,4895,370,73);
  colisao(jogador,3022,4895,386,73);
  colisao(jogador,3839,4895,386,73);
  colisao(jogador,3694,4895,51,500);
  colisao(jogador,3502,4895,51,500);
  colisao(jogador,3022,4895,51,500);
  colisao(jogador,2560,5326,967,73);
  colisao(jogador,3694,5326,467,73);
  colisao(jogador,2560,5520,370,73);
  colisao(jogador,3022,5520,388,73);
  colisao(jogador,3838,5520,388,73);
  colisao(jogador,3022,5520,53,500);
  colisao(jogador,3694,5520,51,500);
  colisao(jogador,3502,5520,51,500);
  colisao(jogador,2560,5953,982,75);
  colisao(jogador,3694,5953,470,75);
  colisao(jogador,3694,6145,51,255);
  colisao(jogador,3023,6145,51,235);
  colisao(jogador,172, 5319,25,2000);
  colisao(jogador,197, 5323,1590,30);
  colisao(jogador,250, 5360,123,25);
  colisao(jogador,490, 5357,125,25);
  colisao(jogador,1767, 5357,25,1400);
  colisao(jogador,197, 6810,1590,25);
  colisao(jogador,180, 5470,490,90);
  colisao(jogador,620, 5660,55,315);
  colisao(jogador,180, 5905,490,90);
  colisao(jogador,180, 6335,490,90);
  colisao(jogador,830, 6095,375,70);
  colisao(jogador,830, 6335,375,70);
  colisao(jogador,1340, 6095,345,70);
  colisao(jogador,1340, 6335,345,70);
  colisao(jogador,958, 5370,337,25);
  colisao(jogador,958,5454,337,33);
  colisao(jogador,1318, 5370,500,25);
  colisao(jogador,1318,5454,266,33);
  colisao(jogador,1055,5572,140,15);
  colisao(jogador,1434,5572,250,15);
  colisao(jogador,1663, 5526,110,15);
  colisao(jogador,620, 5670,55,305);
  colisao(jogador,620, 6098,55,305);
  colisao(jogador,620, 6529,55,305);
  colisao(jogador,845,5572,110,15);
  colisao(jogador,845,5811,110,15);
  colisao(jogador,1290,5395,54,150);
  colisao(jogador,870,5666,920,68);
  colisao(jogador,812, 5470,55,690);
  colisao(jogador,812, 6335,55,500);
  colisao(jogador,1293, 6335,55,500);
  colisao(jogador,1293, 5710,55,450);
  colisao(jogador,432, 5564,95,25);
  colisao(jogador,382, 5999,95,25);
  colisao(jogador,382, 6420,95,25);
  colisao(jogador,1058, 6420,95,25);
  colisao(jogador,1538, 6420,95,25);
  colisao(jogador,1203,5754,95,25);
  colisao(jogador,1682,5754,95,25);
  colisao(jogador,190, 5620,97,10);
  colisao(jogador,190, 6055,97,10);
  colisao(jogador,190, 6486,97,10);
  colisao(jogador,860, 6486,97,10);
  colisao(jogador,1340, 6486,97,10);
  colisao(jogador,1340,5810,97,10);
  colisao(jogador,2563,5042,121,15);
  colisao(jogador,3073,5042,89,15);
  colisao(jogador,4077,5042,89,15);
  colisao(jogador,2563,5672,121,15);
  colisao(jogador,3073,5672,89,15);
  colisao(jogador,4077,5672,89,15);
  colisao(jogador,4077,6097,89,15);
  colisao(jogador,2563,6097,121,15);
  colisao(jogador,2784,4996,97,15);
  colisao(jogador,3260,4996,97,15);
  colisao(jogador,3887,4996,97,15);
  colisao(jogador,3887,5623,97,15);
  colisao(jogador,3260,5617,97,15);
  colisao(jogador,2784,5617,97,15);
  colisao(jogador,2784,6050,97,15);
  colisao(jogador,3840,6050,97,15);
  colisao(jogador,243,5713,40,15);
  colisao(jogador,340,5713,40,15);
  colisao(jogador,437,5713,40,15);
  colisao(jogador,534,5713,40,15);
  colisao(jogador,243,5810,40,15);
  colisao(jogador,340,5810,40,15);
  colisao(jogador,437,5810,40,15);
  colisao(jogador,534,5810,40,15);
  colisao(jogador,243,6145,40,15);
  colisao(jogador,340,6145,40,15);
  colisao(jogador,437,6145,40,15);
  colisao(jogador,534,6145,40,15);
  colisao(jogador,243,6242,40,15);
  colisao(jogador,340,6242,40,15);
  colisao(jogador,437,6242,40,15);
  colisao(jogador,534,6242,40,15);
  colisao(jogador,243,6580,40,15);
  colisao(jogador,340,6580,40,15);
  colisao(jogador,437,6580,40,15);
  colisao(jogador,534,6580,40,15);
  colisao(jogador,243,6577,40,15);
  colisao(jogador,340,6677,40,15);
  colisao(jogador,437,6677,40,15);
  colisao(jogador,534,6677,40,15);
  colisao(jogador,915,6580,40,15);
  colisao(jogador,1012,6580,40,15);
  colisao(jogador,1109,6580,40,15);
  colisao(jogador,1206,6580,40,15);
  colisao(jogador,915,6677,40,15);
  colisao(jogador,1012,6677,40,15);
  colisao(jogador,1109,6677,40,15);
  colisao(jogador,1206,6677,40,15);
  colisao(jogador,1395,6580,40,15);
  colisao(jogador,1492,6580,40,15);
  colisao(jogador,1589,6580,40,15);
  colisao(jogador,1686,6580,40,15);
  colisao(jogador,1395,6677,40,15);
  colisao(jogador,1492,6677,40,15);
  colisao(jogador,1589,6677,40,15);
  colisao(jogador,1686,6677,40,15);
  colisao(jogador,912,5906, 40,15);
  colisao(jogador,1009,5906,40,15);
  colisao(jogador,1106,5906,40,15);
  colisao(jogador,1203,5906,40,15);
  colisao(jogador,912,6003, 40,15);
  colisao(jogador,1009,6003,40,15);
  colisao(jogador,1106,6003,40,15);
  colisao(jogador,1203,6003,40,15);
  colisao(jogador,1395,5906,40,15);
  colisao(jogador,1492,5906,40,15);
  colisao(jogador,1589,5906,40,15);
  colisao(jogador,1686,5906,40,15);
  colisao(jogador,1395,6003,40,15);
  colisao(jogador,1492,6003,40,15);
  colisao(jogador,1589,6003,40,15);
  colisao(jogador,1686,6003,40,15);
  colisao(jogador,2640,5138,40,15);
  colisao(jogador,2737,5138,40,15);
  colisao(jogador,2834,5138,40,15);
  colisao(jogador,2931,5138,40,15);
  colisao(jogador,2640,5235,40,15);
  colisao(jogador,2737,5235,40,15);
  colisao(jogador,2834,5235,40,15);
  colisao(jogador,2931,5235,40,15);
  colisao(jogador,3125,5138,40,15);
  colisao(jogador,3222,5138,40,15);
  colisao(jogador,3319,5138,40,15);
  colisao(jogador,3416,5138,40,15);
  colisao(jogador,3125,5235,40,15);
  colisao(jogador,3222,5235,40,15);
  colisao(jogador,3319,5235,40,15);
  colisao(jogador,3416,5235,40,15);
  colisao(jogador,3797,5138,40,15);
  colisao(jogador,3894,5138,40,15);
  colisao(jogador,3991,5138,40,15);
  colisao(jogador,4088,5138,40,15);
  colisao(jogador,3797,5235,40,15);
  colisao(jogador,3894,5235,40,15);
  colisao(jogador,3991,5235,40,15);
  colisao(jogador,4088,5235,40,15);
  colisao(jogador,2640,5760,40,15);
  colisao(jogador,2737,5760,40,15);
  colisao(jogador,2834,5760,40,15);
  colisao(jogador,2931,5760,40,15);
  colisao(jogador,2640,5857,40,15);
  colisao(jogador,2737,5857,40,15);
  colisao(jogador,2834,5857,40,15);
  colisao(jogador,2931,5857,40,15);
  colisao(jogador,3122,5760,40,15);
  colisao(jogador,3219,5760,40,15);
  colisao(jogador,3316,5760,40,15);
  colisao(jogador,3413,5760,40,15);
  colisao(jogador,3122,5857,40,15);
  colisao(jogador,3219,5857,40,15);
  colisao(jogador,3316,5857,40,15);
  colisao(jogador,3413,5857,40,15);
  colisao(jogador,3797,5760,40,15);
  colisao(jogador,3894,5760,40,15);
  colisao(jogador,3991,5760,40,15);
  colisao(jogador,4088,5760,40,15);
  colisao(jogador,3797,5857,40,15);
  colisao(jogador,3894,5857,40,15);
  colisao(jogador,3991,5857,40,15);
  colisao(jogador,4088,5857,40,15);
  colisao(jogador,2640,6198,40,15);
  colisao(jogador,2737,6198,40,15);
  colisao(jogador,2834,6198,40,15);
  colisao(jogador,2931,6198,40,15);
  colisao(jogador,2640,6293,40,15);
  colisao(jogador,2737,6293,40,15);
  colisao(jogador,2834,6293,40,15);
  colisao(jogador,2931,6293,40,15);
  colisao(jogador,3797,6198,40,15);
  colisao(jogador,3894,6198,40,15);
  colisao(jogador,3991,6198,40,15);
  colisao(jogador,4088,6198,40,15);
  colisao(jogador,3797,6293,40,15);
  colisao(jogador,3894,6293,40,15);
  colisao(jogador,3991,6293,40,15);
  colisao(jogador,4088,6293,40,15);
  colisao(jogador,240, 4661,40,15);
  colisao(jogador,337, 4661,40,15);
  colisao(jogador,434, 4661,40,15);
  colisao(jogador,531, 4661,40,15);
  colisao(jogador,240, 4758,40,15);
  colisao(jogador,337, 4758,40,15);
  colisao(jogador,434, 4758,40,15);
  colisao(jogador,531, 4758,40,15);
  colisao(jogador,723, 4661,40,15);
  colisao(jogador,820, 4661,40,15);
  colisao(jogador,917, 4661,40,15);
  colisao(jogador,1014,4661,40,15);
  colisao(jogador,723, 4758,40,15);
  colisao(jogador,820, 4758,40,15);
  colisao(jogador,917, 4758,40,15);
  colisao(jogador,1014,4758,40,15);
  colisao(jogador,1782, 4661,40,15);
  colisao(jogador,1879, 4661,40,15);
  colisao(jogador,1976, 4661,40,15);
  colisao(jogador,2073,4661,40,15);
  colisao(jogador,1782, 4758,40,15);
  colisao(jogador,1879, 4758,40,15);
  colisao(jogador,1976, 4758,40,15);
  colisao(jogador,2073, 4758,40,15);
  colisao(jogador,190, 4566,87,10);
  colisao(jogador,660, 4566,97,10);
  colisao(jogador, 2068, 4566,97,10);
  colisao(jogador,1634,4035,127,10);
  colisao(jogador,1873,4035,90,10);
  colisao(jogador,385,4507,95,25);
  colisao(jogador,864,4507,95,25);
  colisao(jogador,1872,4507,95,25);
  colisao(jogador,2013,3979,143,25);
  colisao(jogador,1659,3959,143,25);
  colisao(jogador,1505,3803,110,1);
  colisao(jogador,1984,3803,110,1);
  colisao(jogador,1746,3803,110,1);
  colisao(jogador,1840,3615,110,1);
  colisao(jogador,1600,3615,110,1);
  colisao(jogador,1555, 3762,8,80);
  colisao(jogador,1795, 3762,8,80);
  colisao(jogador,2034, 3762,8,80);
  colisao(jogador,1650,3568,8,80);
  colisao(jogador,1891,3568,8,80);
  colisao(jogador,1521 ,3780,77,46);
  colisao(jogador,1762,3780,77,46);
  colisao(jogador,2003,3780,77,46);
  colisao(jogador,1618, 3588,77,46);
  colisao(jogador,1859 , 3588,77,46);
  colisao(jogador,2069, 3496,37,126);
  colisao(jogador,1452,3937,33,67);
  colisao(jogador,172, 3484,2200,40);
  colisao(jogador,2157, 3434,20,1700);
  colisao(jogador,149 , 3434,46,1700);
  colisao(jogador,149 ,4127,428,70);
  colisao(jogador,719  ,4127,427,70);
  colisao(jogador,1100 , 3434,55,754);
  colisao(jogador,1388 , 3434,55,144);
  colisao(jogador,1388 , 3700,55,546);
  colisao(jogador,1388,3890,828,70);
  colisao(jogador,1771,3890,55,340);
  colisao(jogador,1535, 4176,480,70);
  colisao(jogador,2110, 4176,120,70);
  colisao(jogador,631 ,4418,378,70);
  colisao(jogador,149 ,4418,378,70);
  colisao(jogador,1823 ,4418,378,70);
  colisao(jogador,621 ,4418,55,500);
  colisao(jogador,1102,4418,55,500);
  colisao(jogador,1677,4418,55,500);
  colisao(jogador,149, 4883,2200,10);

  //Árvores meio do mapa
  colisao(jogador, 576, 1344, 96, 75);
  colisao(jogador, 3168, 1824, 96, 75);
  colisao(jogador, 3120, 1872, 96, 75);
  colisao(jogador, 1824, 1488, 96, 75);
  colisao(jogador, 1872, 1440, 192, 75);
  colisao(jogador, 1920, 1488, 96, 75);
  colisao(jogador, 1872, 1536, 96, 75);
  colisao(jogador, 1584, 432, 96, 75);
  colisao(jogador, 1680, 432, 96, 75);
  colisao(jogador, 1632, 384, 96, 75);
  colisao(jogador, 2976, 384, 96, 75);
  colisao(jogador, 2928, 432, 96, 75);
  colisao(jogador, 3024, 432, 96, 75);
  colisao(jogador, 2976, 480, 96, 75);

  //Base Elite
  //BAIXO
  colisao(jogador, 2880, 4032, 240, 20);
  colisao(jogador, 2880, 4032, 20, 220);
  colisao(jogador, 3100, 4032, 20, 220);
  colisao(jogador, 2880, 4232, 96, 20);
  colisao(jogador, 3024, 4232, 96, 20);

  colisao(jogador, 3648, 4032, 240, 20);
  colisao(jogador, 3648, 4032, 20, 220);
  colisao(jogador, 3868, 4032, 20, 220);
  colisao(jogador, 3648, 4232, 96, 20);
  colisao(jogador, 3792, 4232, 96, 20);

  //CIMA
  colisao(jogador, 2880, 3648, 240, 20);
  colisao(jogador, 2880, 3648, 20, 220);
  colisao(jogador, 3100, 3648, 20, 220);
  colisao(jogador, 2880, 3848, 96, 20);
  colisao(jogador, 3024, 3848, 96, 20);

  colisao(jogador, 3648, 3648, 240, 20);
  colisao(jogador, 3648, 3648, 20, 220);
  colisao(jogador, 3868, 3648, 20, 220);
  colisao(jogador, 3648, 3848, 96, 20);
  colisao(jogador, 3792, 3848, 96, 20);

  //Personagens
  //Elite

  //Professores
  colisao(jogador, 2620, 4987, 32, 32);

  //NPCS

  //frente
  colisao(jogador, 2592, 1520, 32, 32);
  //lado
  colisao(jogador, 1344, 1604, 32, 25);
  colisao(jogador, 864, 1520, 32, 32);
  colisao(jogador, 2335, 2070, 32, 25);


  //npc quest (floresta)
  colisao(jogador,3552,1259, 32, 32);
  
  //npc porta (B casa do meio)
  colisao(jogador,1728,1165,32,25);

  
  colisao(jogador,1200, 1069,32,25);
*/
  colisao(jogador,864 ,5616,32,32);

  colisao(jogador, 672,5952,32,44);

  colisao(jogador, 1152,6720,32,42);

  colisao(jogador,864 ,5616,32,32);



  colisao(jogador,576, 6624,32,44);

  colisao(jogador,576, 6624,32,44);

  colisao(jogador,3168, 6048,32,44);
  
  colisao(jogador,4124, 6048,32,44);

  colisao(jogador,3456, 4608,32,44);
   
  colisao(jogador,3360, 4992,32,44);

  colisao(jogador,2928, 5414,32,44);
  colisao(jogador,2592,6144,32,44);

  colisao(jogador,1344,6048,32,44);
  
  colisao(jogador,384, 5366,32,44);
  
  colisao(jogador,816,3542,32,44);
  
  colisao(jogador,336,3984,32,44);
 
  colisao(jogador,1872 ,3984,32,44);
 

  colisao(jogador,720 ,4512,32,44);

  colisao(jogador,1594 ,3970,32,44);
  
  colisao(jogador,2112, 3552,32,44);

  colisao(jogador,1824, 3792,32,44);


  colisao(jogador, 1349,5400,32,44);

  colisao(jogador,1680 ,5472,32,44);
  
  colisao(jogador,432 ,6192,32,44);
 
  colisao(jogador,1488 ,6624,32,44);
 
  /*



colisao(jogador,,32,44);
colisao(jogador,,32,44);
colisao(jogador,,32,44);
colisao(jogador,,32,44);
colisao(jogador,,32,44);
colisao(jogador,,32,44);
  */
}
