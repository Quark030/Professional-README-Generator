// Function to generate the content for the README file based on user input.
function generateMarkdown(data) {
  return `
# ${data.Project}


## Description
${data.Description}

#### Table of contents

- Installation
- Usage
- License
- Contributing
- Test
- Questions


## Installation
\`\`\`
${data.Install}
\`\`\`


## Usage
\`\`\`
${data.Repo}
\`\`\`

## License
This project is licensed under the ${data.License} License.


## Contributing
${data.Contributing}


## Tests
To run tests, use the following command:
\`\`\`
${data.Test}
\`\`\`


## Reach out
If you have any questions about the repo, open an issue or contact me 
directly at ${data.Email} You can find more of my work at ${data.Username}.


`;
}

// Export the generateMarkdown function so it can be used in other files
module.exports = generateMarkdown;
