function urlBuilderForString(domainString) {
  var parts = [];
  var proxy = new Proxy(function() {
    return domainString + '/' + parts.join('/');
    return returnValue;
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

export default urlBuilderForString;
