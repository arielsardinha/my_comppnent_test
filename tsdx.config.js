// tsdx.config.js
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: 'default',
                    }),
                ],
                // extract: 'dist/styles.css',
                extract: path.resolve('dist/styles.css'), // Extrai para um arquivo .css
            })
        );
        return config;
    },
};
