import express from "express";
import axios from "axios";
import { config } from "./config.js";

const app = express();
const port = 3000;
const apiKey = config.apiKey;

app.get("/", async (req, res) => {
    res.render("index.ejs", {content: null});
});

app.get("/get-countries", async (req, res) => {
    try {
        const result = await axios.get("http://api.airvisual.com/v2/countries?key=" +  apiKey);
        res.render("index.ejs", {content: JSON.stringify(result.data)});
    } catch (error) {
        res.render("index.ejs", {content: JSON.stringify(error.response.data)});
    }
});

app.get("/get-supported-states", async(req, res) => {
    try {
        const country = req.query.country;
        const result = await axios.get("http://api.airvisual.com/v2/states?country=" + country + "&key=" + apiKey);
        res.render("index.ejs", {content: JSON.stringify(result.data)});
    } catch (error) {
        res.render("index.ejs", {content: JSON.stringify(error.response.data)});
    }
});

app.get("/get-supported-cities", async(req, res) => {
    try {
        const country = req.query.country;
        const state = req.query.state;
        const result = await axios.get("http://api.airvisual.com/v2/cities?state=" + state + "&country=" + country + "&key=" + apiKey);
        res.render("index.ejs", {content: JSON.stringify(result.data)});
    } catch (error) {
        res.render("index.ejs", {content: JSON.stringify(error.response.data)});
    }
});

app.get("/get-city", async(req, res) => {
    try {
        const country = req.query.country;
        const state = req.query.state;
        const city = req.query.city;
        const result = await axios.get("http://api.airvisual.com/v2/city?city=" + city + "&state=" + state + "&country=" + country +"&key=" + apiKey);
        res.render("index.ejs", {content: JSON.stringify(result.data)});
    } catch (error) {
        res.render("index.ejs", {content: JSON.stringify(error.response.data)});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});