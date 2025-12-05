const { deliveries } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function bowlerEconomyInSuperOvers(deliveries) {

    let bowlerEconomy = {};

    for (let index = 0; index < deliveries.length; index++) {
        const { bowler, batsman_runs, wide_runs, noball_runs, is_super_over } =
            deliveries[index];

        if (is_super_over === "1") {
            if (!bowlerEconomy[bowler]) {
                bowlerEconomy[bowler] = { runs: 0, balls: 0 };
            }

            bowlerEconomy[bowler].runs +=
                parseInt(batsman_runs) + parseInt(wide_runs) + parseInt(noball_runs);

            if (wide_runs == 0 && noball_runs == 0) bowlerEconomy[bowler].balls++;
        }
    }

    let lowestEconomy = [{ bowler: "", economy: Infinity }];
    for (let bowler in bowlerEconomy) {
        const { runs, balls } = bowlerEconomy[bowler];
        const overs = balls / 6;
        const economy = parseFloat((runs / overs).toFixed(2));

        if (economy < lowestEconomy[0].economy) {
            lowestEconomy = [{ bowler, economy }];
        } else if (economy === lowestEconomy[0].economy) {
            lowestEconomy.push({ bowler, economy });
        }
    }

    return lowestEconomy;
}

const result = bowlerEconomyInSuperOvers(deliveries)
saveToJSON(result, "bowlerEconomy")