(function () {
  var form = document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Submitted';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'We\'ll be in touch.';
      }, 400);
    });
  }
})();
