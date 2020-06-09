const fs = require('fs');
const util = require('util')
const file = require('./config.json')
  var counter3 = 0;
var  arrayed = [];
var arr = [];
var jsonstorage = {};
var counter2 = 0;
var cart=50;
 function success() {
  return Promise.resolve(jsonstorage);
} 
module.exports = {
    bw: function(jsondata) {
        jsonstorage = jsondata;
       // console.log(jsondata)
        var promise = new Promise(function(resolve, reject) {
    
        var sensitivity = file.sensitivity;
       
                            console.log("running editor" + counter3 )
                            for (x = 0; x <= counter3; x++) {
                                try{
                if(jsonstorage[x]["red"]){
                                if (parseInt(jsonstorage[x]["red"],10) > parseInt(jsonstorage[x + 1]["red"]+ sensitivity,10) || parseInt(jsonstorage[x]["red"],10) < parseInt(jsonstorage[x + 1]["red"]- sensitivity,10)  ) {
                                  
                                    jsonstorage[x]["green"] = 0
                                    jsonstorage[x]["blue"] = 0
                                    jsonstorage[x]["red"] = 0
                                     //jsonstorage[x]["green"] =  255- jsonstorage[x]["red"];
                                   // jsonstorage[x]["blue"] =  255- jsonstorage[x]["red"];
                                    //jsonstorage[x]["red"] =  255- jsonstorage[x]["red"];
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                } else {
                                     
                                    jsonstorage[x]["green"] =  255- jsonstorage[x]["red"];
                                    jsonstorage[x]["blue"] =  255- jsonstorage[x]["red"];
                                    jsonstorage[x]["red"] =  255- jsonstorage[x]["red"];
                                     //jsonstorage[x]["green"] = 0
                                    //jsonstorage[x]["blue"] = 0
                                   //jsonstorage[x]["red"] = 0
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                }
                                     

                }
                                } catch{
                                   // console.log("Error finding red @" + x )

                                }
                                if (x == counter3) {
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");

                                    arrayed.push("0");
                                    console.log("Forming array: " + counter3)
                                   //console.log(arrayed);
                                    console.log("data length:")
                                   resolve(arrayed);
                                  //  return Promise.resolve(arrayed);
                                }
                            }

        })
        return promise;
    } ,
    classic: function(jsondata) {
        jsonstorage = jsondata;
       // console.log(jsondata)
        var promise = new Promise(function(resolve, reject) {
    
        var sensitivity = file.sensitivity;
       
                            console.log("running editor" + counter3 )
                            for (x = 0; x <= counter3; x++) {
                                try{
                if(jsonstorage[x]["red"]){
                                if (parseInt(jsonstorage[x]["red"],10) > parseInt(jsonstorage[x + 1]["red"]+ sensitivity,10) || parseInt(jsonstorage[x]["red"],10) < parseInt(jsonstorage[x + 1]["red"]- sensitivity,10)  ) {
                                  
                                    jsonstorage[x]["green"] = (255-jsonstorage[x]["red"])/2
                                    jsonstorage[x]["blue"] = (255-jsonstorage[x]["red"])/2
                                    jsonstorage[x]["red"] =(255-jsonstorage[x]["red"])/2
                                     //jsonstorage[x]["green"] =  255- jsonstorage[x]["red"];
                                   // jsonstorage[x]["blue"] =  255- jsonstorage[x]["red"];
                                    //jsonstorage[x]["red"] =  255- jsonstorage[x]["red"];
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                } else {
                                     
                                    jsonstorage[x]["green"] =  255
                                    jsonstorage[x]["blue"] =  255
                                    jsonstorage[x]["red"] =  255
                                     //jsonstorage[x]["green"] = 0
                                    //jsonstorage[x]["blue"] = 0
                                   //jsonstorage[x]["red"] = 0
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                }
                                     

                }
                                } catch{
                                   // console.log("Error finding red @" + x )

                                }
                                if (x == counter3) {
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");

                                    arrayed.push("0");
                                    console.log("Forming array: " + counter3)
                                   //console.log(arrayed);
                                    console.log("data length:")
                                   resolve(arrayed);
                                  //  return Promise.resolve(arrayed);
                                }
                            }

        })
        return promise;
    },
    classicwb: function(jsondata) {
        jsonstorage = jsondata;
       // console.log(jsondata)
        var promise = new Promise(function(resolve, reject) {
    
        var sensitivity = file.sensitivity;
       
                            console.log("running editor" + counter3 )
                            for (x = 0; x <= counter3; x++) {
                                try{
                if(jsonstorage[x]["red"]){
                                if (parseInt(jsonstorage[x]["red"],10) > parseInt(jsonstorage[x + 1]["red"]+ sensitivity,10) || parseInt(jsonstorage[x]["red"],10) < parseInt(jsonstorage[x + 1]["red"]- sensitivity,10)  ) {
                                  
                                    jsonstorage[x]["green"] = 255
                                    jsonstorage[x]["blue"] = 255
                                    jsonstorage[x]["red"] = 255
                                     //jsonstorage[x]["green"] =  255- jsonstorage[x]["red"];
                                   // jsonstorage[x]["blue"] =  255- jsonstorage[x]["red"];
                                    //jsonstorage[x]["red"] =  255- jsonstorage[x]["red"];
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                } else {
                                     
                                    jsonstorage[x]["green"] =  0
                                    jsonstorage[x]["blue"] =  0
                                    jsonstorage[x]["red"] =  0
                                     //jsonstorage[x]["green"] = 0
                                    //jsonstorage[x]["blue"] = 0
                                   //jsonstorage[x]["red"] = 0
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                }
                                     

                }
                                } catch{
                                   // console.log("Error finding red @" + x )

                                }
                                if (x == counter3) {
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");

                                    arrayed.push("0");
                                    console.log("Forming array: " + counter3)
                                   //console.log(arrayed);
                                    console.log("data length:")
                                   resolve(arrayed);
                                  //  return Promise.resolve(arrayed);
                                }
                            }

        })
        return promise;
    },
       cartoon: function(jsondata) {
        jsonstorage = jsondata;
       // console.log(jsondata)
        var promise = new Promise(function(resolve, reject) {
    
        var sensitivity = file.sensitivity;
       
                            console.log("running editor" + counter3 )
                            for (x = 0; x <= counter3; x++) {
                                try{
                if(jsonstorage[x]["red"]){
                                if (parseInt(jsonstorage[x]["red"],10) > parseInt(jsonstorage[x]["green"],10)+cart && parseInt(jsonstorage[x]["red"],10) > parseInt(jsonstorage[x]["blue"],10)+cart  ) {
                                 
                                    jsonstorage[x]["green"] = 0;
                                    jsonstorage[x]["blue"] = 0;

                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                } else {if (parseInt(jsonstorage[x]["green"],10) > parseInt(jsonstorage[x]["red"],10)+cart && parseInt(jsonstorage[x]["green"],10) > parseInt(jsonstorage[x]["blue"],10)+cart  ) {
                                 

                                    jsonstorage[x]["blue"] = 0;
                                    jsonstorage[x]["red"] =0;
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                }else{
                                    if (parseInt(jsonstorage[x]["blue"],10 )> parseInt(jsonstorage[x]["green"],10)+cart && parseInt(jsonstorage[x]["blue"],10) > parseInt(jsonstorage[x]["red"],10)+cart  ) {
                                 
                                    jsonstorage[x]["green"] = 0;
                                    
                                    jsonstorage[x]["red"] = 0;
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                }else{
                                     
                                    jsonstorage[x]["green"] =  255- jsonstorage[x]["red"];
                                    jsonstorage[x]["blue"] =  255- jsonstorage[x]["red"];
                                    jsonstorage[x]["red"] =  255- jsonstorage[x]["red"];
                                    arrayed.push(jsonstorage[x]["red"]);
                                    arrayed.push(jsonstorage[x]["green"]);
                                    arrayed.push(jsonstorage[x]["blue"]);
                                    }
                                    }
                                }
                                     

                }
                                } catch{
                                   // console.log("Error finding red @" + x )

                                }
                                if (x == counter3) {
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");
                                    arrayed.push("0");

                                    arrayed.push("0");
                                    console.log("Forming array: " + counter3)
                                   //console.log(arrayed);
                                    console.log("data length:")
                                   resolve(arrayed);
                                  //  return Promise.resolve(arrayed);
                                }
                            }

        })
        return promise;
    } ,



    jsonify: function(dataarray) {
        var promise = new Promise(function(resolve, reject) {
        arr = dataarray;
    arr.forEach(function (e) {
                counter2++
                    //console.log(e)
                    e = e.toString()
                    if(counter2 >= arr[10] && counter2 % 3 == 1){
                        jsonstorage[counter3.toString()] = {}
                        jsonstorage[counter3.toString()]["red"] = "" +e+ ""
                        jsonstorage[counter3.toString()]["green"] ="" +arr[counter2 +1] +"";
                        jsonstorage[counter3.toString()]["blue"] = ""+arr[counter2 +2]+"";
                        if (!e) {
                            jsonstorage[counter3.toString()]["red"] = 0
                            console.log("Filled Red Gap @" + counter2.toString());
                        }
                        if (!arr[counter2 +1]) {
                            jsonstorage[counter3.toString()]["green"] = "" + 0 +"";
                            console.log("Filled Green Gap @" + counter2.toString());
                        }
                         if (!arr[counter2 +2]) {
                             jsonstorage[counter3.toString()]["blue"] = "" + 0 +"";
                             console.log("Filled Blue Gap @" + counter2.toString());
                        }
                    counter3++
                    } if(counter2 < arr[10]){

                        arrayed.push(""+e+"")
                        }
                    
                    if (counter2 == arr.length){
                       //console.log(jsonstorage)
                        console.log(`Pixel Count: ${counter3}`)
                        //console.log(Promise.resolve(jsonstorage));
                       console.log("logged storage")
      
    /* missing implementation */
   


 
};
                       // saveImage("suite3.jpg",final)
                        
                    
  
                        })

         


                    resolve(jsonstorage)        
                    })  
         return promise;
    },
    saveImage:   function(filename, data) {
        var myBuffer = new Buffer(data.length);
        for (var i = 0; i < data.length; i++) {
            myBuffer[i] = data[i];
        }
        fs.writeFile(filename, myBuffer, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
    }
};
