var assign = require('lodash/assign')
var pick = require('lodash/pick')

/**
 * extracts relevant information from error into a plain javascript object
 * @param  {Error} err error to be serialized
 * @return {Object} serialized error
 */
function serializeError (err) {
    return assign({}, pick(err, 'message', 'stack'), err)
}

exports.serializeError = serializeError
