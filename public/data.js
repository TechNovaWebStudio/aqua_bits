export const POSTS_DATA = [
    {
        id: 1,
        images: [
            "https://images.unsplash.com/photo-1647862622825-97c260fcbc84?q=80&w=870&auto=format&fit=crop",
            "https://media.istockphoto.com/id/1364941913/photo/colorful-goldfish-freshwater-aquarium-fish.jpg?s=1024x1024&w=is&k=20&c=Old-hU6ModbX9J3yH-BxUi6mCYsTTOTTpwP4tIMzNkw=",
            "https://media.istockphoto.com/id/1137091440/photo/goldfish-in-an-aquarium.jpg?s=1024x1024&w=is&k=20&c=LlDtmzxSzMvV5PKE3RiZrBmXcX6_gol5BXgMlmJ_BjE="
        ],
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "Exploring the beautiful landscapes today! Swipe to see more. 🏔️✨ #nature #adventure #travelphotography",
        likes: 12100,
        likedBy: [
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
            { name: "dan_nature", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "1,102",
        comments: [
            {
                id: 1,
                author: "travel_bug",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Stunning colors! What camera setup?",
                time: "2h",
                likes: 45,
                isLiked: false,
                replies: [
                    {
                        id: 101,
                        author: "alex_travels",
                        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                        avatarColor: "#f1f5f9",
                        avatarTextColor: "#64748b",
                        text: "@travel_bug Shot this on a Sony A7R V with a 24-70mm f/2.8 lens!",
                        time: "1h",
                        likes: 12,
                        isLiked: false
                    }
                ]
            },
            {
                id: 2,
                author: "kate_doe",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Adding this straight to my bucket list ASAP.",
                time: "4h",
                likes: 18,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "dan_nature",
                avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "The lighting in the second frame is insane!",
                time: "5h",
                likes: 32,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-15T10:30:00Z",
        petDetails: {
            petName: "Premium Oranda Goldfish",
            price: 1250,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 30,
            age: "4 months",
            healthStatus: "Quarantined & Active",
            shippingAvailable: false,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 100 },
                { shippingMethod: "Pet Van", amount: 350 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "goldfish"
            }
        }
    },
    {
        id: 2,
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Indian_fantail%28black_self%29.jpg"
        ],
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "Stargazing on a clear night sky. Absolute bliss. 🌌 #universe #galaxy #longexposure #space",
        likes: 8400,
        likedBy: [
            { name: "sky_watcher", avatar: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80" },
            { name: "luna_love", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" },
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,725",
        comments: [
            {
                id: 1,
                author: "sky_watcher",
                avatarUrl: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "This is breathtaking. Long exposure details?",
                time: "1d",
                likes: 84,
                isLiked: false,
                replies: [
                    {
                        id: 101,
                        author: "em1_1999s",
                        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                        avatarColor: "#f1f5f9",
                        avatarTextColor: "#64748b",
                        text: "@sky_watcher 25 seconds, f/2.8, ISO 3200 tracking mount enabled!",
                        time: "18h",
                        likes: 19,
                        isLiked: false
                    }
                ]
            },
            {
                id: 2,
                author: "luna_love",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "Beautiful starry vibe ✨",
                time: "2d",
                likes: 14,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-14T22:15:00Z",
        petDetails: {
            petName: "Indian Fantail Pigeon (Black Self)",
            price: 3200,
            units: "pair",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 8,
            age: "5 months",
            healthStatus: "Vaccinated & Active",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "birds",
                subQut: "pigeon"
            }
        }
    },
    {
        id: 3,
        images: [
            "https://catholicreview.org/wp-content/uploads/2021/09/FinchBD-siblings.jpg",
            "https://www.newyorkbirdsupply.com/cdn/shop/products/zebra-white-finch-996171_1024x1024.jpg?v=1679640856",
            "https://i.ytimg.com/vi/lWZOwXPWqf4/maxresdefault.jpg"
        ],
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "✨ Beautiful Finches Available Now! Vibrant, cheerful birds raised with care and ready for a loving home.",
        likes: 9320,
        likedBy: [
            { name: "sweet_tooth", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
            { name: "baker_joe", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
            { name: "hungry_always", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "854",
        comments: [
            {
                id: 1,
                author: "sweet_tooth",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Are these croissants as flaky as they look? 😍",
                time: "3d",
                likes: 110,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "baker_joe",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Perfect lamination on those layers!",
                time: "3d",
                likes: 94,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "hungry_always",
                avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "Do you offer delivery or recipes?!",
                time: "4d",
                likes: 41,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-14T14:45:00Z",
        petDetails: {
            petName: "Zebra Finch / Gouldian Finch",
            price: 2000,
            units: "pair",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 45,
            age: "3-5 months",
            healthStatus: "Vaccinated & Active",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "TTDC Courier", amount: 100 },
                { shippingMethod: "Pet Van", amount: 400 }
            ],
            catogerys: {
                qut: "birds",
                subQut: "finch"
            }
        }
    },
    {
        id: 4,
        images: [
            "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-finches/everything-you-need-to-know-about-pet-finches.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BVfF-GWMJ4h5HhuKvPVLIIiq69on2Z9Z8YjMgIfMUdbAyXTiRZsO4-E&s=10"
        ],
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "✨ Beautiful Finches Available Now! Vibrant, cheerful birds raised with care and ready for a loving home.",
        likes: 15400,
        likedBy: [
            { name: "geo_lines", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
            { name: "city_limit", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "3,110",
        comments: [
            {
                id: 1,
                author: "geo_lines",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "The symmetry in the first slide is pure perfection.",
                time: "2d",
                likes: 215,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "city_limit",
                avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Stunning perspective of the Golden Gate!",
                time: "2d",
                likes: 140,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-13T09:20:00Z",
        petDetails: {
            petName: "Society Finch",
            price: 1500,
            units: "pieces",
            basicQuantity: "1 bird",
            minimumOrderQuantity: 2,
            totalStock: 60,
            age: "4 months",
            healthStatus: "Excellent",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 100 },
                { shippingMethod: "TTDC Courier", amount: 100 }
            ],
            catogerys: {
                qut: "birds",
                subQut: "finch"
            }
        }
    },
    {
        id: 5,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRglYIyPoNZTjfl_FMQViKF7A-V8s26pOl8vUgMMyQ4dos0eWVhfEViO0&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9uKlv_YILnGBFJkI3yciaw8xdxqTXbcy7cCEeL5nvkssiU6cqqpElQ0&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGXegFD-bH0nKUBiXZnvyZv3LWpr169QwlR9Htq9A6KrRR4wFvq0E09A&s=10"
        ],
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "🐠 Premium Albino Koi Guppies for Sale! Healthy, vibrant fish with stunning colors and graceful fins, ready for your aquarium.",
        likes: 18900,
        likedBy: [
            { name: "deer_run", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
            { name: "photo_pro", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=crop&w=100&q=80" },
            { name: "forest_dreamer", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "4,203",
        comments: [
            {
                id: 1,
                author: "deer_run",
                avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Incredible detail on the fur! What a majestic creature.",
                time: "3d",
                likes: 310,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "photo_pro",
                avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "The depth of field works beautifully here.",
                time: "4d",
                likes: 188,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "forest_dreamer",
                avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "It looks like a fairytale scene.",
                time: "4d",
                likes: 245,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-12T16:10:00Z",
        petDetails: {
            petName: "Albino Koi Guppy (Trio - 1M 2F)",
            price: 1200,
            units: "trio",
            basicQuantity: "1 Trio",
            minimumOrderQuantity: 1,
            totalStock: 120,
            age: "2.5 months",
            healthStatus: "Quarantined & Stable",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 100 },
                { shippingMethod: "TTDC Courier", amount: 100 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "guppy"
            }
        }
    },
    {
        id: 6,
        images: [
            "https://freshwateraquatica.org/cdn/shop/products/product-jpeg-500x500_37d8c073-878d-4aa7-b5d5-9d609b76002a.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytIaVcSrsX7v9xoicQhnITTWvhnPuAOuuguUhgdEsz5lA592Q2M3TjIHG&s=10"
        ],
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐟 Premium Koi Fish for Sale! Healthy, vibrant koi with stunning colors, perfect for ponds and water gardens.",
        likes: 7230,
        likedBy: [
            { name: "vogue_vibes", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
            { name: "hype_beast", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80" },
            { name: "sky_watcher", avatar: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "612",
        comments: [
            {
                id: 1,
                author: "vogue_vibes",
                avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "That neon yellow coat is an absolute statement piece!",
                time: "5d",
                likes: 92,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "hype_beast",
                avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Clean aesthetic. Love the look.",
                time: "5d",
                likes: 54,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-11T11:05:00Z",
        petDetails: {
            petName: "Imported Japanese Nishikigoi Koi",
            price: 3600,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 35,
            age: "6 months (4-6 inches)",
            healthStatus: "Highly Active",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 450 },
                { shippingMethod: "Professional Courier", amount: 100 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "koi"
            }
        }
    },
    {
        id: 7,
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/1/10/HM_Orange_M_Sarawut.jpg",
            "https://www.aquariumcoop.com/cdn/shop/articles/what-are-the-different-types-of-betta-fish-1396383.jpg"
        ],
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐠 Premium Betta Fish for Sale! Stunning colors, elegant fins, and healthy bettas ready to brighten your aquarium.",
        likes: 11050,
        likedBy: [
            { name: "plant_lady", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" },
            { name: "minimalist_home", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
            { name: "design_addict", avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "1,894",
        comments: [
            {
                id: 1,
                author: "plant_lady",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Where is that side table from? Absolutely gorgeous.",
                time: "6d",
                likes: 124,
                isLiked: false,
                replies: [
                    {
                        id: 101,
                        author: "cozy_spaces",
                        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                        avatarColor: "#f1f5f9",
                        avatarTextColor: "#64748b",
                        text: "@plant_lady Custom made oak! DM me for the carpenter's contact info.",
                        time: "5d",
                        likes: 33,
                        isLiked: false
                    }
                ]
            },
            {
                id: 2,
                author: "minimalist_home",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "This brings so much peace just looking at it.",
                time: "6d",
                likes: 87,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "design_addict",
                avatarUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "The lighting layout is masterclass standard!",
                time: "6d",
                likes: 112,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-10T18:30:00Z",
        petDetails: {
            petName: "Halfmoon Orange Betta (Male)",
            price: 950,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 25,
            age: "3.5 months",
            healthStatus: "Flawless Fins & Active",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 100 },
                { shippingMethod: "TTDC Courier", amount: 100 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "betta"
            }
        }
    },
    {
        id: 8,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwCgBR2alHhOsdIuH-XLLl3EVjTLEXblgcMBAg9SIENdmFtfMWD0OOBs&s=10"
        ],
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐔 Healthy Hens for Sale! Strong, active, and well-cared-for hens ready for your farm or backyard.",
        likes: 6540,
        likedBy: [
            { name: "pace_maker", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
            { name: "mile_high", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80" },
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "419",
        comments: [
            {
                id: 1,
                author: "pace_maker",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Unbelievable view! Keeps you motivated for sure.",
                time: "1w",
                likes: 42,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "mile_high",
                avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "What's the elevation on your route?",
                time: "1w",
                likes: 29,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-09T07:40:00Z",
        petDetails: {
            petName: "Rhode Island Red Layer Hens",
            price: 650,
            units: "pieces",
            basicQuantity: "1 hen",
            minimumOrderQuantity: 3,
            totalStock: 50,
            age: "18 weeks (Point of Lay)",
            healthStatus: "Fully De-wormed & Vaccinated",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "birds",
                subQut: "chicken"
            }
        }
    },
    {
        id: 9,
        images: [
            "https://www.simpsonspremium.com/cdn/shop/articles/persian-cat.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3puTqDj085E6i24WgCtwIyksB6_p4RXEDzLI2tGEFveTOjxkjmZnYDE&s=10"
        ],
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐱 Premium Persian Cats for Sale! Beautiful, fluffy, and loving companions with charming personalities.",
        likes: 14200,
        likedBy: [
            { name: "coral_guard", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
            { name: "sea_glass", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
            { name: "scuba_sam", avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "3,512",
        comments: [
            {
                id: 1,
                author: "coral_guard",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "The clarity of this underwater shot is insane!",
                time: "1w",
                likes: 195,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "sea_glass",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Beautiful colors, thank you for raising awareness.",
                time: "1w",
                likes: 88,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "scuba_sam",
                avatarUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "Which reef was this taken at? Looks stunning.",
                time: "1w",
                likes: 67,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-08T13:55:00Z",
        petDetails: {
            petName: "Doll-Faced White Persian Kitten",
            price: 25000,
            units: "pieces",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 4,
            age: "10 weeks",
            healthStatus: "Vet Checked / Litter Trained",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "cats",
                subQut: "persian"
            }
        }
    },
    {
        id: 10,
        images: [
            "https://www.strathspey-herald.co.uk/_media/img/750x0/BRN4IIBWKJONNY3RK37E.jpg",
            "https://static.vecteezy.com/system/resources/previews/011/374/721/large_2x/portrait-little-white-rabbit-on-the-ground-free-photo.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyMZTuNgxKXRXesmkptdCKKQ6o1dkTdRoE05a22L5mFYka69oOm2Va8o&s=10"
        ],
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "✨ Beautiful Rabbits Available Now! Playful, gentle companions raised with care for loving families.",
        likes: 22800,
        likedBy: [
            { name: "blade_runner", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "synth_wave", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
            { name: "pixel_art", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 3,
        shares: "5,823",
        comments: [
            {
                id: 1,
                author: "blade_runner",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Pure sci-fi atmosphere right here.",
                time: "1w",
                likes: 542,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "synth_wave",
                avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "I can almost hear the synth tracks playing in the background.",
                time: "1w",
                likes: 320,
                isLiked: false,
                replies: []
            },
            {
                id: 3,
                author: "pixel_art",
                avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The rendering on this lighting is hyperrealistic.",
                time: "1w",
                likes: 110,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-07T10:15:00Z",
        petDetails: {
            petName: "Purebred Angora Rabbit",
            price: 4500,
            units: "pieces",
            basicQuantity: "1 rabbit",
            minimumOrderQuantity: 1,
            totalStock: 12,
            age: "3 months",
            healthStatus: "Vaccinated & Active",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 300 }
            ],
            catogerys: {
                qut: "rabbits",
                subQut: "angora"
            }
        }
    },
    {
        id: 11,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_J4JQ3W0iAuERHutwiqQ8t5X-ATCD9mRGUjmjqKFXTKdK6yz-2U6xC1i&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1hz1ALdKa6va1R6U60QlXSQiWZ7A8vGLGaIKVv7vBCtoBaeqGdc4XmRu&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Bcx9z04OEBoDzTPU6NRAfbeN_KkbLUPM7BJIdj0KHEn0TMxy2vtYTFI3&s=10"
        ],
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🐕 Playful Golden Retriever Puppies! Exceptionally intelligent, family-friendly, and looking for their forever homes. 🐾 #puppies #goldenretriever",
        likes: 31200,
        likedBy: [
            { name: "dog_lover", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "pet_world", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "4,910",
        comments: [
            {
                id: 1,
                author: "dog_lover",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Oh my gosh look at that happy face! Do you have females?",
                time: "1d",
                likes: 89,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "pet_world",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Beautiful confirmation standard on these pups.",
                time: "1d",
                likes: 34,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-06T08:45:00Z",
        petDetails: {
            petName: "Golden Retriever Puppies (KCI Registered)",
            price: 28000,
            units: "pieces",
            basicQuantity: "1 puppy",
            minimumOrderQuantity: 1,
            totalStock: 6,
            age: "50 days",
            healthStatus: "De-wormed & First Shot Done",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "dogs",
                subQut: "retriever"
            }
        }
    },
    {
        id: 12,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBQvwVYpJ9xYhQ16iXmqZmkUSuHpXsaNKAxQpiPwllg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAmTqcqrNYiQpsMl1l0uodGhT0SnRUHQ7oI8yrHkNZJn0Bz9Ph3VpzxO6&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecZKujjlimpfvvZ1XXMLoSYkl3NCc7POYHbKwwt716z3KCMk2R9NjGBc&s=10"
        ],
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🐱 Gorgeous Scottish Fold Kittens available. Super affectionate, owl-like appearance, perfectly socialized.",
        likes: 16750,
        likedBy: [
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "1,290",
        comments: [
            {
                id: 1,
                author: "kate_doe",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Those folded ears are everything! absolute perfection.",
                time: "2d",
                likes: 210,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-05T14:20:00Z",
        petDetails: {
            petName: "Scottish Fold Highland Kitten",
            price: 35000,
            units: "pieces",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 3,
            age: "9 weeks",
            healthStatus: "Vaccinated, Certified Healthy",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 500 }
            ],
            catogerys: {
                qut: "cats",
                subQut: "scottish_fold"
            }
        }
    },
    {
        id: 13,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnW-56UQNwG54qBF80yWawhBPAJaQ45uIsfatiIGvIMJAZASCE5sSAnI&s=10",
            "https://media.istockphoto.com/id/172223453/photo/twin-tweeters.jpg?s=612x612&w=0&k=20&c=a2KA7wiBQMkQfZ1o1tou42USgjBOSK-QjSbuBLWhw4A=",
            "https://www.upoharbd.com/images/uploads/Household/Lutino-Cockatiels.jpg"
        ],
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦜 Vibrant Cockatiel Breeding Pairs. Excellent whistlers, healthy feathers, dynamic active behaviors.",
        likes: 9840,
        likedBy: [
            { name: "sky_watcher", avatar: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "740",
        comments: [
            {
                id: 1,
                author: "sky_watcher",
                avatarUrl: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "Are they hand-tamed or aviary raised?",
                time: "3d",
                likes: 12,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-04T11:10:00Z",
        petDetails: {
            petName: "Lutino Cockatiel Pair",
            price: 5500,
            units: "pair",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 5,
            age: "8 months",
            healthStatus: "Active & DNA Tested Pairs",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "TTDC Courier", amount: 150 }
            ],
            catogerys: {
                qut: "birds",
                subQut: "cockatiel"
            }
        }
    },
    {
        id: 14,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZLITe-LVctkFwThleLEoVfVhNgxq3Qw15SZiZXHfLpaZM6noM7OH-uNq&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyya4CHTupM8yCvh9EzupJ7MSU2G9t62onvVrnZuZ80AiE21Z__E34Cow&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCirQ5ZSqXS6ztFRbwqK7qnPa5fmomqimvl4oJJBrW7w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6v4YkKrF7xyn3IX7DEFDznW6aXayyIIDaSjt3MlDMTrik1be_7zVj7Yb&s=10"
        ],
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🐠 High-grade Neon Tetras. Schooling beautifully, intensely luminous red and blue accents.",
        likes: 14300,
        likedBy: [
            { name: "dan_nature", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "2,100",
        comments: [
            {
                id: 1,
                author: "dan_nature",
                avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Nothing beats a clean tank with a massive school of these!",
                time: "5d",
                likes: 48,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-03T16:50:00Z",
        petDetails: {
            petName: "Neon Tetra (Jumbo Size)",
            price: 60,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 10,
            totalStock: 500,
            age: "3 months",
            healthStatus: "Fully Quarantined",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 120 },
                { shippingMethod: "Pet Van", amount: 300 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "tetra"
            }
        }
    },
    {
        id: 15,
        images: [
            "https://cdn11.bigcommerce.com/s-25ghynqpgv/images/stencil/1280w/products/5802/4221/Y564_-_White_Crested_Ducklings__32384.1675376603.jpg?c=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4DxEsnHELWc_AKxJr2-udbCd_sDGVK_nHbx4Lpov--fS2VOwOiwCNf0&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FrUhxCZMGp_BqoLlveJVTrs6vI2iFBjSxm4DN6V6iWrZmWhCNGULYU8A&s=10"
        ],
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦆 Crested Ducklings ready for pastures. Great foragers, high egg yield potential, extremely cute.",
        likes: 8320,
        likedBy: [
            { name: "forest_dreamer", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "910",
        comments: [
            {
                id: 1,
                author: "forest_dreamer",
                avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Look at the little fluff poofs on their heads! 😭❤️",
                time: "1w",
                likes: 92,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-02T09:00:00Z",
        petDetails: {
            petName: "White Crested Ducklings",
            price: 450,
            units: "pieces",
            basicQuantity: "1 duckling",
            minimumOrderQuantity: 4,
            totalStock: 40,
            age: "2 weeks",
            healthStatus: "Healthy & Brooded",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "birds",
                subQut: "duck"
            }
        }
    },
    {
        id: 16,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHyzfRbzXY_Dz8mNrefAYt-ijZJL3cTIF3VmAGhSsmSpFIMHnBokOlVA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrSY3jhY1vpFfyxVBQZp5bMQAuC1rflZXiOOMKqpNUw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDqfoxw9BvfdxWw7SVUdzC1UqZo8XlSzbQalYK1nSkg&s=10"
        ],
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐱 Calico Persian Kittens. Triple coat, punch face traits, show quality potential lines.",
        likes: 19800,
        likedBy: [
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "3,400",
        comments: [
            {
                id: 1,
                author: "kate_doe",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Incredibly plush coat! DM sent.",
                time: "1w",
                likes: 15,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-01T12:30:00Z",
        petDetails: {
            petName: "Calico Punch-Face Persian Kitten",
            price: 22000,
            units: "pieces",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 2,
            age: "11 weeks",
            healthStatus: "De-wormed, Litter Trained",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "cats",
                subQut: "persian"
            }
        }
    },
    {
        id: 17,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmURdVT7TE7OpW1T0nBKI5l8HTHjtaVjClRcm3RjusKQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhw6RwCq0EUHkZT2T1gk5fZiQR_kEqlcImDbQPz3zR69k0cRTOElUtkR2&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpZPVBGAYlnmjmar3sKdMCb3t681rTpNb3hA5L4ojeg&s=10"
        ],
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐕 German Shepherd Puppies. Outstanding drive, strong bone structure, brilliant companion alerts.",
        likes: 24500,
        likedBy: [
            { name: "pace_maker", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "4,120",
        comments: [
            {
                id: 1,
                author: "pace_maker",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Stunning pigments on these working lines.",
                time: "1w",
                likes: 56,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-30T10:00:00Z",
        petDetails: {
            petName: "German Shepherd Puppies (Show Line)",
            price: 32000,
            units: "pieces",
            basicQuantity: "1 puppy",
            minimumOrderQuantity: 1,
            totalStock: 5,
            age: "45 days",
            healthStatus: "Microchipped & De-wormed",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "dogs",
                subQut: "shepherd"
            }
        }
    },
    {
        id: 18,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiygWuyr6XV9YpnH-Xe4eIdogJN5ivHfwY87pYVDuAXIClf_ZA4Ewa0lo&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21VB8do3MWmniwgMeVQZe3TK9-vG5nJbCcIJiyHVAJw&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SLyZxREmSUrgHLWPtsq7n9PYr_e9BRRQAFcjv15gTQ&s=10"],
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐠 African Cichlids. Radiant coloration, aggressive feeding displays, fantastic active dynamics.",
        likes: 6400,
        likedBy: [
            { name: "deep_blue", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "320",
        comments: [
            {
                id: 1,
                author: "deep_blue",
                avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "What specific lake variant are these?",
                time: "2w",
                likes: 8,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-29T15:40:00Z",
        petDetails: {
            petName: "Electric Blue Hap Cichlid",
            price: 850,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 2,
            totalStock: 50,
            age: "5 months",
            healthStatus: "Vibrant & Well Conditioned",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Professional Courier", amount: 100 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "cichlid"
            }
        }
    },
    {
        id: 19,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bzLG8p3KSTKOT_Mwu5WGjgM_xAXHDNetv79JuocH9w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuRH8LT8LU8dZjQLc7RAXmCFAYd8VEM-uCy7eg8cq1w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVEWb_IYM7EGcvDbGQd0HuHEb8RP_EeLrvQNmKyKWIA&s=10"],
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "✨ Compact Netherland Dwarf Rabbits. Stays small, incredibly social, signature tiny erect ears.",
        likes: 18900,
        likedBy: [
            { name: "synth_wave", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "2,400",
        comments: [
            {
                id: 1,
                author: "synth_wave",
                avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Literally looks like a tiny plush toy!",
                time: "2w",
                likes: 114,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-28T11:00:00Z",
        petDetails: {
            petName: "Netherland Dwarf Rabbit (Purebred)",
            price: 6000,
            units: "pieces",
            basicQuantity: "1 rabbit",
            minimumOrderQuantity: 1,
            totalStock: 8,
            age: "2.5 months",
            healthStatus: "Vet Evaluated Healthy",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 250 }
            ],
            catogerys: {
                qut: "rabbits",
                subQut: "dwarf"
            }
        }
    },
    {
        id: 20,
        images: [
            "https://hamsterdb.weebly.com/uploads/1/2/5/3/125314760/black-eyed-white_3_orig.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHtLiRi3tvi7n8DOV5rJbTQ3NWeBn7-Xa0M5l3pPfMQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRswmE7O_BiW41hzI4Ev02boWyZfNm5tZAP7CjLV39xQ&s=10"
        ],
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐹 Active Syrian Hamsters. Beautiful coat colors, comfortable with handling, ideal low maintenance starter companion.",
        likes: 5400,
        likedBy: [
            { name: "hungry_always", avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "560",
        comments: [
            {
                id: 1,
                author: "hungry_always",
                avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "So cute stuffing its cheeks!",
                time: "2w",
                likes: 3,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-27T13:15:00Z",
        petDetails: {
            petName: "Long-Haired Syrian Hamster",
            price: 700,
            units: "pieces",
            basicQuantity: "1 hamster",
            minimumOrderQuantity: 1,
            totalStock: 20,
            age: "6 weeks",
            healthStatus: "Active, Healthy Weaned",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "small_animals",
                subQut: "hamster"
            }
        }
    },
    {
        id: 21,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzllxgoTDT4xBKpb-DZ0eUeZZjHN1WaGFHLB9vlDd4Q&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmOyhcGLBDDRAp5DYkZQ7FxQPWum0BVrHpxYITPgv3w&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ258XI6SmQJj8LAZ0AZop6pY_bmjLt9vv9JvquwusLBg&s=10"
        ],
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🦜 Show-bench Budgerigars. Gorgeous color variations, energetic chirping, beautifully feathered crests.",
        likes: 7120,
        likedBy: [
            { name: "luna_love", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "410",
        comments: [
            {
                id: 1,
                author: "luna_love",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The pastel green color palette on that first pair is magnificent.",
                time: "3w",
                likes: 22,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-26T09:40:00Z",
        petDetails: {
            petName: "Exotic Rainbow Budgies",
            price: 1800,
            units: "pair",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 15,
            age: "4 months",
            healthStatus: "Dewormed & High Energy",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "TTDC Courier", amount: 100 }
            ],
            catogerys: {
                qut: "birds",
                subQut: "budgie"
            }
        }
    },
    {
        id: 22,
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG4AL5nZu0UZ26TbjAWp4-ZJDr7PVBnSQW_ZWjLCYQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hrK8JrACu4ArFU5TF2258G49iYn7jjDDnMkohJ726CQO1ORP2IBs2xg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45HwULF3gx4E9l0OOlyuzzEE57eEybYJWy0K83py0Tg&s=10"],
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐠 Premium Kamfa Flowerhorn Fish. Prominent head kok structure, cross-pearl patterns, outstandingly aggressive.",
        likes: 13900,
        likedBy: [
            { name: "geo_lines", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "1,450",
        comments: [
            {
                id: 1,
                author: "geo_lines",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Look at that pearling structure! Total monster.",
                time: "3w",
                likes: 74,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-25T17:10:00Z",
        petDetails: {
            petName: "Kamfa Flowerhorn (King Grade)",
            price: 15000,
            units: "pieces",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 4,
            age: "7 months",
            healthStatus: "Highly Active & Interactive",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 400 }
            ],
            catogerys: {
                qut: "fish",
                subQut: "flowerhorn"
            }
        }
    },
    {
        id: 23,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5om9VaX0emg_LgfVMOOpv4tuePLWYbME2RClWJFFLg&s=10"],
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐕 Charming Pomeranian Puppies. Pocket-sized teddy bear coats, energetic temperament, perfect companions.",
        likes: 28400,
        likedBy: [
            { name: "sweet_tooth", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "5,190",
        comments: [
            {
                id: 1,
                author: "sweet_tooth",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Can I stop by to see them this weekend?",
                time: "3w",
                likes: 120,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-24T10:30:00Z",
        petDetails: {
            petName: "Toy Pomeranian (Teacup Size)",
            price: 24000,
            units: "pieces",
            basicQuantity: "1 puppy",
            minimumOrderQuantity: 1,
            totalStock: 3,
            age: "60 days",
            healthStatus: "Parvo Vaccinated & De-wormed",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "dogs",
                subQut: "pomeranian"
            }
        }
    },
    {
        id: 24,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pW2OJH5kWmx3lhWNmKQBhDqBySuRjTqk44I3Jm5XGg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj6RsDAu9Yf1WnnGQO_cfRWNC7QiyYuI511_5ruVTgc8UVDNUUi0oZAw&s=10"
        ],
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐱 Rosetted Bengal Kittens. Leopard lookalikes, highly communicative, playful, athletic behaviors.",
        likes: 21900,
        likedBy: [
            { name: "photo_pro", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "3,820",
        comments: [
            {
                id: 1,
                author: "photo_pro",
                avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Incredible rosette symmetry on that pelt.",
                time: "4w",
                likes: 83,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-23T14:00:00Z",
        petDetails: {
            petName: "Brown Spotted Bengal Kitten",
            price: 55000,
            units: "pieces",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 2,
            age: "3 months",
            healthStatus: "Fully Vaccinated, TICA Registered",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "cats",
                subQut: "bengal"
            }
        }
    },
    {
        id: 25,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt5tEHtsqcXMH48WtqLiNVlJEQ9mGSX7xQpv9OvmPQA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcU032zxgDMEaPjXAGCJx0lhSEKwHDLeQRGwas6fqHA&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjQnb-cG9wzOBQwo50HmiHtO8izzGM9WRptH9q15SMQ&s"
        ],
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐔 Premium Silkie Chickens. Cloud-like hair fluff feathering, quiet docile traits, excellent backyard project birds.",
        likes: 9120,
        likedBy: [
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 1,
        shares: "780",
        comments: [
            {
                id: 1,
                author: "travel_bug",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fef7e0",
                avatarTextColor: "#b06000",
                text: "They genuinely look like walking cotton balls!",
                time: "4w",
                likes: 31,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-22T08:15:00Z",
        petDetails: {
            petName: "Show-Grade Bearded Silkie Pair",
            price: 4000,
            units: "pair",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 6,
            age: "5 months",
            healthStatus: "Fully Vaccinated & Active",
            shippingAvailable: false,
            shippingMethods: [],
            catogerys: {
                qut: "birds",
                subQut: "silkie"
            }
        }
    }
];


export const SHORTS_DATA = [
    {
        id: 1,
        videoUrl: "./dumo.mp4",
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "Checking out this incredible aquatic setup today! Sound on 🔊✨ #aquarium #fishkeeper #exoticpets",
        likes: 8900,
        likedBy: [
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "542",
        comments: [
            {
                id: 1,
                author: "travel_bug",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The loop on this video is seamless! What editing software?",
                time: "1h",
                likes: 24,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "dan_nature",
                avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Crystal clear glass. Absolutely stunning.",
                time: "3h",
                likes: 15,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-15T14:20:00Z",
        petDetails: null
    },
    {
        id: 2,
        videoUrl: "./dumo2.mp4",
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "✨ Active & Playful Rabbits Ready for a Loving Home! Snatch them up before they hop away 🐰💨",
        likes: 31200,
        likedBy: [
            { name: "blade_runner", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "pixel_art", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "9,140",
        comments: [
            {
                id: 1,
                author: "blade_runner",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Look at those floppy ears! So adorable.",
                time: "5h",
                likes: 184,
                isLiked: false,
                replies: [
                    {
                        id: 101,
                        author: "neo_tokyo",
                        avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
                        avatarColor: "#e8f0fe",
                        avatarTextColor: "#1a73e8",
                        text: "@blade_runner They are even softer in person! 😄",
                        time: "4h",
                        likes: 42,
                        isLiked: false
                    }
                ]
            },
            {
                id: 2,
                author: "synth_wave",
                avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Do you ship out of state or only local pickup?",
                time: "1d",
                likes: 67,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-15T08:05:00Z",
        petDetails: {
            petName: "Purebred Angora / Netherland Dwarf Rabbit",
            price: 65.00,
            currency: "USD",
            basicQuantity: "1 rabbit",
            minimumOrderQuantity: 1,
            totalStock: 12,
            age: "2 months",
            healthStatus: "Healthy & Well Socialized",
            shippingAvailable: true
        }
    },
    {
        id: 3,
        videoUrl: "./dumo3.mp4",
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "🐠 Brighten up your workspace standard! Premium Halfmoon Bettas boasting majestic fins now ready for purchase.",
        likes: 14200,
        likedBy: [
            { name: "plant_lady", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" },
            { name: "design_addict", avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,311",
        comments: [
            {
                id: 1,
                author: "plant_lady",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The contrast between the fish and the dark background is mesmerizing.",
                time: "2d",
                likes: 98,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "minimalist_home",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Wow, it looks like liquid fire moving around!",
                time: "2d",
                likes: 72,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-14T19:40:00Z",
        petDetails: {
            petName: "Halfmoon Orange Betta (Male)",
            price: 12.99,
            currency: "USD",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 25,
            age: "3.5 months",
            healthStatus: "Flawless Fins & Active",
            shippingAvailable: true
        }
    },
    {
        id: 4,
        videoUrl: "./dumo4.mp4",
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "✨ Vibrant, cheerful Finches singing beautifully! Perfect additions to any home aviary. 🐦🎶",
        likes: 9320,
        likedBy: [
            { name: "sweet_tooth", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
            { name: "baker_joe", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "854",
        comments: [
            {
                id: 1,
                author: "sweet_tooth",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Their chirping is so therapeutic! Do they arrive paired up?",
                time: "3d",
                likes: 41,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "baker_joe",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Incredible macro quality on the feathers.",
                time: "3d",
                likes: 19,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-14T11:15:00Z",
        petDetails: {
            petName: "Zebra Finch / Gouldian Finch",
            price: 25.00,
            currency: "USD",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 45,
            age: "3-5 months",
            healthStatus: "Vaccinated & Active",
            shippingAvailable: true
        }
    },
    {
        id: 5,
        videoUrl: "https://www.pexels.com/download/video/5544231/",
        breeder_id: 1,
        username: "@Pet_Zoon",
        userTitle: "PetZoon",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        description: "🐠 Premium Albino Koi Guppies showing off their flowing tails. High-grade strains available! #guppies #aquascaping",
        likes: 18900,
        likedBy: [
            { name: "deer_run", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
            { name: "photo_pro", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "4,203",
        comments: [
            {
                id: 1,
                author: "photo_pro",
                avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "The red heads and white bodies look fantastic under that light.",
                time: "4d",
                likes: 88,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "forest_dreamer",
                avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Stunning active dynamic trio! Order placed.",
                time: "4d",
                likes: 35,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-13T16:10:00Z",
        petDetails: {
            petName: "Albino Koi Guppy (Trio - 1M 2F)",
            price: 15.00,
            currency: "USD",
            basicQuantity: "1 Trio",
            minimumOrderQuantity: 1,
            totalStock: 120,
            age: "2.5 months",
            healthStatus: "Quarantined & Stable",
            shippingAvailable: true
        }
    },
    {
        id: 6,
        videoUrl: "https://www.pexels.com/download/video/37685390/",
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐟 Imported Japanese Nishikigoi Koi gliding gracefully. Transform your pond today! #koipond #zengarden",
        likes: 7230,
        likedBy: [
            { name: "vogue_vibes", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
            { name: "hype_beast", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "612",
        comments: [
            {
                id: 1,
                author: "vogue_vibes",
                avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The patterns on the Kohaku are perfectly symmetric.",
                time: "5d",
                likes: 42,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "hype_beast",
                avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Incredible water movement capture.",
                time: "5d",
                likes: 14,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-13T09:45:00Z",
        petDetails: {
            petName: "Imported Japanese Nishikigoi Koi",
            price: 45.00,
            currency: "USD",
            basicQuantity: "1 fish",
            minimumOrderQuantity: 1,
            totalStock: 35,
            age: "6 months (4-6 inches)",
            healthStatus: "Highly Active",
            shippingAvailable: true
        }
    },
    {
        id: 7,
        videoUrl: "https://www.pexels.com/download/video/35147318/",
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐔 High productivity egg layers right here! Healthy Point of Lay hens ready for homesteading. #backyardchickens",
        likes: 6540,
        likedBy: [
            { name: "pace_maker", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
            { name: "mile_high", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "419",
        comments: [
            {
                id: 1,
                author: "pace_maker",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Super healthy looking flock! Free range raised?",
                time: "1w",
                likes: 22,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "mile_high",
                avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Need to grab a trio of these for my setup next week.",
                time: "1w",
                likes: 9,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-12T07:40:00Z",
        petDetails: {
            petName: "Rhode Island Red Layer Hens",
            price: 22.00,
            currency: "USD",
            basicQuantity: "1 hen",
            minimumOrderQuantity: 3,
            totalStock: 50,
            age: "18 weeks (Point of Lay)",
            healthStatus: "Fully De-wormed & Vaccinated",
            shippingAvailable: false
        }
    },
    {
        id: 8,
        videoUrl: "https://www.pexels.com/download/video/36093643/",
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐱 Doll-faced White Persian Kittens playing around. Completely litter trained and super affectionate! 🤍",
        likes: 14200,
        likedBy: [
            { name: "coral_guard", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
            { name: "sea_glass", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "3,512",
        comments: [
            {
                id: 1,
                author: "coral_guard",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Oh my goodness, literal walking clouds! ☁️",
                time: "1w",
                likes: 112,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "sea_glass",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Are parents PKD tested negative?",
                time: "1w",
                likes: 45,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-11T13:55:00Z",
        petDetails: {
            petName: "Doll-Faced White Persian Kitten",
            price: 450.00,
            currency: "USD",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 4,
            age: "10 weeks",
            healthStatus: "Vet Checked / Litter Trained",
            shippingAvailable: false
        }
    },
    {
        id: 9,
        videoUrl: "https://www.pexels.com/download/video/17325162/",
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🐹 Fluffy Winter White Dwarf Hamsters having their lunch break! Tiny, energetic, and completely adorable. #pocketpets",
        likes: 12400,
        likedBy: [
            { name: "geo_lines", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
            { name: "city_limit", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "1,200",
        comments: [
            {
                id: 1,
                author: "geo_lines",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Look at those stuffed cheeks! So funny.",
                time: "3d",
                likes: 56,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "city_limit",
                avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Do you supply the starter cage setup too?",
                time: "4d",
                likes: 12,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-11T10:10:00Z",
        petDetails: {
            petName: "Winter White Dwarf Hamster",
            price: 12.00,
            currency: "USD",
            basicQuantity: "1 hamster",
            minimumOrderQuantity: 1,
            totalStock: 30,
            age: "1.5 months",
            healthStatus: "Healthy & Tamable",
            shippingAvailable: true
        }
    },
    {
        id: 10,
        videoUrl: "https://www.pexels.com/download/video/34663989/",
        breeder_id: 2,
        username: "@anjali_aquatics",
        userTitle: "Anjali Raj",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        description: "🦎 Captive Bred Veiled Chameleons displaying beautiful natural shades. Perfect choice for reptile hobbyists!",
        likes: 21500,
        likedBy: [
            { name: "vtec_kickin", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,400",
        comments: [
            {
                id: 1,
                author: "vtec_kickin",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "That focal shift in the camera track is amazing. Clean reptile setup!",
                time: "1d",
                likes: 84,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "boosted_life",
                avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Stunning colors on that specimen.",
                time: "2d",
                likes: 31,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-10T22:30:00Z",
        petDetails: {
            petName: "Veiled Chameleon (Juvenile)",
            price: 85.00,
            currency: "USD",
            basicQuantity: "1 reptile",
            minimumOrderQuantity: 1,
            totalStock: 15,
            age: "3 months",
            healthStatus: "Exotic Vet Verified",
            shippingAvailable: true
        }
    },
    {
        id: 11,
        videoUrl: "https://www.pexels.com/download/video/37649670/",
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦜 Highly intelligent hand-reared Scarlet Macaws! Hand-fed from birth and ready for lifelong companions. 🌟",
        likes: 45000,
        likedBy: [
            { name: "photo_pro", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" },
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "15,820",
        comments: [
            {
                id: 1,
                author: "photo_pro",
                avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "The red, yellow, and blue saturation looks surreal! Perfect capture.",
                time: "1w",
                likes: 512,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "avian_lover",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Do they come with CITES registration papers?",
                time: "1w",
                likes: 290,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-09T18:00:00Z",
        petDetails: {
            petName: "Hand-Reared Scarlet Macaw",
            price: 1800.00,
            currency: "USD",
            basicQuantity: "1 parrot",
            minimumOrderQuantity: 1,
            totalStock: 3,
            age: "5 months",
            healthStatus: "DNA Sexed / Fully Weaned",
            shippingAvailable: false
        }
    },
    {
        id: 12,
        videoUrl: "https://www.pexels.com/download/video/12715060/",
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🐶 Purebred French Bulldog puppies running around! Microchipped, dewormed, and AKC registered. 🐾",
        likes: 38900,
        likedBy: [
            { name: "minimalist_home", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
            { name: "plant_lady", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "12,400",
        comments: [
            {
                id: 1,
                author: "minimalist_home",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "I am melting! The little zoomies are too cute.",
                time: "4d",
                likes: 210,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "doggo_fan",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Are any fawn colors left in this litter?",
                time: "5d",
                likes: 64,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-08T15:30:00Z",
        petDetails: {
            petName: "AKC French Bulldog Puppy",
            price: 2200.00,
            currency: "USD",
            basicQuantity: "1 puppy",
            minimumOrderQuantity: 1,
            totalStock: 5,
            age: "9 weeks",
            healthStatus: "Up to date on shots / Microchipped",
            shippingAvailable: false
        }
    },
    {
        id: 13,
        videoUrl: "https://www.pexels.com/download/video/3912656/",
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦐 High-grade Fire Red Cherry Shrimp clearing out algae lines seamlessly! Great for nano tanks. #shrimptank",
        likes: 5400,
        likedBy: [
            { name: "coral_guard", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "320",
        comments: [
            {
                id: 1,
                author: "coral_guard",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Excellent grading! They look deep crimson red.",
                time: "6d",
                likes: 18,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "aqua_hobby",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Will they survive alongside peaceful community fish?",
                time: "1w",
                likes: 7,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-07T12:00:00Z",
        petDetails: {
            petName: "Fire Red Cherry Shrimp",
            price: 3.50,
            currency: "USD",
            basicQuantity: "1 pack of 10",
            minimumOrderQuantity: 1,
            totalStock: 250,
            age: "Juvenile to Sub-adult",
            healthStatus: "Algae Eating Machines",
            shippingAvailable: true
        }
    },
    {
        id: 14,
        videoUrl: "https://www.pexels.com/download/video/12715038/",
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦦 Crazy energetic Marshall Ferrets having absolute fun in the tunnel system! Incredibly goofy pets.",
        likes: 16700,
        likedBy: [
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "dan_nature", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,980",
        comments: [
            {
                id: 1,
                author: "travel_bug",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "The classic dook-dook dance! Ferrets are awesome.",
                time: "1w",
                likes: 92,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "ferret_world",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Are they descented and neutered already?",
                time: "1w",
                likes: 41,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-06T19:15:00Z",
        petDetails: {
            petName: "Marshall Ferret (Spayed & Desented)",
            price: 249.99,
            currency: "USD",
            basicQuantity: "1 ferret",
            minimumOrderQuantity: 1,
            totalStock: 8,
            age: "3 months",
            healthStatus: "Fully Vaccinated",
            shippingAvailable: false
        }
    },
    {
        id: 15,
        videoUrl: "https://www.pexels.com/download/video/9026085/",
        breeder_id: 3,
        username: "@rahul_guppy",
        userTitle: "Rahul Varma ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        description: "🦎 Check out this amazing Crested Gecko eye lick macro! Highly interactive and peaceful reptiles. 🍓",
        likes: 28900,
        likedBy: [
            { name: "blade_runner", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "synth_wave", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "6,120",
        comments: [
            {
                id: 1,
                author: "blade_runner",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Nature's design is otherworldly. Exceptional framing.",
                time: "1w",
                likes: 184,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "scale_fanatic",
                avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Eating Pangea or live insects?",
                time: "1w",
                likes: 38,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-06T10:40:00Z",
        petDetails: {
            petName: "Flame Morph Crested Gecko",
            price: 75.00,
            currency: "USD",
            basicQuantity: "1 gecko",
            minimumOrderQuantity: 1,
            totalStock: 14,
            age: "4 months",
            healthStatus: "Excellent / Tail intact",
            shippingAvailable: true
        }
    },
    {
        id: 16,
        videoUrl: "https://www.pexels.com/download/video/35325398/",
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "✨ Sweet hand-fed Cockatiels whistling cute custom tunes! Super interactive house companions. 🐥💛",
        likes: 11200,
        likedBy: [
            { name: "sweet_tooth", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
            { name: "baker_joe", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "1,140",
        comments: [
            {
                id: 1,
                author: "sweet_tooth",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "The little red cheeks are so sweet! 🥺",
                time: "2w",
                likes: 54,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "baker_joe",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Are they step-up trained yet?",
                time: "2w",
                likes: 19,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-05T14:50:00Z",
        petDetails: {
            petName: "Lutino Cockatiel (Hand-Fed)",
            price: 150.00,
            currency: "USD",
            basicQuantity: "1 bird",
            minimumOrderQuantity: 1,
            totalStock: 9,
            age: "3.5 months",
            healthStatus: "Fully Weaned & Socialized",
            shippingAvailable: true
        }
    },
    {
        id: 17,
        videoUrl: "https://www.pexels.com/download/video/35378358/",
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐟 Leucistic Axolotls floating around peacefully. The ultimate aquatic desk companion! 🌌 #axolotl",
        likes: 19800,
        likedBy: [
            { name: "hype_beast", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80" },
            { name: "vogue_vibes", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "7,840",
        comments: [
            {
                id: 1,
                author: "hype_beast",
                avatarUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Literal real-life Pokémon vibes right here.",
                time: "2w",
                likes: 310,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "water_keeper",
                avatarUrl: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "What water temperature do you hold them at?",
                time: "2w",
                likes: 72,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-04T16:20:00Z",
        petDetails: {
            petName: "Leucistic Axolotl (Pink Gills)",
            price: 45.00,
            currency: "USD",
            basicQuantity: "1 amphibian",
            minimumOrderQuantity: 1,
            totalStock: 18,
            age: "3 months (4 inches)",
            healthStatus: "Healthy & Regrowing gills nicely",
            shippingAvailable: true
        }
    },
    {
        id: 18,
        videoUrl: "https://www.pexels.com/download/video/11103259/",
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐱 Playful Calico kittens up for adoption! Vocal, spunky, and fully house trained. 🐾🧡🖤",
        likes: 15400,
        likedBy: [
            { name: "pace_maker", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
            { name: "mile_high", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,110",
        comments: [
            {
                id: 1,
                author: "pace_maker",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "The little squeaky meow! Subscribing immediately.",
                time: "2w",
                likes: 88,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "cat_collector",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Are vaccinations completed for first round?",
                time: "3w",
                likes: 24,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-03T09:10:00Z",
        petDetails: {
            petName: "Domestic Calico Kitten",
            price: 50.00,
            currency: "USD",
            basicQuantity: "1 kitten",
            minimumOrderQuantity: 1,
            totalStock: 3,
            age: "8 weeks",
            healthStatus: "Dewormed / Vet Certified",
            shippingAvailable: false
        }
    },
    {
        id: 19,
        videoUrl: "https://www.pexels.com/download/video/27778266/",
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐚 Active Purple Pincher Hermit Crabs changing out shells! Easy low maintenance desk pets. 🏖️",
        likes: 4200,
        likedBy: [
            { name: "geo_lines", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "184",
        comments: [
            {
                id: 1,
                author: "geo_lines",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "The macro texture on the beach sand looks amazing.",
                time: "3w",
                likes: 12,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "beach_comber",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "Do you supply extra larger growth shells?",
                time: "3w",
                likes: 4,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-02T13:45:00Z",
        petDetails: {
            petName: "Purple Pincher Hermit Crab",
            price: 8.50,
            currency: "USD",
            basicQuantity: "1 crab",
            minimumOrderQuantity: 2,
            totalStock: 80,
            age: "Sub-adult",
            healthStatus: "Highly Active",
            shippingAvailable: true
        }
    },
    {
        id: 20,
        videoUrl: "https://www.pexels.com/download/video/5930448/",
        breeder_id: 4,
        username: "@suresh_gold ",
        userTitle: "Suresh Babu",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        description: "🐍 High-expression Banana Morph Ball Pythons sliding around. Docile temperaments guaranteed! 🍌",
        likes: 17300,
        likedBy: [
            { name: "vtec_kickin", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "2,140",
        comments: [
            {
                id: 1,
                author: "vtec_kickin",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Those pastel yellow freckles are outstanding!",
                time: "3w",
                likes: 74,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "python_palace",
                avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Taking frozen-thawed rodents easily?",
                time: "3w",
                likes: 31,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-01T21:00:00Z",
        petDetails: {
            petName: "Banana Morph Ball Python",
            price: 180.00,
            currency: "USD",
            basicQuantity: "1 snake",
            minimumOrderQuantity: 1,
            totalStock: 6,
            age: "2 months",
            healthStatus: "Established Feeder",
            shippingAvailable: true
        }
    },
    {
        id: 21,
        videoUrl: "https://www.pexels.com/download/video/15870616/",
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐶 Pembroke Welsh Corgi puppies showing off their short legs! Incredibly energetic and friendly. 🍞✨",
        likes: 41200,
        likedBy: [
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
            { name: "kate_doe", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "14,890",
        comments: [
            {
                id: 1,
                author: "travel_bug",
                avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "A literal walking loaf of bread! Absolutely perfect.",
                time: "4w",
                likes: 412,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "corgi_club",
                avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "DM sent regarding shipping details!",
                time: "4w",
                likes: 83,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-30T15:20:00Z",
        petDetails: {
            petName: "Pembroke Welsh Corgi Puppy",
            price: 1500.00,
            currency: "USD",
            basicQuantity: "1 puppy",
            minimumOrderQuantity: 1,
            totalStock: 4,
            age: "10 weeks",
            healthStatus: "DM Clear / First Shots Completed",
            shippingAvailable: false
        }
    },
    {
        id: 22,
        videoUrl: "https://www.pexels.com/download/video/29336604/",
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "✨ High-flier Indian Fantail Pigeons strutting their elegant feather structures. Absolutely beautiful structures. 🕊️",
        likes: 8100,
        likedBy: [
            { name: "sweet_tooth", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "712",
        comments: [
            {
                id: 1,
                author: "sweet_tooth",
                avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "They look like they are wearing dresses! Gorgeous.",
                time: "4w",
                likes: 34,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "pigeon_post",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "Are these pure self-black strains available?",
                time: "4w",
                likes: 12,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-29T11:45:00Z",
        petDetails: {
            petName: "Indian Fantail Pigeon (Black Self)",
            price: 40.00,
            currency: "USD",
            basicQuantity: "1 pair",
            minimumOrderQuantity: 1,
            totalStock: 16,
            age: "6 months",
            healthStatus: "Healthy & Active",
            shippingAvailable: true
        }
    },
    {
        id: 23,
        videoUrl: "https://www.pexels.com/download/video/36404697/",
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐢 Red Eared Slider Turtles paddling around their basking docks. Highly active dynamic setups! ☀️",
        likes: 6200,
        likedBy: [
            { name: "coral_guard", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "480",
        comments: [
            {
                id: 1,
                author: "coral_guard",
                avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Excellent water filtration setup shown here.",
                time: "1M",
                likes: 23,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "turtle_time",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "What size tank do they need starting out?",
                time: "1M",
                likes: 9,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-28T14:30:00Z",
        petDetails: {
            petName: "Red Eared Slider Turtle",
            price: 15.00,
            currency: "USD",
            basicQuantity: "1 turtle",
            minimumOrderQuantity: 1,
            totalStock: 40,
            age: "2 months",
            healthStatus: "Vibrant / Shell completely healthy",
            shippingAvailable: true
        }
    },
    {
        id: 24,
        videoUrl: "https://www.pexels.com/download/video/34657868/",
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "✨ Watch this sugar glider pull off a perfect launch to hand leap! Hand-reared joeys looking for homes. 🌌",
        likes: 34500,
        likedBy: [
            { name: "photo_pro", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80" },
            { name: "travel_bug", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "8,920",
        comments: [
            {
                id: 1,
                author: "photo_pro",
                avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#f1f5f9",
                avatarTextColor: "#64748b",
                text: "The slow motion framing capturing the membrane stretch is stellar!",
                time: "1M",
                likes: 198,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "pocket_glides",
                avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e6f4ea",
                avatarTextColor: "#10ac84",
                text: "Are they fully bonded to humans yet?",
                time: "1M",
                likes: 67,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-27T18:05:00Z",
        petDetails: {
            petName: "Classic Grey Sugar Glider (Joey)",
            price: 200.00,
            currency: "USD",
            basicQuantity: "1 joey",
            minimumOrderQuantity: 2,
            totalStock: 10,
            age: "9 weeks out of pouch",
            healthStatus: "Hand-raised & Extremely sweet",
            shippingAvailable: false
        }
    },
    {
        id: 25,
        videoUrl: "https://www.pexels.com/download/video/37697636/",
        breeder_id: 5,
        username: "@deepa_betta ",
        userTitle: "Deepa Menon ",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        description: "🐭 Pure bliss! Ultra-soft Standard Grey Chinchillas enjoying their morning chin scratches. 🐭☁️",
        likes: 27100,
        likedBy: [
            { name: "minimalist_home", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
            { name: "plant_lady", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" }
        ],
        commentsCount: 2,
        shares: "5,340",
        comments: [
            {
                id: 1,
                author: "minimalist_home",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#fce8e6",
                avatarTextColor: "#d93025",
                text: "They look so unbelievably soft. Like living velvet!",
                time: "1M",
                likes: 143,
                isLiked: false,
                replies: []
            },
            {
                id: 2,
                author: "chinchilla_co",
                avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                avatarColor: "#e8f0fe",
                avatarTextColor: "#1a73e8",
                text: "Do they take dust baths actively in this video?",
                time: "1M",
                likes: 49,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-06-26T10:15:00Z",
        petDetails: {
            petName: "Standard Grey Chinchilla",
            price: 150.00,
            currency: "USD",
            basicQuantity: "1 chinchilla",
            minimumOrderQuantity: 1,
            totalStock: 6,
            age: "4 months",
            healthStatus: "Healthy coat & highly responsive",
            shippingAvailable: true
        }
    }
];



export const Breeders = [
    {
        id: 1,
        name: "PetZoon",
        userName: "@Pet_Zoon",
        email: "shibil@example.com",
        password: "12345678",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqCAJVtteQ2zz0BcHY8ogP9QCjz2nxQPzYbxIqGlJQGfG3vTBQdWc05E&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9yL1jFYy6DbDelFyXIdXQ2zigrLI00t9qbadbW9Hf4W6DtnYv3yeBM0&s=10",
        location: "Malappuram, Kerala",
        categories: ["Koi Fish", "Betta Fish", "Guppy"],
        experience: "5 Years",
        verified: true,
        rating: 4.9,
        bio: "Passionate ornamental fish breeder.",
        description: "Passionate ornamental fish breeder specializing in vibrant Japanese Koi strains and high-quality Bettas for hobbyists across Kerala.",
        counts: { followers: 3, following: 2, posts: 2 },
        followers: [
            { id: 1, name: 'Maryam Amiri', userName: 'maryam_amiri', userAvatar: 'https://i.pravatar.cc/150?u=maryam', role: 'user' },
            { id: 2, name: 'Hossein Shams', userName: 'h_shams', userAvatar: 'https://i.pravatar.cc/150?u=hossein', role: 'user' },
            { id: 3, name: 'Sarah Conner', userName: 'sconner', userAvatar: '', role: 'user' },
            { id: 4, name: 'Frank Camly', userName: 'frank_c', userAvatar: 'https://i.pravatar.cc/150?u=frank', role: 'user' },
            { id: 5, name: 'Freddie Arendes', userName: 'fred_mkt', userAvatar: 'https://i.pravatar.cc/150?u=freddie', role: 'user' },
            { id: 6, name: 'Gary Camara', userName: 'gary_cam', userAvatar: 'https://i.pravatar.cc/150?u=gary', role: 'user' },
            { id: 7, name: 'Tim Hank', userName: 'timmy_h', userAvatar: '', role: 'user' },
            { id: 8, name: 'Fidel Tonn', userName: 'fidel_t', userAvatar: 'https://i.pravatar.cc/150?u=fidel', role: 'user' },
            { id: 9, name: 'Emma Watson', userName: 'emma_w', userAvatar: 'https://i.pravatar.cc/150?u=emma', role: 'user' },
            { id: 10, name: 'Liam Neeson', userName: 'liam_n', userAvatar: '', role: 'user' },
            { id: 11, name: 'Olivia Thirlby', userName: 'olivia_t', userAvatar: 'https://i.pravatar.cc/150?u=olivia', role: 'user' },
            { id: 12, name: 'Noah Centineo', userName: 'noah_c', userAvatar: 'https://i.pravatar.cc/150?u=noah', role: 'user' },
            { id: 13, name: 'Ava DuVernay', userName: 'ava_d', userAvatar: 'https://i.pravatar.cc/150?u=ava', role: 'user' },
            { id: 14, name: 'Oliver Twist', userName: 'oliver_t', userAvatar: '', role: 'user' },
            { id: 15, name: 'Sophia Loren', userName: 'sophia_l', userAvatar: 'https://i.pravatar.cc/150?u=sophia', role: 'user' },
            { id: 16, name: 'Elijah Wood', userName: 'elijah_w', userAvatar: 'https://i.pravatar.cc/150?u=elijah', role: 'user' },
            { id: 17, name: 'Isabella Rossellini', userName: 'isabella_r', userAvatar: 'https://i.pravatar.cc/150?u=isabella', role: 'user' },
            { id: 18, name: 'James Bond', userName: 'james_b', userAvatar: '', role: 'user' },
            { id: 19, name: 'Mia Farrow', userName: 'mia_f', userAvatar: 'https://i.pravatar.cc/150?u=mia', role: 'user' },
            { id: 20, name: 'Benjamin Franklin', userName: 'ben_f', userAvatar: 'https://i.pravatar.cc/150?u=ben', role: 'user' },
            { id: 21, name: 'Charlotte Bronte', userName: 'charlotte_b', userAvatar: 'https://i.pravatar.cc/150?u=charlotte', role: 'user' },
            { id: 22, name: 'Lucas Hedges', userName: 'lucas_h', userAvatar: '', role: 'user' },
            { id: 23, name: 'Amelia Earhart', userName: 'amelia_e', userAvatar: 'https://i.pravatar.cc/150?u=amelia', role: 'user' },
            { id: 24, name: 'Mason Mount', userName: 'mason_m', userAvatar: 'https://i.pravatar.cc/150?u=mason', role: 'user' },
            { id: 25, name: 'Harper Lee', userName: 'harper_l', userAvatar: 'https://i.pravatar.cc/150?u=harper', role: 'user' },
            { id: 26, name: 'Ethan Hawke', userName: 'ethan_h', userAvatar: '', role: 'user' },
            { id: 27, name: 'Evelyn Waugh', userName: 'evelyn_w', userAvatar: 'https://i.pravatar.cc/150?u=evelyn', role: 'user' },
            { id: 28, name: 'Logan Paul', userName: 'logan_p', userAvatar: 'https://i.pravatar.cc/150?u=logan', role: 'user' },
            { id: 29, name: 'Abigail Breslin', userName: 'abigail_b', userAvatar: 'https://i.pravatar.cc/150?u=abigail', role: 'user' },
            { id: 30, name: 'Alexander Great', userName: 'alex_g', userAvatar: '', role: 'user' },
            { id: 31, name: 'Emily Blunt', userName: 'emily_b', userAvatar: 'https://i.pravatar.cc/150?u=emily', role: 'user' },
            { id: 32, name: 'Michael Jordan', userName: 'mj_23', userAvatar: 'https://i.pravatar.cc/150?u=mj', role: 'user' },
            { id: 33, name: 'Elizabeth Taylor', userName: 'liz_t', userAvatar: 'https://i.pravatar.cc/150?u=liz', role: 'user' },
            { id: 34, name: 'Daniel Craig', userName: 'daniel_c', userAvatar: '', role: 'user' },
            { id: 35, name: 'Sofia Vergara', userName: 'sofia_v', userAvatar: 'https://i.pravatar.cc/150?u=sofia', role: 'user' },
            { id: 36, name: 'Henry Cavill', userName: 'henry_c', userAvatar: 'https://i.pravatar.cc/150?u=henry', role: 'user' },
            { id: 37, name: 'Avery Jackson', userName: 'avery_j', userAvatar: 'https://i.pravatar.cc/150?u=avery', role: 'user' },
            { id: 38, name: 'Jackson Pollock', userName: 'jackson_p', userAvatar: '', role: 'user' },
            { id: 39, name: 'Scarlett Johansson', userName: 'scarlett_j', userAvatar: 'https://i.pravatar.cc/150?u=scarlett', role: 'user' },
            { id: 40, name: 'Sebastian Stan', userName: 'sebastian_s', userAvatar: 'https://i.pravatar.cc/150?u=sebastian', role: 'user' },
            { id: 41, name: 'Madison Beer', userName: 'madison_b', userAvatar: 'https://i.pravatar.cc/150?u=madison', role: 'user' },
            { id: 42, name: 'Matthew Perry', userName: 'matthew_p', userAvatar: '', role: 'user' },
            { id: 43, name: 'Layla Ali', userName: 'layla_a', userAvatar: 'https://i.pravatar.cc/150?u=layla', role: 'user' },
            { id: 44, name: 'Samuel Jackson', userName: 'sam_j', userAvatar: 'https://i.pravatar.cc/150?u=sam', role: 'user' },
            { id: 45, name: 'Chloe Grace', userName: 'chloe_g', userAvatar: 'https://i.pravatar.cc/150?u=chloe', role: 'user' },
            { id: 46, name: 'David Beckham', userName: 'david_b', userAvatar: '', role: 'user' },
            { id: 47, name: 'Victoria Beckham', userName: 'vic_b', userAvatar: 'https://i.pravatar.cc/150?u=victoria', role: 'user' },
            { id: 48, name: 'Joseph Gordon', userName: 'joseph_g', userAvatar: 'https://i.pravatar.cc/150?u=joseph', role: 'user' },
            { id: 49, name: 'Grace Kelly', userName: 'grace_k', userAvatar: 'https://i.pravatar.cc/150?u=grace', role: 'user' },
            { id: 50, name: 'Carter Bland', userName: 'carter_b', userAvatar: '', role: 'user' },
            { id: 51, name: 'Riley Reid', userName: 'riley_r', userAvatar: 'https://i.pravatar.cc/150?u=riley', role: 'user' },
            { id: 52, name: 'Owen Wilson', userName: 'owen_w', userAvatar: 'https://i.pravatar.cc/150?u=owen', role: 'user' },
            { id: 53, name: 'Zoey Deutch', userName: 'zoey_d', userAvatar: 'https://i.pravatar.cc/150?u=zoey', role: 'user' },
            { id: 54, name: 'Wyatt Russell', userName: 'wyatt_r', userAvatar: '', role: 'user' },
            { id: 55, name: 'Lily Collins', userName: 'lily_c', userAvatar: 'https://i.pravatar.cc/150?u=lily', role: 'user' },
            { id: 56, name: 'John Doe', userName: 'john_d', userAvatar: 'https://i.pravatar.cc/150?u=john', role: 'user' },
            { id: 57, name: 'Jane Doe', userName: 'jane_d', userAvatar: 'https://i.pravatar.cc/150?u=jane', role: 'user' },
            { id: 58, name: 'Luke Skywalker', userName: 'luke_s', userAvatar: '', role: 'user' },
            { id: 59, name: 'Hannah Baker', userName: 'hannah_b', userAvatar: 'https://i.pravatar.cc/150?u=hannah', role: 'user' },
            { id: 60, name: 'Dylan Minnette', userName: 'dylan_m', userAvatar: 'https://i.pravatar.cc/150?u=dylan', role: 'user' },
            { id: 61, name: 'Addison Rae', userName: 'addison_r', userAvatar: 'https://i.pravatar.cc/150?u=addison', role: 'user' },
            { id: 62, name: 'Gabriel Machado', userName: 'gabriel_m', userAvatar: '', role: 'user' },
            { id: 63, name: 'Natalie Portman', userName: 'natalie_p', userAvatar: 'https://i.pravatar.cc/150?u=natalie', role: 'user' },
            { id: 64, name: 'Julian Alvarez', userName: 'julian_a', userAvatar: 'https://i.pravatar.cc/150?u=julian', role: 'user' },
            { id: 65, name: 'Stella Maxwell', userName: 'stella_m', userAvatar: 'https://i.pravatar.cc/150?u=stella', role: 'user' },
            { id: 66, name: 'Ryan Reynolds', userName: 'ryan_r', userAvatar: '', role: 'user' },
            { id: 67, name: 'Zendaya Coleman', userName: 'zendaya', userAvatar: 'https://i.pravatar.cc/150?u=zendaya', role: 'user' },
            { id: 68, name: 'Tom Holland', userName: 'tom_h', userAvatar: 'https://i.pravatar.cc/150?u=tom', role: 'user' },
            { id: 69, name: 'Bella Hadid', userName: 'bella_h', userAvatar: 'https://i.pravatar.cc/150?u=bella', role: 'user' },
            { id: 70, name: 'Gigi Hadid', userName: 'gigi_h', userAvatar: '', role: 'user' },
            { id: 71, name: 'Kendall Jenner', userName: 'kendall_j', userAvatar: 'https://i.pravatar.cc/150?u=kendall', role: 'user' },
            { id: 72, name: 'Kylie Jenner', userName: 'kylie_j', userAvatar: 'https://i.pravatar.cc/150?u=kylie', role: 'user' },
            { id: 73, name: 'Kim Kardashian', userName: 'kim_k', userAvatar: 'https://i.pravatar.cc/150?u=kim', role: 'user' },
            { id: 74, name: 'Kourtney K', userName: 'kourt_k', userAvatar: '', role: 'user' },
            { id: 75, name: 'Khloe Kardashian', userName: 'khloe_k', userAvatar: 'https://i.pravatar.cc/150?u=khloe', role: 'user' },
            { id: 76, name: 'Travis Scott', userName: 'travis_s', userAvatar: 'https://i.pravatar.cc/150?u=travis', role: 'user' },
            { id: 77, name: 'Justin Bieber', userName: 'justin_b', userAvatar: 'https://i.pravatar.cc/150?u=justin', role: 'user' },
            { id: 78, name: 'Hailey Bieber', userName: 'hailey_b', userAvatar: '', role: 'user' },
            { id: 79, name: 'Selena Gomez', userName: 'selena_g', userAvatar: 'https://i.pravatar.cc/150?u=selena', role: 'user' },
            { id: 80, name: 'Taylor Swift', userName: 'taylor_s', userAvatar: 'https://i.pravatar.cc/150?u=taylor', role: 'user' },
            { id: 81, name: 'Bruno Mars', userName: 'bruno_m', userAvatar: 'https://i.pravatar.cc/150?u=bruno', role: 'user' },
            { id: 82, name: 'The Weeknd', userName: 'abel_t', userAvatar: '', role: 'user' },
            { id: 83, name: 'Drake Graham', userName: 'drake_g', userAvatar: 'https://i.pravatar.cc/150?u=drake', role: 'user' },
            { id: 84, name: 'Rihanna Fenty', userName: 'rihanna_f', userAvatar: 'https://i.pravatar.cc/150?u=rihanna', role: 'user' },
            { id: 85, name: 'A$AP Rocky', userName: 'asap_r', userAvatar: 'https://i.pravatar.cc/150?u=asap', role: 'user' },
            { id: 86, name: 'Beyonce Knowles', userName: 'beyonce_k', userAvatar: '', role: 'user' },
            { id: 87, name: 'Jay Z', userName: 'jay_z', userAvatar: 'https://i.pravatar.cc/150?u=jayz', role: 'user' },
            { id: 88, name: 'Kanye West', userName: 'kanye_w', userAvatar: 'https://i.pravatar.cc/150?u=kanye', role: 'user' },
            { id: 89, name: 'Kim GoEun', userName: 'goeun_k', userAvatar: 'https://i.pravatar.cc/150?u=goeun', role: 'user' },
            { id: 90, name: 'Gong Yoo', userName: 'gong_yoo', userAvatar: '', role: 'user' },
            { id: 91, name: 'Lee MinHo', userName: 'minho_l', userAvatar: 'https://i.pravatar.cc/150?u=minho', role: 'user' },
            { id: 92, name: 'Park SeoJoon', userName: 'seojoon_p', userAvatar: 'https://i.pravatar.cc/150?u=seojoon', role: 'user' },
            { id: 93, name: 'Han SoHee', userName: 'sohee_h', userAvatar: 'https://i.pravatar.cc/150?u=sohee', role: 'user' },
            { id: 94, name: 'Song Kang', userName: 'song_k', userAvatar: '', role: 'user' },
            { id: 95, name: 'IU Lee', userName: 'iu_lee', userAvatar: 'https://i.pravatar.cc/150?u=iu', role: 'user' },
            { id: 96, name: 'Jungkook Jeon', userName: 'jk_bts', userAvatar: 'https://i.pravatar.cc/150?u=jk', role: 'user' },
            { id: 97, name: 'Jimin Park', userName: 'jimin_p', userAvatar: 'https://i.pravatar.cc/150?u=jimin', role: 'user' },
            { id: 98, name: 'Taehyung Kim', userName: 'v_bts', userAvatar: '', role: 'user' },
            { id: 99, name: 'Suga Min', userName: 'suga_m', userAvatar: 'https://i.pravatar.cc/150?u=suga', role: 'user' },
            { id: 100, name: 'Jin Kim', userName: 'jin_k', userAvatar: 'https://i.pravatar.cc/150?u=jink', role: 'user' }
        ],
        following: [
            { id: 102, name: "Niyas", userName: "@niyas", userAvatar: "/images/users/user4.jpg" },
            { id: 123, name: "Zayan", userName: "@zayan_aqua", userAvatar: "/images/users/user33.jpg" }
        ],
        contact: {
            email: "shibil@example.com",
            phone: "+91 98765 43210",
            instagram: "https://instagram.com/technovastudio",
            facebook: "https://facebook.com/technovastudio"
        },
        shorts: [
            { id: 1, videoURL: "./dumo.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 2, videoURL: "./dumo1.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 3, videoURL: "./dumo2.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 4, videoURL: "./dumo3.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 5, videoURL: "./dumo4.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 },
        ],
        posts: [
            { id: 1, image: "https://images.unsplash.com/photo-1647862622825-97c260fcbc84?q=80&w=870&auto=format&fit=crop", likes: 340, views: 5100, shares: 12, },
            { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Indian_fantail%28black_self%29.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 3, image: "https://catholicreview.org/wp-content/uploads/2021/09/FinchBD-siblings.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 4, image: "https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/everything-you-need-to-know-about-pet-finches/everything-you-need-to-know-about-pet-finches.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRglYIyPoNZTjfl_FMQViKF7A-V8s26pOl8vUgMMyQ4dos0eWVhfEViO0&s=10", likes: 340, views: 5100, shares: 12, },

        ]
    },
    {
        id: 2,
        name: "Anjali Raj",
        userName: "@anjali_aquatics",
        email: "anjali@example.com",
        password: "password123",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
        coverImage: "https://www.tfhmagazine.com/-/media/Project/OneWeb/TFH/US/articles/385_the_south_american_silver_arowana.jpg",
        location: "Kochi, Kerala",
        categories: ["Discus", "Angelfish"],
        experience: "8 Years",
        verified: true,
        rating: 4.8,
        bio: "Specializing in exotic cichlids.",
        description: "Dedicated aquatic specialist focusing on premium South American cichlids, primarily high-grade Discus and Angelfish variants.",
        counts: { followers: 3, following: 2, posts: 2 },
        followers: [
            { id: 103, name: "Sneha P", userName: "@sneha", userAvatar: "/images/users/user6.jpg" },
            { id: 124, name: "Riya Mathew", userName: "@riya_m", userAvatar: "/images/users/user35.jpg" },
            { id: 125, name: "Gautham S", userName: "@gautham", userAvatar: "/images/users/user36.jpg" }
        ],
        following: [
            { id: 104, name: "Vikram S", userName: "@vikram", userAvatar: "/images/users/user7.jpg" },
            { id: 126, name: "Aquatic Hub", userName: "@aquatic_hub", userAvatar: "/images/users/user37.jpg" }
        ],
        contact: {
            email: "anjali@example.com",
            phone: "+91 98765 43211",
            instagram: "https://instagram.com/anjali_aquatics",
            facebook: "https://facebook.com/anjali_aquatics"
        },
        shorts: [
            { id: 6, videoURL: "https://www.pexels.com/download/video/37685390/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 7, videoURL: "https://www.pexels.com/download/video/35147318/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 8, videoURL: "https://www.pexels.com/download/video/36093643/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 9, videoURL: "https://www.pexels.com/download/video/17325162/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 10, videoURL: "https://www.pexels.com/download/video/34663989/", likes: 1200, comments: 45, shares: 150, views: 25000 },
        ],
        posts: [
            { id: 6, image: "https://freshwateraquatica.org/cdn/shop/products/product-jpeg-500x500_37d8c073-878d-4aa7-b5d5-9d609b76002a.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 7, image: "https://upload.wikimedia.org/wikipedia/commons/1/10/HM_Orange_M_Sarawut.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwCgBR2alHhOsdIuH-XLLl3EVjTLEXblgcMBAg9SIENdmFtfMWD0OOBs&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 9, image: "https://www.simpsonspremium.com/cdn/shop/articles/persian-cat.jpg", likes: 340, views: 5100, shares: 12, },
            { id: 10, image: "https://www.strathspey-herald.co.uk/_media/img/750x0/BRN4IIBWKJONNY3RK37E.jpg", likes: 340, views: 5100, shares: 12, },

        ]
    },
    {
        id: 3,
        name: "Rahul Varma ",
        userName: "@rahul_guppy",
        email: "rahul@example.com",
        password: "securepassword",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1h_-B0MJR_r3T7Vji_OM_k0-gHWtG3I_CzK_4lgK1GUek14_SuHgH3H4R&s=10",
        location: "Thrissur, Kerala",
        categories: ["Guppy", "Molly"],
        experience: "3 Years",
        verified: false,
        rating: 4.5,
        bio: "Home-based breeder of fancy guppies.",
        description: "Home-based breeder in Thrissur deeply invested in line breeding high-grade fancy guppy variations and healthy livebearers.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 105, name: "Arun Das", userName: "@arun", userAvatar: "/images/users/user8.jpg" },
            { id: 127, name: "Deepak V", userName: "@deepak_v", userAvatar: "/images/users/user39.jpg" }
        ],
        following: [
            { id: 106, name: "Meena K", userName: "@meena", userAvatar: "/images/users/user9.jpg" },
            { id: 128, name: "Guppy Club", userName: "@guppy_club", userAvatar: "/images/users/user40.jpg" }
        ],
        contact: {
            email: "rahul@example.com",
            phone: "+91 98765 43212",
            instagram: "https://instagram.com/rahul_guppy",
            facebook: "https://facebook.com/rahul_guppy"
        },
        shorts: [
            { id: 11, videoURL: "https://www.pexels.com/download/video/37649670/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 12, videoURL: "https://www.pexels.com/download/video/12715060/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 13, videoURL: "https://www.pexels.com/download/video/3912656/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 14, videoURL: "https://www.pexels.com/download/video/12715038/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 15, videoURL: "https://www.pexels.com/download/video/9026085/", likes: 1200, comments: 45, shares: 150, views: 25000 },
        ],
        posts: [
            { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_J4JQ3W0iAuERHutwiqQ8t5X-ATCD9mRGUjmjqKFXTKdK6yz-2U6xC1i&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBQvwVYpJ9xYhQ16iXmqZmkUSuHpXsaNKAxQpiPwllg&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnW-56UQNwG54qBF80yWawhBPAJaQ45uIsfatiIGvIMJAZASCE5sSAnI&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZLITe-LVctkFwThleLEoVfVhNgxq3Qw15SZiZXHfLpaZM6noM7OH-uNq&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 15, image: "https://cdn11.bigcommerce.com/s-25ghynqpgv/images/stencil/1280w/products/5802/4221/Y564_-_White_Crested_Ducklings__32384.1675376603.jpg?c=1", likes: 340, views: 5100, shares: 12, },

        ]
    },
    {
        id: 4,
        name: "Suresh Babu",
        userName: "@suresh_gold",
        email: "suresh@example.com",
        password: "pass1234",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
        coverImage: "https://images5.alphacoders.com/388/thumb-1920-388293.jpg",
        location: "Kozhikode, Kerala",
        categories: ["Goldfish"],
        experience: "12 Years",
        verified: true,
        rating: 4.7,
        bio: "Expert in traditional Japanese Goldfish.",
        description: "Expert breeder focused strictly on traditional Japanese Goldfish variants, supplying robust, show-quality specimens built to last.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 107, name: "Devi M", userName: "@devi", userAvatar: "/images/users/user11.jpg" },
            { id: 129, name: "Madhavan E", userName: "@madhav_e", userAvatar: "/images/users/user42.jpg" }
        ],
        following: [
            { id: 108, name: "Ravi K", userName: "@ravi", userAvatar: "/images/users/user12.jpg" },
            { id: 130, name: "Goldfish Asia", userName: "@goldfish_asia", userAvatar: "/images/users/user43.jpg" }
        ],
        contact: {
            email: "suresh@example.com",
            phone: "+91 98765 43213",
            instagram: "https://instagram.com/suresh_gold",
            facebook: "https://facebook.com/suresh_gold"
        },
        shorts: [
            { id: 16, videoURL: "https://www.pexels.com/download/video/35325398/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 17, videoURL: "https://www.pexels.com/download/video/35378358/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 18, videoURL: "https://www.pexels.com/download/video/11103259/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 19, videoURL: "https://www.pexels.com/download/video/27778266/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 20, videoURL: "https://www.pexels.com/download/video/5930448/", likes: 1200, comments: 45, shares: 150, views: 25000 },
        ],
        posts: [
            { id: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHyzfRbzXY_Dz8mNrefAYt-ijZJL3cTIF3VmAGhSsmSpFIMHnBokOlVA&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmURdVT7TE7OpW1T0nBKI5l8HTHjtaVjClRcm3RjusKQ&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiygWuyr6XV9YpnH-Xe4eIdogJN5ivHfwY87pYVDuAXIClf_ZA4Ewa0lo&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bzLG8p3KSTKOT_Mwu5WGjgM_xAXHDNetv79JuocH9w&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pW2OJH5kWmx3lhWNmKQBhDqBySuRjTqk44I3Jm5XGg&s=10", likes: 340, views: 5100, shares: 12, },

        ]
    },
    {
        id: 5,
        name: "Deepa Menon ",
        userName: "@deepa_betta",
        email: "deepa@example.com",
        password: "mypassword",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
        coverImage: "https://intanaquariumfeeds.com/cdn/shop/articles/DeWatermark.ai_1756199605368_eec0dc59-8498-490e-a4e8-eae0f45cfdfa.jpg?v=1756716072",
        location: "Thiruvananthapuram, Kerala",
        categories: ["Betta Fish"],
        experience: "4 Years",
        verified: true,
        rating: 4.9,
        bio: "Selective breeding of Halfmoon Bettas.",
        description: "Avid aquarist focusing purely on the selective breeding and safe regional shipping of show-grade Halfmoon and Crowntail Betta fish.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 109, name: "Kiran P", userName: "@kiran", userAvatar: "/images/users/user14.jpg" },
            { id: 131, name: "Nandana J", userName: "@nandana_j", userAvatar: "/images/users/user45.jpg" }
        ],
        following: [
            { id: 110, name: "Latha B", userName: "@latha", userAvatar: "/images/users/user15.jpg" },
            { id: 132, name: "Betta World", userName: "@betta_world", userAvatar: "/images/users/user46.jpg" }
        ],
        contact: {
            email: "deepa@example.com",
            phone: "+91 98765 43214",
            instagram: "https://instagram.com/deepa_betta",
            facebook: "https://facebook.com/deepa_betta"
        },
        shorts: [
            { id: 21, videoURL: "https://www.pexels.com/download/video/15870616/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 22, videoURL: "https://www.pexels.com/download/video/29336604/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 23, videoURL: "https://www.pexels.com/download/video/36404697/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 24, videoURL: "https://www.pexels.com/download/video/34657868/", likes: 1200, comments: 45, shares: 150, views: 25000 },
            { id: 25, videoURL: "https://www.pexels.com/download/video/37697636/", likes: 1200, comments: 45, shares: 150, views: 25000 },
        ],
        posts: [
            { id: 21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzllxgoTDT4xBKpb-DZ0eUeZZjHN1WaGFHLB9vlDd4Q&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG4AL5nZu0UZ26TbjAWp4-ZJDr7PVBnSQW_ZWjLCYQ&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5om9VaX0emg_LgfVMOOpv4tuePLWYbME2RClWJFFLg&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 24, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pW2OJH5kWmx3lhWNmKQBhDqBySuRjTqk44I3Jm5XGg&s=10", likes: 340, views: 5100, shares: 12, },
            { id: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt5tEHtsqcXMH48WtqLiNVlJEQ9mGSX7xQpv9OvmPQA&s=10", likes: 340, views: 5100, shares: 12, },

        ]
    },
    {
        id: 6,
        name: "Arjun Krishnan",
        userName: "@arjun_monster",
        email: "arjun@example.com",
        password: "fishlover99",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKlyuyVsqFnGWt9FmuojdM0n0-y09vAPP0eCyRMOTbQnaii-BhIzRva4&s=10",
        coverImage: "/images/covers/cover6.jpg",
        location: "Palakkad, Kerala",
        categories: ["Arowana", "Oscar"],
        experience: "6 Years",
        verified: true,
        rating: 4.6,
        bio: "Breeding premium monster fish.",
        description: "Specialized monster fish breeder catering to large-scale setups with premium Super Red Arowanas and Tiger Oscars.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 111, name: "Tom S", userName: "@tom", userAvatar: "/images/users/user16.jpg" },
            { id: 133, name: "Vipin Das", userName: "@vipin_monster", userAvatar: "/images/users/user48.jpg" }
        ],
        following: [
            { id: 112, name: "Jerry J", userName: "@jerry", userAvatar: "/images/users/user17.jpg" },
            { id: 134, name: "Monster Tankers", userName: "@monster_tanks", userAvatar: "/images/users/user49.jpg" }
        ],
        contact: {
            email: "arjun@example.com",
            phone: "+91 98765 43215",
            instagram: "https://instagram.com/arjun_monster",
            facebook: "https://facebook.com/arjun_monster"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/arjun_arowana_feed.mp4", likes: 3400, comments: 195, shares: 520, views: 65000 },
            { id: 2, videoURL: "/videos/shorts/oscar_tank_cleaning.mp4", likes: 1800, comments: 64, shares: 140, views: 29000 }
        ],
        posts: [
            { id: 6, image: "/images/posts/arowana1.jpg", caption: "Super Red Arowana.", likes: 950, views: 15000, shares: 60, comments: [{ userName: "@vinod", name: "Vinod N", userAvatar: "/images/users/user18.jpg", content: "Majestic!" }] },
            { id: 16, image: "/images/posts/oscar2.jpg", caption: "Chilli Red Oscar juvenile batch.", likes: 510, views: 7800, shares: 25, comments: [{ userName: "@praveen", name: "Praveen K", userAvatar: "/images/users/user50.jpg", content: "Healthy active fish." }] }
        ]
    },
    {
        id: 7,
        name: "Fathima Zohra",
        userName: "@fathima_tanks",
        email: "fathima@example.com",
        password: "user1234",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdLfjZQYWimPjg9Aef7QPr9yaA7X7SPRgXago8Lw_KRPGJ4iv5fxkQZ8&s=10",
        coverImage: "/images/covers/cover7.jpg",
        location: "Kannur, Kerala",
        categories: ["Tetra"],
        experience: "2 Years",
        verified: false,
        rating: 4.2,
        bio: "Dedicated to colorful community fish.",
        description: "Dedicated community fish breeder specializing in beautiful nano tank schooling options like Neon and Cardinal Tetras.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 113, name: "Ali M", userName: "@ali", userAvatar: "/images/users/user19.jpg" },
            { id: 135, name: "Sana Farooq", userName: "@sana_f", userAvatar: "/images/users/user51.jpg" }
        ],
        following: [
            { id: 114, name: "Sara F", userName: "@sara", userAvatar: "/images/users/user20.jpg" },
            { id: 136, name: "Nano Scapes", userName: "@nano_scapes", userAvatar: "/images/users/user52.jpg" }
        ],
        contact: {
            email: "fathima@example.com",
            phone: "+91 98765 43216",
            instagram: "https://instagram.com/fathima_tanks",
            facebook: "https://facebook.com/fathima_tanks"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/fathima_neon_school.mp4", likes: 320, comments: 8, shares: 12, views: 5400 },
            { id: 2, videoURL: "/videos/shorts/cardinal_tetra_tank.mp4", likes: 410, comments: 15, shares: 18, views: 6800 }
        ],
        posts: [
            { id: 7, image: "/images/posts/tetra1.jpg", caption: "Schooling Neon Tetras.", likes: 150, views: 2000, shares: 2, comments: [{ userName: "@babu", name: "Babu R", userAvatar: "/images/users/user21.jpg", content: "Very peaceful." }] },
            { id: 17, image: "/images/posts/tetra2.jpg", caption: "Rummy Nose Tetras healthy and active.", likes: 190, views: 2800, shares: 5, comments: [{ userName: "@amal", name: "Amal Dev", userAvatar: "/images/users/user53.jpg", content: "Perfect for my setup." }] }
        ]
    },
    {
        id: 8,
        name: "Vishnu Prasad",
        userName: "@vishnu_aquatics",
        email: "vishnu@example.com",
        password: "password1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUup8-GfNF1lULWW6OZBrS75Dr0c6FTs-z7yGcrj9Kg&s",
        coverImage: "/images/covers/cover8.jpg",
        location: "Kollam, Kerala",
        categories: ["Flowerhorn"],
        experience: "7 Years",
        verified: true,
        rating: 4.8,
        bio: "Specialist in high-grade Flowerhorns.",
        description: "Flowerhorn specialist focused on cultivating elite specimens with exceptional kok development and interactive temperaments.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 115, name: "Manu V", userName: "@manu", userAvatar: "/images/users/user22.jpg" },
            { id: 137, name: "Siddharth R", userName: "@sid_horn", userAvatar: "/images/users/user54.jpg" }
        ],
        following: [
            { id: 116, name: "Priya S", userName: "@priya", userAvatar: "/images/users/user23.jpg" },
            { id: 138, name: "Cichlid Arena", userName: "@cichlid_arena", userAvatar: "/images/users/user55.jpg" }
        ],
        contact: {
            email: "vishnu@example.com",
            phone: "+91 98765 43217",
            instagram: "https://instagram.com/vishnu_aquatics",
            facebook: "https://facebook.com/vishnu_aquatics"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/vishnu_flowerhorn_kok.mp4", likes: 1100, comments: 41, shares: 88, views: 19000 },
            { id: 2, videoURL: "/videos/shorts/flowerhorn_interaction.mp4", likes: 1350, comments: 50, shares: 92, views: 21000 }
        ],
        posts: [
            { id: 8, image: "/images/posts/flowerhorn1.jpg", caption: "KML Flowerhorn.", likes: 500, views: 7000, shares: 22, comments: [{ userName: "@shibu", name: "Shibu K", userAvatar: "/images/users/user24.jpg", content: "Nice kok!" }] },
            { id: 18, image: "/images/posts/flowerhorn2.jpg", caption: "Thai Silk Flowerhorn juvenile.", likes: 420, views: 5900, shares: 14, comments: [{ userName: "@akhil", name: "Akhil Raj", userAvatar: "/images/users/user56.jpg", content: "Super pearl lines." }] }
        ]
    },
    {
        id: 9,
        name: "Meera Nair",
        userName: "@meera_koi",
        email: "meera@example.com",
        password: "secretpass",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CHyiguhj-mFk5eW3LCkAQ_NoGIOJqo0i1ggNByWGLA&s",
        coverImage: "/images/covers/cover9.jpg",
        location: "Alappuzha, Kerala",
        categories: ["Koi Fish"],
        experience: "10 Years",
        verified: true,
        rating: 5.0,
        bio: "Professional Koi breeder.",
        description: "Professional Koi master breeder operating mud pond systems to produce highly sought-after Kohaku, Sanke, and Showa lineages.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 117, name: "John D", userName: "@john", userAvatar: "/images/users/user25.jpg" },
            { id: 139, name: "Kavya Madhavan", userName: "@kavya_nair", userAvatar: "/images/users/user57.jpg" }
        ],
        following: [
            { id: 118, name: "Anu R", userName: "@anu", userAvatar: "/images/users/user26.jpg" },
            { id: 140, name: "Niigata Farms", userName: "@niigata_koi", userAvatar: "/images/users/user58.jpg" }
        ],
        contact: {
            email: "meera@example.com",
            phone: "+91 98765 43218",
            instagram: "https://instagram.com/meera_koi",
            facebook: "https://facebook.com/meera_koi"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/meera_pond_harvest.mp4", likes: 4100, comments: 280, shares: 730, views: 87000 },
            { id: 2, videoURL: "/videos/shorts/koi_growth_stages.mp4", likes: 2900, comments: 140, shares: 320, views: 54000 }
        ],
        posts: [
            { id: 9, image: "/images/posts/koi2.jpg", caption: "Kohaku Koi growth update.", likes: 1200, views: 20000, shares: 80, comments: [{ userName: "@dev", name: "Dev A", userAvatar: "/images/users/user27.jpg", content: "Incredible size." }] },
            { id: 19, image: "/images/posts/koi3.jpg", caption: "Showa lineage collection selection.", likes: 980, views: 14000, shares: 45, comments: [{ userName: "@renjith", name: "Renjith P", userAvatar: "/images/users/user59.jpg", content: "Patterns are crisp." }] }
        ]
    },
    {
        id: 10,
        name: "Jithin Jose",
        userName: "@jithin_fish",
        email: "jithin@example.com",
        password: "password00",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI5U-LEUU-BussnT3KiLZg5rtlJ4mxl86sDD1m5uROw&s",
        coverImage: "/images/covers/cover10.jpg",
        location: "Wayanad, Kerala",
        categories: ["Oscar Fish"],
        experience: "5 Years",
        verified: false,
        rating: 4.4,
        bio: "Passionate about healthy aquarium fish.",
        description: "Energetic aquarist managing a multi-strain hatchery in Wayanad focused on robust Albino and Tiger Oscar lineages.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 119, name: "Rahul M", userName: "@rahulm", userAvatar: "/images/users/user28.jpg" },
            { id: 141, name: "Sharat Kumar", userName: "@sharat_k", userAvatar: "/images/users/user60.jpg" }
        ],
        following: [
            { id: 120, name: "Suresh K", userName: "@suresh", userAvatar: "/images/users/user29.jpg" },
            { id: 142, name: "Wayanad Aquas", userName: "@wayanad_aquas", userAvatar: "/images/users/user61.jpg" }
        ],
        contact: {
            email: "jithin@example.com",
            phone: "+91 98765 43219",
            instagram: "https://instagram.com/jithin_fish",
            facebook: "https://facebook.com/jithin_fish"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/jithin_oscar_batch.mp4", likes: 670, comments: 19, shares: 34, views: 11500 },
            { id: 2, videoURL: "/videos/shorts/oscar_feeding_time.mp4", likes: 520, comments: 12, shares: 20, views: 9200 }
        ],
        posts: [
            { id: 10, image: "/images/posts/oscar1.jpg", caption: "New Oscar batch arrival.", likes: 310, views: 4500, shares: 5, comments: [{ userName: "@aquaholic", name: "Manu V", userAvatar: "/images/users/user30.jpg", content: "Great size!" }] },
            { id: 20, image: "/images/posts/oscar2.jpg", caption: "Albino Oscars ready to ship.", likes: 240, views: 3200, shares: 8, comments: [{ userName: "@haris", name: "Haris P", userAvatar: "/images/users/user62.jpg", content: "Beautiful fins." }] }
        ]
    },
    {
        id: 11,
        name: "Dr. Sandeep Nair",
        userName: "@sandeep_persians",
        email: "sandeep@example.com",
        password: "catlover2024",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1-xqJYhCwr3xWhgv5JX_E3GfRyGOvMqjuJcqLcJvdlBFrWvRdfoT47AS&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHOsH9LFaCMJW2L8GBcJ7X-cDjHZK09GfIMrQv-B8pDfou7pVKOxBxWca&s=10",
        location: "Kochi, Kerala",
        categories: ["Persian Cat"],
        experience: "9 Years",
        verified: true,
        rating: 4.9,
        bio: "CFA registered Persian cat cattery.",
        description: "Premium GCCF and CFA registered Persian cattery specializing in doll-faced and punch-faced show-quality kittens.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 201, name: "Akhila V", userName: "@akhila", userAvatar: "/images/users/user70.jpg" },
            { id: 202, name: "Rohit Krishnan", userName: "@rohit_k", userAvatar: "/images/users/user71.jpg" }
        ],
        following: [
            { id: 203, name: "Cat Fanciers India", userName: "@cfi_official", userAvatar: "/images/users/user72.jpg" },
            { id: 204, name: "Dr. Neha", userName: "@neha_vet", userAvatar: "/images/users/user73.jpg" }
        ],
        contact: {
            email: "sandeep@example.com",
            phone: "+91 94471 23456",
            instagram: "https://instagram.com/sandeep_persians",
            facebook: "https://facebook.com/sandeep_persians"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/grooming_persian.mp4", likes: 4500, comments: 210, shares: 600, views: 95000 },
            { id: 2, videoURL: "/videos/shorts/playful_kittens.mp4", likes: 3800, comments: 180, shares: 450, views: 78000 }
        ],
        posts: [
            { id: 21, image: "/images/posts/persian1.jpg", caption: "Bi-color Punch-faced Persian kitten available.", likes: 1400, views: 25000, shares: 120, comments: [{ userName: "@meenu", name: "Meenakshi", userAvatar: "/images/users/user74.jpg", content: "So fluffy!" }] },
            { id: 22, image: "/images/posts/persian2.jpg", caption: "Calico queen looking majestic.", likes: 980, views: 18000, shares: 70, comments: [{ userName: "@aswin", name: "Aswin", userAvatar: "/images/users/user75.jpg", content: "Stunning coat development." }] }
        ]
    },
    {
        id: 12,
        name: "Abhijith R",
        userName: "@malabar_kennels",
        email: "abhijith@example.com",
        password: "germanshepherd",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLfviGb7EfnhURetPKiFY6QMX4bNAB8NWgkG4FG8-W50PExoju0u7svTl&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYFyF8QoR5pHxzdZ1OBpt3-UnUCVtjPeJMmiyO0Cs3GPYndQccqOKMGg&s=10",
        location: "Kozhikode, Kerala",
        categories: ["German Shepherd", "Rottweiler"],
        experience: "15 Years",
        verified: true,
        rating: 4.8,
        bio: "KCI Registered working line dogs.",
        description: "Renowned GSD breeder focused on importing pure working lines, maintaining excellent bone structure, temperament, and drive.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 205, name: "Harish M", userName: "@harish_gsd", userAvatar: "/images/users/user76.jpg" },
            { id: 206, name: "Suresh Lal", userName: "@suresh_l", userAvatar: "/images/users/user77.jpg" }
        ],
        following: [
            { id: 207, name: "Kennel Club India", userName: "@kci_official", userAvatar: "/images/users/user78.jpg" },
            { id: 208, name: "German Guarders", userName: "@gsd_world", userAvatar: "/images/users/user79.jpg" }
        ],
        contact: {
            email: "abhijith@example.com",
            phone: "+91 94475 98765",
            instagram: "https://instagram.com/malabar_kennels",
            facebook: "https://facebook.com/malabar_kennels"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/gsd_obedience.mp4", likes: 8900, comments: 420, shares: 1200, views: 180000 },
            { id: 2, videoURL: "/videos/shorts/rottweiler_pup.mp4", likes: 5400, comments: 230, shares: 610, views: 110000 }
        ],
        posts: [
            { id: 23, image: "/images/posts/gsd1.jpg", caption: "KCI Registered Heavy Bone GSD puppies.", likes: 2300, views: 45000, shares: 310, comments: [{ userName: "@doglover", name: "Raju", userAvatar: "/images/users/user80.jpg", content: "Price details please." }] },
            { id: 24, image: "/images/posts/rott1.jpg", caption: "Show quality Rottweiler male out for training.", likes: 1700, views: 32000, shares: 190, comments: [{ userName: "@jayan", name: "Jayan P", userAvatar: "/images/users/user81.jpg", content: "Fierce and awesome!" }] }
        ]
    },
    {
        id: 13,
        name: "Rinshad Malappuram",
        userName: "@malabar_exotics",
        email: "rinshad@example.com",
        password: "macawbirds",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Be8sZnmg02NCgmO8Js0ERxI_rLYbWb6se4gMfu7IqMTl973SbDBNrEk&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ143cRumT1CndlmudYpDhNTBKqs89ql8pPsA38SJm71Q8oAR8sVDehR3g&s=10",
        location: "Malappuram, Kerala",
        categories: ["Macaw", "African Grey Parrot"],
        experience: "7 Years",
        verified: true,
        rating: 4.7,
        bio: "Hand-tamed exotic avian breeder.",
        description: "Specialized avian breeder handling exotic parrots. All chicks are legally documented, closed-ring, and completely hand-tamed.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 209, name: "Shameer U", userName: "@shameer_u", userAvatar: "/images/users/user82.jpg" },
            { id: 210, name: "Nidhin Das", userName: "@nidhin_d", userAvatar: "/images/users/user83.jpg" }
        ],
        following: [
            { id: 211, name: "Avian Society", userName: "@avian_india", userAvatar: "/images/users/user84.jpg" },
            { id: 212, name: "Exotic Birds", userName: "@world_parrots", userAvatar: "/images/users/user85.jpg" }
        ],
        contact: {
            email: "rinshad@example.com",
            phone: "+91 99955 12345",
            instagram: "https://instagram.com/malabar_exotics",
            facebook: "https://facebook.com/malabar_exotics"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/macaw_talking.mp4", likes: 12000, comments: 850, shares: 3400, views: 320000 },
            { id: 2, videoURL: "/videos/shorts/grey_handfeeding.mp4", likes: 6200, comments: 310, shares: 980, views: 145000 }
        ],
        posts: [
            { id: 25, image: "/images/posts/macaw1.jpg", caption: "Blue and Gold Macaw hand-reared chicks.", likes: 3400, views: 68000, shares: 540, comments: [{ userName: "@anas", name: "Anas", userAvatar: "/images/users/user86.jpg", content: "Beautiful bird!" }] },
            { id: 26, image: "/images/posts/grey1.jpg", caption: "African Grey Parrot 45 days old baby.", likes: 2100, views: 41000, shares: 290, comments: [{ userName: "@bibin", name: "Bibin Raj", userAvatar: "/images/users/user87.jpg", content: "Is DNA test done?" }] }
        ]
    },
    {
        id: 14,
        name: "Shaji Varghese",
        userName: "@shaji_poultry",
        email: "shaji@example.com",
        password: "aseelfighter",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8eYeyJYNk5w66450ZkhZlSQAZqINK4Mv9ihdO2zyRjltr-reZVVecLXb&s=10",
        coverImage: "https://t4.ftcdn.net/jpg/06/08/24/19/360_F_608241959_1ouVLbb1DAJ6OkJdpRpj7xZcr7vbQ5Mo.jpg",
        location: "Kottayam, Kerala",
        categories: ["Aseel Hen", "Kadaknath"],
        experience: "20 Years",
        verified: false,
        rating: 4.6,
        bio: "Traditional Aseel gamefowl lineage preservation.",
        description: "Veteran breeder dedicated to high-standing Malabari Aseel gamefowl strains and authentic immunity-rich Kadaknath birds.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 213, name: "Thomas K", userName: "@thomas_k", userAvatar: "/images/users/user88.jpg" },
            { id: 214, name: "Vinayan", userName: "@vinay_farm", userAvatar: "/images/users/user89.jpg" }
        ],
        following: [
            { id: 215, name: "Kerala Poultry", userName: "@kl_poultry", userAvatar: "/images/users/user90.jpg" },
            { id: 216, name: "Aseel Club", userName: "@aseel_breeders", userAvatar: "/images/users/user91.jpg" }
        ],
        contact: {
            email: "shaji@example.com",
            phone: "+91 97441 55667",
            instagram: "https://instagram.com/shaji_poultry",
            facebook: "https://facebook.com/shaji_poultry"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/aseel_rooster.mp4", likes: 3100, comments: 140, shares: 420, views: 67000 },
            { id: 2, videoURL: "/videos/shorts/kadaknath_farm.mp4", likes: 1800, comments: 95, shares: 180, views: 39000 }
        ],
        posts: [
            { id: 27, image: "/images/posts/aseel1.jpg", caption: "Premium Madras Aseel Rooster line.", likes: 780, views: 12000, shares: 85, comments: [{ userName: "@unni_m", name: "Unni", userAvatar: "/images/users/user92.jpg", content: "Ultimate structure." }] },
            { id: 28, image: "/images/posts/kadak1.jpg", caption: "Pure black Kadaknath chicks ready.", likes: 520, views: 9200, shares: 40, comments: [{ userName: "@mani", name: "Manikandan", userAvatar: "/images/users/user93.jpg", content: "Need 50 chicks." }] }
        ]
    },
    {
        id: 15,
        name: "Muhammed Fayiz",
        userName: "@fayiz_rabbits",
        email: "fayiz@example.com",
        password: "rabbitfarm1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF9OgfNLPprqaBY6z7PiSG4LVkj9VC4u89G7088-KxL8u3RvRqVGYjQQ&s=10",
        coverImage: "https://growbed.decorexpro.com/wp-content/uploads/2018/09/krolik.jpg",
        location: "Palakkad, Kerala",
        categories: ["Soviet Chinchilla", "New Zealand White"],
        experience: "4 Years",
        verified: true,
        rating: 4.5,
        bio: "Commercial and pet rabbit farming.",
        description: "High-yield commercial meat and fancy pet rabbit breeds managed under optimal hygienic cages in central Palakkad.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 217, name: "Sajith A", userName: "@sajith_a", userAvatar: "/images/users/user94.jpg" },
            { id: 218, name: "Fathima S", userName: "@fathi_s", userAvatar: "/images/users/user95.jpg" }
        ],
        following: [
            { id: 219, name: "Agri Kerala", userName: "@agri_kerala", userAvatar: "/images/users/user96.jpg" },
            { id: 220, name: "Bunny Haven", userName: "@bunny_hav", userAvatar: "/images/users/user97.jpg" }
        ],
        contact: {
            email: "fayiz@example.com",
            phone: "+91 95624 77889",
            instagram: "https://instagram.com/fayiz_rabbits",
            facebook: "https://facebook.com/fayiz_rabbits"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/rabbit_feeding.mp4", likes: 2300, comments: 88, shares: 140, views: 48000 },
            { id: 2, videoURL: "/videos/shorts/baby_bunnies.mp4", likes: 4100, comments: 190, shares: 520, views: 82000 }
        ],
        posts: [
            { id: 29, image: "/images/posts/rabbit1.jpg", caption: "Soviet Chinchilla breed stock available.", likes: 490, views: 8100, shares: 35, comments: [{ userName: "@giri", name: "Girish", userAvatar: "/images/users/user98.jpg", content: "Healthy ones." }] },
            { id: 30, image: "/images/posts/rabbit2.jpg", caption: "Pure white NZW bunnies.", likes: 680, views: 11000, shares: 75, comments: [{ userName: "@reshma", name: "Reshma R", userAvatar: "/images/users/user99.jpg", content: "So cute!" }] }
        ]
    },
    {
        id: 16,
        name: "Biju Kurian",
        userName: "@highrange_mixbreed",
        email: "biju@example.com",
        password: "farmbiju123",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-KFn94Tdo69qL18jmTb-N28tQQ1Boyi0B3iPOOfMfg&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/colored-pigeons-pigeon-farm-high-quality-photo-259792524.jpg",
        location: "Idukki, Kerala",
        categories: ["Labrador", "Fancy Hens", "Pigeons"],
        experience: "11 Years",
        verified: true,
        rating: 4.8,
        bio: "Multi-species highrange homestead farm.",
        description: "Homestead breeder utilizing large open acres to nurture high-pedigree Labrador Retrievers alongside ornamental fancy poultry lines.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 221, name: "Sunny J", userName: "@sunny_j", userAvatar: "/images/users/user100.jpg" },
            { id: 222, name: "Aby Idukki", userName: "@aby_idk", userAvatar: "/images/users/user101.jpg" }
        ],
        following: [
            { id: 223, name: "Kisan Club", userName: "@kisan_way", userAvatar: "/images/users/user102.jpg" },
            { id: 224, name: "Pet Matrix", userName: "@pet_matrix", userAvatar: "/images/users/user103.jpg" }
        ],
        contact: {
            email: "biju@example.com",
            phone: "+91 94462 88112",
            instagram: "https://instagram.com/highrange_mixbreed",
            facebook: "https://facebook.com/highrange_mixbreed"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/farm_tour.mp4", likes: 5200, comments: 340, shares: 710, views: 125000 },
            { id: 2, videoURL: "/videos/shorts/lab_pups_playing.mp4", likes: 7100, comments: 290, shares: 890, views: 160000 }
        ],
        posts: [
            { id: 31, image: "/images/posts/mix1.jpg", caption: "KCI Golden Labrador puppies.", likes: 1800, views: 29000, shares: 210, comments: [{ userName: "@joyal", name: "Joyal", userAvatar: "/images/users/user104.jpg", content: "Price check." }] },
            { id: 32, image: "/images/posts/mix2.jpg", caption: "Polish Cap fancy hens active.", likes: 920, views: 14000, shares: 60, comments: [{ userName: "@sabu_v", name: "Sabu", userAvatar: "/images/users/user105.jpg", content: "Beautiful crests." }] }
        ]
    },
    {
        id: 17,
        name: "Nikhil Das",
        userName: "@nikhil_guppies",
        email: "nikhil@example.com",
        password: "guppypassword",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdEZSjAY352pqv82UBBncg4uP-5QR2IxKPuH45AZcjOdnM1rMu24EEYZo&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/male-fire-guppy-banner-multi-color-poecilia-reticulata-nature-background-platinum-fish-red-dragon-320665358.jpg",
        location: "Ernakulam, Kerala",
        categories: ["Guppy"],
        experience: "6 Years",
        verified: true,
        rating: 4.7,
        bio: " Albino Full Red & Dumbo Ear expert.",
        description: "Specialized focus on cultivating extreme dorsal line genetics for Albino Full Red and Dumbo Platinum Guppy sub-strains.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 225, name: "Abhi EKM", userName: "@abhi_ekm", userAvatar: "/images/users/user106.jpg" },
            { id: 226, name: "Lijo Paul", userName: "@lijo_p", userAvatar: "/images/users/user107.jpg" }
        ],
        following: [
            { id: 227, name: "Guppy Kerala", userName: "@guppy_kl", userAvatar: "/images/users/user108.jpg" },
            { id: 228, name: "Aqua World", userName: "@aqua_world", userAvatar: "/images/users/user109.jpg" }
        ],
        contact: {
            email: "nikhil@example.com",
            phone: "+91 90373 11223",
            instagram: "https://instagram.com/nikhil_guppies",
            facebook: "https://facebook.com/nikhil_guppies"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/guppy_tank_glow.mp4", likes: 1900, comments: 72, shares: 110, views: 35000 },
            { id: 2, videoURL: "/videos/shorts/dumbo_ear.mp4", likes: 2800, comments: 115, shares: 230, views: 49000 }
        ],
        posts: [
            { id: 33, image: "/images/posts/gup3.jpg", caption: "Albino Full Red High Dorsal pair.", likes: 420, views: 6100, shares: 25, comments: [{ userName: "@midhun", name: "Midhun", userAvatar: "/images/users/user110.jpg", content: "Awesome tail flare." }] },
            { id: 34, image: "/images/posts/gup4.jpg", caption: "Dumbo Ear Mosaic juveniles.", likes: 310, views: 4500, shares: 14, comments: [{ userName: "@amal_r", name: "Amal", userAvatar: "/images/users/user111.jpg", content: "Price bro?" }] }
        ]
    },
    {
        id: 18,
        name: "Sumesh KP",
        userName: "@sumesh_birds",
        email: "sumesh@example.com",
        password: "lovebirds123",
        role: "breeder",
        profileImage: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/love-bird-som1a0r-250.jpg",
        coverImage: "https://badoca.com/wp-content/uploads/caturra_banner.jpg",
        location: "Thrissur, Kerala",
        categories: ["Lovebirds", "Cockatiel"],
        experience: "5 Years",
        verified: false,
        rating: 4.4,
        bio: "Avian enthusiast specializing in mutations.",
        description: "Breeding structural color mutations in African Lovebirds and Lutino Cockatiels inside spacious outdoor aviaries.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 229, name: "Vinu T", userName: "@vinu_t", userAvatar: "/images/users/user112.jpg" },
            { id: 230, name: "Ganga S", userName: "@ganga_s", userAvatar: "/images/users/user113.jpg" }
        ],
        following: [
            { id: 231, name: "Bird Forum", userName: "@bird_forum", userAvatar: "/images/users/user114.jpg" },
            { id: 232, name: "Aviary Tech", userName: "@avitech", userAvatar: "/images/users/user115.jpg" }
        ],
        contact: {
            email: "sumesh@example.com",
            phone: "+91 85920 66778",
            instagram: "https://instagram.com/sumesh_birds",
            facebook: "https://facebook.com/sumesh_birds"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/cockatiel_whistle.mp4", likes: 5400, comments: 390, shares: 1100, views: 130000 },
            { id: 2, videoURL: "/videos/shorts/lovebirds_nest.mp4", likes: 1200, comments: 45, shares: 80, views: 22000 }
        ],
        posts: [
            { id: 35, image: "/images/posts/bird3.jpg", caption: "Lutino Cockatiel handfed chicks.", likes: 840, views: 13000, shares: 90, comments: [{ userName: "@renju", name: "Renjith", userAvatar: "/images/users/user116.jpg", content: "Very friendly!" }] },
            { id: 36, image: "/images/posts/bird4.jpg", caption: "Opaline Fisher Lovebirds.", likes: 460, views: 7600, shares: 30, comments: [{ userName: "@deepu", name: "Deepak", userAvatar: "/images/users/user117.jpg", content: "Superb mutations." }] }
        ]
    },
    {
        id: 19,
        name: "Shyam Sundar",
        userName: "@shyam_cattery",
        email: "shyam@example.com",
        password: "siamesecat",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHaC9Cyyxyc35ygnFEQ5tUwxE-T_uRe-Dt1kMmFn8d6qEYqYqgMAumPk1I&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/cute-white-kitten-brown-ears-british-shorthair-walking-black-background-little-beautiful-cat-blue-eyes-looks-163653709.jpg",
        location: "Alappuzha, Kerala",
        categories: ["Siamese Cat", "British Shorthair"],
        experience: "8 Years",
        verified: true,
        rating: 4.9,
        bio: "Purebred feline excellence.",
        description: "Elite cattery focused on providing genetically screened, health-certified Siamese and chunky British Shorthair lines.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 233, name: "Kavya P", userName: "@kavya_p", userAvatar: "/images/users/user118.jpg" },
            { id: 234, name: "Arun Alappuzha", userName: "@arun_alp", userAvatar: "/images/users/user119.jpg" }
        ],
        following: [
            { id: 235, name: "Cat Federation", userName: "@indian_cats", userAvatar: "/images/users/user120.jpg" },
            { id: 236, name: "Royal Canin Fans", userName: "@rc_fans", userAvatar: "/images/users/user121.jpg" }
        ],
        contact: {
            email: "shyam@example.com",
            phone: "+91 94950 44332",
            instagram: "https://instagram.com/shyam_cattery",
            facebook: "https://facebook.com/shyam_cattery"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/bsh_chunky.mp4", likes: 6100, comments: 280, shares: 890, views: 140000 },
            { id: 2, videoURL: "/videos/shorts/siamese_meow.mp4", likes: 8400, comments: 510, shares: 1400, views: 195000 }
        ],
        posts: [
            { id: 37, image: "/images/posts/cat3.jpg", caption: "Blue British Shorthair male kitten.", likes: 1900, views: 32000, shares: 270, comments: [{ userName: "@nimmy", name: "Nimisha", userAvatar: "/images/users/user122.jpg", content: "Looks like a teddy bear." }] },
            { id: 38, image: "/images/posts/cat4.jpg", caption: "Classic Seal Point Siamese.", likes: 1200, views: 21000, shares: 140, comments: [{ userName: "@sanju", name: "Sanju", userAvatar: "/images/users/user123.jpg", content: "Intense blue eyes." }] }
        ]
    },
    {
        id: 20,
        name: "Abbas Malabar",
        userName: "@malabar_pigeons",
        email: "abbas@example.com",
        password: "pigeonracer",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7bzCxEuoDLrZRfL-u5fDcIJ7Exa0YLhhFU-lmgGiTQLBSAW3cqEPTao&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/banner-shot-lot-street-pigeon-standing-pavement-cold-weather-size-273642065.jpg",
        location: "Kozhikode, Kerala",
        categories: ["Racing Homer", "Fantail Pigeon"],
        experience: "13 Years",
        verified: true,
        rating: 4.7,
        bio: "Champion racing pigeon genetics.",
        description: "Breeding elite endurance Racing Homers with validated track achievements, alongside high-stepping exhibition Fantails.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 237, name: "Muneer K", userName: "@muneer_k", userAvatar: "/images/users/user124.jpg" },
            { id: 238, name: "Basi E", userName: "@basi_e", userAvatar: "/images/users/user125.jpg" }
        ],
        following: [
            { id: 239, name: "Pigeon Club India", userName: "@pigeon_india", userAvatar: "/images/users/user126.jpg" },
            { id: 240, name: "Loft Masters", userName: "@loft_masters", userAvatar: "/images/users/user127.jpg" }
        ],
        contact: {
            email: "abbas@example.com",
            phone: "+91 98460 77114",
            instagram: "https://instagram.com/malabar_pigeons",
            facebook: "https://facebook.com/malabar_pigeons"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/pigeon_release.mp4", likes: 4200, comments: 190, shares: 530, views: 89000 },
            { id: 2, videoURL: "/videos/shorts/fantail_walk.mp4", likes: 2100, comments: 88, shares: 140, views: 43000 }
        ],
        posts: [
            { id: 39, image: "/images/posts/pig1.jpg", caption: "Belgian Bloodline Racing Homer pair.", likes: 690, views: 11500, shares: 65, comments: [{ userName: "@rafi", name: "Rafiq", userAvatar: "/images/users/user128.jpg", content: "Incredible wing posture." }] },
            { id: 40, image: "/images/posts/pig2.jpg", caption: "Pure white English Fantails.", likes: 510, views: 8700, shares: 40, comments: [{ userName: "@shihab", name: "Shihab", userAvatar: "/images/users/user129.jpg", content: "Show quality indeed." }] }
        ]
    },
    {
        id: 21,
        name: "Justin George",
        userName: "@justin_kennels",
        email: "justin@example.com",
        password: "goldenretriever",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveaD6yczWNmNzLRs4URgWrHwD2R_OXLeZjThm2XjcuQ&s",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_s_SRSrnapUKYfu5cQSSrPssoWXO8KOeQQDJJqQb4YygMigtNtwdxqnHa&s=10",
        location: "Kottayam, Kerala",
        categories: ["Golden Retriever"],
        experience: "10 Years",
        verified: true,
        rating: 4.8,
        bio: "Home-raised high pedigree Golden Retrievers.",
        description: "Focused exclusively on family-friendly, well-socialized KCI registered Golden Retrievers with rich show champion backgrounds.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 241, name: "Alan K", userName: "@alan_k", userAvatar: "/images/users/user130.jpg" },
            { id: 242, name: "Merlin S", userName: "@merlin_s", userAvatar: "/images/users/user131.jpg" }
        ],
        following: [
            { id: 243, name: "Dog Show India", userName: "@dogshow_in", userAvatar: "/images/users/user132.jpg" },
            { id: 244, name: "Vet Care", userName: "@vetcare_kottayam", userAvatar: "/images/users/user133.jpg" }
        ],
        contact: {
            email: "justin@example.com",
            phone: "+91 94478 55443",
            instagram: "https://instagram.com/justin_kennels",
            facebook: "https://facebook.com/justin_kennels"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/golden_swimming.mp4", likes: 9800, comments: 460, shares: 1900, views: 210000 },
            { id: 2, videoURL: "/videos/shorts/golden_pups.mp4", likes: 15000, comments: 920, shares: 4200, views: 340000 }
        ],
        posts: [
            { id: 41, image: "/images/posts/dog5.jpg", caption: "Heavy coat Golden Retriever pups ready.", likes: 3100, views: 55000, shares: 620, comments: [{ userName: "@anju_m", name: "Anju", userAvatar: "/images/users/user134.jpg", content: "Absolutely gorgeous cubs." }] },
            { id: 42, image: "/images/posts/dog6.jpg", caption: "Sire available for stud service.", likes: 1400, views: 24000, shares: 110, comments: [{ userName: "@mathew", name: "Mathew", userAvatar: "/images/users/user135.jpg", content: "Great conformation traits." }] }
        ]
    },
    {
        id: 22,
        name: "Faisal Rahman",
        userName: "@calicut_aquascapes",
        email: "faisal@example.com",
        password: "plantedtank",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14eDjK9kclmv-Hblit_QQ_6PUSWiphVhrhJ6y0zobXlFRTAGgU3dBFRtA&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSueL7xnp07xucO0eAaQf2MuKwpPjTc-2B5paeDHIe858oAAY6LCSCHw&s=10",
        location: "Kozhikode, Kerala",
        categories: ["Shrimps", "Neon Tetra"],
        experience: "6 Years",
        verified: true,
        rating: 4.6,
        bio: "Caridina and Neocaridina shrimp specialist.",
        description: "Cultivating stable lines of Ornamental Dwarf Shrimps like Red Cherry and Crystal Black under strict water parameter indexing.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 245, name: "Hisham", userName: "@hisham_p", userAvatar: "/images/users/user136.jpg" },
            { id: 246, name: "Pranav V", userName: "@pranav_v", userAvatar: "/images/users/user137.jpg" }
        ],
        following: [
            { id: 247, name: "Shrimp Keeper", userName: "@shrimp_world", userAvatar: "/images/users/user138.jpg" },
            { id: 248, name: "Ada India", userName: "@ada_india", userAvatar: "/images/users/user139.jpg" }
        ],
        contact: {
            email: "faisal@example.com",
            phone: "+91 98950 33221",
            instagram: "https://instagram.com/calicut_aquascapes",
            facebook: "https://facebook.com/calicut_aquascapes"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/shrimp_feeding.mp4", likes: 2400, comments: 110, shares: 180, views: 45000 },
            { id: 2, videoURL: "/videos/shorts/moss_trimming.mp4", likes: 1500, comments: 65, shares: 90, views: 28000 }
        ],
        posts: [
            { id: 43, image: "/images/posts/fish21.jpg", caption: "High Grade Red Cherry Shrimps.", likes: 480, views: 7600, shares: 40, comments: [{ userName: "@basil", name: "Basil", userAvatar: "/images/users/user140.jpg", content: "Solid red color!" }] },
            { id: 44, image: "/images/posts/fish22.jpg", caption: "Crystal Red Shrimp (SSS Grade).", likes: 390, views: 6200, shares: 35, comments: [{ userName: "@jayan_k", name: "Jayan", userAvatar: "/images/users/user141.jpg", content: "Beautiful band patterns." }] }
        ]
    },
    {
        id: 23,
        name: "Suresh Narayanan",
        userName: "@wayanad_poultry",
        email: "sureshn@example.com",
        password: "silkiehen",
        role: "breeder",
        profileImage: "https://media.istockphoto.com/id/147662457/photo/white-silkie-chicken.jpg?s=612x612&w=0&k=20&c=KW7kB7aLxJd_DKSGe2wLqpvKVsTGLaBMMoMwqgOe8C0=",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxE-QMxwGkbsBLVuJ9ztcKx5DQE4A9uTmNrgY84WubW-uuf9bFl_dDvsY&s=10",
        location: "Wayanad, Kerala",
        categories: ["Silkie Hen", "Brahma Hen"],
        experience: "7 Years",
        verified: false,
        rating: 4.5,
        bio: "Breeding structural show-quality fancy hens.",
        description: "Breeder managing high-altitude healthy stock of fluffy Silkie chickens and giant massive Brahma chickens.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 249, name: "Biju Wyd", userName: "@biju_wyd", userAvatar: "/images/users/user142.jpg" },
            { id: 250, name: "Kiran Dev", userName: "@kiran_dev", userAvatar: "/images/users/user143.jpg" }
        ],
        following: [
            { id: 251, name: "Fancy Fowl", userName: "@fancy_fowl", userAvatar: "/images/users/user144.jpg" },
            { id: 252, name: "Poultry Vet", userName: "@poultry_vet", userAvatar: "/images/users/user145.jpg" }
        ],
        contact: {
            email: "sureshn@example.com",
            phone: "+91 97472 88990",
            instagram: "https://instagram.com/wayanad_poultry",
            facebook: "https://facebook.com/wayanad_poultry"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/silkie_hatch.mp4", likes: 3400, comments: 180, shares: 410, views: 72000 },
            { id: 2, videoURL: "/videos/shorts/brahma_walk.mp4", likes: 4900, comments: 220, shares: 680, views: 98000 }
        ],
        posts: [
            { id: 45, image: "/images/posts/hen3.jpg", caption: "Fluffy White Silkie pairs ready.", likes: 620, views: 10500, shares: 50, comments: [{ userName: "@ammu", name: "Amrutha", userAvatar: "/images/users/user146.jpg", content: "Looks like cotton candy." }] },
            { id: 46, image: "/images/posts/hen4.jpg", caption: "Giant Buff Brahma Rooster.", likes: 810, views: 13800, shares: 95, comments: [{ userName: "@shaji_k", name: "Shaji", userAvatar: "/images/users/user147.jpg", content: "Massive size body structure." }] }
        ]
    },
    {
        id: 24,
        name: "Dr. Deepu Philip",
        userName: "@deepu_angora",
        email: "deepu@example.com",
        password: "angorafarm",
        role: "breeder",
        profileImage: "https://www.shutterstock.com/image-vector/rabbit-angora-cartoon-vector-illustration-260nw-2428024833.jpg",
        coverImage: "https://www.shutterstock.com/image-vector/rabbit-angora-cartoon-vector-illustration-260nw-2428024833.jpg",
        location: "Pathanamthitta, Kerala",
        categories: ["Angora Rabbit", "Dutch Rabbit"],
        experience: "9 Years",
        verified: true,
        rating: 4.7,
        bio: "Premium lineage show rabbits.",
        description: "Breeding show-grade long-haired Angora rabbits alongside standard bi-color Dutch rabbits inside weather-controlled barns.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 253, name: "Tinu Jacob", userName: "@tinu_j", userAvatar: "/images/users/user148.jpg" },
            { id: 254, name: "Reba Alex", userName: "@reba_a", userAvatar: "/images/users/user149.jpg" }
        ],
        following: [
            { id: 255, name: "Rabbit Breeders Association", userName: "@rba_india", userAvatar: "/images/users/user150.jpg" },
            { id: 256, name: "Pet Feed", userName: "@pet_feed_center", userAvatar: "/images/users/user151.jpg" }
        ],
        contact: {
            email: "deepu@example.com",
            phone: "+91 94460 11224",
            instagram: "https://instagram.com/deepu_angora",
            facebook: "https://facebook.com/deepu_angora"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/angora_brush.mp4", likes: 4100, comments: 195, shares: 320, views: 82000 },
            { id: 2, videoURL: "/videos/shorts/dutch_hop.mp4", likes: 2100, comments: 74, shares: 120, views: 41000 }
        ],
        posts: [
            { id: 47, image: "/images/posts/rab3.jpg", caption: "French Angora wooly bunnies available.", likes: 780, views: 12400, shares: 65, comments: [{ userName: "@stefan", name: "Stefan", userAvatar: "/images/users/user152.jpg", content: "Stunning coat quality." }] },
            { id: 48, image: "/images/posts/rab4.jpg", caption: "Black and White Dutch Rabbit juveniles.", likes: 530, views: 9100, shares: 42, comments: [{ userName: "@liya", name: "Liya", userAvatar: "/images/users/user153.jpg", content: "Perfect markings." }] }
        ]
    },
    {
        id: 25,
        name: "Anver Sadath",
        userName: "@malabar_mixed_birds",
        email: "anver@example.com",
        password: "mixedbirds1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UKxamPtqlChvaGj4VXUrhs4Ise64Z6Tdknt6MpSrtpUi1M7mIyE62fE&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0TuelCNLFcRdjT2Ya0RWf3FKin9MFSez4Sanz6VkvGvDcFOSyTvw8OMe&s=10",
        location: "Malappuram, Kerala",
        categories: ["Finch", "Budgerigar", "Cockatiel"],
        experience: "12 Years",
        verified: true,
        rating: 4.8,
        bio: "Large-scale aviary production setup.",
        description: "High-volume healthy multiplication center handling colorful Zebra Finches, Budgies, and pastel Cockatiel variants.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 254, name: "Ilyas M", userName: "@ilyas_m", userAvatar: "/images/users/user154.jpg" },
            { id: 255, name: "Razak K", userName: "@razak_k", userAvatar: "/images/users/user155.jpg" }
        ],
        following: [
            { id: 256, name: "Malabar Aviaries", userName: "@malabar_av", userAvatar: "/images/users/user156.jpg" },
            { id: 257, name: "Bird Feed India", userName: "@birdfeed_in", userAvatar: "/images/users/user157.jpg" }
        ],
        contact: {
            email: "anver@example.com",
            phone: "+91 99462 99001",
            instagram: "https://instagram.com/malabar_mixed_birds",
            facebook: "https://facebook.com/malabar_mixed_birds"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/finch_chirp.mp4", likes: 3900, comments: 140, shares: 310, views: 76000 },
            { id: 2, videoURL: "/videos/shorts/budgie_flock.mp4", likes: 5100, comments: 210, shares: 580, views: 99000 }
        ],
        posts: [
            { id: 49, image: "/images/posts/bird5.jpg", caption: "Gouldian Finches vibrant colors update.", likes: 1100, views: 18000, shares: 140, comments: [{ userName: "@hassan", name: "Hassan", userAvatar: "/images/users/user158.jpg", content: "Vibrant plumage!" }] },
            { id: 50, image: "/images/posts/bird6.jpg", caption: "Show size Rainbow Budgies.", likes: 780, views: 12500, shares: 70, comments: [{ userName: "@sree", name: "Sreejith", userAvatar: "/images/users/user159.jpg", content: "Beautiful clear body." }] }
        ]
    },
    {
        id: 26,
        name: "Arun Kumar",
        userName: "@arun_cichlids",
        email: "arunk@example.com",
        password: "cichlidlover",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HKn1LpKjTnRU8X4fCw0IrW9_1y3s7Lu7qnbjkD5o9qmndIcBlGtK1pA&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF90zqbP9aE2nX_FpxzEonmSWavRVWhZpQ6WV1JimnC0a_Uw7CyTQW0Hlx&s=10",
        location: "Kollam, Kerala",
        categories: ["Malawi Cichlids", "Tanganyika Cichlids"],
        experience: "8 Years",
        verified: true,
        rating: 4.7,
        bio: "Premium African Cichlid strains.",
        description: "Breeding vibrant Rift Valley lake cichlids, optimizing clean hard-alkaline water setups for ultimate high coloration profile.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 258, name: "Gopu R", userName: "@gopu_r", userAvatar: "/images/users/user160.jpg" },
            { id: 259, name: "Manu Kollam", userName: "@manu_klm", userAvatar: "/images/users/user161.jpg" }
        ],
        following: [
            { id: 260, name: "Cichlid India", userName: "@cichlids_india", userAvatar: "/images/users/user162.jpg" },
            { id: 261, name: "Tank Busters", userName: "@tank_busters", userAvatar: "/images/users/user163.jpg" }
        ],
        contact: {
            email: "arunk@example.com",
            phone: "+91 95673 44551",
            instagram: "https://instagram.com/arun_cichlids",
            facebook: "https://facebook.com/arun_cichlids"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/cichlid_dance.mp4", likes: 2100, comments: 88, shares: 140, views: 42000 },
            { id: 2, videoURL: "/videos/shorts/peacock_cichlid.mp4", likes: 3400, comments: 150, shares: 290, views: 68000 }
        ],
        posts: [
            { id: 51, image: "/images/posts/fish25.jpg", caption: "OB Peacock Cichlids high quality.", likes: 520, views: 8900, shares: 45, comments: [{ userName: "@vivek", name: "Vivek", userAvatar: "/images/users/user164.jpg", content: "Crazy patterns." }] },
            { id: 52, image: "/images/posts/fish26.jpg", caption: "Frontosa Cyphotilapia juveniles.", likes: 460, views: 7200, shares: 30, comments: [{ userName: "@nandu", name: "Nandakumar", userAvatar: "/images/users/user165.jpg", content: "Nice clean humps." }] }
        ]
    },
    {
        id: 27,
        name: "Safeer Ibrahim",
        userName: "@safeer_exotic_cats",
        email: "safeer@example.com",
        password: "bengalcat1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuXlF1OWG8J5fA_CY--dIDyjL9Y2UlPeQeMAO7V2acB_RXwZ2IGT5ZBSI&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDKIaCbAQfgAim4RWDMRuOYsM3LKdWm6ABQb2kOrOuy7i3uNftUSVFAk&s=10",
        location: "Malappuram, Kerala",
        categories: ["Bengal Cat", "Maine Coon"],
        experience: "6 Years",
        verified: true,
        rating: 4.9,
        bio: "Wild looks, domestic hearts.",
        description: "Breeding high-end rosette pattern Bengal cats and heavy-maned giant Maine Coons with verified championship bloodlines.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 262, name: "Jaseel M", userName: "@jaseel_m", userAvatar: "/images/users/user166.jpg" },
            { id: 263, name: "Sharafu", userName: "@sharafu_p", userAvatar: "/images/users/user167.jpg" }
        ],
        following: [
            { id: 264, name: "TICA India", userName: "@tica_india", userAvatar: "/images/users/user168.jpg" },
            { id: 265, name: "Exotic Felines", userName: "@exotic_felines", userAvatar: "/images/users/user169.jpg" }
        ],
        contact: {
            email: "safeer@example.com",
            phone: "+91 99612 88994",
            instagram: "https://instagram.com/safeer_exotic_cats",
            facebook: "https://facebook.com/safeer_exotic_cats"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/bengal_jump.mp4", likes: 11000, comments: 480, shares: 2100, views: 250000 },
            { id: 2, videoURL: "/videos/shorts/mainecoon_size.mp4", likes: 16000, comments: 890, shares: 4600, views: 390000 }
        ],
        posts: [
            { id: 53, image: "/images/posts/cat5.jpg", caption: "Glitter-coated spotted Bengal kitten.", likes: 2700, views: 48000, shares: 390, comments: [{ userName: "@fahad", name: "Fahad", userAvatar: "/images/users/user170.jpg", content: "Leopard lookalike!" }] },
            { id: 54, image: "/images/posts/cat6.jpg", caption: "Giant Maine Coon male 8 months old.", likes: 3200, views: 59000, shares: 580, comments: [{ userName: "@dixit", name: "Dixit", userAvatar: "/images/users/user171.jpg", content: "Absolute unit of a cat." }] }
        ]
    },
    {
        id: 28,
        name: "Rani Mathew",
        userName: "@kochi_birds",
        email: "rani@example.com",
        password: "canarybirds",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPTw6jCqRBW3vZo1orlRCP8vqoo5iXJ7zsWyRS08pCitgp5fPl_95Jh9v&s=10",
        coverImage: "https://i.ytimg.com/vi/6ZAhj3t2SNs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBlLnQO6hkXgBtcIeLdANtBJ7jelA",
        location: "Kochi, Kerala",
        categories: ["Canary Bird", "Java Sparrow"],
        experience: "5 Years",
        verified: false,
        rating: 4.4,
        bio: "Melodious singing birds breeder.",
        description: "Specialized breeding setup for high-singing Yellow Canaries and balanced color strains of Java Sparrows.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 266, name: "Treesa", userName: "@treesa_j", userAvatar: "/images/users/user172.jpg" },
            { id: 267, name: "Kevin Paul", userName: "@kevin_p", userAvatar: "/images/users/user173.jpg" }
        ],
        following: [
            { id: 268, name: "Song Birds Club", userName: "@songbirds", userAvatar: "/images/users/user174.jpg" },
            { id: 269, name: "Avian Nutrition", userName: "@avian_nutri", userAvatar: "/images/users/user175.jpg" }
        ],
        contact: {
            email: "rani@example.com",
            phone: "+91 94464 77881",
            instagram: "https://instagram.com/kochi_birds",
            facebook: "https://facebook.com/kochi_birds"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/canary_singing.mp4", likes: 6200, comments: 410, shares: 1300, views: 145000 },
            { id: 2, videoURL: "/videos/shorts/java_sparrow.mp4", likes: 1800, comments: 62, shares: 110, views: 32000 }
        ],
        posts: [
            { id: 55, image: "/images/posts/bird7.jpg", caption: "Vocal German Roller Canaries.", likes: 710, views: 11000, shares: 60, comments: [{ userName: "@mercy", name: "Mercy", userAvatar: "/images/users/user176.jpg", content: "Beautiful voice." }] },
            { id: 56, image: "/images/posts/bird8.jpg", caption: "White Java Sparrow pairs.", likes: 490, views: 8200, shares: 28, comments: [{ userName: "@jojo_e", name: "Jojo", userAvatar: "/images/users/user177.jpg", content: "Very neat birds." }] }
        ]
    },
    {
        id: 29,
        name: "Sajad Ahmed",
        userName: "@sajad_bullies",
        email: "sajad@example.com",
        password: "americanbully",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiMGV7MbgJ761pm8pGkI-WWGWACMHBbHB80bermfNpLiiHH3LFZV5fM8&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozdcXftZy_gJnz0ZZkhWybhua8ugnIQ28gaPz2MS-rg&s=10",
        location: "Thrissur, Kerala",
        categories: ["American Bully", "French Bulldog"],
        experience: "7 Years",
        verified: true,
        rating: 4.8,
        bio: "Pocket and Micro Bully elite lines.",
        description: "Breeding heavy muscle structure American Bullies and exotic color French Bulldogs with ABKC registration standards.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 270, name: "Ginto", userName: "@ginto_t", userAvatar: "/images/users/user178.jpg" },
            { id: 271, name: "Midhun TCR", userName: "@midhun_tcr", userAvatar: "/images/users/user179.jpg" }
        ],
        following: [
            { id: 272, name: "ABKC India", userName: "@abkc_india", userAvatar: "/images/users/user180.jpg" },
            { id: 273, name: "Bully Worldwide", userName: "@bully_world", userAvatar: "/images/users/user181.jpg" }
        ],
        contact: {
            email: "sajad@example.com",
            phone: "+91 97450 11225",
            instagram: "https://instagram.com/sajad_bullies",
            facebook: "https://facebook.com/sajad_bullies"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/bully_walk.mp4", likes: 8400, comments: 390, shares: 1400, views: 175000 },
            { id: 2, videoURL: "/videos/shorts/frenchie_cute.mp4", likes: 11000, comments: 620, shares: 2800, views: 230000 }
        ],
        posts: [
            { id: 57, image: "/images/posts/dog7.jpg", caption: "Extreme Pocket Bully lilac line pups.", likes: 2100, views: 39000, shares: 410, comments: [{ userName: "@akshay", name: "Akshay", userAvatar: "/images/users/user182.jpg", content: "Monster bone gauge!" }] },
            { id: 58, image: "/images/posts/dog8.jpg", caption: "Blue Fawn French Bulldog male.", likes: 1600, views: 28000, shares: 290, comments: [{ userName: "@tina", name: "Tina", userAvatar: "/images/users/user183.jpg", content: "So adorable structure." }] }
        ]
    },
    {
        id: 30,
        name: "Rajesh Kannan",
        userName: "@kannan_poultry",
        email: "rajesh@example.com",
        password: "polandhen1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8LtH4scm8K_LdaJdzhmYg7AxeeNnJyIiZo2AjWp2Ky7qcF6BBX2xPzu26&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHE-4bd32fGODlxGbj0Gr-ce_BOkXaXn2PTnQdPq_FPn_Jh7dYK-yNfY&s=10",
        location: "Palakkad, Kerala",
        categories: ["Poland Hen", "Onagadori"],
        experience: "9 Years",
        verified: true,
        rating: 4.6,
        bio: "Exotic long-tailed ornamental poultry.",
        description: "Breeding authentic Japanese long-tailed Onagadori strains alongside unique top-knotted Poland ornamental chickens.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 274, name: "Balakrishnan", userName: "@bala_pkd", userAvatar: "/images/users/user184.jpg" },
            { id: 275, name: "Syam Kumar", userName: "@syam_k", userAvatar: "/images/users/user185.jpg" }
        ],
        following: [
            { id: 276, name: "Ornamental Fowl", userName: "@ornamental_fowl", userAvatar: "/images/users/user186.jpg" },
            { id: 277, name: "Hatchery Systems", userName: "@hatch_tech", userAvatar: "/images/users/user187.jpg" }
        ],
        contact: {
            email: "rajesh@example.com",
            phone: "+91 94473 66552",
            instagram: "https://instagram.com/kannan_poultry",
            facebook: "https://facebook.com/kannan_poultry"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/onagadori_tail.mp4", likes: 7300, comments: 290, shares: 840, views: 155000 },
            { id: 2, videoURL: "/videos/shorts/poland_chicks.mp4", likes: 2400, comments: 95, shares: 140, views: 49000 }
        ],
        posts: [
            { id: 59, image: "/images/posts/hen5.jpg", caption: "Purebred Japanese Onagadori cockerel.", likes: 930, views: 16000, shares: 120, comments: [{ userName: "@vinod_r", name: "Vinod", userAvatar: "/images/users/user188.jpg", content: "Amazing tail length." }] },
            { id: 60, image: "/images/posts/hen6.jpg", caption: "Frizzle Poland crested hens.", likes: 610, views: 10200, shares: 55, comments: [{ userName: "@devika", name: "Devika", userAvatar: "/images/users/user189.jpg", content: "Crown looks perfect." }] }
        ]
    },
    {
        id: 31,
        name: "Thomas Abraham",
        userName: "@highland_rabbits",
        email: "thomasa@example.com",
        password: "flemishgiant",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39_y_1Z8-m-GwhOYfq5CZX_K05V9rdhE0ZWybvOuC4EqbMwzZxs-FbELy&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnteYJyHZQF3Jss3mGYHo50BHTOndyFCVo-q78I3ouA&s",
        location: "Idukki, Kerala",
        categories: ["Flemish Giant", "Rex Rabbit"],
        experience: "10 Years",
        verified: true,
        rating: 4.8,
        bio: "Giant and velvety fur rabbit breeds.",
        description: "Specialized cold-climate breeding of massive Flemish Giant lines and plush velvet coat Rex rabbits for hobbyists.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 278, name: "Mathew J", userName: "@mathew_j", userAvatar: "/images/users/user190.jpg" },
            { id: 279, name: "Sherin", userName: "@sherin_idk", userAvatar: "/images/users/user191.jpg" }
        ],
        following: [
            { id: 280, name: "Rabbitry India", userName: "@rabbitry_in", userAvatar: "/images/users/user192.jpg" },
            { id: 281, name: "Green Feed Co", userName: "@green_feed", userAvatar: "/images/users/user193.jpg" }
        ],
        contact: {
            email: "thomasa@example.com",
            phone: "+91 94465 11992",
            instagram: "https://instagram.com/highland_rabbits",
            facebook: "https://facebook.com/highland_rabbits"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/flemish_giant_size.mp4", likes: 6800, comments: 310, shares: 740, views: 130000 },
            { id: 2, videoURL: "/videos/shorts/rex_fur.mp4", likes: 3400, comments: 120, shares: 290, views: 58000 }
        ],
        posts: [
            { id: 61, image: "/images/posts/rab5.jpg", caption: "Flemish Giant kits 60 days old.", likes: 890, views: 14500, shares: 90, comments: [{ userName: "@roshan", name: "Roshan", userAvatar: "/images/users/user194.jpg", content: "Big ears!" }] },
            { id: 62, image: "/images/posts/rab6.jpg", caption: "Castor Rex rabbit premium plush coat.", likes: 670, views: 11000, shares: 50, comments: [{ userName: "@linda", name: "Linda", userAvatar: "/images/users/user195.jpg", content: "Looks like velvet fabric." }] }
        ]
    },
    {
        id: 32,
        name: "Muhammed Nizar",
        userName: "@malabar_mix_farm",
        email: "nizar@example.com",
        password: "nizarfarm123",
        role: "breeder",
        profileImage: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/pet-persian-cat-vxl7h6f-250.jpg",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZX3FFhmqAuEjeW2H_NnQq9BRaMVgSzC-5q0LVHA-zJUt9-YOp5vQXcA&s=10",
        location: "Malappuram, Kerala",
        categories: ["Persian Cat", "Fancy Hens", "Guppy"],
        experience: "8 Years",
        verified: true,
        rating: 4.7,
        bio: "Diverse home-breeding farm setup.",
        description: "Integrating high-grade Persian cat breeding alongside dual line show-quality fancy poultry and selective strain guppy pools.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 282, name: "Shibili K", userName: "@shibili_k", userAvatar: "/images/users/user196.jpg" },
            { id: 283, name: "Yahiya", userName: "@yahiya_v", userAvatar: "/images/users/user197.jpg" }
        ],
        following: [
            { id: 284, name: "Integrated Farming", userName: "@integrated_farm", userAvatar: "/images/users/user198.jpg" },
            { id: 285, name: "Pet Logistics", userName: "@pet_shipping", userAvatar: "/images/users/user199.jpg" }
        ],
        contact: {
            email: "nizar@example.com",
            phone: "+91 99954 33226",
            instagram: "https://instagram.com/malabar_mix_farm",
            facebook: "https://facebook.com/malabar_mix_farm"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/integrated_farm_tour.mp4", likes: 5900, comments: 240, shares: 610, views: 115000 },
            { id: 2, videoURL: "/videos/shorts/cat_poultry_share.mp4", likes: 4200, comments: 180, shares: 390, views: 89000 }
        ],
        posts: [
            { id: 63, image: "/images/posts/mix3.jpg", caption: "Pure white doll-face Persian kittens.", likes: 1300, views: 22000, shares: 180, comments: [{ userName: "@salman", name: "Salman", userAvatar: "/images/users/user200.jpg", content: "Healthy looking kittens." }] },
            { id: 64, image: "/images/posts/mix4.jpg", caption: "Sebright Bantam fancy hen breeding set.", likes: 740, views: 12800, shares: 65, comments: [{ userName: "@ashik", name: "Ashik", userAvatar: "/images/users/user201.jpg", content: "Lacing is sharp." }] }
        ]
    },
    {
        id: 33,
        name: "Deepak Sankar",
        userName: "@deepak_monsters",
        email: "deepaks@example.com",
        password: "snakeheadfish",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzauB9yRDU3RhMENtVuM5xrzhPf3-zhWhZXgrWieZYimzbaptX9nqQGjT9&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzauB9yRDU3RhMENtVuM5xrzhPf3-zhWhZXgrWieZYimzbaptX9nqQGjT9&s=10",
        location: "Alappuzha, Kerala",
        categories: ["Channa", "Alligator Gar"],
        experience: "6 Years",
        verified: true,
        rating: 4.6,
        bio: "Specializing in exotic predatory fish lineages.",
        description: "Breeding elite variants of Monster Snakeheads (Channa) and large predatory Gar varieties under optimal biological filtration systems.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 286, name: "Manu A", userName: "@manu_a", userAvatar: "/images/users/user202.jpg" },
            { id: 287, name: "Syam Alp", userName: "@syam_alp", userAvatar: "/images/users/user203.jpg" }
        ],
        following: [
            { id: 288, name: "Monster Fish Keepers", userName: "@mfk_india", userAvatar: "/images/users/user204.jpg" },
            { id: 289, name: "Predator Life", userName: "@predator_aqua", userAvatar: "/images/users/user205.jpg" }
        ],
        contact: {
            email: "deepaks@example.com",
            phone: "+91 94951 88773",
            instagram: "https://instagram.com/deepak_monsters",
            facebook: "https://facebook.com/deepak_monsters"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/channa_flare.mp4", likes: 4900, comments: 210, shares: 430, views: 92000 },
            { id: 2, videoURL: "/videos/shorts/gar_feeding.mp4", likes: 6800, comments: 320, shares: 790, views: 140000 }
        ],
        posts: [
            { id: 65, image: "/images/posts/fish29.jpg", caption: "Channa Aurantimaculata premium update.", likes: 820, views: 13500, shares: 75, comments: [{ userName: "@sabir", name: "Sabir", userAvatar: "/images/users/user206.jpg", content: "Stunning yellow bands." }] },
            { id: 66, image: "/images/posts/fish30.jpg", caption: "Platinum Alligator Gar juvenile.", likes: 970, views: 16200, shares: 110, comments: [{ userName: "@vishnu_r", name: "Vishnu", userAvatar: "/images/users/user207.jpg", content: "Flawless white sheen." }] }
        ]
    },
    {
        id: 34,
        name: "Dr. Fathima Riaz",
        userName: "@fathima_cattery",
        email: "fathimar@example.com",
        password: "ragdollcat",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45XQvj5S1_oPEl_j2do3VGha-AMT07LU4zfgf1-bpUIEeWmdDE0U-gnY&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcGNm_rDU40-23U11ZKj33qxbsQ0-32FwhgZLoVyKuIESfwvzt9xUnhQ&s=10",
        location: "Ernakulam, Kerala",
        categories: ["Ragdoll Cat"],
        experience: "5 Years",
        verified: true,
        rating: 4.9,
        bio: "Authentic imported lineage Ragdolls.",
        description: "Licensed veterinary doctor offering lineage-traced, highly docile Ragdoll kittens raised in a hygienic indoor cattery environment.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 290, name: "Riya S", userName: "@riya_s", userAvatar: "/images/users/user208.jpg" },
            { id: 291, name: "Anjali Mukund", userName: "@anjali_m", userAvatar: "/images/users/user209.jpg" }
        ],
        following: [
            { id: 292, name: "Cat Council India", userName: "@cci_cats", userAvatar: "/images/users/user210.jpg" },
            { id: 293, name: "Feline Nutrition", userName: "@feline_nutri", userAvatar: "/images/users/user211.jpg" }
        ],
        contact: {
            email: "fathimar@example.com",
            phone: "+91 90374 99885",
            instagram: "https://instagram.com/fathima_cattery",
            facebook: "https://facebook.com/fathima_cattery"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/ragdoll_flop.mp4", likes: 8900, comments: 420, shares: 1600, views: 180000 },
            { id: 2, videoURL: "/videos/shorts/kitten_eyes.mp4", likes: 12000, comments: 750, shares: 3200, views: 260000 }
        ],
        posts: [
            { id: 67, image: "/images/posts/cat7.jpg", caption: "Blue Bicolor Ragdoll kitten premium line.", likes: 2400, views: 41000, shares: 360, comments: [{ userName: "@meera_v", name: "Meera", userAvatar: "/images/users/user212.jpg", content: "So soft and dreamy!" }] },
            { id: 68, image: "/images/posts/cat8.jpg", caption: "Seal Point queen checking in.", likes: 1800, views: 31000, shares: 210, comments: [{ userName: "@jibin", name: "Jibin", userAvatar: "/images/users/user213.jpg", content: "Stunning eye blue intensity." }] }
        ]
    },
    {
        id: 35,
        name: "Vipin Chandran",
        userName: "@vipin_pigeons",
        email: "vipinc@example.com",
        password: "fancylofts",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXjrKcTamGkX2z8baCsna47msoz5z6B3oqd6BS43ehg&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXjrKcTamGkX2z8baCsna47msoz5z6B3oqd6BS43ehg&s=10",
        location: "Thrissur, Kerala",
        categories: ["Modena Pigeon", "Muff Pigeon"],
        experience: "7 Years",
        verified: false,
        rating: 4.5,
        bio: "Exhibition structural fancy pigeons.",
        description: "Cultivating blocky show structure Gazzi Modena lines and heavy-feathered boot style Muff Pigeons.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 294, name: "Sujith P", userName: "@sujith_p", userAvatar: "/images/users/user214.jpg" },
            { id: 295, name: "Jinto Joy", userName: "@jinto_joy", userAvatar: "/images/users/user215.jpg" }
        ],
        following: [
            { id: 296, name: "Fancy Pigeons India", userName: "@fancy_pigeon_in", userAvatar: "/images/users/user216.jpg" },
            { id: 297, name: "Loft Systems", userName: "@loft_systems", userAvatar: "/images/users/user217.jpg" }
        ],
        contact: {
            email: "vipinc@example.com",
            phone: "+91 85930 11442",
            instagram: "https://instagram.com/vipin_pigeons",
            facebook: "https://facebook.com/vipin_pigeons"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/modena_strut.mp4", likes: 2800, comments: 95, shares: 140, views: 51000 },
            { id: 2, videoURL: "/videos/shorts/muff_cleaning.mp4", likes: 1900, comments: 64, shares: 80, views: 34000 }
        ],
        posts: [
            { id: 69, image: "/images/posts/pig3.jpg", caption: "Schietti Modena breeding pair color premium.", likes: 580, views: 9800, shares: 42, comments: [{ userName: "@akbar", name: "Akbar", userAvatar: "/images/users/user218.jpg", content: "Very compact body shape." }] },
            { id: 70, image: "/images/posts/pig4.jpg", caption: "Heavy booted Tiger Muff pigeon.", likes: 470, views: 7900, shares: 30, comments: [{ userName: "@bibin_m", name: "Bibin", userAvatar: "/images/users/user219.jpg", content: "Feather length is long." }] }
        ]
    },
    {
        id: 36,
        name: "Rinoj Malabar",
        userName: "@malabar_rottweilers",
        email: "rinojm@example.com",
        password: "rottweilerpro",
        role: "breeder",
        profileImage: "https://supertails.com/cdn/shop/articles/screenshot-2026-06-23-161451_aec417be-8adc-44ed-aa7e-72bdb1de39c9.png?v=1782214582",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsJsn4ZhrAvKhCpBE4c_z0dcKlIYp6krYIUtJhdslyVJuVrFyy-LHbr72&s=10",
        location: "Kozhikode, Kerala",
        categories: ["Rottweiler"],
        experience: "11 Years",
        verified: true,
        rating: 4.8,
        bio: "ADRK German lineage working Rottweilers.",
        description: "Dedicated to standard compact heavy skulls, dark mouth pigmentation, and balanced guard drive Rottweilers under KCI frameworks.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 298, name: "Pradeep K", userName: "@pradeep_k", userAvatar: "/images/users/user220.jpg" },
            { id: 299, name: "Shiju Lal", userName: "@shiju_lal", userAvatar: "/images/users/user221.jpg" }
        ],
        following: [
            { id: 300, name: "Rottweiler Club India", userName: "@rott_club", userAvatar: "/images/users/user222.jpg" },
            { id: 301, name: "K9 Academy", userName: "@k9_academy", userAvatar: "/images/users/user223.jpg" }
        ],
        contact: {
            email: "rinojm@example.com",
            phone: "+91 94476 33117",
            instagram: "https://instagram.com/malabar_rottweilers",
            facebook: "https://facebook.com/malabar_rottweilers"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/rottweiler_bite.mp4", likes: 9200, comments: 510, shares: 1800, views: 210000 },
            { id: 2, videoURL: "/videos/shorts/rott_pups_feed.mp4", likes: 6400, comments: 280, shares: 730, views: 125000 }
        ],
        posts: [
            { id: 71, image: "/images/posts/dog9.jpg", caption: "Import line ADRK pedigree Rottweiler pups.", likes: 1900, views: 34000, shares: 280, comments: [{ userName: "@subhash", name: "Subhash", userAvatar: "/images/users/user224.jpg", content: "Massive blocky heads." }] },
            { id: 72, image: "/images/posts/dog10.jpg", caption: "Stud dog conformation validation track.", likes: 1300, views: 22000, shares: 120, comments: [{ userName: "@jayan_v", name: "Jayan", userAvatar: "/images/users/user225.jpg", content: "Deep tan markings profile." }] }
        ]
    },
    {
        id: 37,
        name: "Shameer Babu",
        userName: "@shameer_betta_zone",
        email: "shameerb@example.com",
        password: "bettazone123",
        role: "breeder",
        profileImage: "https://cdn.shopify.com/s/files/1/0667/6237/5466/files/betta-fish-collection-asset.png?v=1767480089",
        coverImage: "https://png.pngtree.com/thumb_back/fw800/background/20240727/pngtree-yellow-gold-betta-fish-siamese-fighting-fish-on-black-background-image_15928714.jpg",
        location: "Malappuram, Kerala",
        categories: ["Betta Fish"],
        experience: "6 Years",
        verified: true,
        rating: 4.7,
        bio: "Avatar & Alien Betta strain line specialist.",
        description: "Breeding show-grade wild hybrid Alien Bettas and multi-color metallic flake Avatar lines for serious competition entries.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 302, name: "Zuhair", userName: "@zuhair_p", userAvatar: "/images/users/user226.jpg" },
            { id: 303, name: "Basith M", userName: "@basith_m", userAvatar: "/images/users/user227.jpg" }
        ],
        following: [
            { id: 304, name: "Betta Congress India", userName: "@ibc_india", userAvatar: "/images/users/user228.jpg" },
            { id: 305, name: "Aqua Life Malabar", userName: "@aqua_malabar", userAvatar: "/images/users/user229.jpg" }
        ],
        contact: {
            email: "shameerb@example.com",
            phone: "+91 99956 77661",
            instagram: "https://instagram.com/shameer_betta_zone",
            facebook: "https://facebook.com/shameer_betta_zone"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/alien_betta.mp4", likes: 3100, comments: 140, shares: 280, views: 62000 },
            { id: 2, videoURL: "/videos/shorts/avatar_flare.mp4", likes: 4200, comments: 195, shares: 390, views: 84000 }
        ],
        posts: [
            { id: 73, image: "/images/posts/fish33.jpg", caption: "Green Alien Betta pair show condition.", likes: 690, views: 11200, shares: 48, comments: [{ userName: "@rahim", name: "Rahim", userAvatar: "/images/users/user230.jpg", content: "Flawless pattern mask." }] },
            { id: 74, image: "/images/posts/fish34.jpg", caption: "Gordon Blue Avatar Betta male.", likes: 580, views: 9500, shares: 35, comments: [{ userName: "@anas_k", name: "Anas", userAvatar: "/images/users/user231.jpg", content: "Intense flake shine." }] }
        ]
    },
    {
        id: 38,
        name: "Kiran Prasad",
        userName: "@kiran_poultry_farm",
        email: "kiranp@example.com",
        password: "cochinbantam",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07_Ywx8PfA0gWle8F8pAPI7ZAeG-fQxh64wNlsZV5REISEGuU6ody-2m0&s=10",
        coverImage: "https://www.alchemistfarm.com/wp-content/uploads/2016/12/bantam-blue-and-splash-cochin-hens-alchemist-farm-sebastopol-california-2016-1.jpg",
        location: "Kollam, Kerala",
        categories: ["Cochin Bantam", "Sebright Bantam"],
        experience: "5 Years",
        verified: false,
        rating: 4.4,
        bio: "Miniature heavy-feathered ornamental bantams.",
        description: "Breeding true-to-type round ball shape Cochin Bantams and clean laced Sebright configurations.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 306, name: "Renjith K", userName: "@renjith_k", userAvatar: "/images/users/user232.jpg" },
            { id: 307, name: "Akhil Das", userName: "@akhil_klm", userAvatar: "/images/users/user233.jpg" }
        ],
        following: [
            { id: 308, name: "Bantam Club India", userName: "@bantam_club", userAvatar: "/images/users/user234.jpg" },
            { id: 309, name: "Poultry Feed Co", userName: "@p_feed", userAvatar: "/images/users/user235.jpg" }
        ],
        contact: {
            email: "kiranp@example.com",
            phone: "+91 95627 11449",
            instagram: "https://instagram.com/kiran_poultry_farm",
            facebook: "https://facebook.com/kiran_poultry_farm"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/cochin_walk.mp4", likes: 2100, comments: 74, shares: 110, views: 42000 },
            { id: 2, videoURL: "/videos/shorts/sebright_lace.mp4", likes: 3200, comments: 130, shares: 240, views: 61000 }
        ],
        posts: [
            { id: 75, image: "/images/posts/hen7.jpg", caption: "Buff Cochin Bantam round fluff birds.", likes: 480, views: 7900, shares: 32, comments: [{ userName: "@arya", name: "Arya", userAvatar: "/images/users/user236.jpg", content: "So small and cute." }] },
            { id: 76, image: "/images/posts/hen8.jpg", caption: "Silver Sebright trio ready.", likes: 590, views: 9300, shares: 40, comments: [{ userName: "@sajan", name: "Sajan", userAvatar: "/images/users/user237.jpg", content: "Perfect black margins border." }] }
        ]
    },
    {
        id: 39,
        name: "Manoj Kumar",
        userName: "@manoj_rabbitry",
        email: "manoj@example.com",
        password: "californianrab",
        role: "breeder",
        profileImage: "https://media.istockphoto.com/id/1126077948/photo/rabbit.jpg?s=612x612&w=0&k=20&c=atXLgAuF9zvOex666YXmzeXNKqbSRBqKwcxuSV2GKoI=",
        coverImage: "https://media.istockphoto.com/id/1126077948/photo/rabbit.jpg?s=612x612&w=0&k=20&c=atXLgAuF9zvOex666YXmzeXNKqbSRBqKwcxuSV2GKoI=",
        location: "Alappuzha, Kerala",
        categories: ["Californian Rabbit", "English Spot"],
        experience: "8 Years",
        verified: true,
        rating: 4.7,
        bio: "High quality commercial pure rabbit breeds.",
        description: "Breeding dark point Californian rabbits and distinct line patterned English Spot fancy varieties.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 310, name: "Jomon", userName: "@jomon_alp", userAvatar: "/images/users/user238.jpg" },
            { id: 311, name: "Sreehari", userName: "@sree_hari", userAvatar: "/images/users/user239.jpg" }
        ],
        following: [
            { id: 312, name: "Rabbit Farming Systems", userName: "@rabbit_systems", userAvatar: "/images/users/user240.jpg" },
            { id: 313, name: "Agri Tech Corp", userName: "@agri_tech", userAvatar: "/images/users/user241.jpg" }
        ],
        contact: {
            email: "manoj@example.com",
            phone: "+91 94474 88339",
            instagram: "https://instagram.com/manoj_rabbitry",
            facebook: "https://facebook.com/manoj_rabbitry"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/californian_points.mp4", likes: 3800, comments: 150, shares: 290, views: 74000 },
            { id: 2, videoURL: "/videos/shorts/english_spot.mp4", likes: 2300, comments: 88, shares: 130, views: 48000 }
        ],
        posts: [
            { id: 77, image: "/images/posts/rab7.jpg", caption: "Californian breed stock dark nose markings.", likes: 620, views: 10500, shares: 45, comments: [{ userName: "@praseed", name: "Praseed", userAvatar: "/images/users/user242.jpg", content: "Very neat stock lines." }] },
            { id: 78, image: "/images/posts/rab8.jpg", caption: "English Spot breeding buck.", likes: 510, views: 8600, shares: 35, comments: [{ userName: "@nimisha_r", name: "Nimisha", userAvatar: "/images/users/user243.jpg", content: "Clean backbone stripe pattern." }] }
        ]
    },
    {
        id: 40,
        name: "Anas Vengara",
        userName: "@malabar_integrated",
        email: "anasv@example.com",
        password: "integratedfarm1",
        role: "breeder",
        profileImage: "https://static.vecteezy.com/system/resources/thumbnails/070/041/667/small/a-modern-and-stylized-koi-fish-logo-featuring-an-orange-koi-swimming-in-a-circular-motion-vector.jpg",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRCrWUAx4vqu2uGcHGpIeSJXa3c-RsKs74S4Hv19msGTvH5D-hRnCUNko&s=10",
        location: "Malappuram, Kerala",
        categories: ["German Shepherd", "Aseel Hen", "Koi Fish"],
        experience: "14 Years",
        verified: true,
        rating: 4.9,
        bio: "Champion working dog and gamefowl lineage hub.",
        description: "Large scale multi breed complex providing working class GSD pups, high line heavy Aseel lines, and earth pond Koi harvests.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 314, name: "Rafeeq Vgr", userName: "@rafeeq_vgr", userAvatar: "/images/users/user244.jpg" },
            { id: 315, name: "Suhail T", userName: "@suhail_t", userAvatar: "/images/users/user245.jpg" }
        ],
        following: [
            { id: 316, name: "Kerala Farm Network", userName: "@kl_farms", userAvatar: "/images/users/user246.jpg" },
            { id: 317, name: "Pet Logistics India", userName: "@pet_logistics", userAvatar: "/images/users/user247.jpg" }
        ],
        contact: {
            email: "anasv@example.com",
            phone: "+91 99955 88992",
            instagram: "https://instagram.com/malabar_integrated",
            facebook: "https://facebook.com/malabar_integrated"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/gsd_guarding.mp4", likes: 12000, comments: 640, shares: 2900, views: 280000 },
            { id: 2, videoURL: "/videos/shorts/koi_harvest_pond.mp4", likes: 8100, comments: 390, shares: 1200, views: 165000 }
        ],
        posts: [
            { id: 79, image: "/images/posts/mix5.jpg", caption: "High drive German Shepherd working pups.", likes: 2900, views: 52000, shares: 480, comments: [{ userName: "@shahul", name: "Shahul", userAvatar: "/images/users/user248.jpg", content: "Super drive expression." }] },
            { id: 80, image: "/images/posts/mix6.jpg", caption: "Malabari Aseel high standing rooster.", likes: 1400, views: 24000, shares: 195, comments: [{ userName: "@musthafa", name: "Musthafa", userAvatar: "/images/users/user249.jpg", content: "Bone structure thickness is massive." }] }
        ]
    },
    {
        id: 41,
        name: "Sujith Kumar",
        userName: "@sujith_discus",
        email: "sujith@example.com",
        password: "discusmaster",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwlXWRJIbS3cpg5hrNIjXeD1q2FBKn9jrHcYI-7EXGg&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/discus-fish-aquarium-325997659.jpg",
        location: "Ernakulam, Kerala",
        categories: ["Discus"],
        experience: "9 Years",
        verified: true,
        rating: 4.8,
        bio: "High end strain imported Discus lines.",
        description: "Breeding premium round form Pigeon Blood, Blue Diamond, and Heckel cross Discus variants in clean reverse osmosis water matrices.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 318, name: "Lijo EKM", userName: "@lijo_ekm", userAvatar: "/images/users/user250.jpg" },
            { id: 319, name: "Pranav M", userName: "@pranav_m", userAvatar: "/images/users/user251.jpg" }
        ],
        following: [
            { id: 320, name: "Discus Club India", userName: "@discus_india", userAvatar: "/images/users/user252.jpg" },
            { id: 321, name: "Water Chemistry", userName: "@water_chem", userAvatar: "/images/users/user253.jpg" }
        ],
        contact: {
            email: "sujith@example.com",
            phone: "+91 98472 11448",
            instagram: "https://instagram.com/sujith_discus",
            facebook: "https://facebook.com/sujith_discus"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/discus_fry_feed.mp4", likes: 4200, comments: 190, shares: 340, views: 82000 },
            { id: 2, videoURL: "/videos/shorts/discus_display.mp4", likes: 6100, comments: 270, shares: 680, views: 115000 }
        ],
        posts: [
            { id: 81, image: "/images/posts/fish37.jpg", caption: "Checkerboard Pigeon Blood Discus breeding pair.", likes: 980, views: 16000, shares: 90, comments: [{ userName: "@george", name: "George", userAvatar: "/images/users/user254.jpg", content: "Flawless round shape pattern." }] },
            { id: 82, image: "/images/posts/fish38.jpg", caption: "Solid Blue Diamond juveniles batch.", likes: 740, views: 12500, shares: 55, comments: [{ userName: "@hari_s", name: "Hari", userAvatar: "/images/users/user255.jpg", content: "Colors are crisp clear." }] }
        ]
    },
    {
        id: 42,
        name: "Dr. Neha Lakshmi",
        userName: "@neha_persians",
        email: "nehal@example.com",
        password: "catvet1234",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_wpITEOE29votA52aDRCcl1wAhLppbONHR2FfnZX9dJG7jbT8bCsp-w&s=10",
        coverImage: "https://petcareshed.com.au/cdn/shop/articles/thai-cat-in-australia_a7ef7eac-31f7-46b8-87b5-70a3a5d781ea.jpg?v=1762593182&width=1100",
        location: "Thiruvananthapuram, Kerala",
        categories: ["Persian Cat", "Siamese Cat"],
        experience: "6 Years",
        verified: true,
        rating: 4.9,
        bio: "Veterinary managed premium cattery center.",
        description: "Providing completely vaccinated, PKD tested clear, microchipped show class Persian and Siamese kittens.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 322, name: "Anjana S", userName: "@anjana_s", userAvatar: "/images/users/user256.jpg" },
            { id: 323, name: "Rahul TVM", userName: "@rahul_tvm", userAvatar: "/images/users/user257.jpg" }
        ],
        following: [
            { id: 324, name: "Feline Fanciers", userName: "@feline_fanciers", userAvatar: "/images/users/user258.jpg" },
            { id: 325, name: "Cat Grooming Pro", userName: "@groom_pro", userAvatar: "/images/users/user259.jpg" }
        ],
        contact: {
            email: "nehal@example.com",
            phone: "+91 94472 99004",
            instagram: "https://instagram.com/neha_persians",
            facebook: "https://facebook.com/neha_persians"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/cat_vaccination.mp4", likes: 7300, comments: 410, shares: 980, views: 145000 },
            { id: 2, videoURL: "/videos/shorts/persian_playtime.mp4", likes: 9400, comments: 520, shares: 1900, views: 190000 }
        ],
        posts: [
            { id: 83, image: "/images/posts/cat9.jpg", caption: "Extreme punch faced white Persian kitten male.", likes: 1800, views: 32000, shares: 240, comments: [{ userName: "@malini", name: "Malini", userAvatar: "/images/users/user260.jpg", content: "So doll like sweet face." }] },
            { id: 84, image: "/images/posts/cat10.jpg", caption: "Lynx point Siamese juvenile configuration.", likes: 1200, views: 21000, shares: 130, comments: [{ userName: "@akhil_p", name: "Akhil", userAvatar: "/images/users/user261.jpg", content: "Markings are beautifully distinct." }] }
        ]
    },
    {
        id: 43,
        name: "Shaji Mathew",
        userName: "@shaji_macaws",
        email: "shajim@example.com",
        password: "greenwingmacaw",
        role: "breeder",
        profileImage: "https://m.media-amazon.com/images/I/81PaHxuivJL.jpg",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rbk6ssaX_n-PicSi6bW_eerMH-mQJDsHYOxoh7oVZYMraNDZ-TVGQsU&s=10",
        location: "Kottayam, Kerala",
        categories: ["Macaw", "Conure"],
        experience: "15 Years",
        verified: true,
        rating: 4.8,
        bio: "Premium large parrot hand-rearing aviaries.",
        description: "Breeding Green-winged Macaws and colorful Pineapple Conures inside high security spacious structural aviaries.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 326, name: "Jijo Paul", userName: "@jijo_p", userAvatar: "/images/users/user262.jpg" },
            { id: 327, name: "Binu Jacob", userName: "@binu_j", userAvatar: "/images/users/user263.jpg" }
        ],
        following: [
            { id: 328, name: "Avian Genetics India", userName: "@avian_genetics", userAvatar: "/images/users/user264.jpg" },
            { id: 329, name: "Bird Toys Co", userName: "@bird_toys", userAvatar: "/images/users/user265.jpg" }
        ],
        contact: {
            email: "shajim@example.com",
            phone: "+91 94471 44552",
            instagram: "https://instagram.com/shaji_macaws",
            facebook: "https://facebook.com/shaji_macaws"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/macaw_flight.mp4", likes: 14000, comments: 820, shares: 3400, views: 310000 },
            { id: 2, videoURL: "/videos/shorts/conure_tricks.mp4", likes: 8200, comments: 390, shares: 1200, views: 160000 }
        ],
        posts: [
            { id: 85, image: "/images/posts/bird9.jpg", caption: "Greenwing Macaw hand-fed chick 70 days.", likes: 3200, views: 58000, shares: 540, comments: [{ userName: "@tinu_a", name: "Tinu", userAvatar: "/images/users/user266.jpg", content: "Huge beak structure size." }] },
            { id: 86, image: "/images/posts/bird10.jpg", caption: "High red Pineapple Conure breeding set.", likes: 1400, views: 25000, shares: 180, comments: [{ userName: "@suresh_k", name: "Suresh", userAvatar: "/images/users/user267.jpg", content: "Stunning chest color profile." }] }
        ]
    },
    {
        id: 44,
        name: "Noushad Ali",
        userName: "@noushad_poultry",
        email: "noushad@example.com",
        password: "seramachicken",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6KFl7oKgbWQ4Npz750pMA2hJBqG614EHTIvxWFNM9RY1bQkO8dSTXz0&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SOQDa2TTej0yaK6WVQnioit5_q5jUh2sGjZR9ulfz9eU9zK9cv1rHfcM&s=10",
        location: "Kozhikode, Kerala",
        categories: ["Serama Chicken", "Rosecomb Bantam"],
        experience: "8 Years",
        verified: false,
        rating: 4.5,
        bio: "World's smallest miniature tabletop chickens.",
        description: "Specialized target lines on extreme vertical chest posture Malaysian Seramas and sleek clean dark line Rosecomb Bantams.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 328, name: "Riyaz K", userName: "@riyaz_k", userAvatar: "/images/users/user268.jpg" },
            { id: 329, name: "Muneer Clt", userName: "@muneer_clt", userAvatar: "/images/users/user269.jpg" }
        ],
        following: [
            { id: 330, name: "Serama India", userName: "@serama_india", userAvatar: "/images/users/user270.jpg" },
            { id: 331, name: "Incubator Tech", userName: "@incubator_tech", userAvatar: "/images/users/user271.jpg" }
        ],
        contact: {
            email: "noushad@example.com",
            phone: "+91 98462 11339",
            instagram: "https://instagram.com/noushad_poultry",
            facebook: "https://facebook.com/noushad_poultry"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/serama_pose.mp4", likes: 6200, comments: 340, shares: 890, views: 140000 },
            { id: 2, videoURL: "/videos/shorts/rosecomb_walk.mp4", likes: 2100, comments: 85, shares: 110, views: 42000 }
        ],
        posts: [
            { id: 87, image: "/images/posts/hen9.jpg", caption: "A-Grade structural Serama cockerel pose.", likes: 840, views: 13900, shares: 95, comments: [{ userName: "@subin", name: "Subin", userAvatar: "/images/users/user272.jpg", content: "Completely vertical stance!" }] },
            { id: 88, image: "/images/posts/hen10.jpg", caption: "Pure black Rosecomb Bantam pair.", likes: 490, views: 8200, shares: 30, comments: [{ userName: "@shiraz", name: "Shiraz", userAvatar: "/images/users/user273.jpg", content: "Clean white earlobes distinction." }] }
        ]
    },
    {
        id: 45,
        name: "Sabu Joseph",
        userName: "@sabu_rabbits_farm",
        email: "sabuj@example.com",
        password: "englishangora",
        role: "breeder",
        profileImage: "https://i0.wp.com/www.worldwanderingkiwi.com/wp-content/uploads/2012/05/Angora4.jpg?ssl=1",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8djQztviIow8UL3krPXA8etcjUiflHYTQuZOlASzhOXS7JvorHAGAcc&s=10",
        location: "Wayanad, Kerala",
        categories: ["Angora Rabbit", "New Zealand White"],
        experience: "6 Years",
        verified: true,
        rating: 4.6,
        bio: "High quality commercial and show rabbit lines.",
        description: "Breeding high fur value English Angoras and robust meat compound stock New Zealand White lines in standard mesh caging configurations.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 332, name: "Vinu Wyd", userName: "@vinu_wyd", userAvatar: "/images/users/user274.jpg" },
            { id: 333, name: "Jayan Thomas", userName: "@jayan_t", userAvatar: "/images/users/user275.jpg" }
        ],
        following: [
            { id: 334, name: "Rabbitry Development", userName: "@rabbit_dev", userAvatar: "/images/users/user276.jpg" },
            { id: 335, name: "Pellet Feeds Corp", userName: "@pellet_feeds", userAvatar: "/images/users/user277.jpg" }
        ],
        contact: {
            email: "sabuj@example.com",
            phone: "+91 94463 99881",
            instagram: "https://instagram.com/sabu_rabbits_farm",
            facebook: "https://facebook.com/sabu_rabbits_farm"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/angora_wool_cut.mp4", likes: 4100, comments: 195, shares: 340, views: 86000 },
            { id: 2, videoURL: "/videos/shorts/nzw_growth.mp4", likes: 2400, comments: 90, shares: 120, views: 49000 }
        ],
        posts: [
            { id: 89, image: "/images/posts/rab9.jpg", caption: "English Angora massive coat density bunnies.", likes: 730, views: 12100, shares: 60, comments: [{ userName: "@ann", name: "Ann Mary", userAvatar: "/images/users/user276.jpg", content: "Looks completely round fluffy ball." }] },
            { id: 90, image: "/images/posts/rab10.jpg", caption: "NZW commercial line doe sets ready.", likes: 520, views: 8900, shares: 42, comments: [{ userName: "@abin", name: "Abin", userAvatar: "/images/users/user277.jpg", content: "Healthy litter output lines." }] }
        ]
    },
    {
        id: 46,
        name: "Riazuddin M",
        userName: "@malabar_mix_exotics",
        email: "riaz@example.com",
        password: "riazmixexotics",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsjA84qAVAuvUgsjWIaiF6_PHnKVgW6-9e3el0I0OciqA06XKJK1RBy9L&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRtcBH2C_dHgzO4gphY0Qaj_SyQCDEVvjofzrHA_ufNgh0W8NiKTm6oqB&s=10",
        location: "Malappuram, Kerala",
        categories: ["Maine Coon", "Macaw", "Arowana"],
        experience: "12 Years",
        verified: true,
        rating: 4.9,
        bio: "Elite mega exotic cross category breeding hub.",
        description: "Handling high capital value structural targets like purebred Maine Coons, hand reared Blue & Gold Macaws, and microchipped Super Red Arowanas.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 336, name: "Firoz Khan", userName: "@firoz_k", userAvatar: "/images/users/user278.jpg" },
            { id: 337, name: "Dilshad T", userName: "@dilshad_t", userAvatar: "/images/users/user279.jpg" }
        ],
        following: [
            { id: 338, name: "Mega Exotic Breeders", userName: "@mega_exotics", userAvatar: "/images/users/user280.jpg" },
            { id: 339, name: "Pet Quarantine Services", userName: "@pet_quarantine", userAvatar: "/images/users/user281.jpg" }
        ],
        contact: {
            email: "riaz@example.com",
            phone: "+91 99956 11229",
            instagram: "https://instagram.com/malabar_mix_exotics",
            facebook: "https://facebook.com/malabar_mix_exotics"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/mega_farm_tour.mp4", likes: 16000, comments: 920, shares: 4800, views: 390000 },
            { id: 2, videoURL: "/videos/shorts/arowana_mainecoon_share.mp4", likes: 12000, comments: 610, shares: 2300, views: 270000 }
        ],
        posts: [
            { id: 91, image: "/images/posts/mix7.jpg", caption: "Giant line Maine Coon kitten solid black smoke.", likes: 3400, views: 62000, shares: 690, comments: [{ userName: "@irfan", name: "Irfan", userAvatar: "/images/users/user282.jpg", content: "Wild lion look frame size." }] },
            { id: 92, image: "/images/posts/mix8.jpg", caption: "Super Red Arowana microchip certified check.", likes: 2100, views: 39000, shares: 310, comments: [{ userName: "@ajmal", name: "Ajmal", userAvatar: "/images/users/user283.jpg", content: "Spoonhead structure configuration is perfect." }] }
        ]
    },
    {
        id: 47,
        name: "Abhijith Sreevalsan",
        userName: "@abhijith_guppies",
        email: "abhijiths@example.com",
        password: "guppylinebreeder",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYlg_KJpbLaJVkmySo8XT87bOH0NeoQNVlqTNesgHsC-cEYL2ssxclko&s=10",
        coverImage: "https://thumbs.dreamstime.com/b/charming-vintage-guppy-fish-photography-retro-dive-colorful-aquatic-pets-classic-tank-aesthetics-step-back-time-350867149.jpg",
        location: "Kollam, Kerala",
        categories: ["Guppy"],
        experience: "7 Years",
        verified: true,
        rating: 4.7,
        bio: "Line breeding pure platinum scale fancy guppies.",
        description: "Strict isolation line breeding systems for Platinum Red Tail Dumbo and Blue Grass Guppy show varieties.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 340, name: "Midhun Kollam", userName: "@midhun_klm_aqua", userAvatar: "/images/users/user284.jpg" },
            { id: 341, name: "Syam R", userName: "@syam_r", userAvatar: "/images/users/user285.jpg" }
        ],
        following: [
            { id: 342, name: "Guppy Gen India", userName: "@guppy_genetics", userAvatar: "/images/users/user286.jpg" },
            { id: 343, name: "Live Food Systems", userName: "@live_food", userAvatar: "/images/users/user287.jpg" }
        ],
        contact: {
            email: "abhijiths@example.com",
            phone: "+91 95674 99002",
            instagram: "https://instagram.com/abhijith_guppies",
            facebook: "https://facebook.com/abhijith_guppies"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/bluegrass_flare.mp4", likes: 2400, comments: 95, shares: 140, views: 46000 },
            { id: 2, videoURL: "/videos/shorts/guppy_sorting_grid.mp4", likes: 3800, comments: 140, shares: 310, views: 72000 }
        ],
        posts: [
            { id: 93, image: "/images/posts/fish41.jpg", caption: "Blue Grass Guppy high fine dot tail pattern.", likes: 530, views: 8900, shares: 42, comments: [{ userName: "@akash", name: "Akash", userAvatar: "/images/users/user288.jpg", content: "Crisp spray dot tail lines." }] },
            { id: 94, image: "/images/posts/fish42.jpg", caption: "Platinum Red Tail Dumbo trio set.", likes: 460, views: 7600, shares: 30, comments: [{ userName: "@vineeth", name: "Vineeth", userAvatar: "/images/users/user289.jpg", content: "Pectoral fins length is huge." }] }
        ]
    },
    {
        id: 48,
        name: "Biju Varghese",
        userName: "@biju_aviaries",
        email: "bijuv@example.com",
        password: "africanlovebirds",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiv8DvUALwta185bsTHKeyfUACE4EJOrXkblmdE_puKP8TaRrvXCtoYg&s=10",
        coverImage: "https://i.ytimg.com/vi/3dr4UknrM3k/maxresdefault.jpg",
        location: "Pathanamthitta, Kerala",
        categories: ["Lovebirds"],
        experience: "6 Years",
        verified: false,
        rating: 4.4,
        bio: "Specializing in premium eye-ring African Lovebirds.",
        description: "Breeding high quality visual mutations like Euwing, Opaline, and Pale Fallow configurations in clean colonial flight aviaries.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 344, name: "Aby Pta", userName: "@aby_pta", userAvatar: "/images/users/user290.jpg" },
            { id: 345, name: "Tinu Koshy", userName: "@tinu_koshy", userAvatar: "/images/users/user291.jpg" }
        ],
        following: [
            { id: 346, name: "Lovebird Society India", userName: "@lbs_india", userAvatar: "/images/users/user292.jpg" },
            { id: 347, name: "Avian DNA Tech", userName: "@avian_dna", userAvatar: "/images/users/user293.jpg" }
        ],
        contact: {
            email: "bijuv@example.com",
            phone: "+91 94461 77663",
            instagram: "https://instagram.com/biju_aviaries",
            facebook: "https://facebook.com/biju_aviaries"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/lovebird_mutation.mp4", likes: 3400, comments: 120, shares: 280, views: 61000 },
            { id: 2, videoURL: "/videos/shorts/colony_flight.mp4", likes: 1900, comments: 65, shares: 90, views: 35000 }
        ],
        posts: [
            { id: 94, image: "/images/posts/bird11.jpg", caption: "Green Opaline Euwing pair lineage track.", likes: 680, views: 11200, shares: 55, comments: [{ userName: "@reji", name: "Reji", userAvatar: "/images/users/user294.jpg", content: "Solid structural green values." }] },
            { id: 95, image: "/images/posts/bird12.jpg", caption: "Dun Fallow clear visual mutations.", likes: 490, views: 8400, shares: 32, comments: [{ userName: "@sabu_p", name: "Sabu", userAvatar: "/images/users/user295.jpg", content: "Eyes red intensity is perfect." }] }
        ]
    },
    {
        id: 49,
        name: "Sajith Narayanan",
        userName: "@sajith_cattery",
        email: "sajithn@example.com",
        password: "britishshorthair1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-n2LasG-F0jJrUGdUdANMu31xVqhr6E_6yLsNHO7_rK7Xiryp_UWqmEFb&s=10",
        coverImage: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/History_of_the_British_Shorthair.jpg?v=1759922139",
        location: "Kochi, Kerala",
        categories: ["British Shorthair"],
        experience: "9 Years",
        verified: true,
        rating: 4.8,
        bio: "Chunky density show-grade British Shorthairs.",
        description: "Importing validated pedigree champions to produce thick bone density, copper eye profile British Shorthair kittens in Blue and Lilac solid variables.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 348, name: "Nithin EKM", userName: "@nithin_ekm", userAvatar: "/images/users/user296.jpg" },
            { id: 349, name: "Deepika V", userName: "@deepika_v_cat", userAvatar: "/images/users/user297.jpg" }
        ],
        following: [
            { id: 350, name: "World Cat Federation India", userName: "@wcf_india", userAvatar: "/images/users/user298.jpg" },
            { id: 351, name: "Feline Supplements Co", userName: "@feline_supplements", userAvatar: "/images/users/user299.jpg" }
        ],
        contact: {
            email: "sajithn@example.com",
            phone: "+91 98463 44557",
            instagram: "https://instagram.com/sajith_cattery",
            facebook: "https://facebook.com/sajith_cattery"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/bsh_kitten_play.mp4", likes: 8100, comments: 390, shares: 1400, views: 165000 },
            { id: 2, videoURL: "/videos/shorts/bsh_cheek_mass.mp4", likes: 11000, comments: 620, shares: 2900, views: 240000 }
        ],
        posts: [
            { id: 96, image: "/images/posts/cat11.jpg", caption: "Solid Lilac British Shorthair chunk kitten male.", likes: 2300, views: 39500, shares: 410, comments: [{ userName: "@reshma_k", name: "Reshma", userAvatar: "/images/users/user300.jpg", content: "Look at those fat cheeks!" }] },
            { id: 97, image: "/images/posts/cat12.jpg", caption: "Solid Blue queen classic profile validation.", likes: 1700, views: 29000, shares: 230, comments: [{ userName: "@joyal_p", name: "Joyal", userAvatar: "/images/users/user301.jpg", content: "Dense plush coat density." }] }
        ]
    },
    {
        id: 50,
        name: "Abbas Ali Vengara",
        userName: "@malabar_homestead",
        email: "abbashomestead@example.com",
        password: "mixedhomestead1",
        role: "breeder",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZwcBSviG1ON7TpZ64tNYJ6uvR7GRGkqW6lpx-fNOmSA5JF8IaSTxpbkn&s=10",
        coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlg3F2S6yIbjmp9ZzLbPCXDuc_txVZnmtW1AmeoxWq9HvqNouiV_9z8M&s=10",
        location: "Malappuram, Kerala",
        categories: ["German Shepherd", "Fancy Hens", "Soviet Chinchilla", "Koi Fish"],
        experience: "16 Years",
        verified: true,
        rating: 4.9,
        bio: "Complete massive multi-tier high line breeding compound.",
        description: "Veteran unified agricultural complex handling high specification KCI GSD working lines, certified ornamental bantam lines, heavy commercial rabbit layout, and earth pond Koi breeding.",
        counts: { followers: 2, following: 2, posts: 2 },
        followers: [
            { id: 352, name: "Razak Vgr", userName: "@razak_vengara", userAvatar: "/images/users/user302.jpg" },
            { id: 353, name: "Shameem P", userName: "@shameem_p", userAvatar: "/images/users/user303.jpg" }
        ],
        following: [
            { id: 354, name: "National Agri Network", userName: "@national_agri", userAvatar: "/images/users/user304.jpg" },
            { id: 355, name: "Vets Association India", userName: "@vets_association", userAvatar: "/images/users/user305.jpg" }
        ],
        contact: {
            email: "abbashomestead@example.com",
            phone: "+91 99954 11223",
            instagram: "https://instagram.com/malabar_homestead",
            facebook: "https://facebook.com/malabar_homestead"
        },
        shorts: [
            { id: 1, videoURL: "/videos/shorts/ultimate_farm_tour.mp4", likes: 24000, comments: 1600, shares: 6900, views: 520000 },
            { id: 2, videoURL: "/videos/shorts/gsd_rabbit_farm_share.mp4", likes: 14000, comments: 720, shares: 3100, views: 310000 }
        ],
        posts: [
            { id: 98, image: "/images/posts/mix9.jpg", caption: "Heavy bone structure GSD long coat pups ready.", likes: 3900, views: 68000, shares: 820, comments: [{ userName: "@shahid", name: "Shahid", userAvatar: "/images/users/user306.jpg", content: "Flawless deep dark rich mask." }] },
            { id: 99, image: "/images/posts/mix10.jpg", caption: "Soviet Chinchilla pure line breeding groups.", likes: 1200, views: 22000, shares: 140, comments: [{ userName: "@hassan_v", name: "Hassan", userAvatar: "/images/users/user307.jpg", content: "Excellent thick coat value." }] }
        ]
    }
];


export const Users = [
    { id: 1, name: 'Maryam Amiri', username: 'maryam_amiri', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=maryam', phone: '+1-555-0101', email: 'maryam.amiri@example.com', password: 'hashed_password_1' },
    { id: 2, name: 'Hossein Shams', username: 'h_shams', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=hossein', phone: '+1-555-0102', email: 'h.shams@example.com', password: 'hashed_password_2' },
    { id: 3, name: 'Sarah Conner', username: 'sconner', role: 'Support Agent', avatar: '', phone: '+1-555-0103', email: 'sconner@example.com', password: 'hashed_password_3' },
    { id: 4, name: 'Frank Camly', username: 'frank_c', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=frank', phone: '+1-555-0104', email: 'frank_c@example.com', password: 'hashed_password_4' },
    { id: 5, name: 'Freddie Arendes', username: 'fred_mkt', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=freddie', phone: '+1-555-0105', email: 'fred_mkt@example.com', password: 'hashed_password_5' },
    { id: 6, name: 'Gary Camara', username: 'gary_cam', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=gary', phone: '+1-555-0106', email: 'gary_cam@example.com', password: 'hashed_password_6' },
    { id: 7, name: 'Tim Hank', username: 'timmy_h', role: 'Marketing Department', avatar: '', phone: '+1-555-0107', email: 'timmy_h@example.com', password: 'hashed_password_7' },
    { id: 8, name: 'Fidel Tonn', username: 'fidel_t', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=fidel', phone: '+1-555-0108', email: 'fidel_t@example.com', password: 'hashed_password_8' },
    { id: 9, name: 'Emma Watson', username: 'emma_w', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=emma', phone: '+1-555-0109', email: 'emma.w@example.com', password: 'hashed_password_9' },
    { id: 10, name: 'Liam Neeson', username: 'liam_n', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0110', email: 'liam.n@example.com', password: 'hashed_password_10' },
    { id: 11, name: 'Olivia Thirlby', username: 'olivia_t', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=olivia', phone: '+1-555-0111', email: 'olivia.t@example.com', password: 'hashed_password_11' },
    { id: 12, name: 'Noah Centineo', username: 'noah_c', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=noah', phone: '+1-555-0112', email: 'noah.c@example.com', password: 'hashed_password_12' },
    { id: 13, name: 'Ava DuVernay', username: 'ava_d', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=ava', phone: '+1-555-0113', email: 'ava.d@example.com', password: 'hashed_password_13' },
    { id: 14, name: 'Oliver Twist', username: 'oliver_t', role: 'QA Engineer', avatar: '', phone: '+1-555-0114', email: 'oliver.t@example.com', password: 'hashed_password_14' },
    { id: 15, name: 'Sophia Loren', username: 'sophia_l', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=sophia', phone: '+1-555-0115', email: 'sophia.l@example.com', password: 'hashed_password_15' },
    { id: 16, name: 'Elijah Wood', username: 'elijah_w', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=elijah', phone: '+1-555-0116', email: 'elijah.w@example.com', password: 'hashed_password_16' },
    { id: 17, name: 'Isabella Rossellini', username: 'isabella_r', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=isabella', phone: '+1-555-0117', email: 'isabella.r@example.com', password: 'hashed_password_17' },
    { id: 18, name: 'James Bond', username: 'james_b', role: 'Security Analyst', avatar: '', phone: '+1-555-0118', email: 'james.b@example.com', password: 'hashed_password_18' },
    { id: 19, name: 'Mia Farrow', username: 'mia_f', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=mia', phone: '+1-555-0119', email: 'mia.f@example.com', password: 'hashed_password_19' },
    { id: 20, name: 'Benjamin Franklin', username: 'ben_f', role: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?u=ben', phone: '+1-555-0120', email: 'ben.f@example.com', password: 'hashed_password_20' },
    { id: 21, name: 'Charlotte Bronte', username: 'charlotte_b', role: 'Content Writer', avatar: 'https://i.pravatar.cc/150?u=charlotte', phone: '+1-555-0121', email: 'charlotte.b@example.com', password: 'hashed_password_21' },
    { id: 22, name: 'Lucas Hedges', username: 'lucas_h', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0122', email: 'lucas.h@example.com', password: 'hashed_password_22' },
    { id: 23, name: 'Amelia Earhart', username: 'amelia_e', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=amelia', phone: '+1-555-0123', email: 'amelia.e@example.com', password: 'hashed_password_23' },
    { id: 24, name: 'Mason Mount', username: 'mason_m', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=mason', phone: '+1-555-0124', email: 'mason.m@example.com', password: 'hashed_password_24' },
    { id: 25, name: 'Harper Lee', username: 'harper_l', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=harper', phone: '+1-555-0125', email: 'harper.l@example.com', password: 'hashed_password_25' },
    { id: 26, name: 'Ethan Hawke', username: 'ethan_h', role: 'Marketing Department', avatar: '', phone: '+1-555-0126', email: 'ethan.h@example.com', password: 'hashed_password_26' },
    { id: 27, name: 'Evelyn Waugh', username: 'evelyn_w', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=evelyn', phone: '+1-555-0127', email: 'evelyn.w@example.com', password: 'hashed_password_27' },
    { id: 28, name: 'Logan Paul', username: 'logan_p', role: 'Content Creator', avatar: 'https://i.pravatar.cc/150?u=logan', phone: '+1-555-0128', email: 'logan.p@example.com', password: 'hashed_password_28' },
    { id: 29, name: 'Abigail Breslin', username: 'abigail_b', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=abigail', phone: '+1-555-0129', email: 'abigail.b@example.com', password: 'hashed_password_29' },
    { id: 30, name: 'Alexander Great', username: 'alex_g', role: 'Project Manager', avatar: '', phone: '+1-555-0130', email: 'alex.g@example.com', password: 'hashed_password_30' },
    { id: 31, name: 'Emily Blunt', username: 'emily_b', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=emily', phone: '+1-555-0131', email: 'emily.b@example.com', password: 'hashed_password_31' },
    { id: 32, name: 'Michael Jordan', username: 'mj_23', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=mj', phone: '+1-555-0132', email: 'mj_23@example.com', password: 'hashed_password_32' },
    { id: 33, name: 'Elizabeth Taylor', username: 'liz_t', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=liz', phone: '+1-555-0133', email: 'liz.t@example.com', password: 'hashed_password_33' },
    { id: 34, name: 'Daniel Craig', username: 'daniel_c', role: 'QA Engineer', avatar: '', phone: '+1-555-0134', email: 'daniel.c@example.com', password: 'hashed_password_34' },
    { id: 35, name: 'Sofia Vergara', username: 'sofia_v', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=sofia', phone: '+1-555-0135', email: 'sofia.v@example.com', password: 'hashed_password_35' },
    { id: 36, name: 'Henry Cavill', username: 'henry_c', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=henry', phone: '+1-555-0136', email: 'henry.c@example.com', password: 'hashed_password_36' },
    { id: 37, name: 'Avery Jackson', username: 'avery_j', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=avery', phone: '+1-555-0137', email: 'avery.j@example.com', password: 'hashed_password_37' },
    { id: 38, name: 'Jackson Pollock', username: 'jackson_p', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0138', email: 'jackson.p@example.com', password: 'hashed_password_38' },
    { id: 39, name: 'Scarlett Johansson', username: 'scarlett_j', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=scarlett', phone: '+1-555-0139', email: 'scarlett.j@example.com', password: 'hashed_password_39' },
    { id: 40, name: 'Sebastian Stan', username: 'sebastian_s', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=sebastian', phone: '+1-555-0140', email: 'sebastian.s@example.com', password: 'hashed_password_40' },
    { id: 41, name: 'Madison Beer', username: 'madison_b', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=madison', phone: '+1-555-0141', email: 'madison.b@example.com', password: 'hashed_password_41' },
    { id: 42, name: 'Matthew Perry', username: 'matthew_p', role: 'Data Scientist', avatar: '', phone: '+1-555-0142', email: 'matthew.p@example.com', password: 'hashed_password_42' },
    { id: 43, name: 'Layla Ali', username: 'layla_a', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=layla', phone: '+1-555-0143', email: 'layla.a@example.com', password: 'hashed_password_43' },
    { id: 44, name: 'Samuel Jackson', username: 'sam_j', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=sam', phone: '+1-555-0144', email: 'sam.j@example.com', password: 'hashed_password_44' },
    { id: 45, name: 'Chloe Grace', username: 'chloe_g', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=chloe', phone: '+1-555-0145', email: 'chloe.g@example.com', password: 'hashed_password_45' },
    { id: 46, name: 'David Beckham', username: 'david_b', role: 'Marketing Department', avatar: '', phone: '+1-555-0146', email: 'david.b@example.com', password: 'hashed_password_46' },
    { id: 47, name: 'Victoria Beckham', username: 'vic_b', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=victoria', phone: '+1-555-0147', email: 'vic.b@example.com', password: 'hashed_password_47' },
    { id: 48, name: 'Joseph Gordon', username: 'joseph_g', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=joseph', phone: '+1-555-0148', email: 'joseph.g@example.com', password: 'hashed_password_48' },
    { id: 49, name: 'Grace Kelly', username: 'grace_k', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=grace', phone: '+1-555-0149', email: 'grace.k@example.com', password: 'hashed_password_49' },
    { id: 50, name: 'Carter Bland', username: 'carter_b', role: 'QA Engineer', avatar: '', phone: '+1-555-0150', email: 'carter.b@example.com', password: 'hashed_password_50' },
    { id: 51, name: 'Riley Reid', username: 'riley_r', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=riley', phone: '+1-555-0151', email: 'riley.r@example.com', password: 'hashed_password_51' },
    { id: 52, name: 'Owen Wilson', username: 'owen_w', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=owen', phone: '+1-555-0152', email: 'owen.w@example.com', password: 'hashed_password_52' },
    { id: 53, name: 'Zoey Deutch', username: 'zoey_d', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=zoey', phone: '+1-555-0153', email: 'zoey.d@example.com', password: 'hashed_password_53' },
    { id: 54, name: 'Wyatt Russell', username: 'wyatt_r', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0154', email: 'wyatt.r@example.com', password: 'hashed_password_54' },
    { id: 55, name: 'Lily Collins', username: 'lily_c', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=lily', phone: '+1-555-0155', email: 'lily.c@example.com', password: 'hashed_password_55' },
    { id: 56, name: 'John Doe', username: 'john_d', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=john', phone: '+1-555-0156', email: 'john.d@example.com', password: 'hashed_password_56' },
    { id: 57, name: 'Jane Doe', username: 'jane_d', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=jane', phone: '+1-555-0157', email: 'jane.d@example.com', password: 'hashed_password_57' },
    { id: 58, name: 'Luke Skywalker', username: 'luke_s', role: 'Security Analyst', avatar: '', phone: '+1-555-0158', email: 'luke.s@example.com', password: 'hashed_password_58' },
    { id: 59, name: 'Hannah Baker', username: 'hannah_b', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=hannah', phone: '+1-555-0159', email: 'hannah.b@example.com', password: 'hashed_password_59' },
    { id: 60, name: 'Dylan Minnette', username: 'dylan_m', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=dylan', phone: '+1-555-0160', email: 'dylan.m@example.com', password: 'hashed_password_60' },
    { id: 61, name: 'Addison Rae', username: 'addison_r', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=addison', phone: '+1-555-0161', email: 'addison.r@example.com', password: 'hashed_password_61' },
    { id: 62, name: 'Gabriel Machado', username: 'gabriel_m', role: 'Marketing Department', avatar: '', phone: '+1-555-0162', email: 'gabriel.m@example.com', password: 'hashed_password_62' },
    { id: 63, name: 'Natalie Portman', username: 'natalie_p', role: 'Project Manager', avatar: 'https://i.pravatar.cc/150?u=natalie', phone: '+1-555-0163', email: 'natalie.p@example.com', password: 'hashed_password_63' },
    { id: 64, name: 'Julian Alvarez', username: 'julian_a', role: 'QA Engineer', avatar: 'https://i.pravatar.cc/150?u=julian', phone: '+1-555-0164', email: 'julian.a@example.com', password: 'hashed_password_64' },
    { id: 65, name: 'Stella Maxwell', username: 'stella_m', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=stella', phone: '+1-555-0165', email: 'stella.m@example.com', password: 'hashed_password_65' },
    { id: 66, name: 'Ryan Reynolds', username: 'ryan_r', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0166', email: 'ryan.r@example.com', password: 'hashed_password_66' },
    { id: 67, name: 'Zendaya Coleman', username: 'zendaya', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=zendaya', phone: '+1-555-0167', email: 'zendaya@example.com', password: 'hashed_password_67' },
    { id: 68, name: 'Tom Holland', username: 'tom_h', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=tom', phone: '+1-555-0168', email: 'tom.h@example.com', password: 'hashed_password_68' },
    { id: 69, name: 'Bella Hadid', username: 'bella_h', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=bella', phone: '+1-555-0169', email: 'bella.h@example.com', password: 'hashed_password_69' },
    { id: 70, name: 'Gigi Hadid', username: 'gigi_h', role: 'Data Scientist', avatar: '', phone: '+1-555-0170', email: 'gigi.h@example.com', password: 'hashed_password_70' },
    { id: 71, name: 'Kendall Jenner', username: 'kendall_j', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=kendall', phone: '+1-555-0171', email: 'kendall.j@example.com', password: 'hashed_password_71' },
    { id: 72, name: 'Kylie Jenner', username: 'kylie_j', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=kylie', phone: '+1-555-0172', email: 'kylie.j@example.com', password: 'hashed_password_72' },
    { id: 73, name: 'Kim Kardashian', username: 'kim_k', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=kim', phone: '+1-555-0173', email: 'kim.k@example.com', password: 'hashed_password_73' },
    { id: 74, name: 'Kourtney K', username: 'kourt_k', role: 'Marketing Department', avatar: '', phone: '+1-555-0174', email: 'kourt.k@example.com', password: 'hashed_password_74' },
    { id: 75, name: 'Khloe Kardashian', username: 'khloe_k', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=khloe', phone: '+1-555-0175', email: 'khloe.k@example.com', password: 'hashed_password_75' },
    { id: 76, name: 'Travis Scott', username: 'travis_s', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=travis', phone: '+1-555-0176', email: 'travis.s@example.com', password: 'hashed_password_76' },
    { id: 77, name: 'Justin Bieber', username: 'justin_b', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=justin', phone: '+1-555-0177', email: 'justin.b@example.com', password: 'hashed_password_77' },
    { id: 78, name: 'Hailey Bieber', username: 'hailey_b', role: 'Support Agent', avatar: '', phone: '+1-555-0178', email: 'hailey.b@example.com', password: 'hashed_password_78' },
    { id: 79, name: 'Selena Gomez', username: 'selena_g', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=selena', phone: '+1-555-0179', email: 'selena.g@example.com', password: 'hashed_password_79' },
    { id: 80, name: 'Taylor Swift', username: 'taylor_s', role: 'Project Manager', avatar: 'https://i.pravatar.cc/150?u=taylor', phone: '+1-555-0180', email: 'taylor.s@example.com', password: 'hashed_password_80' },
    { id: 81, name: 'Bruno Mars', username: 'bruno_m', role: 'QA Engineer', avatar: 'https://i.pravatar.cc/150?u=bruno', phone: '+1-555-0181', email: 'bruno.m@example.com', password: 'hashed_password_81' },
    { id: 82, name: 'The Weeknd', username: 'abel_t', role: 'Designer', avatar: '', phone: '+1-555-0182', email: 'abel.t@example.com', password: 'hashed_password_82' },
    { id: 83, name: 'Drake Graham', username: 'drake_g', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=drake', phone: '+1-555-0183', email: 'drake.g@example.com', password: 'hashed_password_83' },
    { id: 84, name: 'Rihanna Fenty', username: 'rihanna_f', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=rihanna', phone: '+1-555-0184', email: 'rihanna.f@example.com', password: 'hashed_password_84' },
    { id: 85, name: 'A$AP Rocky', username: 'asap_r', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=asap', phone: '+1-555-0185', email: 'asap.r@example.com', password: 'hashed_password_85' },
    { id: 86, name: 'Beyonce Knowles', username: 'beyonce_k', role: 'Product Manager', avatar: '', phone: '+1-555-0186', email: 'beyonce.k@example.com', password: 'hashed_password_86' },
    { id: 87, name: 'Jay Z', username: 'jay_z', role: 'Security Analyst', avatar: 'https://i.pravatar.cc/150?u=jayz', phone: '+1-555-0187', email: 'jay.z@example.com', password: 'hashed_password_87' },
    { id: 88, name: 'Kanye West', username: 'kanye_w', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=kanye', phone: '+1-555-0188', email: 'kanye.w@example.com', password: 'hashed_password_88' },
    { id: 89, name: 'Kim GoEun', username: 'goeun_k', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=goeun', phone: '+1-555-0189', email: 'goeun.k@example.com', password: 'hashed_password_89' },
    { id: 90, name: 'Gong Yoo', username: 'gong_yoo', role: 'Support Agent', avatar: '', phone: '+1-555-0190', email: 'gong.yoo@example.com', password: 'hashed_password_90' },
    { id: 91, name: 'Lee MinHo', username: 'minho_l', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=minho', phone: '+1-555-0191', email: 'minho.l@example.com', password: 'hashed_password_91' },
    { id: 92, name: 'Park SeoJoon', username: 'seojoon_p', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=seojoon', phone: '+1-555-0192', email: 'seojoon.p@example.com', password: 'hashed_password_92' },
    { id: 93, name: 'Han SoHee', username: 'sohee_h', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=sohee', phone: '+1-555-0193', email: 'sohee.h@example.com', password: 'hashed_password_93' },
    { id: 94, name: 'Song Kang', username: 'song_k', role: 'Full Stack Developer', avatar: '', phone: '+1-555-0194', email: 'song.k@example.com', password: 'hashed_password_94' },
    { id: 95, name: 'IU Lee', username: 'iu_lee', role: 'Support Agent', avatar: 'https://i.pravatar.cc/150?u=iu', phone: '+1-555-0195', email: 'iu.lee@example.com', password: 'hashed_password_95' },
    { id: 96, name: 'Jungkook Jeon', username: 'jk_bts', role: 'Marketing Department', avatar: 'https://i.pravatar.cc/150?u=jk', phone: '+1-555-0196', email: 'jk_bts@example.com', password: 'hashed_password_96' },
    { id: 97, name: 'Jimin Park', username: 'jimin_p', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?u=jimin', phone: '+1-555-0197', email: 'jimin.p@example.com', password: 'hashed_password_97' },
    { id: 98, name: 'Taehyung Kim', username: 'v_bts', role: 'Data Scientist', avatar: '', phone: '+1-555-0198', email: 'v_bts@example.com', password: 'hashed_password_98' },
    { id: 99, name: 'Suga Min', username: 'suga_m', role: 'Designer', avatar: 'https://i.pravatar.cc/150?u=suga', phone: '+1-555-0199', email: 'suga.m@example.com', password: 'hashed_password_99' },
    { id: 100, name: 'Jin Kim', username: 'jin_k', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=jink', phone: '+1-555-0200', email: 'jin.k@example.com', password: 'hashed_password_100' }
];