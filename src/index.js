
exports.min = function min (array) {
  if ((array === 'undefined') || (!Array.isArray(array)) || (array.length === 0)){
  return 0;}
  else{
    let arrMin = array.sort(function(a,b){
      return a>b? 1:-1;
    });
    return arrMin[0];
  }
}

exports.max = function max (array) {
  if ((array === 'undefined') || (!Array.isArray(array)) || (array.length === 0)) {
    return 0;
  }
  else {
    let arrMax =  array.sort(function (a, b) {
      return a < b ? 1 : -1;
    });
    return arrMax[0];
  }
}

exports.avg = function avg (array) {
  if ((array === 'undefined') || (!Array.isArray(array)) || (array.length === 0)) {
    return 0;
  }
  else {
    let sum = 0;
    array.forEach(element => {
      sum += element;
    });
    return sum / array.length;
  }
}
