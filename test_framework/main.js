 function Framework() {};

 Framework.prototype.toEqual = function (value1, value2) {
     if (value1 == value2) {
         console.log( value1 + " equals "+ value2 + " - test passed")
     } else {
         throw new Error(value1 +  " does not equal " + value2)
        
     }
 }
 
 Framework.prototype.toBe = function (value1, value2) {
    if (value1 === value2) {
        console.log( "expect " + value1 + " to be "+ value2 + " - test passed")
    } else {
        throw new Error(value1 +  " does not equal " + value2)
       
    }
}

module.exports = Framework 

// begin tests

 framework = new Framework()
 
 