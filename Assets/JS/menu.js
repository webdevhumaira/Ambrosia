/***************************
 * AMBROSIA RESTAURANT MENU *
 ***************************/

// Ambrosia Restaurant Menu Data with Sub-Categories
const ambrosiaMenuItems = {
    // Thai Cuisine with Sub-Categories
    "thai": {
        name: "Thai Cuisine",
        description: "Authentic Thai flavors with perfect balance of sweet, sour, and spicy",
        subCategories: {
            "appetizers": {
                name: "Appetizers",
                items: [
                    {
                        id: 101,
                        name: "Fried Prawn (Goong Tod)",
                        description: "Deep fried sea fresh prawn cooking with bread crump served with palm sauce",
                        price: "৳ 790",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 102,
                        name: "Prawn Cake (Todmin Goong)",
                        description: "Choped golden prawn mixed with thai spicy served with sweet & sour sauce",
                        price: "৳ 890",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Prawn Cake.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "6 Pcs"
                    },
                    {
                        id: 103,
                        name: "Stick Golden Prawn (Stay Goong)",
                        description: "Grilled stick golden prawn served with cucumber & peanut sauce",
                        price: "৳ 830",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Stick Golden Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 104,
                        name: "Stick Chicken (Stay Kai)",
                        description: "Grilled chicken fillet cooking thai spicy served with cucumber & peanut sauce",
                        price: "৳ 830",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Stick Chicken.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 105,
                        name: "Stick Beef (Stay Naam)",
                        description: "Grilled beef fillet combination in thai spicy served with peanut sauce",
                        price: "৳ 950",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Stick Beef.jpg",
                        spiceLevel: 5,
                        isVegetarian: false,
                        chefPick: true,
                        quantity: "6 Pcs"
                    },
                    {
                        id: 106,
                        name: "Fried Loitta Fish (Plamuk Tod)",
                        description: "Deep fried fish served with chilli sauce or sea food sauce (spicy sauce)",
                        price: "৳ 600",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fried Loitta Fish.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 107,
                        name: "Grilled/Fried Cuttle Fish (Plamuk Yang)",
                        description: "Grilled cuttle fish served with sea food sauce (spicy sauce)",
                        price: "৳ 1080",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fried Cuttle Fish.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 108,
                        name: "Fried Mixed Sea Food (Tod Saam Tale)",
                        description: "Deep fried prawn fish fillet and cuttle fish fillet served with sweet & sour sauce",
                        price: "৳ 1080",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fried Mixed Sea Food.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false,
                        chefPick: true
                    },
                    {
                        id: 109,
                        name: "Tempura (Ruammit Chuppang Tod)",
                        description: "Deep fried prawn cuttle fish & mixed vegetables served with sweet chilli sauce",
                        price: "৳ 750",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Tempura.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 110,
                        name: "Fish Finger (Pla Chup Pang Tod)",
                        description: "Deep fried fish fillet with golden bread cramp served with sweet & sour chilli garlic sauce",
                        price: "৳ 720",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fish Finger.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 111,
                        name: "Fried Chicken Wings/ Grilled (Peak Kai Tod/Peak Kai Yang)",
                        description: "Deep fried chicken wings or grilled chicken wings cooking in thai ingredient served with chilli powder sauce & fresh chilli garlic sauce",
                        price: "৳ 650",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fried Chicken Wings.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 112,
                        name: "Spring Roll (Por-Pea Tod)",
                        description: "Deep fried chopped chicken thai jeely noodles and vegetable served with sweet & sour sauce",
                        price: "৳ 650",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Spring Roll.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 113,
                        name: "Fish Cake (Tod Man Pla)",
                        description: "Deep fried chopped fish fillet cooking with chilli paste & thai spicy herb served with sweet & cucumber sauce",
                        price: "৳ 880",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Fish Cake.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "6 Pcs"
                    },
                    {
                        id: 114,
                        name: "Garlic Prawn Dry (Goong Tod Krathiam Prik Tai)",
                        description: "Deep fried prawn with dry garlic",
                        price: "৳ 885",
                        category: ["thai", "appetizers", "main"],
                        image: "./Assets/Images/Garlic Prawn Dry.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    }
                ]
            },
            "salad": {
                name: "Salad",
                items: [
                    {
                        id: 115,
                        name: "Grilled Chicken / Beef Salad (Kai Naam Took / Naam Naam Tok)",
                        description: "Slice grilled chicken or beef with lime juice rice powder, chilli powder, spring onion & mint leaf",
                        price: "৳ 670",
                        category: ["thai", "salad"],
                        image: "./Assets/Images/Grilled Chicken Beef Salad.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 116,
                        name: "Spicy Chicken / Beef / Prawn Salad (Laab Kai / Laab Naam / Laab Goong)",
                        description: "Chopped chicken fillet or chopped beef fillet or fresh prawn with thai spicy herbs & lemon juice",
                        price: "৳ 820",
                        category: ["thai", "salad", "spicy"],
                        image: "./Assets/Images/Spicy Chicken Beef Prawn Salad.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 117,
                        name: "Cuttle Fish / Mixed Sea Food / Thai Jeely Noodles Salad (Yam Plamuk / Yam Tale / Yamwoonsen)",
                        description: "Slice fresh cuttle fish fillet or fish fillet, fresh crabs fresh sea prawn or chopped chicken & jelly noodles with tomato onion, lemon juice, chilli",
                        price: "৳ 880",
                        category: ["thai", "seafood", "salad"],
                        image: "./Assets/Images/Cuttle Fish Mixed Sea Food Thai Jeely Noodles Salad.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 118,
                        name: "Spicy Cuttle Fish Salad (Laab Plamuk)",
                        description: "Slice cuttle fish with lemon juice, chilli powder rice powder onion & spicy herbs",
                        price: "৳ 880",
                        category: ["thai", "salad", "seafood", "spicy"],
                        image: "./Assets/Images/Spicy Cuttle Fish Salad.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 119,
                        name: "Papaya Salad (Somotom Thai)",
                        description: "Green papaya salad with lime juice, fresh tomato dry shrimp, fresh chilli, dry chilli",
                        price: "৳ 460",
                        category: ["thai", "salad", "veg"],
                        image: "./Assets/Images/Papaya Salad.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        chefPick: false
                    },
                    {
                        id: 120,
                        name: "Chicken Cashew Nut Salad (Yamkai Medmamung)",
                        description: "Deep fried chicken fillet & cashew nut with fresh tomato, lime juice, chilli & onion",
                        price: "৳ 700",
                        category: ["thai", "salad"],
                        image: "./Assets/Images/Chicken Cashew Nut Salad.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 121,
                        name: "Fish Fillet Salad (Laab Pla)",
                        description: "Spicy minced fish fillet with lime juice chilli powder rice powder onion & fresh mints",
                        price: "৳ 710",
                        category: ["thai", "salad", "seafood"],
                        image: "./Assets/Images/Fish Fillet Salad.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 122,
                        name: "Raw Shrimp Salad (Goong Chae-Naampla)",
                        description: "Raw sea prawn with lemon juice green chilli and thai spicy herbs",
                        price: "৳ 600",
                        category: ["thai", "salad"],
                        image: "./Assets/Images/Raw Shrimp Salad.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    }
                ]
            },
            "soup": {
                name: "Soup",
                items: [
                    {
                        id: 123,
                        name: "Clear Prawn / Chicken / Fish Fillet Soup (Tomyam Goong Naam Sai / Tom Yam Kai Naam Sai / Tom Yam Pla)",
                        description: "Fresh sea prawn or slice chicken onion",
                        price: "৳ 790",
                        category: ["thai", "soup", "seafood", "chicken"],
                        image: "./Assets/Images/Clear Prawn Chicken Fish Fillet Soup.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 124,
                        name: "Tomyam Goong Naam Khon / Tom Yam Kai (Naam Khon / Tom Yam Pla Naam Khon Special)",
                        description: "Fresh sea prawn or slice chicken",
                        price: "৳ 870",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Tomyam Goong Naam Khon.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 125,
                        name: "Sweet King Prawn Soup",
                        description: "Special sweet king prawn with spicy Thai herbs, red chilli paste coconut milk & lime juice 4pcs",
                        price: "৳ 1150",
                        category: ["thai", "soup", "seafood", "sweet"],
                        image: "./Assets/Images/Sweet King Prawn Soup.jpg",
                        sweetLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 126,
                        name: "Special Seafood Soup",
                        description: "Spicy fresh prawns, fresh crabs, fresh sea fish fresh cuttle fish with lime juice, chilli paste coconut & Thai herbs",
                        price: "৳ 1190",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Special Seafood Soup.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 127,
                        name: "Spicy Sea Food Clear Soup",
                        description: "Sea prawn, sea crabs, sea fish & fresh cuttle fish with hot basil leafs, lime juice fresh chilli, lemon grass & hot Thai ginger",
                        price: "৳ 1080",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Spicy Sea Food Clear Soup.jpg",
                        spiceLevel: 5,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 128,
                        name: "Shot & Sour Prawn / pomfret Soup (Kaensom Goong / Kangsom Pla Jaramed)",
                        description: "Fresh sea prawn or pomfret with hot & sour red chilli paste tamarino juice & minced fish fillet",
                        price: "৳ 1080",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Shot & Sour Prawn pomfret Soup.jpg",
                        spiceLevel: 5,
                        isVegetarian: false,
                        chefPick: true 
                    },
                    {
                        id: 129,
                        name: "Fresh Sea Prawn / Fillet Fish or boneless Chicken (Basil Leaf Soup)",
                        description: "Hot basil leaf, lemon juice, green chilli & thai herbs",
                        price: "৳ 980",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Fresh Sea Prawn Fillet Fish or boneless Chicken.jpg",
                        spiceLevel: 5,
                        isVegetarian: false,
                        chefPick: true 
                    },
                    {
                        id: 130,
                        name: "Thai Jelli Noodle Soup (Kaengjeud Woonsen)",
                        description: "Minced chicken & prawn with fried garlic, spring onion & vegetable",
                        price: "৳ 700",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Thai Jelli Noodle Soup.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 131,
                        name: "Ambrosia Special Soup (Raummit Morfai)",
                        description: "Fish ball, prawn ball, chicken ball with jelly noodles & mixed vegetable.",
                        price: "৳ 1200",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Ambrosia Special Soup.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "chicken-beef": {
                name: "Chicken & Beef",
                items: [
                    {
                        id: 132,
                        name: "Chicken Cashew Nut (Kai Pad Med Mamuang)",
                        description: "Stir-fried sliced chicken with cashew nut, spring onion, dry chilli & thai spice",
                        price: "৳ 810",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Cashew Nut.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 133,
                        name: "Beef Oyster (Naam Mon Hoy)",
                        description: "Slice beef with oyster sauce, bell pepper, spring onion & mushroom",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Beef Oyster.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 134,
                        name: "Chicken Oyster (Kai Pad Naam Mon Hoy)",
                        description: "Slice chicken with oyster sauce, bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Oyster.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 135,
                        name: "Chicken Ginger (Kai Pad Khing)",
                        description: "Slice chicken fillet with ginger spring onion & green bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Ginger.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true,
                        chefPick: false
                    },
                    {
                        id: 136,
                        name: "Chicken Jelly Noodles (Kai Pad Woon Sen)",
                        description: "Sliced chicken fillet with Thai jelly noodle spring onion fresh tomato & vegetable",
                        price: "৳ 700",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Jelly Noodles.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 137,
                        name: "Beef Basil Leaf (Kai Pad/Naam Pad Bai Kraprao)",
                        description: "Slice beef with minced fresh garlic minced fresh chilli & thai spicy sauce",
                        price: "৳ 950",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Beef Basil Leaf.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 138,
                        name: "Chicken Basil Leaf (Kai Pad Bai Kraprao)",
                        description: "Slice chicken with minced fresh garlic minced fresh chilli & thai spicy sauce",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Basil Leaf.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 139,
                        name: "Beef Red Curry Gravy (Kai Pad/Naam Pad Ped)",
                        description: "Slice beef with red chilli paste, egg plant or long bean",
                        price: "৳ 880",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Beef Red Curry Gravy.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 140,
                        name: "Chicken Red Curry Gravy (Kai Pad Ped)",
                        description: "Slice chicken with red chilli paste, egg plant or long bean",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Red Curry Gravy.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 141,
                        name: "Chicken Soya Sauce (Kai Pad Se-Ew)",
                        description: "Sliced chicken with black soya sauce and thai spices",
                        price: "৳ 850",
                        category: ["thai", "chicken", "sauce"],
                        image: "./Assets/Images/Chicken Soya Sauce.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 142,
                        name: "Chicken Green Curry Gravy (Kai Pad Khiew wan)",
                        description: "Sliced chicken with green chilli paste & egg plant or long bean",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Green Curry Gravy.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 143,
                        name: "Grilled Chicken (Kai Yang)",
                        description: "Grilled chicken with thai herbs served with red chilli powder sauce",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Grilled Chicken.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 144,
                        name: "Beef Chilli Oil (Naam Pad Prik Pao)",
                        description: "Stir fried beef with chilli oil & thai spicy herbs with sweet & sour sauce or chilli powder sauce",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Beef Chilli Oil.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 145,
                        name: "Chicken Chilli Oil (Kai Pad Prik Pao)",
                        description: "Stir fried slice chicken with chilli oil & thai spicy herbs",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Chicken Chilli Oil.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 146,
                        name: "Fried Chicken (Kai tod)",
                        description: "Whole chicken with special thai ingredient served",
                        price: "৳ 800",
                        category: ["thai", "chicken", "noodles"],
                        image: "./Assets/Images/Fried Chicken.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 147,
                        name: "Panning Beef Curry (Panning Naam)",
                        description: "Sliced beef with panning curry, coconut milk, flavored with sweet basil leaf",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Panning Beef Curry.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 148,
                        name: "Beef Red Curry (Knapped Naam Said Normal)",
                        description: "Slice beef with green curry paste, coconut milk, egg plant",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Beef Red Curry.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 149,
                        name: "Beef Chilli (Naam Pad Prick Sod)",
                        description: "Sliced beef with green pepper, green chilli & thai spicy",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Beef Chilli.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "fish": {
                name: "Fish",
                items: [
                    {
                        id: 150,
                        name: "Cuttle Fish Gravy Garlic / Koral (Plamuk Tod Kratieam Prink Thai)",
                        description: "Cuttle fish/koral fillet with bell pepper, onion fresh & dry garlic",
                        price: "৳ 1050",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Cuttle Fish Gravy Garlic Koral.jpg",
                        spiceLevel: 3,
                        isVegetarian: true
                    },
                    {
                        id: 151,
                        name: "Pomfret Deep Fried (Pla Jaramed Tod Kratieam)",
                        description: "Whole deep fried pomfret with fried garlic, served with chilli lemon sauce/pineapple sauce/black mushroom & green peas",
                        price: "৳ 950",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Pomfret Deep Fried.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 152,
                        name: "Red Snapper Deep Fried (Pla Crapong Tod Kratieam)",
                        description: "Whole deep fried red snapper, served with garlic, chilli lemon sauce/pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Red Snapper Deep Fried.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 153,
                        name: "Pomfret Red Chilli Paste (Pla Jaramed Ladprik Kang)",
                        description: "Deep fried whole pomfret with red chilli paste, coconut milk & Thai herbs",
                        price: "৳ 960",
                        category: ["thai", "fish", "seafood", "spicy"],
                        image: "./Assets/Images/Pomfret Red Chilli Paste.jpg",
                        spiceLevel: 4,
                        isVegetarian: true
                    },
                    {
                        id: 154,
                        name: "Ambrosia Red Snapper (Ambrosia Pla Crapong)",
                        description: "Deep fried whole red snapper with chilli & pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Ambrosia Red Snapper.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm",
                        chefPick: true
                    },
                    {
                        id: 155,
                        name: "Special Red Snapper (Crapong Song Kraung)",
                        description: "Deep fried whole red snapper with minced chicken, bell pepper, black mushroom, green peas & thai herbs (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Special Red Snapper.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm",
                        chefPick: false
                    },
                    {
                        id: 156,
                        name: "Pla Pad Priew Wan / Goong Pad Priew",
                        description: "Stir-fried fish fillet or stir fried fresh prawn with cucumber, tomato. Bell pepper, pine apple, red chilli sauce",
                        price: "৳ 950",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Pla Pad Priew Wan Goong Pad Priew.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 157,
                        name: "Fish Ball Curry (Pad Ped Lukchin Pla)",
                        description: "Sea fish ball with red chilli paste, long. Bean or egg plant, or bamboo shoot & coconut milk",
                        price: "৳ 850",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Fish Ball Curry.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 158,
                        name: "Steamed Red Snapper (Pla Crapong Nung Anao)",
                        description: "Steamed whole red snapper with lemon & pineapple sauce /pickle sauce /chicken sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Steamed Red Snapper.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm",
                        chefPick: false
                    },
                    {
                        id: 159,
                        name: "Steamed Pomfret (Pla Jaramed Nung Manao)",
                        description: "Steamed whole pomfret with lemon & pineapple sauce/salted plum & sour plum/black soya sauce & thai herbs",
                        price: "৳ 960",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Steamed Pomfret.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 160,
                        name: "Mixed Thai Herbs Grilled Red Snapper (Crapong Pao Samonprai)",
                        description: "Grilled whole red snapper with mixed thai herbs served with yellow bean sauce & sea food sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Mixed Thai Herbs Grilled Red Snapper.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm",
                        chefPick: false
                    }
                ]
            },
            "prawn-crab": {
                name: "Prawn/King Prawn/Crab",
                items: [
                    {
                        id: 161,
                        name: "Prawn Red Chilli Oil / Crab Chilli Oil (Goong / Poo Pad Prik Pao)",
                        description: "Stir fried sea prawn or stir fried sea crab with chilli oil in Thai ingredient",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab", "spicy"],
                        image: "./Assets/Images/Prawn Red Chilli Oil Crab Chilli Oil.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 162,
                        name: "Prawn / Crab Red Chilli Paste (Goong / Poo Pad Prik Kang)",
                        description: "Stir fried sea prawn or sea crab with Thai spicy red chilli paste, long bean & Thai herbs",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab", "spicy"],
                        image: "./Assets/Images/Prawn Crab Red Chilli Paste.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 163,
                        name: "Prawn / Crab Curry Powder (Goongiplamuk / Poo Pad Pond Kari)",
                        description: "Stir fried fresh sea prawn or stir fried sea crabs with spring onion, egg yellow kari powder",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab"],
                        image: "./Assets/Images/Prawn Crab Curry Powder.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 164,
                        name: "Prawn Basil Leaf / Cuttle Fish Basil Leaf (Goong / Plamuk Pad Bai Kaprao)",
                        description: "Fresh sea prawn or slice cuttle fish with minced fresh garlic, minced fresh green chilli, long bean & basil leaf",
                        price: "৳ 980",
                        category: ["thai", "seafood", "prawn", "spicy"],
                        image: "./Assets/Images/Prawn Basil Leaf Cuttle Fish Basil Leaf.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 165,
                        name: "Prawn Cashew Nut (Goong Pad Med Mamuang)",
                        description: "Stir-fried golden sea prawn with spring onion, dry red chilli & Thai herbs",
                        price: "৳ 980",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Prawn Cashew Nut.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 166,
                        name: "Prawn / Cuttle Fish Vegetable (Goong / Plamuk Pad Pak Ruam )",
                        description: "Fresh sea prawn or fresh slice cuttle fish fillet with mixed vegetable in thai ingredient",
                        price: "৳ 780",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Prawn Cuttle Fish Vegetable.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        chefPick: false
                    },
                    {
                        id: 167,
                        name: "Prawn Oyster / Prawn Ginger (Goong Pad Monhoy)",
                        description: "Golden prawn with bell pepper. Oyster sauce and chinese cabbage ginger",
                        price: "৳ 950",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Prawn Oyster Prawn Ginger.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: false
                    },
                    {
                        id: 168,
                        name: "King Prawn Garlic Black Pepper (Goong Yai Maenam Tod Kratieam Priktai Dam)",
                        description: "Stir-fried meat king prawn cooking into king prawn shell with black pepper & fresh garlic",
                        price: "৳ 1350",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/King Prawn Garlic Black Pepper.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        quantity: "4 Pcs",
                        chefPick: true
                    },
                    {
                        id: 169,
                        name: "Grilled King Prawn (Goong Yai Maenam Pao)",
                        description: "Fresh sweet king prawn grilled with special home made sauce served with spicy seafood sauce",
                        price: "৳ 1350",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Grilled King Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        quantity: "4 Pcs",
                        chefPick: true
                    },
                    {
                        id: 170,
                        name: "Ambrosia Grilled King Prawn (Goong Yai-Maenam Pao Laad-Sos Song Kraung)",
                        description: "Fresh sweet king prawn with special thai, sauce cooking in minced green peas, black mushroom carrot & thai herbs",
                        price: "৳ 1350",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Ambrosia Grilled King Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        quantity: "4 Pcs",
                        chefPick: false
                    },
                    {
                        id: 171,
                        name: "King Prawn Red Curry (Goong Yiai Maenam Laad Prik Kang)",
                        description: "Stir-fried sweet king prawn with thai red chilli paste, coconut milk sweet basil",
                        price: "৳ 1350",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/King Prawn Red Curry.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        quantity: "4 Pcs",
                        chefPick: true
                    },
                    {
                        id: 172,
                        name: "Cuttle Fish Curry (Plamuek Pad Normai)",
                        description: "Sliced fresh cuttle fish with bamboo shoot in thai ingredient",
                        price: "৳ 980",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Cuttle Fish Curry.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 173,
                        name: "Crab Deep Fried / Curry (Poo Pad Kratieam / Powd Kari)",
                        description: "Deep fried sea fresh crabs with minced fresh garlic, spring onion & egg",
                        price: "৳ 800",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Crab Deep Fried Curry.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "lobster": {
                name: "Lobster & Tiger Prawn",
                items: [
                    {
                        id: 174,
                        name: "Grilled Sea Lobster (Mong Korn Pao)",
                        description: "Fresh sea lobster grilled with Thai spicy served with sea food spicy sauce (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Grilled Sea Lobster.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 175,
                        name: "Lobster Gravy Garlic (Mong Korn Tod Kratieam)",
                        description: "Stir fried lobster with minced fresh garlic spring onion & bell pepper (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Lobster Gravy Garlic.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 176,
                        name: "Ambrosia Lobster (Mong Korn Song Kraung)",
                        description: "Stir fried fresh sea lobster with minced chicken, black mushroom and green peas (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Ambrosia Lobster.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 177,
                        name: "Lobster Chilli Paste (Mong Korn Lard Prik Kang)",
                        description: "Stir fried lobster with Thai red chilli paste & coconut sauce (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood", "spicy"],
                        image: "./Assets/Images/Lobster Chilli Paste.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 178,
                        name: "Steamed Lobster (Mong Korn Nung)",
                        description: "Lobster steamed with red chilli, coconut milk, sweet basil leaf (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Steamed Lobster.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 179,
                        name: "Grilled Tiger Prawn (Malai Pao)",
                        description: "Grilled whole sea black tiger prawn in thai style served with spicy sea food sauce (per 100 gm)",
                        price: "৳ 750",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Grilled Tiger Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 180,
                        name: "Garlic Tiger Prawn (Malai Tod Kratieam)",
                        description: "Stir fried black tiger prawn with fresh garlic, spring onion & white pepper (per 100 gm)",
                        price: "৳ 750",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 181,
                        name: "Steamed Lobster",
                        description: "Lobster steamed with red chilli, coconut milk, sweet basil leaf (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 182,
                        name: "Steamed Lobster",
                        description: "Lobster steamed with red chilli, coconut milk, sweet basil leaf (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    }
                ]
            },
            "sizzling": {
                name: "Sizzling",
                items: [
                    {
                        id: 183,
                        name: "Mixed Seafood Spicy Hot Pan",
                        description: "Combination of stir-fried fresh sea prawn, cuttle fish, crab & stir fried fish with hot chilli sauce, bamboo shoot & mushroom",
                        price: "৳ 1030",
                        category: ["thai", "sizzling", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 184,
                        name: "King Prawn Hot Sizzling - 4 Pcs",
                        description: "Grilled sweet king prawn with red chilli paste, coconut milk, black mushroom & bell pepper served in hot pan",
                        price: "৳ 1730",
                        category: ["thai", "sizzling", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        quantity: "4 Pcs"
                    },
                    {
                        id: 185,
                        name: "Red Snapper Fillet Hot Pan",
                        description: "Stir-fried fish fillet of red snapper with red chilli paste, coconut milk & sweet basil served in hot pan",
                        price: "৳ 1030",
                        category: ["thai", "sizzling", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 186,
                        name: "Beef Fillet Hot Sizzling",
                        description: "Stir grilled beef fillet with spicy chilli sauce, pickle cucumber pickle carrot, long bean, green pepper",
                        price: "৳ 880",
                        category: ["thai", "sizzling", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 187,
                        name: "Chicken Fillet Spicy Sizzling",
                        description: "Stir grilled chicken fillet with hot chilli paste, pickle cucumber, pickle carrot, long bean, mushroom served in hot pan",
                        price: "৳ 850",
                        category: ["thai", "sizzling", "chicken", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 188,
                        name: "Chicken Fillet Spicy Sizzling",
                        description: "Stir grilled chicken fillet with hot chilli paste, pickle cucumber, pickle carrot, long bean, mushroom served in hot pan",
                        price: "৳ 850",
                        category: ["thai", "sizzling", "chicken", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    }
                ]
            },
            "rice": {
                name: "Rice",
                items: [
                    {
                        id: 189,
                        name: "Prawn/Chicken/Beef/Cuttle Fish/Mixed Sea Food Basil Leaf Fried Rice",
                        description: "Stir fried prawn /chicken / beef / cuttle fish and mixed sea food fried rice with spicy Thai ingredient & hot basil leaf",
                        price: "৳ 980",
                        category: ["thai", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 190,
                        name: "Butter Pineapple Fried Rice",
                        description: "Sweet pineapple, green peas, carrot. garlic served with fresh pineapple dish",
                        price: "৳ 700",
                        category: ["thai", "rice", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 191,
                        name: "Prawn Chicken/Beef/Egg Fried Rice",
                        description: "Classic fried rice with prawn, chicken, beef or egg",
                        price: "৳ 650",
                        category: ["thai", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "noodles": {
                name: "Noodles",
                items: [
                    {
                        id: 192,
                        name: "Prawn/Chicken/Beef/Mixed Thai Rice Noodles",
                        description: "Stir fried prawn or chicken or beef or mixed with Thai rice noodles in Thai spicy sauce",
                        price: "৳ 800",
                        category: ["thai", "noodles"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 193,
                        name: "Spicy Thai Rice Noodles/Jelly Noodles",
                        description: "Stir fried prawn, chicken, beef with rice noodles or Thai jelly noodles in Thai spicy sauce & mixed vegetable",
                        price: "৳ 750",
                        category: ["thai", "noodles", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 194,
                        name: "Mixed Sea Food Gravy Noodles",
                        description: "Thai rice noodles with mixed sea food vegetable, mushroom in Thai herbs",
                        price: "৳ 870",
                        category: ["thai", "noodles", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 195,
                        name: "Chicken/Beef/Prawn Gravy Noodles",
                        description: "Thai rice noodles with chicken/beef/prawn & vegetable",
                        price: "৳ 870",
                        category: ["thai", "noodles"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 196,
                        name: "Black Soya Noodles",
                        description: "Fried Thai rice noodles with black soya sauce, vegetable & stir fried prawn / stir fried chicken stir fried beef",
                        price: "৳ 750",
                        category: ["thai", "noodles"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "duck": {
                name: "Duck",
                items: [
                    {
                        id: 197,
                        name: "Roast Duck Curry",
                        description: "Roast Chinese duck with red chilli paste, bamboo shoot, long bean & sweet basil",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 198,
                        name: "Roast Duck Red Curry",
                        description: "Roast duck cooking with red chilli curry coconut milk pineapple & bamboo shoot",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 199,
                        name: "Roast Duck Gravy",
                        description: "Roast of Chinese duck with Chinese herbs green peas, black & white mushroom",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 200,
                        name: "Duck Basil Leaf",
                        description: "Fresh duck fillet with hot spicy hot basil, minced fresh garlic, chilli, long bean",
                        price: "৳ 1500",
                        category: ["thai", "duck", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    }
                ]
            },
            "vegetables": {
                name: "Vegetables",
                items: [
                    {
                        id: 201,
                        name: "Green Vegetable/Mixed Vegetable",
                        description: "Green vegetable or seasonal vegetable with mushroom and baby corn",
                        price: "৳ 590",
                        category: ["thai", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 202,
                        name: "Morning Glory (Kangkoon)",
                        description: "Stir-fried morning glory with garlic and soy sauce",
                        price: "৳ 300",
                        category: ["thai", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "ambrosia-special": {
                name: "Ambrosia Special",
                items: [
                    {
                        id: 203,
                        name: "Ambrosia Hot Pot",
                        description: "Mixed sea food, chicken, meat, vegetable & special sauce (cooked on the table) 4 persons",
                        price: "৳ 2800",
                        category: ["thai", "ambrosia-special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true,
                        quantity: "4 Persons"
                    }
                ]
            }
        }
    },

    // Chinese Cuisine
    "chinese": {
        name: "Chinese Cuisine",
        description: "Traditional Chinese dishes with modern presentation",
        subCategories: {
            "appetizers": {
                name: "Appetizers",
                items: [
                    {
                        id: 301,
                        name: "Peking Duck",
                        description: "Crispy roast duck served with pancakes, spring onions, and hoisin sauce",
                        price: "৳ 2200",
                        category: ["chinese", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 302,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 303,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 304,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 305,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 306,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 307,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 308,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 309,
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
                        price: "৳ 950",
                        category: ["chinese", "spicy", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "soup": {
                name: "Soup",
                items: [
                    {
                        id: 310,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 311,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 312,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 313,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 314,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 315,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 316,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 317,
                        name: "Hot & Sour Soup",
                        description: "Traditional Chinese hot and sour soup",
                        price: "৳ 550",
                        category: ["chinese", "soup", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "salad": {
                name: "Salad",
                items: [
                    {
                        id: 318,
                        name: "Chinese Chicken Salad",
                        description: "Crispy chicken with fresh vegetables and sesame dressing",
                        price: "৳ 650",
                        category: ["chinese", "salad", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 319,
                        name: "Chinese Chicken Salad",
                        description: "Crispy chicken with fresh vegetables and sesame dressing",
                        price: "৳ 650",
                        category: ["chinese", "salad", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "prawn": {
                name: "Prawn",
                items: [
                    {
                        id: 320,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 321,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 322,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 323,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 324,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 325,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 326,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 327,
                        name: "Sweet and Sour Prawn",
                        description: "Crispy prawns in sweet and sour sauce with bell peppers and pineapple",
                        price: "৳ 980",
                        category: ["chinese", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "fish": {
                name: "Fish",
                items: [
                    {
                        id: 328,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 329,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 330,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 331,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 332,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 333,
                        name: "Steamed Fish with Ginger",
                        description: "Fresh fish steamed with ginger and spring onions",
                        price: "৳ 1200",
                        category: ["chinese", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    }
                ]
            },
            "chicken": {
                name: "Chicken",
                items: [
                    {
                        id: 334,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 335,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 336,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 337,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 338,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 339,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 340,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 341,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 342,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 343,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 344,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 345,
                        name: "Lemon Chicken",
                        description: "Crispy chicken with tangy lemon sauce",
                        price: "৳ 850",
                        category: ["chinese", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    }
                ]
            },
            "beef": {
                name: "Beef",
                items: [
                    {
                        id: 346,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 347,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 348,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 349,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 350,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 351,
                        name: "Black Pepper Beef",
                        description: "Stir-fried beef with black pepper sauce and vegetables",
                        price: "৳ 950",
                        category: ["chinese", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "vegetables": {
                name: "Vegetables",
                items: [
                    {
                        id: 352,
                        name: "Stir-fried Mixed Vegetables",
                        description: "Assorted vegetables stir-fried in light sauce",
                        price: "৳ 450",
                        category: ["chinese", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 353,
                        name: "Stir-fried Mixed Vegetables",
                        description: "Assorted vegetables stir-fried in light sauce",
                        price: "৳ 450",
                        category: ["chinese", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 354,
                        name: "Stir-fried Mixed Vegetables",
                        description: "Assorted vegetables stir-fried in light sauce",
                        price: "৳ 450",
                        category: ["chinese", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 355,
                        name: "Stir-fried Mixed Vegetables",
                        description: "Assorted vegetables stir-fried in light sauce",
                        price: "৳ 450",
                        category: ["chinese", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "sizzling": {
                name: "Sizzling",
                items: [
                    {
                        id: 356,
                        name: "Sizzling Chicken with Black Bean Sauce",
                        description: "Chicken cooked in black bean sauce served on a hot plate",
                        price: "৳ 880",
                        category: ["chinese", "sizzling", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 357,
                        name: "Sizzling Chicken with Black Bean Sauce",
                        description: "Chicken cooked in black bean sauce served on a hot plate",
                        price: "৳ 880",
                        category: ["chinese", "sizzling", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 358,
                        name: "Sizzling Chicken with Black Bean Sauce",
                        description: "Chicken cooked in black bean sauce served on a hot plate",
                        price: "৳ 880",
                        category: ["chinese", "sizzling", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 359,
                        name: "Sizzling Chicken with Black Bean Sauce",
                        description: "Chicken cooked in black bean sauce served on a hot plate",
                        price: "৳ 880",
                        category: ["chinese", "sizzling", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 360,
                        name: "Sizzling Chicken with Black Bean Sauce",
                        description: "Chicken cooked in black bean sauce served on a hot plate",
                        price: "৳ 880",
                        category: ["chinese", "sizzling", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "duck-crab": {
                name: "Duck/Crab",
                items: [
                    {
                        id: 361,
                        name: "Chili Crab",
                        description: "Fresh crab cooked in spicy chili sauce",
                        price: "৳ 1800",
                        category: ["chinese", "crab", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 362,
                        name: "Chili Crab",
                        description: "Fresh crab cooked in spicy chili sauce",
                        price: "৳ 1800",
                        category: ["chinese", "crab", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 363,
                        name: "Chili Crab",
                        description: "Fresh crab cooked in spicy chili sauce",
                        price: "৳ 1800",
                        category: ["chinese", "crab", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 364,
                        name: "Chili Crab",
                        description: "Fresh crab cooked in spicy chili sauce",
                        price: "৳ 1800",
                        category: ["chinese", "crab", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    }
                ]
            },
            "rice-noodles": {
                name: "Rice, Noodles & Chopsuey",
                items: [
                    {
                        id: 365,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 366,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 367,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 368,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 369,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 370,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 371,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 372,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 373,
                        name: "Yangzhou Fried Rice",
                        description: "Classic Chinese fried rice with mixed ingredients",
                        price: "৳ 650",
                        category: ["chinese", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    }
                ]
            }
        }
    },

    // Indonesian Cuisine
    "indonesian": {
        name: "Indonesian Cuisine",
        description: "Exotic Indonesian flavors and spices",
        subCategories: {
            "chicken-prawn": {
                name: "Chicken/Prawn/Fish/Vegetable",
                items: [
                    {
                        id: 374,
                        name: "Ayam Goreng (Fried Chicken)",
                        description: "Indonesian style fried chicken with spices",
                        price: "৳ 750",
                        category: ["indonesian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "soup": {
                name: "Chicken Soup",
                items: [
                    {
                        id: 375,
                        name: "Soto Ayam",
                        description: "Traditional Indonesian chicken soup",
                        price: "৳ 550",
                        category: ["indonesian", "soup", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "fried-rice": {
                name: "Fried Rice",
                items: [
                    {
                        id: 376,
                        name: "Nasi Goreng",
                        description: "Indonesian fried rice with chicken and prawn crackers",
                        price: "৳ 650",
                        category: ["indonesian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "spicy-rice": {
                name: "Spicy Rice",
                items: [
                    {
                        id: 377,
                        name: "Nasi Padang",
                        description: "Spicy rice with various side dishes",
                        price: "৳ 850",
                        category: ["indonesian", "rice", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    }
                ]
            }
        }
    },

    // Indian Cuisine
    "indian": {
        name: "Indian Cuisine",
        description: "Rich and aromatic Indian cuisine with traditional spices",
        subCategories: {
            "appetizers": {
                name: "Appetizers",
                items: [
                    {
                        id: 501,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    },
                    {
                        id: 502,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    },
                    {
                        id: 503,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    },
                    {
                        id: 504,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    },
                    {
                        id: 505,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    },
                    {
                        id: 506,
                        name: "Vegetable Samosa",
                        description: "Crispy pastry filled with spiced potatoes and peas",
                        price: "৳ 250",
                        category: ["indian", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true,
                        quantity: "2 Pcs"
                    }
                ]
            },
            "salad-raita": {
                name: "Salad/Raita",
                items: [
                    {
                        id: 507,
                        name: "Cucumber Raita",
                        description: "Yogurt with cucumber and mint",
                        price: "৳ 180",
                        category: ["indian", "raita", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 508,
                        name: "Cucumber Raita",
                        description: "Yogurt with cucumber and mint",
                        price: "৳ 180",
                        category: ["indian", "raita", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 509,
                        name: "Cucumber Raita",
                        description: "Yogurt with cucumber and mint",
                        price: "৳ 180",
                        category: ["indian", "raita", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 510,
                        name: "Cucumber Raita",
                        description: "Yogurt with cucumber and mint",
                        price: "৳ 180",
                        category: ["indian", "raita", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 511,
                        name: "Cucumber Raita",
                        description: "Yogurt with cucumber and mint",
                        price: "৳ 180",
                        category: ["indian", "raita", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "tandoori-fish": {
                name: "Tandoori & Fish",
                items: [
                    {
                        id: 512,
                        name: "Tandoori Chicken",
                        description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                        price: "৳ 850",
                        category: ["indian", "tandoori", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 513,
                        name: "Tandoori Chicken",
                        description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                        price: "৳ 850",
                        category: ["indian", "tandoori", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 514,
                        name: "Tandoori Chicken",
                        description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                        price: "৳ 850",
                        category: ["indian", "tandoori", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 515,
                        name: "Tandoori Chicken",
                        description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                        price: "৳ 850",
                        category: ["indian", "tandoori", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 516,
                        name: "Tandoori Chicken",
                        description: "Chicken marinated in yogurt and spices, cooked in tandoor",
                        price: "৳ 850",
                        category: ["indian", "tandoori", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "prawn": {
                name: "Prawn",
                items: [
                    {
                        id: 517,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 518,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 519,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 520,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 521,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 522,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 523,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 524,
                        name: "Prawn Masala",
                        description: "Prawns cooked in rich Indian gravy",
                        price: "৳ 1050",
                        category: ["indian", "prawn", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "chicken": {
                name: "Chicken",
                items: [
                    {
                        id: 525,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 526,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 527,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 528,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 529,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 530,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 531,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 532,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 533,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 534,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 535,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 536,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 537,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 538,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 539,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 540,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 541,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 542,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 543,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "mutton": {
                name: "Mutton",
                items: [
                    {
                        id: 544,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 545,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 546,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 547,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 548,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 549,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 550,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 551,
                        name: "Mutton Rogan Josh",
                        description: "Traditional Kashmiri mutton curry",
                        price: "৳ 950",
                        category: ["indian", "mutton"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "beef": {
                name: "Beef",
                items: [
                    {
                        id: 552,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 553,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 554,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 555,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 556,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 557,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 558,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 559,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 560,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 561,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 562,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 563,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 564,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 565,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 566,
                        name: "Beef Vindaloo",
                        description: "Spicy Goan beef curry",
                        price: "৳ 880",
                        category: ["indian", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    }
                ]
            },
            "vegetables": {
                name: "Vegetables",
                items: [
                    {
                        id: 567,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 568,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 569,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 570,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 571,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 572,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 573,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 574,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 575,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 576,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 577,
                        name: "Palak Paneer",
                        description: "Cottage cheese in spinach gravy",
                        price: "৳ 550",
                        category: ["indian", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    }
                ]
            },
            "gravy-fish": {
                name: "Gravy/Fish",
                items: [
                    {
                        id: 578,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 579,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 580,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 581,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 582,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 584,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 585,
                        name: "Fish Curry",
                        description: "Fish cooked in traditional Indian spices",
                        price: "৳ 750",
                        category: ["indian", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            },
            "dal": {
                name: "Dal",
                items: [
                    {
                        id: 586,
                        name: "Dal Makhani",
                        description: "Black lentils cooked with butter and cream",
                        price: "৳ 450",
                        category: ["indian", "dal", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 587,
                        name: "Dal Makhani",
                        description: "Black lentils cooked with butter and cream",
                        price: "৳ 450",
                        category: ["indian", "dal", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 588,
                        name: "Dal Makhani",
                        description: "Black lentils cooked with butter and cream",
                        price: "৳ 450",
                        category: ["indian", "dal", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 589,
                        name: "Dal Makhani",
                        description: "Black lentils cooked with butter and cream",
                        price: "৳ 450",
                        category: ["indian", "dal", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 590,
                        name: "Dal Makhani",
                        description: "Black lentils cooked with butter and cream",
                        price: "৳ 450",
                        category: ["indian", "dal", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: true
                    }
                ]
            },
            "nan-parata": {
                name: "Nan/Parata",
                items: [
                    {
                        id: 591,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 592,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 593,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 594,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 595,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 596,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 597,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 598,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 599,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 600,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 601,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 602,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 603,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 604,
                        name: "Garlic Naan",
                        description: "Leavened bread with garlic butter",
                        price: "৳ 80",
                        category: ["indian", "bread", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "aromatic-rice": {
                name: "Aromatic Rice",
                items: [
                    {
                        id: 605,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 606,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 607,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 608,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 609,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 610,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 611,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 612,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 613,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 614,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 615,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 616,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 617,
                        name: "Biryani",
                        description: "Fragrant rice dish with spices and meat",
                        price: "৳ 650",
                        category: ["indian", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            }
        }
    },

    // Continental Cuisine
    "continental": {
        name: "Continental Cuisine",
        description: "European-inspired dishes with premium ingredients",
        subCategories: {
            "appetizers": {
                name: "Appetizers (Hot & Cold)",
                items: [
                    {
                        id: 701,
                        name: "Bruschetta",
                        description: "Toasted bread with tomatoes, garlic, and basil",
                        price: "৳ 450",
                        category: ["continental", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 702,
                        name: "Bruschetta",
                        description: "Toasted bread with tomatoes, garlic, and basil",
                        price: "৳ 450",
                        category: ["continental", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 703,
                        name: "Bruschetta",
                        description: "Toasted bread with tomatoes, garlic, and basil",
                        price: "৳ 450",
                        category: ["continental", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 704,
                        name: "Bruschetta",
                        description: "Toasted bread with tomatoes, garlic, and basil",
                        price: "৳ 450",
                        category: ["continental", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 705,
                        name: "Bruschetta",
                        description: "Toasted bread with tomatoes, garlic, and basil",
                        price: "৳ 450",
                        category: ["continental", "appetizers", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "soup": {
                name: "Soup",
                items: [
                    {
                        id: 706,
                        name: "Cream of Mushroom",
                        description: "Creamy mushroom soup with herbs",
                        price: "৳ 380",
                        category: ["continental", "soup", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 707,
                        name: "Cream of Mushroom",
                        description: "Creamy mushroom soup with herbs",
                        price: "৳ 380",
                        category: ["continental", "soup", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 708,
                        name: "Cream of Mushroom",
                        description: "Creamy mushroom soup with herbs",
                        price: "৳ 380",
                        category: ["continental", "soup", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 709,
                        name: "Cream of Mushroom",
                        description: "Creamy mushroom soup with herbs",
                        price: "৳ 380",
                        category: ["continental", "soup", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 710,
                        name: "Cream of Mushroom",
                        description: "Creamy mushroom soup with herbs",
                        price: "৳ 380",
                        category: ["continental", "soup", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            },
            "salad": {
                name: "Salad Bar",
                items: [
                    {
                        id: 711,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 712,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 713,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 714,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 715,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 716,
                        name: "Caesar Salad",
                        description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
                        price: "৳ 550",
                        category: ["continental", "salad"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    }
                ]
            },
            "spaghetti": {
                name: "Spaghetti",
                items: [
                    {
                        id: 717,
                        name: "Spaghetti Carbonara",
                        description: "Pasta with eggs, cheese, pancetta, and black pepper",
                        price: "৳ 750",
                        category: ["continental", "spaghetti"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 718,
                        name: "Spaghetti Carbonara",
                        description: "Pasta with eggs, cheese, pancetta, and black pepper",
                        price: "৳ 750",
                        category: ["continental", "spaghetti"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 719,
                        name: "Spaghetti Carbonara",
                        description: "Pasta with eggs, cheese, pancetta, and black pepper",
                        price: "৳ 750",
                        category: ["continental", "spaghetti"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 720,
                        name: "Spaghetti Carbonara",
                        description: "Pasta with eggs, cheese, pancetta, and black pepper",
                        price: "৳ 750",
                        category: ["continental", "spaghetti"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "fish-prawn-lobster": {
                name: "Fish/Prawn/Lobster",
                items: [
                    {
                        id: 721,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 722,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 723,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 724,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 725,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 726,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 727,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 728,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 729,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 730,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 731,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 732,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 733,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 734,
                        name: "Grilled Lobster",
                        description: "Fresh lobster grilled with butter and herbs",
                        price: "৳ 2200",
                        category: ["continental", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "chicken": {
                name: "Chicken",
                items: [
                    {
                        id: 735,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 736,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 737,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 738,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 739,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    },
                    {
                        id: 740,
                        name: "Chicken Cordon Bleu",
                        description: "Breaded chicken breast filled with ham and cheese",
                        price: "৳ 950",
                        category: ["continental", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: false
                    }
                ]
            },
            "lamb": {
                name: "Lamb",
                items: [
                    {
                        id: 741,
                        name: "Roast Lamb",
                        description: "Tender lamb roast with rosemary and garlic",
                        price: "৳ 1250",
                        category: ["continental", "lamb"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 742,
                        name: "Roast Lamb",
                        description: "Tender lamb roast with rosemary and garlic",
                        price: "৳ 1250",
                        category: ["continental", "lamb"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 743,
                        name: "Roast Lamb",
                        description: "Tender lamb roast with rosemary and garlic",
                        price: "৳ 1250",
                        category: ["continental", "lamb"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    }
                ]
            },
            "steak": {
                name: "Steak",
                items: [
                    {
                        id: 744,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 745,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 746,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 747,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 748,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 749,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 750,
                        name: "Beef Steak",
                        description: "Premium beef steak with pepper sauce",
                        price: "৳ 1650",
                        category: ["continental", "steak", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "pizza": {
                name: "Pizza",
                items: [
                    {
                        id: 751,
                        name: "Margherita Pizza",
                        description: "Classic pizza with tomato, mozzarella, and basil",
                        price: "৳ 650",
                        category: ["continental", "pizza", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 752,
                        name: "Margherita Pizza",
                        description: "Classic pizza with tomato, mozzarella, and basil",
                        price: "৳ 650",
                        category: ["continental", "pizza", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 753,
                        name: "Margherita Pizza",
                        description: "Classic pizza with tomato, mozzarella, and basil",
                        price: "৳ 650",
                        category: ["continental", "pizza", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    }
                ]
            }
        }
    },

    // Desserts & Beverage
    "desserts": {
        name: "Dessert & Beverage",
        description: "Sweet endings and refreshing drinks",
        subCategories: {
            "dessert-cottage": {
                name: "Ambrosia Dessert Cottage",
                items: [
                    {
                        id: 801,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 802,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 803,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 804,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 805,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 806,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 807,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 808,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 809,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 810,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 811,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 812,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 813,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 814,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    }
                ]
            },
            "cold-beverage": {
                name: "Cold Beverage",
                items: [
                    {
                        id: 815,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 816,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 817,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 818,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 819,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 820,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 821,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 822,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 823,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 824,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 825,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 826,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 827,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 828,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true,
                        chefPick: true
                    }
                ]
            },
            "hot-beverage": {
                name: "Hot Beverage",
                items: [
                    {
                        id: 829,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 830,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 831,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 832,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 833,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    },
                    {
                        id: 834,
                        name: "Cappuccino",
                        description: "Espresso with steamed milk foam",
                        price: "৳ 250",
                        category: ["drinks", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 2,
                        isVegetarian: true
                    }
                ]
            },
            "special-order": {
                name: "Ambrosia Special Order",
                items: [
                    {
                        id: 835,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 836,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 837,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 838,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 839,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 840,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    },
                    {
                        id: 841,
                        name: "Chef's Special Dessert Platter",
                        description: "Assortment of our signature desserts",
                        price: "৳ 850",
                        category: ["desserts", "special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        sweetLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    }
                ]
            }
        }
    },

    // Take Away
    "takeaway": {
        name: "Take Away Specials",
        description: "Perfect for home dining and office lunches",
        subCategories: {
            "lunch-boxes": {
                name: "Lunch Boxes",
                items: [
                    {
                        id: 901,
                        name: "B01. EGG FRIED RICE",
                        description: "Chicken Masala - 2 pcs, Pomfret Fry - 1 pcs, Chinese Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 902,
                        name: "B02. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Prawn/Fish Masala, Chinese Vegetable",
                        price: "৳ 575",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 903,
                        name: "B03. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Beef/Chicken Chilli, Prawn Masala, Chinese Vegetable",
                        price: "৳ 650",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 904,
                        name: "B04. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Mutton Rezala - 1 pcs, Mixed Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 905,
                        name: "B05. EGG FRIED RICE",
                        description: "Chicken Masala - 2 pcs, Fried Prawn - 1 pcs, Mixed Vegetable",
                        price: "৳ 450",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 906,
                        name: "B01. EGG FRIED RICE",
                        description: "Chicken Masala - 2 pcs, Pomfret Fry - 1 pcs, Chinese Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 907,
                        name: "B02. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Prawn/Fish Masala, Chinese Vegetable",
                        price: "৳ 575",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 908,
                        name: "B03. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Beef/Chicken Chilli, Prawn Masala, Chinese Vegetable",
                        price: "৳ 650",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 909,
                        name: "B04. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Mutton Rezala - 1 pcs, Mixed Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 910,
                        name: "B05. EGG FRIED RICE",
                        description: "Chicken Masala - 2 pcs, Fried Prawn - 1 pcs, Mixed Vegetable",
                        price: "৳ 450",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    }
                ]
            }
        }
    },

    // Ambrosia Special
    "special": {
        name: "Ambrosia Special",
        description: "Custom packages for events and celebrations",
        subCategories: {
            "banquet-menu": {
                name: "Special Banquet Menu",
                items: [
                    {
                        id: 1001,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1002,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1003,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1004,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1005,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1006,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1007,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1008,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1009,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1010,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 1011,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            },
            "tobacco": {
                name: "Tobacco",
                items: [
                    {
                        id: 1101,
                        name: "Premium Cigars",
                        description: "Selection of fine cigars",
                        price: "৳ 1500",
                        category: ["special", "tobacco"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 1102,
                        name: "Premium Cigars",
                        description: "Selection of fine cigars",
                        price: "৳ 1500",
                        category: ["special", "tobacco"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 1103,
                        name: "Premium Cigars",
                        description: "Selection of fine cigars",
                        price: "৳ 1500",
                        category: ["special", "tobacco"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 1104,
                        name: "Premium Cigars",
                        description: "Selection of fine cigars",
                        price: "৳ 1500",
                        category: ["special", "tobacco"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    }
                ]
            }
        }
    }
};



// Global variables
let wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];
let currentCategory = 'all';
let currentSubCategory = null;
let observer = null;
let scrollSpyTimeout = null; // Debounce timer for scroll spy

$(document).ready(function () {
    console.log("Document ready, initializing menu...");

    // First, generate sidebar
    generateSidebar();

    // Then load menu content
    loadMenuWithSubCategories();

    // Initialize sliders
    initSliders();

    // Initialize other components
    initWishlist();
    initCategoryNavigation();
    initSidebarNavigation();
    
    // Initialize scroll spy for sidebar auto-scroll
    initScrollSpy();

    // Search functionality
    $('#menu-page-search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        filterMenuItems(searchTerm);
    });

    // Mobile sidebar toggle
    $('.sidebar-toggle').click(function() {
        $('.menu-sidebar').toggleClass('active');
        $('.sidebar-backdrop').toggleClass('active');
        
        // When sidebar opens, scroll to active item
        if ($('.menu-sidebar').hasClass('active')) {
            setTimeout(scrollSidebarToActive, 300);
        }
    });

    $('.sidebar-backdrop').click(function() {
        $('.menu-sidebar').removeClass('active');
        $(this).removeClass('active');
    });

    // Update wishlist count
    updateWishlistCount();

    // Window resize event for responsive sliders
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initSliders();
        }, 250);
    });
});

// Load menu items with sub-categories and sliders
function loadMenuWithSubCategories() {
    console.log("Loading menu content...");
    const menuContent = $('#menu-content');
    menuContent.empty();

    Object.keys(ambrosiaMenuItems).forEach(category => {
        const categoryData = ambrosiaMenuItems[category];
        const subCategories = categoryData.subCategories;

        console.log(`Loading category: ${category}`);

        let sectionHTML = `
            <section id="${category}" class="menu-section">
                <div class="container">
                    <div class="category-badge">
                        <h2 class="category-title">
                            <i class="fas ${getCategoryIcon(category)} me-3"></i>${categoryData.name}
                        </h2>
                        <p class="mb-0">${categoryData.description}</p>
                    </div>
        `;

        // Add sub-categories
        Object.keys(subCategories).forEach(subCatKey => {
            const subCategory = subCategories[subCatKey];

            sectionHTML += `
                <div class="sub-category-wrapper" id="${category}-${subCatKey}">
                    <h3 class="sub-category-title">
                        <i class="fas fa-utensils me-2"></i>${subCategory.name}
                    </h3>
                    
                    <div class="sub-category-slider">
                        <button class="slider-nav prev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="slider-track" data-category="${category}" data-subcategory="${subCatKey}">
                            <!-- Items will be loaded here -->
                        </div>
                        
                        <button class="slider-nav next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        sectionHTML += `
                </div>
            </section>
        `;

        menuContent.append(sectionHTML);

        // Load items for each sub-category
        Object.keys(subCategories).forEach(subCatKey => {
            const subCategory = subCategories[subCatKey];
            const sliderTrack = $(`.slider-track[data-category="${category}"][data-subcategory="${subCatKey}"]`);

            console.log(`Loading ${subCategory.items.length} items for ${subCatKey}`);

            subCategory.items.forEach(item => {
                const itemHTML = createMenuItemHTML(item);
                sliderTrack.append(itemHTML);
            });
        });
    });

    // Update wishlist icons after loading
    updateWishlistIcons();
}

// Generate sidebar with SUB-CATEGORIES
function generateSidebar() {
    console.log("Generating sidebar with sub-categories...");
    let sidebarHTML = '';

    Object.keys(ambrosiaMenuItems).forEach(category => {
        const categoryData = ambrosiaMenuItems[category];
        const subCategories = categoryData.subCategories;

        // Add main category header
        sidebarHTML += `
            <div class="sidebar-main-category">
                <h4 class="mb-3 sidebar-category-title">
                    <i class="fas ${getCategoryIcon(category)} me-2"></i>${categoryData.name}
                </h4>
        `;

        // Add sub-categories
        Object.keys(subCategories).forEach(subCatKey => {
            const subCategory = subCategories[subCatKey];
            const sectionId = `${category}-${subCatKey}`;
            
            sidebarHTML += `
                <a href="#${sectionId}" class="sidebar-nav-item" data-section-id="${sectionId}">
                    <div class="sidebar-nav-icon">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="sidebar-nav-text">
                        ${subCategory.name}
                        <span class="sidebar-item-count">${subCategory.items.length} items</span>
                    </div>
                </a>
            `;
        });

        sidebarHTML += `</div>`;
        
        // Add divider except for last category
        if (category !== Object.keys(ambrosiaMenuItems)[Object.keys(ambrosiaMenuItems).length - 1]) {
            sidebarHTML += `<hr class="sidebar-divider">`;
        }
    });

    $('#sidebar-nav-items').html(sidebarHTML);

    // Set first item as active initially
    if ($('.sidebar-nav-item').length > 0) {
        $('.sidebar-nav-item:first').addClass('active');
        
        // Scroll to active item after a short delay
        setTimeout(scrollSidebarToActive, 500);
    }
    
    // Initialize Intersection Observer for better scroll detection
    initIntersectionObserver();
}

// Initialize sliders with touch support
function initSliders() {
    console.log("Initializing sliders...");
    
    $('.sub-category-slider').each(function () {
        const slider = $(this);
        const sliderTrack = slider.find('.slider-track');
        const prevBtn = slider.find('.prev');
        const nextBtn = slider.find('.next');
        const sliderItems = sliderTrack.find('.slider-item');

        // If no items, hide navigation
        if (sliderItems.length === 0) {
            prevBtn.hide();
            nextBtn.hide();
            return;
        }

        let currentIndex = 0;
        let itemsPerView = 3;
        
        // Calculate items per view based on screen width
        function calculateItemsPerView() {
            const width = $(window).width();
            if (width <= 768) {
                itemsPerView = 1;
            } else if (width <= 992) {
                itemsPerView = 2;
            } else {
                itemsPerView = 3;
            }
            
            // If total items less than itemsPerView, show all and hide navigation
            if (sliderItems.length <= itemsPerView) {
                prevBtn.hide();
                nextBtn.hide();
                sliderTrack.addClass('few-items');
                return false;
            } else {
                prevBtn.show();
                nextBtn.show();
                sliderTrack.removeClass('few-items');
            }
            return true;
        }

        // Calculate translate value
        function getTranslateX(index) {
            const itemWidth = sliderItems.outerWidth(true); // Include margin
            const gap = 20; // Match CSS gap
            return -index * (itemWidth + gap);
        }

        // Update slider position
        function updateSlider() {
            const translateX = getTranslateX(currentIndex);
            sliderTrack.css({
                'transform': `translateX(${translateX}px)`,
                'transition': 'transform 0.5s ease'
            });
            updateNavButtons();
        }

        // Update navigation buttons
        function updateNavButtons() {
            const hasNavigation = calculateItemsPerView();
            
            if (!hasNavigation) {
                return;
            }
            
            if (currentIndex === 0) {
                prevBtn.addClass('disabled');
            } else {
                prevBtn.removeClass('disabled');
            }
            
            if (currentIndex >= sliderItems.length - itemsPerView) {
                nextBtn.addClass('disabled');
            } else {
                nextBtn.removeClass('disabled');
            }
        }

        // Event listeners
        prevBtn.off('click').on('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.off('click').on('click', function () {
            if (currentIndex < sliderItems.length - itemsPerView) {
                currentIndex++;
                updateSlider();
            }
        });

        // Initialize
        calculateItemsPerView();
        updateSlider();
    });
}

// Create menu item HTML for slider
function createMenuItemHTML(item) {
    const dietaryTags = [];
    if (item.isVegetarian) dietaryTags.push('<span class="dietary-tag veg">Vegetarian</span>');
    if (item.spiceLevel > 3) dietaryTags.push('<span class="dietary-tag spicy">Spicy</span>');
    if (item.chefPick) dietaryTags.push('<span class="dietary-tag chef">Chef\'s Pick</span>');

    const badges = item.chefPick ? '<div class="popular-badge">🔥 Popular</div>' : '';

    // Check if item is in wishlist
    const isInWishlist = wishlist.some(w => w.id === item.id);
    const heartIcon = isInWishlist ? 'fas fa-heart' : 'far fa-heart';
    const heartClass = isInWishlist ? 'active' : '';

    // Quantity/Unit display
    const quantityDisplay = item.quantity ? `<div class="quantity-info">📦 ${item.quantity}</div>` : '';
    const unitDisplay = item.unit ? `<div class="unit-info">${item.unit}</div>` : '';

    return `
        <div class="slider-item" data-id="${item.id}" data-category="${item.category.join(' ')}">
            <div class="menu-item-slider d-flex flex-column position-relative">
                ${badges}
                <div class="menu-card-icons">
                    <div class="fav-icon ${heartClass}" data-id="${item.id}">
                        <i class="${heartIcon}"></i>
                    </div>
                </div>
                <img src="${item.image}" alt="${item.name}" class="menu-item-slider-image">
                <div class="slider-item-content">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h4 class="mb-1">${item.name}</h4>
                            <div class="menu-dietary">
                                ${dietaryTags.join('')}
                            </div>
                        </div>
                        <div class="menu-price">${item.price}</div>
                    </div>
                    ${quantityDisplay}
                    ${unitDisplay}
                    <p class="mb-2 slider-description">${item.description}</p>
                    ${item.spiceLevel > 0 ? `
                        <div class="calories mb-2">🌶️ Spice Level: ${getSpiceLevelText(item.spiceLevel)}</div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Initialize sidebar navigation
function initSidebarNavigation() {
    $(document).on('click', '.sidebar-nav-item', function(e) {
        e.preventDefault();
        
        const targetId = $(this).attr('href');
        
        // Update active state
        $('.sidebar-nav-item').removeClass('active');
        $(this).addClass('active');
        
        // Scroll sidebar to active item
        scrollSidebarToActive();
        
        // Scroll to target section
        if (targetId && targetId !== '#') {
            const targetElement = $(targetId);
            if (targetElement.length) {
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 120
                }, 800);
                
                // Highlight the section
                targetElement.addClass('highlight-section');
                setTimeout(() => {
                    targetElement.removeClass('highlight-section');
                }, 1500);
            }
        }
        
        // Close mobile sidebar
        $('.menu-sidebar').removeClass('active');
        $('.sidebar-backdrop').removeClass('active');
    });
}

// Function to scroll sidebar to active item
function scrollSidebarToActive() {
    const activeItem = $('.sidebar-nav-item.active');
    const sidebar = $('.menu-sidebar');
    
    if (!activeItem.length || !sidebar.length) return;
    
    // Use more precise calculation
    const sidebarScrollTop = sidebar.scrollTop();
    const itemOffset = activeItem.position().top;
    const targetScroll = sidebarScrollTop + itemOffset - (sidebar.height() / 2) + (activeItem.outerHeight() / 2);
    
    // Smooth scroll to active item
    sidebar.stop().animate({
        scrollTop: targetScroll
    }, 600);
}

// Initialize Intersection Observer for better scroll detection
function initIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Update active state in sidebar
                $('.sidebar-nav-item').removeClass('active');
                $(`.sidebar-nav-item[href="#${sectionId}"]`).addClass('active');
                
                // Scroll sidebar to active item
                scrollSidebarToActive();
                
                // Update active category in top navigation
                const category = sectionId.split('-')[0];
                currentCategory = category;
                $('.category-nav-btn').removeClass('active');
                $(`.category-nav-btn[data-category="${category}"]`).addClass('active');
            }
        });
    }, observerOptions);
    
    // Observe all sub-category sections
    $('.sub-category-wrapper').each(function() {
        observer.observe(this);
    });
}

// Initialize scroll spy
function initScrollSpy() {
    const sections = $('.sub-category-wrapper');
    
    if (sections.length === 0) return;
    
    // Disconnect previous observer if exists
    if (observer) observer.disconnect();
    
    // Create new Intersection Observer with better settings
    observer = new IntersectionObserver(function (entries) {
        let mostVisible = null;
        let highestRatio = 0;
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find which section is most visible
                if (entry.intersectionRatio > highestRatio) {
                    highestRatio = entry.intersectionRatio;
                    mostVisible = entry.target;
                }
            }
        });
        
        if (mostVisible) {
            const sectionId = mostVisible.id;
            
            // Update active state in sidebar
            $('.sidebar-nav-item').removeClass('active');
            $(`.sidebar-nav-item[data-section-id="${sectionId}"]`).addClass('active');
            
            // Scroll sidebar to show active item
            setTimeout(scrollSidebarToActive, 100);
        }
    }, {
        root: null,
        rootMargin: '-120px 0px -60% 0px', // Adjusted for better detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    
    // Observe each section
    sections.each(function () {
        observer.observe(this);
    });
}

// Filter menu by main category (Thai, Chinese, etc.)
function filterMenuByMainCategory(category) {
    if (category === 'all') {
        $('.menu-section').show();
        $('.sub-category-wrapper').show();
    } else {
        // Hide all sections first
        $('.menu-section').hide();
        $('.sub-category-wrapper').hide();
        
        // Show only the selected category
        $(`#${category}`).show();
        $(`#${category} .sub-category-wrapper`).show();
    }
    
    // Reinitialize sliders
    setTimeout(initSliders, 100);
}

// Initialize category navigation
function initCategoryNavigation() {
    $('.category-nav-btn').click(function() {
        const category = $(this).data('category');
        
        // Update active state
        $('.category-nav-btn').removeClass('active');
        $(this).addClass('active');
        
        currentCategory = category;
        
        // Filter menu by category
        filterMenuByMainCategory(category);
    });
}

// Wishlist functionality
function initWishlist() {
    $(document).on('click', '.fav-icon', function (e) {
        e.stopPropagation();
        const itemId = parseInt($(this).data('id'));
        const item = findMenuItemById(itemId);

        if (item) {
            toggleWishlistItem(item, $(this));
        }
    });
}

function toggleWishlistItem(item, element) {
    const existingIndex = wishlist.findIndex(w => w.id === item.id);

    if (existingIndex === -1) {
        wishlist.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category[0]
        });
        showToast(`${item.name} added to wishlist`, 'success');
        element.addClass('active').find('i').removeClass('far fa-heart').addClass('fas fa-heart');
    } else {
        wishlist.splice(existingIndex, 1);
        showToast(`${item.name} removed from wishlist`);
        element.removeClass('active').find('i').removeClass('fas fa-heart').addClass('far fa-heart');
    }

    localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function updateWishlistCount() {
    const count = wishlist.length;
    $('.wishlist-count').text(count);
    $('#floating-wishlist').find('.wishlist-count').text(count);
}

function updateWishlistIcons() {
    const wishlistIds = wishlist.map(item => item.id);

    $('.fav-icon').each(function () {
        const itemId = parseInt($(this).data('id'));
        const icon = $(this).find('i');

        if (wishlistIds.includes(itemId)) {
            $(this).addClass('active');
            icon.removeClass('far fa-heart').addClass('fas fa-heart');
        } else {
            $(this).removeClass('active');
            icon.removeClass('fas fa-heart').addClass('far fa-heart');
        }
    });
}

// Filter and search functions
function filterMenuItems(searchTerm) {
    if (searchTerm === '') {
        $('.menu-section').show();
        $('.slider-item').show();
        $('.sub-category-wrapper').show();
        return;
    }

    $('.slider-item').each(function () {
        const name = $(this).find('h4').text().toLowerCase();
        const description = $(this).find('.slider-description').text().toLowerCase();

        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            $(this).show();
            $(this).closest('.sub-category-wrapper').show();
            $(this).closest('.menu-section').show();
            $(this).addClass('search-highlight');

            setTimeout(() => {
                $(this).removeClass('search-highlight');
            }, 2000);
        } else {
            $(this).hide();
        }
    });
}

// Helper functions
function findMenuItemById(id) {
    for (const category in ambrosiaMenuItems) {
        const subCategories = ambrosiaMenuItems[category].subCategories;
        for (const subCatKey in subCategories) {
            const item = subCategories[subCatKey].items.find(item => item.id === id);
            if (item) return item;
        }
    }
    return null;
}

function getCategoryIcon(category) {
    const icons = {
        'thai': 'fa-pepper-hot',
        'chinese': 'fa-utensils',
        'indian': 'fa-spice',
        'indonesian': 'fa-rice',
        'continental': 'fa-drumstick-bite',
        'desserts': 'fa-ice-cream',
        'takeaway': 'fa-box',
        'special': 'fa-crown'
    };
    return icons[category] || 'fa-utensils';
}

function getSpiceLevelText(level) {
    const levels = ['Mild', 'Light', 'Medium', 'Hot', 'Very Hot', 'Extreme'];
    return levels[level - 1] || 'Mild';
}

function showToast(message, type = 'success') {
    const toast = $('#toast');
    $('#toast-message').text(message);

    toast.removeClass('success error');
    toast.addClass(type);
    toast.addClass('show');

    setTimeout(() => {
        toast.removeClass('show');
    }, 3000);
}