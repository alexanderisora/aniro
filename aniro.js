(function () {
  const root = document.querySelector('[data-aniro_root]')
  const oldOnScroll = window.onscroll || function () {}
  const gap = 30;

  const activeLine = Math.round(document.documentElement.clientHeight / 2)
  document.body.innerHTML += `
    <div style="position: fixed; top: ${activeLine}px">–––––––</div>
  `

  window.onscroll = e => {
    requestAnimationFrame(() => {
      oldOnScroll(e)

      const children = Array.prototype.slice.call(document.querySelectorAll('[data-aniro]'))

      children.forEach(child => {
        const childRect = child.getBoundingClientRect()
        const childTop = childRect.top - gap
        const childBottom = childRect.bottom + gap

        if (
          (activeLine > childTop) &&
          (activeLine < childBottom)
        ) {
          child.classList.add('aniro_active')
        } else {
          child.classList.remove('aniro_active')
        }
      })
    })
  }
})()
