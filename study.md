### manifest.json ###

https://developer.mozilla.org/zh-CN/docs/Web/Manifest
```
1. 移动App的配置文件, 和 Web app 配置相关
2. 将Web应用程序安装到设备的主屏幕上, 从而为用户提供更快的访问权限和更丰富的体验
3. 用于指定应用的显示名称、图标、应用入口文件地址及需要使用的设备权限等信息
4. 是扩展的配置文件，指明了扩展的各种信息
5. 使用方式：<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
6. * iphone手机配置web app图标：<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
```
|  property | description |
|  ----     |  ----       |
|  short_name  |  为应用程序提供简短易读的名称, 当没有足够空间显示全名时使用  |
|  name  |  为应用程序提供一个人类可读的名称  |
|  background_color |  主要用于在样式表加载之前, 当加载 manifest, 浏览器可以用来绘制 web 应用程序的背景颜色。在启动 web 应用程序和加载应用程序的内容之间创建了一个平滑的过渡 |
|  icons |  指定可在各种环境中用作应用程序图标的图像对象数组 |
|  start_url  |  指定用户从设备启动应用程序时加载的 URL  |
|  description |  提供有关Web应用程序的一般描述 |
|  display | 定义开发人员对 Web 应用程序的首选显示模式 (standalone, fullscreen, browser...) |

----------
### serviceWorker.js ####
```
1. PWA 全称 Progressive Web App, 即渐进式 WEB 应用
2. 一个 PWA 应用首先是一个网页,可以通过 Web 技术编写出一个网页应用
3. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能
4. Web App Manifest, Service Worker, Notifications API, Web Push
5. service worker 是实现 PWA 理念的核心技术支持
6. 这种 Web 存在的形式,我们也称之为是 Web App
7. PWA 解决了那些问题

1. 可以添加至主屏幕, 点击主屏幕图标可以实现启动动画及隐藏地址栏
2. 实现离线缓存功能, 即使用户手机没有网络,依然可以使用一些离线功能
3. 实现消息推送
4. 等等一系列类似于 Native App 相关的功能
5. 市面上大部分web项目使用pwa 主要在于使用service worker 的cache相关缓存及manifest可配置桌面应用
```

---------
###  reportWebVitals.js  ###
```
检测用户体验的标准, 通过 reportWebVitals(console.warn) 输出显示
使用reportWebVitals函数，您可以将任何结果发送到分析端点，以测量和跟踪站点上的实际用户性能
```

---------
###  tsconfig.js  ###
```
该文件指定编译项目所需的根文件和编译器的选项
```
|  property  |  value  |  description  |
|  ------    |  -----  |  ------       |
|  compilerOptions.incremental |  true  |  TS编译器在第一次编译之后会生成一个存储编译信息的文件, 第二次编译会在第一次的基础上进行增量编译, 提高编译的速度  |
|  compilerOptions.diagnostics |  true  |  打印诊断信息  |
|  compilerOptions.target      |  'ES6' |  目标语言的版本  |
|  compilerOptions.module      |  'CommonJS'/'esnext'  |  生成代码的模板标准  |
|  compilerOptions.lib         |  ['DOM', 'ES2015', 'ES2019.Array'] |  TS需要引用的库, 即声明文件  |
|  compilerOptions.allowJS     |  true  |  允许编译器编译JS, JSX文件   |
|  compilerOptions.baseUrl  |  './' / 'src'  |  解析非相对模块的基地址, 默认是当前目录 |
|  compilerOptions.removeComments |  true  |  删除注释  |
|  compilerOptions.noEmit  |  true  |  不输出文件, 即编译后不会生成任何JS文件  |
|  compilerOptions.jsx   |  'react-jsx'  |  指定jsx格式  |
|  compilerOptions.noFallthroughCasesInSwitch  |  true  |  防止switch语句贯穿,即如果没有break语句后面不会执行  |
|  compilerOptions.esModuleInterop  |  true  |   允许export= 导出, 由import from 导入   |
|  compilerOptions.moduleResolution | 'node' |   模块解析策略,TS默认用node的解析策略  |
|  include  |  ['src']  |  指定要编译的路径列表  |

---------
###  .jsx / .tsx  ###
```
1. Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用
```
