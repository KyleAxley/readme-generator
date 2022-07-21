// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
    ? `<p><img src="https://img.shields.io/badge/License-${license}-green" alt="license badge"></p>`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    'BSD 3-Clause "New" or "Revised" license':
      "https://opensource.org/licenses/BSD-3-Clause",
    'BSD 2-Clause "Simplified" or "Revised" license':
      "https://opensource.org/licenses/BSD-2-Clause",
    "GNU General Public License (GPL)":
      "https://opensource.org/licenses/gpl-license",
    "MIT License": "https://opensource.org/licenses/MIT",
    "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
    "Common Development and Distribution License":
      "https://opensource.org/licenses/CDDL-1.0",
    "Eclipse Public License version 2.0":
      "https://opensource.org/licenses/EPL-2.0",
  };

  //return for license index "[license]"
  return license ? links[license] : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License  
The README Generator is covered under the ${license}. For further details about it vist: [opensource.org](${renderLicenseLink(
      license
    )})  
    `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    project_name,
    project_description,
    project_Installation,
    license,
    github,
    email,
  } = data;

  // markdown
  const markdown = `
## ${project_name} 
${renderLicenseBadge(license)}


## Description 
${project_description}

### Table of Contents 
*[Installation](#installation)* | *[Usage](#usage)* | *[License](#license)* | ${
  data.confirmContributors ? ` *[Contributing](#contributing)* | ` : ""
}${
  data.confirmTesting ? `*[Tests](#tests)* | ` : ""
}*[Questions](#questions)* 

---

## Installation
\`${project_Installation}\`
${
  data.confirmUsage
    ? `## Usage
${data.usage}`
    : ""
}
${renderLicenseSection(data.license)} ${
    data.confirmContributors
      ? `

## Contributing
${data.contributors}`
      : ""
  } ${
    data.confirmTesting
      ? `

## Tests
${data.tests}`
      : ""
  }

## Questions
Like, comment, and subscribe...
[${github}](https://github.com/${github})
<${email}>`;

  return markdown;
}

module.exports = generateMarkdown;
