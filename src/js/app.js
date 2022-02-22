$(function () {
  const header = $('.page-header');
  const headerHeight = header.height();
  const headerTop = header.offset().top;
  const intro = $('.intro');
  const introOffset = headerTop + headerHeight;

  const md = window.matchMedia('(min-width: 768px)');
  matchMd(md);
  md.addEventListener('change', matchMd);

  function matchMd(e) {
    if (e.matches) {
      intro.css('padding-top', introOffset + 43);
      setFixed(e);
      $(window).on('scroll.setFixed', setFixed);
    } else {
      intro.css('padding-top', introOffset + 25);
      header.addClass('page-header_fixed');
      $(window).off('scroll.setFixed');
    }
  }

  function setFixed(e) {
    if (window.pageYOffset >= headerTop) {
      header.addClass('page-header_fixed');
    } else {
      header.removeClass('page-header_fixed');
    }
  }

  $('html').css('scroll-padding-top', headerHeight);
  $('body').scrollspy({
    target: '#navbarMain',
    offset: header.height() + 1,
  });

  const navbarMain = $('#navbarMain');
  navbarMain.find('.nav-link[href^="#"]').on('click', function (e) {
    navbarMain.collapse('hide');
  });

  const reviewsElement = document.querySelector('.reviews-swiper');
  const reviewsSwiper = new Swiper(reviewsElement, {
    allowTouchMove: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    initialSlide: 2,
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  reviewsSwiper.autoplay.delay = 5000;

  if ('IntersectionObserver' in window) {
    const options = {
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      reviewsSwiper.autoplay[entries[0].isIntersecting ? 'start' : 'stop']();
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(reviewsElement);
  } else {
    reviewsSwiper.autoplay.start();
  }

  new Swiper('.features-swiper', {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: '.features-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });

  new Swiper('.pricing-swiper', {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: '.pricing-swiper .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });

  $('.needs-validation').on('submit', (e) => {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });

  $('.page-loader').remove();
});
