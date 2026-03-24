const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  // console.log(usernames)
  const list = usernames.map((u) => u.username).join(", ") || "(none)";
  res.send(`Usernames: ${list}`);
}

async function createUsernameGet(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <form method="POST" action="/new">
          <label>Username: <input type="text" name="username" required /></label>
          <label>Email: <input type="text" name="email" required /></label>
          <button type="submit">Add</button>
        </form>
        <p><a href="/">Back to list</a></p>
      </body>
    </html>
  `);
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  console.log(req.body)

  if (!username || username.trim() === "") {
    return res.status(400).send("Username cannot be empty.");
  }
  await db.insertUsername(username.trim());
  res.redirect("/");
}

// async function deleteAllUsernames(req, res) {
//   await db.deleteAllUsernames();
//   res.send("All usernames deleted.");
// }

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
//   deleteAllUsernames,
};