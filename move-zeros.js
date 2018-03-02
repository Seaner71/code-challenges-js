//Write an algorithm that takes an array and moves all of the zeros
// to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  // create an empty array for reordered array
  reorderArray = []
  // filter out the zero and non- zero elements into 2 separte arrays
  var zeroArray = arr.filter(x => x === 0);
  var cleanArray = arr.filter(x => x!== 0)
  // iterate over the filtered arrays and push to the reorder array
  for (i=0; i < cleanArray.length; i++){
    reorderArray.push(cleanArray[i])
  }

  for (i=0; i < zeroArray.length; i++){
    reorderArray.push(zeroArray[i])

  }
  // return reordered array
  console.log(reorderArray)
  return reorderArray

}

// Refactored solution

var refactoredMoveZeros = function (arr) {
  // filter out the zero and non- zero elements into 2 separte arrays
  var zeroArray = arr.filter(x => x === 0);
  var cleanArray = arr.filter(x => x!== 0)
  // concatenate the zeroArray to the cleanArray
  // log and return the array
  console.log(cleanArray.concat(zeroArray))
  return cleanArray.concat(zeroArray)
}




moveZeros([1,2,0,1,0,1,0,3,0,1])
moveZeros(['!',7772,'w',1,0,1,9,3,'p',1])
moveZeros([0,0,0,0,0,0,0,1,2,0,1,0,1,0,3,0,1])
moveZeros(["a","b",null,0,"c","d",1,false,1,3,[],1,9,{},9])

refactoredMoveZeros([1,2,0,1,0,1,0,3,0,1])
refactoredMoveZeros(['!',7772,'w',1,0,1,9,3,'p',1])
refactoredMoveZeros([0,0,0,0,0,0,0,1,2,0,1,0,1,0,3,0,1])
refactoredMoveZeros(["a","b",null,0,"c","d",1,false,1,3,[],1,9,{},9])
