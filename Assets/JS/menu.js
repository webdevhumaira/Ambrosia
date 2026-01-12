/***************************
 * AMBROSIA RESTAURANT MENU *
 ***************************/

// Ambrosia Restaurant Menu Data with Sub-Categories
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
                        category: ["thai", "appetizers", "seafood"],
                        image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 102,
                        name: "Prawn Cake (Todmin Goong)",
                        description: "Chopped golden prawn mixed with Thai spicy served with sweet & sour sauce",
                        price: "৳ 820",
                        category: ["thai", "appetizers", "seafood"],
                        image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false,
                        quantity: "6 Pcs"
                    },
                    {
                        id: 103,
                        name: "Stick Golden Prawn (Stay Goong)",
                        description: "Grilled stick golden prawn served with cucumber & peanut sauce",
                        price: "৳ 830",
                        category: ["thai", "appetizers", "seafood"],
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 104,
                        name: "Stick Chicken (Stay Kai)",
                        description: "Grilled chicken fillet cooking Thai spicy served with cucumber & peanut sauce",
                        price: "৳ 830",
                        category: ["thai", "appetizers", "chicken"],
                        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false,
                        quantity: "8 Pcs"
                    },
                    {
                        id: 105,
                        name: "Stick Beef (Stay Naam)",
                        description: "Grilled beef fillet combination in Thai spicy served with peanut sauce",
                        price: "৳ 950",
                        category: ["thai", "appetizers", "beef"],
                        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false,
                        quantity: "6 Pcs",
                        chefPick: true
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
                        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 107,
                        name: "Spicy Chicken/Beef/Prawn Salad",
                        description: "Chopped chicken fillet or chopped beef fillet or fresh prawn with Thai spicy herbs & lemon juice",
                        price: "৳ 820",
                        category: ["thai", "salad", "spicy"],
                        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 108,
                        name: "Cuttle Fish/Mixed Sea Food/Thai Jeely Noodles Salad",
                        description: "Slice fresh cuttle fish fillet or fish fillet, fresh crabs fresh sea prawn or chopped chicken & jelly noodles with tomato onion, lemon juice, chilli",
                        price: "৳ 880",
                        category: ["thai", "salad", "seafood"],
                        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 109,
                        name: "Spicy Cuttle Fish Salad",
                        description: "Slice cuttle fish with lemon juice, chilli powder rice powder onion & spicy herbs",
                        price: "৳ 880",
                        category: ["thai", "salad", "seafood", "spicy"],
                        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 110,
                        name: "Papaya Salad",
                        description: "Green papaya salad with lime juice, fresh tomato dry shrimp, fresh chilli, dry chilli",
                        price: "৳ 460",
                        category: ["thai", "salad", "vegetarian"],
                        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 112,
                        name: "Tomyam Goong Naam Khon",
                        description: "Fresh sea prawn or slice chicken",
                        price: "৳ 870",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 114,
                        name: "Special Seafood Soup",
                        description: "Spicy fresh prawns, fresh crabs, fresh sea fish fresh cuttle fish with lime juice, chilli paste coconut & Thai herbs",
                        price: "৳ 1190",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 115,
                        name: "Spicy Sea Food Clear Soup",
                        description: "Sea prawn, sea crabs, sea fish & fresh cuttle fish with hot basil leafs, lime juice fresh chilli, lemon grass & hot Thai ginger",
                        price: "৳ 1080",
                        category: ["thai", "soup", "seafood", "spicy"],
                        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 117,
                        name: "Beef Oyster",
                        description: "Slice beef with oyster sauce, bell pepper, spring onion & mushroom",
                        price: "৳ 880",
                        category: ["thai", "beef", "main"],
                        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 118,
                        name: "Chicken Oyster",
                        description: "Slice chicken with oyster sauce, bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 119,
                        name: "Chicken Ginger",
                        description: "Slice chicken fillet with ginger spring onion & green bell pepper",
                        price: "৳ 850",
                        category: ["thai", "chicken", "main"],
                        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1559314809-2b99056a8c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    },
                    {
                        id: 122,
                        name: "Pomfret Deep Fried",
                        description: "Whole deep fried pomfret with fried garlic, served with chilli lemon sauce/pineapple sauce/black mushroom & green peas",
                        price: "৳ 950",
                        category: ["thai", "fish", "seafood"],
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 123,
                        name: "Red Snapper Deep Fried",
                        description: "Whole deep fried red snapper, served with garlic, chilli lemon sauce/pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 125,
                        name: "Ambrosia Red Snapper",
                        description: "Deep fried whole red snapper with chilli & pineapple sauce (per 100 gm)",
                        price: "৳ 350",
                        category: ["thai", "fish", "seafood"],
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false,
                        unit: "per 100 gm",
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
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 127,
                        name: "Prawn/Crab Red Chilli Paste",
                        description: "Stir fried sea prawn or sea crab with Thai spicy red chilli paste, long bean & Thai herbs",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab", "spicy"],
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 128,
                        name: "Prawn/Crab Curry Powder",
                        description: "Stir fried fresh sea prawn or stir fried sea crabs with spring onion, egg yellow kari powder",
                        price: "৳ 850",
                        category: ["thai", "seafood", "prawn", "crab"],
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false
                    },
                    {
                        id: 129,
                        name: "Prawn Basil Leaf/Cuttle Fish Basil Leaf",
                        description: "Fresh sea prawn or slice cuttle fish with minced fresh garlic, minced fresh green chilli, long bean & basil leaf",
                        price: "৳ 480",
                        category: ["thai", "seafood", "prawn", "spicy"],
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 4,
                        isVegetarian: false
                    },
                    {
                        id: 130,
                        name: "Prawn Cashew Nut",
                        description: "Stir-fried golden sea prawn with spring onion, dry red chilli & Thai herbs",
                        price: "৳ 980",
                        category: ["thai", "seafood", "prawn"],
                        image: "https://images.unsplash.com/photo-1624300629295-87e0e1503d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
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
                        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false
                    }
                ]
            }
            // Add more sub-categories as needed
        }
    },

    // Indian Cuisine
    "indian": {
        name: "Indian Cuisine",
        description: "Rich and aromatic Indian cuisine with traditional spices",
        subCategories: {
            "tandoori": {
                name: "Tandoori & Fish",
                items: [
                    {
                        id: 301,
                        name: "Butter Chicken",
                        description: "Tender chicken in rich tomato and butter gravy",
                        price: "৳ 850",
                        category: ["indian", "chicken"],
                        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 2,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            }
            // Add more sub-categories as needed
        }
    },

    // Continental Cuisine
    "continental": {
        name: "Continental Cuisine",
        description: "European-inspired dishes with premium ingredients",
        subCategories: {
            "steak": {
                name: "Steak",
                items: [
                    {
                        id: 401,
                        name: "Grilled Salmon",
                        description: "Atlantic salmon with lemon butter sauce and vegetables",
                        price: "৳ 1850",
                        category: ["continental", "seafood"],
                        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 1,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            }
            // Add more sub-categories as needed
        }
    },

    // Indonesian Cuisine
    "indonesian": {
        name: "Indonesian Cuisine",
        description: "Exotic Indonesian flavors and spices",
        subCategories: {
            "main": {
                name: "Main Dishes",
                items: [
                    {
                        id: 701,
                        name: "Nasi Goreng",
                        description: "Indonesian fried rice with chicken and prawn crackers",
                        price: "৳ 650",
                        category: ["indonesian", "rice"],
                        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        spiceLevel: 3,
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            }
        }
    },

    // Desserts
    "desserts": {
        name: "Desserts & Sweets",
        description: "Sweet endings to complete your dining experience",
        subCategories: {
            "desserts": {
                name: "Desserts",
                items: [
                    {
                        id: 501,
                        name: "Chocolate Lava Cake",
                        description: "Warm chocolate cake with molten center, served with vanilla ice cream",
                        price: "৳ 550",
                        category: ["desserts", "veg"],
                        image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        sweetLevel: 5,
                        isVegetarian: true,
                        chefPick: true
                    }
                ]
            }
        }
    },

    // Drinks
    "drinks": {
        name: "Drinks & Beverages",
        description: "Refreshing beverages to complement your meal",
        subCategories: {
            "cold": {
                name: "Cold Beverage",
                items: [
                    {
                        id: 601,
                        name: "Fresh Lime Soda",
                        description: "Refreshing lime soda with mint",
                        price: "৳ 180",
                        category: ["drinks", "veg"],
                        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        sweetLevel: 2,
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
            "packages": {
                name: "Lunch Boxes",
                items: [
                    {
                        id: 801,
                        name: "Family Feast Package",
                        description: "Serves 4-6 people. Includes appetizers, main course, and dessert",
                        price: "৳ 3500",
                        category: ["takeaway"],
                        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            }
        }
    },

    // Special Party Menu
    "special": {
        name: "Special Party Menu",
        description: "Custom packages for events and celebrations",
        subCategories: {
            "packages": {
                name: "Event Packages",
                items: [
                    {
                        id: 901,
                        name: "Royal Wedding Package",
                        description: "Full catering for weddings (per 100 guests)",
                        price: "৳ 85000",
                        category: ["special"],
                        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                        isVegetarian: false,
                        chefPick: true
                    }
                ]
            }
        }
    }
};

// Rest of the code remains the same as previous version...
// [Keep all the functions: generateSidebar(), loadMenuWithSubCategories(), initSliders(), etc.]

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('ambrosiaWishlist')) || [];

$(document).ready(function () {
    // Initialize sidebar
    generateSidebar();

    // Initialize menu with new structure
    loadMenuWithSubCategories();

    // Initialize wishlist
    initWishlist();

    // Search functionality
    $('#menu-page-search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        filterMenuItems(searchTerm);
    });

    // Filter functionality
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        filterMenuByCategory(filter);
    });

    // Sidebar navigation click
    $(document).on('click', '.sidebar-nav-item', function (e) {
        e.preventDefault();
        const target = $(this).data('target');

        // Scroll to section
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 800);

        // Update active state
        $('.sidebar-nav-item').removeClass('active');
        $(this).addClass('active');

        // Close sidebar on mobile
        if ($(window).width() < 992) {
            closeSidebar();
        }
    });

    // Update active sidebar nav on scroll
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 150;

        $('.menu-section').each(function () {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = $(this).attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.sidebar-nav-item').removeClass('active');
                $(`.sidebar-nav-item[data-target="#${sectionId}"]`).addClass('active');
            }
        });
    });

    // Sidebar toggle for mobile
    $('.sidebar-toggle').click(function () {
        $('.menu-sidebar').addClass('active');
        $('.sidebar-backdrop').addClass('active');
    });

    // Close sidebar when clicking backdrop
    $('.sidebar-backdrop').click(function () {
        closeSidebar();
    });

    // Close sidebar when clicking close button (if any)
    $(document).on('click', '.sidebar-close', function () {
        closeSidebar();
    });

    // Update wishlist count
    updateWishlistCount();

    // Initialize wishlist modal
    $('.wishlist-icon').click(function (e) {
        e.preventDefault();
        $('#wishlistModal').modal('show');
        displayWishlistItems();
    });

    // Clear wishlist button
    $('#clear-wishlist').click(function () {
        if (wishlist.length === 0) return;

        if (confirm('Are you sure you want to clear your wishlist?')) {
            wishlist = [];
            localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
            updateWishlistCount();
            updateWishlistIcons();
            displayWishlistItems();
            showToast('Wishlist cleared successfully');
        }
    });

    // Floating wishlist button
    $('#floating-wishlist').click(function (e) {
        e.preventDefault();
        $('#wishlistModal').modal('show');
        displayWishlistItems();
    });

    // Initialize sliders
    initSliders();

    // Trigger scroll to update active nav on load
    $(window).trigger('scroll');
});

// Generate sidebar navigation
function generateSidebar() {
    const categories = {
        'thai': { name: 'Thai Cuisine', icon: 'fa-pepper-hot' },
        'chinese': { name: 'Chinese Cuisine', icon: 'fa-utensils' },
        'indian': { name: 'Indian Cuisine', icon: 'fa-spice' },
        'continental': { name: 'Continental Cuisine', icon: 'fa-drumstick-bite' }
    };

    let sidebarHTML = '';

    Object.keys(categories).forEach(cat => {
        sidebarHTML += `
            <a href="#" class="sidebar-nav-item" data-target="#${cat}">
                <div class="sidebar-nav-icon">
                    <i class="fas ${categories[cat].icon}"></i>
                </div>
                <div class="sidebar-nav-text">
                    ${categories[cat].name}
                </div>
            </a>
        `;
    });

    $('#sidebar-nav-items').html(sidebarHTML);

    // Set first item as active
    $('.sidebar-nav-item:first').addClass('active');
}

// Load menu items with sub-categories and sliders
// Load menu items with sub-categories and sliders
function loadMenuWithSubCategories() {
    const menuContent = $('#menu-content');
    menuContent.empty();

    Object.keys(ambrosiaMenuItems).forEach(category => {
        const categoryData = ambrosiaMenuItems[category];
        const subCategories = categoryData.subCategories;

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
                <div class="sub-category-wrapper">
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
            
            subCategory.items.forEach(item => {
                const itemHTML = createMenuItemHTML(item);
                sliderTrack.append(itemHTML);
            });
        });
    });

    // Update wishlist icons after loading
    updateWishlistIcons();
    
    // Initialize sliders AFTER content is loaded
    setTimeout(initSliders, 100);
}

