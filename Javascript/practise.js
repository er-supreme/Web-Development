console.log("this is sachin");

//setTimeout practise

// setTimeout(() => {

//     for (let index = 0; index < 200; index++) {
//         const element = index;
//         console.log(element);

//     }
// }, 2000);

// console.log('done');

// ajax practise

// let fetchData = document.getElementById('fetchData');

// fetchData.addEventListener('click', dataData);

// function dataData(){

//     console.log('fetch');

//     const xhr=new XMLHttpRequest();
//     xhr.open('get','https://jsonplaceholder.typicode.com/todos/1', true);

//     xhr.onload=function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("some error");
//         }
//     }

//     xhr.send();

//     console.log("We are done!");
// }

// let getData = document.getElementById('getData');

// getData.addEventListener('click', getDataData);

// function getDataData(){

//     console.log('get');

//     const xhr=new XMLHttpRequest();
//     xhr.open('get','https://jsonplaceholder.typicode.com/todos/1', true);

//     xhr.onload=function(){
//         if(this.status===200){
//             let obj=JSON.parse(this.responseText);
//             let list = document.getElementById('list');
//             str='';
//             for (const key in obj) {
//                 str+=`<li>${obj[key]}</li>`
//             }
//             list.innerHTML=str;
//         }
//         else{
//             console.log("some error");
//         }
//     }

//     xhr.send();

//     console.log("We are done getting!");
// }

//callback

// function addition(x,y,callback){
//     setTimeout(() => {
//         document.write(`The sum of ${x} and ${y} is ${x+y}.`);
//         callback();
//     }, 2000);

// }
// function display(){
//     document.write('number added');
// }
// addition(5,4,display);

// fetch api

// function getData (){

//     url = "https://api.github.com/users";
//     fetch(url).then(response => response.json()
//     ).then(data => console.log(data));
// }

// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = `{"name":"test21312","salary":"123","age":"23"}`;
//     params = {
//         method : 'post',
//         headers:{
//             'content-type': 'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then(response => response.json)
//     .then(data => console.log(data))

// }

// postData();

//regular expression

// let reg = /sachin/;
// console.log(reg);
// console.log(reg.source);
hgfg