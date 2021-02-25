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


    
}
$(document).ready(function () { 
    var maestro = new Connector();
	maestro.getNavbar(sessionStorage.getItem("login"));
});