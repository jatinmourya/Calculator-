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
clearbtn.addEventListener('click', function () {

  //  1st way to remove last digit
  dis.value = dis.value.slice(0, -1)

  //// 2nd way to remove last digit
  // val = ''
  // for (i = 0; i < dis.value.length - 1; i++) {
  //   val += dis.value[i]
  // }
  // dis.value = val
})
clearbtn.addEventListener('mousedown', function () {
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
})

// on mouseup it will stop setinterval 
// that means if you mouseup before 2 seconds display value will not be cleared
clearbtn.addEventListener('mouseup', function () {
  clearInterval(interval)
})
clearbtn.addEventListener('mouseout', function () {
  clearInterval(interval)
})
// buttons onclick
btns.forEach(function (btn) {

  btn.addEventListener('click', addvalue)
  function addvalue() {
    dis.value += this.value
  }

  btn.addEventListener('mousedown', function () {
    interr = setInterval(addvalue2, 500);
    function addvalue2() {
      dis.value += btn.value
    }
  })

  btn.addEventListener('mouseup', function () {
    clearInterval(interr)
  })

  btn.addEventListener('mouseout', function () {
    clearInterval(interr)
  })
})

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
      cndtion = dis.value.slice(-1)

      if (cndtion != '+' && cndtion != '-' && cndtion != '*' && cndtion != '.') {
        dis.value += this.value
      }
    }
  }
})

eqbtn.addEventListener('click', function () {
  if (dis.value != '') {
    dis.value = eval(dis.value)
  }
})
