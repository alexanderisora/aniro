function aniro (userConfig) {
  const config = {
    line: Math.round(document.documentElement.clientHeight / 2),
    gap: 30,
    ...userConfig
  }

  const getChildren = () => Array.prototype.slice.call(document.querySelectorAll('[data-aniro]'))

  const isBottomReached = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    return scrollHeight - scrollTop === clientHeight
  }

  const isActive = node => node.classList.contains('aniro_active')
  const activate = node => node.classList.add('aniro_active')
  const hide = node => node.classList.add('aniro_hidden')

  const root = document.querySelector('[data-aniro_root]')
  const oldOnScroll = window.onscroll || function () {}
  const gap = config.gap
  const activeLine = config.line

  getChildren().forEach(hide)

  window.onscroll = e => {
    requestAnimationFrame(() => {
      oldOnScroll(e)

      const children = getChildren()

      children.forEach(child => {
        const childRect = child.getBoundingClientRect()
        const childTop = childRect.top - gap
        const childBottom = childRect.bottom + gap

        if (
          (activeLine > childTop) &&
          !isActive(child)
        ) {
          activate(child)
        }
      })

      if (isBottomReached()) {
        children.forEach(activate)
      }
    })
  }
}
