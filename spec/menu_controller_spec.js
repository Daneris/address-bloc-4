const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe("remindMe", () => {
    it("should return learning is a life-long pursuit", () =>{
      expect(this.menu.remindMe()).toBe("learning is a life-long pursuit");
    })
  })


  describe("#getContactCount()", () => {
    it("should return 0 when no contacts are in the book", () => {
        expect(this.menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly one contact", () => {
      this.menu.contacts.push("vanessa")
      expect(this.menu.getContactCount()).toBe(1)
    });

  });


});
