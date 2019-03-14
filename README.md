# my-cruise

> one server management software's interface
before running this program, please make sure your node version is over 6.0.0 and npm is over 3.0.0
there are some modules in my project you can uncompress them before you start to run it

## Build Setup

``` bash mock-server ,please make sure the server is running before running this project
# install dependencies
npm install

# serve with hot reload at http://localhost:3001/agents

npm run dev


``` 
Then you can access `http://localhost:3001/agents/` to see if the server is started correctly.


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9500
npm run dev

``` 


``` Unfinished
# run unit tests
npm run unit

# run all tests
npm test
```


``` some problems about this homework
1.这个例子中，在服务器列表中，由于我把服务器信息写作一个组件：dbInfo.vue,所以认为弹框应该是组件的一部分，
这样就必然会再一个页面出现多个dialog，故为了符合要求，把子组件信息传递到父级，只在父级写了一个dialog
若在实际开发中，认为组件拥有自己私有的独立的dialog，并不会有太大问题
2.此项目引入element-ui，意在快速开发，运用到了它的layout 布局 和 确认弹框、提示弹框
homework要求弹框及其他样式  均为 css + html 实现
3.项目中的颜色、字体大小均按照ui 示意规范实现，但由于不是精准的原型图（psd），某些尺寸为肉眼估计，会有与原型图有出入。
建议：今后作业中可加入精准的原型图（psd）

``` 


