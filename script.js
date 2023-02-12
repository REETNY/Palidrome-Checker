const form = document.querySelector("#form")
const textbox = document.querySelector("#textbox")
const submit = document.querySelector("#submit")
const repsonse = document.querySelector(".repsonse");
const errMsg = document.querySelector(".error");
const checkedWordEL = document.querySelector(".checkedWord");
const reversedWordEl = document.querySelector(".reversedWord");

let mainWord = "";
let reversedWord = "";
let trimmedUserWord = ""
let trimmedReversedWord = ""

form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
})

submit.addEventListener("click", () => {
    let userWord = textbox.value.trim().toLowerCase();
    if(userWord == "" || userWord == undefined || userWord == null) {
        errMsg.style.display = `block`;
        setTimeout( () => {
            errMsg.style.display = `none`;
        }, 3000)
        return
    };
    reversedWord = ""
    reverseWord(userWord);
    checkWord();
})

textbox.addEventListener("click", (e) => {
    e.target.style.boxShadow = `0px 0px 2px 6px rgb(24, 23, 23, .4);`
})

textbox.addEventListener("blur", (e) => {
    e.target.style.boxShadow = `0px 0px 2px 2px rgb(24, 23, 23, .4);`
})

function reverseWord(word){
    mainWord = word;

    for(let i = mainWord.length - 1; i >= 0; i--){
        reversedWord += mainWord.charAt(i);
    }

}

function checkWord(){
    trimmedUserWord = mainWord.trim().toLowerCase();
    trimmedReversedWord = reversedWord.trim().toLowerCase();
    
    if(trimmedReversedWord == trimmedUserWord){
        repsonse.innerHTML = `
            Yes, <span class="checkedWord">${trimmedUserWord}</span> or <span class="reversedWord">${trimmedReversedWord}</span> is a palindrome!
        `;
        repsonse.style.display = `block`;
        repsonse.classList.add("yes");
        repsonse.classList.remove("no");
    }else{
        repsonse.innerHTML = `
            No, <span class="checkedWord">${trimmedUserWord}</span> or <span class="reversedWord">${trimmedReversedWord}</span> is not a palindrome!
        `;
        repsonse.style.display = `block`;
        repsonse.classList.remove("yes");
        repsonse.classList.add("no");
    }
}