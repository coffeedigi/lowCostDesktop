// Homepage Dots Section Scroll
$(document).ready(function() {
	$(".sideDotsMng").scrollToFixed({
        minWidth: 0,
        marginTop: 0,
		offsets: true,
        removeOffsets: true,
        limit: function () {
            var a = $(".leadDotNav").offset().top - $(".sideDotsMng").outerHeight() - 10;
            return a;
        }
    });
//
$('.navDotsWrapp a[href*="#"]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior
				var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('.Sec-wrap-Link').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navDotsWrapp a.active').removeClass('active');
						$('.navDotsWrapp a').eq(i).addClass('active');
				}
		});
}).scroll();
// End Homepage
//Header Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
        $("body").addClass("header-scrolled");
    } else {
        $("body").removeClass("header-scrolled");
    }
});
//header cta visible
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $("body").addClass("header-cta-visible");
    } else {
        $("body").removeClass("header-cta-visible");
    }
});
//Apply Class on body toggle navbar
$('.navbar-collapse').on('shown.bs.collapse', function () {
  $('body').addClass('show-overlay');
})
$('.navbar-collapse').on('hidden.bs.collapse', function () {
  $('body').removeClass('show-overlay');
})
// Scroll on click
$(document).ready(function() {
		$('.scrollClick[href*="#"]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior
				var target = $(this).attr("href"); // Set the target as variable
				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});
				return false;
		});
});
// Tooltip
$(function () {
        $('[data-toggle="tooltip"]').tooltip({
        });
});
// Drawer
$('.drawerModal').on("shown.bs.modal", function() {$("body").addClass("drawerShow");});
$('.drawerModal').on("hide.bs.modal", function() {$("body").removeClass("drawerShow");});
//Button Compress Animation
document.querySelectorAll('.buttonCompress').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('compress')) {

        button.classList.add('compress');

        setTimeout(() => button.classList.remove('compress'), 4000);

    }
    e.preventDefault();
}));

//Menu Line Animated
var nav = $('.navLine_Wrap');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid
  });
}

