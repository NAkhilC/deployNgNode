const postHandler = async (req: any, res: any, next: any) => {
  req.session.user = req.body.data?.username;
  res.status(200).json({ name: req.session.user });
};

const logoutHandler = async (req: any, res: any, next: any) => {
  req.session.destroy();
  res.status(200).json();
};

module.exports = { postHandler, logoutHandler };
