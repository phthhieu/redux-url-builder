function urlBuilderForSelector(domainSelector) {
  var parts = [];
  var proxy = new Proxy(function(state) {
    var domain = domainSelector(state);
    return domain + '/' + parts.join('/');
  }, {
    has: function() {
      return true;
    },
    get: function(object, prop) {
      parts.push(prop);
      return proxy;
    },
  });
  return proxy;
}

export default urlBuilderForSelector;
