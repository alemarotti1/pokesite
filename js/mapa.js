var wild = [];
var pokedex = null, cities = [];
$(document).ready(function () {


	
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



$(document).ready(function () {
	$("#close").click(function (e) { 
		e.preventDefault();
		$("#ficha").toggle();
	});

	
});
