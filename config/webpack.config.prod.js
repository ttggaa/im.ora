'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

// ExtractTextPlugin expects the build output to be flat.
// (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// However, our output is structured with css, js and media folders.
// To have this structure working with relative paths, we have to use custom options.
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
    { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

const htmlWebpackPluginOptions = {
  inject: true,
  chunks: ['index'],
  template: paths.appHtml,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
  title: '首页 | 橘子情感'
};

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: shouldUseSourceMap ? 'source-map' : false,
  // In production, we only want to load the polyfills and the app code.
  entry: {
    index: [  // 首页
      require.resolve('./polyfills'),
      // paths.appIndexJs
      paths.appIndexJs
    ],
    page01: [  // 挽回爱情
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page01.js'
    ],
    page02: [  // 挽救婚姻
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page02.js'
    ],
    page03: [  // 定制爱情
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page03.js'
    ],
    page04: [  // 恋商提高
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page04.js'
    ],
    page05: [  // 服务介绍
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page05.js'
    ],
    page06: [  // 情感论坛
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page06.js'
    ],
    page07: [  // 权威专家
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page07.js'
    ],
    page08: [  // 关于我们
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page08.js'
    ],
    page09: [  // 嘉伟导师十本好书推荐
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/page09.js'
    ],
    // classify01: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify01.js'
    // ],
    // classify02: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify02.js'
    // ],
    // classify03: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify03.js'
    // ],
    // classify04: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify04.js'
    // ],
    // classify05: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify05.js'
    // ],
    // classify06: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify06.js'
    // ],
    // classify07: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/classify07.js'
    // ],

    // articles' entry bellow
    // a1_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a1/a1_1.js'
    // ],
    // a1_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a1/a1_2.js'
    // ],
    // a1_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a1/a1_3.js'
    // ],
    // a1_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a1/a1_4.js'
    // ],
    // a1_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a1/a1_5.js'
    // ],
    // a2_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a2/a2_1.js'
    // ],
    // a2_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a2/a2_2.js'
    // ],
    // a2_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a2/a2_3.js'
    // ],
    // a2_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a2/a2_4.js'
    // ],
    // a2_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a2/a2_5.js'
    // ],
    // a3_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a3/a3_1.js'
    // ],
    // a3_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a3/a3_2.js'
    // ],
    // a3_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a3/a3_3.js'
    // ],
    // a3_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a3/a3_4.js'
    // ],
    // a3_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a3/a3_5.js'
    // ],
    // a4_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a4/a4_1.js'
    // ],
    // a4_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a4/a4_2.js'
    // ],
    // a4_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a4/a4_3.js'
    // ],
    // a4_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a4/a4_4.js'
    // ],
    // a4_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a4/a4_5.js'
    // ],
    // a5_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a5/a5_1.js'
    // ],
    // a5_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a5/a5_2.js'
    // ],
    // a5_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a5/a5_3.js'
    // ],
    // a5_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a5/a5_4.js'
    // ],
    // a5_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a5/a5_5.js'
    // ],
    // a6_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a6/a6_1.js'
    // ],
    // a6_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a6/a6_2.js'
    // ],
    // a6_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a6/a6_3.js'
    // ],
    // a6_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a6/a6_4.js'
    // ],
    // a6_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a6/a6_5.js'
    // ],
    // a7_1: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a7/a7_1.js'
    // ],
    // a7_2: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a7/a7_2.js'
    // ],
    // a7_3: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a7/a7_3.js'
    // ],
    // a7_4: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a7/a7_4.js'
    // ],
    // a7_5: [
    //   require.resolve('./polyfills'),
    //   paths.appSrc + '/entries/articles/a7/a7_5.js'
    // ],
  },
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      path
        .relative(paths.appSrc, info.absoluteResourcePath)
        .replace(/\\/g, '/'),
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
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
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
              
              compact: true,
            },
          },

	  // html-loader
	  {
	    test: /\.md$/,
	    use: ['html-loader']
	  },

          // The notation here is somewhat confusing.
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader normally turns CSS into JS modules injecting <style>,
          // but unlike in development configuration, we do something different.
          // `ExtractTextPlugin` first applies the "postcss" and "css" loaders
          // (second argument), then grabs the result CSS and puts it into a
          // separate file in our build process. This way we actually ship
          // a single CSS file in production instead of JS code injecting <style>
          // tags. If you use code splitting, however, any async bundles will still
          // use the "style" loader inside the async code so CSS from them won't be
          // in the main CSS file.
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
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
                extractTextPluginOptions
              )
            ),
            // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
          },
          // "file" loader makes sure assets end up in the `build` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In production, it will be an empty string unless you specify "homepage"
    // in `package.json`, in which case it will be the pathname of that URL.
    new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({...htmlWebpackPluginOptions}),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['about'],
    //   filename: 'about/index.html',
    //   title: '关于'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['topics'],
    //   filename: 'topics/index.html',
    //   title: '话题'
    // }),

    // pages bellow
    new HtmlWebpackPlugin({  // 挽回爱情
      ...htmlWebpackPluginOptions,
      chunks: ['page01'],
      filename: 'page01/index.html',
      title: '挽回爱情 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 挽救婚姻
      ...htmlWebpackPluginOptions,
      chunks: ['page02'],
      filename: 'page02/index.html',
      title: '挽救婚姻 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 定制爱情
      ...htmlWebpackPluginOptions,
      chunks: ['page03'],
      filename: 'page03/index.html',
      title: '定制爱情 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 恋商提高
      ...htmlWebpackPluginOptions,
      chunks: ['page04'],
      filename: 'page04/index.html',
      title: '恋商提高 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 服务介绍
      ...htmlWebpackPluginOptions,
      chunks: ['page05'],
      filename: 'page05/index.html',
      title: '服务介绍 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 情感论坛
      ...htmlWebpackPluginOptions,
      chunks: ['page06'],
      filename: 'page06/index.html',
      title: '情感论坛 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 权威专家
      ...htmlWebpackPluginOptions,
      chunks: ['page07'],
      filename: 'page07/index.html',
      title: '权威专家 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 关于我们
      ...htmlWebpackPluginOptions,
      chunks: ['page08'],
      filename: 'page08/index.html',
      title: '关于我们 | 橘子情感'
    }),
    new HtmlWebpackPlugin({  // 嘉伟导师十本好书推荐
      ...htmlWebpackPluginOptions,
      chunks: ['page09'],
      filename: 'page09/index.html',
      title: '嘉伟导师十本好书推荐 | 橘子情感'
    }),

    // classfies bellow
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify01'],
    //   filename: 'classify01/index.html',
    //   title: 'Classify01'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify02'],
    //   filename: 'classify02/index.html',
    //   title: 'Classify02'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify03'],
    //   filename: 'classify03/index.html',
    //   title: 'Classify03'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify04'],
    //   filename: 'classify04/index.html',
    //   title: 'Classify04'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify05'],
    //   filename: 'classify05/index.html',
    //   title: 'Classify05'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify06'],
    //   filename: 'classify06/index.html',
    //   title: 'Classify06'
    // }),
    // new HtmlWebpackPlugin({
    //   ...htmlWebpackPluginOptions,
    //   chunks: ['classify07'],
    //   filename: 'classify07/index.html',
    //   title: 'Classify07'
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

    // // articles bellow - a2
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

    // // articles bellow - a6
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

    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin(env.stringified),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        // Disabled because of an issue with Uglify breaking seemingly valid code:
        // https://github.com/facebookincubator/create-react-app/issues/2376
        // Pending further investigation:
        // https://github.com/mishoo/UglifyJS2/issues/2011
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        // Turned on because emoji and regex is not minified properly using default
        // https://github.com/facebookincubator/create-react-app/issues/2488
        ascii_only: true,
      },
      sourceMap: shouldUseSourceMap,
    }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: cssFilename,
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    // Generate a service worker script that will precache, and keep up to date,
    // the HTML & assets that are part of the Webpack build.
    new SWPrecacheWebpackPlugin({
      // By default, a cache-busting query parameter is appended to requests
      // used to populate the caches, to ensure the responses are fresh.
      // If a URL is already hashed by Webpack, then there is no concern
      // about it being stale, and the cache-busting can be skipped.
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        if (message.indexOf('Skipping static resource') === 0) {
          // This message obscures real errors so we ignore it.
          // https://github.com/facebookincubator/create-react-app/issues/2612
          return;
        }
        console.log(message);
      },
      minify: true,
      // For unknown URLs, fallback to the index page
      navigateFallback: publicUrl + '/index.html',
      // Ignores URLs starting from /__ (useful for Firebase):
      // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      // Don't precache sourcemaps (they're large) and build asset manifest:
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
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
};
