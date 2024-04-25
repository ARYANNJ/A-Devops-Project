const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.get("", (req, res) => {
  return res.json({ message: "Hey there ,I am node js in container" });
});
app.listen(PORT, () => {
  console.log(
    "Server started on PORT 80 and now we have Created pipeline using jenkins and now we are ready for ansible"
  );
});
