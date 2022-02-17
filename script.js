var btns = document.querySelectorAll('.btn')
var sbtns = document.querySelectorAll('.sbtn')
var dis = document.getElementById('display')
var clearbtn = document.getElementById('clear')
var eqbtn = document.getElementById('eqbtn')

// clear display
clearbtn.addEventListener('click', cleardisplay)

function cleardisplay() {

  //  1st way to remove last digit
  dis.value = dis.value.slice(0, -1)


  // 2nd way to remove last digit

  // val = ''
  // for (i = 0; i < dis.value.length - 1; i++) {
  //   val += dis.value[i]
  // }
  // dis.value = val
}
clearbtn.addEventListener('mousedown', function () {
  time = new Date()
  time = time.getSeconds()

  interval = setInterval(crte, 1000);
  function crte() {
    newt = new Date()
    newt = newt.getSeconds()
    var diff = newt - time
    console.log(diff)
    if (diff == 2) {
      dis.value = ''
    }
  }


})
clearbtn.addEventListener('mouseup', function () {
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
