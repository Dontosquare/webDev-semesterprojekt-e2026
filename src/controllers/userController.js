const bcrypt = require("bcrypt");
const { User, Role } = require("../models/");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exisitingUser = await User.findOne({ where: { email } });
    if (exisitingUser) {
      // Ændre så den render rigtig side
      return res.status(409).render("home", { error: "Email er allerede i brug", email })
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const role = await Role.findOne({ where: { name: "User" } })

    await User.create({ email, hashedPassword: hashedPassword, adress, username, postcode, city, phone, roleId: role.id })
    // Også ændre på redirect her
    res.redirect("/")

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { register }