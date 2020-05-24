// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: false,
    packages: {'[+]': ['noerrors']}
  },
  loader: {
    load: ['[tex]/noerrors']
  },
  svg: {
    displayAlign: 'center',        // default for indentalign when set to 'auto'
    displayIndent: '0',            // default for indentshift when set to 'auto'
    fontCache: 'local',            // or 'global' or 'none'
  },
  // options: {
  //   ignoreHtmlClass: "tex2jax_ignore"
  // }
};

// (function () {
//   var script = document.createElement('script');
//   script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
//   script.async = true;
//   document.head.appendChild(script);
// })();
