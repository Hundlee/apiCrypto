const express = require("express");
const app = express();
const port = 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/api/proxy", async (req, res) => {
    const url = process.env.URL;
    const apiKey = process.env.API_KEY;
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
