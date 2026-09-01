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
      gameLabel: "Game vs Rays",
      gameDate: "SAT, AUG 30",
      venue: "TROPICANA FIELD, ST. PETERSBURG",
      result: "L",
      away: { abbr: "SD", city: "SAN DIEGO", name: "PADRES" },
      home: { abbr: "TB", city: "TAMPA BAY", name: "RAYS" },
      awayScore: 5, homeScore: 6, winnerIsHome: true,
      linescore: null,
      stats: [
        { label: "Miller", value: "9th-inning meltdown", type: "loss" },
        { label: "Final Thought", value: "This is the kind of loss that makes me want to start a cult", type: "loss" },
      ],
      xPost: `
        <blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Samad Taylor had the last out in his glove, ran into the wall, and it came out of his glove and over it for a 2 run home run. Rays tie it in the 9th<br><br>Unbelievable<a href="https://x.com/hashtag/padres?src=hash&amp;ref_src=twsrc%5Etfw">#padres</a> <a href="https://t.co/9d1ZbK5wfD">pic.twitter.com/9d1ZbK5wfD</a></p>&mdash; Padres Central (@PadresCentral_) <a href="https://x.com/PadresCentral_/status/2094158642400604230?ref_src=twsrc%5Etfw">August 30, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>
      `,
      paragraphs: [
        "Hello friends and family. I apologize....for absolutely fucking nothing. I am so back, and here to give you unedited, uncompromising, uncensored takes on this wild, wacky, absolutely bullshit Padres season ranging from it's so joever to we are so back. I know you all were reliant on my thoughts and ball knowledge to make sense of this season, and for that, I have returned. Similar to when Gandolf died and decided to level up before coming back from the dead for no reason other than he was remarkably racist and wanted to go from being on-the-fence, mr grey man to running around killing minority orcs in his KKK outfit. It's kinda like that, except I'm not racist and not wearing KKK robes. I'm just here to shit on the Dads and give them props for when they ball shot call as they should because this roster is fucking expensive.",
        "So as I mentioned, this season has ranged from it's never been more over to we are so back. Some of the we're so back moments is the team was sold to the same group (but different people) that operate the Chelsea Football Club in the Premier League. That is generally viewed as a positive because it means that they'll spend money on the team. This is also viewed as a negative if you've followed Chelsea at all since that ownership group took over (they spend a lot of money to suck, but this year will be different!)",
        "We traded for some starting pitchers. Of course, the starters are not very good or are hurt because we have absolutely nothing worth trading in the minors currently except for Salas and I will throw a brick at the stadium from my apartment if they trade Salas. So we're basically back at where we were when these updates stopped for a bit when it comes to starting pitching. Oh, and Joe Musgrove still hasn't pitched because he's fucking cooked as we all know. At least he takes cool pictures with Laines and I at bars because he definitely hasn't lost a step when it comes to drinking.",
        "There are two main differences that have occurred since these updates stopped. We started hitting the baseball. A LOT. WITH POWER. Fernando is officially so so so so so back and fucing raking the ball. Send his dad back to the dominican because if his dad fucks his swing up one more time where it takes him half a season to hit a baseball again, I'll actually hang a trade Tatis' dad sign from the apartment. Besides the point, we all started hitting the ball again. Merrill has been awesome, Tatis has been awesome, Manny is still the fattest 3rd baseman in the league and is the most frustrating player in the world, but he's the captain so we make do. Oh, and Manny is definitely hurt and just doesn't give a fuck because he wants his check. Respect.",
        "With all that being said, we've been a good baseball team recently. We got about a month of baseball left, and we're definitely competing for a Wild Card spot. Honestly, if this team makes the playoffs, anything can happen. I'll never stop being cautiously optimistic. This team has been winning and I'm really happy about it honestly.",
        "BUT WE KEEP FINDING WAYS TO LOSE GAMES IN WAYS LITERALLY NEVER BEFORE SEEN IN A SPORT THAT'S BEEN AROUND SINCE THIS COUNTRY WAS FUCKING FOUNDED. LIKE WHAT THE HELL IS THIS:",
        "Granted, they didn't lose the game there, but HOW IN THE WORLD DO WE HAVE TWO OUTS IN THE BOTTOM OF THE NINTH WITH MASON MILLER PITCHING AND THAT SHIT HAPPENS. KILLLLLL MEEEEE.",
        "Okay, that's enough for now. If I think of something I didn't include in this one, I'll push out another update tomorrow. Thanks for waiting everybody, we are so back. Go Phillies, beat the Diamondbacks, and DADS YOU BETTER KEEP WINNING."
      ],
    },
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