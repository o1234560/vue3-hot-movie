// 防抖：只在最后一次触发
export default function debounce (fn, delay = 1000) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)// this 指向vue
    }, delay)
  }
}
