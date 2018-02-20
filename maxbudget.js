/* Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
Write the following function to help Leo out:
function howManyGifts(maxBudget, gifts)
The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.
*/
function howManyGifts(maxBudget, gifts){
  // sort the gift array from lowest to highest to buy the maximum number of presents
  gifts.sort(function(a, b)
    {return a - b}
  )
  // set a counter to accumulate the total presents that can be purchased
  count = 0
  for (let i =0; i <gifts.length; i++) {
    // iterate over the gifts array if remaining balance in budget can cover the full cost
    if (maxBudget -gifts[i] >= 0) {
    // decrement the budget by amount of the gift
      maxBudget -= gifts[i]
      // increment the counter
      count +=1
    }
  }
   return count
}

console.log(howManyGifts(10,[1,4,5,3,8]))
console.log(howManyGifts(20,[4,10,20]))
console.log(howManyGifts(0,[20,9,8,7,9]))
