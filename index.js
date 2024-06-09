const express = require('express');

app = express();

app.get("/", (req, res) => {
    res.send("hello")
})

PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("listening on port" + PORT);
})