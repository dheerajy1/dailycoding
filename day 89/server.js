const flight = require('./Flightdata.json')
const port = 8000;
const axios = require("axios").default;
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

app.get("/flights", (req, res) => {
  const options = {
    method: "GET",
    url: "https://airport-info.p.rapidapi.com/airport",
    params: { iata: "JFK" },
    headers: {
      "X-RapidAPI-Key": process.env.rapid_api_key,
      "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      //res.json(response.data);
      res.send(flight);
    })
    .catch(function (error) {
      console.error(error);
    });

});

app.listen(port, () => console.log(`running on port ${port}`));
