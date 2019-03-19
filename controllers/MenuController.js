const inquirer = require('inquirer');
const ContactController = require("./ContactController")

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "please choose from an option below",
        choices: [
          "Add new contact",
          "View all contacts",
          "getDate",
          "Exit"
        ]
      }
    ];

    this.book = new ContactController();
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;

        case "Exit":
          this.exit();

        case "getDate":
          this.getDate();
          break;

        case "View all contacts":
          this.getContacts();
          break;

        default:
          console.log("Invalid input");
          this.main();
        }
      })

    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear()
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
       this.book.addContact(answers.name, answers.phone).then((contact) => {
         console.log("Contact added successfully!");
         this.main();
       }).catch((err) => {
         console.log(err);
         this.main();
       });
     });
  }

  getDate(){
    let today = new Date()
    console.log(today);
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount(){
    return this.contacts.length;
  }

  getContacts(){
    this.clear();

    this.book.getContacts().then((contacts) => {
      for(let contact of contacts){
        console.log(
          `
          name: ${contact.name}
          phone number: ${contact.phone}
          email: ${contact.email}
          `
        );
      }
          this.main();

    }).catch((err) =>{
      cnosole.log(err);
      this.main();
    })
  }


}
