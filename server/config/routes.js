module.exports = app => {
  app.get("/", (req, res) => res.render("index"));
  app.get("/founders-sale/first-five", (req, res) => res.render("sale"));
};
