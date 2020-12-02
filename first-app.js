console.log("Hello from node.js");

const fs= require('fs');
fs.writeFileSync('hello.txt','Hello from Node js');


const hobbies=['Cricket','Cooking'];

for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => "Hobby: "+hobby));
console.log(hobbies);

const sports=['Cricket','Football'];
const games =[...sports];
const [game1,game2] =games;
console.log(sports);
console.log(game1,game2);

const fetchData =() =>{
    const promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Done!');
    },1500);
    });

    return promise;
};

setTimeout(()=>{
    console.log('Timer is done');
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    }).then(text2 =>{
        console.log(text2);
    });

},2000);

console.log("After timer 1");
console.log("After timer 2");