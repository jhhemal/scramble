urls = 'http://127.0.0.1:8000/api/word-list/';
console.log(urls);
// let arr = []
// // fetch(urls)
// //     .then(data => data.json())
// //     .then((data) => {
// //             arr.push(data)
// //         // arr = JSON.parse(arr);
// //     });

// // console.log(arr[0]);

// (async () => {
//     const response = await fetch('http://127.0.0.1:8000/api/word-list/');
//     const data = await response.json();
//     // let wordss = []
//     // for(let i=0;i<data.length;i++){
//     //     wordss.push(data[i].word);
//     // }
//     // console.log(wordss);
//     console.log(data);
//     return data;
// })();

// // console.log(words);
// // function getData() {
// //     return new Promise((resolve, reject) => {
// //       fetch(urls)
// //         .then(response => response.json())
// //         .then(data_from_fetched => {
// //            let data = data_from_fetched.results;
// //            resolve(data);
// //      })

// // }
// // }

// // function getData(){
// //     return new Promise((resolve, reject) => {
// //         fetch(urls)
// //         .then(response => response.json())
// //         .then((data) => {
// //             let datas = data
// //             resolve(datas)
// //         })
// //     })
// // }

// // let arr = []
// // getData().then((data) => {
// //     arr = data
// // })

// // console.
// const getWords = async () => {
//     const response = await fetch(urls);
//     const data = await response.json();
//     console.log(data.length);
    
//     // const createRandomWord = () => {
//     //     let randomNumber = Math.floor(Math.random() * words.length);
//     //     let tempWord = words[randomNumber];
//     //     return tempWord; 
//     // }

//     // const scrambleWords = (arr) =>{
//     //     for(let i=arr.length-1; i>=0; i--){
//     //         let temp = arr[i];
//     //         let j = Math.floor(Math.random() *(i+1));
//     //         arr[i] = arr[j];
//     //         arr[j] = temp;
//     //     }
//     //     return arr;
//     // }

    

//     // console.log(words);
//     // return words
//     // return data
// }

// getWords();