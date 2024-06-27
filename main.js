//taske 1
let divv = document.getElementById("array");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(bakg => bakg.json())
.then(boddy =>{
    let y="";
boddy.forEach(x => {
 y+=`<div>
 <h3>${x.title}</h3>
 <p>${x.body}</p>
 </div>`
})
divv.innerHTML=y;
})
// .catch(error=>{
//     console.error(error)
// })




// //taske 2
// let domm = document.getElementById("comm");
// fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
// .then(data=> data.json())
// .then(element=>{
//     let strin ="";
//    element.forEach(rr => {
//         strin+=`<div>
//         <h4>${rr.name}</h4>
//         <h5>${rr.email}</h5>
//         <p>${rr.body}</p>
//         </div>`
    
// })
// domm.innerHTML=strin;
// });


//taske 3
// let albums = document.getElementById("album")
// fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
// .then(data =>data.json())
// .then(element=>{
//     let all=""
//     element.forEach(each => {
//         all+=`<h1>${each.title}</h1>`
//     });
//     albums.innerHTML = all;
// })


//taske 4
// let photos = document.getElementById("photo");
// fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
// .then(alldata=>alldata.json)



