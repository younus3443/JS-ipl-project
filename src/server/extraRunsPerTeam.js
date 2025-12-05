const { matches, deliveries } = require('./index')
const saveToJSON = require('../utils/saveToJSON')
saveToJSON;


function extraRunsPerTeamIn2016(matches, deliveries) {

    const getIds = [];
    const extraRunsByTeam = {}

    for (let index = 0; index < matches.length; index++) {
        const { id, season, team1, team2 } = matches[index]

        if (season == "2016") {
            getIds.push(id)
        }
    }
    for (let index = 0; index < deliveries.length; index++) {
        const { match_id, bowling_team, extra_runs } = deliveries[index];

        if (getIds.includes(match_id)) {
            if (!extraRunsByTeam[bowling_team]) {
                extraRunsByTeam[bowling_team] = 0
            }
            extraRunsByTeam[bowling_team] += parseInt(extra_runs)
        }
    }
    return extraRunsByTeam
}
const result = extraRunsPerTeamIn2016(matches, deliveries)
saveToJSON(result, "extraRunsConcededByTeam")