require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Sae Design Group`,
    description: `Delightful design by good people.`,
    author: `@sdghi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GAr)
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-fingerprints`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saedesigngroup`,
        short_name: `SDG`,
        start_url: `/`,
        background_color: `#EED36C`,
        theme_color: `#EED36C`,
        display: `minimal-ui`,
        // Add Icon here
        icon: `src/images/sdg-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `saedesign`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          about: require("./schemas/about.json"),
          category: require("./schemas/category.json"),
          category_cursor: require("./schemas/category_cursor.json"),
          client_list: require("./schemas/client_list.json"),
          logos: require("./schemas/logos.json"),
          menu_of_services: require("./schemas/menu_of_services.json"),
          project_template: require("./schemas/project_template.json"),
          team: require("./schemas/team.json"),
          homepage: require("./schemas/homepage.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Source Sans Pro",
              variants: ["300", "400", "700", "900"],
              fontDisplay: "swap",
            },
            {
              family: "Oswald",
              variants: ["600", "700"],
              fontDisplay: "swap",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
}
