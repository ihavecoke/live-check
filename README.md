# live-check

Some case we need check if some elements  on the document. so we can use `setInterval` check this `dom` length property like this:

```javascript
  if (dom.length) {
    // do something
  }
```

if `dom` on the document you can write your logic.

use `live-check` can easy to do that case.

### Install

```bash
npm install live-check

//or yarn 
yarn install live-check
```

### Your code

```javascript

// Check username dom exisit on document you can do this: 

import liveCheck from 'live-check'

liveCheck(()=> {
  document.querySelector(".username")
},{
  checkTimes: 10,
  checkInterval: 1*500
}).then(()=>{
  // Now you can operation the document here or implement you bussiness logic
}).catch(()=>{
  // oops the document not exist during in 10 * 1*500 millisecond over
})

```

### Options

| options | type | default | description |
| ------ | ------ | ------ | ------ |
| checkTimes | number | 500 | live query check `condition` times|
| checkInterval | number | 50(ms) | live query check one time interval|
