var wild = [];
var pokedex = null, cities = [];
$(document).ready(function () {

    //load cities
    $.getJSON("mapa.json", function(data2){
        var temp_cities = data2;
        console.log(cities);
        for (let index = 0; index < temp_cities.length; index++) {
            cities[temp_cities[index].city] = temp_cities[index].ambient;  
        }
    }).fail(function(){
        console.log("An error has occurred.");
    });


    $(".map-area").click(function (e) {
        e.preventDefault();
		GameManager.generateWildPokemon(cities[this.title]).then((result)=>{
            wildPokemonList = result;
            $("#pokemons-list").empty();
		
            for(let x in GameManager.wildPokemonList){
                $("#pokemons-list").append('<div id="'+x+'" style="padding: 3px; widht: 20vw" class="alert alert-danger pokemon-item" role="alert"><div style="display: inline;"><img style="width: 41px; height: 41px;" src="img/sprites/'+GameManager.wildPokemonList[x].especie.slice(0,3)+'.png" alt=""></div><div style="display: inline;">&nbsp;&nbsp; '+GameManager.wildPokemonList[x].especie.slice(4)+' &nbsp;&nbsp;</div><div style="display: inline;"><b>'+GameManager.wildPokemonList[x].nivel+'&nbsp;</b></div></div>')
            }


            addPokemon();

            GameManager.generateRandomTrainers().then((result2)=>{
                $("#trainers-list").empty();
                for(x in GameManager.trainersGroupList){
                    $("#trainers-list").append('<div id="'+x+'" style="padding: 3px; widht: 20vw" class="alert alert-danger trainer-item" role="alert"><div style="display: inline;"><img style="width: 41px; height: 41px;" src="img/auxSprites/'+GameManager.trainersGroupList[x].length+'trainers.png" alt=""></div><div style="display: inline;">&nbsp;&nbsp; Grupo'+x+' &nbsp;&nbsp;</div><div style="display: inline;"><b>'+GameManager.trainersGroupList[x].length+'&nbsp;</b></div></div>')
                }
                addTrainer()
            });
        });
    	
       

		




    });



	
});





$(document).ready(function () {
    $(".map-area").hover(function () {
        var tt = this.title;
        $("#img-map").attr("src", "img/maps/"+tt+".png");
        
    },//over
    function(){
        $("#img-map").attr("src", "");
    }
    );



	$(".toggle1").click(function (e) { 
		$("#toggle-trainer").toggle();
		$("#trainers-list-container").toggle();
		
	});

	$(".toggle2").click(function (e) { 
		$("#toggle-pokemon").toggle();
		$("#pokemon-list-container").toggle();
		
	});

	
});
function addPokemon(){
    $(".pokemon-item").click(function (e) {
        
        
        var wild = GameManager.wildPokemonList[this.id];
        $("#saude").val(wild.saude);
        $("#velocidade").val(wild.velocidade);
        $("#ataque").val(wild.ataque);
        $("#defesa").val(wild.defesa);
        $("#spataque").val(wild.spAtaque);
        $("#spdefesa").val(wild.spDefesa);
        
        $("#especie").val(wild.especie);
        $("#nivel").val(wild.nivel);
        $("#sexo").val(wild.sexo);
        
        /*var addNature = "+"+("HP".repeat(wild.natureStat[0]-1<0? 0: wild.natureStat[0]-1))+("SPD".repeat(wild.natureStat[1]-1<0? 0: wild.natureStat[1]-1))+("ATQ".repeat(wild.natureStat[2]-1<0? 0: wild.natureStat[2]-1))+("DEF".repeat(wild.natureStat[3]-1<0? 0: wild.natureStat[3]-1))+("SP.ATQ".repeat(wild.natureStat[4]-1<0? 0: wild.natureStat[4]-1))+("SP.DEF".repeat(wild.natureStat[5]-1<0? 0: wild.natureStat[5]-1));
        var subNature = "-"+("HP".repeat(-wild.natureStat[0]-1<0? 0: -wild.natureStat[0]-1))+("SPD".repeat(-wild.natureStat[1]-1<0? 0: -wild.natureStat[1]-1))+("ATQ".repeat(-wild.natureStat[2]-1<0? 0: -wild.natureStat[2]-1))+("DEF".repeat(-wild.natureStat[3]-1<0? 0: -wild.natureStat[3]-1))+("SP.ATQ".repeat(-wild.natureStat[4]-1<0? 0: -wild.natureStat[4]-1))+("SP.DEF".repeat(-wild.natureStat[5]-1<0? 0: -wild.natureStat[5]-1));
        */
        $("#nature").val(wild.nature);
        
        
        
        
        $("#golpes").empty();
        //var nomeGolpe, qtddado,dado,danoBase, frequencia;
        for(x in wild.golpes){
            var nomeGolpe = wild.golpes[x];//, qtddado,dado,danoBase, frequencia;
            var table = "<table class='able-striped' style='width: 24%; background-color: #CCCCCC; border: 2px solid black; display: inline-table;'> <tr style='text-align: center; background-color: #f9f9f9'> <th colspan='2' style='text-align: center' id='nome'>"+nomeGolpe+"</th> </tr> <tr> <td>1d12+6</td> <td>A vontade</td> </tr> <tr style='background-color: #f9f9f9'> <td colspan='2'>d</td> </tr> <tr> <td colspan='2'>e</td> </tr> </table> ";
            $("#golpes").append(table);
        }
        
        $("#habilidade").val(wild.habilidade);
        
        var hab = "";
        for(x in wild.habitat){
            hab = hab + wild.habitat[x]+" ";
        }
        $("#habitat").val(hab);
        $("#cc").val(wild.chanceCaptura);
        $("#xp").val(wild.xp);
        $("#ficha").show();
    });
}

function addTrainer(){
    $(".trainer-item").click(function (e) {
        $("#grupoList").empty();
        var group = GameManager.trainersGroupList[this.id];
        for(let x in group){
            let pokemonTable = "";
            console.log(group[x]);
            for(let y in group[x].listPokemon){
                pokemonTable = pokemonTable + '<td><table><tr><th rowspan="2"><img src="img/sprites/'+group[x].listPokemon[y].especie.slice(0,3)+'.png" cols></th><th>'+group[x].listPokemon[y].especie+'</th></tr><tr><td>'+group[x].listPokemon[y].nivel+'</td></tr></table></td>'
            }
            let image = ""
            let color = "black"
            if (group[x].sexo==="Masculino"){
                image = "male-trainer.png"
                color = "dodgerblue";
            } 
            else{
                image = "female-trainer.png"
                color = "lightcoral";
            }
            
            let div = '<br><table style="width: 95%; text-align: center; background-color: '+color+'; margin:auto;"><tr><th rowspan="2"><img src="img/auxSprites/'+image+'"></th><th colspan="6">'+group[x].nome+'</th></tr><tr>'+pokemonTable+'</tr></table><br>'
            $("#grupoList").append(div);
        }
        

        //let div = '<table style="width: 95%; text-align: center; background-color: lightcoral; margin:auto;"><tr><th rowspan="2"><img src="img/auxSprites/female-trainer.png"></th><th colspan="6">Nome</th></tr><tr>'area dos pokemons'</tr></table>'
    
    
        $("#grupo").show();
    });
}


$(document).ready(function () {
	$("#closePoke").click(function (e) { 
		e.preventDefault();
		$("#ficha").toggle();
	});
    $("#closeTrainer").click(function (e) { 
		e.preventDefault();
		$("#grupo").toggle();
	});
    

	
});
