var request = require('request')
var express = require('express')
var app = express();

const token = "8F2DD71E-91A9-468D-8912-8C69C73F9FD7";
const username = "laladehulu";
var parsedToken = Buffer.from(username + ":" + token).toString('base64');


const optionsRanking = {
    url: 'https://frc-api.firstinspires.org/v2.0/2019/rankings/caoc?teamNumber=3952',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client',
        'Authorization': 'Basic '+parsedToken
    }
};
const optionsScore = {
    url: 'https://frc-api.firstinspires.org/v2.0/2019/rankings/caoc?teamNumber=3952',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client',
        'Authorization': 'Basic '+parsedToken
    }
};
app.get("/ranking",function(req,res){
	console.log("requested");
	request(optionsRanking,function(error,response,body){
		if(error){
			console.log(error);
		}
		else{
			if(response.statusCode == 200){		
				var jsonData = JSON.parse(body)
				res.send(jsonData.Rankings[0].rank.toString());
				
			}
		}
	})
});
app.get("/score",function(req,res){
	console.log("requested");
	request(optionsRanking,function(error,response,body){
		if(error){
			console.log(error);
		}
		else{
			if(response.statusCode == 200){		
				var jsonData = JSON.parse(body)
				res.send(jsonData.Rankings[0].rank.toString());
				
			}
		}
	})
});
app.use(express.static("public"));

app.get("/",function(req,res){
	var ranking="3000";
	var score ="2";
	res.render("index.ejs",{ranking:ranking, score:score});
})
app.listen(3000,process.env.IP,function(){
	console.log("Server is running");
});