export const POSTS_DATA = [
    {
        id: 1,
        images: [
            "https://images.unsplash.com/photo-1647862622825-97c260fcbc84?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://media.istockphoto.com/id/1364941913/photo/colorful-goldfish-freshwater-aquarium-fish.jpg?s=1024x1024&w=is&k=20&c=Old-hU6ModbX9J3yH-BxUi6mCYsTTOTTpwP4tIMzNkw=",
            "https://media.istockphoto.com/id/1137091440/photo/goldfish-in-an-aquarium.jpg?s=1024x1024&w=is&k=20&c=LlDtmzxSzMvV5PKE3RiZrBmXcX6_gol5BXgMlmJ_BjE="
        ],
        username: "alex_travels",
        userTitle: "Landscape Photographer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
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
        username: "em1_1999s",
        userTitle: "Astro Enthusiast",
        avatar: "https://images.unsplash.com/photo-15007003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
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
        username: "culinary_art",
        userTitle: "Pastry Chef & Food Stylist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
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
        username: "urban_explorer",
        userTitle: "Architectural Designer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
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
        username: "wild_eyes",
        userTitle: "Wildlife Documentarian",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
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
            "https://freshwateraquatica.org/cdn/shop/products/product-jpeg-500x500_37d8c073-878d-4aa7-b5d5-9d609b76002a.jpg?v=1693570831&width=1445",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytIaVcSrsX7v9xoicQhnITTWvhnPuAOuuguUhgdEsz5lA592Q2M3TjIHG&s=10"
        ],
        username: "street_threads",
        userTitle: "Stylist & Visual Artist",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
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
            "https://www.aquariumcoop.com/cdn/shop/articles/what-are-the-different-types-of-betta-fish-1396383.jpg?v=1766095071"
        ],
        username: "cozy_spaces",
        userTitle: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
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
        username: "runner_zen",
        userTitle: "Ultra Marathon Runner",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
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
            "https://www.simpsonspremium.com/cdn/shop/articles/persian-cat.jpg?v=1636106587",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3puTqDj085E6i24WgCtwIyksB6_p4RXEDzLI2tGEFveTOjxkjmZnYDE&s=10"
        ],
        username: "deep_blue",
        userTitle: "Marine Biologist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
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
        username: "neo_tokyo",
        userTitle: "Visual Concept Creator",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
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
                text: "Outstanding color grading on the purple tones.",
                time: "2w",
                likes: 415,
                isLiked: false,
                replies: []
            }
        ],
        uploadTime: "2026-07-07T20:00:00Z",
        petDetails: {
            petName: "Purebred Angora / Netherland Dwarf Rabbit",
            price: 3500,
            units: "pieces",
            basicQuantity: "1 rabbit",
            minimumOrderQuantity: 1,
            totalStock: 12,
            age: "2 months",
            healthStatus: "Healthy & Well Socialized",
            shippingAvailable: true,
            shippingMethods: [
                { shippingMethod: "Pet Van", amount: 500 },
                { shippingMethod: "Professional Courier", amount: 100 }
            ],
            catogerys: {
                qut: "rabbits",
                subQut: "dwarf"
            }
        }
    }
];


