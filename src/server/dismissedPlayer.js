const { deliveries } = require("../server/index");
const saveToJSON = require("../utils/saveToJSON");

function playerDismissedByAnothePlayer() {

  const dismissalPairs = {};
  const bowlerDismissal = ['caught',
    'bowled',
    'run out',
    'lbw',
    'caught and bowled',
    'stumped',
    'retired hurt',
    'hit wicket',
    'obstructing the field']

  for (let index = 0; index < deliveries.length; index++) {
    const { bowler, player_dismissed, dismissal_kind } = deliveries[index];

    if (bowlerDismissal.includes(dismissal_kind)) {
      if (!dismissalPairs[bowler]) dismissalPairs[bowler] = {};
      dismissalPairs[bowler][player_dismissed] =
        (dismissalPairs[bowler][player_dismissed] || 0) + 1;
    }
  }

  let highestDismissalPairs = [{ bowler: "", batsman: "", dismissals: 0 }];
  for (let bowler in dismissalPairs) {
    let currPair = dismissalPairs[bowler];
    for (let batsman in currPair) {
      if (currPair[batsman] > highestDismissalPairs[0].dismissals) {
        highestDismissalPairs = [
          { bowler, batsman, dismissals: currPair[batsman] },
        ];
      } else if (currPair[batsman] === highestDismissalPairs[0].dismissals) {
        highestDismissalPairs.push({
          bowler,
          batsman,
          dismissals: currPair[batsman],
        });
      }
    }
  }

  return highestDismissalPairs[0];
}

const result = playerDismissedByAnothePlayer(deliveries);
saveToJSON(result, "playerDismissedByAnotherPlayer")