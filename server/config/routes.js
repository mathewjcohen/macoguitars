module.exports = app => {
  app.get("/", (req, res) => res.render("index"));
  app.get("/guitars", (req, res) => res.render("index"));
  app.get("/guitars/atlas", (req, res) => res.render("atlas"));
  app.get("/for-sale", (req, res) => res.render("for-sale"));
  app.get("/founders-sale", (req, res) => res.render("sale"));
  app.get("/tools", (req, res) => res.render("tools"));
};
