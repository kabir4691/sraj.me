(function () {
  'use strict';
  // Show my email address
  (function() {
    var querySelector = document.querySelector.bind(document);
    var emailNode = querySelector('.email.obfuscated');
    if (emailNode.dataset) {
      var obfuscated = emailNode.dataset.email;
      emailNode.setAttribute('href', 'mailto:' + obfuscated
            .replace(/ /, '@')
            .replace(/ /, '.'));
    }
  })();
})();
