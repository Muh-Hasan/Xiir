/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "08hqep1db0q4",
        accessToken: "OeuH3CSWrYXM1O2rdS2U7hx-sTURjhwCNuRaFo2bbYo",
      },
    },
  ],
}
