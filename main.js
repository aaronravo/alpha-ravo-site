(function () {
  var form = document.getElementById('contact-form') || document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Submitted';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'We\'ll be in touch.';
      }, 400);
    });
  }

  // Hero wordmark + tagline typing animation (+ optional roar sound)
  var hero = document.querySelector('.hero-wordmark-primary');
  var tagline = document.querySelector('.hero-wordmark-tagline');
  var roarAudio = document.getElementById('roar-audio');

  if (hero) {
    var heroFullText = hero.textContent.trim();
    var heroFixedWidth = hero.offsetWidth;
    var taglineFullText = tagline && tagline.textContent ? tagline.textContent.trim() : '';
    var taglineFixedWidth = tagline ? tagline.offsetWidth : 0;

    if (heroFullText.length > 0) {
      if (heroFixedWidth > 0) {
        hero.style.minWidth = heroFixedWidth + 'px';
      }

      if (tagline && taglineFullText.length > 0 && taglineFixedWidth > 0) {
        tagline.style.minWidth = taglineFixedWidth + 'px';
        tagline.textContent = '';
      }

      hero.textContent = '';
      hero.classList.add('is-typing');

      var heroIndex = 0;
      var delayBeforeStart = 250;
      var charDelay = 85;

      function playRoar() {
        if (!roarAudio) return;
        try {
          roarAudio.currentTime = 0;
          roarAudio.volume = 1;
          roarAudio.playbackRate = 1.4;

          var maybePromise = roarAudio.play();
          if (maybePromise && typeof maybePromise.then === 'function') {
            maybePromise.catch(function () {
              // Autoplay might be blocked; ignore.
            });
          }

          setTimeout(function () {
            try {
              roarAudio.pause();
            } catch (e) {
              // Ignore.
            }
          }, 1600);
        } catch (e) {
          // Ignore playback errors.
        }
      }

      function startTaglineTyping() {
        if (!tagline || !taglineFullText.length) return;

        var taglineIndex = 0;
        var taglineCharDelay = 60;

        tagline.classList.add('is-typing');

        function typeTaglineNext() {
          if (taglineIndex <= taglineFullText.length) {
            tagline.textContent = taglineFullText.slice(0, taglineIndex);
            taglineIndex += 1;
            setTimeout(typeTaglineNext, taglineCharDelay);
          } else {
            tagline.classList.remove('is-typing');
          }
        }

        typeTaglineNext();
      }

      function typeNext() {
        if (heroIndex <= heroFullText.length) {
          hero.textContent = heroFullText.slice(0, heroIndex);
          heroIndex += 1;
          setTimeout(typeNext, charDelay);
        } else {
          hero.classList.remove('is-typing');
          startTaglineTyping();
        }
      }

      setTimeout(function () {
        playRoar();
        typeNext();
      }, delayBeforeStart);
    }
  }
})();
