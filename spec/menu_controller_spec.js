const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  })
  describe("#getContactCount()", () => {


    it("should return 0 when no contacts are in the book", () => {

        expect(this.menu.getContactCount()).toBe(0);
    });

    it("should return 1 when there is exactly one contact", () => {

      this.menu.contacts.push("vanessa")
      expect(this.menu.getContactCount()).toBe(1)
    })
  });
});
