function calculaJogadaAliado(){
//O QUE CADA OPÇÃO FARÁ
	switch (opcaoAtual){
		case 0:
			vidaInimigo -= danoNormalAliado;
			manaAtualInimigo += 10;
			break;
		case 1:
			if (estudanteInimigo.classe == estudanteAliado.vantagem) {
				vidaInimigo -= danoEspecialAliado + 15;
				manaAtualInimigo += 25;

				if (manaAtualInimigo > 100) {
					manaAtualInimigo = manaMaximaInimigo;
				}
			}else{
				vidaInimigo -= danoEspecialAliado;
				manaAtualInimigo += 20;

				if (manaAtualInimigo > 100) {
					manaAtualInimigo = manaMaximaInimigo;
				}
			}
			manaAtualAliado -= manaCusto;
			if (manaAtualAliado < 0) {
				manaAtualAliado = 0;
			}
			break;
		case 2:
			vidaAliado += (aliadoVidaTotal * 35) / 100;
			if (vidaAliado > aliadoVidaTotal) {
				vidaAliado = aliadoVidaTotal;
			}
			manaAtualAliado -= manaCusto;
			if (manaAtualAliado < 0) {
				manaAtualAliado = 0;
			}
			break;
	}

//VERIFICA CONTINUIDADE
	if (vidaInimigo < 0) {
		estudanteInimigo.vida = 0;
	}else{
		estudanteInimigo.vida = vidaInimigo;
	}

	calculaPorcentagens("aliado");

	if (estudanteInimigo.vida == 0){
		ganhou = true;
		batalhando = false;
	}else{
		setTimeout(function(){
			calculaJogadaInimigo();
		}, 1500);
	}
}

function calculaJogadaInimigo(){
	var golpe;

	
//CÉREBRO DO INIMIGO
	if (manaAtualInimigo < manaCusto) {
		golpe = 0;
	}else{
		if (((vidaInimigo * 100) / inimigoVidaTotal) <= 50) {
			if ((estudanteAliado.classe == estudanteInimigo.vantagem) && (vidaAliado <= danoEspecialInimigo + 15)) { 
				golpe = 1;
			}else {
				golpe = 2;
			}
		}else{
			golpe = Math.floor(Math.random() * 3);

			if (golpe !== 1) {
				golpe = 0;
			}
		}
	}
//-------
	
//O QUE CADA OPÇÃO FARÁ
	switch (golpe){
		case 0:
			vidaAliado -= danoNormalInimigo;
			manaAtualAliado += 10;
			break;
		case 1:
			if (estudanteAliado.classe == estudanteInimigo.vantagem) {
				vidaAliado -= danoEspecialInimigo + 15;
				manaAtualAliado += 25;

				if (manaAtualAliado > 100) {
					manaAtualAliado = manaMaximaAliado;
				}
			}else{
				vidaAliado -= danoEspecialInimigo;
				manaAtualAliado += 20;

				if (manaAtualAliado > 100) {
					manaAtualAliado = manaMaximaAliado;
				}
			}
			manaAtualInimigo -= manaCusto;
			if (manaAtualInimigo < 0) {
				manaAtualInimigo = 0;
			}
			break;
		case 2:
			vidaInimigo += (inimigoVidaTotal * 35) / 100;
			if (vidaInimigo > inimigoVidaTotal) {
				vidaInimigo = inimigoVidaTotal;
			}
			manaAtualInimigo -= manaCusto;
			if (manaAtualInimigo < 0) {
				manaAtualInimigo = 0;
			}
			break;
	}

//VERIFICA CONTINUIDADE
	if (vidaAliado < 0) {
		estudanteAliado.vida = 0;
	}else{
		estudanteAliado.vida = vidaAliado;
	}

	calculaPorcentagens("inimigo");

	if (estudanteAliado.vida == 0){
		ganhou = false;
		batalhando = false;
	}else{
		acaoBloqueada = false;
	}
}

function calculaPorcentagens(objetoAtual){
	if (objetoAtual == "aliado") {
		porcentagemManaInimigo = (manaAtualInimigo * 100) / manaMaximaInimigo;
		barraManaCheiaInimigo.largura = (barraManaCheiaInimigoTotal * porcentagemManaInimigo) / 100;

		porcentagemManaAliado = (manaAtualAliado * 100) / manaMaximaAliado;
		barraManaCheiaAliado.largura = (barraManaCheiaAliadoTotal * porcentagemManaAliado) / 100;

		porcentagemVidaInimigo = (vidaInimigo * 100) / inimigoVidaTotal;
		barraVidaCheiaInimigo.largura = (barraVidaCheiaInimigoTotal * porcentagemVidaInimigo) / 100;

		porcentagemVidaAliado = (vidaAliado * 100) / aliadoVidaTotal;
		barraVidaCheiaAliado.largura = (barraVidaCheiaAliadoTotal * porcentagemVidaAliado) / 100;
	} else if (objetoAtual == "inimigo") {
		porcentagemManaAliado = (manaAtualAliado * 100) / manaMaximaAliado;
		barraManaCheiaAliado.largura = (barraManaCheiaAliadoTotal * porcentagemManaAliado) / 100;

		porcentagemManaInimigo = (manaAtualInimigo * 100) / manaMaximaInimigo;
		barraManaCheiaInimigo.largura = (barraManaCheiaInimigoTotal * porcentagemManaInimigo) / 100;

		porcentagemVidaAliado = (vidaAliado * 100) / aliadoVidaTotal;
		barraVidaCheiaAliado.largura = (barraVidaCheiaAliadoTotal * porcentagemVidaAliado) / 100;

		porcentagemVidaInimigo = (vidaInimigo * 100) / inimigoVidaTotal;
		barraVidaCheiaInimigo.largura = (barraVidaCheiaInimigoTotal * porcentagemVidaInimigo) / 100;
	}
}
