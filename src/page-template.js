

module.exports = templateData => {
    console.log(templateData);

    return `
    # ${templateData.projectName}

    ## Description 

    

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation

    To install all of the necessary dependencies, run the following command in tour favorite command line tool:

    ----INSTALL----

    ## Usage 

    Instructions for use:

    ----USAGE----

    ## License

    This project uses the ----LICENSE---- license.

    ## Contributing

    If you would like to contribute to the repo, keep the following in mind:
    
    ----USERINFO----

    ## Tests

    To run tests, run the following command in your favorite command line tool:

    ----TEST----

    ## Questions

    If you have any questions, open an issue in the repo or contact me directly at ----EMAIL----. You can find more of my work at [----GITHUBNAME----](https://github.com/GITHUBNAME).
    `    
}