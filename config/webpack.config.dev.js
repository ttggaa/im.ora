'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

const htmlWebpackPluginOptions = {
  inject: true,
  chunks: ['index'],
  title: '首页 | 小鱼情感',
  template: paths.appHtml
};

// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  devtool: 'cheap-module-source-map',
  // These are the "entry points" to our application.
  // This means they will be the "root" imports that are included in JS bundle.
  // The first two entry points enable "hot" CSS and auto-refreshes for JS.
  entry: {
    index: [
      // We ship a few polyfills by default:
      require.resolve('./polyfills'),
      // Include an alternative client for WebpackDevServer. A client's job is to
      // connect to WebpackDevServer by a socket and get notified about changes.
      // When you save a file, the client will either apply hot updates (in case
      // of CSS changes), or refresh the page (in case of JS changes). When you
      // make a syntax error, this client will display a syntax error overlay.
      // Note: instead of the default WebpackDevServer client, we use a custom one
      // to bring better experience for Create React App users. You can replace
      // the line below with these two lines if you prefer the stock client:
      // require.resolve('webpack-dev-server/client') + '?/',
      // require.resolve('webpack/hot/dev-server'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      // Finally, this is your app's code:
      // paths.appIndexJs,
      paths.appIndexJs
      // We include the app code last so that if there is a runtime error during
      // initialization, it doesn't blow up the WebpackDevServer client, and
      // changing JS code would still trigger a refresh.
    ],
    // about: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/about.js'
    // ],
    // topics: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/topics.js'
    // ],
    page01: [  // 小鱼简介(关于我们)
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page01.js'
    ],
    page02: [  // 服务范围(挽爱计划)
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page02.js'
    ],
    page03: [  // 权威团队(权威专家)
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page03.js'
    ],
    page04: [  // 成功案例
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page04.js'
    ],
    classify01: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/classify01.js'
    ],
    classify02: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/classify02.js'
    ],
    // classify03: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/classify03.js'
    // ],
    classify04: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/classify04.js'
    ],
    // classify05: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/classify05.js'
    // ],
    // classify06: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/classify06.js'
    // ],
    // classify07: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/classify07.js'
    // ],

    // articles' entry bellow
    // a1_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a1/a1_1.js'
    // ],
    // a1_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a1/a1_2.js'
    // ],
    // a1_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a1/a1_3.js'
    // ],
    // a1_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a1/a1_4.js'
    // ],
    // a1_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a1/a1_5.js'
    // ],
    // a2_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a2/a2_1.js'
    // ],
    // a2_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a2/a2_2.js'
    // ],
    // a2_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a2/a2_3.js'
    // ],
    // a2_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a2/a2_4.js'
    // ],
    // a2_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a2/a2_5.js'
    // ],
    // a3_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a3/a3_1.js'
    // ],
    // a3_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a3/a3_2.js'
    // ],
    // a3_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a3/a3_3.js'
    // ],
    // a3_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a3/a3_4.js'
    // ],
    // a3_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a3/a3_5.js'
    // ],
    // a4_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a4/a4_1.js'
    // ],
    // a4_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a4/a4_2.js'
    // ],
    // a4_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a4/a4_3.js'
    // ],
    // a4_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a4/a4_4.js'
    // ],
    // a4_5: [
    //  require.resolve('./polyfills'),
    //  require.resolve('react-dev-utils/webpackHotDevClient'),
    //  paths.appSrc + '/entries/articles/a4/a4_5.js'
    // ],
    // a5_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a5/a5_1.js'
    // ],
    // a5_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a5/a5_2.js'
    // ],
    // a5_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a5/a5_3.js'
    // ],
    // a5_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a5/a5_4.js'
    // ],
    // a5_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a5/a5_5.js'
    // ],
    // a6_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a6/a6_1.js'
    // ],
    // a6_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a6/a6_2.js'
    // ],
    // a6_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a6/a6_3.js'
    // ],
    // a6_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a6/a6_4.js'
    // ],
    // a6_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a6/a6_5.js'
    // ],
    // a7_1: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a7/a7_1.js'
    // ],
    // a7_2: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a7/a7_2.js'
    // ],
    // a7_3: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a7/a7_3.js'
    // ],
    // a7_4: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a7/a7_4.js'
    // ],
    // a7_5: [
    //   require.resolve('./polyfills'),
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   paths.appSrc + '/entries/articles/a7/a7_5.js'
    // ],
    help: [  // 免费咨询
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/help.js'
    ]
  },
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    // output.pathinfo
    //   告知 webpack 在 bundle 中引入`所包含模块的信息`的相关注释
    //   不应该用于生产环境，但是对于阅读开发环境中的生成代码极其有用
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    // outpu.filename
    //   决定每个输出 bundle 的名称，这些 bundle 将被写到 output.path 选项指定
    //   的目录下
    filename: 'static/js/[name].bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    // output.chunkFilename
    //   决定非入口(non-entry) chunk 的文件名称
    chunkFilename: 'static/js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // TODO: Disable require.ensure as it's not a standard language feature.
      // We are waiting for https://github.com/facebookincubator/create-react-app/issues/2176.
      // { parser: { requireEnsure: false } },

      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),
              
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          // A missing `test` is equivalent to a match.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          },
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },

	  // html-loader
	  {
	    test: /\.md$/,
	    use: ['html-loader']
	  },

          // "file" loader makes sure those assets get served by WebpackDevServer.
          // When you `import` an asset, you get its (virtual) filename.
          // In production, they would get copied to the `build` folder.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In development, this will be an empty string.
    new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({...htmlWebpackPluginOptions}),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['about'],
    //   title: ['小鱼简介 | 小鱼情感'],
    //   filename: 'about/index.html'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['topics'],
    //   title: '话题',
    //   filename: 'topics/index.html'
    // }),
    new HtmlWebpackPlugin({  // 小鱼简介(关于我们)
      ...htmlWebpackPluginOptions,
      chunks: ['page01'],
      title: 'Page01',
      filename: 'page01/index.html'
    }),
    new HtmlWebpackPlugin({  // 服务范围(挽爱计划)
      ...htmlWebpackPluginOptions,
      chunks: ['page02'],
      title: '服务范围 | 小鱼情感',
      filename: 'page02/index.html'
    }),
    new HtmlWebpackPlugin({  // 权威团队(权威专家)
      ...htmlWebpackPluginOptions,
      chunks: ['page03'],
      title: '权威团队 | 小鱼情感',
      filename: 'page03/index.html'
    }),
    new HtmlWebpackPlugin({  // 成功案例
      ...htmlWebpackPluginOptions,
      chunks: ['page04'],
      title: '成功案例 | 小鱼情感',
      filename: 'page04/index.html'
    }),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginOptions,
      chunks: ['classify01'],
      title: '婚姻破裂 | 小鱼情感',
      filename: 'classify01/index.html'
    }),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginOptions,
      chunks: ['classify02'],
      title: '异地恋情 | 小鱼情感',
      filename: 'classify02/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify03'],
    //   title: '性格不合 | 小鱼情感',
    //   filename: 'classify03/index.html'
    // }),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginOptions,
      chunks: ['classify04'],
      title: '恋人劈腿 | 小鱼情感',
      filename: 'classify04/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify05'],
    //   title: '感情淡化 | 小鱼情感',
    //   filename: 'classify05/index.html'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify06'],
    //   title: '挽回干货 | 小鱼情感',
    //   filename: 'classify06/index.html'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify07'],
    //   title: '矛盾积累 | 小鱼情感',
    //   filename: 'classify07/index.html'
    // }),

    // articles bellow - a1
    // new HtmlWebpackPlugin({  // 文章 - a1_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a1_1'],
    //   title: '男人你听我说，你所追求的是“保姆式妻子”和“守寡式婚姻” | 小鹿情感',
    //   filename: 'articles/a1/a1_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a1_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a1_2'],
    //   title: '傻女人，你真以为用孩子就能留住婚姻？！ | 小鹿情感',
    //   filename: 'articles/a1/a1_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a1_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a1_3'],
    //   title: '老公爱聊骚，我除了忍别无他法 | 小鹿情感',
    //   filename: 'articles/a1/a1_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a1_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a1_4'],
    //   title: '原配实力虐小三，男人想复婚只能靠跪舔吗？ | 小鹿情感',
    //   filename: 'articles/a1/a1_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a1_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a1_5'],
    //   title: '你的面子值钱，爱人的尊严就分文不值吗？ | 小鹿情感',
    //   filename: 'articles/a1/a1_5/index.html'
    // }),

    // articles bellow - a2
    // new HtmlWebpackPlugin({  // 文章 - a2_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a2_1'],
    //   title: '：异地恋分手：别把原因一味归咎给距离！ | 小鹿情感',
    //   filename: 'articles/a2/a2_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a2_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a2_2'],
    //   title: '：两年异地恋，三个月见一面，找个小姐怎么了？ | 小鹿情感',
    //   filename: 'articles/a2/a2_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a2_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a2_3'],
    //   title: '：异地恋是真的不容易，你看我这满满的火车票就知道了 | 小鹿情感',
    //   filename: 'articles/a2/a2_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a2_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a2_4'],
    //   title: '：一段被包养的异地恋情，还有机会挽回吗？ | 小鹿情感',
    //   filename: 'articles/a2/a2_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a2_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a2_5'],
    //   title: '：异地恋，到底有多煎熬？网友：累了，真的累了 | 小鹿情感',
    //   filename: 'articles/a2/a2_5/index.html'
    // }),

    // articles bellow - a3
    // new HtmlWebpackPlugin({  // 文章 - a3_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a3_1'],
    //   title: '：面对“性格不合 对你没感觉”的分手，我该如何挽回？ | 小鹿情感',
    //   filename: 'articles/a3/a3_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a3_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a3_2'],
    //   title: '：优柔寡断的男人如何改善性格成功挽回？ | 小鹿情感',
    //   filename: 'articles/a3/a3_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a3_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a3_3'],
    //   title: '：“分手了，都怪我性格太内向了！” | 小鹿情感',
    //   filename: 'articles/a3/a3_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a3_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a3_4'],
    //   title: '：别真信了“性格不合”的分手理由，你必须要看清这背后隐藏的问题 | 小鹿情感',
    //   filename: 'articles/a3/a3_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a3_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a3_5'],
    //   title: '：性格偏执型恋人追求爱情完美 最终断送幸福 | 小鹿情感',
    //   filename: 'articles/a3/a3_5/index.html'
    // }),

    // articles bellow - a4
    // new HtmlWebpackPlugin({  // 文章 - a4_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a4_1'],
    //   title: '：文章标题 | 小鹿情感',
    //   filename: 'articles/a4/a4_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a4_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a4_2'],
    //   title: '：文章标题 | 小鹿情感',
    //   filename: 'articles/a4/a4_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a4_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a4_3'],
    //   title: '：文章标题 | 小鹿情感',
    //   filename: 'articles/a4/a4_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a4_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a4_4'],
    //   title: '：文章标题 | 小鹿情感',
    //   filename: 'articles/a4/a4_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a4_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a4_5'],
    //   title: '：文章标题 | 小鹿情感',
    //   filename: 'articles/a4/a4_5/index.html'
    // }),

    // articles bellow - a5
    // new HtmlWebpackPlugin({  // 文章 - a5_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a5_1'],
    //   title: '新鲜感褪去后，爱情该何去何从？ | 小鹿情感',
    //   filename: 'articles/a5/a5_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a5_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a5_2'],
    //   title: '情侣间新鲜感殆尽，除了分手我们还能做什么？ | 小鹿情感',
    //   filename: 'articles/a5/a5_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a5_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a5_3'],
    //   title: '七年感情一朝散，我们的爱情“过期”了 | 小鹿情感',
    //   filename: 'articles/a5/a5_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a5_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a5_4'],
    //   title: '爱情没有新鲜感 恩爱情侣告诉你需要三种“距离感”来拯救 | 小鹿情感',
    //   filename: 'articles/a5/a5_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a5_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a5_5'],
    //   title: '面对新鲜感缺失该怎么办？ | 小鹿情感',
    //   filename: 'articles/a5/a5_5/index.html'
    // }),

    // articles bellow - a6
    // new HtmlWebpackPlugin({  // 文章 - a6_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a6_1'],
    //   title: '情侣分手后复合的概率是82%，你为什么失败了？ | 小鹿情感',
    //   filename: 'articles/a6/a6_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a6_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a6_2'],
    //   title: '当爱情被直男癌症状击垮 我该如何挽回？ | 小鹿情感',
    //   filename: 'articles/a6/a6_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a6_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a6_3'],
    //   title: '当心了！男人只想玩暧昧的几种表现，女生必看！ | 小鹿情感',
    //   filename: 'articles/a6/a6_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a6_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a6_4'],
    //   title: '因“依恋损伤”而分手，如何快速走出心理创伤？ | 小鹿情感',
    //   filename: 'articles/a6/a6_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a6_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a6_5'],
    //   title: '谈了100次恋爱屡战屡败？因为你陷入了“低自尊型恋爱” | 小鹿情感',
    //   filename: 'articles/a6/a6_5/index.html'
    // }),

    // articles bellow - a7
    // new HtmlWebpackPlugin({  // 文章 - a7_1
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a7_1'],
    //   title: '冷战，只会让矛盾长期积压 | 小鹿情感',
    //   filename: 'articles/a7/a7_1/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a7_2
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a7_2'],
    //   title: '小矛盾堆积成大问题，分手来的猝不及防 | 小鹿情感',
    //   filename: 'articles/a7/a7_2/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a7_3
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a7_3'],
    //   title: '“破窗效应”告诉你：小事背后隐藏分手本质 | 小鹿情感',
    //   filename: 'articles/a7/a7_3/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a7_4
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a7_4'],
    //   title: '小矛盾膨胀激化，最终引发分手，你做错了什么？ | 小鹿情感',
    //   filename: 'articles/a7/a7_4/index.html'
    // }),
    // new HtmlWebpackPlugin({  // 文章 - a7_5
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['a7_5'],
    //   title: '因为小事而分手？那是因为你不知道她忍了多久 | 小鹿情感',
    //   filename: 'articles/a7/a7_5/index.html'
    // }),
    //
    new HtmlWebpackPlugin({  // 免费咨询
      ...htmlWebpackPluginOptions,
      chunks: ['help'],
      title: '免费咨询 | 小鱼情感',
      filename: 'help/index.html'
    }),

    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin(env.stringified),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
};
