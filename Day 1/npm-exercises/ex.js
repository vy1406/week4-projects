const validator = require('validator');
const faker = require('faker');

// --------------------------------------
// EXERCISE 1
// --------------------------------------

const Helper = require('./helpers');
const H = new Helper()

// Ex. 1.1
// Check whether "shoobert@dylan" is a valid email (should be false)

let email = "shoobert@dylan"
H.checkIfValid(email, validator.isEmail)
email = "shoobert@dylan.com"
H.checkIfValid(email, validator.isEmail)

// Ex. 1.2
// Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

let phoneNubmer = "786-329-9958"
H.checkIfValid(phoneNubmer, validator.isMobilePhone)
phoneNubmer = "ldjkfgsdfjk_SOMEPHONE_NUMBER_LOL_"
H.checkIfValid(phoneNubmer, validator.isMobilePhone)


//Ex. 1.3
//Use the following blacklist

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

console.log("text before cleaning : " + text)
text = validator.blacklist(text, blacklist).toLocaleLowerCase()
console.log("text after  cleaning : " + text)



// --------------------------------------
// EXERCISE 2
// --------------------------------------
const makeHuman = function (argNum) {
    let arrHuman = []
    for (let i = 0; i < argNum; i++) {
        const H = {
            name    : faker.name.findName(),
            company : faker.company.companyName(),
            img     : faker.image.image()
        }
        arrHuman.push(H)
    }
    console.log(arrHuman)
}

makeHuman(2)