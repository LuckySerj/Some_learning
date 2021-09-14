import Element from "./js/element.js";

class Header extends Element {
  constructor() {
    super();
  }

  renderHeader() {
    const header = createElement("header", ["header"]);
    const addBtn = createElement("button", [
      "bi",
      "bi-person-plus",
      "addPerson",
    ]);
    header.append(addBtn);
    return header;
  }
}

export default Header;
