## webpack
### webpack plugin
 * html-webpack-plugin
 ```
 自动生成一个html文件并且导入js文件
 cnpm i html-webpack-plugin -D
 ```
 ```
 了解的plugin
 extract-text-webpack-plugin
 clean-webpack-plugin
 copy-webpack-plugin
 ```
### webpack loader
 * 告诉webpack什么文件用什么loader来处理
 * 比如:css后缀的文件用css.loader和style.loader来处理
 * babel-loader  babel-core
 ```
 解析es6语法的
 cnpm i babel-loader babel-core -D
 ```
 * css-loader  style-loader  postcss-loader
 ```
 解析css文件到js中的
 cnpm i css-loader style-loader postcss-loader -D
 ```
 * less-loader  sass-loader   node-loader
 ```
 处理less语法和sass语法
 cnpm i less-loader sass-loader node-loader -D
 ```
 * html-loader  ejs-loader  jade-loader
 ```
 用来处理模板语法的loader
 cnpm i html-loader ejs-loader jade-loader -D
 ```
 * file-loader  image-webpack-loader  url-loader
 ```
 处理资源的loader
 cnpm i file-loader image-webpack-loader url-loader -D
 ```
