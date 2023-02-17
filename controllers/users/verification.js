const RequestError = require("../../helpers/RequestError");
const { User } = require("../../models/user");

const verification = async (req, res, _) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) throw RequestError(404, "User not found");

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.status(200).json({ message: "Verification successful" });
};

module.exports = verification;
