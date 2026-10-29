(function () {
  var root = document.documentElement;
  function setLang(lang, save) {
    root.lang = root.dataset.lang = lang;
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === lang));
    });
    if (save) try { localStorage.setItem('drinkly-lang', lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('drinkly-lang'); } catch (e) {}
  // English by default; #uk / #en links win over a saved choice.
  var hash = location.hash;
  setLang(hash === '#uk' ? 'uk' : hash === '#en' ? 'en' : (saved === 'uk' ? 'uk' : 'en'), false);
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.set, true); });
  });
})();
