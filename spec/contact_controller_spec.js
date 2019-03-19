const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;



 describe("ContactController", () => {

    beforeEach((done) => {
       this.book = new ContactController();


       sequelize.sync({force: true}).then((res) => {
         done();
       })
       .catch((err) => {
         done();
       });
    });

   describe("#addContact()", () => {

     it("should add a single contact into the book", () => {
       this.book.addContact("Alice", "484-869-4499","alice123@gmail.com")
        .then((contact) =>{
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("484-869-4499");
          expect(contact.email).toBe("alice123@gmail.com");
          done()
        })
        .catch((err) =>{
          done();
        })
     });

   });
 })
