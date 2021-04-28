let demo = document.querySelector('#html')
let style = document.querySelector('style')

let string = `
/*你好，我是一名前端新人
*接下来我要展示以下我的前端功底了
*首先我们先准备一个div
*/
#picture{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*接下来把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#picture{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*众所周知，八卦是分阴阳的
*所以是一黑一白
*/
#picture{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*之后我们再平分一下太极的阴阳两极
*/
#picture::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#picture::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''
let n = 0

let step = function () {
  setTimeout(function () {

    if (string[n] === '\n') {
      string2 += '</br>'
    } else if (string[n] === ' ') {
      string2 += '&nbsp'
    }
    else {
      string2 += string[n]
    }
    demo.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n + 1 < string.length) {
      n += 1
      step()
    }
  }, 0)
}
step()