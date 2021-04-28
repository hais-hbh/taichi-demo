let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*你好，我现在是一个前端小白
*现在我想展现一下我自己的前端功底
*首先我们先写个圆
*/
#taichi {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  border-radius:50%;
}
/*众所周知，太极是分阴阳的
*所以现在我们将它分为阴阳两极
*/
#taichi{
  border:none;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*之后我们加上太极的阴中阳和阳中阴*/
#taichi::before{
  width:100px;
  height:100px;
  background:#fff;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#taichi::after{
  width:100px;
  height:100px;
  background:#000;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''
let n = -1

let step = function () {
  n = n + 1
  setTimeout(function () {
    if (string[n] === '\n') {
      string2 += '</br>'
    }
    if (string[n] === ' ') {
      string2 += '&nbsp'
    }
    if (n < string.length) {
      string2 += string[n]
      step()
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 9999)
    html.scrollTo(0, 9999)
  }, 0)
}
step()