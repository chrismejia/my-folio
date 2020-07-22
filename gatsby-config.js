module.exports = {
  siteMetadata: {
    title: "Christian Mejia's Dev Site",
    author: 'Christian Mejia',
    description: "Christian Mejia's Portfolio Site",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: 'decks',
        // base path for routes generate by this theme
        basePath: '/decks',
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['@mdx-deck/gatsby-plugin'],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
