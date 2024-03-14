// const dom = $0
const dom = document
// const dom = document.body
const cb = () => {
  const dom = document.body
  const clientHeight = dom.clientHeight
  const scrollTop = dom.scrollTop
  const scrollHeight = dom.scrollHeight
  console.log('scroll')
  if (clientHeight + scrollTop === scrollHeight) {
    // state === false && setState(true)
    console.log('竖向滚动条已经滚动到底部')
  } else {
    // state === true && setState(false)
  }
}
// dom.addEventListener('scroll', cb)
document.addEventListener('scroll', cb)
