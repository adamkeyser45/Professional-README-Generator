// function to choose and place the correct badge
const chooseBadge = license => {

  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else   if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "GNU General") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};


// function to generate markdown for README
function generateMarkdown(templateData) {
  return `
  # ${templateData.projectName}

  ${chooseBadge(templateData.license)}

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

  To install all of the necessary dependencies, run the following command in your favorite command line tool:

  ${templateData.install}

  ## Usage 

  Instructions for use:

  ${templateData.usage}

  ## License

  This project is covered by the ${templateData.license} license.

  ## Contributing

  If you would like to contribute to the repo, keep the following in mind:
  
  ${templateData.userInfo}
  ${templateData.contributeInfo}

  ## Tests

  To run tests, run the following command in your favorite command line tool:

  ${templateData.test}

  ## Questions

  If you have any questions, open an issue in the repo or contact me directly at ${templateData.email}. You can find more of my work at [${templateData.githubName}](https://github.com/${templateData.githubName}).
  ` ;
}

module.exports = generateMarkdown;
