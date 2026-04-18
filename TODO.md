tvEnhancer.js:1 Uncaught SyntaxError: Identifier 'tvDisplay' has already been declared (at tvEnhancer.js:1:1)
    at tvEnhancer.js:1:1# Fix powerTV undefined error

## Steps:
- [x] 1. Create Resources/kernel/TV-code/tvControls.js with powerTV(), rebootTV(), maxTv(), displayGHProf() functions
- [x] 2. Edit Resources/kernel/subdirs/proyectos.js to add tvControls.js to scripts array
- [x] 3. Test: Navigate to http://localhost:8000/#proyectos, click power button - no error, TV glows green LED, buttons stay. All other buttons functional.
- [x] 4. Complete task
