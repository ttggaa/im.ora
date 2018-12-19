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
  entry: {  // 这里是每个页面的入口
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

    // articles' entry bellow
    // 这里是文章页面的入口
    a1_1: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a1/a1_1.js'
    ],
    a1_2: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a1/a1_2.js'
    ],
    a1_3: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a1/a1_3.js'
    ],
    a1_4: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a1/a1_4.js'
    ],
    a1_5: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a1/a1_5.js'
    ],
    a2_1: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a2/a2_1.js'
    ],
    a2_2: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a2/a2_2.js'
    ],
    a2_3: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a2/a2_3.js'
    ],
    a2_4: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a2/a2_4.js'
    ],
    a2_5: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a2/a2_5.js'
    ],
    a3_1: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a3/a3_1.js'
    ],
    a3_2: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a3/a3_2.js'
    ],
    a3_3: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a3/a3_3.js'
    ],
    a3_4: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a3/a3_4.js'
    ],
    a3_5: [
      require.resolve('./polyfills'),
      paths.appSrc + '/entries/articles/a3/a3_5.js'
    ]

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
  plugins: [  // 这里配置每个页面
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
