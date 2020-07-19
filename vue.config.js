const path = require('path'); // 引入path模块
function resolve(dir) {
    return path.join(__dirname,dir) //path.join(_dirname)设置绝对路径
}

module.exports = {
    publicPath: '/',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8900',//后端接口地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/css/common.scss";`
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('public', resolve('public'))
    }
}