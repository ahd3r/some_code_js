// Standart pattern 
const UICtrl=(function(){
  const text = 'Hello World!'; // It exist in [[ scope ]] into changeText
  const changeText = ()=>{
    const newElement=document.createElement('h1');
    newElement.textContent = text;
    document.querySelector('body').insertBefore(newElement, document.querySelector('script'));
    console.log(text);
  }
  return {
    changeText:changeText
  }
})();
// UICtrl.changeText();

// Revealing pattern
const itemCtrl = (function(){
  let username = [];

  function add(item){
    username.push(item);
    console.log('Added');
  }
  
  function get(idItem){
    console.log(username.find(item=>{
      return item.id===idItem
    }));
  }

  function show(){
    console.log(username);
  }

  return {
    add:add,
    get:get,
    show:show
  }
})();

// itemCtrl.show();
// itemCtrl.add({id:1, name:'Peyton'});
// itemCtrl.add({id:2, name:'Alex'});
// itemCtrl.add({id:3, name:'Ander'});
// itemCtrl.show();
// itemCtrl.get(3);

// Singlton pattern
const Singlton = (function(){
  let data;

  function createData(){
    const obj = new Object({id: 1, name: 'Ander', age: 18});
    return obj;
  }

  return {
    getData: function(){
      if(!data){
        data = createData();
      }
      return data;
    }
  };
})();

const dataA= Singlton.getData();
const dataB= Singlton.getData();

// console.log(dataA);
// console.log(dataA===dataB);

// Factory pattern
function MemberFactory(){
  // this.memberKeeper = [];
  this.createMember = function(name, type){
    let member;
    if(type==='simple'){
      member = new SimpleMember(name);
      // this.memberKeeper.push({username:name, status: type, cost:'5$'});
      console.log(`${name} added`);
    }else if(type==='standart'){
      member = new StandartMember(name);
      // this.memberKeeper.push({username:name, status: type, cost:'15$'});
      console.log(`${name} added`);
    }else if(type==='super'){
      member = new SuperMember(name);
      // this.memberKeeper.push({username:name, status: type, cost:'25$'});
      console.log(`${name} added`);
    }else{
      console.log(`${type} does not exist`);
    }
    return member;
  }
}

const SimpleMember = function(name){
  this.name=name;
  this.cost='5$';
  this.type='simple';
  this.info=function(){
    console.log(`${this.name} (${this.type}): ${this.cost}`);
  }
};
const StandartMember = function(name){
  this.name=name;
  this.cost='15$';
  this.type='standart';
  this.info=function(){
    console.log(`${this.name} (${this.type}): ${this.cost}`);
  }
};
const SuperMember = function(name){
  this.name=name;
  this.cost='25$';
  this.type='super';
  this.info=function(){
    console.log(`${this.name} (${this.type}): ${this.cost}`);
  }
};

const members= [];
const factory = new MemberFactory;
// members.push(factory.createMember('Alex', 'simple'));
// members.push(factory.createMember('Peyton', 'standart'));
// members.push(factory.createMember('Ander', 'super'));
// members.push(factory.createMember('Vel', 'norm'));
// members.push(factory.createMember('Ihor', 'good'));
// members.push(factory.createMember('Nekita', 'no bad'));
// members.push(factory.createMember('Slava', 'the best'));
// members.forEach((member)=>{
//   try{
//     member.info();
//   } catch (TypeError){}
// });

// Observer pattern
function eventObserver(){
  this.observer=[];
}

eventObserver.prototype={
  subscribe: function(fn){
    this.observer.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn){
    this.observer=[];
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function(){
    this.observer.forEach(item=>{
      item.call();
    });
  }
}

const click = new eventObserver;

document.querySelector('.sub-ms').addEventListener('click',()=>{
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click',()=>{
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click',()=>{
  click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click',()=>{
  click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click',()=>{
  click.fire();
});

const getCurMilliseconds = function(){
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurSeconds = function(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};

// Mediator pattern
allUser=[];
allChatroom=[];
function User(username){
  this.username=username;
  this.chatrooms=[];
  allUser.push(this);
};

function Chatroom(call){
  this.call=call;
  this.members=[];
  allChatroom.push(this);
};

User.prototype={
  send:function(msg,to,chatroom){
    // this.chatrooms.forEach((chatroomm)=>{
    //   if(chatroomm===chatroom){
    //     if(to){
    //       to.recive(msg,this.username,chatroomm.call);
    //     }else{
    //       chatroomm.members.forEach((member)=>{
    //         if(member!==this){
    //           member.recive(msg,this.username,chatroomm.call);
    //         }
    //       });
    //     }
    //   }
    // });
    chatroom.sendMsg(msg,this.username,to);
  },
  recive:function(msg, from, fromChat){
    console.log(`Hey ${this.username}, ${from} in ${fromChat} send you: ${msg}`);
  }
};

Chatroom.prototype={
  createMember:function(user){
    this.members.push(user);
    user.chatrooms.push(this);
  },
  sendMsg:function(msg,from,to){
    if(to){
      this.members.forEach(member=>{
        if(member===to){
          to.recive(msg,from, this.call);
        }
      });
    } else{
      this.members.forEach(member=>{
        member.recive(msg,from,this.call);
      });
    }
  },
  // reciveMsg:function(){},
  deleteMember:function(user){
    let done = false;
    this.members.forEach((member,index)=>{
      if(member===user){
        this.members.splice(index,1);
        done=true;
        console.log('Deleted');
      }
    });
    if(done===false){
      console.log('This user not in your chat');
    }
  },
};

// brad=new User('Brad');
// peyton=new User('Peyton');
// ander=new User('Ander');
// alex=new User('Alex');
// chatroomCode=new Chatroom('Code');
// chatroomCode.createMember(peyton);
// chatroomCode.createMember(ander);
// chatroomCode.createMember(alex);
// chatroomCode.createMember(brad);
// ander.send('I love you', peyton, chatroomCode);
// alex.send('Hi man', ander, chatroomCode);
// chatroomCode.deleteMember(brad);
// console.log(allUser);
// console.log(allChatroom);