nav.find('.header-nav>.nav-item>.nav-link').click(function(e) {
  e.preventDefault();
  if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
    
    nav.addClass('animate');

    var _this = $(this);

    nav.find('.header-nav>.nav-item').removeClass('active');

    var position = _this.parent().position();
    var width = _this.parent().width();

    if(position.left >= pos) {
      line.animate({
        width: ((position.left - pos) + width)
      }, 300, function() {
        line.animate({
          width: width,
          left: position.left
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('active');
      });
    } else {
      line.animate({
        left: position.left,
        width: ((pos - position.left) + wid)
      }, 300, function() {
        line.animate({
          width: width
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('active');
      });
    }

    pos = position.left;
    wid = width;
  }
}); 
//End Menu Line Animated
// Mobile Screen Verticle Slider
$(".slideVertical_plan").slick({
	arrows : false,
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll:1,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 1000,
	centerMode: true,
	centerPadding: '75px',
	useTransform: true,
	//fade: true,
	cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
	vertical: true,
	verticalSwiping: false,
	swipe: false,
	pauseOnHover:false,
	responsive: [
    {
      breakpoint: 576,
      settings: {
		centerPadding: '65px',
      }
    },
    
  ]
  
});

// Date Label Masking
var masking = {

  // User defined Values
  //maskedInputs : document.getElementsByClassName('masked'), // add with IE 8's death
  maskedInputs : document.querySelectorAll('.masked'), // kill with IE 8's death
  maskedNumber : 'XdDmMyY9',
  maskedLetter : '_',

  init: function () {
    masking.setUpMasks(masking.maskedInputs);
    masking.maskedInputs = document.querySelectorAll('.masked'); // Repopulating. Needed b/c static node list was created above.
    masking.activateMasking(masking.maskedInputs);
  },

  setUpMasks: function (inputs) {
    var i, l = inputs.length;

    for(i = 0; i < l; i++) {
      masking.createShell(inputs[i]);
    }
  },
  
  // replaces each masked input with a shall containing the input and it's mask.
  createShell : function (input) {
    var text = '', 
        placeholder = input.getAttribute('placeholder');

    input.setAttribute('maxlength', placeholder.length);
    input.setAttribute('data-placeholder', placeholder);
    input.removeAttribute('placeholder');

    text = '' +
      
      input.outerHTML +
	  '<label class="primary-label">Birthdate</label>' +
	  '<label class="secondary-label lable-Hide-i" id="' + input.id + 
      'Mask"><i></i>' + placeholder + '</label>' + 
      '';

    input.outerHTML = text;
  },

  setValueOfMask : function (e) {
    var value = e.target.value,
        placeholder = e.target.getAttribute('data-placeholder');

    return "<i>" + value + "</i>" + placeholder.substr(value.length);
  },
  
  // add event listeners
  activateMasking : function (inputs) {
    var i, l;

    for (i = 0, l = inputs.length; i < l; i++) {
      if (masking.maskedInputs[i].addEventListener) { // remove "if" after death of IE 8
        masking.maskedInputs[i].addEventListener('keyup', function(e) {
          masking.handleValueChange(e);
        }, false); 
      } else if (masking.maskedInputs[i].attachEvent) { // For IE 8
          masking.maskedInputs[i].attachEvent("onkeyup", function(e) {
          e.target = e.srcElement; 
          masking.handleValueChange(e);
        });
      }
    }
  },
  
  handleValueChange : function (e) {
    var id = e.target.getAttribute('id');
        
    switch (e.keyCode) { // allows navigating thru input
      case 20: // caplocks
      case 17: // control
      case 18: // option
      case 16: // shift
      case 37: // arrow keys
      case 38:
      case 39:
      case 40:
      case  9: // tab (let blur handle tab)
        return;
      }

    document.getElementById(id).value = masking.handleCurrentValue(e);
    document.getElementById(id + 'Mask').innerHTML = masking.setValueOfMask(e);

  },

  handleCurrentValue : function (e) {
    var isCharsetPresent = e.target.getAttribute('data-charset'), 
        placeholder = isCharsetPresent || e.target.getAttribute('data-placeholder'),
        value = e.target.value, l = placeholder.length, newValue = '', 
        i, j, isInt, isLetter, strippedValue;

    // strip special characters
    strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");

    for (i = 0, j = 0; i < l; i++) {
        var x = 
        isInt = !isNaN(parseInt(strippedValue[j]));
        isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
        matchesNumber = masking.maskedNumber.indexOf(placeholder[i]) >= 0;
        matchesLetter = masking.maskedLetter.indexOf(placeholder[i]) >= 0;

        if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {

                newValue += strippedValue[j++];

          } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                // masking.errorOnKeyEntry(); // write your own error handling function
                return newValue; 

        } else {
            newValue += placeholder[i];
        } 
        // break if no characters left and the pattern is non-special character
        if (strippedValue[j] == undefined) { 
          break;
        }
    }
    if (e.target.getAttribute('data-valid-example')) {
      return masking.validateProgress(e, newValue);
    }
    return newValue;
  },

  validateProgress : function (e, value) {
    var validExample = e.target.getAttribute('data-valid-example'),
        pattern = new RegExp(e.target.getAttribute('pattern')),
        placeholder = e.target.getAttribute('data-placeholder'),
        l = value.length, testValue = '';

    //convert to months
    if (l == 1 && placeholder.toUpperCase().substr(0,2) == 'MM') {
      if(value > 1 && value < 10) {
        value = '0' + value;
      }
      return value;
    }
    // test the value, removing the last character, until what you have is a submatch
    for ( i = l; i >= 0; i--) {
      testValue = value + validExample.substr(value.length);
      if (pattern.test(testValue)) {
        return value;
      } else {
        value = value.substr(0, value.length-1);
      }
    }
  
    return value;
  },

  errorOnKeyEntry : function () {
    // Write your own error handling
  }
}

masking.init();
// End Date Label Masking