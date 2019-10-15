// 入口配置文件
// 设置单元测试测试对象路径
const path = require('path')
const scssBasePath = process.env.scssBasePath && process.env.scssBasePath.trim()
const scssAbsolutePath = path.join(path.resolve(), scssBasePath)
process.env.scssBasePath = scssAbsolutePath.split(path.sep).join('/')
global.scssBasePath = process.env.scssBasePath