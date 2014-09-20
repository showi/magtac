#!/bin/bash
maketzjs --mode canvas -t . -o magtac.canvas.js magtac.js
makehtml --mode canvas -t . -o magtac.canvas.html --code magtac.canvas.js magtac.js
makehtml --mode canvas-debug -t . -o magtac.canvas.debug.html --code magtac.canvas.js magtac.js
