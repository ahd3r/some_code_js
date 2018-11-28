// Create an object by using a function
function User(firstName, lastName ,dob){ 
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=new Date(dob);
}

User.prototype.calculateAge=function(){
    const diff=new Date()-this.birthday.getTime();
    const ageDate=new Date(diff);
    return ageDate.getFullYear()-1970;
}

User.prototype.getFullName=function(){
    return this.firstName+' '+this.lastName;
}

User.prototype.getMaried=function(newLastName){
    this.lastName=newLastName;
}
User.prototype.greeting=function(){
    return `Hi there ${this.firstName} ${this.lastName}`;
}

const userJonh=new User('Jonh','Loy','8-18-2000');

// console.log(userJonh.getFullName());

userJonh.getMaried('Smith');

// console.log(userJonh.getFullName());
// console.log(userJonh.greeting());
// console.log(userJonh.hasOwnProperty('firstName'));

// console.log(this);

// Create an object by new word
const getSome1=function (x,y){
    return x+y;
}

// by object, like new Number, new String, new Array, new Boolean
const getSome2=new Function('x','y','return x+y');

// console.log(getSome2(1,1));

// Create an object by dictionary
const Assets={
    Name:'GOOG',
    Amount:6400000000,
    Market:'NBE',
    Capitalization:700000000000,
    Price:function(){
        return this.Capitalization/this.Amount;
    },
    Addition:function(x){ // procent
        this.Amount+=(this.Amount*x/100);
    },
}

// console.log(Assets.Price());

Assets.Addition(5);

// console.log(Assets.Price());

// Something like inheritance by call function
function Customer(firstName, lastName, phone,membership){
    User.call(this, firstName,lastName);
    this.phone=phone;
    this.membership=membership;
}

// One more way to create an object, but this way better for add an object to other object
Customer.prototype=Object.create(User.prototype);
Customer.prototype.constructor=Customer;

customer1=new Customer('Tom','Boyr','555-555-555','Standart');

// console.log(customer1);

// Create an object by class (ES6)
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    greeting(){
        return `Hi ${this.firstName} ${this.lastName}, my little friend!`;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = new Date()-this.dob.getTime();
        const ageDate=new Date(diff).getFullYear()-1970;
        return ageDate;
    }
    static nonClassFun(x,y){
        return x+y;
    }
}

const bro=new Person('Artem','Stac','12-12-2013');

// console.log(bro.calculateAge());
// console.log(Person.nonClassFun(1,2));

// Inheritance in class by ES6

class Sister extends Person{
    constructor(firstName,lastName,dob,relationship){
        super(firstName, lastName, dob);
        this.relationship=relationship;
    }

    ageDifference(myDob){
        const myDiff = new Date()-new Date(myDob).getTime();
        const herDiff = new Date()-new Date(this.dob).getTime();
        const ourDiff = myDiff-herDiff;
        const ourDiffYear=new Date(ourDiff).getFullYear()-1970;
        return ourDiffYear;
    }

    getMaried(newLastName){
        this.lastName=newLastName;
    }

    static dunno(){
        return 'I back some shit )))';
    }
}

const mySister=new Sister('Arin','Stac','5-9-2007','Good');

// console.log(mySister.ageDifference('8,18,2000'));
// console.log(mySister.getFullName());
mySister.getMaried('Alex')
// console.log(mySister.getFullName());
