#!/usr/bin/env node

const express = require("express");

const PORT = 3000;
const app = express();

app.use(express.static("out"));

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
