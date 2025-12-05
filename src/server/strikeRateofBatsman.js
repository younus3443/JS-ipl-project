const { matches, deliveries } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function strikeRateOfBatsmanEachSeason(matches, deliveries) {
    let battingStrikeRate = {};
    let matchSeason = {};

    for (let index = 0; index < matches.length; index++) {
        const { id, season } = matches[index];

        matchSeason[id] = season;
    }

    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, batsman, batsman_runs } = deliveries[index];
        let season = matchSeason[match_id];

        if (!battingStrikeRate[season]) battingStrikeRate[season] = {};
        if (!battingStrikeRate[season][batsman]) {
            battingStrikeRate[season][batsman] = {
                runs: 0,
                balls: 0,
                strikeRate: 0,
            };
        }
        let stats = battingStrikeRate[season][batsman];

        stats.runs += parseInt(batsman_runs);
        stats.balls++;
    }

    for (let season in battingStrikeRate) {
        for (let batsman in battingStrikeRate[season]) {
            let stats = battingStrikeRate[season][batsman];
            let strikeRate = parseFloat(
                ((stats.runs / stats.balls) * 100).toFixed(2)
            );
            battingStrikeRate[season][batsman] = strikeRate;
        }
    }

    return battingStrikeRate;
}
const result = strikeRateOfBatsmanEachSeason(matches, deliveries)
saveToJSON(result, "strikeRateOfBatsman")
