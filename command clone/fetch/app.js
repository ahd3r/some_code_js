function fetchClone(url){
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload=function(){
      if(this.status===200){
        resolve(JSON.parse(this.responseText));
      }
    };
    xhr.send();
  });
}

fetchClone('https://api.github.com/users/1').then(data=>{
  console.log(data);
});
