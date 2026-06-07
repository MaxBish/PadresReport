const REPORT = {
  record: { w: 33, l: 30 },
  weekSummary: {
    record: "1-5",
    runsScored: 21,
    runsAllowed: 30,
    notes: [
      "Auto-updated from MLB Stats API for games 2026-05-29 to 2026-06-04.",
      "Padres outscored opponents 21-30 over 6 finalized game(s)."
    ],
    teamOps: ".651"
  },
  roster: [
    {
      id: "tatis",
      name: "Fernando Tatis Jr.",
      position: "RF",
      hand: "R/R",
      stats: { G: 60, AVG: ".270", OBP: ".340", SLG: ".323", OPS: ".663", HR: 1, RBI: 18, SB: 14 }
    },
    {
      id: "merrill",
      name: "Jackson Merrill",
      position: "CF",
      hand: "L/R",
      stats: { G: 58, AVG: ".207", OBP: ".280", SLG: ".341", OPS: ".621", HR: 6, RBI: 24, SB: 10 }
    },
    {
      id: "machado",
      name: "Manny Machado",
      position: "3B",
      hand: "R/R",
      stats: { G: 59, AVG: ".174", OBP: ".262", SLG: ".357", OPS: ".619", HR: 11, RBI: 32, SB: 1 }
    },
    {
      id: "bogaerts",
      name: "Xander Bogaerts",
      position: "SS",
      hand: "R/R",
      stats: { G: 59, AVG: ".231", OBP: ".304", SLG: ".358", OPS: ".662", HR: 8, RBI: 27, SB: 9 }
    },
    {
      id: "arraez",
      name: "Luis Arraez",
      position: "2B",
      hand: "L/R",
      stats: { G: 35, AVG: ".309", OBP: ".356", SLG: ".377", OPS: ".733", HR: 2, RBI: 13, SB: 1 }
    },
    {
      id: "campusano",
      name: "Luis Campusano",
      position: "C",
      hand: "R/R",
      stats: { G: 28, AVG: ".276", OBP: ".332", SLG: ".471", OPS: ".803", HR: 6, RBI: 23, SB: 0 }
    },
    {
      id: "france",
      name: "Ty France",
      position: "1B",
      hand: "R/R",
      stats: { G: 41, AVG: ".286", OBP: ".328", SLG: ".527", OPS: ".855", HR: 6, RBI: 18, SB: 1 }
    },
    {
      id: "sheets",
      name: "Gavin Sheets",
      position: "1B",
      hand: "L/L",
      stats: { G: 56, AVG: ".238", OBP: ".335", SLG: ".471", OPS: ".806", HR: 10, RBI: 25, SB: 3 }
    },
    {
      id: "king",
      name: "Michael King",
      position: "P",
      hand: "R/R",
      stats: { G: 12, GS: 12, W: 4, ERA: "3.18", WHIP: "1.13", IP: "68.0", K: 65, BB: 29, SV: 0, HLD: 0, BS: 0 }
    },
    {
      id: "buehler",
      name: "Walker Buehler",
      position: "P",
      hand: "R/R",
      stats: { G: 12, GS: 12, W: 3, ERA: "4.53", WHIP: "1.28", IP: "57.2", K: 49, BB: 20, SV: 0, HLD: 0, BS: 0 }
    },
    {
      id: "morejon",
      name: "Adrian Morejon",
      position: "P",
      hand: "L/L",
      stats: { G: 28, GS: 0, W: 4, ERA: "4.75", WHIP: "1.19", IP: "30.1", K: 35, BB: 7, SV: 1, HLD: 11, BS: 4 }
    },
    {
      id: "miller",
      name: "Mason Miller",
      position: "P",
      hand: "R/R",
      stats: { G: 24, GS: 0, W: 1, ERA: "0.72", WHIP: "0.84", IP: "25.0", K: 49, BB: 11, SV: 17, HLD: 0, BS: 0 }
    }
  ],
  nextGames: [
    { date: "SUN JUN 7",  time: "1:10 PM PT",  matchup: "SD Padres vs New York Mets",   venue: "Petco Park" },
    { date: "MON JUN 8",  time: "6:40 PM PT",  matchup: "SD Padres vs Cincinnati Reds", venue: "Petco Park" },
    { date: "TUE JUN 9",  time: "6:40 PM PT",  matchup: "SD Padres vs Cincinnati Reds", venue: "Petco Park" },
    { date: "WED JUN 10", time: "1:10 PM PT",  matchup: "SD Padres vs Cincinnati Reds", venue: "Petco Park" },
    { date: "FRI JUN 12", time: "6:40 PM PT",  matchup: "SD Padres @ Arizona Diamondbacks", venue: "Chase Field" },
    { date: "SAT JUN 13", time: "5:10 PM PT",  matchup: "SD Padres @ Arizona Diamondbacks", venue: "Chase Field" },
  ],
  seasonHighlights: [],
  entries: [
    {
      type: "recap",
      gameLabel: "Game #64",
      gameDate: "SAT, JUN 6",
      venue: "PETCO PARK, SAN DIEGO",
      result: "W",
      away: { abbr: "NYM", city: "NEW YORK", name: "METS" },
      home: { abbr: "SD",  city: "SAN DIEGO", name: "PADRES" },
      awayScore: 2, homeScore: 3, winnerIsHome: true,
      linescore: {
        innings: ["1","2","3","4","5","6","7","8","9"],
        away:    ["0","1","0","0","0","0","1","0","0"],
        home:    ["0","0","1","0","0","0","2","0","X"],
        awayTotals: { R:"2", H:"6", E:"0" },
        homeTotals: { R:"3", H:"5", E:"0" },
      },
      stats: [
        { label: "WP",       value: "B. Rodriguez (1 IP, 1 HR, 1 ER)",  type: "win"     },
        { label: "LP",       value: "A. Warren (2 IP, 2 ER, HR)",       type: "loss"    },
        { label: "SV",       value: "Miller (1 IP, 0 ER, 1 K)",         type: "win"     },
        { label: "Fermin",   value: "1-3, go-ahead 2-run HR, 7th",      type: "win"     },
        { label: "Song",     value: "2-3, BB, 2 R scored",              type: "neutral" },
        { label: "Tatis Jr.",value: "2-4, RBI",                         type: "neutral" },
        { label: "Canning",  value: "5 IP, 3 H, 1 ER, 6 K",            type: "neutral" },
        { label: "Adam",     value: "1 IP, 2 H, 0 ER",                  type: "neutral" },
        { label: "Morejon",  value: "1 IP, 0 ER, 2 K",                  type: "neutral" },
      ],
      paragraphs: [
        "Holy SHIT. We won a game. It's been so long, I forgot what this feels like. As I mentioned in yesterday's update, the Padres are not a stats based team, we are a see ball, throw ball team, and today, we hit ball just enough to sneak out the dub.",
        "Our Korean superstar who is actually ass but is also actually a superstar had an insane game both defensively and grinded his ass off to get on base today, so that was exciting to see. Fernando drove a run home thank god, Manny and Merrill both almost hit homers, and Freddy Fermin, quite possibly the worst major league baseball player in the league right now, hits the go-ahead two run HR. To quote the late, great, amazing duo of Troy and Gabriella, this could be the start of something new and man oh man, does it feel so right to be here with you.",
        "Shoutout to Canning, Morejon, Bradgley Rodriguez (stupid ass name), Jason Adam, and Mason Miller. They battled this dubski out for us on the pitching mound.",
        "Special shoutout to Laines for this one. This was the first Padres game that we've watched in a long time, and it was all thanks to her. We have been really busy recently and on vacation as well so we haven't had time to sit down and watch the Padres recently (which is a good thing given the recent skip), but Laines is just the good luck charm. She was adamant that she watches her Padres play today, and we get the dub because she was locked tf in on her watching and support today. I felt it, the Padres players felt it, and they delivered. See you all tomorrow for a chance to actually win a series.",
      ],
    },
    {
      type: "recap",
      gameLabel: "Game #63",
      gameDate: "FRI, JUN 5",
      venue: "PETCO PARK, SAN DIEGO",
      result: "L",
      away: { abbr: "NYM", city: "NEW YORK", name: "METS" },
      home: { abbr: "SD",  city: "SAN DIEGO", name: "PADRES" },
      awayScore: 5, homeScore: 0, winnerIsHome: false,
      linescore: {
        innings: ["1","2","3","4","5","6","7","8","9"],
        away:    ["0","1","1","0","2","0","0","0","1"],
        home:    ["0","0","0","0","0","0","0","0","0"],
        awayTotals: { R:"5", H:"9", E:"1" },
        homeTotals: { R:"0", H:"3", E:"0" },
      },
      stats: [
        { label: "WP",     value: "C. Scott (5.2 IP, 3 H, 0 ER, 3 K)", type: "win"     },
        { label: "LP",     value: "King (6 IP, 6 H, 4 ER, 2 HR, 4 K)", type: "loss"    },
        { label: "SD AVG", value: ".100 (3-for-30)",                    type: "loss"    },
        { label: "SD RISP",value: "0-1",                                type: "loss"    },
        { label: "Torrens (NYM)", value: "HR, 2B, 2 RBI, 2 R",         type: "neutral" },
        { label: "Young (NYM)",   value: "HR, RBI",                     type: "neutral" },
        { label: "Castellanos",   value: "DFA'd",                       type:"neutral"  },
        { label: "Laureano",      value: "Torn labrum — likely out for year", type: "loss" },
      ],
      paragraphs: [
        "Absolutely nothing to say about this game. The offense continues to suck, Michael King is good but didn't have his best stuff today, and we have lost 10 of the last 11. Vibes are at an all time low, which is very bad considering we're a vibes based clubhouse and not a results based clubhouse.",
        "Some news: Castellanos has been DFA'd, and Laureano is probably done for the year with hip surgery for a torn labrum. The nerds have been winning the battle, but they won't win the war. By the way, Dads are last in everything when it comes to hitting the baseball, but we also are a clubhouse that doesn't care about stats. See ball, throw ball. Unfortunately, they suck ass at step number 3 which is hit ball. Work in progress, let's hope they turn it around soon.",
      ],
    },
    {
      type: "recap",
      gameLabel: "Road Series vs Phillies",
      gameDate: "JUN 2-4",
      venue: "CITIZENS BANK PARK, PHILADELPHIA",
      result: "L",
      seriesResult: "LOST 0-3",
      away: { abbr: "SD", city: "SAN DIEGO", name: "PADRES" },
      home: { abbr: "PHI", city: "PHILADELPHIA", name: "PHILLIES" },
      awayScore: 8,
      homeScore: 12,
      winnerIsHome: true,
      linescore: null,
      stats: [
        { label: "Game 1", value: "SD 2 - PHI 3", type: "loss" },
        { label: "Game 2", value: "SD 2 - PHI 3", type: "loss" },
        { label: "Game 3", value: "SD 4 - PHI 6", type: "loss" }
      ],
      paragraphs: [
        "Well, I haven't had an opportunity to watch a lot of Padres recently but looks like that's a good thing. This team sucks ass, and it's the same problems. Our pitching has been good, our bullpen has been good but also have really struggled at moments and that fucking sucks. And this offense is the worst offense in the league. At least Tatis finally hit one homer.",
        "To quote one of our very valued and lovely readers who offered to write a ghost script for me, Nahhh we were too trash i had to get really high and not think aboot it. I agree completely. Don't look at standings. Also, fuck Christopher Sanchez and fuck the city of Philadelphia"
      ]
    },
    {
      type: "recap",
      gameLabel: "Road Series vs Nationals",
      gameDate: "MAY 29-31",
      venue: "NATIONALS PARK, WASHINGTON DC",
      result: "L",
      seriesResult: "LOST 1-2",
      away: { abbr: "SD", city: "SAN DIEGO", name: "PADRES" },
      home: { abbr: "WSH", city: "WASHINGTON", name: "NATIONALS" },
      awayScore: 13,
      homeScore: 18,
      winnerIsHome: true,
      linescore: null,
      stats: [
        { label: "Game 1", value: "SD 7 - WSH 5", type: "win" },
        { label: "Game 2", value: "SD 4 - WSH 9", type: "loss" },
        { label: "Game 3", value: "SD 2 - WSH 4", type: "loss" }
      ],
      paragraphs: [
        "Tatis finally hit a homer, and I lost $60 live betting the Padres because we suck."
      ]
    },
    {
      type: "recap",
      gameLabel: "Home Series vs Phillies",
      gameDate: "MAY 25-27",
      venue: "PETCO PARK, SAN DIEGO",
      result: "L",
      seriesResult: "LOST 0-3",
      away: { abbr: "PHI", city: "PHILADELPHIA", name: "PHILLIES" },
      home: { abbr: "SD", city: "SAN DIEGO", name: "PADRES" },
      awayScore: 10,
      homeScore: 3,
      winnerIsHome: false,
      linescore: null,
      stats: [
        { label: "Game 1", value: "PHI 3 - SD 0", type: "loss" },
        { label: "Game 2", value: "PHI 4 - SD 3", type: "loss" },
        { label: "Game 3", value: "PHI 3 - SD 0", type: "loss" }
      ],
      paragraphs: [
        "Welp, swept, we suck"
      ]
    }
  ]
};