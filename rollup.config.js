import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';
// import basePlugin from './rollupBasePluginConfig';

const external = ['react'];
const outputTypes = [
  { file: './dist/es/index.js', format: 'es' },
];

const tasks = outputTypes.map(output => ({
  // 入口 可以是一个字符串，也可以是对象
  input: {
    index: 'src/components/index.js',
  },
  // 出口
  output: {
    dir: 'es', // 可以是 dir 表示输出目录 也可以是 file 表示输出文件
    format: 'es', // 输出的格式 可以是 cjs commonJs 规范 | es es Module 规范 | iife 浏览器可引入的规范
    sourceMap: true,
    entryFileNames: 'index.js',
    exports: 'named'
  },
  experimentalCodeSplitting: true,
  // 需要引入的插件
  plugins: [
    clear({
      targets: ['es']
    }),
    postcss({ minimize: true, }),
    babel({
      exclude: 'node_modules/**', // 只编译源代码
      runtimeHelpers: true,
      presets: [['@babel/env', { modules: false }], '@babel/preset-react'],
			plugins: [
				[
					'@babel/plugin-transform-runtime',
					{
						corejs: false,
						helpers: false,
						regenerator: true,
						useESModules: false
					}
				],
				['@babel/plugin-proposal-class-properties', { loose: false }]
			]
    })
  ],
  // 将模块视为外部模块，不会打包在库中
  external: id => external.some(e => id.indexOf(e) === 0),
  // 文件监听
  watch: {
    include: 'src/**',
    clearScreen: true
  }
}));

export default tasks;