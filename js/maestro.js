class Connector{
	constructor(){
		this.server = new ServerHandler("service/");
	}
	getNavbar(loginToken){
		let requestParams = {
			request: "getNavbar",
			token: loginToken
		};
		this.server.serverRequest(requestParams).then(function(params) {
			console.log(params.dados);
			$("#navbar").append(params.dados);
		});
	}


    askForWildPokemon(data){
		let requestParams = {
			request: "generateWild",
            ambientList: data
		};

		return this.server.serverRequest(requestParams);
	}

    askForTrainers(data){
		let requestParams = {
			request: "generateTrainers"
		};

		return this.server.serverRequest(requestParams);
	}



}
$(document).ready(function () { 
    let maestro = null;
    maestro = new Connector();
	maestro.getNavbar(sessionStorage.getItem("login"));
});