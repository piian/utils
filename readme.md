
# 这是潘逸安的个人前端工具


## Installation

Using npm:
```shell
$ npm i -g ppiian-utils
$ npm i ppiian-utils
```
Note: add --save if you are using npm < 5.0.0

In Node.js:
```js
// 引入工具
import utils from 'ppiian-utils'
var response = utils.http.get('api/products')

// 或者引入http
import http from 'ppiian-utils/http'

// 或者引入message
import message from 'ppiian-utils/message'
message.text('message') //  text, success, warning, error

// 或者引入toast
import toast from 'ppiian-utils/toast'
toast.text('message') //  text, success, warning, error, loading

```
