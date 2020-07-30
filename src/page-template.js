

module.exports = templateData => {
    console.log(templateData);

    return `
    # ${templateData.projectName}

    ## Description 

    ${templateData.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation

    To install all of the necessary dependencies, run the following command in tour favorite command line tool:

    ${templateData.install}

    ## Usage 

    Instructions for use:

    ${templateData.usage}

    ## License

    This project uses the ${templateData.license} license.

    ## Contributing

    If you would like to contribute to the repo, keep the following in mind:
    
    ${templateData.userInfo}

    ## Tests

    To run tests, run the following command in your favorite command line tool:

    ${templateData.test}

    ## Questions

    If you have any questions, open an issue in the repo or contact me directly at ${templateData.email}. You can find more of my work at [${templateData.githubName}](https://github.com/${templateData.githubName}).
    `    
}