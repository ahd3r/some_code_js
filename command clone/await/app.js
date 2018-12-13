function doWhenDataRecived(data){
  console.log(data);
}
function* createFlow(url){
  data=yield fetch(url);
}
const returnNextElement=createFlow('https://api.github.com/users/1');
const futureData=returnNextElement.next().value;
futureData.then(data=>data.json()).then(data=>console.log(data));
