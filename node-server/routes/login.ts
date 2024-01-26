const postHandler = async (req: any, res: any, next: any) => {
  req.session.user = req.body.data?.username;
  res.status(200).json({ name: "akhil" });
};

module.exports = { postHandler };
