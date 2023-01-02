const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");
app.use(cors());
app.use(express.json());

const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';

app.get("/getplayersdata", async (req, res) => {
    axios.get(url).then(response => {res.send(response.data.elements)})
});

app.get('/getgwdata', async (req, res) => {
    axios.get(url).then(response => {res.send(response.data.events)})
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
