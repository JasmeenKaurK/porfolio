const textEl = document.getElementById("text")
const myName = "Jasmeen Kaur~~~~ and i love learning programming language!!!"
let num = 1

wrtieText()

function wrtieText(){
    textEl.innerHTML = myName.slice(0,num)

    num++ 

    if(num > myName.length){
        num = 1
    }

    setTimeout(wrtieText, 120);

}