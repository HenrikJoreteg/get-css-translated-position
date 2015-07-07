# get-css-translated-position

Get position of DOM elements positioned with CSS translate

## install

```
npm install get-css-translated-position
```

## example

```javascript
var translatedPosition = require('get-css-translated-position')

// by default it doesn't account for element's offset
// on the page, just the value of its translation
translatedPosition(el) //=> {x: 5, y: 47}

// if you want it's position on the page pass the following option
translatedPosition(el, {includePageOffset: true}) //=> {x: 15, y: 147}
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

