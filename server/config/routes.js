module.exports = app => {
  app.get("/", (req, res) => res.render("index"));
  app.get("/founders-sale", (req, res) => res.render("sale"));
};
