
		function Sprite(){
	 		this.x = 110;
	 		this.y = 115;
	 		this.vx = 0;
	 		this.ax = 0;
	 		this.vy = 0;
	 		this.ay = 0;
			this.raio = 32;
			this.cor = 'lightgrey';
			this.score = 0;
 		}
		
		Sprite.prototype.mover = function (){
 			this.vx = this.vx + this.ax*dt;
 			this.x = this.x + this.vx*dt;
 			this.vy = this.vy + this.ay*dt;
 			this.y = this.y + this.vy*dt;
 		}

 		Sprite.prototype.desenhar = function (){

		}

		Sprite.prototype.restricoes = function(){
			if(this.x<15+this.raio/2){
				this.x = 15+this.raio/2;
				this.vx = 0;
				this.ax = 0;
			}
			if(this.x>(tela.width-this.raio/2)-15) {
				this.x=(tela.width-this.raio/2)-15;
				this.vx = 0;
				this.ax = 0;
			}
			if(this.y<15+this.raio/2){
				this.y = 15+this.raio/2;
				this.vy = 0;
				this.ay = 0;
			}
			if(this.y>tela.height-90-this.raio/2) {
				this.y=tela.height-90-this.raio/2;
				this.vy = 0;
				this.ay = 0;
			}
		}

		Sprite.prototype.colidiuComCircular = function (alvo) {
			var distancia = Math.sqrt(
						Math.pow(alvo.x - this.x, 2)+
						Math.pow(alvo.y - this.y, 2)
			);
			return distancia<(alvo.raio);
		};