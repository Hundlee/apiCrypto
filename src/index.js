const express = require("express");
require("dotenv").config();
const app = express();
const port = 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/", async (req, res) => {
    const { default: fetch } = await import("node-fetch");
    const url = process.env.URL;
    const apiKey = process.env.API_KEY;

    try {
        const response = await fetch(url, {
            headers: {
                "X-CMC_PRO_API_KEY": apiKey,
                Accept: "application/json",
            },
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Erro:", error);
        res.status(500).json({
            error: "Erro ao obter os dados das criptomoedas",
        });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
