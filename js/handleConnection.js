var server = new ServerHandler("service/")
class ServerHandler{
	constructor(url){
		this.destination = url;
	}
	serverRequest(requestParams){
		return new Promise((resolve, reject) =>{
			$.ajax({
				url: this.destination,
				method: "POST",
				data: JSON.stringify(requestParams),
				dataType: 'json',
				contentType: 'application/json'
	
	
			}).done((data)=>{
				resolve(data);
			});
		});
	}
}

