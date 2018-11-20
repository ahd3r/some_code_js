// alert(123);

// const answer = prompt();
// alert(answer);

// if (confirm('Are you really want to enter?')){
//     alert('Welcome');
// } else {
//     close();
// }

let val;

val = window.outerHeight;
// console.log(val);
val = window.outerWidth;
// console.log(val);

val = window.location;
val = window.location.port;
val = window.location.host;
val = window.location.protocol;
val = window.location.href;

// if(confirm('Do want to go to google site?')){
//     window.location.href='https://www.google.com';
// } else {
//     window.location.reload();
// }

val = window.history.length;

// window.history.go(-1)

val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.language;

// console.log(val);

let val_new;

val_new=document;
val_new=document.all;
val_new=document.all[7];
val_new=document.all.length;
val_new=document.head;
val_new=document.body;
val_new=document.doctype;
val_new=document.URL;
val_new=document.characterSet;
val_new=document.contentType;
val_new=document.scripts;
val_new=document.scripts[0];
val_new=document.scripts[0].src;
val_new=document.scripts[0].getAttribute('src');

const valOfAllInDocument=Array.from(document.all);

// valOfAllInDocument.forEach(oneScript => {
//     console.log(oneScript); // .getAttribute('name')
// });

// console.log(val_new);

const obj=document.getElementById('title_h1');

obj.style.color='red';
obj.style.background='blue';
obj.style.fontSize='105px';
obj.style.marginTop='0px';
obj.style.paddingBottom='5%';
obj.style.paddingTop='5%';
obj.innerHTML='DOM';
obj.style.textAlign='center';
document.querySelector('title').innerHTML='DOM as well';
document.querySelector('.title_h1_class').style.border='5px solid black';
document.querySelector('#title_h1').innerHTML=`.${obj.innerHTML}.`;
document.querySelector('body').style.margin='1px';
document.querySelector('body').style.padding='0px';
// document.getElementById('title_h1').style.display='none';

// console.log(obj.innerHTML);
// console.log(obj.className);

document.querySelector('li').style.listStyle='none';
document.querySelector('li:last-child').style.listStyle='none';
document.querySelector('li:nth-child(3)').style.listStyle='none';
document.querySelector('ul').style.listStyle='none';

const valOfElementsWithDoClass=document.getElementsByClassName('do');

valOfElementsWithDoClass[1].style.color='green';
valOfElementsWithDoClass[2].textContent='red';
valOfElementsWithDoClass[2].style.color='red';

const valOfElementsInTeg=document.getElementsByTagName('li');

// console.log(valOfElementsInTeg);

const new_val = document.getElementsByTagName('li');

new_val[3].style.color='blue';

// console.log(valOfElementsWithDoClass);

const arrOfLi=document.querySelectorAll('ul#todo_list_d li.do');

// console.log(arrOfLi[0].style.color);

arrOfLi.forEach(function(li){
    li.textContent='Try';
    if(li.style.color===''){
        li.style.color='yellow';
    }
    li.style.padding='10px';
    li.style.marginRight='1000px';
});

// console.log(arrOfLi); // NodeList

const backWallOdd=document.querySelectorAll('li:nth-child(odd)');
const backWallEven=document.querySelectorAll('li:nth-child(even)');

backWallEven.forEach(function(back){
    back.style.background='darkgrey';
})

backWallOdd.forEach(function(back){
    back.style.background='grey';
})

const oneElement=document.querySelector('ul');
const twoElement=document.querySelector('li');

let ourElement;

ourElement=oneElement.childNodes;
ourElement=oneElement.children[2].className;
ourElement=oneElement.children[2].nodeType;
ourElement=oneElement.childNodes[2].nodeType;
oneElement.children[3].id='three';
ourElement=oneElement.children[3];
ourElement=oneElement.firstChild;
ourElement=oneElement.firstElementChild;
ourElement=twoElement.parentElement.parentElement.parentElement; // Shows <html>...</html> // if add one more .parentElement, it console.log(); a null
ourElement=twoElement.parentNode.parentNode.parentNode.parentNode; // Shows #document // if add one more .parentNode, it console.log(); a null 
ourElement=twoElement.nextElementSibling.previousElementSibling;

