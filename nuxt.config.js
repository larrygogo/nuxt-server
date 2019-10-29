module.exports = {
    // 客户端文件目录
    srcDir: 'client/',
    // 存放环境变量
    env: {

    },
    // 配置web头部信息
    head: {
        titleTemplate: '%s - Nuxt.js',
        meta: [
            { lang: 'zh-cn' },
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },
    css: [],
    dev: (process.env.NODE_ENV !== 'production'),
    server: {
        host: '127.0.0.1',
        port: '3001',
        timing: {
            total: true
        }
    }
}