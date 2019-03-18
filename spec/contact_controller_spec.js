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
       this.book.addContact("Alice", "484-869-4499")
        .then((contact) =>{
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("484-869-4499");
          done()
        })
        .catch((err) =>{
          done();
        })
     });

   });
 })
