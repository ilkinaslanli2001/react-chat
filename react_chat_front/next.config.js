const withReactSvg = require('next-react-svg')
const path = require('path')
const withImages = require("next-images");
const withPlugins = require('next-compose-plugins')




const imagePlugin = withImages({
    images: {
        domains: ['127.0.0.1']
    },
    webpack(config, options) {
        return config;
    }
});

const svgPlugin = withReactSvg({
    include: path.resolve(__dirname, 'src/assets/svg'),
})


module.exports = withPlugins([imagePlugin, svgPlugin])

