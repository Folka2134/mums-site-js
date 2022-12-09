const packageData = require("../data");

// console.log(packageData[0]);

module.exports = {
  getHomePage: async (req, res) => {
    try {
      res.render("index.ejs", { data: packageData });
    } catch (error) {
      console.log(error);
    }
  },
};
