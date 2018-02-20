function howManyGifts(maxBudget, gifts){
  gifts.sort(function(a, b)
    {return a - b}
  )
  count = 0
  for (let i =0; i <gifts.length; i++) {
    if (maxBudget -gifts[i] >= 0) {
      maxBudget -= gifts[i]
      count +=1
    }
  }
   return count
}

console.log(howManyGifts(10,[1,4,5,3,8]))
console.log(howManyGifts(20,[4,10,20]))
console.log(howManyGifts(0,[20,9,8,7,9]))
