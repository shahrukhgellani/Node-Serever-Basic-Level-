var express = require('express')
var app = express()
var port = 3213
app.get('/about',function(req , res){

	res.send('I am from server!')

	// console.log(req)
	// console.log("printing response object")
	// console.log(res)

})

var middleware = {
	requireAuthentication:function(req,res,next){
		console.log("Hitting any applications")
		
		next();
		},
	requestTime:function(req,res,next){
		console.log("Hitting private on " + new Date().toString() + " :) ")
		next()
	}

}

// app.use(middleware.requestTime)
app.use(middleware.requireAuthentication)
app.get('/about-us', middleware.requestTime, function(req , res){

	res.send('I am from about-us route!')
})

app.get('/home',function(req , res){

	res.send('I am from home!')
})
app.use(express.static(__dirname + "/public"))

app.listen(port ,function(){

	console.log("Working with index on port " + port)
})