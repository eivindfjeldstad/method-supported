var cache = {};

/**
 * Detect support for `method`
 */

module.exports = function (method) {
  method = method.toUpperCase();  
  if (cache[method]) return cache[method];
  
  try {
    var req = new window.XMLHttpRequest();
    req.open(method, '/', true);
    req.abort();
  } catch (err) {
    return cache[method] = false;
  }
  
  return cache[method] = true;
};