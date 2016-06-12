Reveal.initialize({
    width: 1024,
    margin: 0.05,
    history: true,
    dependencies: [
        // Syntax highlight for <code> elements
        // { src: 'static/lib/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        // prism instead of highlight
        { src: 'static/lib/plugin/prism/prism.js', async: true},
        { src: 'static/lib/plugin/notes/notes.js', async: true},
        { src: 'static/scripts/initPrism.js', async: true},
    ]
})