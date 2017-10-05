var html = document.documentElement;

if (sessionStorage.fontsLoaded) {
  html.classList.add("fonts-loaded");
} else {
  var script = document.createElement("script");
  script.src = "js/fontfaceobserver.js";
  script.async = true;

  script.onload = function() {
    var regular = new FontFaceObserver("Muli", {
      weight: "400"
    });

    Promise.all([
      regular.load()
    ]).then(function() {
      html.classList.add("fonts-loaded");
    });
  };
  document.head.appendChild(script);
}

$('#accordion').accordion({
  active: false,
  collapsible: true,
  icons: {
    header: 'responsive__caption--plus',
    activeHeader: 'responsive__caption--minus'
  }
});

$('.banner__dots').hover(
  function() {
    $(this).stop().animate({
      'background-color': 'rgb(255, 228, 0)'
    });
    $('.banner__category').stop().animate({
        'background-color': 'rgb(255, 255, 255)'
      },
      500,
      'easeInSine'
    );
  },
  function() {
    $(this).stop().animate({
      'background-color': 'rgb(0, 0, 0)'
    });
    $('.banner__category').stop().animate({
        'background-color': 'rgb(255, 228, 0)'
      },
      500,
      'easeInSine'
    );
  }
);

$('.gallery__item').click(function(event) {
  event.preventDefault();
  var imgPath = $(this).attr('href');
  var oldImage = $('.gallery__slideshow img');
  var newImage = $('<img src="' + imgPath + '">');
  newImage.hide();
  $('.gallery__slideshow').prepend(newImage);
  newImage.fadeIn(500);
  oldImage.fadeOut(1000, function() {
    $(this).remove();
  });
});
$('.gallery__item:first').click();

$('.service__decoration').hover(
  function() {
    $(this).stop().animate({
        'bottom': '-300px',
        'left': '-100px',
        'color': 'rgba(255, 228, 0, 0.7)',
        'opacity': 1
      },
      1000
    );
  },
  function() {
    $(this).stop().animate({
        'bottom': '-500px',
        'left': '-300px',
        'color': 'rgb(237, 237, 237)'
      },
      1000
    );
  }
);

$('.price__list').hide();
var priceArrow = $('.price__arrow');
priceArrow.show();
priceArrow.addClass('price__arrow--closed');
priceArrow.click(function() {
  var priceList = $(this).next('.price__list');
  if (priceList.is(':hidden')) {
    priceList.slideDown();
    $(this).addClass('price__arrow--opened');
    $(this).removeClass('price__arrow--closed');
  } else {
    priceList.slideUp();
    $(this).addClass('price__arrow--closed');
    $(this).removeClass('price__arrow--opened');
  }
});

var teamInfo = $('.team__info');

$('.team__info').hide();

$('.team__box').hover(
  function() {
    var teamInfo = $(this).children('.team__info');
    teamInfo.stop().fadeIn();
  },
  function() {
    teamInfo.stop().fadeOut();
  }
);

$('.news__item').hover(
  function() {
    var readMore = $(this).children('.news__more');
    readMore.addClass('news__more--active');
    $(this).addClass('news__item--active');
  },
  function() {
    var readMore = $(this).children('.news__more');
    readMore.removeClass('news__more--active');
    $(this).removeClass('news__item--active');
  }
);

$('.contact__form').validate({
  rules: {
    name: 'required',
    email: {
      required: true,
      email: true
    },
    lastName: 'required',
    letter: {
      required: true,
      maxlength: [5, 300]
    }
  },
  messages: {
    name: {
      required: "Please type the name you'd like to use."
    },
    letter: {
      maxlength: "Your text must be no more than 300 characters long."
    }
  }
});

var map = $('.map iframe');
map.hide();
var mapText = $('.map__text');
mapText.addClass('map__text--closed');

$('.map__container').click(function() {
  if (map.is(':hidden')) {
    map.slideDown();
    mapText.addClass('map__text--opened');
    mapText.removeClass('map__text--closed');
  } else {
    map.slideUp();
    mapText.addClass('map__text--closed');
    mapText.removeClass('map__text--opened');
  }
});
