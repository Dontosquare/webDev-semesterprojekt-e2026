const express = require("express");
const session = require("express-session");
const User = require("./models/User");

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(session({ secret: "test", resave: false, saveUninitialized: false }));

app.get("/login", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Log in</button>
    </form>
  `);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return res.send("Wrong email or password");
  }

  req.session.userId = user.id;
  res.redirect("/dashboard");
});

// 3. A protected page
app.get("/dashboard", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  res.send("You're logged in!");
});

app.listen(3000);