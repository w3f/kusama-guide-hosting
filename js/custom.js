!function(t,n){t=t||"docReady",n=n||window;var e=[],o=!1,d=!1;function a(){if(!o){o=!0;for(var t=0;t<e.length;t++)e[t].fn.call(window,e[t].ctx);e=[]}}function c(){"complete"===document.readyState&&a()}n[t]=function(t,n){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");o?setTimeout((function(){t(n)}),1):(e.push({fn:t,ctx:n}),"complete"===document.readyState?setTimeout(a,1):d||(document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):(document.attachEvent("onreadystatechange",c),window.attachEvent("onload",a)),d=!0))}}("docReady",window);