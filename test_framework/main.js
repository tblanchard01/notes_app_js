 function Framework() {};

 Framework.prototype.toEqual = function (value1, value2) {
     if (value1 == value2) {
         console.log('test passed')
     } else {
         throw new Error(value1 +  " does not equal " + value2)
        
     }
 }

 framework = new Framework ()
 framework.toEqual(1,1)