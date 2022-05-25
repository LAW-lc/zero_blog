function flexibly(
  window: {
    devicePixelRatio: number
    addEventListener: (arg0: string, arg1: { (): void; (e: any): void }) => void
  },
  document: {
    documentElement: any
    body: { style: { fontSize: string } }
    addEventListener: (arg0: string, arg1: () => void) => void
    createElement: (arg0: string) => any
  }
) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    if (docEl) {
      var rem = docEl.clientWidth / 10
      docEl.style.fontSize = rem + 'px'
    }
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', setRemUnit)

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}

export default flexibly
