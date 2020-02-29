window.addEventListener('load', () => {
  const els = {
    laptop: document.querySelector('[data-id="laptop"]'),
    laptopScreen: document.querySelector('[data-id="laptopScreen"]'),
    video: document.querySelector('[data-id="video"]')
  }

  console.log(els)

  function animateLaptop (el = new HTMLElement()) {
    el.classList.remove('is-hidden')
    el.classList.add('animated', 'fadeInRight')
  }

  function animateVideo (el = new HTMLElement()) {
    el.classList.remove('is-hidden')
    el.classList.add('animated', 'fadeIn', 'delay-1s')
  }

  animateLaptop(els.laptop)
  animateLaptop(els.laptopScreen)
  animateVideo(els.video)
})
