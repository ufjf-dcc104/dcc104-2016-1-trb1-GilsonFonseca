	// Variavel que recebe uma imagem com o sprite usado
	var hero = new Image();
	hero.src = "goku.png";	
	var pc = new Sprite();
	pc.danificado = 0; 	

	//Função de desenho do herói
	pc.desenhar = function (){
		// Se o heroi for danificado mostrara um sprite de dano
		if(this.danificado > 0){			
			ctx.drawImage(hero, 105, 945, 44, 47, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
			this.danificado -= 1;
		}else{	
			if(resfriamento !=0)
				resfriamento = resfriamento -1;
			ctx.beginPath();
			
			// Se o heroi estiver com aceleraçao positiva mostrara um sprite de voando para frente
			if(this.ax >= 0){
				ctx.drawImage(hero, 72, 840, 47, 47, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
			// caso contrario para tras
			}else {
				ctx.drawImage(hero, 114, 835, 43,47, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
			}
		}
		//Rosto do heroi ao lado da barra de vida
		ctx.drawImage(hero, 0, 75, 55, 60, 91-(2*this.raio), 287, 2*this.raio, 2*this.raio);
		ctx.closePath();
		ctx.stroke();				
	}