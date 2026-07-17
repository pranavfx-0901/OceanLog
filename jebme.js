// 100 sample games — edit any field below (title, price, desc, specs, steamUrl, comment).
// This data is looped over by render.js to build cards automatically.
const GAMES = [
  {
    "title": "Elden Ring",
    "tag1": "Action RPG",
    "tag2": "Souls-like",
    "price": "$59.99",
    "rating": 3.6,
    "desc": "A action rpg pick with souls-like elements \u2014 placeholder description, replace with your own thoughts on Elden Ring.",
    "steamUrl": "https://store.steampowered.com/search/?term=Elden%20Ring",
    "cover": "https://picsum.photos/seed/eldenring/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 40,
      "gpuBar": 35,
      "ramBar": 30,
      "storBar": 45
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Elden Ring here."
    }
  },
  {
    "title": "Baldur's Gate 3",
    "tag1": "RPG",
    "tag2": "Story Rich",
    "price": "$49.99",
    "rating": 3.7,
    "desc": "A rpg pick with story rich elements \u2014 placeholder description, replace with your own thoughts on Baldur's Gate 3.",
    "steamUrl": "https://store.steampowered.com/search/?term=Baldur%27s%20Gate%203",
    "cover": "https://picsum.photos/seed/baldursgate3/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 47,
      "gpuBar": 46,
      "ramBar": 35,
      "storBar": 58
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Baldur's Gate 3 here."
    }
  },
  {
    "title": "Hogwarts Legacy",
    "tag1": "Action RPG",
    "tag2": "Open World",
    "price": "$39.99",
    "rating": 3.8,
    "desc": "A action rpg pick with open world elements \u2014 placeholder description, replace with your own thoughts on Hogwarts Legacy.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hogwarts%20Legacy",
    "cover": "https://picsum.photos/seed/hogwartslegacy/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 54,
      "gpuBar": 57,
      "ramBar": 40,
      "storBar": 71
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hogwarts Legacy here."
    }
  },
  {
    "title": "Hades",
    "tag1": "Roguelike",
    "tag2": "Indie",
    "price": "$29.99",
    "rating": 3.9,
    "desc": "A roguelike pick with indie elements \u2014 placeholder description, replace with your own thoughts on Hades.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hades",
    "cover": "https://picsum.photos/seed/hades/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 61,
      "gpuBar": 68,
      "ramBar": 45,
      "storBar": 84
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hades here."
    }
  },
  {
    "title": "Stardew Valley",
    "tag1": "Simulation",
    "tag2": "Indie",
    "price": "$24.99",
    "rating": 4.0,
    "desc": "A simulation pick with indie elements \u2014 placeholder description, replace with your own thoughts on Stardew Valley.",
    "steamUrl": "https://store.steampowered.com/search/?term=Stardew%20Valley",
    "cover": "https://picsum.photos/seed/stardewvalley/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 68,
      "gpuBar": 79,
      "ramBar": 50,
      "storBar": 47
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Stardew Valley here."
    }
  },
  {
    "title": "Terraria",
    "tag1": "Sandbox",
    "tag2": "Adventure",
    "price": "$19.99",
    "rating": 4.1,
    "desc": "A sandbox pick with adventure elements \u2014 placeholder description, replace with your own thoughts on Terraria.",
    "steamUrl": "https://store.steampowered.com/search/?term=Terraria",
    "cover": "https://picsum.photos/seed/terraria/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 75,
      "gpuBar": 90,
      "ramBar": 55,
      "storBar": 60
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Terraria here."
    }
  },
  {
    "title": "Portal 2",
    "tag1": "Puzzle",
    "tag2": "Sci-fi",
    "price": "$14.99",
    "rating": 4.2,
    "desc": "A puzzle pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Portal 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Portal%202",
    "cover": "https://picsum.photos/seed/portal2/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 82,
      "gpuBar": 41,
      "ramBar": 60,
      "storBar": 73
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Portal 2 here."
    }
  },
  {
    "title": "Half-Life: Alyx",
    "tag1": "VR",
    "tag2": "Sci-fi",
    "price": "$9.99",
    "rating": 4.3,
    "desc": "A vr pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Half-Life: Alyx.",
    "steamUrl": "https://store.steampowered.com/search/?term=Half-Life%3A%20Alyx",
    "cover": "https://picsum.photos/seed/halflifealyx/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 89,
      "gpuBar": 52,
      "ramBar": 65,
      "storBar": 86
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Half-Life: Alyx here."
    }
  },
  {
    "title": "Counter-Strike 2",
    "tag1": "FPS",
    "tag2": "Multiplayer",
    "price": "Free to Play",
    "rating": 4.4,
    "desc": "A fps pick with multiplayer elements \u2014 placeholder description, replace with your own thoughts on Counter-Strike 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Counter-Strike%202",
    "cover": "https://picsum.photos/seed/counterstrike2/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 41,
      "gpuBar": 63,
      "ramBar": 70,
      "storBar": 49
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Counter-Strike 2 here."
    }
  },
  {
    "title": "Dota 2",
    "tag1": "MOBA",
    "tag2": "Strategy",
    "price": "Free to Play",
    "rating": 4.5,
    "desc": "A moba pick with strategy elements \u2014 placeholder description, replace with your own thoughts on Dota 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Dota%202",
    "cover": "https://picsum.photos/seed/dota2/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 48,
      "gpuBar": 74,
      "ramBar": 75,
      "storBar": 62
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Dota 2 here."
    }
  },
  {
    "title": "PUBG: Battlegrounds",
    "tag1": "Battle Royale",
    "tag2": "Shooter",
    "price": "$49.99",
    "rating": 4.6,
    "desc": "A battle royale pick with shooter elements \u2014 placeholder description, replace with your own thoughts on PUBG: Battlegrounds.",
    "steamUrl": "https://store.steampowered.com/search/?term=PUBG%3A%20Battlegrounds",
    "cover": "https://picsum.photos/seed/pubgbattlegrounds/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 55,
      "gpuBar": 85,
      "ramBar": 80,
      "storBar": 75
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on PUBG: Battlegrounds here."
    }
  },
  {
    "title": "Apex Legends",
    "tag1": "Battle Royale",
    "tag2": "FPS",
    "price": "Free to Play",
    "rating": 4.7,
    "desc": "A battle royale pick with fps elements \u2014 placeholder description, replace with your own thoughts on Apex Legends.",
    "steamUrl": "https://store.steampowered.com/search/?term=Apex%20Legends",
    "cover": "https://picsum.photos/seed/apexlegends/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 62,
      "gpuBar": 36,
      "ramBar": 85,
      "storBar": 88
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Apex Legends here."
    }
  },
  {
    "title": "Grand Theft Auto V",
    "tag1": "Open World",
    "tag2": "Action",
    "price": "$29.99",
    "rating": 4.8,
    "desc": "A open world pick with action elements \u2014 placeholder description, replace with your own thoughts on Grand Theft Auto V.",
    "steamUrl": "https://store.steampowered.com/search/?term=Grand%20Theft%20Auto%20V",
    "cover": "https://picsum.photos/seed/grandtheftautov/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 69,
      "gpuBar": 47,
      "ramBar": 90,
      "storBar": 51
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Grand Theft Auto V here."
    }
  },
  {
    "title": "Dark Souls III",
    "tag1": "Souls-like",
    "tag2": "Action RPG",
    "price": "$24.99",
    "rating": 4.9,
    "desc": "A souls-like pick with action rpg elements \u2014 placeholder description, replace with your own thoughts on Dark Souls III.",
    "steamUrl": "https://store.steampowered.com/search/?term=Dark%20Souls%20III",
    "cover": "https://picsum.photos/seed/darksoulsiii/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 76,
      "gpuBar": 58,
      "ramBar": 30,
      "storBar": 64
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Dark Souls III here."
    }
  },
  {
    "title": "Sekiro: Shadows Die Twice",
    "tag1": "Action",
    "tag2": "Souls-like",
    "price": "$19.99",
    "rating": 3.6,
    "desc": "A action pick with souls-like elements \u2014 placeholder description, replace with your own thoughts on Sekiro: Shadows Die Twice.",
    "steamUrl": "https://store.steampowered.com/search/?term=Sekiro%3A%20Shadows%20Die%20Twice",
    "cover": "https://picsum.photos/seed/sekiroshadowsdietwic/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 83,
      "gpuBar": 69,
      "ramBar": 35,
      "storBar": 77
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Sekiro: Shadows Die Twice here."
    }
  },
  {
    "title": "Resident Evil 4",
    "tag1": "Survival Horror",
    "tag2": "Action",
    "price": "$14.99",
    "rating": 3.7,
    "desc": "A survival horror pick with action elements \u2014 placeholder description, replace with your own thoughts on Resident Evil 4.",
    "steamUrl": "https://store.steampowered.com/search/?term=Resident%20Evil%204",
    "cover": "https://picsum.photos/seed/residentevil4/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 90,
      "gpuBar": 80,
      "ramBar": 40,
      "storBar": 90
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Resident Evil 4 here."
    }
  },
  {
    "title": "Resident Evil Village",
    "tag1": "Survival Horror",
    "tag2": "FPS",
    "price": "$9.99",
    "rating": 3.8,
    "desc": "A survival horror pick with fps elements \u2014 placeholder description, replace with your own thoughts on Resident Evil Village.",
    "steamUrl": "https://store.steampowered.com/search/?term=Resident%20Evil%20Village",
    "cover": "https://picsum.photos/seed/residentevilvillage/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 42,
      "gpuBar": 91,
      "ramBar": 45,
      "storBar": 53
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Resident Evil Village here."
    }
  },
  {
    "title": "Doom Eternal",
    "tag1": "FPS",
    "tag2": "Action",
    "price": "$4.99",
    "rating": 3.9,
    "desc": "A fps pick with action elements \u2014 placeholder description, replace with your own thoughts on Doom Eternal.",
    "steamUrl": "https://store.steampowered.com/search/?term=Doom%20Eternal",
    "cover": "https://picsum.photos/seed/doometernal/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 49,
      "gpuBar": 42,
      "ramBar": 50,
      "storBar": 66
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Doom Eternal here."
    }
  },
  {
    "title": "Doom (2016)",
    "tag1": "FPS",
    "tag2": "Action",
    "price": "$59.99",
    "rating": 4.0,
    "desc": "A fps pick with action elements \u2014 placeholder description, replace with your own thoughts on Doom (2016).",
    "steamUrl": "https://store.steampowered.com/search/?term=Doom%20%282016%29",
    "cover": "https://picsum.photos/seed/doom2016/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 56,
      "gpuBar": 53,
      "ramBar": 55,
      "storBar": 79
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Doom (2016) here."
    }
  },
  {
    "title": "Titanfall 2",
    "tag1": "FPS",
    "tag2": "Sci-fi",
    "price": "$49.99",
    "rating": 4.1,
    "desc": "A fps pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Titanfall 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Titanfall%202",
    "cover": "https://picsum.photos/seed/titanfall2/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 63,
      "gpuBar": 64,
      "ramBar": 60,
      "storBar": 92
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Titanfall 2 here."
    }
  },
  {
    "title": "Sid Meier's Civilization VI",
    "tag1": "Strategy",
    "tag2": "Turn-Based",
    "price": "$39.99",
    "rating": 4.2,
    "desc": "A strategy pick with turn-based elements \u2014 placeholder description, replace with your own thoughts on Sid Meier's Civilization VI.",
    "steamUrl": "https://store.steampowered.com/search/?term=Sid%20Meier%27s%20Civilization%20VI",
    "cover": "https://picsum.photos/seed/sidmeierscivilizatio/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 70,
      "gpuBar": 75,
      "ramBar": 65,
      "storBar": 55
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Sid Meier's Civilization VI here."
    }
  },
  {
    "title": "Crusader Kings III",
    "tag1": "Strategy",
    "tag2": "Grand Strategy",
    "price": "$29.99",
    "rating": 4.3,
    "desc": "A strategy pick with grand strategy elements \u2014 placeholder description, replace with your own thoughts on Crusader Kings III.",
    "steamUrl": "https://store.steampowered.com/search/?term=Crusader%20Kings%20III",
    "cover": "https://picsum.photos/seed/crusaderkingsiii/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 77,
      "gpuBar": 86,
      "ramBar": 70,
      "storBar": 68
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Crusader Kings III here."
    }
  },
  {
    "title": "Total War: Warhammer III",
    "tag1": "Strategy",
    "tag2": "RTS",
    "price": "$24.99",
    "rating": 4.4,
    "desc": "A strategy pick with rts elements \u2014 placeholder description, replace with your own thoughts on Total War: Warhammer III.",
    "steamUrl": "https://store.steampowered.com/search/?term=Total%20War%3A%20Warhammer%20III",
    "cover": "https://picsum.photos/seed/totalwarwarhammeriii/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 84,
      "gpuBar": 37,
      "ramBar": 75,
      "storBar": 81
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Total War: Warhammer III here."
    }
  },
  {
    "title": "Age of Empires IV",
    "tag1": "RTS",
    "tag2": "Strategy",
    "price": "$19.99",
    "rating": 4.5,
    "desc": "A rts pick with strategy elements \u2014 placeholder description, replace with your own thoughts on Age of Empires IV.",
    "steamUrl": "https://store.steampowered.com/search/?term=Age%20of%20Empires%20IV",
    "cover": "https://picsum.photos/seed/ageofempiresiv/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 91,
      "gpuBar": 48,
      "ramBar": 80,
      "storBar": 94
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Age of Empires IV here."
    }
  },
  {
    "title": "XCOM 2",
    "tag1": "Strategy",
    "tag2": "Tactics",
    "price": "$14.99",
    "rating": 4.6,
    "desc": "A strategy pick with tactics elements \u2014 placeholder description, replace with your own thoughts on XCOM 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=XCOM%202",
    "cover": "https://picsum.photos/seed/xcom2/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 43,
      "gpuBar": 59,
      "ramBar": 85,
      "storBar": 57
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on XCOM 2 here."
    }
  },
  {
    "title": "Divinity: Original Sin 2",
    "tag1": "RPG",
    "tag2": "Turn-Based",
    "price": "$9.99",
    "rating": 4.7,
    "desc": "A rpg pick with turn-based elements \u2014 placeholder description, replace with your own thoughts on Divinity: Original Sin 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Divinity%3A%20Original%20Sin%202",
    "cover": "https://picsum.photos/seed/divinityoriginalsin2/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 50,
      "gpuBar": 70,
      "ramBar": 90,
      "storBar": 70
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Divinity: Original Sin 2 here."
    }
  },
  {
    "title": "Disco Elysium",
    "tag1": "RPG",
    "tag2": "Story Rich",
    "price": "$4.99",
    "rating": 4.8,
    "desc": "A rpg pick with story rich elements \u2014 placeholder description, replace with your own thoughts on Disco Elysium.",
    "steamUrl": "https://store.steampowered.com/search/?term=Disco%20Elysium",
    "cover": "https://picsum.photos/seed/discoelysium/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 57,
      "gpuBar": 81,
      "ramBar": 30,
      "storBar": 83
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Disco Elysium here."
    }
  },
  {
    "title": "Fallout 4",
    "tag1": "RPG",
    "tag2": "Open World",
    "price": "$59.99",
    "rating": 4.9,
    "desc": "A rpg pick with open world elements \u2014 placeholder description, replace with your own thoughts on Fallout 4.",
    "steamUrl": "https://store.steampowered.com/search/?term=Fallout%204",
    "cover": "https://picsum.photos/seed/fallout4/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 64,
      "gpuBar": 92,
      "ramBar": 35,
      "storBar": 46
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Fallout 4 here."
    }
  },
  {
    "title": "Fallout: New Vegas",
    "tag1": "RPG",
    "tag2": "Open World",
    "price": "$49.99",
    "rating": 3.6,
    "desc": "A rpg pick with open world elements \u2014 placeholder description, replace with your own thoughts on Fallout: New Vegas.",
    "steamUrl": "https://store.steampowered.com/search/?term=Fallout%3A%20New%20Vegas",
    "cover": "https://picsum.photos/seed/falloutnewvegas/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 71,
      "gpuBar": 43,
      "ramBar": 40,
      "storBar": 59
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Fallout: New Vegas here."
    }
  },
  {
    "title": "The Elder Scrolls V: Skyrim",
    "tag1": "RPG",
    "tag2": "Open World",
    "price": "$39.99",
    "rating": 3.7,
    "desc": "A rpg pick with open world elements \u2014 placeholder description, replace with your own thoughts on The Elder Scrolls V: Skyrim.",
    "steamUrl": "https://store.steampowered.com/search/?term=The%20Elder%20Scrolls%20V%3A%20Skyrim",
    "cover": "https://picsum.photos/seed/theelderscrollsvskyr/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 78,
      "gpuBar": 54,
      "ramBar": 45,
      "storBar": 72
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on The Elder Scrolls V: Skyrim here."
    }
  },
  {
    "title": "The Elder Scrolls IV: Oblivion",
    "tag1": "RPG",
    "tag2": "Open World",
    "price": "$29.99",
    "rating": 3.8,
    "desc": "A rpg pick with open world elements \u2014 placeholder description, replace with your own thoughts on The Elder Scrolls IV: Oblivion.",
    "steamUrl": "https://store.steampowered.com/search/?term=The%20Elder%20Scrolls%20IV%3A%20Oblivion",
    "cover": "https://picsum.photos/seed/theelderscrollsivobl/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 85,
      "gpuBar": 65,
      "ramBar": 50,
      "storBar": 85
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on The Elder Scrolls IV: Oblivion here."
    }
  },
  {
    "title": "Mass Effect Legendary Edition",
    "tag1": "RPG",
    "tag2": "Sci-fi",
    "price": "$24.99",
    "rating": 3.9,
    "desc": "A rpg pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Mass Effect Legendary Edition.",
    "steamUrl": "https://store.steampowered.com/search/?term=Mass%20Effect%20Legendary%20Edition",
    "cover": "https://picsum.photos/seed/masseffectlegendarye/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 92,
      "gpuBar": 76,
      "ramBar": 55,
      "storBar": 48
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Mass Effect Legendary Edition here."
    }
  },
  {
    "title": "Dragon Age: Inquisition",
    "tag1": "RPG",
    "tag2": "Fantasy",
    "price": "$19.99",
    "rating": 4.0,
    "desc": "A rpg pick with fantasy elements \u2014 placeholder description, replace with your own thoughts on Dragon Age: Inquisition.",
    "steamUrl": "https://store.steampowered.com/search/?term=Dragon%20Age%3A%20Inquisition",
    "cover": "https://picsum.photos/seed/dragonageinquisition/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 44,
      "gpuBar": 87,
      "ramBar": 60,
      "storBar": 61
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Dragon Age: Inquisition here."
    }
  },
  {
    "title": "Persona 5 Royal",
    "tag1": "JRPG",
    "tag2": "Story Rich",
    "price": "$14.99",
    "rating": 4.1,
    "desc": "A jrpg pick with story rich elements \u2014 placeholder description, replace with your own thoughts on Persona 5 Royal.",
    "steamUrl": "https://store.steampowered.com/search/?term=Persona%205%20Royal",
    "cover": "https://picsum.photos/seed/persona5royal/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 51,
      "gpuBar": 38,
      "ramBar": 65,
      "storBar": 74
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Persona 5 Royal here."
    }
  },
  {
    "title": "Nier: Automata",
    "tag1": "Action RPG",
    "tag2": "Sci-fi",
    "price": "$9.99",
    "rating": 4.2,
    "desc": "A action rpg pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Nier: Automata.",
    "steamUrl": "https://store.steampowered.com/search/?term=Nier%3A%20Automata",
    "cover": "https://picsum.photos/seed/nierautomata/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 58,
      "gpuBar": 49,
      "ramBar": 70,
      "storBar": 87
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Nier: Automata here."
    }
  },
  {
    "title": "Monster Hunter: World",
    "tag1": "Action RPG",
    "tag2": "Co-op",
    "price": "$4.99",
    "rating": 4.3,
    "desc": "A action rpg pick with co-op elements \u2014 placeholder description, replace with your own thoughts on Monster Hunter: World.",
    "steamUrl": "https://store.steampowered.com/search/?term=Monster%20Hunter%3A%20World",
    "cover": "https://picsum.photos/seed/monsterhunterworld/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 65,
      "gpuBar": 60,
      "ramBar": 75,
      "storBar": 50
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Monster Hunter: World here."
    }
  },
  {
    "title": "Monster Hunter Rise",
    "tag1": "Action RPG",
    "tag2": "Co-op",
    "price": "$59.99",
    "rating": 4.4,
    "desc": "A action rpg pick with co-op elements \u2014 placeholder description, replace with your own thoughts on Monster Hunter Rise.",
    "steamUrl": "https://store.steampowered.com/search/?term=Monster%20Hunter%20Rise",
    "cover": "https://picsum.photos/seed/monsterhunterrise/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 72,
      "gpuBar": 71,
      "ramBar": 80,
      "storBar": 63
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Monster Hunter Rise here."
    }
  },
  {
    "title": "Death Stranding",
    "tag1": "Action",
    "tag2": "Adventure",
    "price": "$49.99",
    "rating": 4.5,
    "desc": "A action pick with adventure elements \u2014 placeholder description, replace with your own thoughts on Death Stranding.",
    "steamUrl": "https://store.steampowered.com/search/?term=Death%20Stranding",
    "cover": "https://picsum.photos/seed/deathstranding/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 79,
      "gpuBar": 82,
      "ramBar": 85,
      "storBar": 76
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Death Stranding here."
    }
  },
  {
    "title": "Metal Gear Solid V: The Phantom Pain",
    "tag1": "Stealth",
    "tag2": "Action",
    "price": "$39.99",
    "rating": 4.6,
    "desc": "A stealth pick with action elements \u2014 placeholder description, replace with your own thoughts on Metal Gear Solid V: The Phantom Pain.",
    "steamUrl": "https://store.steampowered.com/search/?term=Metal%20Gear%20Solid%20V%3A%20The%20Phantom%20Pain",
    "cover": "https://picsum.photos/seed/metalgearsolidvtheph/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 86,
      "gpuBar": 93,
      "ramBar": 90,
      "storBar": 89
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Metal Gear Solid V: The Phantom Pain here."
    }
  },
  {
    "title": "Hitman 3",
    "tag1": "Stealth",
    "tag2": "Puzzle",
    "price": "$29.99",
    "rating": 4.7,
    "desc": "A stealth pick with puzzle elements \u2014 placeholder description, replace with your own thoughts on Hitman 3.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hitman%203",
    "cover": "https://picsum.photos/seed/hitman3/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 93,
      "gpuBar": 44,
      "ramBar": 30,
      "storBar": 52
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hitman 3 here."
    }
  },
  {
    "title": "Deus Ex: Mankind Divided",
    "tag1": "Action RPG",
    "tag2": "Cyberpunk",
    "price": "$24.99",
    "rating": 4.8,
    "desc": "A action rpg pick with cyberpunk elements \u2014 placeholder description, replace with your own thoughts on Deus Ex: Mankind Divided.",
    "steamUrl": "https://store.steampowered.com/search/?term=Deus%20Ex%3A%20Mankind%20Divided",
    "cover": "https://picsum.photos/seed/deusexmankinddivided/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 45,
      "gpuBar": 55,
      "ramBar": 35,
      "storBar": 65
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Deus Ex: Mankind Divided here."
    }
  },
  {
    "title": "Control",
    "tag1": "Action",
    "tag2": "Supernatural",
    "price": "$19.99",
    "rating": 4.9,
    "desc": "A action pick with supernatural elements \u2014 placeholder description, replace with your own thoughts on Control.",
    "steamUrl": "https://store.steampowered.com/search/?term=Control",
    "cover": "https://picsum.photos/seed/control/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 52,
      "gpuBar": 66,
      "ramBar": 40,
      "storBar": 78
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Control here."
    }
  },
  {
    "title": "Alan Wake 2",
    "tag1": "Survival Horror",
    "tag2": "Story Rich",
    "price": "$14.99",
    "rating": 3.6,
    "desc": "A survival horror pick with story rich elements \u2014 placeholder description, replace with your own thoughts on Alan Wake 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Alan%20Wake%202",
    "cover": "https://picsum.photos/seed/alanwake2/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 59,
      "gpuBar": 77,
      "ramBar": 45,
      "storBar": 91
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Alan Wake 2 here."
    }
  },
  {
    "title": "Silent Hill 2",
    "tag1": "Survival Horror",
    "tag2": "Story Rich",
    "price": "$9.99",
    "rating": 3.7,
    "desc": "A survival horror pick with story rich elements \u2014 placeholder description, replace with your own thoughts on Silent Hill 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Silent%20Hill%202",
    "cover": "https://picsum.photos/seed/silenthill2/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 66,
      "gpuBar": 88,
      "ramBar": 50,
      "storBar": 54
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Silent Hill 2 here."
    }
  },
  {
    "title": "Dead Space",
    "tag1": "Survival Horror",
    "tag2": "Sci-fi",
    "price": "$4.99",
    "rating": 3.8,
    "desc": "A survival horror pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Dead Space.",
    "steamUrl": "https://store.steampowered.com/search/?term=Dead%20Space",
    "cover": "https://picsum.photos/seed/deadspace/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 73,
      "gpuBar": 39,
      "ramBar": 55,
      "storBar": 67
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Dead Space here."
    }
  },
  {
    "title": "Amnesia: The Bunker",
    "tag1": "Survival Horror",
    "tag2": "Indie",
    "price": "$59.99",
    "rating": 3.9,
    "desc": "A survival horror pick with indie elements \u2014 placeholder description, replace with your own thoughts on Amnesia: The Bunker.",
    "steamUrl": "https://store.steampowered.com/search/?term=Amnesia%3A%20The%20Bunker",
    "cover": "https://picsum.photos/seed/amnesiathebunker/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 80,
      "gpuBar": 50,
      "ramBar": 60,
      "storBar": 80
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Amnesia: The Bunker here."
    }
  },
  {
    "title": "Outlast",
    "tag1": "Survival Horror",
    "tag2": "Indie",
    "price": "$49.99",
    "rating": 4.0,
    "desc": "A survival horror pick with indie elements \u2014 placeholder description, replace with your own thoughts on Outlast.",
    "steamUrl": "https://store.steampowered.com/search/?term=Outlast",
    "cover": "https://picsum.photos/seed/outlast/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 87,
      "gpuBar": 61,
      "ramBar": 65,
      "storBar": 93
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Outlast here."
    }
  },
  {
    "title": "Phasmophobia",
    "tag1": "Horror",
    "tag2": "Co-op",
    "price": "$39.99",
    "rating": 4.1,
    "desc": "A horror pick with co-op elements \u2014 placeholder description, replace with your own thoughts on Phasmophobia.",
    "steamUrl": "https://store.steampowered.com/search/?term=Phasmophobia",
    "cover": "https://picsum.photos/seed/phasmophobia/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 94,
      "gpuBar": 72,
      "ramBar": 70,
      "storBar": 56
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Phasmophobia here."
    }
  },
  {
    "title": "Left 4 Dead 2",
    "tag1": "Co-op",
    "tag2": "Zombie Shooter",
    "price": "$29.99",
    "rating": 4.2,
    "desc": "A co-op pick with zombie shooter elements \u2014 placeholder description, replace with your own thoughts on Left 4 Dead 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Left%204%20Dead%202",
    "cover": "https://picsum.photos/seed/left4dead2/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 46,
      "gpuBar": 83,
      "ramBar": 75,
      "storBar": 69
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Left 4 Dead 2 here."
    }
  },
  {
    "title": "Back 4 Blood",
    "tag1": "Co-op",
    "tag2": "Zombie Shooter",
    "price": "$24.99",
    "rating": 4.3,
    "desc": "A co-op pick with zombie shooter elements \u2014 placeholder description, replace with your own thoughts on Back 4 Blood.",
    "steamUrl": "https://store.steampowered.com/search/?term=Back%204%20Blood",
    "cover": "https://picsum.photos/seed/back4blood/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 53,
      "gpuBar": 94,
      "ramBar": 80,
      "storBar": 82
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Back 4 Blood here."
    }
  },
  {
    "title": "Deep Rock Galactic",
    "tag1": "Co-op",
    "tag2": "Sci-fi",
    "price": "$19.99",
    "rating": 4.4,
    "desc": "A co-op pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Deep Rock Galactic.",
    "steamUrl": "https://store.steampowered.com/search/?term=Deep%20Rock%20Galactic",
    "cover": "https://picsum.photos/seed/deeprockgalactic/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 60,
      "gpuBar": 45,
      "ramBar": 85,
      "storBar": 45
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Deep Rock Galactic here."
    }
  },
  {
    "title": "Helldivers 2",
    "tag1": "Co-op",
    "tag2": "Shooter",
    "price": "$14.99",
    "rating": 4.5,
    "desc": "A co-op pick with shooter elements \u2014 placeholder description, replace with your own thoughts on Helldivers 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Helldivers%202",
    "cover": "https://picsum.photos/seed/helldivers2/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 67,
      "gpuBar": 56,
      "ramBar": 90,
      "storBar": 58
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Helldivers 2 here."
    }
  },
  {
    "title": "It Takes Two",
    "tag1": "Co-op",
    "tag2": "Adventure",
    "price": "$9.99",
    "rating": 4.6,
    "desc": "A co-op pick with adventure elements \u2014 placeholder description, replace with your own thoughts on It Takes Two.",
    "steamUrl": "https://store.steampowered.com/search/?term=It%20Takes%20Two",
    "cover": "https://picsum.photos/seed/ittakestwo/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 74,
      "gpuBar": 67,
      "ramBar": 30,
      "storBar": 71
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on It Takes Two here."
    }
  },
  {
    "title": "A Way Out",
    "tag1": "Co-op",
    "tag2": "Story Rich",
    "price": "$4.99",
    "rating": 4.7,
    "desc": "A co-op pick with story rich elements \u2014 placeholder description, replace with your own thoughts on A Way Out.",
    "steamUrl": "https://store.steampowered.com/search/?term=A%20Way%20Out",
    "cover": "https://picsum.photos/seed/awayout/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 81,
      "gpuBar": 78,
      "ramBar": 35,
      "storBar": 84
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on A Way Out here."
    }
  },
  {
    "title": "Portal",
    "tag1": "Puzzle",
    "tag2": "Sci-fi",
    "price": "$59.99",
    "rating": 4.8,
    "desc": "A puzzle pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Portal.",
    "steamUrl": "https://store.steampowered.com/search/?term=Portal",
    "cover": "https://picsum.photos/seed/portal/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 88,
      "gpuBar": 89,
      "ramBar": 40,
      "storBar": 47
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Portal here."
    }
  },
  {
    "title": "The Talos Principle 2",
    "tag1": "Puzzle",
    "tag2": "Sci-fi",
    "price": "$49.99",
    "rating": 4.9,
    "desc": "A puzzle pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on The Talos Principle 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=The%20Talos%20Principle%202",
    "cover": "https://picsum.photos/seed/thetalosprinciple2/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 40,
      "gpuBar": 40,
      "ramBar": 45,
      "storBar": 60
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on The Talos Principle 2 here."
    }
  },
  {
    "title": "Baba Is You",
    "tag1": "Puzzle",
    "tag2": "Indie",
    "price": "$39.99",
    "rating": 3.6,
    "desc": "A puzzle pick with indie elements \u2014 placeholder description, replace with your own thoughts on Baba Is You.",
    "steamUrl": "https://store.steampowered.com/search/?term=Baba%20Is%20You",
    "cover": "https://picsum.photos/seed/babaisyou/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 47,
      "gpuBar": 51,
      "ramBar": 50,
      "storBar": 73
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Baba Is You here."
    }
  },
  {
    "title": "Human: Fall Flat",
    "tag1": "Puzzle",
    "tag2": "Physics",
    "price": "$29.99",
    "rating": 3.7,
    "desc": "A puzzle pick with physics elements \u2014 placeholder description, replace with your own thoughts on Human: Fall Flat.",
    "steamUrl": "https://store.steampowered.com/search/?term=Human%3A%20Fall%20Flat",
    "cover": "https://picsum.photos/seed/humanfallflat/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 54,
      "gpuBar": 62,
      "ramBar": 55,
      "storBar": 86
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Human: Fall Flat here."
    }
  },
  {
    "title": "Cities: Skylines II",
    "tag1": "Simulation",
    "tag2": "City Builder",
    "price": "$24.99",
    "rating": 3.8,
    "desc": "A simulation pick with city builder elements \u2014 placeholder description, replace with your own thoughts on Cities: Skylines II.",
    "steamUrl": "https://store.steampowered.com/search/?term=Cities%3A%20Skylines%20II",
    "cover": "https://picsum.photos/seed/citiesskylinesii/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 61,
      "gpuBar": 73,
      "ramBar": 60,
      "storBar": 49
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Cities: Skylines II here."
    }
  },
  {
    "title": "Planet Coaster 2",
    "tag1": "Simulation",
    "tag2": "Management",
    "price": "$19.99",
    "rating": 3.9,
    "desc": "A simulation pick with management elements \u2014 placeholder description, replace with your own thoughts on Planet Coaster 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Planet%20Coaster%202",
    "cover": "https://picsum.photos/seed/planetcoaster2/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 68,
      "gpuBar": 84,
      "ramBar": 65,
      "storBar": 62
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Planet Coaster 2 here."
    }
  },
  {
    "title": "Two Point Hospital",
    "tag1": "Simulation",
    "tag2": "Management",
    "price": "$14.99",
    "rating": 4.0,
    "desc": "A simulation pick with management elements \u2014 placeholder description, replace with your own thoughts on Two Point Hospital.",
    "steamUrl": "https://store.steampowered.com/search/?term=Two%20Point%20Hospital",
    "cover": "https://picsum.photos/seed/twopointhospital/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 75,
      "gpuBar": 35,
      "ramBar": 70,
      "storBar": 75
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Two Point Hospital here."
    }
  },
  {
    "title": "Football Manager 2024",
    "tag1": "Sports",
    "tag2": "Simulation",
    "price": "$9.99",
    "rating": 4.1,
    "desc": "A sports pick with simulation elements \u2014 placeholder description, replace with your own thoughts on Football Manager 2024.",
    "steamUrl": "https://store.steampowered.com/search/?term=Football%20Manager%202024",
    "cover": "https://picsum.photos/seed/footballmanager2024/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 82,
      "gpuBar": 46,
      "ramBar": 75,
      "storBar": 88
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Football Manager 2024 here."
    }
  },
  {
    "title": "EA Sports FC 24",
    "tag1": "Sports",
    "tag2": "Simulation",
    "price": "$4.99",
    "rating": 4.2,
    "desc": "A sports pick with simulation elements \u2014 placeholder description, replace with your own thoughts on EA Sports FC 24.",
    "steamUrl": "https://store.steampowered.com/search/?term=EA%20Sports%20FC%2024",
    "cover": "https://picsum.photos/seed/easportsfc24/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 89,
      "gpuBar": 57,
      "ramBar": 80,
      "storBar": 51
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on EA Sports FC 24 here."
    }
  },
  {
    "title": "NBA 2K24",
    "tag1": "Sports",
    "tag2": "Simulation",
    "price": "$59.99",
    "rating": 4.3,
    "desc": "A sports pick with simulation elements \u2014 placeholder description, replace with your own thoughts on NBA 2K24.",
    "steamUrl": "https://store.steampowered.com/search/?term=NBA%202K24",
    "cover": "https://picsum.photos/seed/nba2k24/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 41,
      "gpuBar": 68,
      "ramBar": 85,
      "storBar": 64
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on NBA 2K24 here."
    }
  },
  {
    "title": "Rocket League",
    "tag1": "Sports",
    "tag2": "Multiplayer",
    "price": "$49.99",
    "rating": 4.4,
    "desc": "A sports pick with multiplayer elements \u2014 placeholder description, replace with your own thoughts on Rocket League.",
    "steamUrl": "https://store.steampowered.com/search/?term=Rocket%20League",
    "cover": "https://picsum.photos/seed/rocketleague/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 48,
      "gpuBar": 79,
      "ramBar": 90,
      "storBar": 77
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Rocket League here."
    }
  },
  {
    "title": "F1 24",
    "tag1": "Racing",
    "tag2": "Simulation",
    "price": "$39.99",
    "rating": 4.5,
    "desc": "A racing pick with simulation elements \u2014 placeholder description, replace with your own thoughts on F1 24.",
    "steamUrl": "https://store.steampowered.com/search/?term=F1%2024",
    "cover": "https://picsum.photos/seed/f124/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 55,
      "gpuBar": 90,
      "ramBar": 30,
      "storBar": 90
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on F1 24 here."
    }
  },
  {
    "title": "Forza Horizon 5",
    "tag1": "Racing",
    "tag2": "Open World",
    "price": "$29.99",
    "rating": 4.6,
    "desc": "A racing pick with open world elements \u2014 placeholder description, replace with your own thoughts on Forza Horizon 5.",
    "steamUrl": "https://store.steampowered.com/search/?term=Forza%20Horizon%205",
    "cover": "https://picsum.photos/seed/forzahorizon5/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 62,
      "gpuBar": 41,
      "ramBar": 35,
      "storBar": 53
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Forza Horizon 5 here."
    }
  },
  {
    "title": "Gran Turismo 7",
    "tag1": "Racing",
    "tag2": "Simulation",
    "price": "$24.99",
    "rating": 4.7,
    "desc": "A racing pick with simulation elements \u2014 placeholder description, replace with your own thoughts on Gran Turismo 7.",
    "steamUrl": "https://store.steampowered.com/search/?term=Gran%20Turismo%207",
    "cover": "https://picsum.photos/seed/granturismo7/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 69,
      "gpuBar": 52,
      "ramBar": 40,
      "storBar": 66
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Gran Turismo 7 here."
    }
  },
  {
    "title": "Need for Speed Unbound",
    "tag1": "Racing",
    "tag2": "Arcade",
    "price": "$19.99",
    "rating": 4.8,
    "desc": "A racing pick with arcade elements \u2014 placeholder description, replace with your own thoughts on Need for Speed Unbound.",
    "steamUrl": "https://store.steampowered.com/search/?term=Need%20for%20Speed%20Unbound",
    "cover": "https://picsum.photos/seed/needforspeedunbound/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 76,
      "gpuBar": 63,
      "ramBar": 45,
      "storBar": 79
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Need for Speed Unbound here."
    }
  },
  {
    "title": "Trackmania",
    "tag1": "Racing",
    "tag2": "Arcade",
    "price": "$14.99",
    "rating": 4.9,
    "desc": "A racing pick with arcade elements \u2014 placeholder description, replace with your own thoughts on Trackmania.",
    "steamUrl": "https://store.steampowered.com/search/?term=Trackmania",
    "cover": "https://picsum.photos/seed/trackmania/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 83,
      "gpuBar": 74,
      "ramBar": 50,
      "storBar": 92
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Trackmania here."
    }
  },
  {
    "title": "Celeste",
    "tag1": "Platformer",
    "tag2": "Indie",
    "price": "$9.99",
    "rating": 3.6,
    "desc": "A platformer pick with indie elements \u2014 placeholder description, replace with your own thoughts on Celeste.",
    "steamUrl": "https://store.steampowered.com/search/?term=Celeste",
    "cover": "https://picsum.photos/seed/celeste/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 90,
      "gpuBar": 85,
      "ramBar": 55,
      "storBar": 55
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Celeste here."
    }
  },
  {
    "title": "Hollow Knight",
    "tag1": "Metroidvania",
    "tag2": "Indie",
    "price": "$4.99",
    "rating": 3.7,
    "desc": "A metroidvania pick with indie elements \u2014 placeholder description, replace with your own thoughts on Hollow Knight.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hollow%20Knight",
    "cover": "https://picsum.photos/seed/hollowknight/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 42,
      "gpuBar": 36,
      "ramBar": 60,
      "storBar": 68
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hollow Knight here."
    }
  },
  {
    "title": "Ori and the Will of the Wisps",
    "tag1": "Metroidvania",
    "tag2": "Indie",
    "price": "$59.99",
    "rating": 3.8,
    "desc": "A metroidvania pick with indie elements \u2014 placeholder description, replace with your own thoughts on Ori and the Will of the Wisps.",
    "steamUrl": "https://store.steampowered.com/search/?term=Ori%20and%20the%20Will%20of%20the%20Wisps",
    "cover": "https://picsum.photos/seed/oriandthewillofthewi/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 49,
      "gpuBar": 47,
      "ramBar": 65,
      "storBar": 81
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Ori and the Will of the Wisps here."
    }
  },
  {
    "title": "Dead Cells",
    "tag1": "Roguelike",
    "tag2": "Metroidvania",
    "price": "$49.99",
    "rating": 3.9,
    "desc": "A roguelike pick with metroidvania elements \u2014 placeholder description, replace with your own thoughts on Dead Cells.",
    "steamUrl": "https://store.steampowered.com/search/?term=Dead%20Cells",
    "cover": "https://picsum.photos/seed/deadcells/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 56,
      "gpuBar": 58,
      "ramBar": 70,
      "storBar": 94
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Dead Cells here."
    }
  },
  {
    "title": "Hades II",
    "tag1": "Roguelike",
    "tag2": "Indie",
    "price": "$39.99",
    "rating": 4.0,
    "desc": "A roguelike pick with indie elements \u2014 placeholder description, replace with your own thoughts on Hades II.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hades%20II",
    "cover": "https://picsum.photos/seed/hadesii/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 63,
      "gpuBar": 69,
      "ramBar": 75,
      "storBar": 57
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hades II here."
    }
  },
  {
    "title": "Slay the Spire",
    "tag1": "Roguelike",
    "tag2": "Card Game",
    "price": "$29.99",
    "rating": 4.1,
    "desc": "A roguelike pick with card game elements \u2014 placeholder description, replace with your own thoughts on Slay the Spire.",
    "steamUrl": "https://store.steampowered.com/search/?term=Slay%20the%20Spire",
    "cover": "https://picsum.photos/seed/slaythespire/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 70,
      "gpuBar": 80,
      "ramBar": 80,
      "storBar": 70
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Slay the Spire here."
    }
  },
  {
    "title": "Balatro",
    "tag1": "Roguelike",
    "tag2": "Card Game",
    "price": "$24.99",
    "rating": 4.2,
    "desc": "A roguelike pick with card game elements \u2014 placeholder description, replace with your own thoughts on Balatro.",
    "steamUrl": "https://store.steampowered.com/search/?term=Balatro",
    "cover": "https://picsum.photos/seed/balatro/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 77,
      "gpuBar": 91,
      "ramBar": 85,
      "storBar": 83
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Balatro here."
    }
  },
  {
    "title": "Inscryption",
    "tag1": "Card Game",
    "tag2": "Horror",
    "price": "$19.99",
    "rating": 4.3,
    "desc": "A card game pick with horror elements \u2014 placeholder description, replace with your own thoughts on Inscryption.",
    "steamUrl": "https://store.steampowered.com/search/?term=Inscryption",
    "cover": "https://picsum.photos/seed/inscryption/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 84,
      "gpuBar": 42,
      "ramBar": 90,
      "storBar": 46
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Inscryption here."
    }
  },
  {
    "title": "Vampire Survivors",
    "tag1": "Roguelike",
    "tag2": "Indie",
    "price": "$14.99",
    "rating": 4.4,
    "desc": "A roguelike pick with indie elements \u2014 placeholder description, replace with your own thoughts on Vampire Survivors.",
    "steamUrl": "https://store.steampowered.com/search/?term=Vampire%20Survivors",
    "cover": "https://picsum.photos/seed/vampiresurvivors/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 91,
      "gpuBar": 53,
      "ramBar": 30,
      "storBar": 59
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Vampire Survivors here."
    }
  },
  {
    "title": "Risk of Rain 2",
    "tag1": "Roguelike",
    "tag2": "Co-op",
    "price": "$9.99",
    "rating": 4.5,
    "desc": "A roguelike pick with co-op elements \u2014 placeholder description, replace with your own thoughts on Risk of Rain 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Risk%20of%20Rain%202",
    "cover": "https://picsum.photos/seed/riskofrain2/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 43,
      "gpuBar": 64,
      "ramBar": 35,
      "storBar": 72
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Risk of Rain 2 here."
    }
  },
  {
    "title": "Enter the Gungeon",
    "tag1": "Roguelike",
    "tag2": "Bullet Hell",
    "price": "$4.99",
    "rating": 4.6,
    "desc": "A roguelike pick with bullet hell elements \u2014 placeholder description, replace with your own thoughts on Enter the Gungeon.",
    "steamUrl": "https://store.steampowered.com/search/?term=Enter%20the%20Gungeon",
    "cover": "https://picsum.photos/seed/enterthegungeon/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 50,
      "gpuBar": 75,
      "ramBar": 40,
      "storBar": 85
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Enter the Gungeon here."
    }
  },
  {
    "title": "Cuphead",
    "tag1": "Platformer",
    "tag2": "Run and Gun",
    "price": "$59.99",
    "rating": 4.7,
    "desc": "A platformer pick with run and gun elements \u2014 placeholder description, replace with your own thoughts on Cuphead.",
    "steamUrl": "https://store.steampowered.com/search/?term=Cuphead",
    "cover": "https://picsum.photos/seed/cuphead/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 57,
      "gpuBar": 86,
      "ramBar": 45,
      "storBar": 48
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Cuphead here."
    }
  },
  {
    "title": "Ori and the Blind Forest",
    "tag1": "Metroidvania",
    "tag2": "Indie",
    "price": "$49.99",
    "rating": 4.8,
    "desc": "A metroidvania pick with indie elements \u2014 placeholder description, replace with your own thoughts on Ori and the Blind Forest.",
    "steamUrl": "https://store.steampowered.com/search/?term=Ori%20and%20the%20Blind%20Forest",
    "cover": "https://picsum.photos/seed/oriandtheblindforest/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 64,
      "gpuBar": 37,
      "ramBar": 50,
      "storBar": 61
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Ori and the Blind Forest here."
    }
  },
  {
    "title": "Katana Zero",
    "tag1": "Action",
    "tag2": "Indie",
    "price": "$39.99",
    "rating": 4.9,
    "desc": "A action pick with indie elements \u2014 placeholder description, replace with your own thoughts on Katana Zero.",
    "steamUrl": "https://store.steampowered.com/search/?term=Katana%20Zero",
    "cover": "https://picsum.photos/seed/katanazero/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 71,
      "gpuBar": 48,
      "ramBar": 55,
      "storBar": 74
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Katana Zero here."
    }
  },
  {
    "title": "Hotline Miami",
    "tag1": "Action",
    "tag2": "Indie",
    "price": "$29.99",
    "rating": 3.6,
    "desc": "A action pick with indie elements \u2014 placeholder description, replace with your own thoughts on Hotline Miami.",
    "steamUrl": "https://store.steampowered.com/search/?term=Hotline%20Miami",
    "cover": "https://picsum.photos/seed/hotlinemiami/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 78,
      "gpuBar": 59,
      "ramBar": 60,
      "storBar": 87
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Hotline Miami here."
    }
  },
  {
    "title": "Undertale",
    "tag1": "RPG",
    "tag2": "Indie",
    "price": "$24.99",
    "rating": 3.7,
    "desc": "A rpg pick with indie elements \u2014 placeholder description, replace with your own thoughts on Undertale.",
    "steamUrl": "https://store.steampowered.com/search/?term=Undertale",
    "cover": "https://picsum.photos/seed/undertale/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 85,
      "gpuBar": 70,
      "ramBar": 65,
      "storBar": 50
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Undertale here."
    }
  },
  {
    "title": "The Stanley Parable",
    "tag1": "Narrative",
    "tag2": "Indie",
    "price": "$19.99",
    "rating": 3.8,
    "desc": "A narrative pick with indie elements \u2014 placeholder description, replace with your own thoughts on The Stanley Parable.",
    "steamUrl": "https://store.steampowered.com/search/?term=The%20Stanley%20Parable",
    "cover": "https://picsum.photos/seed/thestanleyparable/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 92,
      "gpuBar": 81,
      "ramBar": 70,
      "storBar": 63
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on The Stanley Parable here."
    }
  },
  {
    "title": "What Remains of Edith Finch",
    "tag1": "Narrative",
    "tag2": "Indie",
    "price": "$14.99",
    "rating": 3.9,
    "desc": "A narrative pick with indie elements \u2014 placeholder description, replace with your own thoughts on What Remains of Edith Finch.",
    "steamUrl": "https://store.steampowered.com/search/?term=What%20Remains%20of%20Edith%20Finch",
    "cover": "https://picsum.photos/seed/whatremainsofedithfi/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 44,
      "gpuBar": 92,
      "ramBar": 75,
      "storBar": 76
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on What Remains of Edith Finch here."
    }
  },
  {
    "title": "Firewatch",
    "tag1": "Narrative",
    "tag2": "Adventure",
    "price": "$9.99",
    "rating": 4.0,
    "desc": "A narrative pick with adventure elements \u2014 placeholder description, replace with your own thoughts on Firewatch.",
    "steamUrl": "https://store.steampowered.com/search/?term=Firewatch",
    "cover": "https://picsum.photos/seed/firewatch/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 51,
      "gpuBar": 43,
      "ramBar": 80,
      "storBar": 89
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Firewatch here."
    }
  },
  {
    "title": "Outer Wilds",
    "tag1": "Exploration",
    "tag2": "Mystery",
    "price": "$4.99",
    "rating": 4.1,
    "desc": "A exploration pick with mystery elements \u2014 placeholder description, replace with your own thoughts on Outer Wilds.",
    "steamUrl": "https://store.steampowered.com/search/?term=Outer%20Wilds",
    "cover": "https://picsum.photos/seed/outerwilds/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 58,
      "gpuBar": 54,
      "ramBar": 85,
      "storBar": 52
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Outer Wilds here."
    }
  },
  {
    "title": "Subnautica",
    "tag1": "Survival",
    "tag2": "Exploration",
    "price": "$59.99",
    "rating": 4.2,
    "desc": "A survival pick with exploration elements \u2014 placeholder description, replace with your own thoughts on Subnautica.",
    "steamUrl": "https://store.steampowered.com/search/?term=Subnautica",
    "cover": "https://picsum.photos/seed/subnautica/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 65,
      "gpuBar": 65,
      "ramBar": 90,
      "storBar": 65
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Subnautica here."
    }
  },
  {
    "title": "Valheim",
    "tag1": "Survival",
    "tag2": "Co-op",
    "price": "$49.99",
    "rating": 4.3,
    "desc": "A survival pick with co-op elements \u2014 placeholder description, replace with your own thoughts on Valheim.",
    "steamUrl": "https://store.steampowered.com/search/?term=Valheim",
    "cover": "https://picsum.photos/seed/valheim/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 72,
      "gpuBar": 76,
      "ramBar": 30,
      "storBar": 78
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Valheim here."
    }
  },
  {
    "title": "Rust",
    "tag1": "Survival",
    "tag2": "Multiplayer",
    "price": "$39.99",
    "rating": 4.4,
    "desc": "A survival pick with multiplayer elements \u2014 placeholder description, replace with your own thoughts on Rust.",
    "steamUrl": "https://store.steampowered.com/search/?term=Rust",
    "cover": "https://picsum.photos/seed/rust/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 79,
      "gpuBar": 87,
      "ramBar": 35,
      "storBar": 91
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Rust here."
    }
  },
  {
    "title": "ARK: Survival Ascended",
    "tag1": "Survival",
    "tag2": "Multiplayer",
    "price": "$29.99",
    "rating": 4.5,
    "desc": "A survival pick with multiplayer elements \u2014 placeholder description, replace with your own thoughts on ARK: Survival Ascended.",
    "steamUrl": "https://store.steampowered.com/search/?term=ARK%3A%20Survival%20Ascended",
    "cover": "https://picsum.photos/seed/arksurvivalascended/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 86,
      "gpuBar": 38,
      "ramBar": 40,
      "storBar": 54
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on ARK: Survival Ascended here."
    }
  },
  {
    "title": "Sons of the Forest",
    "tag1": "Survival",
    "tag2": "Horror",
    "price": "$24.99",
    "rating": 4.6,
    "desc": "A survival pick with horror elements \u2014 placeholder description, replace with your own thoughts on Sons of the Forest.",
    "steamUrl": "https://store.steampowered.com/search/?term=Sons%20of%20the%20Forest",
    "cover": "https://picsum.photos/seed/sonsoftheforest/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 93,
      "gpuBar": 49,
      "ramBar": 45,
      "storBar": 67
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Sons of the Forest here."
    }
  },
  {
    "title": "No Man's Sky",
    "tag1": "Exploration",
    "tag2": "Survival",
    "price": "$19.99",
    "rating": 4.7,
    "desc": "A exploration pick with survival elements \u2014 placeholder description, replace with your own thoughts on No Man's Sky.",
    "steamUrl": "https://store.steampowered.com/search/?term=No%20Man%27s%20Sky",
    "cover": "https://picsum.photos/seed/nomanssky/600/800",
    "specs": {
      "cpu": "Ryzen 5 7600 (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "32 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 45,
      "gpuBar": 60,
      "ramBar": 50,
      "storBar": 80
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on No Man's Sky here."
    }
  },
  {
    "title": "Satisfactory",
    "tag1": "Factory Building",
    "tag2": "Simulation",
    "price": "$14.99",
    "rating": 4.8,
    "desc": "A factory building pick with simulation elements \u2014 placeholder description, replace with your own thoughts on Satisfactory.",
    "steamUrl": "https://store.steampowered.com/search/?term=Satisfactory",
    "cover": "https://picsum.photos/seed/satisfactory/600/800",
    "specs": {
      "cpu": "Ryzen 7 7800X3D (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "16 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 52,
      "gpuBar": 71,
      "ramBar": 55,
      "storBar": 93
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Satisfactory here."
    }
  },
  {
    "title": "Factorio",
    "tag1": "Factory Building",
    "tag2": "Simulation",
    "price": "$9.99",
    "rating": 4.9,
    "desc": "A factory building pick with simulation elements \u2014 placeholder description, replace with your own thoughts on Factorio.",
    "steamUrl": "https://store.steampowered.com/search/?term=Factorio",
    "cover": "https://picsum.photos/seed/factorio/600/800",
    "specs": {
      "cpu": "Intel Core i5-13600K (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 59,
      "gpuBar": 82,
      "ramBar": 60,
      "storBar": 56
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Factorio here."
    }
  },
  {
    "title": "Half-Life 2",
    "tag1": "FPS",
    "tag2": "Sci-fi",
    "price": "$4.99",
    "rating": 3.6,
    "desc": "A fps pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Half-Life 2.",
    "steamUrl": "https://store.steampowered.com/search/?term=Half-Life%202",
    "cover": "https://picsum.photos/seed/halflife2/600/800",
    "specs": {
      "cpu": "Intel Core i7-14700K (sample)",
      "gpu": "RTX 4060 (sample)",
      "ram": "32 GB (sample)",
      "storage": "60 GB (SSD)",
      "cpuBar": 66,
      "gpuBar": 93,
      "ramBar": 65,
      "storBar": 69
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Half-Life 2 here."
    }
  },
  {
    "title": "Portal Companion Collection",
    "tag1": "Puzzle",
    "tag2": "Sci-fi",
    "price": "$59.99",
    "rating": 3.7,
    "desc": "A puzzle pick with sci-fi elements \u2014 placeholder description, replace with your own thoughts on Portal Companion Collection.",
    "steamUrl": "https://store.steampowered.com/search/?term=Portal%20Companion%20Collection",
    "cover": "https://picsum.photos/seed/portalcompanioncolle/600/800",
    "specs": {
      "cpu": "Ryzen 9 7900X (sample)",
      "gpu": "RTX 4070 Ti (sample)",
      "ram": "16 GB (sample)",
      "storage": "90 GB (SSD)",
      "cpuBar": 73,
      "gpuBar": 44,
      "ramBar": 70,
      "storBar": 82
    },
    "comment": {
      "user": "your_username",
      "text": "Add your notes on Portal Companion Collection here."
    }
  }
];  