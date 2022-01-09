const fs = require('fs');

exports.main = function(req,res) {

    res.render('main', { 
        title: 'calendar for workout women'
        , name : 'Azura'
    });
}