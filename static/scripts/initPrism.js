MarkdownPrismRevealJS = window.MarkdownPrismRevealJS || {};

MarkdownPrismRevealJS.prismSetup = function () {
    var codes = document.querySelectorAll('code');
    console.log(codes)
    for (var i = codes.length - 1; i >= 0; i--) {
        var code = codes[i];
        console.log(code)
        // every code block will have line numbers
        // code.className += " line-numbers";
        // if no lang is specified, java is presumed
        if (code.className.indexOf("language") === -1) {
            code.className += " language-javascript";
        }
        Prism.highlightElement(code);
    }
};

MarkdownPrismRevealJS.prismSetup();