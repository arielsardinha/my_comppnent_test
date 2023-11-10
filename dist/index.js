
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui_components.cjs.production.min.js')
} else {
  module.exports = require('./ui_components.cjs.development.js')
}
