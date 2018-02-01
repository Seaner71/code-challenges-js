// Classic fizzbuzz problem
// for numbers 1 to 100 print fizz for multiples of 3
// buzz for multiples of 5 and fizzbuzz for multiples of both
// 3 and 5. otherwise print the number

// Solution 1 - key part is most restrictive condition should be first_name
// if (i % 15) was after other program would never get there
for(let i =1; i <100; i++) {
  if (i % 15 === 0){
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0){
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// aolves the issue of finding multiples of both by using += 
for(let i =1; i <100; i++) {
  msg = ''
  if (i % 3 === 0){
    msg += 'fizz'
  }
  if (i % 5 === 0) {
    msg += 'buzz'
  }
  console.log(msg ||i)
}
