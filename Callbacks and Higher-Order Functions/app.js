// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num+2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word+'s';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let res=[];
	for(let i=0;i<array.length;i++){
    res.push(callback(array[i]));
  }
  return res;
}
function addTwo(num){
  return num+2;
}

console.log(map([1, 2, 3], addTwo));

// let some=[];
// const bad=[1,2,3,4,5,6]
// for(let i=0;i<bad.length;i++){
//   some.push(i);
// }
// console.log(some);

// Challenge 4
function forEach(array, callback) {
	for(let i=0;i<array.length;i++){
    callback(array[i]);
  }
}
function item(some){
  console.log(some);
}
const page=['google','facebook','csbin'];
forEach(page, item)

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let somenew=[];
	array.forEach((stuff)=>{
    somenew.push(callback(stuff));
  });
  return somenew;
}
function backToMas(item){
  item++;
  return item;
}
console.log(mapWith([1,2,3,4],backToMas));

//Extension 2
function reduce(array, callback, initialValue) {
	let res = initialValue;
  for(let i=0;i<array.length;i++){
    res = callback(res, array[i]);
  }
  return res;
}
function add(currentValue,newValue){
  return currentValue+newValue;
}
console.log(reduce([6,54,9,1,5], add, 5));

//Extension 3
function intersection(array) {
  let commonItem=[];
  let otherArray=[];
  for(let i=1;i<arguments.length;i++){
    otherArray.push(arguments[i]);
  }
  for(let i=0;i<array.length;i++){
    otherArray[0].forEach((item1)=>{
      if(array[i]===item1){
        otherArray[1].forEach((item2)=>{
          if(array[i]===item2){
            commonItem.push(array[i]);
          }
        });
      }
    });
  }
  return commonItem;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(array) {
  let resMas=array;
  let masOfOtherMasPastedHere=[];
  for(let i=1;i<arguments.length;i++){
    masOfOtherMasPastedHere.push(arguments[i]);
  }
  for(let i=0;i<masOfOtherMasPastedHere.length;i++){
    masOfOtherMasPastedHere[i].forEach((itemThisMas)=>{
      if(resMas.indexOf(itemThisMas)===-1){
        resMas.push(itemThisMas);
      }
    });
  }
  return resMas;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  let resObj={};
  for(let i=0; i<array1.length;i++){
    if(callback(array1[i])===array2[i]){
      resObj[array1[i]]=array2[i];
    }
  }
  return resObj;
}
function up(str){
  return str.toUpperCase();
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],up));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let resObj={};
  arrVals.forEach((val)=>{
    resObj[val]=[];
    arrCallbacks.forEach((callback)=>{
      resObj[val].push(callback(val));
    });
  });
  return resObj;
}
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

