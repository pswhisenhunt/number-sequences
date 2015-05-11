
// ## Number Sequences
var nextInSequence = function(string) {
  var array = string.split(',');
  var num1 = array[2];
  var num2 = array[1];
  if( num1 % num2 === 0) {
    var pattern = num1/num2;
    var returnNextNumberInSeq = parseInt(array[array.length-1],10) * pattern;
    return returnNextNumberInSeq;
  } else {
    var pattern = num1 - num2;
    var returnNextNumberInSeq = parseInt(array[array.length-1],10) + pattern;
    return returnNextNumberInSeq;
  }
};

console.log('-----Number Sequence-----')
console.log(nextInSequence('1, 2, 4, 8, 16, 32')); // 64
console.log(nextInSequence('1, 2, 4, 8, 16, 32, 64')); //128
console.log(nextInSequence('1, 3, 9')); // 27
console.log(nextInSequence('1,2,3,4,5')); // 6
console.log(nextInSequence('1,3,5,7,9')); // 11
console.log(nextInSequence('10,8,6,4')); // 2



// ## Fibonacci and Prime
var fibonacci = function(number) {
  var fibArray = [];

  var beforeIndex1 = 0, beforeIndex2 = 1;

  for(var i = 0; i < number; i++) {

    // save the value in another function
    // iteration values of this var are 0, 1, 1, 2, 3
    var holdBeforeIndex = beforeIndex1;
    // console.log('holdBeforeIndex', holdBeforeIndex);

    // set equal to the index beside it
    // iteration values of this var are 1, 1, 2, 3, 5
    beforeIndex1 = beforeIndex2;
    // console.log('beforeindex1', beforeIndex1);

    // get the next index value in the sequence by adding the previous 2 values
    // iteration values of this var are (0+1=) 1, (1+1=) 2, (2+1=) 3, (3+2=) 5, (5+3=) 8, etc....
    beforeIndex2 = holdBeforeIndex + beforeIndex2;
    // console.log('beforeindex2', beforeIndex2);


    // push values of beforeIndex2 into array, because it is the var that holds the current sequence value.
    fibArray.push(beforeIndex2);
  }

  return fibArray;

};

console.log('------Fibonacci------')
console.log(fibonacci(5)); // 1, 2, 3, 5, 8
console.log(fibonacci(8)); // 1, 2, 3, 5, 8, 13, 21, 34
console.log(fibonacci(12)); // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

var isPrime = function(number) {
  // one is not prime, it's a unit. Check to see if number is one.
  if(number < 2) {
    return  number + ' is not prime';
  }
  for(var i = 2; i < number; i++) {
    if(number % i === 0) {
      return number + ' is not prime';
    }
  }
  return number + ' is prime';
};


console.log('------Prime------')
console.log(isPrime(5)); // 5 is prime
console.log(isPrime(10)); // 10 is not prime
console.log(isPrime(12)); // 12 is not prime
console.log(isPrime(3)); // 3 is prime
console.log(isPrime(13)); // 13 is prime
console.log(isPrime(102)); // 102 is not  prime
console.log(isPrime(9)); // 9 is not  prime

// ## Loops and Accumulator
var logAll = function(array) {
  var counter = 0;
  var result = '';
  while(counter < array.length) {
    result += array[counter] + ' ';
    counter += 1;
  };
  return result;
};


var sum = function(array){
  var counter = 0;
  var sum = 0;
  while(counter < array.length) {
    sum += array[counter];
    counter += 1;
  }
  return sum;
};


var subtract = function(array){
  var counter = 0;
  var minus = 0;
  while(counter < array.length) {
    minus -= array[counter];
    counter += 1;
  }
  return minus;
};


var largest = function(array){
  var counter = 0;
  while(counter < array.length) {
    if(array[counter] > array[counter+1]) {
      var value1 = array[counter];
      var value2 = array[counter+1];
      array[counter+1] = value1;
      array[counter] = value2;
    }
    counter += 1;
  }
  return array.pop();
};


var smallest = function(array){
  var min = array[0];
  var counter = 0;
  if(array.length > 0) {
    while(counter < array.length) {
      if(array[counter] < min) {
        min = array[counter];
      }
      counter += 1;
    }
  };
  return min;
};


var average = function(array) {
  var counter = 0;
  var sum = 0;
  while(counter < array.length) {
    sum += array[counter];
    counter += 1;
  }

  return sum/array.length;
};


console.log('------Loops and Accumulator------')
console.log(logAll([1,2,3,4,5])); // 1 2 3 4 5
console.log(sum([1,2,3])); // 6
console.log(subtract([10,10,10])); // -30
console.log(largest([1,9,7])); //9
console.log(largest([1,14,54,9,7])); // 54
console.log(smallest([20,19,40])); // 19
console.log(smallest([20,19,40,3])); // 3
console.log(average([10,20,30])); // 20
console.log(average([10,20,30,10,20])); // 18
