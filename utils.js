var fs = require("fs");

exports.readFile = function(filename) {
    
    try {
        console.log("Leyendo " + __dirname + "/extrafiles/" + filename);
        var content = fs.readFileSync(__dirname + "/extrafiles/" + filename, 'utf8');
  
        console.log("Leido fichero " + filename);
        return content;
    } catch (e) {
        return e;
    }
};

