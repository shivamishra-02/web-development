let btnn = document.querySelector(".btn");
let punchline = document.querySelector(".punchline");
let setup = document.querySelector(".setup");

let emoji = ["😂","🤣","😉","😆","😶","🤐","😝","😜"];


let url ="https://official-joke-api.appspot.com/jokes/random";

async function getJokes(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        let set = data.setup;
        let punch = data.punchline;
        let index = Math.floor(Math.random()*7);
        let randEmoji = emoji[index];
        console.log(set);
        console.log(punch);
        setup.innerText = set;
        punchline.innerText = `${punch}..${randEmoji}`;
    } catch(error){
        console.log(error);
        setup.innerText = "some Error Occured!!";
        punchline.innerText = "Try Again !!";
    }
};


btnn.addEventListener("click" , function(){
    getJokes();
});