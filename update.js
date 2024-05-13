#!/usr/bin/env node

import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";

const ACCESS_ID = process.env.ACCESS_ID;
const SECRET_KEY = process.env.SECRET_KEY;
const API_BASE_URL = process.env.API_BASE_URL;

const payload = {
  keyword: "my-cla-link",
  url: "https://cla.umn.edu/music/ensembles/marching-band/history-traditions/goldy-gopher",
};

const signedPayload = jsonwebtoken.sign(payload, SECRET_KEY);

const response = await fetch(`${API_BASE_URL}/urls/${payload.keyword}`, {
  method: "PUT",
  headers: {
    Authorization: `${ACCESS_ID}:${signedPayload}`,
  },
});

const json = await response.json();

console.log(JSON.stringify(json));
