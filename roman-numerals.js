function toRoman(num) {
  var result = '';
  var decimal = [1000,900, 500,400, 100,90, 50,40, 10,9, 5,4, 1];
  var roman = ['M','CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V','IV', 'I'] ;
  for (let i = 0; i < decimal.length; i++) {
    while (num%decimal[i]<num){
      result += roman[i];
      console.log(num);
      num -= decimal[i];
    }
  }
  return result
}

function fromRoman(input) {
  var result = 0;
  var decimal = [1000,900, 500,400, 100,90, 50,40, 10,9, 5,4, 1];
  var roman = ['M','CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V','IV', 'I'] ;
  for (let i = 0; i < decimal.length; i++) {

    while (input.indexOf(roman[i]) === 0){
      result += decimal[i];
      input = input.replace(roman[i], '');

    }
  }
  return result
}

console.log(fromRoman('MMXVII'));
console.log(fromRoman('XV'));
console.log(toRoman(2016));
console.log(toRoman(99));
