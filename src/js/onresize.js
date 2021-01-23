import _this from '../main'

// 设置 init 函数
function init() {
  if (_this) {
    var ww = document.documentElement.clientWidth
    if (ww > 750) {
      ww = 750
    }
    document.documentElement.style.fontSize = ww / 37.5 + 'px'
  }
}

// 节流 ms 触发间隔毫秒
var ms = 300
var lastClick = Date.now() - ms
// 初始化
init()
// 改变窗口大小时重新设置 rem
var ww = document.documentElement.clientWidth
if (ww > 750) {
  ww = 750
}
document.documentElement.style.fontSize = ww / 37.5 + 'px'

window.onresize = function() {
  // 节流
  if (Date.now() - lastClick >= ms) {
    init()
    lastClick = Date.now()
  }
}
