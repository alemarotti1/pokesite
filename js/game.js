class GameManager{
    static maestro = new Connector();
        
    static wildPokemonList = [];
    

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

$(document).ready(function () {
    gameManager = new GameManager();
});