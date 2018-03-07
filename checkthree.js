/*
Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.

For example:

['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

*/

function checkThreeAndTwo(array) {
  // create arrays for each possible values
  var a = array.filter(x => x === "a")
  var b = array.filter(x => x === "b")
  var c = array.filter(x => x === "c")
  if (a.length === 3 && (b.length === 2 || c.length ===2)){
    return true;
  }else if (b.length === 3 && (a.length === 2 || c.length ===2)) {
    return true;
  }else if (c.length === 3 && (b.length === 2 || a.length ===2)){
    return true;
  }else {
    return false;
  }

}


console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]))
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]))
