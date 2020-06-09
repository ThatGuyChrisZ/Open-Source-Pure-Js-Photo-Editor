const fs = require('fs');
const util = require('util')
const file = require('./config.json')
const imgedit = require("./collector.js");
fs.readFile(file.file, (err, data) => {
  
  if (err) throw err;
  console.log(data);
			var repair = data.toString('base64');
			var hex = data.toString('hex');
			let buff = new Buffer(repair, 'base64');
			var arr = Array.prototype.slice.call(buff, 0)
			var counter2 = 0;
    var sensitivity = parseInt(file.sensitivity, 10);
    imgedit.jsonify(arr).then(ret1 => {
        imgedit.classic(ret1).then(res2 => {
             imgedit.saveImage("sute3.jpg",res2)
        })
    })

		})
			

