data=[
  {
    name:'Peyton',
    age:20,
    located:'Los Angeles',
    ava:'https://randomuser.me/api/portraits/women/83.jpg'
  },
  {
    name:'Alex',
    age:17,
    located:'Dnipro',
    ava:'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name:'Ander',
    age:18,
    located:'Dnipro',
    ava:'https://randomuser.me/api/portraits/men/80.jpg'
  }
]

document.querySelector('#name').textContent=`Name: ${data[0].name}`;
document.querySelector('#age').textContent=`Age: ${data[0].age}`;
document.querySelector('#location').textContent=`Location: ${data[0].located}`;
document.querySelector('img').setAttribute('src', data[0].ava);

document.querySelector('.btn').addEventListener('click', nextProfile);

function nextProfile(){
  const currentProfile=profiles.next().value;
  if(currentProfile){
    document.querySelector('#name').textContent=`Name: ${currentProfile.name}`;
    document.querySelector('#age').textContent=`Age: ${currentProfile.age}`;
    document.querySelector('#location').textContent=`Location: ${currentProfile.located}`;
    document.querySelector('img').setAttribute('src', currentProfile.ava);
  }//else{
  //   location.reload();
  // }
}

const profiles = profileIterator(data);

// infinity Generator
function* profileIterator(profiles){
  let nextIndex=0;
  while(true){
    nextIndex++;
    if(nextIndex<profiles.length){
      yield profiles[nextIndex];
    } else {
      nextIndex=0;
      yield profiles[nextIndex];
    }
  }
}

// infinity Iterator
// function profileIterator(profiles){
//   let nextIndex=1;
//   return {
//     next: function(){
//       if(nextIndex<profiles.length){
//         return {
//           value:profiles[nextIndex++],
//           done:false
//         }
//       }else{
//         nextIndex=0
//         return {
//           value:profiles[nextIndex++],
//           done:false
//         }
//       }
//     }
//   }
// }

// Iterator
// function profileIterator(profiles){
//   let nextIndex=1;
//   return {
//     next:function(){
//       return nextIndex<profiles.length?
//       {value:profiles[nextIndex++],done:false}:
//       {done:true}
//     }
//   }
// }
