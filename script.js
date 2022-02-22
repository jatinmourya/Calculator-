// array of buttons 
var btns = document.querySelectorAll('.btn')
// array of special buttons 
var sbtns = document.querySelectorAll('.sbtn')
// display
var dis = document.getElementById('display')
// C button
var clearbtn = document.getElementById('clear')
// '=' button
var eqbtn = document.getElementById('eqbtn')


// clearing display
clearbtn.addEventListener('click', () => {

  if (dis.value != '') {

    //  1st way to remove last digit
    dis.value = dis.value.slice(0, -1)

    //// 2nd way to remove last digit
    // val = ''
    // for (i = 0; i < dis.value.length - 1; i++) {
    //   val += dis.value[i]
    // }
    // dis.value = val
  }

})
clear = () => {
  if (dis.value != '') {

    time = new Date()
    time = time.getSeconds()

    interval = setInterval(crte, 500);
    function crte() {
      newt = new Date()
      newt = newt.getSeconds()
      diff = newt - time
      // console.log(diff)
      if (diff == 1) {
        dis.value = ''
      }
    }
  }
}
clearbtn.addEventListener('mousedown', clear)
clearbtn.addEventListener('touchstart', clear)

addac = () => {
  clearbtn.value = 'C'

}
clearbtn.addEventListener('mouseup', addac)
clearbtn.addEventListener('mouseout', addac)
clearbtn.addEventListener('touchend', addac)



// on mouseup it will stop setinterval 
// that means if you mouseup before 2 seconds display value will not be cleared

stopclear = () => {
  clearInterval(interval)
}
clearbtn.addEventListener('mouseup', stopclear)
clearbtn.addEventListener('mouseout', stopclear)
clearbtn.addEventListener('touchend', stopclear)
// 
// 
// 
// 
// 
// buttons onclick
btns.forEach(function (btn) {

  btn.addEventListener('click', function () {
    dis.value += this.value
  })

  addvalue = () => {
    interr = setInterval(addvalue2, 500);
    function addvalue2() {
      dis.value += btn.value
    }
  }
  btn.addEventListener('mousedown', addvalue)
  btn.addEventListener('touchstart', addvalue)

  stopaddvalue = () => {
    clearInterval(interr)
  }
  btn.addEventListener('mouseup', stopaddvalue)
  btn.addEventListener('mouseout', stopaddvalue)
  btn.addEventListener('touchend', stopaddvalue)
  btn.addEventListener('touchmove', stopaddvalue)

})
// 
// 
// 
// 
// 
// special buttons onclick
sbtns.forEach(function (sbtn) {

  sbtn.addEventListener('click', addsbtn)
  function addsbtn() {


    // 1st wat to find number at beginning 
    // if (dis.value.match(/\d/)) {
    //   cndtion = dis.value.slice(-1)
    //   if (cndtion != '+' && cndtion != '-' && cndtion != '*') {
    //     dis.value += this.value
    //   }
    // }

    // 2nd wat to find number at beginning ( /[0-9]/  - RE in javascript )
    if (dis.value.match(/[0-9]/)) {
      cndtn = dis.value.slice(-1)
      if (cndtn != '+' && cndtn != '-' && cndtn != '*' && cndtn != '.') {
        dis.value += this.value
      }
    }
  }

})
// 
// 
// 
// 
// 
// 1st way to evaluate
evaluate = () => {
  if (dis.value != '') {
    dis.value = eval(dis.value)
  }
}
eqbtn.addEventListener('click', evaluate)

// 2nd way to evaluate
// eqbtn.addEventListener('click', function () {
//   if (dis.value != '') {
//     dis.value = eval(dis.value)
//   }
// })
