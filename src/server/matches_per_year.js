const { matches } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");


function matchesPlayedPerYear(matches) {


  let matchesPerYear = {};

  for (let index = 0; index < matches.length; index++) {
    let match = matches[index];
    const season = match.season;
    if (!matchesPerYear[season]) {
      matchesPerYear[season] = 1;
    } else {
      matchesPerYear[season] += 1;
    }
  }

  return matchesPerYear;

}

const result = matchesPlayedPerYear(matches);
saveToJSON(result, "matchesPerYear")