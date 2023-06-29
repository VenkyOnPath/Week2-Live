
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

// Order matters in middlewares
app.use(bodyParser.json()) // like a middleware

app.get('/', givePage);
// app.get('/handlSum', handleFirstRequest)
app.get('/handlSum', handleFirstRequest)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

// function middleware1(req, res, next){
//     console.log("From inside middleware " + req.headers.counter);
//     next();
// }

// app.use(middleware1);

function handleFirstRequest(req, res){
    var counter = req.query.counter;
    if(counter < 1000){
        console.log(req.body);
        var calculatedSum = calculateSum(counter);
        var calculatedMul = calculateMul(counter);

        var ansObj = {
            sum : calculatedSum,
            mul : calculatedMul
        };
        console.log(calculatedSum);
        // var ans = "the sum is " + calculatedSum
        res.send(ansObj);   
    } else {
        res.status(411).send("You sent a big number");
    }
}

function  calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i<=counter; i++){
        sum = sum + i;
    } 
    return sum;   
}

function  calculateMul(counter) {
    var mul = 1;
    for (var i = 1; i<=counter; i++){
        mul = mul * i;
    } 
    return mul;   
}


// we can send different type of outputs,
// send() works for string, html and JSON but sendJSON() won't work for string
function givePage(req, res){
        res.sendFile(__dirname + "/index.html");
}