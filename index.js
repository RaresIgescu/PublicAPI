import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const apiKey = "9748aad4-09a4-4572-86ec-fb157d8139fe";

app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/get-countries", async (req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/countries?key=" +  apiKey);
    console.log(result.data);
    res.redirect("/");
});

app.get("/get-city-ranking", async (req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=" + apiKey);
    console.log(result.data);
    res.redirect("/");
});

app.get("/get-supported-states", async(req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/states?country=Romania&key=" + apiKey);
    console.log(result.data);
    res.redirect("/");
});

app.get("/get-supported-cities", async(req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/cities?state=Alabama&country=USA&key=" + apiKey);
    console.log(result.data);
    res.redirect("/");
});

app.get("/get-city", async(req, res) => {
    const result = await axios.get("http://api.airvisual.com/v2/city?city=Vaslui&state=Vaslui&country=Romania&key=" + apiKey)
    console.log(result.data);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});