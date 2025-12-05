const { matches } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function numberOfTimesTeamAndTossWon(matches) {
    teamAndTossWon = {}
    for (let index = 0; index < matches.length; index++) {
        const { toss_winner, winner } = matches[index]

        if (winner && toss_winner && toss_winner == winner) {
            teamAndTossWon[winner] = (teamAndTossWon[winner] || 0) + 1
        }
    }
    return teamAndTossWon


}
const result = numberOfTimesTeamAndTossWon(matches)
saveToJSON(result, "tossAndMatchWonCount")