function colisao(jogador, posicaoX, posicaoY, largura, altura ) {

	var catX = jogador.centroX() - (posicaoX + (largura/2));
	var catY = jogador.centroY() - (posicaoY + (altura/2));

	var somaMeiaLargura = jogador.meiaLargura() + (largura/2);
	var somaMeiaAltura = jogador.meiaAltura() + (altura/2);

	var catX_abs = Math.abs(catX);
	var catY_abs = Math.abs(catY);

	if (catX_abs < somaMeiaLargura && catY_abs < somaMeiaAltura) {
		var sobreposicaoX = somaMeiaLargura - catX_abs;
		var sobreposicaoY = somaMeiaAltura - catY_abs;

		if (sobreposicaoX >= sobreposicaoY) {
			if (catY > 0) {
				jogador.posicaoY += sobreposicaoY;
			} else {
				jogador.posicaoY -= sobreposicaoY;
			}

			jogador.srcX = 0;
		} else {
			if (catX > 0) {
				jogador.posicaoX += sobreposicaoX;
			} else {
				jogador.posicaoX -= sobreposicaoX;
			}

			jogador.srcX = 0;
		}
	}
}
