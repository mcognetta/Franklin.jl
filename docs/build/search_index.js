var documenterSearchIndex = {"docs":
[{"location":"#JuDoc.jl-Documentation-1","page":"Home","title":"JuDoc.jl - Documentation","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#Usage-1","page":"Home","title":"Usage","text":"","category":"section"},{"location":"lib/public/#Public-Interface-1","page":"Public","title":"Public Interface","text":"","category":"section"},{"location":"lib/public/#","page":"Public","title":"Public","text":"Documentation for JuDoc.jl's exported functions","category":"page"},{"location":"lib/public/#","page":"Public","title":"Public","text":"JuDoc.serve\nJuDoc.optimize\nJuDoc.publish","category":"page"},{"location":"lib/public/#JuDoc.serve","page":"Public","title":"JuDoc.serve","text":"serve(; clear, verb,  port)\n\nRuns JuDoc in the current directory.\n\nKeyword arguments:\n\nclear=false:  whether to remove any existing output directory\nverb=false:   whether to display messages\nport=8000:    the port to use for the local server (should pick a number between 8000 and 9000)\nsingle=false: whether to run a single pass or run continuously\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#JuDoc.optimize","page":"Public","title":"JuDoc.optimize","text":"optimize(; prerender, minify)\n\nDoes a full pass followed by a pre-rendering and minification step.\n\nprerender=true: whether to pre-render katex and highlight.js (requires node.js)\nminify=true:    whether to minify output (requires python3 and css_html_js_minify)\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#JuDoc.publish","page":"Public","title":"JuDoc.publish","text":"publish(; minify=true, prerender=true)\n\nThis is a simple wrapper doing a git commit and git push without much fanciness. It assumes the current directory is a git folder. This will work in most simple scenarios (e.g. there's only one person updating the website). In other scenarios you should probably do this manually.\n\nKeyword arguments\n\nprerender=true: prerender javascript before pushing see optimize\nminify=true:    minify output before pushing see optimize\nnopass=false:   set this to true if you have already run optimize manually.\n\n\n\n\n\n","category":"function"},{"location":"lib/internals/#Internal-Interface-1","page":"Internals","title":"Internal Interface","text":"","category":"section"},{"location":"lib/internals/#","page":"Internals","title":"Internals","text":"Documentation for JuDoc.jl's internal interface.","category":"page"}]
}
