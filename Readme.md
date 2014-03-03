
# method-supported

  Detect support for http methods in older browsers

## Installation

  Install with [component(1)](http://component.io):

    $ component install eivindfjeldstad/method-supported

## Example

```js

var supported = require('method-supported');

var req = supported('PATCH')
  ? new XMLHttpRequest()
  : new ActiveXObject('Microsoft.XMLHTTP');

req.open('PATCH', '/', true);

```

## License

  MIT
