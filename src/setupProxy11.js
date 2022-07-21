/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2022-07-21 10:35:55
 * Description: 直接在package.json设置 proxy选项不灵活, 故使用中间件方式
*************************************************************/
// 不需要在任何地方导入此文件。当您启动开发服务器时，它会自动注册
// 此文件仅支持 Node 的 JavaScript 语法。确保只使用受支持的语言功能（即不支持 Flow、ES 模块等）
// const createProxyMiddleware = require('http-proxy-middleware')

// // eslint-disable-next-line import/no-anonymous-default-export
// module.exports = function (app) {
//     app.use(createProxyMiddleware('/api', {
//         target: 'http://localhost:8090',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }
//     }))
// }
