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
  title: '首页 | 橘子情感',
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
    index: [  // 首页
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
    page01: [  // 挽回爱情
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page01.js'
    ],
    page02: [  // 挽救婚姻
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page02.js'
    ],
    page03: [  // 定制爱情
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page03.js'
    ],
    page04: [  // 恋商提高
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page04.js'
    ],
    page05: [  // 服务介绍
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page05.js'
    ],
    page06: [  // 情感论坛
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page06.js'
    ],
    page07: [  // 权威专家
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page07.js'
    ],
    page08: [  // 关于我们
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page08.js'
    ],
    page09: [  // 嘉伟导师是本好书推荐
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/page09.js'
    ],

    // articles' entry bellow
    // 这里是文章入口
    a1_1: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a1/a1_1.js'
    ],
    a1_2: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a1/a1_2.js'
    ],
    a1_3: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a1/a1_3.js'
    ],
    a1_4: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a1/a1_4.js'
    ],
    a1_5: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a1/a1_5.js'
    ],
    a2_1: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a2/a2_1.js'
    ],
    a2_2: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a2/a2_2.js'
    ],
    a2_3: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a2/a2_3.js'
    ],
    a2_4: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a2/a2_4.js'
    ],
    a2_5: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a2/a2_5.js'
    ],
    a3_1: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a3/a3_1.js'
    ],
    a3_2: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a3/a3_2.js'
    ],
    a3_3: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a3/a3_3.js'
    ],
    a3_4: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a3/a3_4.js'
    ],
    a3_5: [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/entries/articles/a3/a3_5.js'
    ],

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
    new HtmlWebpackPlugin({  // 挽回爱情
      ...htmlWebpackPluginOptions,
      chunks: ['page01'],
      title: '挽回爱情 | 橘子情感',
      filename: 'page01/index.html'
    }),
    new HtmlWebpackPlugin({  // 挽救婚姻
      ...htmlWebpackPluginOptions,
      chunks: ['page02'],
      title: '挽救婚姻 | 橘子情感',
      filename: 'page02/index.html'
    }),
    new HtmlWebpackPlugin({  // 定制爱情
      ...htmlWebpackPluginOptions,
      chunks: ['page03'],
      title: '定制爱情 | 小鱼情感',
      filename: 'page03/index.html'
    }),
    new HtmlWebpackPlugin({  // 恋商提高
      ...htmlWebpackPluginOptions,
      chunks: ['page04'],
      title: '恋商提高 | 小鱼情感',
      filename: 'page04/index.html'
    }),
    new HtmlWebpackPlugin({  // 服务介绍
      ...htmlWebpackPluginOptions,
      chunks: ['page05'],
      title: '服务介绍 | 橘子情感',
      filename: 'page05/index.html'
    }),
    new HtmlWebpackPlugin({  // 情感论坛
      ...htmlWebpackPluginOptions,
      chunks: ['page06'],
      title: '情感论坛 | 橘子情感',
      filename: 'page06/index.html'
    }),
    new HtmlWebpackPlugin({  // 权威专家
      ...htmlWebpackPluginOptions,
      chunks: ['page07'],
      title: '权威专家 | 橘子情感',
      filename: 'page07/index.html'
    }),
    new HtmlWebpackPlugin({  // 关于我们
      ...htmlWebpackPluginOptions,
      chunks: ['page08'],
      title: '关于我们 | 橘子情感',
      filename: 'page08/index.html'
    }),
    new HtmlWebpackPlugin({  // 嘉伟导师十本好书推荐
      ...htmlWebpackPluginOptions,
      chunks: ['page09'],
      title: '嘉伟导师十本好书推荐 | 橘子情感',
      filename: 'page09/index.html'
    }),

    // articles bellow - a1
    new HtmlWebpackPlugin({  // 文章 - a1_1
      ...htmlWebpackPluginOptions,
      chunks: ['a1_1'],
      title: '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道 | 橘子情感',
      filename: 'articles/a1/a1_1/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a1_2
      ...htmlWebpackPluginOptions,
      chunks: ['a1_2'],
      title: '深陷苦恋，多次表白没有结果，幸亏遇到你 | 橘子情感',
      filename: 'articles/a1/a1_2/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a1_3
      ...htmlWebpackPluginOptions,
      chunks: ['a1_3'],
      title: '表白无果，只用了三十天逆袭 | 橘子情感',
      filename: 'articles/a1/a1_3/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a1_4
      ...htmlWebpackPluginOptions,
      chunks: ['a1_4'],
      title: '提升“恋爱价值感”，女人不会因跪求而回心转意 | 橘子情感',
      filename: 'articles/a1/a1_4/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a1_5
      ...htmlWebpackPluginOptions,
      chunks: ['a1_5'],
      title: '“没感觉”不可怕，三招教你挽回她 | 橘子情感',
      filename: 'articles/a1/a1_5/index.html'
    }),

    // articles bellow - a2
    new HtmlWebpackPlugin({  // 文章 - a2_1
      ...htmlWebpackPluginOptions,
      chunks: ['a2_1'],
      title: '百依百顺没有用，读懂女人心你才能挽回你的爱情 | 橘子情感',
      filename: 'articles/a2/a2_1/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a2_2
      ...htmlWebpackPluginOptions,
      chunks: ['a2_2'],
      title: '当你下跪都无法挽回心死女友时，你该试试“幽灵心态” | 橘子情感',
      filename: 'articles/a2/a2_2/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a2_3
      ...htmlWebpackPluginOptions,
      chunks: ['a2_3'],
      title: '挽回攻略：如何跟女朋友复联进行二次吸引恢复爱情？ | 橘子情感',
      filename: 'articles/a2/a2_3/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a2_4
      ...htmlWebpackPluginOptions,
      chunks: ['a2_4'],
      title: '情商低被拉黑分手，真实案例教你如何逆袭挽回爱情 | 橘子情感',
      filename: 'articles/a2/a2_4/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a2_5
      ...htmlWebpackPluginOptions,
      chunks: ['a2_5'],
      title: '女人说分手拉黑后给你机会，掌握攻略教你复联挽回爱情 | 橘子情感',
      filename: 'articles/a2/a2_5/index.html'
    }),

    // articles bellow - a3
    new HtmlWebpackPlugin({  // 文章 - a3_1
      ...htmlWebpackPluginOptions,
      chunks: ['a3_1'],
      title: '你还说你无法挽回爱情？这才是挽回的正确打开方式！ | 橘子情感',
      filename: 'articles/a3/a3_1/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a3_2
      ...htmlWebpackPluginOptions,
      chunks: ['a3_2'],
      title: '你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？ | 橘子情感',
      filename: 'articles/a3/a3_2/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a3_3
      ...htmlWebpackPluginOptions,
      chunks: ['a3_3'],
      title: '男人做好这关键的四点，就能快速挽回她！ | 橘子情感',
      filename: 'articles/a3/a3_3/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a3_4
      ...htmlWebpackPluginOptions,
      chunks: ['a3_4'],
      title: '警惕婚姻中的几大离婚前兆，解决情感危机 | 橘子情感',
      filename: 'articles/a3/a3_4/index.html'
    }),
    new HtmlWebpackPlugin({  // 文章 - a3_5
      ...htmlWebpackPluginOptions,
      chunks: ['a3_5'],
      title: '了解女人的爱情心理，分分钟破解拉黑复联成功，挽回爱情 | 橘子情感',
      filename: 'articles/a3/a3_5/index.html'
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
