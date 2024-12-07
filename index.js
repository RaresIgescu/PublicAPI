import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const apiKey = "";

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/get-countries", async (req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/countries?key=" +  apiKey);
    console.log(result.data);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
