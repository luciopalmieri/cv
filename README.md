<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Lucio Palmieri" src="src/assets/lp-icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  My curriculum based on Gatsby's CV starter
</h1>

Create your resume in a few minutes with this totally responsive starter using React. Show off your skills, work experiences and activities in github.


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new cv https://github.com/santosfrancisco/gatsby-starter-cv
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd cv/
    npm run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the `cv` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Generate production build**

  That command will generate a production build on _public_ folder
  ```sh
    npm run build
  ```

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```

:warning: NOTE: Please change googleAnalyticsId to your ID.  See https://analytics.google.com for details.

> **Skills** is a set of your personal skills and their respective levels ranging from > 0 to 100.
> **jobs** is a set of your work experiences
