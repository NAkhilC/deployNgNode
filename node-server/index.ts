const router = require("express").Router();
const login = require("./routes/login");

router.get("/", function (req: any, res: any, next: any) {
  res.status(200).json({ name: "akhil" });
});

router.post("/login", function (req: any, res: any, next: any) {
  login.postHandler(req, res, next);
});

router.get("/status", function (req: any, res: any, next: any) {
  console.log(req?.session);

  res.status(200).json({ name: "akhil" });
});

module.exports = router;
