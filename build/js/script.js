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
    header: 'features__caption--plus',
    activeHeader: 'features__caption--minus'
  }
});

$('.banner__dots').hover(
  function() {
    $('.banner__category').animate({
        'background-color': 'rgb(255, 255, 255)'
      },
      500,
      'easeInSine'
    );
  },
  function() {
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
    $(this).animate({
        'bottom': '-300px',
        'left': '-100px',
        'color': 'rgb(237, 237, 237)',
        'opacity': 1
      },
      1000
    );
  },
  function() {
    $(this).animate({
        'bottom': '-500px',
        'left': '-300px',
        'color': 'rgba(255, 228, 0, 0.7)'
      },
      1000
    );
  }
);

$('.price__item-body').hide();

$('.price__arrow').click(function() {
  $('.price__item-body').slideToggle(500);
});
