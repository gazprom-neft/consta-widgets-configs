const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { getLocalIdent } = require('css-loader/dist/utils')

const cssRules = [
  {
    ext: 'css',
    use: [],
  },
]

const isProduction = process.env.NODE_ENV === 'production'

// Use generator function for spread in arrays
function* css({ onlyGenerateTypes } = {}) {
  for (const rule of cssRules) {
    const use = [
      onlyGenerateTypes
        ? null
        : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: !isProduction,
          },
        },
      !isProduction || onlyGenerateTypes ? require.resolve('css-modules-typescript-loader') : null,
      {
        loader: require.resolve('css-loader'),

        options: {
          importLoaders: rule.use.length + 1,
          modules: {
            localIdentName: isProduction ? '[hash:base64:5]' : '[folder]__[local]--[hash:base64:5]',
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (
                /**
                 * Все что находится в node_modules не надо обрабатывать как
                 * CSS Modules.
                 */
                context.resourcePath.includes('node_modules') ||
                /**
                 * Все что не относится к проекту где происходит сборка,
                 * например symlink модулей из соседних директорий тоже не
                 * должно обрабатываться через CSS Modules.
                 */
                !context.resourcePath.includes(context.rootContext)
              ) {
                return localName
              }

              return getLocalIdent(context, localIdentName, localName, options)
            },
          }
        },
      },
      {
        loader: require.resolve('postcss-loader'),
      },
      ...rule.use,
    ]

    yield {
      test: new RegExp(`\\.${rule.ext}$`),
      use: use.filter(Boolean),
    }
  }
}

module.exports = {
  css,
  cssRules,
}
