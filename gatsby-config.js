module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `YIITEX's Blog`,
    author: `steven`,
    description: `A collection of my thoughts and writings.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
