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
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/static/media`,
    //     name: "media",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              withWebp: true,
            },
          },
          // {
          //   resolve: "gatsby-remark-responsive-iframe",
          //   options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          // },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-remove-serviceworker",
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
