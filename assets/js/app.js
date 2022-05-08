(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _sliderCards = _interopRequireDefault(require("./components/sliderCards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
//import Accordion from './components/accordion';
(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    _burgerMenu["default"].init();

    _sliderCards["default"].init();

    $('.video').parent().click(function () {
      if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
      } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
      }
    });
  });
})(jQuery);

},{"./components/burger-menu":2,"./components/sliderCards":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
  };

  var init = function init() {
    burgeInit();
  };

  return {
    init: init,
    closeBurger: closeBurger
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperSliderCards = function () {
  var accountantInit = new Swiper('.swiper-aboutnft', {
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    effect: "creative",
    slidesPerView: 1,
    centerInsufficientSlides: true,
    initialSlide: 1,
    loopAdditionalSlides: 4,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      320: {
        creativeEffect: {
          prev: {
            shadow: false,
            translate: [-20, 0, -100],
            origin: "left center"
          },
          next: {
            translate: [-40, 0, -200],
            origin: "left center"
          }
        }
      },
      768: {
        creativeEffect: {
          perspective: true,
          prev: {
            shadow: false,
            // translate: [-70, 0, -200],
            translate: [-20, -20, -10],
            origin: "left center"
          },
          next: {
            // translate: [-140, 0, -400],
            translate: [-30, -30, -20],
            origin: "left center"
          }
        }
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperSliderCards;
exports["default"] = _default;

},{}]},{},[1]);
