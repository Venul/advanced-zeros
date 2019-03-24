module.exports = function getZerosCount(number, base) {
    let primeArr = [],
        tempArr = [], 
        simpleInt = 2,
        countFac = 0,
        tempFac = 1,
        j=0;
  
    while (base>2) {
      if (base % simpleInt == 0) {
          primeArr.push(simpleInt); 
          base= base/simpleInt;
      }  else {
        simpleInt++;
      }     
    }

    function unique(arr) {
      var obj = {};
    
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
      }
    
      return Object.keys(obj);
    }

    var simple = unique(primeArr);
    console.log(simple);

    
    for (var k = 0; k<simple.length;k++) {
      while (Math.floor(tempFac) != 0) {
        tempFac = number/Math.pow(simple[k], (j+1));
        j++;
        countFac= countFac+Math.floor(tempFac);
    }
      tempArr[k] = countFac;
      tempFac = 1;
      countFac = 0;
      j=0;
    }
    console.log(Math.min(...tempArr));
    return Math.min(...tempArr);

  }