export const SHORTS_DATA = [
    {
        id: 1,
        videoUrl: "./dumo.mp4",
        username: "alex_travels",
        userTitle: "Landscape Photographer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
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
        username: "neo_tokyo",
        userTitle: "Visual Concept Creator",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
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
        username: "cozy_spaces",
        userTitle: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
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
        username: "culinary_art",
        userTitle: "Pastry Chef & Food Stylist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-albino-koi-guppies-swimming-together-42998-large.mp4",
        username: "wild_eyes",
        userTitle: "Wildlife Documentarian",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-imported-japanese-koi-fish-swimming-44112-large.mp4",
        username: "street_threads",
        userTitle: "Stylist & Visual Artist",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rhode-island-red-hens-pecking-ground-45221-large.mp4",
        username: "runner_zen",
        userTitle: "Ultra Marathon Runner",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fluffy-persian-kitten-playing-with-yarn-46331-large.mp4",
        username: "deep_blue",
        userTitle: "Marine Biologist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-hamster-eating-seeds-47402-large.mp4",
        username: "urban_explorer",
        userTitle: "Architectural Designer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bright-green-chameleon-on-a-branch-48201-large.mp4",
        username: "jdm_culture",
        userTitle: "Automotive Enthusiast",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-scarlet-macaw-parrot-49110-large.mp4",
        username: "wild_eyes",
        userTitle: "Wildlife Documentarian",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-french-bulldog-puppy-running-on-grass-50110-large.mp4",
        username: "cozy_spaces",
        userTitle: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cherry-shrimp-in-freshwater-aquascape-51120-large.mp4",
        username: "deep_blue",
        userTitle: "Marine Biologist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-playful-ferret-crawling-through-tube-52110-large.mp4",
        username: "alex_travels",
        userTitle: "Landscape Photographer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crested-gecko-licking-its-eye-53220-large.mp4",
        username: "neo_tokyo",
        userTitle: "Visual Concept Creator",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-colorful-cockatiel-whistling-on-perch-54310-large.mp4",
        username: "culinary_art",
        userTitle: "Pastry Chef & Food Stylist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-majestic-axolotl-floating-underwater-55110-large.mp4",
        username: "street_threads",
        userTitle: "Stylist & Visual Artist",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-calico-kitten-meowing-56220-large.mp4",
        username: "runner_zen",
        userTitle: "Ultra Marathon Runner",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hermit-crab-crawling-on-sand-57110-large.mp4",
        username: "urban_explorer",
        userTitle: "Architectural Designer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-ball-python-slithering-slowly-58220-large.mp4",
        username: "jdm_culture",
        userTitle: "Automotive Enthusiast",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-playful-corgi-puppy-in-living-room-59110-large.mp4",
        username: "alex_travels",
        userTitle: "Landscape Photographer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fancy-pigeon-strutting-around-60110-large.mp4",
        username: "culinary_art",
        userTitle: "Pastry Chef & Food Stylist",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-red-eared-slider-turtle-swimming-61120-large.mp4",
        username: "deep_blue",
        userTitle: "Marine Biologist",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sugar-glider-jumping-to-hand-62110-large.mp4",
        username: "wild_eyes",
        userTitle: "Wildlife Documentarian",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-chinchilla-getting-scratched-behind-ears-63110-large.mp4",
        username: "cozy_spaces",
        userTitle: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
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
    name: "Muhammed Shibil",
    userName: "@technovastudio",
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
    description: "Passionate ornamental fish breeder with over 5 years of hands-on experience in cultivating premium varieties. Specializing in vibrant Japanese Koi strains and high-quality Bettas, my primary mission is to provide healthy, top-tier lines to hobbyists across Kerala. We focus heavily on selective genetics and robust water parameters to ensure long-term sustainability and flawless development.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 101, name: "Ameen Ali", userName: "@ameen", userAvatar: "/images/users/user1.jpg" }],
    following: [{ id: 102, name: "Niyas", userName: "@niyas", userAvatar: "/images/users/user4.jpg" }],
    contact: {
      email: "shibil@example.com",
      phone: "+91 98765 43210",
      instagram: "https://instagram.com/technovastudio",
      facebook: "https://facebook.com/technovastudio"
    },
    shorts: [
      { id: 1, videoURL: "./dumo.mp4", likes: 1200, comments: 45, shares: 150, views: 25000 }
    ],
    posts: [{ id: 1, image: "https://c4.wallpaperflare.com/wallpaper/934/955/692/animal-betta-siamese-fighting-fish-wallpaper-preview.jpg", caption: "Premium Japanese Koi Available", likes: 542, views: 8200, shares: 18, comments: [{ userName: "@rahul", name: "Rahul Joseph", userAvatar: "/images/users/user2.jpg", content: "Beautiful koi!" }] },]
  },
  {
    id: 2,
    name: "Anjali Raj",
    userName: "@anjali_aquatics",
    email: "anjali@example.com",
    password: "password123",
    role: "breeder",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE62C6u37TKvxTzW2Exw4RSozAq6ZVm3PY2er06LY_Vw&s",
    coverImage: "/images/covers/cover2.jpg",
    location: "Kochi, Kerala",
    categories: ["Discus", "Angelfish"],
    experience: "8 Years",
    verified: true,
    rating: 4.8,
    bio: "Specializing in exotic cichlids.",
    description: "Dedicated aquatic specialist specializing in exotic South American cichlids, primarily Discus and Angelfish. With an 8-year track record, our facility maintains rigorous quarantine protocols and a strict feeding regimen to achieve optimal coloration and growth. Providing expert consultations for advanced aquarium setups and specialized breeding programs tailored for serious collectors.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 103, name: "Sneha P", userName: "@sneha", userAvatar: "/images/users/user6.jpg" }],
    following: [{ id: 104, name: "Vikram S", userName: "@vikram", userAvatar: "/images/users/user7.jpg" }],
    contact: {
      email: "anjali@example.com",
      phone: "+91 98765 43211",
      instagram: "https://instagram.com/anjali_aquatics",
      facebook: "https://facebook.com/anjali_aquatics"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/anjali_discus_care.mp4", likes: 2300, comments: 89, shares: 310, views: 42000 }
    ],
    posts: [{ id: 2, image: "/images/posts/discus1.jpg", caption: "Stunning Discus pairing", likes: 890, views: 12000, shares: 45, comments: [{ userName: "@fishfan", name: "Anil Kumar", userAvatar: "/images/users/user3.jpg", content: "Amazing colors!" }] }]
  },
  {
    id: 3,
    name: "Rahul Varma",
    userName: "@rahul_guppy",
    email: "rahul@example.com",
    password: "securepassword",
    role: "breeder",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4k0aG4-7EZAx0c55NU8Qj6ycuE5J_vTeKddg8lV_xW4gAipHgks7M-M&s=10",
    coverImage: "/images/covers/cover3.jpg",
    location: "Thrissur, Kerala",
    categories: ["Guppy", "Molly"],
    experience: "3 Years",
    verified: false,
    rating: 4.5,
    bio: "Home-based breeder of fancy guppies.",
    description: "Home-based breeder deeply invested in the art of fancy guppy lines and vibrant livebearers. Operating out of Thrissur, my focus centers heavily on line breeding to fix specific genetic traits like Full Red and Blue Topaz variations. We offer high-grade fry and healthy breeding pairs perfect for beginners looking to venture into advanced aquatic genetics.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 105, name: "Arun Das", userName: "@arun", userAvatar: "/images/users/user8.jpg" }],
    following: [{ id: 106, name: "Meena K", userName: "@meena", userAvatar: "/images/users/user9.jpg" }],
    contact: {
      email: "rahul@example.com",
      phone: "+91 98765 43212",
      instagram: "https://instagram.com/rahul_guppy",
      facebook: "https://facebook.com/rahul_guppy"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/rahul_guppy_room.mp4", likes: 450, comments: 14, shares: 25, views: 8900 }
    ],
    posts: [{ id: 3, image: "/images/posts/guppy1.jpg", caption: "Full Red Guppy fry ready.", likes: 250, views: 3000, shares: 5, comments: [{ userName: "@joji", name: "Joji T", userAvatar: "/images/users/user10.jpg", content: "Great strain." }] }]
  },
  {
    id: 4,
    name: "Suresh Babu",
    userName: "@suresh_gold",
    email: "suresh@example.com",
    password: "pass1234",
    role: "breeder",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zuwypEZNCFMSNdpi3vpTNciW7Ct4dvF5AJOHpH7Opo0hlVrTyW69OU8&s=10",
    coverImage: "/images/covers/cover4.jpg",
    location: "Kozhikode, Kerala",
    categories: ["Goldfish"],
    experience: "12 Years",
    verified: true,
    rating: 4.7,
    bio: "Expert in traditional Japanese Goldfish.",
    description: "With over a decade of industry expertise, I focus strictly on traditional Japanese Goldfish variants, including high-grade Ranchu and Orandas. Our specialized facility mimics natural seasonal shifts to encourage organic spawning cycles and premium wen growth. Trusted by collectors statewide for supplying robust, show-quality specimens built to last.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 107, name: "Devi M", userName: "@devi", userAvatar: "/images/users/user11.jpg" }],
    following: [{ id: 108, name: "Ravi K", userName: "@ravi", userAvatar: "/images/users/user12.jpg" }],
    contact: {
      email: "suresh@example.com",
      phone: "+91 98765 43213",
      instagram: "https://instagram.com/suresh_gold",
      facebook: "https://facebook.com/suresh_gold"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/suresh_ranchu_growth.mp4", likes: 980, comments: 52, shares: 95, views: 18500 }
    ],
    posts: [{ id: 4, image: "/images/posts/goldfish1.jpg", caption: "High-grade Ranchu available.", likes: 410, views: 5600, shares: 12, comments: [{ userName: "@sara", name: "Sara L", userAvatar: "/images/users/user13.jpg", content: "Lovely wen growth." }] }]
  },
  {
    id: 5,
    name: "Deepa Menon",
    userName: "@deepa_betta",
    email: "deepa@example.com",
    password: "mypassword",
    role: "breeder",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_8IFSkCHg5xPNhUxfQk4dDBdxrv1TMPPvMgO5F5K3Q&s",
    coverImage: "/images/covers/cover5.jpg",
    location: "Thiruvananthapuram, Kerala",
    categories: ["Betta Fish"],
    experience: "4 Years",
    verified: true,
    rating: 4.9,
    bio: "Selective breeding of Halfmoon Bettas.",
    description: "An avid aquarist focusing purely on the selective breeding of show-grade Halfmoon and Crowntail Betta fish. Every single line is meticulously cataloged for ideal fin shape, symmetry, and intense coloration over a rewarding 4-year journey. Based in Thiruvananthapuram, we ship premium show pairs safely across the region with live-arrival guarantees.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 109, name: "Kiran P", userName: "@kiran", userAvatar: "/images/users/user14.jpg" }],
    following: [{ id: 110, name: "Latha B", userName: "@latha", userAvatar: "/images/users/user15.jpg" }],
    contact: {
      email: "deepa@example.com",
      phone: "+91 98765 43214",
      instagram: "https://instagram.com/deepa_betta",
      facebook: "https://facebook.com/deepa_betta"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/deepa_halfmoon_flare.mp4", likes: 1500, comments: 73, shares: 210, views: 31000 }
    ],
    posts: [{ id: 5, image: "/images/posts/betta1.jpg", caption: "New Betta line released.", likes: 620, views: 9000, shares: 30, comments: [{ userName: "@anil", name: "Anil R", userAvatar: "/images/users/user3.jpg", content: "Stunning finnage." }] }]
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
    description: "Specialized monster fish breeder catering to large-scale aggressive community setups, featuring premium Super Red Arowanas and Tiger Oscars. With 6 years in the trade, we prioritize massive custom filtration networks and dynamic live-foraging diets. Offering heavy-duty livestock capable of anchoring any flagship showroom display tank effortlessly.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 111, name: "Tom S", userName: "@tom", userAvatar: "/images/users/user16.jpg" }],
    following: [{ id: 112, name: "Jerry J", userName: "@jerry", userAvatar: "/images/users/user17.jpg" }],
    contact: {
      email: "arjun@example.com",
      phone: "+91 98765 43215",
      instagram: "https://instagram.com/arjun_monster",
      facebook: "https://facebook.com/arjun_monster"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/arjun_arowana_feed.mp4", likes: 3400, comments: 195, shares: 520, views: 65000 }
    ],
    posts: [{ id: 6, image: "/images/posts/arowana1.jpg", caption: "Super Red Arowana.", likes: 950, views: 15000, shares: 60, comments: [{ userName: "@vinod", name: "Vinod N", userAvatar: "/images/users/user18.jpg", content: "Majestic!" }] }]
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
    description: "A dedicated community fish breeder striving to bring nano tank options like schooling Neon and Cardinal Tetras into mainstream popularity. Over the past 2 years, we've optimized low-pH biotopes to mimic natural Amazonian streams, driving unmatched schooling behavior. Ideal configurations for beautifully planted aquascapes and desktop layouts.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 113, name: "Ali M", userName: "@ali", userAvatar: "/images/users/user19.jpg" }],
    following: [{ id: 114, name: "Sara F", userName: "@sara", userAvatar: "/images/users/user20.jpg" }],
    contact: {
      email: "fathima@example.com",
      phone: "+91 98765 43216",
      instagram: "https://instagram.com/fathima_tanks",
      facebook: "https://facebook.com/fathima_tanks"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/fathima_neon_school.mp4", likes: 320, comments: 8, shares: 12, views: 5400 }
    ],
    posts: [{ id: 7, image: "/images/posts/tetra1.jpg", caption: "Schooling Neon Tetras.", likes: 150, views: 2000, shares: 2, comments: [{ userName: "@babu", name: "Babu R", userAvatar: "/images/users/user21.jpg", content: "Very peaceful." }] }]
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
    description: "Specialist in elite-grade Flowerhorns, dedicated to cultivating impressive kok development, deep pearl distributions, and highly interactive temperaments. Seven years of selective breeding have led to adaptive strains that thrive smoothly in diverse indoor tank environments. We provide customized nutrition maps alongside every single fish sale.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 115, name: "Manu V", userName: "@manu", userAvatar: "/images/users/user22.jpg" }],
    following: [{ id: 116, name: "Priya S", userName: "@priya", userAvatar: "/images/users/user23.jpg" }],
    contact: {
      email: "vishnu@example.com",
      phone: "+91 98765 43217",
      instagram: "https://instagram.com/vishnu_aquatics",
      facebook: "https://facebook.com/vishnu_aquatics"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/vishnu_flowerhorn_kok.mp4", likes: 1100, comments: 41, shares: 88, views: 19000 }
    ],
    posts: [{ id: 8, image: "/images/posts/flowerhorn1.jpg", caption: "KML Flowerhorn.", likes: 500, views: 7000, shares: 22, comments: [{ userName: "@shibu", name: "Shibu K", userAvatar: "/images/users/user24.jpg", content: "Nice kok!" }] }]
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
    description: "Professional Koi master breeder operating extensive mud pond systems modeled directly after Niigata benchmarks. Celebrating a decade of success in producing highly sought-after Kohaku, Sanke, and Showa lineages. Our fish boast incredible growth parameters, robust body confirmation, and exceptionally crisp pattern boundaries for discerning yard pond enthusiasts.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 117, name: "John D", userName: "@john", userAvatar: "/images/users/user25.jpg" }],
    following: [{ id: 118, name: "Anu R", userName: "@anu", userAvatar: "/images/users/user26.jpg" }],
    contact: {
      email: "meera@example.com",
      phone: "+91 98765 43218",
      instagram: "https://instagram.com/meera_koi",
      facebook: "https://facebook.com/meera_koi"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/meera_pond_harvest.mp4", likes: 4100, comments: 280, shares: 730, views: 87000 }
    ],
    posts: [{ id: 9, image: "/images/posts/koi2.jpg", caption: "Kohaku Koi growth update.", likes: 1200, views: 20000, shares: 80, comments: [{ userName: "@dev", name: "Dev A", userAvatar: "/images/users/user27.jpg", content: "Incredible size." }] }]
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
    description: "An energetic aquarist managing a diverse multi-strain hatchery up in the clean climates of Wayanad. Five years deep into refining robust Albino and Tiger Oscar lineages while maintaining natural ecosystem balance. Our primary focus is building strong immune systems and flawless skeletal development for lifetime pet vitality.",
    counts: { followers: 1, following: 1, posts: 1 },
    followers: [{ id: 119, name: "Rahul M", userName: "@rahulm", userAvatar: "/images/users/user28.jpg" }],
    following: [{ id: 120, name: "Suresh K", userName: "@suresh", userAvatar: "/images/users/user29.jpg" }],
    contact: {
      email: "jithin@example.com",
      phone: "+91 98765 43219",
      instagram: "https://instagram.com/jithin_fish",
      facebook: "https://facebook.com/jithin_fish"
    },
    shorts: [
      { id: 1, videoURL: "/videos/shorts/jithin_oscar_batch.mp4", likes: 670, comments: 19, shares: 34, views: 11500 }
    ],
    posts: [{ id: 10, image: "/images/posts/oscar1.jpg", caption: "New Oscar batch arrival.", likes: 310, views: 4500, shares: 5, comments: [{ userName: "@aquaholic", name: "Manu V", userAvatar: "/images/users/user30.jpg", content: "Great size!" }] }]
  }
];