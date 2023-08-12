const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



function init() {
  inquirer
    .prompt([

      {
        type: 'input',
        name: 'Username',
        message: 'What is your  Github username?',
      },

      {
        type: 'input',
        name: 'Email', 
        message: 'What is your email?',
      },   


      {
        type: 'input',
        name: 'Project',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BDS 3', 'None'],
      },
      {
        type: 'input',
        name: 'Install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'What command should be run to run the tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'Repo',
        message: 'What does the user need to know about this repo?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to this repo?',
      },
 
      
      

    ])



   // La función then se encadena a la llamada de inquirer.prompt y se ejecutará cuando todas las preguntas hayan sido respondidas.
.then((inquirerResponses) => {
  // Se muestra un mensaje en la consola indicando que se está generando el archivo README.
  console.log('Generating README!!');

  // Se llama a la función writeToFile con el nombre del archivo 'README.md' y los datos de las respuestas del usuario.
  // Los datos se pasan a través del operador spread '...' para copiar todas las propiedades de inquirerResponses en el objeto que se pasa a generateMarkdown.
  writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));

  // Definición de la función writeToFile para escribir los datos en un archivo.
  function writeToFile(fileName, data) {
    // Se utiliza fs.writeFileSync para escribir los datos en un archivo.
    // El primer argumento es la ruta del archivo (se usa process.cwd() para obtener la ruta actual del proceso y path.join para unirlo con el nombre del archivo).
    // El segundo argumento es el contenido que se escribirá en el archivo, que es generado por la función generateMarkdown con los datos de inquirerResponses.
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
});
}

init();



