var myImg = document.getElementsByClassName('my_img')
var compImg = document.getElementsByClassName('comp_img')
var block = document.getElementById('img_block')
var startBtn = document.getElementById('startBtn')
var succesSound = new Audio('/assets/audio/succes_sound.mp3')
var loseSound = new Audio('/assets/audio/lose_sound.mp3')
let myImgSrc = document.getElementById('myImgSrc')
let compImgSrc = document.getElementById('compImgSrc')
// var toGlobal = null
// var toGLobalCompImg = null

function chooseImg(num) {
    let newImg; 
     newImg = num
     toGlobal = newImg
    // console.log('hello');
    // console.log(newImg);

  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1)
  // console.log(randomNumber);
let compImg; 
compImg =  randomNumber;
  toGlobalCompImg = compImg    
}

function rendering() {

  compImgSrc.src = `/assets/img/game_${toGlobalCompImg}.svg`
  myImgSrc.src = `/assets/img/game_${toGlobal}.svg`
    if (toGlobal === 1 && toGlobalCompImg === 3  || toGlobal === 3 && toGlobalCompImg === 2 || toGlobal === 2 && toGlobalCompImg === 1) {
        succesSound.play() 
        console.log('win');  
    } 
     else if (toGlobal === toGlobalCompImg) {
         console.log('Teng');
     }
    else {
        loseSound.play()
        console.log('lose');
    }
  
    setInterval(initalSrc, 5000)
}

function initalSrc() {
  myImgSrc.src = `/assets/img/question_mark.svg`
  compImgSrc.src = `/assets/img/question_mark.svg`
}




function toggleClass(el) {
    el.classList.toggle("active_btn")
}