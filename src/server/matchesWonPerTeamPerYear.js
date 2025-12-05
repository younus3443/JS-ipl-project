const { matches } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function matchesWonPerTeamPerYear(matches) {
    const MatchesPerTeam = {};

    for (let index = 0; index < matches.length; index++) {
        const { team1, team2, winner, season } = matches[index]
        if (!winner) {
            continue;
        }

        if (!MatchesPerTeam[season]) {
            MatchesPerTeam[season] = {}
        }
        if (!MatchesPerTeam[season][team1]) {
            MatchesPerTeam[season][team1] = 0
        }
        if (!MatchesPerTeam[season][team2]) {
            MatchesPerTeam[season][team2] = 0
        }
        MatchesPerTeam[season][winner] += 1



    }
    return MatchesPerTeam

}

const result = matchesWonPerTeamPerYear(matches);
saveToJSON(result, "matchesWonPerTeam")