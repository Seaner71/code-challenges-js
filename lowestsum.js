//calculate the minumum number that is not possible sum from a list of integers.
//
// solve([1,2,8,7]) = 4, because we can get 1, 2, 1+2=3. But 4 is the minimum number not possible from the list.
// solve([4,2,12,3,1]) = 11. We have 1, 2, 3, 4, 4+1=5, 4+2=6, 4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But no 11.
// solve([4,2,12,3]) = 1


function solve(arr) {
  var sum = 0
  var newArr = arr.sort((a,b) => a-b )

  for (i of newArr){
    if (i > sum +1) break;
    sum += i
  }
  console.log(sum + 1)
  return sum + 1

}


solve([1,2,8,7])
solve([4,2,12,3,1])
solve([4,2,12,3])
