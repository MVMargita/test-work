/* top-nav main active */
$(function () {

  $('.main .main__link').click(function () {
    $('.main .main__link').removeClass('active');
    $(this).addClass('active');
  })


  /* menu bar */

  // menu-hamburger opened
  $('.menu-open').click(function () {
    $('.menu-collapse').toggleClass('d-none menu-hamb');
    $('.menu').toggleClass('menu-opened');
  });

  /* top-slider */

  $('.carousel slide .carousel-control-prev .carousel-control-next').click(function () {
    $('.carousel slide .carousel-control-prev .carousel-control-next').removeClass('active');
    $(this).addClass('active');
  });


  /* slick */

  $(document).ready(function () {
    $('.slick-field__content').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            centerMode: false,
            centerPadding: false,
            infinite: true,
            slidesToShow: 1
          }
        },
      ]
    });
  });

  /* maps */

  jQuery(document).ready(function ($) {
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'saturation': 36
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 40
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'visibility': 'on'
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [{
              'visibility': 'off'
            }]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 17
              },
              {
                'weight': 1.2
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 21
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 29
              },
              {
                'weight': 0.2
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 18
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 19
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          }
        ]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400)
      });
    }
  });
});

/* sec-slider section tabs */

function openSlider(evt, sliderName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('slick-field__content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tab__link');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sliderName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
