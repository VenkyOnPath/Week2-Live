// this is server talking to a server
// sending http requests to a http server
// We can use Java code also to send req to node js server


function lofResponseBody(jsonBody){
    console.log(jsonBody);
}

function callBackFn(result){
    result.json().then(lofResponseBody);
}

var sendObj = {
    method : "GET"
};

fetch("http://localhost:3000/handlSum?counter=11", sendObj).then(callBackFn)
