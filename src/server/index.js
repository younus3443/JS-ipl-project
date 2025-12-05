const path = require("path");
const csvParser = require("../utils/csvtojson")

const matchesCsv = path.join(__dirname, "../data/matches.csv")
const deliveriesCsv = path.join(__dirname, "../data/deliveries.csv")

const matches = csvParser(matchesCsv);
const deliveries = csvParser(deliveriesCsv);

module.exports = { matches, deliveries };
