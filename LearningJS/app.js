const firstName='Ander';
const lastName='Stac';
const str = 'Hi Ilon Mask and Peyton Roy List';

let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;
val = firstName.concat(' ', lastName);

val = 'Peyton ';
val += 'List';

val = 'My name is ' + firstName + '.';

val = `That's awesone, I can't wait for it`;
val = "That's awesone, I can't wait for it";
val = 'That\'s awesone, I can\'t wait for it';

val = firstName.length;

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

val = firstName.lastIndexOf('e');
val = lastName.lastIndexOf('a');

val = firstName[firstName.length - 1];

val = lastName.substring(1,8);

val = str.split(' ');

val = str.includes('Peyton');
val = str.includes('Metro');

val = Math.sqrt(64);
val = Date();
val = Math.pow(8,2);
val = Math.round(4.5);
val = Math.round(Math.random()*9+1);

val = Boolean('Cool'); // if ''{ val =False }
val = String(false);
val = String(5);
val = Number('4');
val = Number('Cool'); // return NaN (NaN — Not A Number)

val = typeof toString(5);

// console.log(val);


const name = 'Ander';
const surname = 'Stac';
const age = '18';
const job = 'Web Developer';

let html_staf;

html_staf=`
<h1>My data</h1>
<ul>
    <li>Name: ${name}</li>
    <li>Surname: ${surname}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>State: ${'California'}</li>
    <li>Level: ${'Senior'}</li>
</ul>
`;

// document.body.innerHTML = html_staf;


const num1 = [43,42,48,98,32,14,5,36,74,52,46,52,17,5,9,7,5,65];
const num2 = new Array(4,8465,8,25,4,62,56,46,5,78,95,467,58,7,4,8,74,1);

let new_val;

new_val = {'one':1, 'two':2, 'three':3}; // dict

new_val = num1.length;

new_val = Array.isArray(num1); // Check if num1 is array

new_val = num1[3];

new_val = num1.indexOf(36);

num1.push(2);
num1.unshift(3);
num1.pop();
num1.shift();
num1.splice(7,9);
num1.reverse();

num1.sort(function (x,y){
    return x-y;
});

function over50(num){
    return num>50;
};

new_val=num1.find(over50);

// console.log(num1);
// console.log(new_val);


const me={
    'firstName':'Ander',
    'secondName':'Stac',
    'age':18,
    'hobies':['coding','programing'],
    'adress':{'state':'California', 'region':'Silicon Valley'},
    'Conpany':'Google',
    'YearOfBirth':function(){
        return new Date().getFullYear()-this.age;
    },
};

let val_new;

val_new=me.firstName;
val_new += ' ' + me['secondName'];

val_new=me.YearOfBirth();

// console.log(val_new);


const people=[
    {'name':'Alex','age':17},
    {'name':'Peyton', 'age':20},
    {'name':'Vel', 'age':19},
];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// };

// Destructuring
// const [a,b, ...other]=[100,200,300,400,500,600,700];
// const {a,b,c}={a:100, b:200, c:300, d: 400};
const persone={
	fuckingName: 'Ander',
	fuckingAge: 18,
	fuckingCity: 'Dnipro',
	fuckingGender: 'Male'
};
const {fuckingName, fuckingAge, fuckingCity, fuckingGender, ...otherStuff}=persone;

// console.log(fuckingName, fuckingAge, fuckingCity, fuckingGender);


const today=new Date();
const chosenDay=new Date('12/5/2016 12:00:01:200');

let dataOfChosenDay;

dataOfChosenDay=chosenDay.getDay();
dataOfChosenDay=chosenDay.getMonth();
dataOfChosenDay=chosenDay.getFullYear();
dataOfChosenDay=chosenDay.getTime();
dataOfChosenDay=chosenDay.getMilliseconds();
dataOfChosenDay=chosenDay.getSeconds();
dataOfChosenDay=chosenDay.getMinutes();
dataOfChosenDay=chosenDay.getHours();

