const preloader = () => {
  const preloaderNode = document.querySelector('.js-preloader');
  const loader = document.querySelector('.loader');
  if (!preloaderNode) {
    return;
  }

  class Preloader {
    constructor(el) {
      this.el = el;
      this.durationFadeout = this.el.dataset.durationFadein;
      this.durationFadein = this.el.dataset.durationFadeout;

      this.load();
    }

    load() {
      document.body.classList.add('scroll-lock');
      this.el.classList.add('is-loading');

      setTimeout(() => {
        this.hide();
      }, this.durationFadein);
    }

    hide() {
      this.el.classList.add('is-ready');
      window.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          loader.classList.add('is-open');
          document.body.classList.remove('scroll-lock');
        }
        loader.classList.add('is-hidden');
      });
    }
  }


  // eslint-disable-next-line no-new
  new Preloader(preloaderNode);
};

export {
  preloader
};
