const packageData = require("../data");

module.exports = {
  getHomePage: async (req, res) => {
    try {
      res.render("index.ejs", { data: packageData });
    } catch (error) {
      console.log(error);
    }
  },
  getPackage: async (req, res) => {
    try {
      res.render("package.ejs", { data: packageData[req.params.id] });
    } catch (error) {
      console.log(error);
    }
  },
};
