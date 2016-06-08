		/*Responsável pela criação do fundo do jogo*/
		
		// Inicialização das Variavéis que receberão as imagens de fundo
		var ceu = new Image();
		this.ceu.src = "ceu.png";
		var nuvem = new Image();
		nuvem.src = "nuvem.png";
		var grama = new Image();
		this.grama.src = "grama.png";
		var paralanuvem = 0;
		var paralaceu = 0;
		var paralagrama = 0;
		
		// Função que desenhará o fundo
		ceu.desenhar = function(){
			
			// Desenha duas imagens das nuvens do céu
			ctx.drawImage(nuvem, paralanuvem, ceu.height)
			ctx.drawImage(nuvem,paralanuvem+600,ceu.height);
			
			// Desenha duas imagens do céu acima das nuvens
			ctx.drawImage(ceu,paralaceu,0, 600, 135); 
			ctx.drawImage(ceu,paralaceu+599,0, 600, 135);
			
			// Desenha duas imagens da grama 
			ctx.drawImage(grama,paralagrama,ceu.height+nuvem.height); 
			ctx.drawImage(grama,paralagrama+600,ceu.height+nuvem.height);
			
			/*Verifica se parala(x), que começa no ponto x=0 está do tamanho da primeira
			imagem negativamente, caso isso ocorra sabemos que a primeira imagem já passou e
			está passando a segunda, logo resetamos o parala(x) para que a primeira imagem
			volte e forme um loop, sempre mostrando a imagem de fundo em movimento*/
			if(paralanuvem<=-Math.abs(canvas.width)) paralanuvem = 0;
			if(paralaceu<=-600) paralaceu = 0;
			if(paralagrama<=-600) paralagrama = 0;

			//Velocidade com que cada parala(x) corre
			paralanuvem -=Math.abs(200)*dt;
			paralagrama -= (1000+pc.vx)*dt;
			paralaceu -=10*dt;			
		}