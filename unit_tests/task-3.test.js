const CONTINENTS = {
  NA: "North America",
  EU: "Europe",
  AS: "Asia",
};

const COUNTRIES = [
  {
    code: "US",
    name: "United States",
    capital: "Washington",
    area: 9_629_091,
    continent: "NA",
  },
  {
    code: "DE",
    name: "Germany",
    capital: "Berlin",
    area: 3_570_210,
    continent: "EU",
  },
  {
    code: "DK",
    name: "Denmark",
    capital: "Copenhagen",
    area: 430_940,
    continent: "EU",
  },
  {
    code: "UA",
    name: "Ukraine",
    capital: "Kyiv",
    area: 603_700,
    continent: "EU",
  },
  {
    code: "CN",
    name: "China",
    capital: "Beijing",
    area: 9_596_960,
    continent: "AS",
  },
  {
    code: "GB",
    name: "United Kingdom",
    capital: "London",
    area: 244_820,
    continent: "EU",
  },
  {
    code: "IN",
    name: "India",
    capital: "New Delhi",
    area: 3_287_590,
    continent: "AS",
  },
];

const {
  getCountry,
  getCountryByCode,
  getCapitalByName,
  getContinentByCode,
  getContinentData,
} = require("./task-3");

describe("GetCountry Fn:", () => {
  test("should show all keys", () => {
    const expObj = {
      code: "IN",
      name: "India",
      capital: "New Delhi",
      area: 3_287_590,
      continent: "AS",
    };
    expect(getCountry("IN")).toMatchObject(expObj);
  });
});

describe("getCountryByCode Fn:", () => {
  test("should show all nesessary keys", () => {
    const expObj = {
      name: "India",
      capital: "New Delhi",
      area: 3_287_590,
      continent: "AS",
    };
    expect(getCountryByCode("IN")).toEqual(expObj);
  });
});

describe("getCapitalByName Fn:", () => {
  test("should show all necessary keys", () => {
    const expObj = {
      name: "India",
      capital: "New Delhi",
    };
    expect(getCapitalByName("IN")).toMatchObject(expObj);
  });
});

describe("getContinentByCode Fn:", () => {
  test("should show a continent", () => {
    expect(getContinentByCode("IN")).toBe("Asia");
  });
});

describe("getContinentData Fn:", () => {
  test("should show an area and countries", () => {
    const expObj = {
      area: 4849670,
      countries: ["Germany", "Denmark", "Ukraine", "United Kingdom"],
    };
    expect(getContinentData("EU")).toMatchObject(expObj);
  });
});
