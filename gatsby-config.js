const sass = require('node-sass');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Gatsby React Bootstrap Starter`,
    description: `, 25 ans, élevée depuis toujours avec des animaux, diplômée
    d’un bac professionnel conduite et gestion de l’entreprise dans le
    secteur canin et félin et ayant fait de nombreux stages dans le
    milieu de l’élevage, de la pension, et vétérinaire, je saurais
    parfaitement m’occuper de vos animaux.`,
    author: `Jessica`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`
    {
   resolve: `gatsby-plugin-sass`,
   options: {
    resolve: 'gatsby-plugin-sass',
    options: {
      data: `@import "${__dirname}/src/scss/";`,
    }
   },
},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
