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

  // Hero logo roll-in + tagline reveal (+ optional roar sound)
  var heroWordmark = document.querySelector('.hero-wordmark');
  var heroLogoWrap = document.querySelector('.hero-logo-wrap');
  var roarAudio = document.getElementById('roar-audio');

  function startHeroAnimation(shouldPlayRoar) {
    if (!heroWordmark || !heroLogoWrap) return;

    function playRoar() {
      if (!roarAudio || !shouldPlayRoar) return;
      try {
        roarAudio.currentTime = 0;
        roarAudio.volume = 1;
        roarAudio.playbackRate = 1.4;
        roarAudio.play().catch(function () { /* autoplay blocked */ });

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

    playRoar();
    heroLogoWrap.classList.add('is-rolling-in');
    setTimeout(function () {
      heroWordmark.classList.add('is-revealed');
    }, 400);
  }

  var heroGateBtn = document.getElementById('hero-gate-btn');

  if (heroGateBtn) {
    heroGateBtn.addEventListener('click', function () {
      var gate = document.getElementById('hero-gate');
      if (gate && gate.parentNode) {
        gate.parentNode.removeChild(gate);
      }
      startHeroAnimation(true);
    });
  } else {
    startHeroAnimation(true);
  }
})();
