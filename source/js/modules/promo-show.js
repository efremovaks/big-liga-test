const promoShow = () => {

  const promoWrapper = document.querySelector('.promo__wrapper');

  promoWrapper.addEventListener('click', function () {
    if (promoWrapper) {
      promoWrapper.classList.toggle('show');

      if (!promoWrapper.classList.contains('show')) {
        promoWrapper.classList.toggle('hidden');
      } else {
        promoWrapper.classList.remove('hidden');
      }
    }
  });
};



export {
  promoShow
};
