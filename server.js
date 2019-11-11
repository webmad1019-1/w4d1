const express = require("express");
const app = express();
const PORT = 5000;

// dni endpoint
app.get("/dni", (req, res) => {
  const dni = "4781X";
  if (dni.length < 9) {
    res.json({ dni: "wrong" });
  } else {
    res.json({ dni: "ok" });
    // insertion in the DB code here....
  }
});

// randomNumber endpoint
app.get("/randomNumber", (req, res) => {
  res.json({ rand: Math.random() });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
