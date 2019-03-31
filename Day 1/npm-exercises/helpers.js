// --------------------------------------
// helping function to make it prittier
// --------------------------------------
class Helper {
    constructor(){

    }

    checkIfValid(arg, validator_func) {
        if (validator_func(arg))
            console.log(arg + " | valid")
        else
            console.log(arg + " | not valid.")
    }
}
module.exports = Helper
