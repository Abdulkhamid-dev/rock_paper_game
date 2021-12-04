var myImg = document.getElementsByClassName('my_img')
var compImg = document.getElementsByClassName('comp_img')
var block = document.getElementById('img_block')
var startBtn = document.getElementById('startBtn')
var succesSound = new Audio('/assets/audio/succes_sound.mp3')
var loseSound = new Audio('/assets/audio/lose_sound.mp3')
let myImgSrc = document.getElementById('myImgSrc')
let compImgSrc = document.getElementById('compImgSrc')
let resultTxt = document.getElementById('result_txt')
let statisticTable = document.getElementById('statistic')
let dateTable = document.getElementById('type_game')
let gameNum = document.getElementById('game_num')
let myTime


function chooseImg(num) {
    let newImg; 
     newImg = num
     toGlobal = newImg

  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1)
let compImg; 
compImg =  randomNumber;
  toGlobalCompImg = compImg   
  myImgSrc.src = `/assets/img/game_${toGlobal}.svg` 
}
var dataStatistic = []

function rendering() {

  compImgSrc.src = `/assets/img/game_${toGlobalCompImg}.svg`
    if (toGlobal === 1 && toGlobalCompImg === 3  || toGlobal === 3 && toGlobalCompImg === 2 || toGlobal === 2 && toGlobalCompImg === 1) {
        succesSound.play() 
        console.log('win');  
        resultTxt.innerHTML = '<h1>YOU WIN</h1>';
        var formData = {
          time: 0 + dataStatistic.length,
          type: 'WIN'
        };
        dataStatistic.push(formData)
        statisticTable.innerHTML = '';
        dataStatistic.forEach(item => {
          statisticTable.innerHTML += ` <p>${item.time + 1}. Play vs Computer: ${item.type}</p>`
        })
    } 
     else if (toGlobal === toGlobalCompImg) {
      loseSound.play()
         console.log('Teng');
         resultTxt.innerHTML = '<h1>EQUALITY</h1>';
        var formData = {
          time: 0 + dataStatistic.length,
          type: 'EQUALITY'
        };
        dataStatistic.push(formData)
        statisticTable.innerHTML = '';
        dataStatistic.forEach(item => {
          statisticTable.innerHTML += ` <p>${item.time + 1}. Play vs Computer: ${item.type}</p>`
        })
     }
    else {
        loseSound.play()
        console.log('lose');
        resultTxt.innerHTML = '<h1>YOU LOSE</h1>'
        var formData = {
          time: 0 + dataStatistic.length,
          type: 'LOSE'
        };
        dataStatistic.push(formData)
        statisticTable.innerHTML = '';
        dataStatistic.forEach(item => {
          statisticTable.innerHTML += ` <p>${item.time + 1}. Play vs Computer: ${item.type}</p>`
        })
    }
    let date = new Date()

dateTable.innerHTML = `
<div id="game_num"><h3>Game#${dataStatistic.length + 1}</h3></div>
<h4>Date: ${date.getHours()}:${date.getMinutes()}, ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} </h4>
<h4>Type: Play vs Computer</h4>
`
  
    setTimeout(initalSrc, 5000)
}


function initalSrc() {
  resultTxt.innerHTML = null
  myImgSrc.src = `/assets/img/question_mark.svg`
  compImgSrc.src = `/assets/img/question_mark.svg`
}


function toggleClass(el) {
    el.classList.toggle("active_btn")
}