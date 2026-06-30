// whereMoviFound - Comprehensive Movie & Series Database (113 titles, all genres)
export const movies = [

  // ============================================================
  // ⚡ ACTION & ADVENTURE — Superhero
  // ============================================================
  {
    "id": "iron-man",
    "title": "Iron Man",
    "year": "2008",
    "genre": ["Action", "Adventure"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h 6m",
    "director": "Jon Favreau",
    "writers": "Mark Fergus, Hawk Ostby",
    "synopsis": "When Tony Stark, a billionaire industrialist and weapons developer, is captured and forced to build a weapon of mass destruction, he instead creates an armored suit and escapes. He becomes Iron Man, a superhero.",
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72VFT3cc1oAJhbRcKoOO.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
    "cast": [
      { "name": "Robert Downey Jr.", "character": "Tony Stark", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Gwyneth Paltrow", "character": "Pepper Potts", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/iron-man/6k7JADmCKFfl", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "black-panther",
    "title": "Black Panther",
    "year": "2018",
    "genre": ["Action", "Adventure"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "7.3",
    "duration": "2h 14m",
    "director": "Ryan Coogler",
    "writers": "Ryan Coogler, Joe Robert Cole",
    "synopsis": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
    "poster": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b6ZJZHUdMEFEcGiDpJjlfUWela.jpg",
    "cast": [
      { "name": "Chadwick Boseman", "character": "T'Challa / Black Panther", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Michael B. Jordan", "character": "Erik Killmonger", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/black-panther/1GuD8cPMRqf0", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "spiderman-no-way-home",
    "title": "Spider-Man: No Way Home",
    "year": "2021",
    "genre": ["Action", "Adventure"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "8.2",
    "duration": "2h 28m",
    "director": "Jon Watts",
    "writers": "Chris McKenna, Erik Sommers",
    "synopsis": "With Spider-Man's identity now revealed, Peter Parker asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "cast": [
      { "name": "Tom Holland", "character": "Peter Parker", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Zendaya", "character": "MJ", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/spider-man-no-way-home/3TFsbakpkD1f", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81505765", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "wonder-woman",
    "title": "Wonder Woman",
    "year": "2017",
    "genre": ["Action", "Adventure"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "7.4",
    "duration": "2h 21m",
    "director": "Patty Jenkins",
    "writers": "Allan Heinberg",
    "synopsis": "When a pilot crashes on their island and tells of a conflict in the outside world, Diana leaves her Amazon home to fight in the war and discover her full powers.",
    "poster": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xqkSHEhukzIlJFVFpbWMfpTa4IO.jpg",
    "cast": [
      { "name": "Gal Gadot", "character": "Diana Prince", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Chris Pine", "character": "Steve Trevor", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/wonder-woman/d4b89c24-89e5-484e-b39f-a9c47bb30a3f", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "guardians-of-the-galaxy",
    "title": "Guardians of the Galaxy",
    "year": "2014",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 1m",
    "director": "James Gunn",
    "writers": "James Gunn, Nicole Perlman",
    "synopsis": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe from an all-powerful orb.",
    "poster": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgivebr.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
    "cast": [
      { "name": "Chris Pratt", "character": "Peter Quill / Star-Lord", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Zoe Saldana", "character": "Gamora", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/guardians-of-the-galaxy/48unorPbS5lD", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "the-boys",
    "title": "The Boys",
    "year": "2019",
    "genre": ["Action", "Drama"],
    "subGenre": "Superhero",
    "type": "series",
    "rating": "8.7",
    "duration": "4 Seasons",
    "director": "Eric Kripke",
    "writers": "Eric Kripke",
    "synopsis": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers in a dark, satirical look at the superhero genre.",
    "poster": "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
    "cast": [
      { "name": "Karl Urban", "character": "Billy Butcher", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jack Quaid", "character": "Hughie Campbell", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/The-Boys-Season-1/dp/B0875RB2KX", "color": "#00A8E8", "logo": "▶" }
    ],
    "seasons": []
  },

  // ============================================================
  // ⚡ ACTION & ADVENTURE — Spy/Espionage
  // ============================================================
  {
    "id": "casino-royale",
    "title": "Casino Royale",
    "year": "2006",
    "genre": ["Action", "Adventure"],
    "subGenre": "Spy/Espionage",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 24m",
    "director": "Martin Campbell",
    "writers": "Neal Purvis, Robert Wade",
    "synopsis": "James Bond's first mission as 007 takes him to Casino Royale, Montenegro, where he must beat terrorist financier Le Chiffre in a high-stakes poker game.",
    "poster": "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oVDq2grLeWfAcsMeMH9h5L7e1I6.jpg",
    "cast": [
      { "name": "Daniel Craig", "character": "James Bond", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Eva Green", "character": "Vesper Lynd", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Casino-Royale-Daniel-Craig/dp/B000V8EWZE", "color": "#00A8E8", "logo": "▶" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70064976", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "mission-impossible-fallout",
    "title": "Mission: Impossible – Fallout",
    "year": "2018",
    "genre": ["Action", "Adventure"],
    "subGenre": "Spy/Espionage",
    "type": "movie",
    "rating": "7.7",
    "duration": "2h 27m",
    "director": "Christopher McQuarrie",
    "writers": "Christopher McQuarrie",
    "synopsis": "Ethan Hunt and his IMF team must race against time after a mission gone wrong, as they try to prevent a nuclear catastrophe with mercenaries on their trail.",
    "poster": "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/rcAZxBGqB5JGeFJCiWtmvCqOMAp.jpg",
    "cast": [
      { "name": "Tom Cruise", "character": "Ethan Hunt", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Henry Cavill", "character": "August Walker", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/mission-impossible-fallout/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Mission-Impossible-Fallout-Tom-Cruise/dp/B07H8H7BMP", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "kingsman",
    "title": "Kingsman: The Secret Service",
    "year": "2014",
    "genre": ["Action", "Adventure"],
    "subGenre": "Spy/Espionage",
    "type": "movie",
    "rating": "7.7",
    "duration": "2h 9m",
    "director": "Matthew Vaughn",
    "writers": "Jane Goldman, Matthew Vaughn",
    "synopsis": "A spy organisation recruits a promising street kid while a global threat emerges from a tech billionaire with a plan to solve overpopulation through mass murder.",
    "poster": "https://image.tmdb.org/t/p/w500/oRmF8a0LHioLeA2sPfRi0iHuJ5U.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/6cHHt3hGucWLAiCxUALDQSGKzwZ.jpg",
    "cast": [
      { "name": "Taron Egerton", "character": "Gary 'Eggsy' Unwin", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Colin Firth", "character": "Harry Hart", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/kingsman-the-secret-service/39AJ0bBK6wKe", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/kingsman-the-secret-service", "color": "#1CE783", "logo": "H" }
    ]
  },

  // ============================================================
  // ⚡ ACTION & ADVENTURE — Heist/Caper
  // ============================================================
  {
    "id": "oceans-eleven",
    "title": "Ocean's Eleven",
    "year": "2001",
    "genre": ["Action", "Comedy"],
    "subGenre": "Heist/Caper",
    "type": "movie",
    "rating": "7.7",
    "duration": "1h 56m",
    "director": "Steven Soderbergh",
    "writers": "Ted Griffin",
    "synopsis": "Danny Ocean and his ten associates plan to rob three Las Vegas casinos simultaneously — but Danny's ex-wife and the casino owner complicate the heist.",
    "poster": "https://image.tmdb.org/t/p/w500/4eDw72vv4tHLSfjwMlh2yWOOCdZ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZw.jpg",
    "cast": [
      { "name": "George Clooney", "character": "Danny Ocean", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Brad Pitt", "character": "Rusty Ryan", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/oceans-eleven/8a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "money-heist",
    "title": "Money Heist",
    "year": "2017",
    "genre": ["Action", "Drama", "Thriller"],
    "subGenre": "Heist/Caper",
    "type": "series",
    "rating": "8.2",
    "duration": "5 Parts",
    "director": "Álex Pina",
    "writers": "Álex Pina",
    "synopsis": "A criminal mastermind known as The Professor recruits a gang of thieves to execute an unprecedented heist on the Royal Mint of Spain.",
    "poster": "https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaLUQb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xGexTKCJDkl61EtQJMCRLrHmJGv.jpg",
    "cast": [
      { "name": "Álvaro Morte", "character": "The Professor", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Úrsula Corberó", "character": "Tokyo", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80192098", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "baby-driver",
    "title": "Baby Driver",
    "year": "2017",
    "genre": ["Action", "Crime"],
    "subGenre": "Heist/Caper",
    "type": "movie",
    "rating": "7.6",
    "duration": "1h 53m",
    "director": "Edgar Wright",
    "writers": "Edgar Wright",
    "synopsis": "A talented, music-loving getaway driver relies on the beat of his personal soundtrack to be the best in the game. After meeting the girl of his dreams, he sees a chance to ditch his shady world.",
    "poster": "https://image.tmdb.org/t/p/w500/ojRkIqNMNfNYm5u3sJoG7gXVSTa.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4BSGjiKbSxpxhkvOo2zKt1Y8h1V.jpg",
    "cast": [
      { "name": "Ansel Elgort", "character": "Baby", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Kevin Spacey", "character": "Doc", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80158819", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Baby-Driver-Ansel-Elgort/dp/B074TGQM4Z", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // ⚡ ACTION & ADVENTURE — Survival/Disaster
  // ============================================================
  {
    "id": "the-revenant",
    "title": "The Revenant",
    "year": "2015",
    "genre": ["Action", "Adventure", "Drama"],
    "subGenre": "Survival/Disaster",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 36m",
    "director": "Alejandro G. Iñárritu",
    "writers": "Mark L. Smith, Alejandro G. Iñárritu",
    "synopsis": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being left for dead by a treacherous hunting partner following a bear attack.",
    "poster": "https://image.tmdb.org/t/p/w500/in2sPsXRbJFVDlpFpv5d7w8dtQD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tGSVp9PSF5o4lhOKJ0lk7jCJC0L.jpg",
    "cast": [
      { "name": "Leonardo DiCaprio", "character": "Hugh Glass", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Tom Hardy", "character": "John Fitzgerald", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/the-revenant/4F8JShYOG0MA", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/the-revenant", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "gravity",
    "title": "Gravity",
    "year": "2013",
    "genre": ["Action", "Drama", "Sci-Fi"],
    "subGenre": "Survival/Disaster",
    "type": "movie",
    "rating": "7.7",
    "duration": "1h 31m",
    "director": "Alfonso Cuarón",
    "writers": "Alfonso Cuarón, Jonás Cuarón",
    "synopsis": "Two astronauts work together to survive after an accident leaves them stranded in space, far from any rescue.",
    "poster": "https://image.tmdb.org/t/p/w500/uO1bMnFV5cjRJkTlv4P1bHnKFD1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b6hnl8DnIpVqvFfLAJ4FI5bqc1w.jpg",
    "cast": [
      { "name": "Sandra Bullock", "character": "Dr. Ryan Stone", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "George Clooney", "character": "Matt Kowalski", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/gravity/3e4f5a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "cast-away",
    "title": "Cast Away",
    "year": "2000",
    "genre": ["Adventure", "Drama"],
    "subGenre": "Survival/Disaster",
    "type": "movie",
    "rating": "7.8",
    "duration": "2h 23m",
    "director": "Robert Zemeckis",
    "writers": "William Broyles Jr.",
    "synopsis": "A FedEx executive must transform himself physically and emotionally to survive a crash landing on a deserted island.",
    "poster": "https://image.tmdb.org/t/p/w500/2KFbTxHxj9EkHa39dFJsEbFHnBj.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Tom Hanks", "character": "Chuck Noland", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/cast-away/2fFhVZ06kl9a", "color": "#1A3D8F", "logo": "D+" }
    ]
  },

  // ============================================================
  // ⚡ ACTION & ADVENTURE — Martial Arts
  // ============================================================
  {
    "id": "crouching-tiger-hidden-dragon",
    "title": "Crouching Tiger, Hidden Dragon",
    "year": "2000",
    "genre": ["Action", "Adventure"],
    "subGenre": "Martial Arts",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h",
    "director": "Ang Lee",
    "writers": "Hui-Ling Wang, James Schamus",
    "synopsis": "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure, fighting and fantasy.",
    "poster": "https://image.tmdb.org/t/p/w500/xRlFHLO9UmBvIAyKmKtOxWjElQj.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Chow Yun-fat", "character": "Li Mu Bai", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Michelle Yeoh", "character": "Yu Shu Lien", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/60021793", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "the-raid",
    "title": "The Raid: Redemption",
    "year": "2011",
    "genre": ["Action", "Crime", "Thriller"],
    "subGenre": "Martial Arts",
    "type": "movie",
    "rating": "7.6",
    "duration": "1h 41m",
    "director": "Gareth Evans",
    "writers": "Gareth Evans",
    "synopsis": "A SWAT team becomes trapped in a tenement run by a ruthless mobster and his army of killers and thugs.",
    "poster": "https://image.tmdb.org/t/p/w500/1kdc3EHGjPcEW9T0HMqkJGdSMr0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5MsbQCp7FpYr3INLpeKDLJrlDh8.jpg",
    "cast": [
      { "name": "Iko Uwais", "character": "Rama", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70188144", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "kill-bill-vol-1",
    "title": "Kill Bill: Volume 1",
    "year": "2003",
    "genre": ["Action", "Crime", "Thriller"],
    "subGenre": "Martial Arts",
    "type": "movie",
    "rating": "8.2",
    "duration": "1h 51m",
    "director": "Quentin Tarantino",
    "writers": "Quentin Tarantino",
    "synopsis": "After awakening from a coma, a woman seeks revenge against the hit squad that murdered her unborn child and left her for dead.",
    "poster": "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "Uma Thurman", "character": "The Bride", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Lucy Liu", "character": "O-Ren Ishii", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/kill-bill-volume-1/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/kill-bill-volume-1", "color": "#1CE783", "logo": "H" }
    ]
  },

  // ============================================================
  // 😂 COMEDY — Sitcom
  // ============================================================
  {
    "id": "the-office",
    "title": "The Office",
    "year": "2005",
    "genre": ["Comedy"],
    "subGenre": "Sitcom",
    "type": "series",
    "rating": "9.0",
    "duration": "9 Seasons",
    "director": "Greg Daniels",
    "writers": "Greg Daniels, Ricky Gervais",
    "synopsis": "A mockumentary on a group of typical office workers where the workday consists of ego clashes, inappropriate behavior, and silly schemes.",
    "poster": "https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oQzTJQDKDOv7gyNTKPuVqZ5cLlC.jpg",
    "cast": [
      { "name": "Steve Carell", "character": "Michael Scott", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "John Krasinski", "character": "Jim Halpert", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/tv/the-office", "color": "#009688", "logo": "🦚" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70136120", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "friends",
    "title": "Friends",
    "year": "1994",
    "genre": ["Comedy"],
    "subGenre": "Sitcom",
    "type": "series",
    "rating": "8.9",
    "duration": "10 Seasons",
    "director": "David Crane, Marta Kauffman",
    "writers": "David Crane, Marta Kauffman",
    "synopsis": "Follows the personal and professional lives of six twenty-something friends living in Manhattan — a classic sitcom about love, friendship, and coffee shops.",
    "poster": "https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Jennifer Aniston", "character": "Rachel Green", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Courteney Cox", "character": "Monica Geller", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/friends/ac8d18e5-5e0b-4e91-91e2-a69ea1a2d56d", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },
  {
    "id": "brooklyn-nine-nine",
    "title": "Brooklyn Nine-Nine",
    "year": "2013",
    "genre": ["Comedy"],
    "subGenre": "Sitcom",
    "type": "series",
    "rating": "8.4",
    "duration": "8 Seasons",
    "director": "Michael Schur, Dan Goor",
    "writers": "Michael Schur, Dan Goor",
    "synopsis": "Follows the daily activities of the 99th Precinct of the NYPD, led by the immature but brilliant detective Jake Peralta.",
    "poster": "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/e2hCUg2Z3sJ6yWF9NLU24SIKeWa.jpg",
    "cast": [
      { "name": "Andy Samberg", "character": "Jake Peralta", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Andre Braugher", "character": "Raymond Holt", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/tv/brooklyn-nine-nine", "color": "#009688", "logo": "🦚" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70281562", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "schitts-creek",
    "title": "Schitt's Creek",
    "year": "2015",
    "genre": ["Comedy"],
    "subGenre": "Sitcom",
    "type": "series",
    "rating": "8.4",
    "duration": "6 Seasons",
    "director": "Daniel Levy, Eugene Levy",
    "writers": "Daniel Levy, Eugene Levy",
    "synopsis": "A formerly wealthy family is forced to relocate to a small town they once purchased as a joke, leading to hilarious fish-out-of-water moments.",
    "poster": "https://image.tmdb.org/t/p/w500/lqfRrGRKq47a7UTEQ2VzV5Ixid.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Eugene Levy", "character": "Johnny Rose", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Catherine O'Hara", "character": "Moira Rose", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80036165", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },

  // ============================================================
  // 😂 COMEDY — Romantic Comedy
  // ============================================================
  {
    "id": "crazy-rich-asians",
    "title": "Crazy Rich Asians",
    "year": "2018",
    "genre": ["Comedy"],
    "subGenre": "Romantic Comedy",
    "type": "movie",
    "rating": "6.9",
    "duration": "2h",
    "director": "Jon M. Chu",
    "writers": "Peter Chiarelli, Adele Lim",
    "synopsis": "An American-born Chinese economics professor accompanies her boyfriend to his best friend's wedding in Singapore, only to discover he is one of the country's wealthiest heirs.",
    "poster": "https://image.tmdb.org/t/p/w500/ha1JoEBQOhxIRbcXb19zCJkNEOp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qUEMdQCjLMBrTcODBYbMMMcBblrB.jpg",
    "cast": [
      { "name": "Constance Wu", "character": "Rachel Chu", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Henry Golding", "character": "Nick Young", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/crazy-rich-asians/5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80242279", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "about-time",
    "title": "About Time",
    "year": "2013",
    "genre": ["Comedy", "Drama"],
    "subGenre": "Romantic Comedy",
    "type": "movie",
    "rating": "7.8",
    "duration": "2h 3m",
    "director": "Richard Curtis",
    "writers": "Richard Curtis",
    "synopsis": "At 21, Tim discovers he can time travel and decides to use this ability to improve his love life. But he learns that love needs no magic to be perfect.",
    "poster": "https://image.tmdb.org/t/p/w500/iZq8GimKNChQQMHATXKRXUdmSJt.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/e2hCUg2Z3sJ6yWF9NLU24SIKeWa.jpg",
    "cast": [
      { "name": "Domhnall Gleeson", "character": "Tim Lake", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Rachel McAdams", "character": "Mary", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70265315", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/About-Time-Domhnall-Gleeson/dp/B00I15LLRC", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 😂 COMEDY — Dark Comedy & Satire
  // ============================================================
  {
    "id": "dont-look-up",
    "title": "Don't Look Up",
    "year": "2021",
    "genre": ["Comedy", "Drama"],
    "subGenre": "Satire & Parody",
    "type": "movie",
    "rating": "7.2",
    "duration": "2h 18m",
    "director": "Adam McKay",
    "writers": "Adam McKay",
    "synopsis": "Two astronomers embark on a media tour to warn humanity of an approaching comet that will destroy planet Earth — but find an indifferent world fixated on tabloid gossip.",
    "poster": "https://image.tmdb.org/t/p/w500/frjM0cVIQ9R1r6EThNGMKBQrS81.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "cast": [
      { "name": "Leonardo DiCaprio", "character": "Dr. Randall Mindy", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jennifer Lawrence", "character": "Kate Dibiasky", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81252357", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "in-bruges",
    "title": "In Bruges",
    "year": "2008",
    "genre": ["Comedy", "Crime", "Drama"],
    "subGenre": "Dark Comedy",
    "type": "movie",
    "rating": "7.9",
    "duration": "1h 47m",
    "director": "Martin McDonagh",
    "writers": "Martin McDonagh",
    "synopsis": "After a job gone wrong, two hit men wait in Bruges, Belgium for orders from their boss, musing on life and morality.",
    "poster": "https://image.tmdb.org/t/p/w500/hXZ7Cx0DXRE5baSFqkFT4HxjE2N.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "Colin Farrell", "character": "Ray", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Brendan Gleeson", "character": "Ken", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/in-bruges/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/in-bruges", "color": "#FF5400", "logo": "T" }
    ]
  },

  // ============================================================
  // 🎭 DRAMA — Coming-of-Age
  // ============================================================
  {
    "id": "boyhood",
    "title": "Boyhood",
    "year": "2014",
    "genre": ["Drama"],
    "subGenre": "Coming-of-Age",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h 45m",
    "director": "Richard Linklater",
    "writers": "Richard Linklater",
    "synopsis": "The film chronicles the life of Mason from age 6 to age 18, filmed with the same cast over 12 years.",
    "poster": "https://image.tmdb.org/t/p/w500/5p9pSS3NXJftNocVmqMeAqtqV2Y.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Ellar Coltrane", "character": "Mason", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Ethan Hawke", "character": "Mason Sr.", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/boyhood", "color": "#1CE783", "logo": "H" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Boyhood-Ellar-Coltrane/dp/B00OYAJGKQ", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "moonlight",
    "title": "Moonlight",
    "year": "2016",
    "genre": ["Drama"],
    "subGenre": "Coming-of-Age",
    "type": "movie",
    "rating": "7.4",
    "duration": "1h 51m",
    "director": "Barry Jenkins",
    "writers": "Barry Jenkins",
    "synopsis": "A young African-American man grapples with his identity and sexuality while experiencing the projects of Miami at three stages of his life.",
    "poster": "https://image.tmdb.org/t/p/w500/4911T5FbJ9eAlnVnXki4LCQ7ce8.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
    "cast": [
      { "name": "Trevante Rhodes", "character": "Chiron (adult)", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Mahershala Ali", "character": "Juan", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80117401", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Moonlight-Trevante-Rhodes/dp/B01N4NFXNB", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "dead-poets-society",
    "title": "Dead Poets Society",
    "year": "1989",
    "genre": ["Drama"],
    "subGenre": "Coming-of-Age",
    "type": "movie",
    "rating": "8.1",
    "duration": "2h 8m",
    "director": "Peter Weir",
    "writers": "Tom Schulman",
    "synopsis": "English teacher John Keating inspires his students at a conservative boys' boarding school to seize the day through his unorthodox teaching of poetry.",
    "poster": "https://image.tmdb.org/t/p/w500/zIEQRBRIzRMwSIMCHjfxYN7W5CD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Robin Williams", "character": "John Keating", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Ethan Hawke", "character": "Todd Anderson", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/dead-poets-society/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/975020", "color": "#E50914", "logo": "N" }
    ]
  },

  // ============================================================
  // 🎭 DRAMA — Period Piece
  // ============================================================
  {
    "id": "the-crown",
    "title": "The Crown",
    "year": "2016",
    "genre": ["Drama"],
    "subGenre": "Period Piece",
    "type": "series",
    "rating": "8.6",
    "duration": "6 Seasons",
    "director": "Peter Morgan",
    "writers": "Peter Morgan",
    "synopsis": "Follows the political rivalries and romances of the reign of Queen Elizabeth II, while charting the great events that shaped the second half of the twentieth century.",
    "poster": "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dN9LbNNvqJEq8AaEi65YrJx03lK.jpg",
    "cast": [
      { "name": "Olivia Colman", "character": "Queen Elizabeth II", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Josh O'Connor", "character": "Prince Charles", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80025678", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "bridgerton",
    "title": "Bridgerton",
    "year": "2020",
    "genre": ["Drama"],
    "subGenre": "Period Piece",
    "type": "series",
    "rating": "7.3",
    "duration": "3 Seasons",
    "director": "Chris Van Dusen",
    "writers": "Chris Van Dusen",
    "synopsis": "Follows a powerful family of eight siblings as they navigate love, lust, and societal expectations in Regency-era London.",
    "poster": "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fI2Cne9yGFD4s3RNRHqxpN3uX8s.jpg",
    "cast": [
      { "name": "Adjoa Andoh", "character": "Lady Danbury", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Phoebe Dynevor", "character": "Daphne Bridgerton", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80232398", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "mad-men",
    "title": "Mad Men",
    "year": "2007",
    "genre": ["Drama"],
    "subGenre": "Period Piece",
    "type": "series",
    "rating": "8.6",
    "duration": "7 Seasons",
    "director": "Matthew Weiner",
    "writers": "Matthew Weiner",
    "synopsis": "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented executives.",
    "poster": "https://image.tmdb.org/t/p/w500/dxsBM6UF3TtfUmVDByiMqiTH5p3.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Jon Hamm", "character": "Don Draper", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Elisabeth Moss", "character": "Peggy Olson", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Mad-Men-Season-1/dp/B001AGFG4K", "color": "#00A8E8", "logo": "▶" }
    ],
    "seasons": []
  },

  // ============================================================
  // 🎭 DRAMA — Biopic
  // ============================================================
  {
    "id": "the-social-network",
    "title": "The Social Network",
    "year": "2010",
    "genre": ["Drama"],
    "subGenre": "Biopic",
    "type": "movie",
    "rating": "7.8",
    "duration": "2h",
    "director": "David Fincher",
    "writers": "Aaron Sorkin",
    "synopsis": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.",
    "poster": "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHso.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/4TIfsUvjRvVjYK9hrEwGFJJV8mM.jpg",
    "cast": [
      { "name": "Jesse Eisenberg", "character": "Mark Zuckerberg", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Justin Timberlake", "character": "Sean Parker", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70132721", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Social-Network-Jesse-Eisenberg/dp/B004A8V8G2", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "bohemian-rhapsody",
    "title": "Bohemian Rhapsody",
    "year": "2018",
    "genre": ["Drama", "Music"],
    "subGenre": "Biopic",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h 14m",
    "director": "Bryan Singer",
    "writers": "Anthony McCarten",
    "synopsis": "The story of the legendary British rock band Queen and lead singer Freddie Mercury, who defied stereotypes and convention to become one of the most beloved entertainers on the planet.",
    "poster": "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGJbjP52aQtYADeo.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/6JgzVVkz1RBrORpCEyFvjjdGvPO.jpg",
    "cast": [
      { "name": "Rami Malek", "character": "Freddie Mercury", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Lucy Boynton", "character": "Mary Austin", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/bohemian-rhapsody/3bCQvAVdVAE8", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/bohemian-rhapsody", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "a-beautiful-mind",
    "title": "A Beautiful Mind",
    "year": "2001",
    "genre": ["Drama"],
    "subGenre": "Biopic",
    "type": "movie",
    "rating": "8.2",
    "duration": "2h 15m",
    "director": "Ron Howard",
    "writers": "Akiva Goldsman",
    "synopsis": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the mysterious.",
    "poster": "https://image.tmdb.org/t/p/w500/9FBwqcd9IRruEDUrTdcaafOMKUq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Russell Crowe", "character": "John Nash", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jennifer Connelly", "character": "Alicia Nash", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/a-beautiful-mind", "color": "#009688", "logo": "🦚" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Beautiful-Mind-Russell-Crowe/dp/B000SEWL78", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 🎭 DRAMA — Procedural
  // ============================================================
  {
    "id": "better-call-saul",
    "title": "Better Call Saul",
    "year": "2015",
    "genre": ["Drama", "Crime"],
    "subGenre": "Procedural",
    "type": "series",
    "rating": "8.9",
    "duration": "6 Seasons",
    "director": "Vince Gilligan, Peter Gould",
    "writers": "Vince Gilligan, Peter Gould",
    "synopsis": "The trials and tribulations of criminal lawyer Jimmy McGill in the time before his transformation into the morally ambiguous Saul Goodman.",
    "poster": "https://image.tmdb.org/t/p/w500/byun8FMlbRDELHLgdFKakbTjTKL.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fqv8v6AycXKXdmF6hnZ9Rf1bpuW.jpg",
    "cast": [
      { "name": "Bob Odenkirk", "character": "Jimmy McGill / Saul Goodman", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jonathan Banks", "character": "Mike Ehrmantraut", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80021955", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "house-md",
    "title": "House M.D.",
    "year": "2004",
    "genre": ["Drama"],
    "subGenre": "Procedural",
    "type": "series",
    "rating": "8.7",
    "duration": "8 Seasons",
    "director": "David Shore",
    "writers": "David Shore",
    "synopsis": "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that other doctors give up on.",
    "poster": "https://image.tmdb.org/t/p/w500/3pnQBUDJGANqZpOVMVs9n7CjKJ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Hugh Laurie", "character": "Dr. Gregory House", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Robert Sean Leonard", "character": "Dr. James Wilson", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/tv/house-md", "color": "#009688", "logo": "🦚" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/House-Season-1/dp/B000SEWL78", "color": "#00A8E8", "logo": "▶" }
    ],
    "seasons": []
  },

  // ============================================================
  // 🔪 THRILLER & MYSTERY — Psychological Thriller
  // ============================================================
  {
    "id": "parasite",
    "title": "Parasite",
    "year": "2019",
    "genre": ["Thriller", "Drama"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.5",
    "duration": "2h 12m",
    "director": "Bong Joon-ho",
    "writers": "Bong Joon-ho, Han Jin-won",
    "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "poster": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG8.jpg",
    "cast": [
      { "name": "Song Kang-ho", "character": "Ki-taek", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Lee Sun-kyun", "character": "Mr. Park", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/parasite", "color": "#1CE783", "logo": "H" },
      { "platform": "Max", "url": "https://www.max.com/movies/parasite/3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "gone-girl",
    "title": "Gone Girl",
    "year": "2014",
    "genre": ["Thriller", "Drama", "Mystery"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.1",
    "duration": "2h 29m",
    "director": "David Fincher",
    "writers": "Gillian Flynn",
    "synopsis": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight shine on him when it's suspected that he may not be innocent.",
    "poster": "https://image.tmdb.org/t/p/w500/fivF19GBZeEvbpNgkoWhxXXBBfK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bXxI4WjDEaQb5J3bfNiPjQ1jD35.jpg",
    "cast": [
      { "name": "Ben Affleck", "character": "Nick Dunne", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Rosamund Pike", "character": "Amy Dunne", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/gone-girl/1BPFn7x0VBwm", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/gone-girl", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "black-swan",
    "title": "Black Swan",
    "year": "2010",
    "genre": ["Thriller", "Drama", "Horror"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.0",
    "duration": "1h 48m",
    "director": "Darren Aronofsky",
    "writers": "Mark Heyman, Andres Heinz",
    "synopsis": "A committed dancer wins the lead role in a production of Tchaikovsky's 'Swan Lake' only to find she is slowly losing her mind.",
    "poster": "https://image.tmdb.org/t/p/w500/pF9eMoqLQxHJD0JBJMwqWGyCB3E.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ofdApqKRjbnpwx2g8vCT5eCZSSS.jpg",
    "cast": [
      { "name": "Natalie Portman", "character": "Nina Sayers", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Mila Kunis", "character": "Lily", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/black-swan/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/black-swan", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "shutter-island",
    "title": "Shutter Island",
    "year": "2010",
    "genre": ["Thriller", "Mystery", "Drama"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.2",
    "duration": "2h 18m",
    "director": "Martin Scorsese",
    "writers": "Laeta Kalogridis",
    "synopsis": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on Shutter Island.",
    "poster": "https://image.tmdb.org/t/p/w500/rEFyVmGe9GauhxwXRwDlxCMB9AN.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/7UwOJSAELQIw21IgUMvJ7pxzVqc.jpg",
    "cast": [
      { "name": "Leonardo DiCaprio", "character": "Teddy Daniels", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Mark Ruffalo", "character": "Chuck Aule", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/shutter-island/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Shutter-Island-Leonardo-DiCaprio/dp/B003BEXF0O", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 🔪 THRILLER & MYSTERY — Whodunnit / Detective
  // ============================================================
  {
    "id": "knives-out",
    "title": "Knives Out",
    "year": "2019",
    "genre": ["Mystery", "Comedy", "Crime"],
    "subGenre": "Whodunnit",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h 10m",
    "director": "Rian Johnson",
    "writers": "Rian Johnson",
    "synopsis": "A detective investigates the death of a wealthy patriarch in a well-known crime writer's mansion, gathering all of the suspects.",
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrqVjoknnFnog7I3sXm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/c71L1SKRGV9GFnDXhW0Hx4rfYQT.jpg",
    "cast": [
      { "name": "Daniel Craig", "character": "Benoit Blanc", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Ana de Armas", "character": "Marta Cabrera", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Knives-Out-Daniel-Craig/dp/B0819L7YLL", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "glass-onion",
    "title": "Glass Onion: A Knives Out Mystery",
    "year": "2022",
    "genre": ["Mystery", "Comedy", "Crime"],
    "subGenre": "Whodunnit",
    "type": "movie",
    "rating": "7.1",
    "duration": "2h 19m",
    "director": "Rian Johnson",
    "writers": "Rian Johnson",
    "synopsis": "Detective Benoit Blanc travels to Greece for his latest case. There he finds a crew of colorful characters, all with motives to commit murder.",
    "poster": "https://image.tmdb.org/t/p/w500/vI1oHHLFkSmJKHWyTdGlQEsVqYl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/2UH6p3qk7a4p2AUUkMOJcOzTOYZ.jpg",
    "cast": [
      { "name": "Daniel Craig", "character": "Benoit Blanc", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Edward Norton", "character": "Miles Bron", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81458416", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "sherlock",
    "title": "Sherlock",
    "year": "2010",
    "genre": ["Mystery", "Crime", "Drama"],
    "subGenre": "Whodunnit",
    "type": "series",
    "rating": "9.1",
    "duration": "4 Seasons",
    "director": "Steven Moffat, Mark Gatiss",
    "writers": "Steven Moffat, Mark Gatiss",
    "synopsis": "A modern update finds the famous consultant detective Sherlock Holmes and Dr. Watson solving crimes in 21st century London.",
    "poster": "https://image.tmdb.org/t/p/w500/ngp8khKCPX4WrFTOCJBQSXRjDDB.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Benedict Cumberbatch", "character": "Sherlock Holmes", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Martin Freeman", "character": "Dr. John Watson", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70202589", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Sherlock-Season-1/dp/B004D7PBCO", "color": "#00A8E8", "logo": "▶" }
    ],
    "seasons": []
  },
  {
    "id": "true-detective",
    "title": "True Detective",
    "year": "2014",
    "genre": ["Mystery", "Crime", "Drama", "Thriller"],
    "subGenre": "Whodunnit",
    "type": "series",
    "rating": "9.0",
    "duration": "4 Seasons",
    "director": "Nic Pizzolatto",
    "writers": "Nic Pizzolatto",
    "synopsis": "An anthology crime drama where each season tells a story of a crime investigation from the perspectives of detectives across different U.S. locations.",
    "poster": "https://image.tmdb.org/t/p/w500/jBaWpFsUMGnMEDIZ7CABNuhAA90.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
    "cast": [
      { "name": "Matthew McConaughey", "character": "Rust Cohle", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Woody Harrelson", "character": "Marty Hart", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/true-detective/7ad8e5c6-93b4-4e90-8f1e-2d1b3c4a5b6c", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },

  // ============================================================
  // 🔪 THRILLER & MYSTERY — Crime / Gangster
  // ============================================================
  {
    "id": "the-godfather",
    "title": "The Godfather",
    "year": "1972",
    "genre": ["Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "9.2",
    "duration": "2h 55m",
    "director": "Francis Ford Coppola",
    "writers": "Mario Puzo, Francis Ford Coppola",
    "synopsis": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant youngest son.",
    "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHnDmni3N.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "cast": [
      { "name": "Marlon Brando", "character": "Vito Corleone", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Al Pacino", "character": "Michael Corleone", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/the-godfather/", "color": "#0064FF", "logo": "P+" }
    ]
  },
  {
    "id": "goodfellas",
    "title": "Goodfellas",
    "year": "1990",
    "genre": ["Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "8.7",
    "duration": "2h 26m",
    "director": "Martin Scorsese",
    "writers": "Nicholas Pileggi, Martin Scorsese",
    "synopsis": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    "poster": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/sw7mordbZxgITU877yTpZCud90M.jpg",
    "cast": [
      { "name": "Ray Liotta", "character": "Henry Hill", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Joe Pesci", "character": "Tommy DeVito", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/goodfellas/3b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/17236369", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "the-sopranos",
    "title": "The Sopranos",
    "year": "1999",
    "genre": ["Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "series",
    "rating": "9.2",
    "duration": "6 Seasons",
    "director": "David Chase",
    "writers": "David Chase",
    "synopsis": "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affects his mental state.",
    "poster": "https://image.tmdb.org/t/p/w500/57okJJUBK0AaijxLh3RjB1y8lGy.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oTNLhUFmx0uy5vHXibfAHN8AX0y.jpg",
    "cast": [
      { "name": "James Gandolfini", "character": "Tony Soprano", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Edie Falco", "character": "Carmela Soprano", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/the-sopranos/4f5e6d7c-8b9a-0c1d-2e3f-4a5b6c7d8e9f", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },
  {
    "id": "narcos",
    "title": "Narcos",
    "year": "2015",
    "genre": ["Crime", "Drama", "Thriller"],
    "subGenre": "Crime/Gangster",
    "type": "series",
    "rating": "8.8",
    "duration": "3 Seasons",
    "director": "Chris Brancato",
    "writers": "Chris Brancato, Carlo Bernard",
    "synopsis": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the actions of the DEA agents working to stop him.",
    "poster": "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F3jxFpWpwoQNqQS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
    "cast": [
      { "name": "Wagner Moura", "character": "Pablo Escobar", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Boyd Holbrook", "character": "Steve Murphy", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80025172", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "peaky-blinders",
    "title": "Peaky Blinders",
    "year": "2013",
    "genre": ["Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "series",
    "rating": "8.8",
    "duration": "6 Seasons",
    "director": "Steven Knight",
    "writers": "Steven Knight",
    "synopsis": "A gangster family epic set in 1919 Birmingham, England, centered on a gang who sew razor blades in the peaks of their caps, and their ambitions to move up in the world.",
    "poster": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVn3nyfVWAY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/n9qgr23S1aevnFblwPTFhJ6Bj6l.jpg",
    "cast": [
      { "name": "Cillian Murphy", "character": "Thomas Shelby", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Helen McCrory", "character": "Polly Gray", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80002479", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "city-of-god",
    "title": "City of God",
    "year": "2002",
    "genre": ["Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "8.6",
    "duration": "2h 10m",
    "director": "Fernando Meirelles, Kátia Lund",
    "writers": "Bráulio Mantovani",
    "synopsis": "In the slums of Rio de Janeiro in the 1970s, two boys grow up with very different perspectives on what it means to escape the City of God.",
    "poster": "https://image.tmdb.org/t/p/w500/ouIqe7oJM4ESv0NQ6CaGVJUkleC.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "Alexandre Rodrigues", "character": "Buscapé", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Leandro Firmino", "character": "Zé Pequeno", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/city-of-god/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/city-of-god", "color": "#FF5400", "logo": "T" }
    ]
  },

  // ============================================================
  // 🔪 THRILLER & MYSTERY — Political / Conspiracy
  // ============================================================
  {
    "id": "succession",
    "title": "Succession",
    "year": "2018",
    "genre": ["Drama", "Thriller"],
    "subGenre": "Political/Conspiracy",
    "type": "series",
    "rating": "8.9",
    "duration": "4 Seasons",
    "director": "Jesse Armstrong",
    "writers": "Jesse Armstrong",
    "synopsis": "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
    "poster": "https://image.tmdb.org/t/p/w500/e2X8ookWMJCXSdMRc5F8YJW9RfJ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/2DznM3XjMUW9rJvmcUGkFzJGqJX.jpg",
    "cast": [
      { "name": "Brian Cox", "character": "Logan Roy", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jeremy Strong", "character": "Kendall Roy", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/succession/4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },
  {
    "id": "house-of-cards",
    "title": "House of Cards",
    "year": "2013",
    "genre": ["Drama", "Thriller"],
    "subGenre": "Political/Conspiracy",
    "type": "series",
    "rating": "8.7",
    "duration": "6 Seasons",
    "director": "Beau Willimon",
    "writers": "Beau Willimon",
    "synopsis": "A Congressman works with his equally manipulative wife to exact revenge on the people who betrayed him, building up influence on his way to becoming President of the United States.",
    "poster": "https://image.tmdb.org/t/p/w500/hKWxUcFGmNJzYYRqM5YXBhkVBqw.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tVKjyJGkODDfgjKsKXRYmUAHnLs.jpg",
    "cast": [
      { "name": "Kevin Spacey", "character": "Frank Underwood", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Robin Wright", "character": "Claire Underwood", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70178217", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "mr-robot",
    "title": "Mr. Robot",
    "year": "2015",
    "genre": ["Drama", "Thriller"],
    "subGenre": "Political/Conspiracy",
    "type": "series",
    "rating": "8.5",
    "duration": "4 Seasons",
    "director": "Sam Esmail",
    "writers": "Sam Esmail",
    "synopsis": "Elliot, a cybersecurity engineer by day and hacker by night, is recruited by a mysterious anarchist known as Mr. Robot to destroy the company he works for.",
    "poster": "https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOVJPkWpFeA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5jkE2SzR5uR2egEMiLqrOUJAM2T.jpg",
    "cast": [
      { "name": "Rami Malek", "character": "Elliot Alderson", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Christian Slater", "character": "Mr. Robot", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Mr-Robot-Season-1/dp/B011E7YXNE", "color": "#00A8E8", "logo": "▶" }
    ],
    "seasons": []
  },

  // ============================================================
  // 👻 HORROR — Supernatural
  // ============================================================
  {
    "id": "the-shining",
    "title": "The Shining",
    "year": "1980",
    "genre": ["Horror", "Drama"],
    "subGenre": "Supernatural",
    "type": "movie",
    "rating": "8.4",
    "duration": "2h 24m",
    "director": "Stanley Kubrick",
    "writers": "Stanley Kubrick, Diane Johnson",
    "synopsis": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings.",
    "poster": "https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
    "cast": [
      { "name": "Jack Nicholson", "character": "Jack Torrance", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Shelley Duvall", "character": "Wendy Torrance", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-shining/5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f", "color": "#6E29F7", "logo": "M" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/the-shining", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "the-conjuring",
    "title": "The Conjuring",
    "year": "2013",
    "genre": ["Horror", "Mystery", "Thriller"],
    "subGenre": "Supernatural",
    "type": "movie",
    "rating": "7.5",
    "duration": "1h 52m",
    "director": "James Wan",
    "writers": "Chad Hayes, Carey W. Hayes",
    "synopsis": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    "poster": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/sf9A5vceDQi4XEf4NNZsEUwm4DF.jpg",
    "cast": [
      { "name": "Vera Farmiga", "character": "Lorraine Warren", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Patrick Wilson", "character": "Ed Warren", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-conjuring/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "hereditary",
    "title": "Hereditary",
    "year": "2018",
    "genre": ["Horror", "Drama", "Mystery"],
    "subGenre": "Supernatural",
    "type": "movie",
    "rating": "7.3",
    "duration": "2h 7m",
    "director": "Ari Aster",
    "writers": "Ari Aster",
    "synopsis": "When the matriarch of the Graham family passes away, her daughter's family begins to unravel cryptic and terrifying secrets about their ancestry.",
    "poster": "https://image.tmdb.org/t/p/w500/V1yoLBwA4npJblrfwrwF5aP1zQd.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/dRaV8HGx7Z9xmw77qSs8prp5OuI.jpg",
    "cast": [
      { "name": "Toni Collette", "character": "Annie Graham", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Alex Wolff", "character": "Peter Graham", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Hereditary-Toni-Collette/dp/B07GFMFXMQ", "color": "#00A8E8", "logo": "▶" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/hereditary", "color": "#FF5400", "logo": "T" }
    ]
  },

  // ============================================================
  // 👻 HORROR — Slasher
  // ============================================================
  {
    "id": "halloween",
    "title": "Halloween",
    "year": "1978",
    "genre": ["Horror", "Thriller"],
    "subGenre": "Slasher",
    "type": "movie",
    "rating": "7.7",
    "duration": "1h 31m",
    "director": "John Carpenter",
    "writers": "John Carpenter, Debra Hill",
    "synopsis": "Fifteen years after murdering his sister on Halloween night in 1963, Michael Myers escapes from a mental hospital and returns to Haddonfield.",
    "poster": "https://image.tmdb.org/t/p/w500/qVQdKhl9XqdNFbdLFkOCyMdRiRQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Jamie Lee Curtis", "character": "Laurie Strode", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Donald Pleasence", "character": "Dr. Sam Loomis", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/halloween", "color": "#009688", "logo": "🦚" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/halloween", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "a-quiet-place",
    "title": "A Quiet Place",
    "year": "2018",
    "genre": ["Horror", "Drama", "Thriller"],
    "subGenre": "Slasher",
    "type": "movie",
    "rating": "7.5",
    "duration": "1h 30m",
    "director": "John Krasinski",
    "writers": "Bryan Woods, Scott Beck",
    "synopsis": "In a post-apocalyptic world, a family is forced to live in near silence while hiding from creatures that hunt by sound.",
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eFWsRF1F60sEXcpz48rVqGBwbXR.jpg",
    "cast": [
      { "name": "Emily Blunt", "character": "Evelyn Abbott", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "John Krasinski", "character": "Lee Abbott", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/a-quiet-place/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Quiet-Place-Emily-Blunt/dp/B07DQB8CK3", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 👻 HORROR — Psychological Horror
  // ============================================================
  {
    "id": "midsommar",
    "title": "Midsommar",
    "year": "2019",
    "genre": ["Horror", "Drama", "Mystery"],
    "subGenre": "Psychological Horror",
    "type": "movie",
    "rating": "7.1",
    "duration": "2h 27m",
    "director": "Ari Aster",
    "writers": "Ari Aster",
    "synopsis": "A couple travels to Sweden to visit a rural hometown's mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and disturbing experience.",
    "poster": "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/oVRr9eLxV3DGv3JW7ZkHPHCTBs8.jpg",
    "cast": [
      { "name": "Florence Pugh", "character": "Dani", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jack Reynor", "character": "Christian", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Midsommar-Florence-Pugh/dp/B07WH8V46C", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "get-out",
    "title": "Get Out",
    "year": "2017",
    "genre": ["Horror", "Mystery", "Thriller"],
    "subGenre": "Psychological Horror",
    "type": "movie",
    "rating": "7.7",
    "duration": "1h 44m",
    "director": "Jordan Peele",
    "writers": "Jordan Peele",
    "synopsis": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception soon turns into something far more sinister.",
    "poster": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
    "cast": [
      { "name": "Daniel Kaluuya", "character": "Chris Washington", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Allison Williams", "character": "Rose Armitage", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/get-out", "color": "#009688", "logo": "🦚" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Get-Out-Daniel-Kaluuya/dp/B06XRWJ8H3", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 👻 HORROR — Monster / Creature Feature
  // ============================================================
  {
    "id": "alien",
    "title": "Alien",
    "year": "1979",
    "genre": ["Horror", "Sci-Fi"],
    "subGenre": "Monster/Creature",
    "type": "movie",
    "rating": "8.5",
    "duration": "1h 57m",
    "director": "Ridley Scott",
    "writers": "Dan O'Bannon",
    "synopsis": "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform.",
    "poster": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/AmR3JfHwxV9kuxtiIeONi12QLKJM.jpg",
    "cast": [
      { "name": "Sigourney Weaver", "character": "Ellen Ripley", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Tom Skerritt", "character": "Arthur Dallas", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/alien", "color": "#1CE783", "logo": "H" },
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/alien/eBiKePGNhKDm", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "the-thing",
    "title": "The Thing",
    "year": "1982",
    "genre": ["Horror", "Sci-Fi", "Mystery"],
    "subGenre": "Monster/Creature",
    "type": "movie",
    "rating": "8.2",
    "duration": "1h 49m",
    "director": "John Carpenter",
    "writers": "Bill Lancaster",
    "synopsis": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    "poster": "https://image.tmdb.org/t/p/w500/txzhCNKNlEbHlVpCdNnvCDQ3AJT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Kurt Russell", "character": "R.J. MacReady", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/the-thing", "color": "#009688", "logo": "🦚" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Thing-Kurt-Russell/dp/B001EWLSYK", "color": "#00A8E8", "logo": "▶" }
    ]
  },

  // ============================================================
  // 🚀 SCI-FI — Dystopian / Post-Apocalyptic
  // ============================================================
  {
    "id": "the-hunger-games",
    "title": "The Hunger Games",
    "year": "2012",
    "genre": ["Sci-Fi", "Action", "Adventure"],
    "subGenre": "Dystopian",
    "type": "movie",
    "rating": "7.2",
    "duration": "2h 22m",
    "director": "Gary Ross",
    "writers": "Gary Ross, Suzanne Collins",
    "synopsis": "In a dystopian future, Katniss Everdeen volunteers to take her younger sister's place in the Hunger Games, a televised competition where two teenagers from each district fight to the death.",
    "poster": "https://image.tmdb.org/t/p/w500/gJ4SMhPHd7k4dXkjpIzBUHDMmDK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bcCBq9N1EMo3daNbbe1J58R4zde.jpg",
    "cast": [
      { "name": "Jennifer Lawrence", "character": "Katniss Everdeen", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Josh Hutcherson", "character": "Peeta Mellark", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/the-hunger-games", "color": "#009688", "logo": "🦚" }
    ]
  },
  {
    "id": "children-of-men",
    "title": "Children of Men",
    "year": "2006",
    "genre": ["Sci-Fi", "Thriller", "Drama"],
    "subGenre": "Dystopian",
    "type": "movie",
    "rating": "7.9",
    "duration": "1h 49m",
    "director": "Alfonso Cuarón",
    "writers": "Alfonso Cuarón, Timothy J. Sexton",
    "synopsis": "In 2027, in a chaotic world in which women have somehow become infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
    "poster": "https://image.tmdb.org/t/p/w500/5XAPPB0DmSNHHLfBvuoFfiqscH0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/lOjnqsAFJjE7XZQbWfX5AFGrHXl.jpg",
    "cast": [
      { "name": "Clive Owen", "character": "Theo Faron", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Julianne Moore", "character": "Julian Taylor", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70049012", "color": "#E50914", "logo": "N" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/children-of-men", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "black-mirror",
    "title": "Black Mirror",
    "year": "2011",
    "genre": ["Sci-Fi", "Drama", "Thriller"],
    "subGenre": "Dystopian",
    "type": "series",
    "rating": "8.7",
    "duration": "6 Seasons",
    "director": "Charlie Brooker",
    "writers": "Charlie Brooker",
    "synopsis": "An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    "poster": "https://image.tmdb.org/t/p/w500/7PRcR4B2RiflSNLFJtHAHfAatTl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Various", "character": "Anthology Cast", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70264888", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "the-handmaids-tale",
    "title": "The Handmaid's Tale",
    "year": "2017",
    "genre": ["Sci-Fi", "Drama"],
    "subGenre": "Dystopian",
    "type": "series",
    "rating": "8.4",
    "duration": "5 Seasons",
    "director": "Bruce Miller",
    "writers": "Bruce Miller",
    "synopsis": "Set in a dystopia where the United States has been overthrown by a totalitarian theocracy, a woman is forced to serve as a reproductive vessel.",
    "poster": "https://image.tmdb.org/t/p/w500/gNt8l0GQpefNs4b2s0zJI4JqBdK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
    "cast": [
      { "name": "Elisabeth Moss", "character": "Offred / June", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Joseph Fiennes", "character": "The Commander", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Hulu", "url": "https://www.hulu.com/series/the-handmaids-tale-0b0f68eb-5f81-4e07-9f73-498b27ba5ef7", "color": "#1CE783", "logo": "H" }
    ],
    "seasons": []
  },

  // ============================================================
  // 🧙 FANTASY — High/Epic Fantasy
  // ============================================================
  {
    "id": "lord-of-the-rings-fotr",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": "2001",
    "genre": ["Fantasy", "Adventure", "Drama"],
    "subGenre": "High/Epic Fantasy",
    "type": "movie",
    "rating": "8.9",
    "duration": "3h 28m",
    "director": "Peter Jackson",
    "writers": "Fran Walsh, Philippa Boyens, Peter Jackson",
    "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "poster": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
    "cast": [
      { "name": "Elijah Wood", "character": "Frodo Baggins", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Ian McKellen", "character": "Gandalf", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-lord-of-the-rings-the-fellowship-of-the-ring/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/60003774", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "game-of-thrones",
    "title": "Game of Thrones",
    "year": "2011",
    "genre": ["Fantasy", "Drama", "Action"],
    "subGenre": "High/Epic Fantasy",
    "type": "series",
    "rating": "9.2",
    "duration": "8 Seasons",
    "director": "David Benioff, D.B. Weiss",
    "writers": "David Benioff, D.B. Weiss",
    "synopsis": "Nine noble families fight for control of the mythical land of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
    "poster": "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
    "cast": [
      { "name": "Emilia Clarke", "character": "Daenerys Targaryen", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Kit Harington", "character": "Jon Snow", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/game-of-thrones/6de95b94-1dcd-4f13-8d8f-ca1de0bb4e61", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },
  {
    "id": "the-witcher",
    "title": "The Witcher",
    "year": "2019",
    "genre": ["Fantasy", "Action", "Drama"],
    "subGenre": "High/Epic Fantasy",
    "type": "series",
    "rating": "8.2",
    "duration": "3 Seasons",
    "director": "Lauren Schmidt Hissrich",
    "writers": "Lauren Schmidt Hissrich",
    "synopsis": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    "poster": "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/fofjqL4MxuJWVGS2A5jNwBR2Sqm.jpg",
    "cast": [
      { "name": "Henry Cavill", "character": "Geralt of Rivia", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Freya Allan", "character": "Ciri", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80189685", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "harry-potter-ss",
    "title": "Harry Potter and the Sorcerer's Stone",
    "year": "2001",
    "genre": ["Fantasy", "Adventure"],
    "subGenre": "High/Epic Fantasy",
    "type": "movie",
    "rating": "7.6",
    "duration": "2h 32m",
    "director": "Chris Columbus",
    "writers": "Steve Kloves",
    "synopsis": "An orphan boy discovers he is a wizard and is invited to study at Hogwarts School of Witchcraft and Wizardry, where he becomes friends with Ron and Hermione.",
    "poster": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mf7PnDpbYLCQfPAzGHq6YiPKzFf.jpg",
    "cast": [
      { "name": "Daniel Radcliffe", "character": "Harry Potter", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Emma Watson", "character": "Hermione Granger", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/harry-potter-and-the-sorcerers-stone/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Peacock", "url": "https://www.peacocktv.com/watch-online/movies/harry-potter-and-the-sorcerers-stone", "color": "#009688", "logo": "🦚" }
    ]
  },

  // ============================================================
  // 🧙 FANTASY — Dark Fantasy
  // ============================================================
  {
    "id": "pans-labyrinth",
    "title": "Pan's Labyrinth",
    "year": "2006",
    "genre": ["Fantasy", "Drama"],
    "subGenre": "Dark Fantasy",
    "type": "movie",
    "rating": "8.2",
    "duration": "1h 58m",
    "director": "Guillermo del Toro",
    "writers": "Guillermo del Toro",
    "synopsis": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    "poster": "https://image.tmdb.org/t/p/w500/htZ7SbhgAkSuNiVGz8JCBSZ0RsP.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5ivq8pJZfXBh0XqNoerBt6WyCkX.jpg",
    "cast": [
      { "name": "Ivana Baquero", "character": "Ofelia", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Doug Jones", "character": "Faun / Pale Man", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/pans-labyrinth/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70047084", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "the-shape-of-water",
    "title": "The Shape of Water",
    "year": "2017",
    "genre": ["Fantasy", "Drama"],
    "subGenre": "Dark Fantasy",
    "type": "movie",
    "rating": "7.3",
    "duration": "2h 3m",
    "director": "Guillermo del Toro",
    "writers": "Guillermo del Toro, Vanessa Taylor",
    "synopsis": "At a government lab in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    "poster": "https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/q9UBN94I3BbLWkN3eiS1y0sJzmX.jpg",
    "cast": [
      { "name": "Sally Hawkins", "character": "Elisa Esposito", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Michael Shannon", "character": "Richard Strickland", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-shape-of-water/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/the-shape-of-water", "color": "#1CE783", "logo": "H" }
    ]
  },

  // ============================================================
  // 📽️ DOCUMENTARY
  // ============================================================
  {
    "id": "the-social-dilemma",
    "title": "The Social Dilemma",
    "year": "2020",
    "genre": ["Documentary"],
    "subGenre": "Documentary",
    "type": "movie",
    "rating": "7.6",
    "duration": "1h 34m",
    "director": "Jeff Orlowski",
    "writers": "Jeff Orlowski, Davis Coombe",
    "synopsis": "Tech experts sound the alarm on the dangerous human impact of social networking, as former Google design ethicist Tristan Harris and others reveal how social media platforms are designed to be addictive.",
    "poster": "https://image.tmdb.org/t/p/w500/nsevBEBMWFMVFtAOkMixSZ8PNLF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mR0oEcbYBbmuUoFPuFOXpSrKXeG.jpg",
    "cast": [
      { "name": "Tristan Harris", "character": "Himself", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81254224", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "free-solo",
    "title": "Free Solo",
    "year": "2018",
    "genre": ["Documentary"],
    "subGenre": "Documentary",
    "type": "movie",
    "rating": "8.1",
    "duration": "1h 40m",
    "director": "Elizabeth Chai Vasarhelyi, Jimmy Chin",
    "writers": "Elizabeth Chai Vasarhelyi, Jimmy Chin",
    "synopsis": "Rock climber Alex Honnold attempts to become the first person to ever free solo climb El Capitan's 900-metre vertical rock face at Yosemite National Park.",
    "poster": "https://image.tmdb.org/t/p/w500/m3fpnJNNhlsmg0eEynhVTRHbXCF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Alex Honnold", "character": "Himself", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/free-solo/6rNsl22v03Sq", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/free-solo", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "making-a-murderer",
    "title": "Making a Murderer",
    "year": "2015",
    "genre": ["Documentary", "Crime"],
    "subGenre": "Documentary",
    "type": "series",
    "rating": "8.6",
    "duration": "2 Parts",
    "director": "Laura Ricciardi, Moira Demos",
    "writers": "Laura Ricciardi, Moira Demos",
    "synopsis": "A true crime documentary series following Steven Avery, a Wisconsin man exonerated of sexual assault after 18 years in prison, only to be accused of murder.",
    "poster": "https://image.tmdb.org/t/p/w500/1X7vow8smgqFBmBWUEZLTb0ZD4K.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Steven Avery", "character": "Himself", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80000770", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "our-planet",
    "title": "Our Planet",
    "year": "2019",
    "genre": ["Documentary"],
    "subGenre": "Documentary",
    "type": "series",
    "rating": "9.3",
    "duration": "2 Seasons",
    "director": "Alastair Fothergill, Keith Scholey",
    "writers": "David Attenborough",
    "synopsis": "Documentary series focusing on the breadth of the diversity of habitats around the world, from the remote Arctic wilderness and mysterious deep oceans to the vast landscapes of Africa and diverse jungles.",
    "poster": "https://image.tmdb.org/t/p/w500/v5Lc3VEnhpTLjHtPqTvqfUAm7lS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
    "cast": [
      { "name": "David Attenborough", "character": "Narrator", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80049832", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },

  // ============================================================
  // 📽️ ANIMATION / ANIME
  // ============================================================
  {
    "id": "spirited-away",
    "title": "Spirited Away",
    "year": "2001",
    "genre": ["Animation", "Fantasy", "Adventure"],
    "subGenre": "Animation",
    "type": "movie",
    "rating": "8.6",
    "duration": "2h 5m",
    "director": "Hayao Miyazaki",
    "writers": "Hayao Miyazaki",
    "synopsis": "During her family's move to the suburbs, a sulky 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    "poster": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
    "cast": [
      { "name": "Daveigh Chase", "character": "Chihiro (English dub)", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/60031236", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "your-name",
    "title": "Your Name",
    "year": "2016",
    "genre": ["Animation", "Drama", "Sci-Fi"],
    "subGenre": "Animation",
    "type": "movie",
    "rating": "8.4",
    "duration": "1h 46m",
    "director": "Makoto Shinkai",
    "writers": "Makoto Shinkai",
    "synopsis": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    "poster": "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
    "cast": [
      { "name": "Ryunosuke Kamiki", "character": "Taki Tachibana", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Mone Kamishiraishi", "character": "Mitsuha Miyamizu", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70308014", "color": "#E50914", "logo": "N" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/your-name", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "arcane",
    "title": "Arcane",
    "year": "2021",
    "genre": ["Animation", "Action", "Sci-Fi"],
    "subGenre": "Anime",
    "type": "series",
    "rating": "9.0",
    "duration": "2 Seasons",
    "director": "Pascal Charrue, Arnaud Delord",
    "writers": "Christian Linke, Alex Yee",
    "synopsis": "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League of Legends champions and the power that will tear them apart.",
    "poster": "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
    "cast": [
      { "name": "Hailee Steinfeld", "character": "Vi", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Ella Purnell", "character": "Jinx", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81435684", "color": "#E50914", "logo": "N" }
    ],
    "seasons": []
  },
  {
    "id": "attack-on-titan",
    "title": "Attack on Titan",
    "year": "2013",
    "genre": ["Animation", "Action", "Drama"],
    "subGenre": "Anime",
    "type": "series",
    "rating": "9.0",
    "duration": "4 Seasons",
    "director": "Tetsurō Araki",
    "writers": "Hajime Isayama",
    "synopsis": "In a world where humanity lives inside cities surrounded by enormous walls protecting them from giant humanoid creatures known as Titans, a young boy vows revenge after a Titan devours his mother.",
    "poster": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/yXSzo0VU1Q1QaB7Xg4mmULjWK4L.jpg",
    "cast": [
      { "name": "Yuki Kaji", "character": "Eren Yeager", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Marina Inoue", "character": "Armin Arlert", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70299043", "color": "#E50914", "logo": "N" },
      { "platform": "Crunchyroll", "url": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan", "color": "#F47521", "logo": "CR" }
    ],
    "seasons": []
  },
  {
    "id": "avatar-the-last-airbender",
    "title": "Avatar: The Last Airbender",
    "year": "2005",
    "genre": ["Animation", "Action", "Fantasy"],
    "subGenre": "Animation",
    "type": "series",
    "rating": "9.3",
    "duration": "3 Seasons",
    "director": "Michael DiMartino, Bryan Konietzko",
    "writers": "Michael DiMartino, Bryan Konietzko",
    "synopsis": "In a world where people can manipulate the four elements, the Avatar must restore balance by mastering all four — before the ruthless Fire Nation conquers the world.",
    "poster": "https://image.tmdb.org/t/p/w500/5aNoFBQ1UtkGkS1OMl8nYlXJBSY.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Zach Tyler Eisen", "character": "Aang", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Mae Whitman", "character": "Katara", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70142405", "color": "#E50914", "logo": "N" },
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/shows/avatar-the-last-airbender/", "color": "#0064FF", "logo": "P+" }
    ],
    "seasons": []
  },
  {
    "id": "rick-and-morty",
    "title": "Rick and Morty",
    "year": "2013",
    "genre": ["Animation", "Comedy", "Sci-Fi"],
    "subGenre": "Animation",
    "type": "series",
    "rating": "9.1",
    "duration": "7 Seasons",
    "director": "Justin Roiland, Dan Harmon",
    "writers": "Justin Roiland, Dan Harmon",
    "synopsis": "An animated series that follows the misadventures of an alcoholic scientist Rick and his good-hearted but easily influenced grandson Morty across the universe.",
    "poster": "https://image.tmdb.org/t/p/w500/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Justin Roiland", "character": "Rick / Morty", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/shows/rick-and-morty/2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d", "color": "#6E29F7", "logo": "M" }
    ],
    "seasons": []
  },

  // ============================================================
  // EXISTING MOVIES (updated with subGenre)
  // ============================================================
  {
    "id": "interstellar",
    "title": "Interstellar",
    "year": "2014",
    "genre": ["Sci-Fi", "Drama", "Adventure"],
    "subGenre": "Space Opera",
    "type": "movie",
    "rating": "8.7",
    "metascore": "74",
    "duration": "2h 49m",
    "director": "Christopher Nolan",
    "writers": "Jonathan Nolan, Christopher Nolan",
    "synopsis": "When humanity faces extinction on a dying Earth, a team of ex-pilots and scientists must embark on the most important mission in human history: traveling beyond this galaxy to discover whether mankind has a future among the stars.",
    "poster": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Matthew McConaughey", "character": "Cooper", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Anne Hathaway", "character": "Brand", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/LUKFIz_dP5cS0T4a4MvKPcsgxPfU7Pik/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Apple TV+", "url": "https://tv.apple.com/us/movie/interstellar/umc.cmc.6e3rgtkr9v0usvlktfjzq8cz4", "color": "#555555", "logo": "🍎" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Interstellar-Matthew-McConaughey/dp/B00TU9UFTS", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "inception",
    "title": "Inception",
    "year": "2010",
    "genre": ["Sci-Fi", "Action", "Thriller"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.8",
    "duration": "2h 28m",
    "director": "Christopher Nolan",
    "writers": "Christopher Nolan",
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "poster": "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    "cast": [
      { "name": "Leonardo DiCaprio", "character": "Cobb", "image": "https://image.tmdb.org/t/p/w185/wo2hJemiikpw4Cl2Q4AdOI410mX.jpg" },
      { "name": "Joseph Gordon-Levitt", "character": "Arthur", "image": "https://image.tmdb.org/t/p/w185/cT83wCxNsRpmS69YJcvcpqpqpqp.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/inception/a92ad56b-3f66-4242-8a87-4e2a91e0cf16", "color": "#6E29F7", "logo": "M" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Inception-Leonardo-DiCaprio/dp/B004BKHE9I", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "dune-part-two",
    "title": "Dune: Part Two",
    "year": "2024",
    "genre": ["Sci-Fi", "Adventure"],
    "subGenre": "Space Opera",
    "type": "movie",
    "rating": "8.6",
    "duration": "2h 46m",
    "director": "Denis Villeneuve",
    "writers": "Denis Villeneuve, Jon Spaihts",
    "synopsis": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    "poster": "https://image.tmdb.org/t/p/w500/3HzGtM0JpfH2pWFGugJK22LRP6b.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "cast": [
      { "name": "Timothée Chalamet", "character": "Paul Atreides", "image": "https://image.tmdb.org/t/p/w185/BEw4b8rT5H3pLd489QJ2yqD1Q1.jpg" },
      { "name": "Zendaya", "character": "Chani", "image": "https://image.tmdb.org/t/p/w185/y42rwR5D46i6t65r5tqS0227R7.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/dune-part-two/57ff0dca-cf77-4ee1-b748-2ca3d91fb2b1", "color": "#6E29F7", "logo": "M" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Dune-Part-Two-Timoth%C3%A9e-Chalamet/dp/B0CW1J5C8H", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "breaking-bad",
    "title": "Breaking Bad",
    "year": "2008",
    "genre": ["Drama", "Crime"],
    "subGenre": "Crime/Gangster",
    "type": "series",
    "rating": "9.5",
    "duration": "5 Seasons",
    "director": "Vince Gilligan",
    "writers": "Vince Gilligan",
    "synopsis": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    "poster": "https://image.tmdb.org/t/p/w500/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/eSVvx8xys2NuFhl8fevXt41wX7v.jpg",
    "cast": [
      { "name": "Bryan Cranston", "character": "Walter White", "image": "https://image.tmdb.org/t/p/w185/77Q2Wf432w7hU7w328h4uugb.jpg" },
      { "name": "Aaron Paul", "character": "Jesse Pinkman", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70143836", "color": "#E50914", "logo": "N" }
    ],
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": [
          { "episodeNumber": 1, "title": "Pilot", "runtime": "58m", "synopsis": "When chemistry teacher Walter White is diagnosed with Stage III cancer, he decides to manufacture meth with his former student Jesse Pinkman.", "thumbnail": "https://image.tmdb.org/t/p/w300/eSVvx8xys2NuFhl8fevXt41wX7v.jpg" },
          { "episodeNumber": 2, "title": "Cat's in the Bag...", "runtime": "48m", "synopsis": "Walt and Jesse clean up after the drug deal gone wrong, but Krazy-8 presents a deadly complication.", "thumbnail": "https://image.tmdb.org/t/p/w300/eSVvx8xys2NuFhl8fevXt41wX7v.jpg" }
        ]
      }
    ]
  },
  {
    "id": "dune",
    "title": "Dune",
    "year": "2021",
    "genre": ["Sci-Fi", "Adventure"],
    "subGenre": "Space Opera",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 35m",
    "director": "Denis Villeneuve",
    "writers": "Denis Villeneuve, Jon Spaihts",
    "synopsis": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.",
    "poster": "https://image.tmdb.org/t/p/w500/pc15b0pi8o1oUv9vNhakwMQ9TxA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Timothée Chalamet", "character": "Paul Atreides", "image": "https://image.tmdb.org/t/p/w185/BEw4b8rT5H3pLd489QJ2yqD1Q1.jpg" },
      { "name": "Rebecca Ferguson", "character": "Lady Jessica", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/dune/79ba25e8-fb2d-47c9-a6ed-f1cf3b8be65e", "color": "#6E29F7", "logo": "M" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81444025", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "stranger-things",
    "title": "Stranger Things",
    "year": "2016",
    "genre": ["Sci-Fi", "Drama", "Horror"],
    "subGenre": "Supernatural",
    "type": "series",
    "rating": "8.7",
    "duration": "4 Seasons",
    "director": "The Duffer Brothers",
    "writers": "Matt Duffer, Ross Duffer",
    "synopsis": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "cast": [
      { "name": "Millie Bobby Brown", "character": "Eleven", "image": "https://image.tmdb.org/t/p/w185/77Q2Wf432w7hU7w328h4uugb.jpg" },
      { "name": "Winona Ryder", "character": "Joyce Byers", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80057281", "color": "#E50914", "logo": "N" }
    ],
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": [
          { "episodeNumber": 1, "title": "Chapter One: The Vanishing of Will Byers", "runtime": "48m", "synopsis": "On his way home from a friend's house, young Will Byers sees something terrifying.", "thumbnail": "https://image.tmdb.org/t/p/w300/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg" },
          { "episodeNumber": 2, "title": "Chapter Two: The Weirdo on Maple Street", "runtime": "55m", "synopsis": "Lucas, Mike and Dustin try to talk to the girl they found in the woods.", "thumbnail": "https://image.tmdb.org/t/p/w300/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg" }
        ]
      }
    ]
  },
  {
    "id": "ex-machina",
    "title": "Ex Machina",
    "year": "2014",
    "genre": ["Sci-Fi", "Thriller"],
    "subGenre": "Cyberpunk",
    "type": "movie",
    "rating": "7.7",
    "duration": "1h 48m",
    "director": "Alex Garland",
    "writers": "Alex Garland",
    "synopsis": "A programmer is selected to participate in a groundbreaking experiment in artificial intelligence by evaluating the human qualities of a breathtaking female A.I.",
    "poster": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Alicia Vikander", "character": "Ava", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" },
      { "name": "Domhnall Gleeson", "character": "Caleb", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Ex-Machina-Alicia-Vikander/dp/B00YBX664W", "color": "#00A8E8", "logo": "▶" },
      { "platform": "Netflix", "url": "https://www.netflix.com/title/80023714", "color": "#E50914", "logo": "N" }
    ]
  },
  {
    "id": "drive",
    "title": "Drive",
    "year": "2011",
    "genre": ["Drama", "Action", "Thriller"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "7.8",
    "duration": "1h 40m",
    "director": "Nicolas Winding Refn",
    "writers": "Hossein Amini, James Sallis",
    "synopsis": "A mysterious Hollywood stuntman and mechanic who moonlights as a getaway driver finds himself in trouble when he helps his neighbor in a high-stakes heist gone wrong.",
    "poster": "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    "cast": [
      { "name": "Ryan Gosling", "character": "Driver", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70142798", "color": "#E50914", "logo": "N" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/617006/drive", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "cyberpunk-edgerunners",
    "title": "Cyberpunk: Edgerunners",
    "year": "2022",
    "genre": ["Sci-Fi", "Action", "Animation"],
    "subGenre": "Cyberpunk",
    "type": "series",
    "rating": "8.4",
    "duration": "1 Season",
    "director": "Hiroyuki Imaishi",
    "writers": "Yoshiki Usa, Masahiko Otsuka",
    "synopsis": "A street kid trying to survive in Night City—a technology and body modification-obsessed city of the future—becomes an edgerunner mercenary outlaw.",
    "poster": "https://image.tmdb.org/t/p/w500/lqcDVZ8pyk08AVftMBildDR3QUK.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/lqcDVZ8pyk08AVftMBildDR3QUK.jpg",
    "cast": [
      { "name": "KENN", "character": "David Martinez", "image": "https://image.tmdb.org/t/p/w185/77Q2Wf432w7hU7w328h4uugb.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81054479", "color": "#E50914", "logo": "N" }
    ],
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": [
          { "episodeNumber": 1, "title": "Let You Down", "runtime": "24m", "synopsis": "David's mother works hard to support him at the prestigious Arasaka Academy.", "thumbnail": "https://image.tmdb.org/t/p/w300/lqcDVZ8pyk08AVftMBildDR3QUK.jpg" },
          { "episodeNumber": 2, "title": "Like a Boy", "runtime": "25m", "synopsis": "Equipped with a powerful military-grade cyberware implant, David decides to seek power.", "thumbnail": "https://image.tmdb.org/t/p/w300/lqcDVZ8pyk08AVftMBildDR3QUK.jpg" }
        ]
      }
    ]
  },
  {
    "id": "the-lost-city",
    "title": "The Lost City",
    "year": "2022",
    "genre": ["Adventure", "Comedy", "Action"],
    "subGenre": "Heist/Caper",
    "type": "movie",
    "rating": "6.1",
    "duration": "1h 52m",
    "director": "Aaron Nee, Adam Nee",
    "writers": "Oren Uziel, Dana Fox",
    "synopsis": "A reclusive romance novelist gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.",
    "poster": "https://image.tmdb.org/t/p/w500/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "Sandra Bullock", "character": "Loretta Sage", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" },
      { "name": "Channing Tatum", "character": "Alan Caprison", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/KnsDwZJVBKtmRRKl4VLPJ2IXK2UPwfOE/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Lost-City-Sandra-Bullock/dp/B09T5FNS9X", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "whiplash",
    "title": "Whiplash",
    "year": "2014",
    "genre": ["Drama", "Music"],
    "subGenre": "Coming-of-Age",
    "type": "movie",
    "rating": "8.5",
    "duration": "1h 46m",
    "director": "Damien Chazelle",
    "writers": "Damien Chazelle",
    "synopsis": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Miles Teller", "character": "Andrew Neiman", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" },
      { "name": "J.K. Simmons", "character": "Terence Fletcher", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/70299278", "color": "#E50914", "logo": "N" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/452630/whiplash", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "arrival",
    "title": "Arrival",
    "year": "2016",
    "genre": ["Sci-Fi", "Drama", "Mystery"],
    "subGenre": "Time Travel",
    "type": "movie",
    "rating": "7.9",
    "duration": "1h 56m",
    "director": "Denis Villeneuve",
    "writers": "Eric Heisserer, Ted Chiang",
    "synopsis": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    "poster": "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/e2hCUg2Z3sJ6yWF9NLU24SIKeWa.jpg",
    "cast": [
      { "name": "Amy Adams", "character": "Dr. Louise Banks", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" },
      { "name": "Jeremy Renner", "character": "Ian Donnelly", "image": "https://image.tmdb.org/t/p/w185/9fa6tG7UB7szpaU3968875u.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/YGQSV3yVmJu2qzAFAMqOlN5pVcijqIeY/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Arrival-Amy-Adams/dp/B01N4G2NK2", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "the-martian",
    "title": "The Martian",
    "year": "2015",
    "genre": ["Sci-Fi", "Adventure", "Drama"],
    "subGenre": "Space Opera",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 21m",
    "director": "Ridley Scott",
    "writers": "Drew Goddard, Andy Weir",
    "synopsis": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    "poster": "https://image.tmdb.org/t/p/w500/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Matt Damon", "character": "Mark Watney", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/the-martian/4PCq5eTLTEO9", "color": "#1A3D8F", "logo": "D+" },
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/the-martian-beff2e0e-1e4e-4254-862e-f0efbf5e4e3e", "color": "#1CE783", "logo": "H" }
    ]
  },
  {
    "id": "the-dark-knight",
    "title": "The Dark Knight",
    "year": "2008",
    "genre": ["Action", "Crime", "Drama"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "9.0",
    "duration": "2h 32m",
    "director": "Christopher Nolan",
    "writers": "Jonathan Nolan, Christopher Nolan",
    "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Christian Bale", "character": "Bruce Wayne / Batman", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Heath Ledger", "character": "Joker", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-dark-knight/3e5d4e5b-a9a0-4f26-8c56-93f9e36ba85b", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "the-prestige",
    "title": "The Prestige",
    "year": "2006",
    "genre": ["Drama", "Mystery", "Thriller"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.5",
    "duration": "2h 10m",
    "director": "Christopher Nolan",
    "writers": "Jonathan Nolan, Christopher Nolan",
    "synopsis": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "poster": "https://image.tmdb.org/t/p/w500/rOa94QOq3wbqKBHjSqL0WtPPJm1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "Hugh Jackman", "character": "Robert Angier", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Christian Bale", "character": "Alfred Borden", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-prestige/2a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/387642/the-prestige", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "source-code",
    "title": "Source Code",
    "year": "2011",
    "genre": ["Sci-Fi", "Thriller", "Mystery"],
    "subGenre": "Time Travel",
    "type": "movie",
    "rating": "7.5",
    "duration": "1h 33m",
    "director": "Duncan Jones",
    "writers": "Ben Ripley",
    "synopsis": "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train.",
    "poster": "https://image.tmdb.org/t/p/w500/yNUXcoopDqshs5xd2lOwUl1g4Df.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/5MsbQCp7FpYr3INLpeKDLJrlDh8.jpg",
    "cast": [
      { "name": "Jake Gyllenhaal", "character": "Colter Stevens", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Tubi", "url": "https://tubitv.com/movies/458516/source-code", "color": "#FF5400", "logo": "T" },
      { "platform": "Pluto TV", "url": "https://pluto.tv/en/on-demand/movies/source-code", "color": "#F9D100", "logo": "P" }
    ]
  },
  {
    "id": "coherence",
    "title": "Coherence",
    "year": "2013",
    "genre": ["Sci-Fi", "Thriller", "Mystery"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "7.2",
    "duration": "1h 29m",
    "director": "James Ward Byrkit",
    "writers": "James Ward Byrkit",
    "synopsis": "Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.",
    "poster": "https://image.tmdb.org/t/p/w500/ezUtb9m5DeLwL2gxi4gktzNCvQv.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/ezUtb9m5DeLwL2gxi4gktzNCvQv.jpg",
    "cast": [
      { "name": "Emily Baldoni", "character": "Emily", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Tubi", "url": "https://tubitv.com/movies/397282/coherence", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "tenet",
    "title": "Tenet",
    "year": "2020",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "subGenre": "Time Travel",
    "type": "movie",
    "rating": "7.3",
    "duration": "2h 30m",
    "director": "Christopher Nolan",
    "writers": "Christopher Nolan",
    "synopsis": "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold beyond real time.",
    "poster": "https://image.tmdb.org/t/p/w500/f9zhIg8M1X1tFpHFUEA3scA6OYb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "John David Washington", "character": "Protagonist", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Robert Pattinson", "character": "Neil", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/tenet/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "ghost-in-the-shell",
    "title": "Ghost in the Shell",
    "year": "1995",
    "genre": ["Sci-Fi", "Action", "Animation"],
    "subGenre": "Cyberpunk",
    "type": "movie",
    "rating": "8.0",
    "duration": "1h 23m",
    "director": "Mamoru Oshii",
    "writers": "Masamune Shirow, Kazunori Itou",
    "synopsis": "A cyborg female cop and her partner hunt a mysterious and powerful hacker called the Puppet Master.",
    "poster": "https://image.tmdb.org/t/p/w500/9gC88zYUBARRSThcG93MvW14sqx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9gC88zYUBARRSThcG93MvW14sqx.jpg",
    "cast": [
      { "name": "Atsuko Tanaka", "character": "Major Motoko Kusanagi", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" }
    ],
    "streamingOn": [
      { "platform": "Tubi", "url": "https://tubitv.com/movies/451004/ghost-in-the-shell", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "the-matrix",
    "title": "The Matrix",
    "year": "1999",
    "genre": ["Sci-Fi", "Action"],
    "subGenre": "Cyberpunk",
    "type": "movie",
    "rating": "8.7",
    "duration": "2h 16m",
    "director": "Lana Wachowski, Lilly Wachowski",
    "writers": "Lana Wachowski, Lilly Wachowski",
    "synopsis": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth — the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "poster": "https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Keanu Reeves", "character": "Neo", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Laurence Fishburne", "character": "Morpheus", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Max", "url": "https://www.max.com/movies/the-matrix/de7bbd5e-df73-4af1-866e-5daa6e77c24a", "color": "#6E29F7", "logo": "M" }
    ]
  },
  {
    "id": "blade-runner-2049",
    "title": "Blade Runner 2049",
    "year": "2017",
    "genre": ["Sci-Fi", "Thriller", "Action"],
    "subGenre": "Cyberpunk",
    "type": "movie",
    "rating": "8.0",
    "duration": "2h 44m",
    "director": "Denis Villeneuve",
    "writers": "Hampton Fancher, Michael Green",
    "synopsis": "A new blade runner unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    "poster": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Ryan Gosling", "character": "Officer K", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Harrison Ford", "character": "Rick Deckard", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Prime Video", "url": "https://www.amazon.com/Blade-Runner-2049-Ryan-Gosling/dp/B075QBTB3K", "color": "#00A8E8", "logo": "▶" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/617293/blade-runner-2049", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "avatar",
    "title": "Avatar",
    "year": "2009",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "subGenre": "Space Opera",
    "type": "movie",
    "rating": "7.9",
    "duration": "2h 42m",
    "director": "James Cameron",
    "writers": "James Cameron",
    "synopsis": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "poster": "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Sam Worthington", "character": "Jake Sully", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Zoe Saldana", "character": "Neytiri", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/avatar/3P3bUx4LsQ0u", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "avengers-endgame",
    "title": "Avengers: Endgame",
    "year": "2019",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "8.4",
    "duration": "3h 01m",
    "director": "Anthony Russo, Joe Russo",
    "writers": "Christopher Markus, Stephen McFeely",
    "synopsis": "After the devastating events of Avengers: Infinity War, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "poster": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
    "cast": [
      { "name": "Robert Downey Jr.", "character": "Tony Stark / Iron Man", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Chris Evans", "character": "Steve Rogers / Captain America", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Disney+", "url": "https://www.disneyplus.com/movies/avengers-endgame/2pM0N9kHAzfv", "color": "#1A3D8F", "logo": "D+" }
    ]
  },
  {
    "id": "fight-club",
    "title": "Fight Club",
    "year": "1999",
    "genre": ["Drama", "Thriller"],
    "subGenre": "Psychological Thriller",
    "type": "movie",
    "rating": "8.8",
    "duration": "2h 19m",
    "director": "David Fincher",
    "writers": "Chuck Palahniuk, Jim Uhls",
    "synopsis": "An insomniac office worker and a devil-care soapmaker form an underground fight club that evolves into something much, much more.",
    "poster": "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    "cast": [
      { "name": "Brad Pitt", "character": "Tyler Durden", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Edward Norton", "character": "The Narrator", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Hulu", "url": "https://www.hulu.com/movie/fight-club-e9e695a0-ff47-4400-a54e-adc67c4df4ed", "color": "#1CE783", "logo": "H" },
      { "platform": "Tubi", "url": "https://tubitv.com/movies/412985/fight-club", "color": "#FF5400", "logo": "T" }
    ]
  },
  {
    "id": "pulp-fiction",
    "title": "Pulp Fiction",
    "year": "1994",
    "genre": ["Thriller", "Crime"],
    "subGenre": "Crime/Gangster",
    "type": "movie",
    "rating": "8.9",
    "duration": "2h 34m",
    "director": "Quentin Tarantino",
    "writers": "Quentin Tarantino, Roger Avary",
    "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "poster": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
    "cast": [
      { "name": "John Travolta", "character": "Vincent Vega", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Samuel L. Jackson", "character": "Jules Winnfield", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Paramount+", "url": "https://www.paramountplus.com/movies/video/RuGHAqGZJvBMqlc5GEe8VDMVc68ByPYr/", "color": "#0064FF", "logo": "P+" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Pulp-Fiction-John-Travolta/dp/B00AXKZE7A", "color": "#00A8E8", "logo": "▶" }
    ]
  },
  {
    "id": "spiderman-into-the-spiderverse",
    "title": "Spider-Man: Into the Spider-Verse",
    "year": "2018",
    "genre": ["Action", "Adventure", "Animation"],
    "subGenre": "Superhero",
    "type": "movie",
    "rating": "8.4",
    "duration": "1h 57m",
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "writers": "Phil Lord, Rodney Rothman",
    "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "poster": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
    "cast": [
      { "name": "Shameik Moore", "character": "Miles Morales / Spider-Man", "image": "https://image.tmdb.org/t/p/w185/w7iZ2e2STnQoc79wq4t4qPfv6u4.jpg" },
      { "name": "Jake Johnson", "character": "Peter B. Parker / Spider-Man", "image": "https://image.tmdb.org/t/p/w185/8h4uugb77Q2Wf432w7hU7w32.jpg" }
    ],
    "streamingOn": [
      { "platform": "Netflix", "url": "https://www.netflix.com/title/81147535", "color": "#E50914", "logo": "N" },
      { "platform": "Prime Video", "url": "https://www.amazon.com/Spider-Man-Into-Spider-Verse-Shameik-Moore/dp/B07MJJMFWX", "color": "#00A8E8", "logo": "▶" }
    ]
  }
];
