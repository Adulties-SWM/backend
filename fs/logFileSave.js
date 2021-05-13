var fs= require('fs');

var fileLog = {};
fileLog.writeLog = function(log){
	fs.readFile('./chanLog.txt','utf8',function(err,data){
		var logdata = data;
		logdata += log + '\n';
		fs.writeFile('./chanLog.txt',logdata,'utf8',function(err,data){});
	});
}


module.exports = fileLog;