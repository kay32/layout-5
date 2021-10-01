$(function() {
  var headerNavbar = $('.header-navbar');
  var headerNavbarWrapper = headerNavbar.find('.header-navbar__wrapper');
  var md = window.matchMedia('(min-width: 768px)');
  matchMd(md);
  md.addEventListener('change', matchMd);

  function setSticked(e) {
    if (window.pageYOffset >= headerNavbar.offset().top) {
      headerNavbarWrapper.addClass('header-navbar__wrapper_sticked');
    } else {
      headerNavbarWrapper.removeClass('header-navbar__wrapper_sticked');
    }
  }

  function matchMd(e) {
    if (e.matches) {
      setSticked(e);
      $(window).on('scroll.setSticked', setSticked);
    } else {
      headerNavbarWrapper.addClass('header-navbar__wrapper_sticked');
      $(window).off('scroll.setSticked');
    }
  }

  $('body').scrollspy({
    target: '#headerNav',
    offset: headerNavbar.height() + 1,
  });
  var headerNav = $('#headerNav');
  headerNav.find('.nav-link[href^="#"]').on('click', function(e) {
    headerNav.collapse('hide');
  });
  new Swiper('.reviews .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  new Swiper('.features .swiper, .pricing .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  $('.needs-validation').on('submit', function(event) {
    var form = event.target;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  });
});
