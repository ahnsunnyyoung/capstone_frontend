const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/api',
        createProxyMiddleware(
            {
                target: "http://3.39.137.73:8080",
                pathRewrite: {
                  '^/api': '',
                },
                changeOrigin: true,
            }
        )
    )
}