// For this you must to have a live server or some other server to see the functional of this site
document.querySelector('#get-data').addEventListener('click', function(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET', 'data.txt');
    // Show us 1 ready Step, it show us 1 allways, because if it didn't find a file, it send an error
    xhr.onprogress=function(){ // Show us 3 ready Step
        if(this.status===200){
            console.log('Your text is loading...');
        }
    }
    xhr.onload=function() { // Show us 4 ready Step
        if(this.status===200){
            console.log(this.responseText);
            if(document.querySelector('.msg')){
                document.querySelector('.msg').remove();
            } else {
                document.querySelector('.btns').insertBefore(document.createElement('p'),document.querySelector('#btnForMember')).className='msg';
                document.querySelector('.msg').textContent=this.responseText;
            }
        }
    };
    // xhr.onreadystatechange = function (){ // Show us all ready Steps
    //     if(this.readyState===3 && this.status===200){
    //         console.log('The text is loading...');
    //         setTimeout(console.log('...'),1000);
    //     }
    //     if(this.readyState===4 && this.status===200){
    //         document.querySelector('body').insertBefore(document.createElement('p'),document.querySelector('script'));
    //         document.querySelector('p').textContent=this.responseText;
    //         console.log('Your text is: ', this.responseText);
    //     }
    // };
    xhr.send();
});

document.querySelector('#btnForMember').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'teamember.json');
    xhr.onload=function(){
        if(this.status===200){
            const member = JSON.parse(this.responseText);
            if(document.querySelector('.forMember')){
                document.querySelector('.forMember').remove();
            }else{
                document.querySelector('.btns').insertBefore(document.createElement('ul'), document.querySelector('#btnForMembers')).className='forMember';
                document.querySelector('.forMember').appendChild(document.createElement('li')).textContent=`Name: ${member.name}`;
                document.querySelector('.forMember').appendChild(document.createElement('li')).textContent=`Position: ${member.position}`;
                document.querySelector('.forMember').appendChild(document.createElement('li')).textContent=`Phone: ${member.phone}`;
            }
        }
    };
    xhr.send();
});

document.querySelector('#btnForMembers').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'teamembers.json');
    xhr.onload=function(){
        if(this.status===200){
            const members = JSON.parse(this.responseText);
            if(document.querySelector('.forMembers')){
                document.querySelector('.forMembers').remove();
            }else{
                document.querySelector('.btns').appendChild(document.createElement('ul')).className='forMembers';
                members.forEach(function(member){
                    document.querySelector('.forMembers').appendChild(document.createElement('li')).textContent=`Name: ${member.name}`;
                    document.querySelector('.forMembers').appendChild(document.createElement('li')).textContent=`Position: ${member.position}`;
                    document.querySelector('.forMembers').appendChild(document.createElement('li')).textContent=`Phone: ${member.phone}`;
                });
            }
        }
    };
    xhr.send();
});

document.querySelector('#joke-form').addEventListener('submit', function(e) {
    const amount=document.querySelector('#amount-jokes').value;
    if(amount!=='' && parseInt(amount)>0 && parseInt(amount)<10 && !isNaN(parseInt(amount))){
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `http://api.icndb.com/jokes/random/${amount}`);
        xhr.onload=function(){
            const jokes=JSON.parse(this.responseText);

            if(document.querySelector('.jokes-list')){
                document.querySelector('.jokes-list').remove();
                document.querySelector('.joke').appendChild(document.createElement('ul')).className='jokes-list';
                jokes.value.forEach(function(joke){
                    document.querySelector('.jokes-list').appendChild(document.createElement('li')).textContent=joke.joke;
                });
            } else{
                document.querySelector('.joke').appendChild(document.createElement('ul')).className='jokes-list';
                jokes.value.forEach(function(joke){
                    document.querySelector('.jokes-list').appendChild(document.createElement('li')).textContent=joke.joke;
                });
            }
        };
        xhr.send();
    }
    e.preventDefault();
});

// callback example (OLD)

const somePosts=[
    {"title": "Post One", "description": "one"},
    {"title": "Post Two", "description": "two"},
];

function createPost(callback){
    setTimeout(function(){
        somePosts.push({"title": "Post Three", "description":'three'});
        callback();
    },2000);
}

function getPost(){
    setTimeout(function(){
        document.querySelector('.cb').appendChild(document.createElement('ul')).className='posts-list';
        somePosts.forEach(function(post){
            document.querySelector('.posts-list').appendChild(document.createElement('li')).textContent=post.title;
        });
    },1000);
}

createPost(getPost);

// callback example Promises (NEW)
const someNewPosts=[
    {title: 'New Post One', description: 'one'},
    {title: 'New Post Two', description: 'two'}
];

function createNewPost(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            someNewPosts.push({"title": "New Post Three", "description":'three'});
            let error=true;
            if(error){
                reject('Error: Something went wrong! Check it or just say \'error = false\'');
            }else{
                resolve();
            }
        },2000);
    });
}

function getNewPost(){
    setTimeout(function(){
        document.querySelector('.ncb').appendChild(document.createElement('ul')).className='new-posts-list';
        someNewPosts.forEach(function(post){
            document.querySelector('.new-posts-list').appendChild(document.createElement('li')).textContent=post.title;
        });
    },1000);
}

// createNewPost().then(getNewPost).catch(function(error){
//     console.log(error);
// });

// fetch with arrow function and more cleaner
document.querySelector('#gtext').addEventListener('click', function(){
    fetch('text.txt').
    then(res=>res.text()).then(data=>console.log(data)).
    catch(err=>console.log(err))});

document.querySelector('#gjson').addEventListener('click', function(){
    fetch('teamembers.json').then(res=>res.json()).
    then(data=>console.log(data)).
    catch(err=>console.log(err));
});

document.querySelector('#gdata').addEventListener('click', function(){
    fetch('https://api.github.com/users/ahd3r').
    then(res=>res.json()).
    then(data=>console.log(data)).
    catch(err=>console.log(err));
});

// example for arrow function
let sayHello = (greeting, name) => `${greeting} ${name}`;

// console.log(sayHello('Hello', 'Man'));

// async func
const hello = async (word) => {
    const promise = new Promise((resolve)=>{
        setTimeout(()=>resolve(word),1000);
    });
    const error = false;
    if(error){
        await Promise.reject(new Error('Something went wrong'));
    } else {
        const res = await promise;
        return res;
    }
};

// console.log(hello('Hi man')); // without async

// hello('Hi man').then((res)=>console.log(res)).catch(err=>console.log(err));

const getUsers = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
};

getUsers().then(users=>console.log(users));

// Fetch which I done by myself
// function myOwnFetch(){}
