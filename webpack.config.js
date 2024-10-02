const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  stats:{
    children:true
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,

    // historyApiFallback: true,
  },
  entry: {
    index:path.resolve(__dirname, 'src', 'pages', 'index.js'),
    privacy:path.resolve(__dirname, 'src', 'pages', 'privacy.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name]/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
    // publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'index.html'),
      output:'index.html',
      filename:'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'privacy.html'),
      output:'privacy.html',
      filename:'privacy.html',
      chunks: ['privacy'],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'assets/img', noErrorOnMissing: true, force: true } // з якої папки і що куди копіювати
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css',
    }),
      
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
          loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Мініфікація JavaScript
      new CssMinimizerPlugin(), // Мініфікація CSS
    ],
    
  },
};
