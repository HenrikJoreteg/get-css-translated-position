var transformProperty = require('transform-property')
var getComputedStyle
var re = /matrix\((.*)\)/

if (typeof window !== 'undefined') {
  getComputedStyle = window.getComputedStyle
}

function getTranslatePosition(el, opts) {
  var left = 0
  var top = 0
  if (opts && opts.includePageOffset) {
    left = el.offsetLeft
    top = el.offsetLeft
  }
  var pos = re.exec(getComputedStyle(el)[transformProperty])[1].split(',').map(function (item) {
    return parseInt(item, 10)
  })

  return {
    x: left + pos[4],
    y: top + pos[5]
  }
}

if (!getComputedStyle) {
  module.exports = function () {}
} else {
  module.exports = getTranslatePosition
}