// console.log(dataOfChosenDay);


const id = 100;

// TO USE DOUBLE EQUAL SIGN IS NOT GOOD, BECAUSE IT COMPARE A VALUE BUT NOT A TYPE, BUT IN JS DINAMIC TYPES AND YOU NEED TO COMPARE A TYPE AS WELL, BUT DOUBLE EQUAL SIGN DON'T DO IT
// if(id == '100'){
//     console.log('CORECT');
// } else {
//     console.log('INCORECT');
// }

// if(id != 100){
//     console.log('Id is not hundred!');
// } else {
//     console.log('Id is hundred');
// }

// BETTER TO USE TRIPLE EQUAL SIGN, BECAUSE IT COMPARE VALUE AND TYPE AS WELL
/*if(id === 100){
    console.log('CORECT');
} else {
    console.log('INCORECT');
}

if(id !== 100){
    console.log('CORECT');
} else {
    console.log('INCORECT');
}*/

/*if(typeof id !== 'undefined'){
    console.log(`id is ${id}`);
} else {
    console.log('NO ID');
}

if(id >= 100){
    console.log('id is great!');
} else {
    console.log('id is small');
}

const new_name='Peyton';
const new_age=20;

if(new_age<18 || new_age>70){
    console.log(`${new_name} can\'t got a right`);
} else {
    console.log(`${new_name} can got a right`);
}

if(new_age >= 0 && new_age <= 10){
    console.log(`${new_name} is a child`);
} else if (new_age <= 20){
    console.log(`${new_name} is a teenager`);
} else if (new_age<0){
    console.log(`${new_name} is not exist`);
} else {
    console.log(`${new_name} is adult`);
}

console.log(id === 100 ? 'ok' : 'not ok'); // short condition method*/


let day;

switch(new Date().getDay()){
    case 0:
        day='Sunday';
        break;
    case 1:
        day='Monday';
        break;
    case 2:
        day='Tuesday';
        break;
    case 3:
        day='Wednesday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
        day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
    default: // never happen
        day='Not Exist';
        break;
}

// console.log(`Today is ${day}`);


function greet(word='HI'){
    return word;
}

// console.log(greet('Hello World!'));

const greeting_var=function(name='Ander'){
    return `Hi ${name}`;
}

// console.log(greeting_var('Peyton'));

// (function(name='Ander') {
//     console.log(`Hi ${name}`);
// }());

// for(let i=0; i < 100; i++){
//     if(i === 20){
//         console.log('Number ' + i);
//     } else {
//         continue;
//     }
// }

// let i=0;

// while(i<100){
//     console.log('Number ' + i);
//     i=i+Math.round(Math.random()*10);
// }

// do{
//     i=Math.round(Math.random()*9+1)
//     console.log('Number ' + i);
// } while(i!=7)

// const cars=['Ford','Lexus','Tesla','Chevrolet']

// cars.forEach(function(car){
//     if(car === 'Tesla'){
//         console.log('I love ' + car);
//     } else{
//         console.log(car);
//     }
// })

const users=[
    {'id':1, 'name':'Ander'},
    {'id':2, 'name':'Peyton'},
    {'id':3, 'name':'Alex'},
    {'id':4, 'name':'Vel'},
];

const ids=users.map(function(usersAsWell){
    if (usersAsWell.name==='Peyton'){
        return `I love ${usersAsWell.name}`
    }
    return usersAsWell.name;
});

// console.log(ids);

const cars={'Ford':'Mustang','Lexus':'LF-NX','Tesla':'Roadster','Chevrolet':'Camaro'};

// for(let x in cars){
//     console.log(`${x} ${cars[x]}`);
// }

// regular expressions
let re; // regular expressions
re=/hello/;
re=/hello/i; // insensitive
// re=/hello/g; // global

