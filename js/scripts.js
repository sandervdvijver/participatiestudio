// Toggle elements on click
var els = document.querySelectorAll('.actor>.actor-info>h2');

for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', toggle);
}

function toggle() {
    this.parentElement.parentElement.classList.toggle('selected');
}

/* Zenscroll setup */
zenscroll.setup(null, 0);

/* Scrollspy main nav */
(function() {
    'use strict';
  
    var section = document.querySelectorAll("section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
  })();
  