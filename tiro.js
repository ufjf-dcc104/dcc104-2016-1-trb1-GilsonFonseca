		var ball = new Image();
		ball.src = "goku.png";	
		var tiros = [];		
		var excluirTiros = [];
		//this.pode = true;
		
		function disparaTiro(x, y){
			var tiro = new Sprite();
			resfriamento = 25;
			tiro.x = x;				
			tiro.y = y;
			tiro.vx = 100.1;
			tiro.restricoes = function () {};
			tiro.desenhar = function() {
			ctx.drawImage(ball,  88, 430, 50, 50, this.x-this.raio, this.y-this.raio, 2*this.raio, 2*this.raio);
			}
			tiros.push(tiro);
		}
		
		
		/*/ Caso o heroi esteja danificado nao podera atirar caso contrario podera
				function setpodeAtirar(resposta){
			for(var i in tiros)
				this.pode = resposta;
		}
		// Informa a condição do heroi para o tiro
		function getpodeAtirar(){
			return this.pode;
		}*/