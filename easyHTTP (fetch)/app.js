const http = new easyHTTP;
const firstUser = {
    "name": "Peyton",
    "last name": "List",
    "age": 20,
};
const secondUser = {
    "name": "Ander",
    "username": "ahd3r",
    "email": "demo@demo.com",
};

// http.get('https://jsonplaceholder.typicode.com/users/1')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
// http.post('https://jsonplaceholder.typicode.com/users/', secondUser)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
// http.put('https://jsonplaceholder.typicode.com/users/1', secondUser)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
// http.delete('https://jsonplaceholder.typicode.com/users/1')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// http.get('https://jsonplaceholder.typicode.com/users/1', function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// http.post('https://jsonplaceholder.typicode.com/users/', firstUser, function(err, user){
//     if(err === null){
//         console.log(user);
//     } else {
//         console.log(err);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/users/4', secondUser, function(err, user){
//     if(err === null){
//         console.log(user);
//     } else {
//         console.log(err);
//     }
// });

// http.delete('https://jsonplaceholder.typicode.com/users/3', function(err, answer){
//     if(err===null){
//         console.log(answer);
//     } else {
//         console.log(err);
//     }
// });