// console.log(ourElement);

// add a staff into document by DOM
const addTask=document.createElement('li');

addTask.className='do';
addTask.appendChild(document.createTextNode('Some'));
addTask.appendChild(document.createElement('a'));
addTask.children[0].href='#';
addTask.class='do';

document.querySelector('ul').appendChild(addTask);

// console.log(addTask);

const newTitle=document.createElement('h1');
const oldTitle=document.querySelector('.title_h1_class');

newTitle.className='title_h1_class';
newTitle.id='title_h1';
newTitle.appendChild(document.createTextNode('!DOM!'));

document.querySelector('body').replaceChild(newTitle,oldTitle);

newTitle.style.color='red';
newTitle.style.background='blue';
newTitle.style.fontSize='105px';
newTitle.style.marginTop='0px';
newTitle.style.paddingBottom='5%';
newTitle.style.paddingTop='5%';
newTitle.style.textAlign='center';

document.querySelector('.title_h1_class').style.border='5px solid black';

// console.log(newTitle);

const removeLast=document.querySelectorAll('li');
const removeLastChild=document.querySelector('ul');

removeLast[5].remove();
removeLastChild.removeChild(removeLast[4]);

const rewriteClass=document.querySelectorAll('li');

rewriteClass[0].classList.add('test');
rewriteClass[0].classList.remove('test');
rewriteClass[0].classList.remove('do');
rewriteClass[0].removeAttribute('class');
rewriteClass[0].setAttribute('class', 'do');

// console.log(rewriteClass[0].hasAttribute('class'));
// console.log(rewriteClass[0].getAttribute('class'));

// const btn = ;

document.querySelector('body').appendChild(document.createElement('a'));
document.querySelector('a').appendChild(document.createElement('button'));
document.querySelector('a').setAttribute('href', '#');
document.querySelector('button').appendChild(document.createTextNode('Click'));
document.querySelector('a').className='link';
document.querySelector('button').className='b';
document.querySelector('.link').style.marginLeft='40px';
document.querySelector('.link').style.marginBottom='5px';
document.querySelector('.b').addEventListener('click', runEvent);
document.querySelector('.b').addEventListener('dblclick', runEvent);
document.querySelector('.b').addEventListener('mouseup', runEvent);
document.querySelector('.b').addEventListener('mousedown', runEvent);
document.querySelector('.b').addEventListener('mouseenter', runEvent);
document.querySelector('.b').addEventListener('mouseleave', runEvent);
document.querySelector('.title_h1_class').addEventListener('mousemove', runEventForH1);

let time = 0;

function runEvent(e){
    if(e.type==='mouseenter'){}else if(e.type==='dblclick'){
        time=time-1;
    }else if(e.type==='click'){
        time++;
        e.target.innerHTML=`clicked ${time}`;
    }
    let v;
    v=e.clientY;
    v=e.clientX;
    v=e.offsetY;
    v=e.offsetX;
    v=e.type;
    console.log(v);
}

function runEventForH1(e){
    document.querySelector('body').insertBefore(document.createElement('p'),document.querySelector('ul'));
    document.querySelector('body>p').className='position_of_mouse';
    document.querySelector('.position_of_mouse').textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.querySelector('.position_of_mouse').style.fontSize='20px';
    document.querySelector('.position_of_mouse').style.color=`rgb(${e.offsetX},${e.offsetY},10)`;
}

document.querySelector('body').appendChild(document.createElement('div'));
document.querySelector('body>div').className='form';
document.querySelector('.form').style.marginLeft='40px';
document.querySelector('.form').appendChild(document.createElement('input'));
document.querySelector('.form>input').className='pole';
document.querySelector('.pole').addEventListener('focus', startEvent);
document.querySelector('.pole').addEventListener('keyup', startEvent);
document.querySelector('.pole').addEventListener('blur', startEvent);

function startEvent(e){
    if(e.type==='focus'){
        document.querySelector('.form').appendChild(document.createElement('p'));
        document.querySelector('.form>p').className='answer';
    } else if(e.type==='blur'){
        document.querySelector('.answer').remove();
    } else{
        document.querySelector('.answer').innerText=e.target.value;
    }
}


