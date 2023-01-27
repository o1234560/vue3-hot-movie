// 节流：只在第一次触发
export default function throttle (fn, time = 1000) {
  const _arguments = arguments
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.call(this, _arguments)
      canRun = true
    }, time)
  }
}
