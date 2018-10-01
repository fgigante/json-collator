var async = require('async');
var Validator = require('jsonschema').Validator;
var utils = require('../utils');

exports.index = function(req, res) {
    
    res.render('index', { title: 'Pantalla principal' });
};


exports.validation_get = function(req, res) {
    res.render('validation_form', { title: 'Validation form' });
};

exports.validation_post = [

    (req, res, next) => {

        var isCorrect = false;
        var valMessage = '';
        var resu = [];
        var v = new Validator();

        try {
            var instance = JSON.parse(req.body.jinstance);
            var schema = JSON.parse(req.body.jschema);
            resu = v.validate(instance, schema);
            console.log(resu);
        } catch (e) {
            valMessage = e;
        }

        if (resu.errors) {
            if (resu.errors.length == 0) {
                isCorrect = true;
                valMessage = "Validation is correct!";
            } else {
                for (var i=0; i<resu.errors.length; i++) {
                    valMessage += resu.errors[i].message + "\n";
                }
            }
        }

        res.render('validation_form', { title: 'Validation form', isCorrect: isCorrect, valMessage: valMessage, prev_instance: req.body.jinstance, prev_schema: req.body.jschema });
    }
];

exports.example2 = function(req, res) {

    console.log('GET /example2');
    
    var f_ins = [], f_sch = [];
    Promise.all([ 
        f_ins = utils.readFile("instance_ex.json"),
        f_sch = utils.readFile("schema_ex.json"),
    ])
    .then(function(){
        console.log("All Done!");

        myObj = new Object();
        myObj.instance = f_ins;
        myObj.schema = f_sch;

        res.status(200).jsonp(myObj);
    })
};

