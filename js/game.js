class GameManager{
    static maestro = new Connector();
        
    static wildPokemonList = [];
    static trainersGroupList = [];
    
    

    static generateWildPokemon(ambientList){
        return new Promise((resolve, reject)=>{
            GameManager.maestro.askForWildPokemon(ambientList).then((params)=> {
                GameManager.wildPokemonList = [];
                let temp = params;
                for(let x in temp){
                    GameManager.wildPokemonList.push(new Pokemon(temp[x]));
                }
                resolve(this.wildPokemonList);
            });
        });
    }
    static generateRandomTrainers(){
        return new Promise((resolve, reject)=>{
            GameManager.maestro.askForTrainers().then((params)=> {
                GameManager.trainersGroupList = [];
                let temp = params;
                for(let x in temp){
                    let group = [];
                    for(let y in temp[x]){  
                        group.push(new Trainer(temp[x][y].listPokemon, temp[x][y].nome, temp[x][y].sexo));
                    }
                    GameManager.trainersGroupList.push(group);
                }
                resolve(this.trainersGroupList);
            });
        });
    }

}
var gameManager = null;
$(document).ready(function () {
    gameManager = new GameManager();
});








class Pokemon{
    
    constructor(pokeJson) {
      console.log(pokeJson);
        this.especie = pokeJson.especie;
        this.sexo = pokeJson.sexo;
        
        this.chanceCaptura = pokeJson.chanceCaptura;
        this.xp = pokeJson.xp;
        this.habitat = pokeJson.habitat;
        this.nivel = pokeJson.nivel;
        
        this.saudeBasal = pokeJson.saudeBasal;
        this.saude = pokeJson.saude;
        
        this.ataqueBasal = pokeJson.ataqueBasal;
        this.ataque = pokeJson.ataque;
        
        this.defesaBasal = pokeJson.defesaBasal;
        this.defesa = pokeJson.defesa;
        
        this.spAtaqueBasal = pokeJson.spAtaqueBasal;
        this.spAtaque = pokeJson.spAtaque;
        
        this.spDefesaBasal = pokeJson.spDefesaBasal;
        this.spDefesa = pokeJson.spDefesa;
        
        this.velocidadeBasal = pokeJson.velocidadeBasal;
        this.velocidade = pokeJson.velocidade;
        
        
        this.habilidade = pokeJson.habilidadeReal;
        this.nature = pokeJson.nature;
        
        this.golpes = pokeJson.golpes;
        
    }
  }



  class Trainer{
	constructor(listPokemon, nome, sexo){
		this.listPokemon = [];
        this.sexo = sexo;
        this.nome = nome;
		for (let index = 0; index < 6; index++) {
			if(listPokemon[index]){
				this.setPokemon(index, listPokemon[index]);
				this.listPokemon.push(listPokemon[index])
			}else{
				this.setPokemon(index, null);
			}
			
		}
	}

	setPokemon(numberPokemon, pokemon){
		switch(numberPokemon){
			case 0: this.pokemon1=pokemon; break;
			case 1: this.pokemon2=pokemon; break;
			case 2: this.pokemon3=pokemon; break;
			case 3: this.pokemon4=pokemon; break;
			case 4: this.pokemon5=pokemon; break;
			case 5: this.pokemon6=pokemon; break;
			default: break;
		}
	}
	getPokemon(numberPokemon){
		switch(numberPokemon){
			case 0: return this.pokemon1; break;
			case 1: return this.pokemon2; break;
			case 2: return this.pokemon3; break;
			case 3: return this.pokemon4; break;
			case 4: return this.pokemon5; break;
			case 5: return this.pokemon6; break;
			default: break;
		}
	}
}

$(document).ready(function () {
    gameManager = new GameManager();
});