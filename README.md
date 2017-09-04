# redux-url-builder

## Install
```
npm install redux-url-builder
```

## Usage

Building an url easier, for example:

### Build an url with a normal string
```
import urlBuilder from 'redux-url-builder';

const resourceUrl = urlBuilder('/api/v1').resources.getList();
// => /api/v1/resources/getList
```

### Build an url with a redux selector
```
import urlBuilder from 'redux-url-builder';

const state = {
  domain: '/api/v1',
};
const domain = ({ domain }) => domain;
const resourceUrl = urlBuilder(domain).resources.getList();
// => /api/v1/resources/getList
```
