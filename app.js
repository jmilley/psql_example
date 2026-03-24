const express = require("express");
const usernamesRouter = require("./routes/usernamesRouter");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", usernamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));