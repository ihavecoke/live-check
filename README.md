# live-check

Some case we need check if `Dom` on the document. so that we can use `setInterval` check this `dom` length property, like this:

```javascript
if (dom.length) {
  // do something
}
```

if `dom` on the document you can do what you want to do.

use `live-check` can easy to do that case.

### Install

```bash
npm install live-check

//or yarn 
yarn install live-check
```

### Your code

```javascript

// i you want to check dom on the document use this

import liveCheck from 'live-check'

liveCheck(()=> {
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
