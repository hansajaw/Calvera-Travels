// Shared tour packages data
const tourPackages = [
  {
      id: "romantic-escape",
      title: "Calvera Romantic Escape",
      duration: "8 Days / 7 Nights",
      destinations: ["Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
      idealFor: "Honeymooners & Couples",
      price: "USD 1,820 per person",
      summary:
        "Embark on an unforgettable honeymoon through Sri Lanka's most romantic landscapes. From the ancient majesty of Sigiriya to the misty hills of Ella and the wild wonders of Yala, each day is filled with love, discovery, and relaxation by golden beaches.",
      highlights: [
        "Climb the legendary Sigiriya Rock Fortress",
        "Enjoy a Minneriya elephant safari",
        "Visit the Temple of the Tooth Relic in Kandy",
        "Ride the scenic train to Ella",
        "Experience a Yala National Park safari",
        "Unwind on golden beaches under tropical sunsets",
      ],
      theme: "romantic",
      // --- CHANGE IS HERE (Paths fixed from C:\... to relative) ---
      image:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Honeymoon/Calvera Hoooneymoon.jpg",
      imageAlt: "Romantic couple in Sri Lanka",
    },
    {
      id: "cultural-essence",
      title: "Calvera Cultural Essence",
      duration: "6 Days / 5 Nights",
      destinations: [
        "Kandy",
        "Sigiriya",
        "Anuradhapura",
        "Polonnaruwa",
        "Hiriwadunna",
        "Negombo",
      ],
      idealFor: "Culture Lovers & Explorers",
      price: "USD 930 per person",
      summary:
        "Step into the heart of Sri Lanka's cultural heritage. Explore sacred temples, ancient capitals, and traditional village life as you uncover the timeless beauty of this island's past and present.",
      highlights: [
        "Visit Temple of the Tooth Relic",
        "Climb Sigiriya Fortress",
        "Explore Anuradhapura & Polonnaruwa",
        "Village life in Hiriwadunna",
        "Relax by the beaches of Negombo",
      ],
      theme: "cultural",
      image: "/images/Tours/Calvera pakage/Calvera Cultuer/dance-6983578.jpg",
      imageAlt: "Cultural heritage of Sri Lanka",
    },
    {
      id: "wild-trails",
      title: "Calvera Wild Trails",
      duration: "8 Days / 7 Nights",
      destinations: ["Wilpattu", "Kandy", "Nuwara Eliya", "Yala", "Mirissa"],
      idealFor: "Nature Lovers, Wildlife Enthusiasts & Adventure Seekers",
      price: "USD 1,560 per person",
      summary:
        "Journey deep into the wild heart of Sri Lanka with this thrilling nature and wildlife adventure. From leopard safaris to whale watching, every moment immerses you in breathtaking natural beauty.",
      highlights: [
        "Safari in Wilpattu & Yala",
        "Trekking at Udawattekele, Moon Plains & Horton Plains",
        "Visit Temple of the Tooth Relic",
        "Whale watching in Mirissa",
        "Relax on golden beaches at sunset",
      ],
      theme: "adventure",
      image:
        "/images/Tours/Calvera pakage/Calvera Wild/henning-borgersen-Kr_RijTa0kg-unsplash.jpg",
      imageAlt: "Safari jeep exploring the wild",
    },
    {
      id: "coastal-bliss",
      title: "Calvera Coastal Bliss",
      duration: "6 Days / 5 Nights",
      destinations: ["Galle", "Mirissa (Optional)", "Colombo"],
      idealFor: "Couples, Families & Beach Lovers",
      price: "USD 860 per person",
      summary:
        "Escape to Sri Lanka's southern coast for pure relaxation. From Galle's golden beaches to Mirissa's whale watching and Colombo's modern charm, experience sunshine, serenity, and sea breezes.",
      highlights: [
        "Relax on beaches of Galle",
        "Enjoy sunset walks at Galle Fort",
        "Optional whale watching in Mirissa",
        "Luxury coastal resorts",
        "Explore vibrant Colombo",
      ],
      theme: "coastal",
      image:
        "/images/Tours/Calvera pakage/Calvera Coastal Bliss (Leisure & Beach Relaxation/costalbills1.jpg",
      imageAlt: "Beautiful coastal beach view",
    },
    {
      id: "signature-journey",
      title: "Calvera Signature Journey",
      duration: "10 Days / 9 Nights",
      destinations: [
        "Dambulla",
        "Sigiriya",
        "Kandy",
        "Nuwara Eliya",
        "Udawalawe",
        "Galle",
        "Colombo",
      ],
      idealFor: "Couples, Families & Explorers",
      price: "USD 1,760 per person",
      summary:
        "Discover Sri Lanka's perfect balance of culture, nature, and relaxation. Explore temples, tea plantations, safaris, and beaches — each crafted to create your personal signature experience.",
      highlights: [
        "Climb Sigiriya Fortress",
        "Visit Dambulla Cave Temple & Temple of the Tooth",
        "Tour tea plantations",
        "Safari in Udawalawe",
        "Explore Galle Fort",
        "Final night in Colombo",
      ],
      theme: "signature",
      image: "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      hoverImage:
        "/images/Tours/Calvera pakage/Calvera Signature/Signature.jpg",
      imageAlt: "Traveler exploring Sri Lanka",
    },
];

export default tourPackages;