module.exports = {
  siteMetadata: {
    title: `Green Source Gardening`,
    description: `Create and maintain a Clean & Green environment for the society`,
    author: `@levelfive`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `zh-hk`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-background-image-es5`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