// Initialize sliders with touch support
function initSliders() {
    $('.sub-category-slider').each(function () {
        const sliderTrack = $(this).find('.slider-track');
        const prevBtn = $(this).find('.prev');
        const nextBtn = $(this).find('.next');
        
        let currentSlide = 0;
        let slidesToShow = 3; // Always show 3 slides on desktop
        const slideWidth = 300; // Fixed width for each slide
        const gap = 20; // Gap between slides
        
        // Calculate total slides
        const totalSlides = sliderTrack.children().length;
        
        // Function to update slides to show based on screen size
        function updateSlidesToShow() {
            const windowWidth = $(window).width();
            
            if (windowWidth <= 768) {
                slidesToShow = 1; // Mobile: 1 slide
            } else if (windowWidth <= 992) {
                slidesToShow = 2; // Tablet: 2 slides
            } else {
                slidesToShow = 3; // Desktop: 3 slides
            }
            
            // If total slides are less than slidesToShow, adjust
            if (totalSlides < slidesToShow) {
                slidesToShow = totalSlides;
            }
        }
        
        // Update navigation buttons
        function updateNavButtons() {
            // Hide buttons if no sliding needed
            if (totalSlides <= slidesToShow) {
                prevBtn.hide();
                nextBtn.hide();
                return;
            }
            
            prevBtn.show();
            nextBtn.show();
            
            // Disable/enable buttons
            const canGoPrev = currentSlide > 0;
            const canGoNext = currentSlide < totalSlides - slidesToShow;
            
            prevBtn.prop('disabled', !canGoPrev);
            nextBtn.prop('disabled', !canGoNext);
            
            if (!canGoPrev) {
                prevBtn.addClass('disabled');
            } else {
                prevBtn.removeClass('disabled');
            }
            
            if (!canGoNext) {
                nextBtn.addClass('disabled');
            } else {
                nextBtn.removeClass('disabled');
            }
        }
        
        // Move slider with animation
        function moveSlider() {
            const totalSlideWidth = slideWidth + gap;
            const translateX = -currentSlide * totalSlideWidth;
            
            sliderTrack.css({
                'transform': `translateX(${translateX}px)`,
                'transition': 'transform 0.5s ease'
            });
            
            updateNavButtons();
        }
        
        // Previous button click
        prevBtn.click(function () {
            if (currentSlide > 0) {
                currentSlide--;
                moveSlider();
            }
        });
        
        // Next button click
        nextBtn.click(function () {
            if (currentSlide < totalSlides - slidesToShow) {
                currentSlide++;
                moveSlider();
            }
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        sliderTrack.on('touchstart', function (e) {
            touchStartX = e.touches[0].clientX;
            sliderTrack.css('transition', 'none');
        });
        
        sliderTrack.on('touchmove', function (e) {
            touchEndX = e.touches[0].clientX;
        });
        
        sliderTrack.on('touchend', function () {
            sliderTrack.css('transition', 'transform 0.5s ease');
            const touchDiff = touchStartX - touchEndX;
            const threshold = 50;
            
            // Swipe left - next slide
            if (touchDiff > threshold && currentSlide < totalSlides - slidesToShow) {
                currentSlide++;
                moveSlider();
            }
            // Swipe right - previous slide
            else if (touchDiff < -threshold && currentSlide > 0) {
                currentSlide--;
                moveSlider();
            }
        });
        
        // Initialize
        updateSlidesToShow();
        updateNavButtons();
        moveSlider();
        
        // Handle window resize
        function handleResize() {
            const oldSlidesToShow = slidesToShow;
            updateSlidesToShow();
            
            // If slidesToShow changed, reset to first slide
            if (oldSlidesToShow !== slidesToShow) {
                currentSlide = 0;
                moveSlider();
            }
        }
        
        // Debounced resize handler
        let resizeTimer;
        $(window).on('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 250);
        });
    });
}

// Clean up resize listeners when needed
$(window).on('beforeunload', function () {
    $('.sub-category-slider').each(function () {
        const handler = $(this).data('slider-handler');
        if (handler) {
            $(window).off('resize', handler);
        }
    });
});

// Create menu item HTML for slider
function createMenuItemHTML(item) {
    const dietaryTags = [];
    if (item.isVegetarian) dietaryTags.push('<span class="dietary-tag veg">Vegetarian</span>');
    if (item.spiceLevel > 3) dietaryTags.push('<span class="dietary-tag spicy">Spicy</span>');
    if (item.chefPick) dietaryTags.push('<span class="dietary-tag chef">Chef\'s Pick</span>');
    if (item.sweetLevel > 3) dietaryTags.push('<span class="dietary-tag special">Sweet</span>');

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
            <div class="menu-item-slider d-flex position-relative">
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
                    ${item.sweetLevel > 0 ? `
                        <div class="calories">🍭 Sweet Level: ${getSweetLevelText(item.sweetLevel)}</div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Wishlist functionality (same as before)
function initWishlist() {
    $(document).on('click', '.fav-icon', function (e) {
        e.stopPropagation();
        const itemId = parseInt($(this).data('id'));
        const item = findMenuItemById(itemId);

        if (item) {
            toggleWishlistItem(item, $(this));
        }
    });

    updateWishlistCount();
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
    $('.wishlist-count').text(wishlist.length);
    $('#floating-wishlist').find('.wishlist-count').text(wishlist.length);
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

function displayWishlistItems() {
    const container = $('#wishlist-items');
    container.empty();

    if (wishlist.length === 0) {
        container.html(`
            <div class="text-center py-5">
                <i class="fas fa-heart fa-3x text-secondary mb-3"></i>
                <h5 class="mb-2">Your wishlist is empty</h5>
                <p class="text-muted">Add items to your wishlist by clicking the heart icon</p>
            </div>
        `);
        return;
    }

    wishlist.forEach(item => {
        container.append(`
            <div class="wishlist-item d-flex align-items-center mb-3 p-3" style="background: rgba(255,255,255,0.05); border-radius: 8px;">
                <img src="${item.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 5px; margin-right: 15px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <p class="mb-0 text-secondary">${item.price}</p>
                </div>
                <button class="btn btn-sm btn-danger remove-wishlist" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `);
    });

    $('.remove-wishlist').click(function () {
        const itemId = parseInt($(this).data('id'));
        wishlist = wishlist.filter(item => item.id !== itemId);
        localStorage.setItem('ambrosiaWishlist', JSON.stringify(wishlist));
        displayWishlistItems();
        updateWishlistCount();
        updateWishlistIcons();
        showToast('Item removed from wishlist');
    });
}

// Filter and search functions (updated for new structure)
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
        const price = $(this).find('.menu-price').text().toLowerCase();

        if (name.includes(searchTerm) || description.includes(searchTerm) || price.includes(searchTerm)) {
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

function filterMenuByCategory(filter) {
    if (filter === 'all') {
        $('.menu-section').show();
        $('.sub-category-wrapper').show();
        $('.slider-item').show();
    } else if (filter === 'veg') {
        $('.slider-item').each(function () {
            const hasVegTag = $(this).find('.dietary-tag.veg').length > 0;
            if (hasVegTag) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        // Show/hide sub-categories based on visible items
        $('.sub-category-wrapper').each(function() {
            const hasVisibleItems = $(this).find('.slider-item:visible').length > 0;
            if (hasVisibleItems) {
                $(this).show();
                $(this).closest('.menu-section').show();
            } else {
                $(this).hide();
            }
        });
    } else if (filter === 'spicy') {
        $('.slider-item').each(function () {
            const hasSpicyTag = $(this).find('.dietary-tag.spicy').length > 0;
            if (hasSpicyTag) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        // Show/hide sub-categories based on visible items
        $('.sub-category-wrapper').each(function() {
            const hasVisibleItems = $(this).find('.slider-item:visible').length > 0;
            if (hasVisibleItems) {
                $(this).show();
                $(this).closest('.menu-section').show();
            } else {
                $(this).hide();
            }
        });
    } else if (filter === 'chef') {
        $('.slider-item').each(function () {
            const hasChefTag = $(this).find('.dietary-tag.chef').length > 0;
            if (hasChefTag) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        // Show/hide sub-categories based on visible items
        $('.sub-category-wrapper').each(function() {
            const hasVisibleItems = $(this).find('.slider-item:visible').length > 0;
            if (hasVisibleItems) {
                $(this).show();
                $(this).closest('.menu-section').show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Reinitialize sliders after filtering
    setTimeout(initSliders, 100);
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
        'continental': 'fa-drumstick-bite'
    };
    return icons[category] || 'fa-utensils';
}

function getSpiceLevelText(level) {
    const levels = ['Mild', 'Light', 'Medium', 'Hot', 'Very Hot', 'Extreme'];
    return levels[level - 1] || 'Mild';
}

function getSweetLevelText(level) {
    const levels = ['Light', 'Moderate', 'Sweet', 'Very Sweet', 'Extremely Sweet'];
    return levels[level - 1] || 'Moderate';
}

function closeSidebar() {
    $('.menu-sidebar').removeClass('active');
    $('.sidebar-backdrop').removeClass('active');
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