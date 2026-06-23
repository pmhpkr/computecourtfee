(function () {
  var toggle = document.getElementById('nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
  /* close menu when a link is tapped */
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
})();
