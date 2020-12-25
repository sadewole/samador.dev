const siteConfig = require("./config")

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    menu: siteConfig.menu,
    copyright: siteConfig.copyright,
    author: siteConfig.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: `/`,
        background_color: `#374151`,
        theme_color: `#374151`,
        display: `minimal-ui`,
        icon: `static/images/photo2.jpg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       importWorkboxFrom: `cdn`,
    //       runtimeCaching: [
    //         {
    //           // Use cacheFirst since these don't need to be revalidated (same RegExp
    //           // and same reason as above)
    //           urlPattern: /(\.js$|\.css$|[^:]static\/)/,
    //           handler: "CacheFirst",
    //         },
    //         {
    //           // page-data.json files, static query results and app-data.json
    //           // are not content hashed
    //           urlPattern: /^https?:.*\/page-data\/.*\.json/,
    //           handler: "StaleWhileRevalidate",
    //         },
    //         {
    //           // Add runtime caching of various other page resources
    //           urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //           handler: "StaleWhileRevalidate",
    //         },
    //         {
    //           // Google Fonts CSS (doesn't end in .css so we need to specify it)
    //           urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
    //           handler: "StaleWhileRevalidate",
    //         },
    //       ],
    //     },
    //   },
    // },
  ],
}
