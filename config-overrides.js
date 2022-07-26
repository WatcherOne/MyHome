const path = require('path')
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    adjustStyleLoaders,
    addPostcssPlugins
} = require('customize-cra')

module.exports = {
    webpack: override(
        addDecoratorsLegacy(),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src')
        }),
        adjustStyleLoaders(rule => {
            if (rule.test.toString().includes('scss')) {
                rule.use.push({
                    loader: require.resolve('sass-resources-loader'),
                    options: {
                        resources: './src/assets/css/variables.scss'
                    }
                })
            }
        }),
        addPostcssPlugins([
            require('postcss-pxtorem')({
                rootValue: 37.5,
                propList: ['*'],
                minPixelValue: 2
            })
        ])
    )
}
