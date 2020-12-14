const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randomWords = "";

const urls = 'http://127.0.0.1:8000/api/word-list/';
// var jsonWords
let wordlists = []
const getWords = async () => {
    const response = await fetch(urls);
    const data = await response.json();
    console.log(data.length);
    let words = []
    for (let i=0; i<data.length; i++ ){
        // console.log(data[i].word)
        words.push(data[i].word);
    }
    for(let i=0; i<words.length; i++ ){
        console.log(words[i]);
    }
    // const createRandomWord = () => {
    //     let randomNumber = Math.floor(Math.random() * words.length);
    //     let tempWord = words[randomNumber];
    //     return tempWord; 
    // }

    // const scrambleWords = (arr) =>{
    //     for(let i=arr.length-1; i>=0; i--){
    //         let temp = arr[i];
    //         let j = Math.floor(Math.random() *(i+1));
    //         arr[i] = arr[j];
    //         arr[j] = temp;
    //     }
    //     return arr;
    // }

    

    // console.log(words);
    // return words
    // return data
}
// const Wordlist = getWords();
// Wordlist.then((data) =>{console.log(data)});
// console.log(Wordlist);
// const wrd = getWords()
// wrd.then((data) => {
//     var wr = data;
// })
// console.log(wr)

getWords();

btn.addEventListener('click', ()=>{
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createRandomWord();
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