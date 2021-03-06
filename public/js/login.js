$(document).ready(function () {
    $("#entrar").click(function (e) { 
        e.preventDefault();
        
        try{
            let request = {
                request: "login", 
                login: $("#user").val(),
                password: $("#password").val(),
            };
			
            let loginToken = server.serverRequest(request).then(function name(param) {
                sessionStorage.setItem("login", param);
                $(location).attr('href', 'index.html');
            }).catch();
            
            
            
        }catch(err){
            console.log(err);
        }
    });

    $("input").focus(function(){
        $(".erro-login").hide();
    })
});