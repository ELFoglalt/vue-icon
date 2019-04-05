const path = require('path');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const plugins = [babel()]

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
}

export default [{
    input: resolve('../src/vue-feather-plugin.js'),
    plugins,
    output: {
        format: 'cjs',
        file: resolve('../lib/vue-feather-plugin.js')
    }
}, {
    input: resolve('../src/vue-feather.js'),
    plugins,
    output: {
        format: 'cjs',
        file: resolve('../lib/vue-feather.js')
    }
}, {
    input: resolve('../src/vue-feather-iife.js'),
    plugins: [babel(), uglify()],
    output: {
        format: 'iife',
        file: resolve('../lib/vue-feather.min.js'),
        globals: {
            Vue: 'Vue'
        }
    }
}, {
    input: resolve('../src/feather-icons.js'),
    plugins,
    output: {
        format: 'cjs',
        file: resolve('../lib/feather-icons.js')
    }
}]
