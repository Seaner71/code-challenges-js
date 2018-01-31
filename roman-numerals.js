function toRoman(num) {
  var result = '';
  var decimal = [1000,900, 500,400, 100,90, 50,40, 10,9, 5,4, 1];
  var roman = ['M','CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V','IV', 'I'] ;
  for (let i = 0; i < decimal.length; i++) {
    while (num%decimal[i]<num){
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result
}

function fromRoman(str) {
  var result = 0;
  var decimal = [1000,900, 500,400, 100,90, 50,40, 10,9, 5,4, 1];
  var roman = ['M','CM', 'D', 'CD', 'C','XC', 'L','XL', 'X','IX', 'V','IV', 'I'] ;
  for (let i = 0; i < decimal.length; i++) {
    while (str.indexOf(roman[i]) === 0){
      result += decimal[i];
      str = str.replace(roman[i], '');
    }
  }
  return result
}

console.log(fromRoman('MMXVII'));
console.log(fromRoman('XV'));
console.log(toRoman(2017));
console.log(toRoman(99));
