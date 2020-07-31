# mod9challenge
A README.md generator that takes user NODE.js to take user input and plug it into a README template.

## Description: 
This project uses Node.js and the Inquirer dependency to generate a README.md file when the user types in commands into the command line. TO start the program, the user must first install the required dependencies, and type in node index.js in the root directory. Then the user will need to follow the prompts on the page and type in the correct information. When all of the prompts are answered, it will create a file called newREADME.md that will have all of the user's information plugged in!

## Screenshot of Webpage
![Sreenshot of Webpage](./assets/images/screenshot_of_page.png)

## About the Project:
The program heavily relies on the Inquirer dependency. If it is not installed properly, the program will not work. After typing in the run command, each prompt will validate their answer and place the response in an object. This data will be returned to the promise chain at the bottom of the code in the index.js file. It then sends the data to the generateMardown.js file, where it will then plug in all of the relevant data into the README template. This template is then sent to the writeToFile() function where it uses the file system to write the file using the information given. The file, called "newREADME.md" is then created in the root directory of the project.
