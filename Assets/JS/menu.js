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
                        description: "DEEP FRIED SEA FRESH PRAWN COOKING WITH BREAD CRUMP SERVED WITH PALM SAUCE",
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
                        description: "CHOPED GOLDEN PRAWN MIXED WITH THAI SPICY SERVED WITH SWEET & SOUR SAUCE",
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
                        description: "GRILLED STICK GOLDEN PRAWN SERVED WITH CUCUMBER & PEANUT SAUCE",
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
                        description: "GRILLED CHICKEN FILLET COOKING THAI SPICY SERVED WITH CUCUMBER & PEANUT SAUCE",
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
                        description: "GRILLED BEEF FILLET COMBINATION IN THAI SPICY SERVED WITH PEANUT SAUCE",
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
                        description: "DEEP FRIED FISH SERVED WITH CHILLI SAUCE OR SEA FOOD SAUCE (SPICY SAUCE)",
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
                        description: "GRILLED CUTTLE FISH SERVED WITH SEA FOOD SAUCE (SPICY SAUCE)",
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
                        description: "Stir-fried sliced chicken with cashew nut, spring onion, dry chilli & Thai spice",
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
                        description: "DEEP FRIED PRAWN CUTTLE FISH & MIXED VEGETABLES SERVED WITH SWEET CHILLI SAUCE",
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
                        description: "DEEP FRIED FISH FILLET WITH GOLDEN BREAD CRAMP SERVED WITH SWEET & SOUR CHILLI GARLIC SAUCE",
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
                        description: "Stir-fried sliced chicken with cashew nut, spring onion, dry chilli & Thai spice",
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
                        description: "DEEP FRIED CHOPPED CHICKEN THAI JEELY NOODLES AND VEGETABLE SERVED WITH SWEET & SOUR SAUCE",
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
                        description: "DEEP FRIED CHOPPED FISH FILLET COOKING WITH CHILLI PASTE & THAI SPICY HERB SERVED WITH SWEET & CUCUMBER SAUCE",
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
                        description: "Stir-fried sliced chicken with cashew nut, spring onion, dry chilli & Thai spice",
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
                        id: 106,
                        name: "Grilled Chicken/Beef Salad",
                        description: "Slice grilled chicken or beef with lime juice rice powder, chilli powder, spring onion & mint leaf",
                        price: "৳ 670",
                        category: ["thai", "salad", "chicken", "beef"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 107,
                        name: "Spicy Chicken/Beef/Prawn Salad",
                        description: "Chopped chicken fillet or chopped beef fillet or fresh prawn with Thai spicy herbs & lemon juice",
                        price: "৳ 820",
                        category: ["thai", "salad", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 108,
                        name: "Cuttle Fish/Mixed Sea Food/Thai Jeely Noodles Salad",
                        description: "Slice fresh cuttle fish fillet or fish fillet, fresh crabs fresh sea prawn or chopped chicken & jelly noodles with tomato onion, lemon juice, chilli",
                        price: "৳ 880",
                        category: ["thai", "salad", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 109,
                        name: "Spicy Cuttle Fish Salad",
                        description: "Slice cuttle fish with lemon juice, chilli powder rice powder onion & spicy herbs",
                        price: "৳ 880",
                        category: ["thai", "salad", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 110,
                        name: "Papaya Salad",
                        description: "Green papaya salad with lime juice, fresh tomato dry shrimp, fresh chilli, dry chilli",
                        price: "৳ 460",
                        category: ["thai", "salad", "vegetarian"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: true,
                        chefPick: true
                    }
                ]
            },
            "soup": {
                name: "Soup",
                items: [
                    {
                        id: 111,
                        name: "Clear Prawn/Chicken/Fish Fillet Soup",
                        description: "Fresh sea prawn or slice chicken onion",
                        price: "৳ 790",
                        category: ["thai", "soup", "seafood", "chicken"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 112,
                        name: "Tomyam Goong Naam Khon",
                        description: "Fresh sea prawn or slice chicken",
                        price: "৳ 870",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 113,
                        name: "Sweet King Prawn Soup",
                        description: "Special sweet king prawn with spicy Thai herbs, red chilli paste coconut milk & lime juice 4pcs",
                        price: "৳ 1150",
                        category: ["thai", "soup", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 114,
                        name: "Special Seafood Soup",
                        description: "Spicy fresh prawns, fresh crabs, fresh sea fish fresh cuttle fish with lime juice, chilli paste coconut & Thai herbs",
                        price: "৳ 1190",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 115,
                        name: "Spicy Sea Food Clear Soup",
                        description: "Sea prawn, sea crabs, sea fish & fresh cuttle fish with hot basil leafs, lime juice fresh chilli, lemon grass & hot Thai ginger",
                        price: "৳ 1080",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 5,
                        isVegetarian: false
                    }
                ]
            },
            "chicken-beef": {
                name: "Chicken & Beef",
                items: [
                    {
                        id: 116,
                        name: "Chicken Cashew Nut",
                        description: "Stir-fried sliced chicken with cashew nut, spring onion, dry chilli & Thai spice",
                        price: "৳ 810",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 117,
                        name: "Beef Oyster",
                        description: "Slice beef with oyster sauce, bell pepper, spring onion & mushroom",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 118,
                        name: "Chicken Oyster",
                        description: "Slice chicken with oyster sauce, bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 119,
                        name: "Chicken Ginger",
                        description: "Slice chicken fillet with ginger spring onion & green bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 120,
                        name: "Chicken Jelly Noodles",
                        description: "Sliced chicken fillet with Thai jelly noodle spring onion fresh tomato & vegetable",
                        price: "৳ 700",
                        category: ["thai", "chicken", "noodles"],
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
                        id: 121,
                        name: "Cuttle Fish Gravy Garlic/Koral",
                        description: "Cuttle fish/koral fillet with bell pepper, onion fresh & dry garlic",
                        price: "৳ 1050",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 122,
                        name: "Pomfret Deep Fried",
                        description: "Whole deep fried pomfret with fried garlic, served with chilli lemon sauce/pineapple sauce/black mushroom & green peas",
                        price: "৳ 950",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 123,
                        name: "Red Snapper Deep Fried",
                        description: "Whole deep fried red snapper, served with garlic, chilli lemon sauce/pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 124,
                        name: "Pomfret Red Chilli Paste",
                        description: "Deep fried whole pomfret with red chilli paste, coconut milk & Thai herbs",
                        price: "৳ 960",
                        category: ["thai", "fish", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 125,
                        name: "Ambrosia Red Snapper",
                        description: "Deep fried whole red snapper with chilli & pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        // unit: "per 100 gm",
                        chefPick: true
                    }
                ]
            },
            "prawn-crab": {
                name: "Prawn/King Prawn/Crab",
                items: [
                    {
                        id: 126,
                        name: "Prawn Red Chilli Oil/Crab Chilli Oil",
                        description: "Stir fried sea prawn or stir fried sea crab with chilli oil in Thai ingredient",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 127,
                        name: "Prawn/Crab Red Chilli Paste",
                        description: "Stir fried sea prawn or sea crab with Thai spicy red chilli paste, long bean & Thai herbs",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 128,
                        name: "Prawn/Crab Curry Powder",
                        description: "Stir fried fresh sea prawn or stir fried sea crabs with spring onion, egg yellow kari powder",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 129,
                        name: "Prawn Basil Leaf/Cuttle Fish Basil Leaf",
                        description: "Fresh sea prawn or slice cuttle fish with minced fresh garlic, minced fresh green chilli, long bean & basil leaf",
                        price: "৳ 480",
                        category: ["thai", "seafood", "prawn", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 130,
                        name: "Prawn Cashew Nut",
                        description: "Stir-fried golden sea prawn with spring onion, dry red chilli & Thai herbs",
                        price: "৳ 980",
                        category: ["thai", "seafood", "prawn"],
                        image: "./Assets/Images/Fried Prawn.jpg",
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
                        id: 131,
                        name: "Grilled Sea Lobster",
                        description: "Fresh sea lobster grilled with Thai spicy served with sea food spicy sauce (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 132,
                        name: "Lobster Gravy Garlic",
                        description: "Stir fried lobster with minced fresh garlic spring onion & bell pepper (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 133,
                        name: "Ambrosia Lobster",
                        description: "Stir fried fresh sea lobster with minced chicken, black mushroom and green peas (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 134,
                        name: "Lobster Chilli Paste",
                        description: "Stir fried lobster with Thai red chilli paste & coconut sauce (per 100 gm)",
                        price: "৳ 720",
                        category: ["thai", "lobster", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false,
                        unit: "per 100 gm"
                    },
                    {
                        id: 135,
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
                        id: 136,
                        name: "Mixed Seafood Spicy Hot Pan",
                        description: "Combination of stir-fried fresh sea prawn, cuttle fish, crab & stir fried fish with hot chilli sauce, bamboo shoot & mushroom",
                        price: "৳ 1030",
                        category: ["thai", "sizzling", "seafood", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 137,
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
                        id: 138,
                        name: "Red Snapper Fillet Hot Pan",
                        description: "Stir-fried fish fillet of red snapper with red chilli paste, coconut milk & sweet basil served in hot pan",
                        price: "৳ 1030",
                        category: ["thai", "sizzling", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 139,
                        name: "Beef Fillet Hot Sizzling",
                        description: "Stir grilled beef fillet with spicy chilli sauce, pickle cucumber pickle carrot, long bean, green pepper",
                        price: "৳ 880",
                        category: ["thai", "sizzling", "beef", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 140,
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
                        id: 141,
                        name: "Prawn/Chicken/Beef/Cuttle Fish/Mixed Sea Food Basil Leaf Fried Rice",
                        description: "Stir fried prawn /chicken / beef / cuttle fish and mixed sea food fried rice with spicy Thai ingredient & hot basil leaf",
                        price: "৳ 980",
                        category: ["thai", "rice"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 142,
                        name: "Butter Pineapple Fried Rice",
                        description: "Sweet pineapple, green peas, carrot. garlic served with fresh pineapple dish",
                        price: "৳ 700",
                        category: ["thai", "rice", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 143,
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
                        id: 144,
                        name: "Prawn/Chicken/Beef/Mixed Thai Rice Noodles",
                        description: "Stir fried prawn or chicken or beef or mixed with Thai rice noodles in Thai spicy sauce",
                        price: "৳ 800",
                        category: ["thai", "noodles"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 145,
                        name: "Spicy Thai Rice Noodles/Jelly Noodles",
                        description: "Stir fried prawn, chicken, beef with rice noodles or Thai jelly noodles in Thai spicy sauce & mixed vegetable",
                        price: "৳ 750",
                        category: ["thai", "noodles", "spicy"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 146,
                        name: "Mixed Sea Food Gravy Noodles",
                        description: "Thai rice noodles with mixed sea food vegetable, mushroom in Thai herbs",
                        price: "৳ 870",
                        category: ["thai", "noodles", "seafood"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 147,
                        name: "Chicken/Beef/Prawn Gravy Noodles",
                        description: "Thai rice noodles with chicken/beef/prawn & vegetable",
                        price: "৳ 870",
                        category: ["thai", "noodles"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 148,
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
                        id: 149,
                        name: "Roast Duck Curry",
                        description: "Roast Chinese duck with red chilli paste, bamboo shoot, long bean & sweet basil",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 150,
                        name: "Roast Duck Red Curry",
                        description: "Roast duck cooking with red chilli curry coconut milk pineapple & bamboo shoot",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 151,
                        name: "Roast Duck Gravy",
                        description: "Roast of Chinese duck with Chinese herbs green peas, black & white mushroom",
                        price: "৳ 1500",
                        category: ["thai", "duck"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 152,
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
                        id: 153,
                        name: "Green Vegetable/Mixed Vegetable",
                        description: "Green vegetable or seasonal vegetable with mushroom and baby corn",
                        price: "৳ 590",
                        category: ["thai", "vegetables", "veg"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        spiceLevel: 1,
                        isVegetarian: true
                    },
                    {
                        id: 154,
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
                        id: 155,
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
                        id: 201,
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
                        id: 202,
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
                        id: 203,
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
                        id: 204,
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
                        id: 205,
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
                        id: 206,
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
                        id: 207,
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
                        id: 208,
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
                        id: 209,
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
                        id: 210,
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
                        id: 211,
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
                        id: 212,
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

    // Indian Cuisine
    "indian": {
        name: "Indian Cuisine",
        description: "Rich and aromatic Indian cuisine with traditional spices",
        subCategories: {
            "appetizers": {
                name: "Appetizers",
                items: [
                    {
                        id: 301,
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
                        id: 302,
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
                        id: 303,
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
                        id: 304,
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
                        id: 305,
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
                        id: 306,
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
                        id: 307,
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
                        id: 308,
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
                        id: 309,
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
                        id: 310,
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
                        id: 311,
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
                        id: 312,
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

    // Indonesian Cuisine
    "indonesian": {
        name: "Indonesian Cuisine",
        description: "Exotic Indonesian flavors and spices",
        subCategories: {
            "chicken-prawn": {
                name: "Chicken/Prawn/Fish/Vegetable",
                items: [
                    {
                        id: 401,
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
                        id: 402,
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
                        id: 403,
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
                        id: 404,
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

    // Continental Cuisine
    "continental": {
        name: "Continental Cuisine",
        description: "European-inspired dishes with premium ingredients",
        subCategories: {
            "appetizers": {
                name: "Appetizers (Hot & Cold)",
                items: [
                    {
                        id: 501,
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
                        id: 502,
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
                        id: 503,
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
                        id: 504,
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
                        id: 505,
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
                        id: 506,
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
                        id: 507,
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
                        id: 508,
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
                        id: 509,
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
                        id: 601,
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
                        id: 602,
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
                        id: 603,
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
                        id: 604,
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
                        id: 701,
                        name: "B01. EGG FRIED RICE",
                        description: "Chicken Masala - 2 pcs, Pomfret Fry - 1 pcs, Chinese Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 702,
                        name: "B02. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Prawn/Fish Masala, Chinese Vegetable",
                        price: "৳ 575",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 703,
                        name: "B03. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Beef/Chicken Chilli, Prawn Masala, Chinese Vegetable",
                        price: "৳ 650",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false,
                        chefPick: true
                    },
                    {
                        id: 704,
                        name: "B04. EGG FRIED RICE",
                        description: "Fried Chicken - 2 pcs, Mutton Rezala - 1 pcs, Mixed Vegetable",
                        price: "৳ 600",
                        category: ["takeaway", "lunch-box"],
                        image: "./Assets/Images/Fried Prawn.jpg",
                        isVegetarian: false
                    },
                    {
                        id: 705,
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
                        id: 801,
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
                        id: 802,
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
let isSearching = false;
let allMenuItems = [];

// Wait for DOM to be ready
$(document).ready(function () {
    console.log("Document ready, initializing menu...");
    
    // Load menu content first
    loadMenuContent();
    
    // Then initialize everything else
    initializeComponents();
    
    // Initialize Slick sliders after a short delay
    setTimeout(initializeSliders, 300);
});

// =============================
// 1. LOAD MENU CONTENT
// =============================
function loadMenuContent() {
    console.log("Loading menu content...");
    const menuContent = $('#menu-content');
    menuContent.empty();
    
    // Reset all menu items array
    allMenuItems = [];
    
    // Loop through each category
    Object.keys(ambrosiaMenuItems).forEach(category => {
        const categoryData = ambrosiaMenuItems[category];
        
        // Create category section
        const sectionHTML = `
            <section id="${category}" class="menu-section">
                <div class="container">
                    <div class="category-badge">
                        <h2 class="category-title">
                            <i class="fas ${getCategoryIcon(category)} me-3"></i>${categoryData.name}
                        </h2>
                        <p class="mb-0">${categoryData.description}</p>
                    </div>
        `;
        
        menuContent.append(sectionHTML);
        
        // Add sub-categories
        Object.keys(categoryData.subCategories).forEach(subCatKey => {
            const subCategory = categoryData.subCategories[subCatKey];
            const subCategoryId = `${category}-${subCatKey}`;
            
            const subCategoryHTML = `
                <div class="sub-category-wrapper" id="${subCategoryId}">
                    <h3 class="sub-category-title">
                        <i class="fas fa-utensils me-2"></i>${subCategory.name}
                    </h3>
                    
                    <div class="sub-category-slider">
                        <button class="slider-nav prev">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <div class="slider-track" id="slider-${subCategoryId}" data-category="${category}" data-subcategory="${subCatKey}">
                            <!-- Items will be loaded here -->
                        </div>
                        
                        <button class="slider-nav next">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            `;
            
            menuContent.find(`#${category} .container`).append(subCategoryHTML);
            
            // Load items for this sub-category
            loadItemsForSubCategory(subCategory, category, subCatKey);
        });
        
        menuContent.find(`#${category} .container`).append('</div>');
    });
}

function loadItemsForSubCategory(subCategory, category, subCatKey) {
    const sliderTrack = $(`#slider-${category}-${subCatKey}`);
    
    subCategory.items.forEach(item => {
        const itemHTML = createMenuItemHTML(item);
        sliderTrack.append(itemHTML);
        
        // Store item for search
        allMenuItems.push({
            ...item,
            categoryKey: category,
            subCategoryKey: subCatKey,
            sliderId: `slider-${category}-${subCatKey}`
        });
    });
}

function createMenuItemHTML(item) {
    // Check if item is in wishlist
    const isInWishlist = wishlist.some(w => w.id === item.id);
    const heartIcon = isInWishlist ? 'fas fa-heart' : 'far fa-heart';
    const heartClass = isInWishlist ? 'active' : '';
    
    // Dietary tags
    const dietaryTags = [];
    if (item.isVegetarian) dietaryTags.push('<span class="dietary-tag veg">Vegetarian</span>');
    if (item.spiceLevel > 3) dietaryTags.push('<span class="dietary-tag spicy">Spicy</span>');
    if (item.chefPick) dietaryTags.push('<span class="dietary-tag chef">Chef\'s Pick</span>');
    
    // Badges
    const badges = item.chefPick ? '<div class="popular-badge">🔥 Popular</div>' : '';
    
    // Quantity/Unit display
    const quantityDisplay = item.quantity ? `<div class="quantity-info">📦 ${item.quantity}</div>` : '';
    const unitDisplay = item.unit ? `<div class="unit-info">${item.unit}</div>` : '';
    
    return `
        <div class="slider-item" data-id="${item.id}" data-category="${item.category.join(' ')}" data-search-name="${item.name.toLowerCase()}">
            <div class="menu-item-slider d-flex flex-column position-relative">
                ${badges}
                <div class="menu-card-icons">
                    <div class="fav-icon ${heartClass}" data-id="${item.id}">
                        <i class="${heartIcon}"></i>
                    </div>
                </div>
                <img src="${item.image}" alt="${item.name}" class="menu-item-slider-image" onerror="this.src='https://via.placeholder.com/300x200?text=Food+Image'">
                <div class="slider-item-content">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div class="item-title-container">
                            <h4 class="mb-1" title="${item.name}">${item.name}</h4>
                            <div class="menu-dietary">
                                ${dietaryTags.join('')}
                            </div>
                        </div>
                        <div class="menu-price-amount">${item.price}</div>
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

// =============================
// 2. INITIALIZE COMPONENTS
// =============================
function initializeComponents() {
    console.log("Initializing components...");
    
    // Wishlist
    initWishlist();
    
    // Category navigation
    initCategoryNavigation();
    
    // Sidebar
    generateSidebar();
    initSidebarNavigation();
    
    // Search functionality
    initSearch();
    
    // Filters
    initFilters();
    
    // Mobile sidebar toggle
    initMobileSidebar();
    
    // Update wishlist count
    updateWishlistCount();
    
    // Initialize scroll spy after content loads
    setTimeout(initScrollSpy, 500);
    
    // Scroll to top button
    $('#scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
    
    // Update scroll progress and navbar on scroll
    $(window).scroll(function () {
        // Progress bar
        const winHeight = $(window).height();
        const docHeight = $(document).height();
        const winTop = $(window).scrollTop();
        const progress = (winTop / (docHeight - winHeight)) * 100;
        $('#scroll-progress').css('width', progress + '%');
        
        // Sticky navbar
        if (winTop > 100) {
            $('#main-nav').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('scrolled');
        }
        
        // Scroll to top button
        if (winTop > 300) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });
}

// =============================
// 3. SLIDER SYSTEM
// =============================
function initializeSliders() {
    console.log("Initializing sliders...");
    
    // Check if Slick is available
    if (typeof $.fn.slick !== 'function') {
        console.warn("Slick.js not available, using fallback layout");
        initFallbackSliders();
        return;
    }
    
    $('.slider-track').each(function () {
        const $slider = $(this);
        const totalItems = $slider.children('.slider-item').length;
        const $prevBtn = $slider.siblings('.prev');
        const $nextBtn = $slider.siblings('.next');
        
        // If no items, hide the sub-category
        if (totalItems === 0) {
            $slider.closest('.sub-category-wrapper').hide();
            return;
        }
        
        // If 1-3 items, use custom layout (NO SLICK)
        if (totalItems <= 3) {
            console.log(`Sub-category has ${totalItems} items, using custom layout`);
            
            // Hide navigation buttons
            $prevBtn.hide();
            $nextBtn.hide();
            
            // Apply custom layout
            applyCustomLayout($slider, totalItems);
            return;
        }
        
        // For 4+ items, use Slick slider
        try {
            // Show navigation buttons
            $prevBtn.show();
            $nextBtn.show();
            
            // Calculate slides to show based on screen size
            let slidesToShow = 3;
            if ($(window).width() <= 768) slidesToShow = 1;
            else if ($(window).width() <= 992) slidesToShow = 2;
            
            // Initialize Slick slider
            $slider.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
                prevArrow: $prevBtn,
                nextArrow: $nextBtn,
                dots: false,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: { slidesToShow: 2 }
                    },
                    {
                        breakpoint: 768,
                        settings: { slidesToShow: 1 }
                    }
                ]
            });
            
            console.log(`Slick slider initialized with ${slidesToShow} slides`);
            
        } catch (error) {
            console.error("Error initializing Slick slider:", error);
            applyCustomLayout($slider, totalItems);
        }
    });
}

function applyCustomLayout($slider, itemCount) {
    // Add custom classes
    $slider.addClass(`custom-layout items-${itemCount}`);
    
    // Apply CSS for custom layout
    $slider.css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'gap': '20px',
        'justify-content': 'flex-start', // Items align to left
        'width': '100%'
    });
    
    // Set item widths based on count
    let itemWidth = 'calc(33.333% - 14px)'; // Default for 3 items
    
    if (itemCount === 2) {
        itemWidth = 'calc(50% - 10px)';
    } else if (itemCount === 1) {
        itemWidth = 'calc(33.333% - 14px)'; // 1 item also takes 1/3 width
    }
    
    $slider.find('.slider-item').css({
        'width': itemWidth,
        'flex': '0 0 auto'
    });
}

function initFallbackSliders() {
    $('.slider-track').each(function () {
        const $slider = $(this);
        const totalItems = $slider.children('.slider-item').length;
        
        if (totalItems <= 3) {
            applyCustomLayout($slider, totalItems);
        } else {
            // For 4+ items without Slick, show in grid
            $slider.css({
                'display': 'grid',
                'grid-template-columns': 'repeat(auto-fill, minmax(300px, 1fr))',
                'gap': '20px'
            });
            
            // Hide navigation buttons
            $slider.siblings('.slider-nav').hide();
        }
    });
}

// Reinitialize sliders on window resize
let resizeTimer;
$(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if (typeof $.fn.slick === 'function') {
            $('.slider-track.slick-initialized').slick('unslick');
        }
        initializeSliders();
    }, 250);
});

// =============================
// 4. SIDEBAR (FAST SCROLL)
// =============================
function generateSidebar() {
    console.log("Generating sidebar...");
    let sidebarHTML = '';
    
    Object.keys(ambrosiaMenuItems).forEach(category => {
        const categoryData = ambrosiaMenuItems[category];
        
        sidebarHTML += `
            <div class="sidebar-main-category">
                <h4 class="mb-3">
                    <i class="fas ${getCategoryIcon(category)} me-2"></i>${categoryData.name}
                </h4>
        `;
        
        Object.keys(categoryData.subCategories).forEach(subCatKey => {
            const subCategory = categoryData.subCategories[subCatKey];
            const sectionId = `${category}-${subCatKey}`;
            
            sidebarHTML += `
                <a href="#" class="sidebar-nav-item" data-section-id="${sectionId}">
                    <div class="sidebar-nav-icon">
                        <i class="fas fa-angle-right"></i>
                    </div>
                    <div class="sidebar-nav-text">
                        ${subCategory.name}
                        <span class="sidebar-item-count">${subCategory.items.length} items</span>
                    </div>
                </a>
            `;
        });
        
        sidebarHTML += `</div><hr class="sidebar-divider">`;
    });
    
    $('#sidebar-nav-items').html(sidebarHTML);
    
    // Set first item as active
    $('.sidebar-nav-item:first').addClass('active');
}

function initSidebarNavigation() {
    // Click on sidebar item
    $(document).on('click', '.sidebar-nav-item', function (e) {
        e.preventDefault();
        
        const sectionId = $(this).data('section-id');
        
        // Update active state
        $('.sidebar-nav-item').removeClass('active');
        $(this).addClass('active');
        
        // Scroll sidebar to show active item
        scrollSidebarToActive();
        
        // Scroll to section
        const targetElement = $(`#${sectionId}`);
        if (targetElement.length) {
            const targetPosition = targetElement.offset().top - 120;
            $('html, body').animate({
                scrollTop: targetPosition
            }, 600);
            
            // Highlight section briefly
            targetElement.addClass('highlight-section');
            setTimeout(() => {
                targetElement.removeClass('highlight-section');
            }, 1500);
        }
        
        // Close mobile sidebar if open
        $('.menu-sidebar').removeClass('active');
        $('.sidebar-backdrop').removeClass('active');
    });
}

// FAST SIDEBAR SCROLLING FUNCTION
function scrollSidebarToActive() {
    const activeItem = $('.sidebar-nav-item.active');
    const sidebar = $('.menu-sidebar');
    
    if (!activeItem.length || !sidebar.length) return;
    
    // Calculate positions
    const sidebarTop = sidebar.offset().top;
    const itemTop = activeItem.offset().top;
    const sidebarHeight = sidebar.height();
    const itemHeight = activeItem.outerHeight();
    
    // Calculate where to scroll
    const targetScroll = (itemTop - sidebarTop) - (sidebarHeight / 2) + (itemHeight / 2);
    
    // Use native scrollTo for smooth scrolling
    sidebar[0].scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

// =============================
// 5. SEARCH FUNCTIONALITY
// =============================
function initSearch() {
    // Search on Enter key
    $('#menu-page-search').keypress(function (e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            performSearch($(this).val().trim());
        }
    });
    
    // Search on button click
    $('.search-input-wrapper .input-group-text').click(function () {
        performSearch($('#menu-page-search').val().trim());
    });
}

function performSearch(searchTerm) {
    if (isSearching || !searchTerm) return;
    
    isSearching = true;
    console.log("Searching for:", searchTerm);
    
    // Reset previous search results
    $('.slider-item').removeClass('search-result search-highlight').show();
    $('.sub-category-wrapper').show();
    $('.menu-section').show();
    
    // If search term is empty, show all
    if (searchTerm.length < 2) {
        showToast('Please enter at least 2 characters', 'info');
        isSearching = false;
        return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    let foundResults = false;
    let firstResult = null;
    
    // Search through items
    $('.slider-item').each(function () {
        const $item = $(this);
        const itemName = $item.data('search-name') || $item.find('h4').text().toLowerCase();
        const itemDesc = $item.find('.slider-description').text().toLowerCase();
        
        if (itemName.includes(searchLower) || itemDesc.includes(searchLower)) {
            foundResults = true;
            $item.addClass('search-result');
            
            // Show parent elements
            $item.closest('.sub-category-wrapper').show();
            $item.closest('.menu-section').show();
            
            // Store first result
            if (!firstResult) firstResult = $item;
        } else {
            // Hide non-matching items
            $item.hide();
        }
    });
    
    // Hide empty sub-categories
    $('.sub-category-wrapper').each(function () {
        const $wrapper = $(this);
        const visibleItems = $wrapper.find('.slider-item:visible').length;
        
        if (visibleItems === 0) {
            $wrapper.hide();
        }
    });
    
    // Hide empty sections
    $('.menu-section').each(function () {
        const $section = $(this);
        const visibleSubCategories = $section.find('.sub-category-wrapper:visible').length;
        
        if (visibleSubCategories === 0) {
            $section.hide();
        }
    });
    
    // Show message
    if (foundResults) {
        showToast(`Found ${$('.search-result').length} result(s)`, 'success');
        
        // Scroll to first result
        if (firstResult) {
            setTimeout(() => {
                const targetPosition = firstResult.offset().top - 150;
                $('html, body').animate({
                    scrollTop: targetPosition
                }, 800);
                
                // Highlight first result
                firstResult.addClass('search-highlight');
            }, 300);
        }
        
        // Reinitialize sliders for visible content
        initializeSliders();
        
    } else {
        showToast('No results found', 'info');
        // Show everything
        $('.menu-section, .sub-category-wrapper, .slider-item').show();
        initializeSliders();
    }
    
    isSearching = false;
}

function clearSearch() {
    $('#menu-page-search').val('');
    $('.menu-section, .sub-category-wrapper, .slider-item').show().removeClass('search-result search-highlight');
    initializeSliders();
    showToast('Search cleared', 'info');
}

// =============================
// 6. SCROLL SPY (Active Section)
// =============================
function initScrollSpy() {
    const sections = $('.sub-category-wrapper');
    
    if (sections.length === 0) return;
    
    // Disconnect previous observer if exists
    if (observer) observer.disconnect();
    
    // Create new Intersection Observer
    observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                $('.sidebar-nav-item').removeClass('active');
                $(`.sidebar-nav-item[data-section-id="${sectionId}"]`).addClass('active');
                
                // Update sidebar scroll position
                scrollSidebarToActive();
            }
        });
    }, {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1
    });
    
    // Observe each section
    sections.each(function () {
        observer.observe(this);
    });
}

// =============================
// 7. CATEGORY FILTERS
// =============================
function initCategoryNavigation() {
    $('.category-nav-btn').click(function () {
        const category = $(this).data('category');
        
        // Update active button
        $('.category-nav-btn').removeClass('active');
        $(this).addClass('active');
        
        currentCategory = category;
        
        // Show/hide categories
        if (category === 'all') {
            $('.menu-section').show();
        } else {
            $('.menu-section').hide();
            $(`#${category}`).show();
        }
        
        // Reinitialize sliders
        setTimeout(initializeSliders, 100);
        
        // Update scroll spy
        setTimeout(initScrollSpy, 300);
    });
}

function initFilters() {
    $('.filter-btn').click(function () {
        const filter = $(this).data('filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        filterMenuByCategory(filter);
    });
}

function filterMenuByCategory(filter) {
    if (filter === 'all') {
        $('.slider-item').show();
    } else if (filter === 'veg') {
        $('.slider-item').each(function () {
            const hasVeg = $(this).find('.dietary-tag.veg').length > 0;
            $(this).toggle(hasVeg);
        });
    } else if (filter === 'spicy') {
        $('.slider-item').each(function () {
            const hasSpicy = $(this).find('.dietary-tag.spicy').length > 0;
            $(this).toggle(hasSpicy);
        });
    } else if (filter === 'chef') {
        $('.slider-item').each(function () {
            const hasChef = $(this).find('.dietary-tag.chef').length > 0;
            $(this).toggle(hasChef);
        });
    }
    
    // Reinitialize sliders
    setTimeout(initializeSliders, 100);
}

// =============================
// 8. MOBILE SIDEBAR
// =============================
function initMobileSidebar() {
    // Toggle sidebar
    $('.sidebar-toggle').click(function () {
        $('.menu-sidebar').toggleClass('active');
        $('.sidebar-backdrop').toggleClass('active');
    });
    
    // Close sidebar on backdrop click
    $('.sidebar-backdrop').click(function () {
        $('.menu-sidebar').removeClass('active');
        $(this).removeClass('active');
    });
}

// =============================
// 9. WISHLIST FUNCTIONS
// =============================
function initWishlist() {
    // Toggle wishlist on heart click
    $(document).on('click', '.fav-icon', function () {
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
        // Add to wishlist
        wishlist.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category[0]
        });
        showToast(`${item.name} added to wishlist`, 'success');
        element.addClass('active').find('i').removeClass('far').addClass('fas');
    } else {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        showToast(`${item.name} removed from wishlist`, 'info');
        element.removeClass('active').find('i').removeClass('fas').addClass('far');
    }
    
    // Save to localStorage
    localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    
    // Update all wishlist icons
    updateWishlistIcons();
}

function updateWishlistCount() {
    const count = wishlist.length;
    $('.wishlist-count').text(count);
}

function updateWishlistIcons() {
    const wishlistIds = wishlist.map(item => item.id);
    
    $('.fav-icon').each(function () {
        const itemId = parseInt($(this).data('id'));
        
        if (wishlistIds.includes(itemId)) {
            $(this).addClass('active').find('i').removeClass('far').addClass('fas');
        } else {
            $(this).removeClass('active').find('i').removeClass('fas').addClass('far');
        }
    });
}

// =============================
// 10. HELPER FUNCTIONS
// =============================
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
    const toastMessage = $('#toast-message');
    
    if (!toast.length) {
        console.log('Toast message:', message);
        return;
    }
    
    toastMessage.text(message);
    toast.removeClass('success error info').addClass(type + ' show');
    
    setTimeout(() => {
        toast.removeClass('show');
    }, 3000);
}

// Handle image errors
$(document).on('error', '.menu-item-slider-image', function () {
    $(this).attr('src', 'https://via.placeholder.com/300x200?text=Food+Image');
});