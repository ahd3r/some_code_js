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

document.querySelector('#get-data').addEventListener('click', function(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET', 'data.txt');
    console.log(xhr.readyState); // Show us 1 ready Step, it show us 1 allways, because if it didn't find a file, it send an error
    xhr.onprogress=function(){ // Show us 3 ready Step
        if(this.status===200){
            console.log(this.readyState);
            console.log('Your text is loading...');
        }
    }
    xhr.onload=function() { // Show us 4 ready Step
        if(this.status===200){
            console.log(this.readyState);
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
    // }
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
