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
│   │   ├── matches_per_year.js
│   │   ├── matchesWonPerTeamPerYear.js
│   │   ├── extraRunsPerTeam.js
│   │   ├── top10Bowlers2015.js
│   │   ├── teamTossAndMatchWon.js
│   │   ├── playerOfTheMatch.js
│   │   ├── strikeRateofBatsman.js
│   │   ├── dismissedPlayer.js
│   │   └── bowlerEconomy.js
│   │
│   ├── utils/
│   │   ├── saveToJSON.js
│   │   └── csvTojson
│   │
│   └── public/
│       └── output/
│           ├── matchesPerYear.json
│           ├── matchesWonPerTeamPerYear.json
│           ├── extraRunsConcededByTeam.json
│           ├── top10EconomicalBowler2015.json
│           ├── tossAndMatchWon.json
│           ├── playerOfMatchSeason.json
│           ├── strikeRatePerOfBatsman.json
│           ├── playerDismissedByAnotherPlayer.json
│           └── bowlerEconomy.json
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

📘 Technologies Used

- Node.js

- JavaScript    

- fs / fs-extra

- csv-parser

- JSON output
