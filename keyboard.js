
function teclaPressionada(e){
			console.log("Tecla Pressionada: " + e.keyCode);
			switch(e.keyCode){
				case 90:
					//Se o herói não está danificado nem fraco pode atirar
							
					if(pc.danificado == 0 && resfriamento == 0){
						disparaTiro((pc.x+pc.raio), pc.y);
					}
					break;
					
				case 82:
							
				case 37:
					pc.ax = -300;					
				break;
				case 39:
					pc.ax = 300;
				break;
				case 38:
					pc.ay = -300;
				break;
				case 40:
					pc.ay = 300;
				break;
			}

		}

		function teclaSolta(e){
			console.log("Tecla Solta: " + e.keyCode);
			switch(e.keyCode){
				case 37:
				case 39:
					pc.ax = 0;
					break;
				case 38:
				case 40:
					pc.ay = 0;
				break;
			}
		}