// console.log(re)
// console.log(re.source);//whole word

// exec -> returns array of info about found word or words
const result1 = re.exec('hello World!'); // if string won't have the re's word, it gives you 'null'
// console.log(result1);
// console.log(result1[0]);
// console.log(result1.index); // where re's word starts
// console.log(result1.input);

// test -> returns true if in string which into func parametr exist re's word and false if not exist
const result2 = re.test('hello World!');
// const result2 = re.test('Hello World!'); // false without 'i' and true with 'i'
// console.log(result2);

// match -> like an exect, but modern 
const strForRe1 = 'Hello There';
const result3 = strForRe1.match(re);
// console.log(result3);

// search -> returns an index where re's word starts or -1
const strForRe2 = 'Me: Hello There!';
const result4 = strForRe2.search(re);
// console.log(result4); // 4

// replace -> returns chenged string
const oldStr = 'Hello There!';
const newStrAsARes5=oldStr.replace(re, 'hi');
// console.log(newStrAsARes5);

re = /hello/; // no 'Hello'
re = /hello/i; // yes (i - insensitive)
re = /^h/i; // yes (^start-must start of it)
re = /o$/i; // yes (end$-must end on it)
re = /^hello$/i; // yes
re = /.ello/; // yes (insted . can be everything, but once)
re = /H*o/; // yes (insted * can be everything at all)

// Brakets [] — Character Sets 
re = /h[aeo]llo/i; // can be on of the simbol in []
re = /h[a-z]llo/i; // can be every lowcase simbol, but because of 'i' in the end it can be upercase as well
re = /[Hh][a-zA-Z]llo/; // similar with uper, but withiut 'i'
re = /^h[a-z]llo[0-9]$/i;

// Brakets {} — Quantifiers
re=/[0-9]{2,}hello/i; // can be nums in the start more then twice 
re=/hel{2}o/i; // repeats 'l' twice
re=/hel{2,4}o/i; // repeats 'l' twice or four times
re=/hel{2,}o/i; // repeats 'l' twice or more times

// Brakets () — Takes some simbols in one
re = /(pewdiepie){3,}/i; // can be PewDiePie more then three times

// Classes
re = /\w/; // Takes first simbol or null
re = /\w+/; // Takes all simbols befor unacceptable character (first word)
re = /\W/; // Takes firsr unacceptable character for w
re = /\d/; // Takes first digit or null
re = /\d+/; // Takes all digits befor unacceptable character
re = /\D/; // Takes first unacceptable character for d
re = /\s/; // Takes first space
re = /\s+/; // Takes all spaces in sequence
re = /\S/; // Takes first unacceptable character for s

// Assertions
re = /t(?=o)/; // Takes 't' if after it will be 'o'
re = /t(?!o)/; // Takes 't' if after it won't be 'o'

const oneMoreStr=' subscribe 112to PewDiePie';

const resulter=re.exec(oneMoreStr);
// console.log(resulter);

function compare(re,str){
	if(re.test(str)){
		console.log(`${re.source} match on ${str}`);
	} else {
		console.log(`${re.source} not match on ${str}`);
	}
}
// compare(re,oneMoreStr);

// Map
const map=new Map();
console.log(map);
map.set('key1', 'value1'); // All type of data can be here 
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key1'));
console.log(map.size);
for(let [k,v] of map){
    console.log(k + ' = ' + v);
}
const arrV=Array.from(map.values());
const arrK=Array.from(map.keys());
const arrA=Array.from(map);
console.log(arrV);
console.log(arrK);
console.log(arrA);

// Set - like dict in python
const set=new Set([1,'two',{three:'four',five:6},true]);
set.add(8);
set.delete(8);
console.log(set.size);
console.log(set);
for(let i of set){
    console.log(i);
}
set.forEach((value)=>{
    console.log(value);
});
const ArrFromSet = Array.from(set);
console.log(ArrFromSet);

