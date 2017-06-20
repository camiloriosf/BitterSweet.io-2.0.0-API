'use strict';

var DEFAULT_ALLOW_METHODS = ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'];

var DEFAULT_ALLOW_HEADERS = ['X-Requested-With', 'Access-Control-Allow-Origin', 'X-HTTP-Method-Override', 'Content-Type', 'Authorization', 'Accept'];

var DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours

var DEFAULT_ORIGIN = '*';

var cors = function cors(options) {
  return function (handler) {
    return function (req, res) {
      var _ref = options || {},
          maxAge = _ref.maxAge,
          allowHeaders = _ref.allowHeaders,
          allowMethods = _ref.allowMethods,
          allowedOrigins = _ref.allowedOrigins,
          origin = req.headers.origin;

      res.setHeader('Access-Control-Max-Age', '' + (maxAge || DEFAULT_MAX_AGE_SECONDS));

      res.setHeader('Access-Control-Allow-Origin', DEFAULT_ORIGIN);

      if(allowedOrigins.indexOf(origin) > -1){
          res.setHeader('Access-Control-Allow-Origin', origin);
      }

      res.setHeader('Access-Control-Allow-Methods', (allowMethods || DEFAULT_ALLOW_METHODS).join(','));

      res.setHeader('Access-Control-Allow-Headers', (allowHeaders || DEFAULT_ALLOW_HEADERS).join(','));

      res.setHeader('Access-Control-Allow-Credentials', 'true');

      if (req.method === 'OPTIONS') {
        return {};
      }

      return handler(req, res);
    };
  };
};

module.exports = cors;