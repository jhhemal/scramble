const urls = "http://127.0.0.1:8000/api/word-list/";

const Get = (yourUrl) =>{
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    //console.log(Httpreq.responseText)
    //console.log(Httpreq.responseText.updateTime)
    return Httpreq.responseText;
}


const data = JSON.parse(Get(urls));
let swords = []
for(let i=0;i<data.length;i++){
    swords.push(data[i].word)
}

const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randomWords = "";

const createNewWords = () =>{
    let ranNum = Math.floor(Math.random() * swords.length);
    let newTempSwords = swords[ranNum];
    return newTempSwords.toLowerCase()
}

const scrambleWords = (arr) =>{
    for(let i=arr.length-1; i>=0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() *(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn .addEventListener('click', ()=>{
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the word: ${randomWords}`;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.innerHTML = `Congrates, you guessed correctly. the word was: ${newWords}.`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            msg.innerHTML = `It's incorrect. Keep Trying. ${randomWords}`;
        }
    }
})