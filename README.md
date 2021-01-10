# livequery

Some case we need check if `Dom` on the document. so that we can use `setInterval` check this `dom` length property, like this:

```javascript
if (dom.length) {
  // do something
}
```

if `dom` on the document you can do what you want to do.

use `livequery` can easy to do that case.

### Install

```bash
npm install live-query

//or yarn 
yarn install live-query
```

### Your code

```javascript

// i you want to check dom on the document use this

import liveQuery from 'live-query'

liveQuery(()=> {
  document.querySelector(".username")
},{
  checkTimes: 10,
  checkInterval: 1*500
}).then(()=>{
  // now you can operation the document here or implement you bussiness logic
}).catch(()=>{
  // oops the document not exist the `username` dom with class 
})

```

### Options

| options | type | default | description |
| ------ | ------ | ------ | ------ |
| checkTimes | number | 500 | live query check `condition` times|
| checkInterval | number | 50(ms) | live query check one time interval|
