const information = require('./information');

console.log(information);

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : "Hello, I'm "+ information.myPerson.name + " from " + information.myPerson.campus,
    e : "oO",
    T : "U "
}));