const { matches, deliveries } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function getTop10EcoBowlers2015(matches, deliveries) {

    let allBowlersStats = {};
    let matchesIn2015 = [];

    for (let index = 0; index < matches.length; index++) {
        const { season, id } = matches[index];
        if (season == 2015) matchesIn2015.push(id);
    }

    for (let index = 0; index < deliveries.length; index++) {
        const {
            match_id,
            bowler,
            batsman_runs,
            wide_runs,
            noball_runs,
            extra_runs,
        } = deliveries[index];

        if (matchesIn2015.includes(match_id)) {
            let balls = 0;
            const runs =
                parseInt(batsman_runs) + parseInt(wide_runs) + parseInt(noball_runs);
            if (wide_runs == 0 && noball_runs == 0) balls++;
            if (!allBowlersStats[bowler])
                allBowlersStats[bowler] = { runs: 0, balls: 0 };

            allBowlersStats[bowler].runs += runs;
            allBowlersStats[bowler].balls += balls;
        }
    }

    for (let key in allBowlersStats) {
        const { runs, balls } = allBowlersStats[key];
        let overs = balls / 6;

        const economy = runs / overs;

        allBowlersStats[key] = economy.toFixed(2);
    }

    const sortedEntries = Object.entries(allBowlersStats).sort(
        (a, b) => a[1] - b[1]
    );
    const top10 = sortedEntries.slice(0, 10);
    return Object.fromEntries(top10);
}

const result = getTop10EcoBowlers2015(matches, deliveries);
saveToJSON(result, "top10EcoBowlers2015");
