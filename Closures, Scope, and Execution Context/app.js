// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


function createFunction() {
  function newFunc(word){
    console.log(word);
  }
  return newFunc;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1('hello');



function createFunctionPrinter(input) {
  function print(){
    console.log(input);
  }
  return print;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
// 		console.log('counter '+ counter);
    counter ++;
		console.log('counter '+ counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();//1
// willCounter();//2
// willCounter();//3

// jasCounter();//1

// willCounter();//4



function addByX(x) {
	function beginning(y){
    return y+x;
  }
  return beginning;
}
const addByTwo = addByX(2)

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------
function once(func){
  let counter = 0;
  let firstValue;
  function tryLaunch(num){
    counter++;
    if(counter===1){
      firstValue=func(num);
      return func(num);
    } else {
      return firstValue;
    }
  }
  return tryLaunch;
}
function addTwo(number){
  return number+2;
}
const onceTry=once(addTwo);
// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceTry(4));  //should log 6
// console.log(onceTry(10));  //should log 6
// console.log(onceTry(9001)); //should log 6

function after(count, func) {
  let counter=0;
  function tryLaunch(){
    counter++;
    if(counter===count){
      func();
    }
  }
  return tryLaunch;
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed


function delay(func, wait) {
	setTimeout(func,wait);
}
// delay(()=>{
// 	console.log('hello');
// },1000);

