import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) throw new Error("Not Found", 400);
  res.send({
    data: users,
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  if (!user) throw new Error("Some fucking error", 400);

  res.send({
    data: user,
  });
};
