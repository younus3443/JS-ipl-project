const { matches } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function PlayerOfTheMatchForEachSeason(matches) {

    const playerOfEachSeason = {}
    const highestPlayerOfMatchPerSeason = {};
    for (let index = 0; index < matches.length; index++) {
        const { player_of_match, season } = matches[index]
        if (!playerOfEachSeason[season]) {
            playerOfEachSeason[season] = {}
        }

        playerOfEachSeason[season][player_of_match] = (playerOfEachSeason[season][player_of_match] || 0) + 1

        for (let season in playerOfEachSeason) {
            let players = [];
            let maxCount = 0;

            for (let player in playerOfEachSeason[season]) {
                let count = playerOfEachSeason[season][player];

                if (count > maxCount) {
                    maxCount = count;
                    players = [player];
                } else if (maxCount == playerOfEachSeason[season][player]) {
                    players.push(player);
                }
            }
            highestPlayerOfMatchPerSeason[season] = { players, numberOfMatches: maxCount };
        }

    }
    return highestPlayerOfMatchPerSeason;

}
const result = PlayerOfTheMatchForEachSeason(matches);
saveToJSON(result, "playerOfMatch")