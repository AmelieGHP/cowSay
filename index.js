const nameCampus = require('./information');
let cowsay = require('cowsay');
console.log(cowsay.say({
    text: `Hi, my name is ${myInfo.firstName} and I'm part of ${myInfo.campus}`,
}
));