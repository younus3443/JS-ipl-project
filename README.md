📊 JS IPL Data Project

This project analyzes IPL (Indian Premier League) cricket data using Node.js.
You will process raw data from the Kaggle IPL dataset and generate multiple JSON outputs containing IPL statistics.
```
js-ipl-data-project/
│
├── src/
│   ├── data/
│   │   ├── matches.csv
│   │   └── deliveries.csv
│   │
│   ├── server/
│   │   ├── index.js
│   │   ├── 1-matches-per-year.js
│   │   ├── 2-matches-won-per-team-per-year.js
│   │   ├── 3-extra-runs-conceded-2016.js
│   │   ├── 4-top-10-economical-bowlers-2015.js
│   │   ├── 5-toss-winner-match-winner.js
│   │   ├── 6-player-of-match-each-season.js
│   │   ├── 7-strike-rate-per-season.js
│   │   ├── 8-player-dismissal-count.js
│   │   └── 9-best-economy-super-over.js
│   │
│   ├── utils/
│   │   └── saveToJSON.js
│   │
│   └── public/
│       └── output/
│           ├── matchesPerYear.json
│           ├── matchesWonPerTeamPerYear.json
│           ├── extraRunsPerTeam2016.json
│           ├── top10Economical2015.json
│           ├── tossAndMatchWinners.json
│           ├── playerOfMatchEachSeason.json
│           ├── strikeRatePerSeason.json
│           ├── playerDismissalCount.json
│           └── bestEconomySuperOver.json
│
├── package.json
├── package-lock.json
└── .gitignore
```

📘 Technologies Used

- Node.js

- JavaScript    

- fs / fs-extra

- csv-parser

- JSON output