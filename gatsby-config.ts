import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby_static_boiler_plate`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", `gatsby-plugin-react-helmet`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Starter Template`,
      short_name: `Starter Template`,
      start_url: `/`,
      background_color: `#f2273f`,
      theme_color: `#ede624`,
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`
]
};

export default config;
