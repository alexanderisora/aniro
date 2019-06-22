function aniro (userConfig) {
  const config = {
    line: Math.round(document.documentElement.clientHeight / 2),
    gap: 30,
    disableWhenBottomReached: true,
    ...userConfig
  }

  const getChildren = () => Array.prototype.slice.call(document.querySelectorAll('[data-aniro]'))

  const isBottomReached = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    return scrollHeight - scrollTop === clientHeight
  }

  const hasToBeAnimated = node => {
    const childTop = node.getBoundingClientRect().top - gap
    return (activeLine > childTop) && !isActive(node)
  }

  const activateIfNeeded = node => {
    if (hasToBeAnimated(node) || isBottomReached()) {
      activate(node)
    }
  }

  const isActive = node => node.classList.contains('aniro_active')
  const activate = node => {
    const delay = parseInt(node.dataset.aniro_delay || 0, 10)
    node.style.transitionDelay = delay + 'ms'
    node.style.animationDelay = delay + 'ms'
    node.classList.add('aniro_active')
  }
  const hide = node => node.classList.add('aniro_hidden')

  const root = document.querySelector('[data-aniro_root]')
  const oldOnScroll = window.onscroll || function () {}
  const gap = config.gap
  const activeLine = config.line

  getChildren().forEach(child => {
    hide(child)
    activateIfNeeded(child)
  })

  window.onscroll = e => {
    requestAnimationFrame(() => {
      oldOnScroll(e)
      getChildren().forEach(activateIfNeeded)
    })

    if (disableWhenBottomReached && isBottomReached()) {
      window.onscroll = oldOnScroll
    }
  }
}
