export const DESTINATIONS = [
  {
    id: 1,
    name: "Anuradhapura, Sri Lanka",
    slug: "anuradhapura-sri-lanka",
    region: "asia",
    short: "Sri Lanka’s sacred ancient capital filled with stupas, monasteries, and timeless spirituality.",
    image: "/images/destinations/Anuradhapura/anuradhapura.jpg",
    images: [
      "/images/destinations/Anuradhapura/Isuru muniya.jpg",
      "/images/Destinations/Anuradhapura/Jaya Sri Mahabodiaya.jpg",
      "/images/Destinations/Anuradhapura/Ruwanwelisieya.jpg",
    ],
    description:
      "Step back in time to the sacred city of Anuradhapura — a UNESCO World Heritage Site and the cradle of Sri Lanka’s ancient civilization. Walk among towering dagobas, ancient monasteries, and bodhi trees that have whispered prayers for over two millennia.",
    places: [
      {
        id: "ruwanwelisaya-stupa",
        title: "Ruwanwelisaya Stupa",
        image: "/images/Destinations/Anuradhapura/Ruwanwelisieya.jpg",
        short: "The majestic white dome that embodies Buddhist devotion.",
        details:
          "The magnificent Ruwanwelisaya Stupa stands as a symbol of Sri Lanka’s Buddhist devotion and architectural brilliance. Built by King Dutugemunu in the 2nd century BC, this dazzling white stupa is revered by pilgrims from around the world. Its serene atmosphere and spiritual presence make it one of the most inspiring sights in Anuradhapura.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "jaya-sri-maha-bodhi",
        title: "Jaya Sri Maha Bodhi",
        image: "/images/Destinations/Anuradhapura/Jaya Sri Mahabodiaya.jpg",
        short: "The world’s oldest recorded sacred tree still in worship.",
        details:
          "The Jaya Sri Maha Bodhi is one of the world’s oldest living trees with a recorded history, grown from a branch of the original Bodhi tree in India under which Lord Buddha attained enlightenment. Worshippers visit this sacred site to offer prayers and flowers, seeking peace and blessings. It’s a deeply spiritual experience at the heart of Anuradhapura’s heritage.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "isurumuniya",
        title: "Isurumuniya",
        image: "/images/destinations/Anuradhapura/Isuru muniya.jpg",
        short: "A serene rock temple known for its famous Lovers carving.",
        details:
          "Carved into solid rock and surrounded by a peaceful lotus pond, Isurumuniya Temple is famous for its exquisite stone carvings, including the celebrated “Isurumuniya Lovers.” The temple’s blend of artistry, spirituality, and natural beauty offers visitors a tranquil escape and a glimpse into the artistry of ancient Sri Lanka.",
        rating: { average: 4.7, count: 0 },
      },
    ],
    highlights: [
      { title: "Sacred Stupas", desc: "Venerable dagobas and ancient shrines across the holy city" },
      { title: "Living Pilgrimage", desc: "Active worship, rituals, and festivals year-round" },
      { title: "Archaeology Trails", desc: "Monastic ruins, reservoirs, and museum exhibits" },
      { title: "Sunrise & Sunset", desc: "Soft golden light over stupas and paddy fields" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Hot & generally dry; start early for sites" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Dry-zone weather; best for outdoor exploring" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Inter-monsoon showers peak Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Pleasant mornings/evenings and clear skies" },
      ],
    },
    travelTips: [
      { title: "Dress Modestly", text: "Shoulders/knees covered for temples; remove footwear at shrines." },
      { title: "Carry Socks", text: "Stone courtyards get very hot underfoot by midday." },
      { title: "Go Early/Late", text: "Beat heat and crowds at key sites like Ruwanwelisaya." },
      { title: "Hydration", text: "Bring water and a hat; limited shade at open sites." },
      { title: "Bikes & Tuk-tuks", text: "Cycling or hiring a tuk-tuk is the easiest way between ruins." },
      { title: "Respect Rituals", text: "No selfies with back to Buddha statues; keep voices low." },
    ],
  },

  {
    id: 2,
    name: "Negombo, Sri Lanka",
    slug: "negombo-sri-lanka",
    region: "asia",
    short: "A lively seaside town blending beaches, canals, and colonial charm.",
    image: "/images/Destinations/Negambo/Negambo.jpg",
    images: [
      "/images/Destinations/Negambo/Negambo lagon.jpg",
      "/images/Destinations/Negambo/Light HOuse.jpg",
      "/images/Destinations/Negambo/Fisher men.jpg",
    ],
    description:
      "Located just north of Colombo, Negombo is a vibrant coastal city famous for its golden beaches, colonial heritage, and lively fishing culture. With a mix of serene lagoons, bustling markets, and historic landmarks, Negombo offers visitors a perfect combination of relaxation and cultural exploration.",
    places: [
      {
        id: "negombo-lagoon",
        title: "Negombo Lagoon",
        image: "/images/Destinations/Negambo/Negambo lagon.jpg",
        short: "A calm lagoon lined with mangroves and fishing boats.",
        details:
          "The Negombo Lagoon is a scenic haven for nature lovers and birdwatchers. Stretching across calm waters and surrounded by mangroves, it’s ideal for boat rides, photography, and observing traditional fishing practices. The lagoon also provides stunning sunsets, making it a favorite spot for peaceful moments by the water.",
        rating: { average: 4.5, count: 0 },
      },
      {
        id: "dutch-fort",
        title: "Dutch Fort",
        image: "/images/Destinations/Negambo/Light HOuse.jpg",
        short: "A 17th-century colonial relic near the lagoon’s edge.",
        details:
          "The Dutch Fort of Negombo, built during the 17th century, is a testament to the city’s colonial past. Though partially preserved, its walls and bastions offer a glimpse into historic military architecture. Visitors can explore the fort area while enjoying views of the lagoon and the surrounding city.",
        rating: { average: 4.2, count: 0 },
      },
      {
        id: "fish-market",
        title: "Negombo Fish Market",
        image: "/images/Destinations/Negambo/Fisher men.jpg",
        short: "A bustling market alive with color, aroma, and energy.",
        details:
          "Negombo’s Fish Market is a lively hub of local life and culture. Early in the morning, fishermen bring in their fresh catch, creating a colorful and bustling atmosphere. It’s the perfect place to experience authentic local culture, taste fresh seafood, and capture the vibrant energy of the city.",
        rating: { average: 4.4, count: 0 },
      },
    ],
    highlights: [
      { title: "Beach Time", desc: "Long sandy stretch with west-coast sunsets" },
      { title: "Fishing Culture", desc: "Morning fish auctions and catamarans" },
      { title: "Canals & Lagoon", desc: "Dutch canals, mangroves, birdlife by boat" },
      { title: "Colonial Remnants", desc: "Fort walls, churches and old quarters" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm with sunshine; late-May showers possible" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon brings rough seas & rain" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Unsettled inter-monsoon weather" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Dry, sunny, best swimming conditions" },
      ],
    },
    travelTips: [
      { title: "Swim Flags", text: "Follow local beach flag advice; currents change with monsoon." },
      { title: "Early Fish Market", text: "Arrive by 6–7am for the lively auctions." },
      { title: "Canal Cruise", text: "Short boat rides reveal birds and lagoon villages." },
      { title: "Sun Care", text: "Strong afternoon sun on the west coast—pack SPF." },
      { title: "Airport Handy", text: "Great first/last-night base near CMB airport." },
      { title: "Seafood Spots", text: "Try beach shacks for fresh crab and prawns." },
    ],
  },

  {
    id: 3,
    name: "Colombo, Sri Lanka",
    slug: "colombo-sri-lanka",
    region: "asia",
    short: "Sri Lanka’s cosmopolitan capital where old meets new in perfect rhythm.",
    image: "/images/Destinations/Colombo/Colombo.jpg",
    images: [
      "/images/Destinations/Colombo/Galle Face.jpg",
      "/images/Destinations/Colombo/Ganga ramaya.jpg",
      "/images/Destinations/Colombo/Pettaha.jpg",
    ],
    description:
      "Sri Lanka’s bustling capital fuses colonial grace with modern vibrance — a tapestry of architecture, cuisine, and culture. Beneath its skyscrapers lies a heartbeat that pulses with art, rhythm, and a welcoming warmth.",
    places: [
      {
        id: "galle-face-green",
        title: "Galle Face Green",
        image: "/images/Destinations/Colombo/Galle Face.jpg",
        short: "Colombo’s iconic oceanfront for sunset strolls and street food.",
        details:
          "A historic promenade where families gather to fly kites, lovers stroll by the sea, and the sky burns orange at dusk. It’s the perfect snapshot of Colombo’s energy and leisure.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "gangaramaya",
        title: "Gangarama Temple",
        image: "/images/Destinations/Colombo/Ganga ramaya.jpg",
        short: "An eclectic Buddhist temple filled with culture and art.",
        details:
          "A vibrant symbol of Colombo’s spiritual and cultural diversity, Gangaramaya Temple blends traditional Sri Lankan, Thai, Indian, and Chinese architectural styles. Beyond its ornate halls and golden statues lies a museum filled with sacred relics and gifts from around the world. The temple is both a place of worship and a center for cultural learning — peaceful, ornate, and deeply spiritual.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "pettah",
        title: "Pettah",
        image: "/images/Destinations/Colombo/Pettaha.jpg",
        short: "A chaotic maze of shops, spices, and street sounds.",
        details:
          "Dating back to the 17th century, this beautifully restored complex is now home to boutiques, cafés, and fine dining — an emblem of Colombo’s evolution into a modern metropolis with a soul.",
        rating: { average: 4.3, count: 0 },
      },
    ],
    highlights: [
      { title: "Seafront Sunsets", desc: "Evening breeze and street food at Galle Face" },
      { title: "Architecture Mix", desc: "Colonial, art-deco and modern skyline" },
      { title: "Culinary Scene", desc: "Sri Lankan, Tamil, Muslim & global flavors" },
      { title: "Markets & Malls", desc: "Pettah bazaars to chic shopping" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm; late-May showers begin" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon showers; humid" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Inter-monsoon bursts of rain" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Best weather for city walks" },
      ],
    },
    travelTips: [
      { title: "Move by Ride-Hail", text: "Pick Metered Tuk or app taxis to avoid haggling." },
      { title: "Street Snacks", text: "Try kottu, isso wade, and hoppers; ask for spice level." },
      { title: "Dress for Temples", text: "Cover shoulders/knees when visiting shrines." },
      { title: "Sea Breeze", text: "Evenings are best along the Galle Face promenade." },
      { title: "Museum Hours", text: "National Museum closes early—plan morning visits." },
      { title: "Heat & Humidity", text: "Carry water; midday sightseeing can be taxing." },
    ],
  },

  {
    id: 4,
    name: "Sigiriya, Sri Lanka",
    slug: "sigiriya-sri-lanka",
    region: "asia",
    short: "An ancient rock fortress soaring above forests and royal gardens.",
    image: "/images/Destinations/Sigriya/Sigriya.jpg",
    images: [
      "/images/Destinations/Sigriya/Sigirya Rock.jpg",
      "/images/Destinations/Sigriya/Sigiriya Water Gardens.jpg",
      "/images/Destinations/Sigriya/Sigiriya Frescoes.jpg",
    ],
    description:
      "Rising dramatically from the heart of Sri Lanka’s Cultural Triangle, Sigiriya — often called the Lion Rock — is one of the island’s most iconic landmarks. This ancient rock fortress combines breathtaking views, royal history, and incredible artistry. Surrounded by lush forests and landscaped gardens, Sigiriya is both a symbol of Sri Lanka’s heritage and a wonder of ancient engineering.",
    places: [
      {
        id: "lion-rock-fortress",
        title: "Lion Rock Fortress",
        image: "/images/Destinations/Sigriya/Sigirya Rock.jpg",
        short: "A royal citadel built in the sky by King Kashyapa.",
        details:
          "The Sigiriya Rock Fortress is a marvel of ancient ingenuity, built by King Kashyapa in the 5th century AD. Visitors climb through massive lion paws carved into the rock to reach the summit, where palace ruins and panoramic views await. Every step reveals the brilliance of a king’s vision — a royal citadel suspended between earth and sky.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "sigiriya-gardens",
        title: "Sigiriya Gardens",
        image: "/images/Destinations/Sigriya/Sigiriya Water Gardens.jpg",
        short: "Symmetrical pools and fountains showcasing ancient design.",
        details:
          "At the foot of the rock lies the elegant Sigiriya Water Gardens, a masterpiece of ancient landscape design. Symmetrical pools, fountains, and pathways create a royal paradise that once surrounded the palace. The gardens, fed by an ingenious hydraulic system, reflect both beauty and advanced engineering — a serene introduction to the grandeur of Sigiriya.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "sigiriya-frescoes",
        title: "Sigiriya Frescoes",
        image: "/images/Destinations/Sigriya/Sigiriya Frescoes.jpg",
        short: "Celestial maidens painted over 1,500 years ago.",
        details:
          "Halfway up the rock, you’ll find the famous Sigiriya Frescoes, a series of stunning ancient paintings depicting celestial maidens. These vibrant murals, still vivid after over 1,500 years, showcase the sophistication and artistic mastery of early Sri Lankan civilization. The mystery and beauty of these frescoes continue to fascinate travelers and historians alike.",
        rating: { average: 4.8, count: 0 },
      },
    ],
    highlights: [
      { title: "Iconic Summit", desc: "Climb Lion Rock for sweeping views" },
      { title: "Royal Gardens", desc: "Symmetry, pools and ancient hydraulics" },
      { title: "Fresco Art", desc: "1,500-year-old celestial maidens" },
      { title: "Nearby Pidurangala", desc: "Alternative sunrise viewpoint" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm and mostly dry; start climbs early" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Dry-zone weather; clearest views" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Heaviest rains often Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Pleasant temps and good visibility" },
      ],
    },
    travelTips: [
      { title: "Beat the Heat", text: "Start before 7am; carry 1–2L of water." },
      { title: "Footwear", text: "Good grip shoes—steps can be steep/hot." },
      { title: "Wasp Zones", text: "Follow posted guidance; keep noise low." },
      { title: "Tickets", text: "Card accepted but carry cash as backup." },
      { title: "Drone Rules", text: "Check permission—many zones restricted." },
      { title: "Alternate View", text: "Climb Pidurangala for sunrise photos of Sigiriya." },
    ],
  },

  {
    id: 5,
    name: "Galle, Sri Lanka",
    slug: "galle-sri-lanka",
    region: "asia",
    short: "A UNESCO-listed coastal fort city rich with history and seaside charm.",
    image: "/images/Destinations/Galle/Galle.jpg",
    images: [
      "/images/Destinations/Galle/National Maritime Museum.jpg",
      "/images/Destinations/Galle/Light House.jpg",
      "/images/Destinations/Galle/Galle fort.jpg",
    ],
    description:
      "A coastal gem where Dutch-colonial elegance meets tropical charm. Within Galle Fort’s cobblestoned walls, cafés hum, art blooms, and the ocean breeze carries echoes of centuries past.",
    places: [
      {
        id: "galle-fort",
        title: "Galle Fort",
        image: "/images/Destinations/Galle/Galle fort.jpg",
        short: "A living museum of colonial architecture and culture.",
        details:
          "The heart of the city is the Galle Fort, a UNESCO World Heritage Site and one of the best-preserved colonial forts in Asia. Built by the Portuguese and later expanded by the Dutch, the fort is a living museum with centuries-old ramparts, charming boutiques, art galleries, and cafés. Exploring its narrow lanes feels like stepping back in time while enjoying the coastal breeze.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "galle-lighthouse",
        title: "Galle Lighthouse",
        image: "/images/Destinations/Galle/Light House.jpg",
        short: "A postcard-perfect lighthouse overlooking the Indian Ocean.",
        details:
          "Standing proudly at the edge of the fort, the Galle Lighthouse is one of the city’s most photographed landmarks. Overlooking the turquoise waters of the Indian Ocean, it offers stunning views, especially during sunrise and sunset. It’s a favorite spot for photographers and a peaceful place to soak in Galle’s timeless beauty.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "national-maritime-museum",
        title: "National Maritime Museum",
        image: "/images/Destinations/Galle/National Maritime Museum.jpg",
        short: "A fascinating look at Sri Lanka’s seafaring legacy.",
        details:
          "Located within the fort, the National Maritime Museum showcases Sri Lanka’s rich seafaring history. Exhibits include ancient shipwreck artifacts, maritime maps, and models that tell the story of the island’s role in global trade. It’s a fascinating stop for history enthusiasts and anyone curious about Galle’s connection to the ocean.",
        rating: { average: 4.4, count: 0 },
      },
    ],
    highlights: [
      { title: "UNESCO Fort Town", desc: "Ramparts, bastions and cobbled lanes" },
      { title: "Cafés & Boutiques", desc: "Design stores, galleries and gelato stops" },
      { title: "Clifftop Views", desc: "Lighthouse and ocean panoramas" },
      { title: "Sunset Walls", desc: "Locals gather along the ramparts nightly" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm; late-May sees first monsoon showers" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon; rough seas and rain" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Showery inter-monsoon period" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Dry, sunny south-coast weather" },
      ],
    },
    travelTips: [
      { title: "Walk the Walls", text: "Best light at golden hour; watch waves below." },
      { title: "Stay Inside Fort", text: "Everything is walkable; limited parking inside." },
      { title: "Heat Breaks", text: "Afternoons are hot—plan museum/café time." },
      { title: "Modest Dress", text: "Needed for nearby temples and mosques." },
      { title: "Sea Conditions", text: "Monsoon can be rough—check lifeguard flags." },
      { title: "Day Trips", text: "Easy hops to Unawatuna, Dalawella, and jungle beaches." },
    ],
  },

  {
    id: 6,
    name: "Kandy, Sri Lanka",
    slug: "kandy-sri-lanka",
    region: "asia",
    short: "The hill capital of Sri Lanka where culture, faith, and nature meet.",
    image: "/images/Destinations/Kandy/Kandy.jpg",
    images: [
      "/images/Destinations/Kandy/Kandy lake.jpg",
      "/images/Destinations/Kandy/Dalada Maligawa.jpg",
      "/images/Destinations/Kandy/botinacal garaden.jpg",
    ],
    description:
      "Nestled among misty hills, Kandy is Sri Lanka’s cultural and spiritual heart. Once the final royal capital of the island, it’s a city where ancient traditions meet natural beauty. With its sacred temples, serene lake, and lush surroundings, Kandy offers a peaceful escape and a deep connection to Sri Lanka’s proud heritage.",
    places: [
      {
        id: "temple-of-the-tooth",
        title: "Temple of the Tooth Relic",
        image: "/images/Destinations/Kandy/Dalada Maligawa.jpg",
        short: "A sacred temple housing the Buddha’s tooth relic.",
        details:
          "The Temple of the Sacred Tooth Relic, or Sri Dalada Maligawa, is one of the most revered Buddhist temples in the world. It houses the sacred tooth relic of Lord Buddha, drawing pilgrims and visitors from across the globe. The temple’s golden roofs, intricate carvings, and daily rituals create an atmosphere of devotion and tranquility that leaves a lasting impression on every visitor.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "kandy-lake",
        title: "Kandy Lake",
        image: "/images/Destinations/Kandy/Kandy lake.jpg",
        short: "A tranquil lake reflecting the city’s peaceful spirit.",
        details:
          "Located in the heart of the city, Kandy Lake is a calm and scenic centerpiece surrounded by lush greenery and colonial architecture. A leisurely walk around the lake offers peaceful views and glimpses of daily life in Kandy. As the sun sets and the temple lights reflect on the water, the scene becomes truly magical.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "royal-botanical-gardens-peradeniya",
        title: "Royal Botanical Gardens, Peradeniya",
        image: "/images/Destinations/Kandy/botinacal garaden.jpg",
        short: "A lush paradise of exotic plants and orchids.",
        details:
          "Just a few kilometers from the city, the Royal Botanical Gardens in Peradeniya are a paradise for nature lovers. Home to over 4,000 species of plants, including orchids, palms, and medicinal herbs, the gardens are both educational and enchanting. Once reserved for Kandyan royalty, today it’s one of the most beautiful and well-maintained gardens in Asia",
        rating: { average: 4.8, count: 0 },
      },
    ],
    highlights: [
      { title: "Sacred Heritage", desc: "Temple of the Tooth and rituals" },
      { title: "Hill-Country Scenery", desc: "Misty ridges and lake vistas" },
      { title: "Esala Perahera", desc: "Grand July–Aug pageant and processions" },
      { title: "Botanical Splendor", desc: "Peradeniya’s famed gardens" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm; late-May showers increase" },
        { season: "Summer", months: "Jun–Aug", label: "POPULAR", reason: "Festival season; some hill showers" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Wettest months around Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Cooler, clearer hill-country weather" },
      ],
    },
    travelTips: [
      { title: "Temple Etiquette", text: "White/light clothing and modest dress recommended." },
      { title: "Footwear Bag", text: "Shoes must be removed at temple; carry a spare bag." },
      { title: "Lake Loop", text: "Do a 2–3 km evening walk around Kandy Lake." },
      { title: "Traffic Windows", text: "Avoid peak traffic 8–9:30am and 4–6pm." },
      { title: "Perahera Planning", text: "Book seats/accommodation months ahead (Jul–Aug)." },
      { title: "Light Layer", text: "Evenings can be cool; carry a light jacket." },
    ],
  },

  {
    id: 7,
    name: "Mirissa, Sri Lanka",
    slug: "mirissa-sri-lanka",
    region: "asia",
    short: "A tropical paradise of golden beaches and gentle waves.",
    image: "/images/Destinations/Mirissa/Mirissa.jpg",
    images: [
      "/images/Destinations/Mirissa/Whale.jpg",
      "/images/Destinations/Mirissa/Mirissa beach.jpg",
      "/images/Destinations/Mirissa/Coconut.jpg",
    ],
    description:
      "Mirissa, located on Sri Lanka’s southern coast, is a vibrant beach town known for its golden sands, turquoise waters, and laid-back atmosphere. Perfect for relaxation, adventure, and stunning coastal scenery, Mirissa is a must-visit destination for travelers seeking both serenity and excitement.",
    places: [
      {
        id: "mirissa-beach",
        title: "Mirissa Beach",
        image: "/images/Destinations/Mirissa/Mirissa beach.jpg",
        short: "A lively beach perfect for swimming and sunsets.",
        details:
          "Mirissa Beach is famous for its soft sand, clear waters, and gentle waves. Ideal for swimming, sunbathing, or simply relaxing by the ocean, the beach also offers vibrant beachfront cafés and bars, making it a perfect spot to unwind while enjoying the tropical scenery.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "whale-watching",
        title: "Whale Watching",
        image: "/images/Destinations/Mirissa/Whale.jpg",
        short: "An unforgettable encounter with blue whales and dolphins.",
        details:
          "Whale Watching in Mirissa is one of the most thrilling wildlife experiences in Sri Lanka. From December to April, boat tours give visitors the chance to spot majestic blue whales, sperm whales, and playful dolphins in their natural habitat — a truly unforgettable adventure.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "coconut-tree-hill",
        title: "Coconut Tree Hill",
        image: "/images/Destinations/Mirissa/Coconut.jpg",
        short: "A stunning palm-covered viewpoint over Mirissa Bay.",
        details:
          "Coconut Tree Hill is an iconic viewpoint overlooking Mirissa Bay, famous for its scenic rows of coconut palms and panoramic ocean views. It’s a favorite spot for photography, sunset watching, and soaking in the beauty of Sri Lanka’s southern coastline.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "Soft-Sand Beach", desc: "Good swimming in calm season" },
      { title: "Whale Safaris", desc: "Blue and sperm whales (Dec–Apr)" },
      { title: "Viewpoints", desc: "Coconut Tree Hill & Parrot Rock" },
      { title: "Beach Cafés", desc: "Sunset drinks and seafood grills" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Good beach weather; end of whale season" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon—rougher seas" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Changeable weather; big swells" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Calmest seas; peak for whales" },
      ],
    },
    travelTips: [
      { title: "Boat Choice", text: "Pick licensed operators; seasick tablets if needed." },
      { title: "Reef Friendly", text: "Use mineral sunscreen to protect marine life." },
      { title: "Rip Currents", text: "Swim near flags; conditions vary by day." },
      { title: "Cash for Cafés", text: "Some beach bars are cash-only or charge card fees." },
      { title: "Sunrise Snaps", text: "Coconut Tree Hill is best early to avoid crowds." },
      { title: "Tuk-tuk Links", text: "Quick rides to Weligama & Polhena for snorkeling." },
    ],
  },

  {
    id: 8,
    name: "Polonnaruwa, Sri Lanka",
    slug: "polonnaruwa-sri-lanka",
    region: "asia",
    short: "An ancient royal capital filled with ruins and timeless stone art.",
    image: "/images/Destinations/Polonnaruwa/Polonnaruwa.jpg",
    images: [
      "/images/Destinations/Polonnaruwa/Royal.jpg",
      "/images/Destinations/Polonnaruwa/Parakrama samurdrya.png",
      "/images/Destinations/Polonnaruwa/Gal viharaya.jpg",
    ],
    description:
      "Discover the ancient kingdom of Polonnaruwa, Sri Lanka’s second royal capital and a UNESCO World Heritage Site. Once a thriving city of kings, today it stands as a stunning open-air museum filled with temples, palaces, and statues that reflect the island’s golden age. Every corner of Polonnaruwa tells a story of art, faith, and royal grandeur.",
    places: [
      {
        id: "gal-vihara",
        title: "Gal Vihara",
        image: "/images/Destinations/Polonnaruwa/Gal viharaya.jpg",
        short: "Four serene Buddha statues carved from a single granite rock.",
        details:
          "The Gal Viharaya is one of Polonnaruwa’s most treasured monuments, showcasing four magnificent Buddha statues carved into a single granite rock face. Each statue — seated, standing, and reclining — radiates a deep sense of serenity and spiritual power. It’s a masterpiece of ancient craftsmanship and a must-see for any visitor exploring Sri Lanka’s heritage.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "parakrama-samudraya",
        title: "Parakrama Samudraya",
        image: "/images/Destinations/Polonnaruwa/Parakrama samurdrya.png",
        short: "A vast reservoir built to ‘not let a drop of rain go to sea.’",
        details:
          "Known as the “Sea of Parakrama,” the Parakrama Samudra is a massive man-made reservoir built by King Parakramabahu the Great. This engineering marvel not only sustained the kingdom’s agriculture but still supports local life today. The vast expanse of water shimmering under the sun creates a breathtaking view that reflects the wisdom of ancient Sri Lankan civilization.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "royal-palace-ruins",
        title: "Royal Palace Ruins",
        image: "/images/Destinations/Polonnaruwa/Royal.jpg",
        short: "Echoes of a mighty seven-story palace of kings.",
        details:
          "Walk among the majestic Royal Palace Ruins, once the heart of Polonnaruwa’s royal complex. Though only the brick foundations remain, they hint at the grandeur of a seven-story palace built by King Parakramabahu. Exploring these ancient walls lets visitors imagine the power and sophistication of a kingdom that once ruled the island.",
        rating: { average: 4.5, count: 0 },
      },
    ],
    highlights: [
      { title: "UNESCO Ruins", desc: "Royal complexes and monastic cities" },
      { title: "Master Carvings", desc: "Gal Vihara’s granite Buddhas" },
      { title: "Ancient Tanks", desc: "Massive reservoirs and bund walks" },
      { title: "Cycle Friendly", desc: "Flat terrain ideal for bikes" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Hot & mostly dry; start early" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Dry-zone clarity for photography" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Heaviest rains often Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Cooler mornings; pleasant touring" },
      ],
    },
    travelTips: [
      { title: "Bike Hire", text: "Cover more ground across wide archaeological zones." },
      { title: "Ticket Hub", text: "Buy main site ticket once; keep it handy at checkpoints." },
      { title: "Sun Shield", text: "Hat/umbrella—little shade at noon." },
      { title: "Wildlife", text: "Monkeys are common; don’t feed or approach." },
      { title: "Photography", text: "Tripods allowed in many areas; avoid blocking pathways." },
      { title: "Hydration", text: "Few kiosks inside—carry water." },
    ],
  },

  {
    id: 9,
    name: "Pasikuda, Sri Lanka",
    slug: "pasikuda-sri-lanka",
    region: "asia",
    short: "A calm east-coast bay with crystal-clear shallows and coral reefs.",
    image: "/images/Destinations/Pasikuda/Pasikuda  (1).jpg",
    images: [
      "/images/Destinations/Pasikuda/Pasikuda  (3).jpg",
      "/images/Destinations/Pasikuda/kalkuda.jpg",
      "/images/Destinations/Pasikuda/Diving.jpg",
    ],
    description:
      "Pasikuda, located on Sri Lanka’s east coast, is famous for its shallow, turquoise waters and long stretches of golden sand. Known for its calm and peaceful beaches, it’s a perfect destination for relaxation, water sports, and family-friendly activities. The area offers a serene escape away from the crowds.",
    places: [
      {
        id: "pasikuda-beach",
        title: "Pasikuda Beach",
        image: "/images/Destinations/Pasikuda/Pasikuda  (3).jpg",
        short: "A tranquil bay perfect for wading, swimming, and sunbathing.",
        details:
          "Pasikuda Beach is celebrated for its shallow, clear waters that stretch for kilometers, making it ideal for swimming and sunbathing. The calm waves and soft sand provide a safe and picturesque environment, perfect for travelers of all ages seeking a tranquil beach experience.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "Kalkudah Beach",
        title: "kalkudah-beach",
        image: "/images/Destinations/Pasikuda/kalkuda.jpg",
        short: "A serene, wide shoreline ideal for long coastal walks.",
        details:
          "Just a short distance from Pasikuda, Kalkudah Beach offers another pristine coastal escape. Its wide, sandy shores and gentle waters make it a great spot for relaxing walks, beachside picnics, and capturing stunning coastal views. The area retains a peaceful, less-commercialized charm.",
        rating: { average: 4.5, count: 0 },
      },
      {
        id: "snorkeling/diving-pots",
        title: "Snorkeling / Diving Spots",
        image: "/images/Destinations/Pasikuda/Diving.jpg",
        short: "A window into underwater color.",
        details:
          "The Pasikuda region is home to several excellent snorkeling and diving spots. Visitors can explore vibrant coral reefs, tropical fish, and marine life in the calm waters of the bay. These underwater adventures provide an unforgettable way to experience the rich biodiversity of Sri Lanka’s east coast.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "Shallow Lagoon", desc: "Kilometers of knee-deep clear water" },
      { title: "Family Friendly", desc: "Gentle seas and wide sandy bay" },
      { title: "Snorkel & Dive", desc: "Coral patches and reef fish" },
      { title: "Quiet Escapes", desc: "Less crowded than south/west coasts" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Improving seas; best by May" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Calmest east-coast waters" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Showers increase; seas turn choppy" },
        { season: "Winter", months: "Dec–Feb", label: "OFF-SEASON", reason: "NE monsoon—rougher seas & rain" },
      ],
    },
    travelTips: [
      { title: "Reef Protection", text: "Avoid standing on coral; use reef-safe sunscreen." },
      { title: "Shade Plan", text: "Beach is open; hire an umbrella/cabana." },
      { title: "Early Calm", text: "Morning waters are clearest for snorkeling." },
      { title: "Sea Shoes", text: "Helpful for shells and occasional coral rubble." },
      { title: "Cash & ATMs", text: "Bring cash—limited ATMs around." },
      { title: "Combine Trips", text: "Easy access to Batticaloa and Kalkudah." },
    ],
  },

  {
    id: 10,
    name: "Arugam Bay, Sri Lanka",
    slug: "arugam-bay-sri-lanka",
    region: "asia",
    short: "A surfer’s paradise with golden sands and laid-back charm.",
    image: "/images/Destinations/Arugambay/arugambay.jpg",
    images: [
      "/images/Destinations/Arugambay/Elephant roc.jpg",
      "/images/Destinations/Arugambay/Laggon safraii.jpg",
      "/images/Destinations/Arugambay/surf.jpg",
    ],
    description:
      "Arugam Bay, located on Sri Lanka’s east coast, is a world-renowned surfing destination surrounded by natural beauty. With its laid-back vibe, pristine beaches, and vibrant local culture, it’s a favorite spot for surfers, adventure seekers, and travelers looking to unwind by the ocean.",
    places: [
      {
        id: "arugambay-beach",
        title: "Arugam Bay Beach",
        image: "/images/Destinations/Arugambay/surf.jpg",
        short: "The island’s surf capital.",
        details:
          "Arugam Bay Beach is famous for its consistent waves and surf-friendly conditions, attracting surfers from around the globe. Whether you’re a beginner taking lessons or an experienced rider chasing perfect waves, the beach offers an unforgettable surfing experience along with stunning coastal scenery.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "elephant-rock",
        title: "Elephant Rock",
        image: "/images/Destinations/Arugambay/Elephant roc.jpg",
        short: "A scenic cliff and viewpoint shaped like an elephant.",
        details:
          "Elephant Rock is a striking coastal formation near Arugam Bay, named for its resemblance to an elephant. It’s a popular spot for photography, relaxing by the sea, and enjoying panoramic views of the bay, especially at sunrise or sunset.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "pottuvil-lagoon",
        title: "Lagoon Safari",
        image: "/images/Destinations/Arugambay/Laggon safraii.jpg",
        short: "Nature’s quiet sanctuary.",
        details:
          "The Arugam Bay Lagoon offers a unique safari experience through mangroves and calm waters. Visitors can spot birds, monitor lizards, and other wildlife while enjoying a peaceful boat ride. The lagoon safari provides a perfect contrast to the bustling beach and surf scene.",
        rating: { average: 4.5, count: 0 },
      },
    ],
    highlights: [
      { title: "World-Class Surf", desc: "Point breaks and warm water" },
      { title: "Laid-Back Vibe", desc: "Beach cafés and barefoot nights" },
      { title: "Wild Lagoons", desc: "Mangroves, crocs, and birdlife by boat" },
      { title: "Nearby Temples", desc: "Quiet shrines and hill viewpoints" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Pre-season waves build; fewer crowds" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Peak surf season; dry and sunny" },
        { season: "Autumn", months: "Sep–Nov", label: "POPULAR", reason: "Late-season swells; some showers by Nov" },
        { season: "Winter", months: "Dec–Feb", label: "OFF-SEASON", reason: "NE monsoon; onshore winds and rain" },
      ],
    },
    travelTips: [
      { title: "Board Rentals", text: "Plenty of schools; dawn sessions are calmest." },
      { title: "Sun & Salt", text: "Zinc stick and rash guard recommended." },
      { title: "Wildlife Aware", text: "Elephants may use coastal corridors at night—drive carefully." },
      { title: "Cash Ready", text: "ATMs can be limited; keep backup cash." },
      { title: "Respect Breaks", text: "Local surf etiquette: don’t drop in; rotate waves." },
      { title: "Day Trips", text: "Lahugala NP and Panama sand dunes are close." },
    ],
  },

  {
    id: 11,
    name: "Kalpitiya, Sri Lanka",
    slug: "kalpitiya-sri-lanka",
    region: "asia",
    short: "A windy peninsula known for dolphins, kitesurfing, and lagoons.",
    image: "/images/Destinations/Kalpitiya/Kalpitiya.jpg",
    images: [
      "/images/Destinations/Kalpitiya/Lagoon Kalpitiya.jpg",
      "/images/Destinations/Kalpitiya/Kite Surf.jpg",
      "/images/Destinations/Kalpitiya/Dolpihin.jpg",
    ],
    description:
      "Located on the northwestern coast of Sri Lanka, Kalpitiya is a coastal paradise known for its pristine beaches, vibrant marine life, and thrilling water adventures. With its laid-back charm and untouched beauty, it’s the ideal destination for both relaxation and excitement by the sea.",
    places: [
      {
        id: "kalpitiya-lagoon",
        title: "Kalpitiya Lagoon",
        image: "/images/Destinations/Kalpitiya/Lagoon Kalpitiya.jpg",
        short: "Kite surfer’s dream.",
        details:
          "Calm, scenic, and surrounded by mangroves, the Kalpitiya Lagoon is a haven for kayaking, paddle-boarding, or simply soaking in the sunset. It’s a peaceful retreat that beautifully balances adventure with serenity — capturing the true essence of coastal Sri Lanka",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "dolphin-watching",
        title: "Dolphin Watching",
        image: "/images/Destinations/Kalpitiya/Dolpihin.jpg",
        short: "An oceanic ballet of playful spinner pods.",
        details:
          "Kalpitiya is one of the best places in Asia to witness pods of playful dolphins dancing across the waves. Between November and April, hundreds of spinner dolphins can be seen gliding gracefully through the turquoise waters — an unforgettable experience for any ocean lover.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "kite-surfing",
        title: "Kite Surfing",
        image: "/images/Destinations/Kalpitiya/Kite Surf.jpg",
        short: "Ride the wind across wide open lagoons.",
        details:
          "With strong winds and wide open lagoons, Kalpitiya has become a world-famous destination for kite surfers. Whether you’re a beginner or a pro, the area’s steady breeze and shallow waters make it a perfect spot to ride the wind and waves against a stunning coastal backdrop.",
        rating: { average: 4.9, count: 0 },
      },
    ],
    highlights: [
      { title: "Dolphin Pods", desc: "Large spinner schools Nov–Apr" },
      { title: "Kite Mecca", desc: "Steady winds and flat lagoon water" },
      { title: "Sandbars & Islets", desc: "Boat trips to remote beaches" },
      { title: "Eco Vibes", desc: "Mangroves and birdlife at dusk" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Good seas; wind rising for kitesurfers" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Prime wind for kite surfing (choppier seas)" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Short, sharp showers in Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Calm seas and peak dolphin season" },
      ],
    },
    travelTips: [
      { title: "Choose the Season", text: "Wind lovers: Jun–Aug; Calm seas & dolphins: Dec–Apr." },
      { title: "Sun & Wind", text: "Lip balm and eye protection for long sessions." },
      { title: "Boat Safety", text: "Lifejackets and ethical distance from dolphins." },
      { title: "Mosquito Care", text: "Dusk can be buggy—use repellent." },
      { title: "Cash on Hand", text: "Some lodges are cash-preferred." },
      { title: "Sandbar Picnics", text: "Arrange with boatmen for remote stops." },
    ],
  },

  {
    id: 12,
    name: "Nuwara Eliya, Sri Lanka",
    slug: "nuwara-eliya-sri-lanka",
    region: "asia",
    short: "Sri Lanka’s ‘Little England’ — tea country wrapped in misty hills.",
    image: "/images/Destinations/Nuwara eliaya/Nuwara elia.jpg",
    images: [
      "/images/Destinations/Nuwara eliaya/Tea.jpg",
      "/images/Destinations/Nuwara eliaya/Hakgala-Botanical-Garden-1920.jpg",
      "/images/Destinations/Nuwara eliaya/gegory lake.jpg",
    ],
    description:
      "Known as the “Little England” of Sri Lanka, Nuwara Eliya is a picturesque hill station surrounded by rolling tea-covered hills, misty mountains, and colonial charm. With its cool climate, blooming flowers, and elegant architecture, this highland town offers a refreshing escape and a glimpse into Sri Lanka’s British colonial past.",
    places: [
      {
        id: "tea-plantations",
        title: "Tea Plantations",
        image: "/images/Destinations/Nuwara eliaya/Tea.jpg",
        short: "A journey through rolling green hills of Ceylon tea.",
        details:
          "The misty hills of Nuwara Eliya are blanketed with endless tea plantations, producing some of the world’s finest Ceylon tea. Visitors can tour the estates, witness the traditional tea-making process, and taste freshly brewed tea straight from the source. The sight of neatly lined tea bushes stretching across the slopes is one of the most iconic views in Sri Lanka.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "lake-gregory",
        title: "Lake Gregory",
        image: "/images/Destinations/Nuwara eliaya/gegory lake.jpg",
        short: "Tranquility in the mis.",
        details:
          "At the heart of the town lies Gregory Lake, a serene and scenic spot perfect for boating, horse riding, or simply relaxing by the water. Surrounded by green hills and cozy cottages, the lake is especially beautiful at sunset when the sky reflects on its calm surface. It’s one of the best places in Nuwara Eliya to unwind and enjoy nature’s tranquility.",
        rating: { average: 4.5, count: 0 },
      },
      {
        id: "hakgala-botanical-garden",
        title: "Hakgala Botanical Garden",
        image: "/images/Destinations/Nuwara eliaya/Hakgala-Botanical-Garden-1920.jpg",
        short: "A floral haven surrounded by misty mountains.",
        details:
          "Just a short drive from the town center, the Hakgala Botanical Garden is a paradise of color and fragrance. Home to a stunning collection of roses, orchids, and exotic plants, it’s the second-largest botanical garden in Sri Lanka. With its peaceful pathways and mountain backdrop, Hakgala offers a delightful experience for flower and nature lovers alike.",
        rating: { average: 4.7, count: 0 },
      },
    ],
    highlights: [
      { title: "Cool Climate", desc: "Sweater-weather in tropical Sri Lanka" },
      { title: "Tea Country", desc: "Estate tours and tastings" },
      { title: "Colonial Touches", desc: "Golf club, racecourse and bungalows" },
      { title: "Gardens & Lakes", desc: "Hakgala blooms and Gregory boating" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Blooming gardens; mild temperatures" },
        { season: "Summer", months: "Jun–Aug", label: "POPULAR", reason: "Cool escape; some hill showers" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Wettest period around Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Crisp mornings and clear views" },
      ],
    },
    travelTips: [
      { title: "Warm Layers", text: "Evenings drop below 12–15°C; pack a jacket." },
      { title: "Rain Plan", text: "Carry a compact umbrella in hill country." },
      { title: "Estate Timing", text: "Tea factories often close on Sundays/holidays." },
      { title: "Road Curves", text: "Motion sickness tablets help on winding roads." },
      { title: "Early Light", text: "Best tea-field photos before 9am mist lifts." },
      { title: "National Parks", text: "Horton Plains (World’s End) is a day trip away." },
    ],
  },

  {
    id: 13,
    name: "Jaffna, Sri Lanka",
    slug: "jaffna-sri-lanka",
    region: "asia",
    short: "A northern cultural hub of temples, islands, and resilient heritage.",
    image: "/images/Destinations/Jaffna/Jaffan a.jpg",
    images: [
      "/images/Destinations/Jaffna/Narrul KOvila.jpg",
      "/images/Destinations/Jaffna/Jaffna Fort.jpg",
      "/images/Destinations/Jaffna/Casuarina Beach.jpg",
    ],
    description:
      "Located in the northernmost part of Sri Lanka, Jaffna is a city rich in history, culture, and vibrant Tamil heritage. Known for its colorful temples, colonial landmarks, and unique cuisine, Jaffna offers travelers an authentic glimpse into a region that blends tradition with scenic beauty.",
    places: [
      {
        id: "nallur-kandaswamy-temple",
        title: "Nallur Kandaswamy Kovil",
        image: "/images/Destinations/Jaffna/Narrul KOvila.jpg",
        short: "A radiant sanctuary of devotion.",
        details:
          "The Nallur Kandaswamy Kovil is one of Jaffna’s most revered Hindu temples, famous for its intricate architecture and vibrant festivals. Dedicated to Lord Murugan, the temple is a spiritual and cultural hub, drawing devotees and visitors who come to admire its towering gopurams and lively ceremonies.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "jaffna-fort",
        title: "Jaffna Fort",
        image: "/images/Destinations/Jaffna/Jaffna Fort.jpg",
        short: "History etched in coral stone.",
        details:
          "Jaffna Fort, built by the Portuguese and later expanded by the Dutch, stands as a testament to the region’s colonial past. Its massive ramparts, bastions, and historic structures offer visitors a fascinating glimpse into centuries of history, along with panoramic views of the surrounding city and coastline.",
        rating: { average: 4.5, count: 0 },
      },
      {
        id: "Casuarina Beach",
        title: "casuarina-beach",
        image: "/images/Destinations/Jaffna/Jaffna Fort.jpg",
        short: "A pristine white-sand retreat lined with casuarina trees.",
        details:
          "Casuarina Beach is a pristine stretch of white sand lined with casuarina trees, offering calm waters and a tranquil atmosphere. Ideal for swimming, sunbathing, and evening strolls, it’s one of the most beautiful beaches in the Jaffna Peninsula and a perfect place to relax after exploring the city’s cultural sites.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "Tamil Heritage", desc: "Colorful kovils and lively festivals" },
      { title: "Coastal Forts", desc: "Portuguese-Dutch ramparts and views" },
      { title: "Island Hops", desc: "Kayts, Karainagar and causeway drives" },
      { title: "Northern Cuisine", desc: "Crab curry, palmyrah sweets, dosai" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Dry northern weather" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Sunny with sea breezes" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "NE monsoon begins; heavy showers by Oct" },
        { season: "Winter", months: "Dec–Feb", label: "POPULAR", reason: "Pleasant after monsoon peaks" },
      ],
    },
    travelTips: [
      { title: "Temple Modesty", text: "Men may need to go bare-chested; follow local rules." },
      { title: "Heat Prep", text: "Midday sun can be intense—plan shade breaks." },
      { title: "Ferry/Causeway", text: "Check timings to the islands before you go." },
      { title: "Try the Crab", text: "Iconic Jaffna crab curry—ask spice level." },
      { title: "Bicycle Hire", text: "Flat terrain—easy to explore by cycle." },
      { title: "Cash Friendly", text: "Cards accepted less widely than in Colombo." },
    ],
  },

  {
    id: 14,
    name: "Dambulla, Sri Lanka",
    slug: "dambulla-sri-lanka",
    region: "asia",
    short: "A rock-temple complex filled with ancient murals and Buddha statues.",
    image: "/images/Destinations/Damulla/Damulla.jpg",
    images: [
      "/images/Destinations/Damulla/Cava.jpg",
      "/images/Destinations/Damulla/Golden temple.jpg",
      "/images/Destinations/Damulla/Ironwood Forest (Na Uyana Aranya).jpg",
    ],
    description:
      "Located in the heart of Sri Lanka’s Cultural Triangle, Dambulla is a town renowned for its rich history, ancient temples, and serene surroundings. It offers visitors a blend of spirituality, culture, and nature, making it an essential stop for travelers exploring the island’s heritage.",
    places: [
      {
        id: "dambulla-caves",
        title: "Dambulla Cave Temples",
        image: "/images/Destinations/Damulla/Cava.jpg",
        short: "Faith carved in stone.",
        details:
          "The Dambulla Cave Temple, a UNESCO World Heritage Site, is the largest and best-preserved cave temple complex in Sri Lanka. Carved into a massive rock, it houses over 150 Buddha statues, vibrant murals, and sacred spaces that have been in continuous use for over two millennia. Its intricate artistry and tranquil ambiance make it a captivating destination.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "golden-temple",
        title: "Golden Temple",
        image: "/images/Destinations/Damulla/Golden temple.jpg",
        short: "The guardian Buddha of Dambulla.",
        details:
          "Part of the cave temple complex, the Golden Temple is marked by a striking golden Buddha statue atop the rock. A symbol of spiritual devotion and architectural splendor, it’s visible from afar and offers visitors an inspiring introduction to Dambulla’s sacred landscape.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "ironwood-forest",
        title: "Ironwood Forest (Na Uyana Aranya)",
        image: "/images/Destinations/Damulla/Ironwood Forest (Na Uyana Aranya).jpg",
        short: "A tranquil woodland sanctuary of meditation.",
        details:
          "The Ironwood Forest, also called Na Uyana Aranya, is a peaceful sanctuary filled with ancient ironwood trees, walking trails, and small Buddhist shrines. This tranquil forest provides a serene escape for nature lovers and spiritual seekers, complementing the historic and sacred sites of Dambulla.",
        rating: { average: 4.4, count: 0 },
      },
    ],
    highlights: [
      { title: "UNESCO Cave Art", desc: "Murals and statues in five main caves" },
      { title: "Golden Temple", desc: "Hilltop Buddha and views" },
      { title: "Nature Breaks", desc: "Ironwood forest and quiet trails" },
      { title: "Triangle Hub", desc: "Gateway to Sigiriya & Minneriya" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Warm & mostly dry" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Dry-zone clarity; easy day trips" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Storms likely Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Cooler mornings; best for hiking to caves" },
      ],
    },
    travelTips: [
      { title: "Temple Dress", text: "Cover shoulders/knees; remove shoes at cave entrances." },
      { title: "Climb Timing", text: "Start early to avoid heat on the steps." },
      { title: "Ticket Office", text: "Located at base; keep ticket during ascent." },
      { title: "No Flash", text: "Avoid flash to protect murals." },
      { title: "Wildlife Aware", text: "Monkeys near entrances—keep food sealed." },
      { title: "Link Sigiriya", text: "Combine with Sigiriya/Pidurangala in a day." },
    ],
  },

  {
    id: 15,
    name: "Sinharaja, Sri Lanka",
    slug: "sinharaja-sri-lanka",
    region: "asia",
    short: "Sri Lanka’s last primary rainforest — a living ark of biodiversity.",
    image: "/images/Destinations/Sinharaja/Sinharaja.jpg",
    images: [
      "/images/Destinations/Sinharaja/Sinharaja Rainforest Trekking.jpg",
      "/images/Destinations/Sinharaja/kuda.jpg",
      "/images/Destinations/Sinharaja/Bird.jpg",
    ],
    description:
      "Sinharaja, a UNESCO World Heritage Site, is Sri Lanka’s last remaining tropical rainforest and a haven for biodiversity. With its dense canopy, rushing streams, and endemic wildlife, Sinharaja offers nature lovers and adventure seekers an immersive experience in one of the island’s most pristine ecosystems.",
    places: [
      {
        id: "rainforest-trek",
        title: "Rainforest Trek",
        image: "/images/Destinations/Sinharaja/Sinharaja Rainforest Trekking.jpg",
        short: "A walk through living heritage.",
        details:
          "Sinharaja Rainforest Trekking takes visitors through lush green trails, waterfalls, and hidden streams. Guided hikes reveal the forest’s unique flora and fauna, making it a perfect adventure for eco-tourists, wildlife enthusiasts, and anyone seeking an unforgettable jungle experience.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "kudawa-entrance-exploration",
        title: "Kudawa Entrance Exploration",
        image: "/images/Destinations/Sinharaja/kuda.jpg",
        short: "Nature’s hidden gems.",
        details:
          "The Kudawa Entrance is one of the main gateways into Sinharaja Rainforest and serves as a starting point for treks and guided tours. Visitors can explore forest trails, visit eco-centers, and gain insight into conservation efforts while preparing for deeper excursions into this magnificent rainforest.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "biodiversity-trails",
        title: "Biodiversity Trails (Birdwatching)",
        image: "/images/Destinations/Sinharaja/Bird.jpg",
        short: "A paradise for birdwatchers and nature lovers.",
        details:
          "The Biodiversity Trails of Sinharaja are a paradise for birdwatchers and nature photographers. Home to over 150 species of birds, including many endemic species, the forest provides rare opportunities to observe Sri Lanka’s unique wildlife in its natural habitat.",
        rating: { average: 4.8, count: 0 },
      },
    ],
    highlights: [
      { title: "Endemic Hotspot", desc: "Blue magpies, babblers, and mixed flocks" },
      { title: "Jungle Streams", desc: "Waterfalls and fern-lined creeks" },
      { title: "Canopy Chorus", desc: "Cicadas, frogs, and tropical soundscapes" },
      { title: "Research & Conservation", desc: "Guided trails and ranger stations" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Greener trails; some showers" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon peaks—very wet" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Another wet spell around Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Drier windows Jan–Feb; best birding" },
      ],
    },
    travelTips: [
      { title: "Leeches & Shoes", text: "Wear leech socks and sturdy waterproof footwear." },
      { title: "Guide Required", text: "Mandatory guides—book at official entrances." },
      { title: "Rain Gear", text: "Pack a poncho; downpours are sudden." },
      { title: "No Litter", text: "Carry out all waste; plastic is restricted." },
      { title: "Quiet Watching", text: "Move slowly to spot mixed feeding flocks." },
      { title: "Early Starts", text: "Best wildlife activity 6–9am." },
    ],
  },

  {
    id: 16,
    name: "Tangalle, Sri Lanka",
    slug: "tangalle",
    region: "asia",
    short: "A tranquil coastal haven of golden beaches, sea turtles, and sun-drenched serenity.",
    image: "/images/Destinations/Tangalle/Tangalle.jpg",
    images: [
      "/images/Destinations/Tangalle/Tangalle beach.jpg",
      "/images/Destinations/Tangalle/Rekawa Turtle Watching.jpg",
      "/images/Destinations/Tangalle/Mulkirigala Rock Temple.jpg",
    ],
    description:
      "Tangalle, located on Sri Lanka’s southern coast, is a serene beach town known for its golden sands, turquoise waters, and relaxed atmosphere. Less crowded than other southern beaches, it’s ideal for travelers seeking peace, natural beauty, and authentic coastal experiences.",
    places: [
      {
        id: "mulkiriyawa-rock-temple",
        title: "Mulkirigala Rock Temple",
        image: "/images/Destinations/Tangalle/Mulkirigala Rock Temple.jpg",
        short: "A sacred rock monastery with panoramic views.",
        details:
          "The Mulkirigala Rock Temple is an ancient Buddhist site perched atop a rock fortress. Visitors can explore cave temples adorned with murals and statues while enjoying panoramic views of the surrounding countryside. The climb and the temple’s rich history make it a memorable cultural stop.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "rekawa-turtle-watching",
        title: "Rekawa Turtle Watching",
        image: "/images/Destinations/Tangalle/Rekawa Turtle Watching.jpg",
        short: "A magical night with nesting sea turtles.",
        details:
          "Rekawa Turtle Watching is a unique wildlife experience where visitors can witness sea turtles nesting on the beach. Guided night tours allow for safe observation while supporting conservation efforts, offering an unforgettable encounter with these gentle marine creatures.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "Tangalle Beach",
        title: "Tangalle Beach",
        image: "/images/Destinations/Tangalle/Tangalle beach.jpg",
        short: "Golden sands and calm waves under endless blue skies.",
        details:
          "Tangalle Beach stretches along pristine shores with soft sand and calm waves. Perfect for swimming, sunbathing, and leisurely strolls, it offers a tranquil escape from bustling tourist spots. Its scenic beauty makes it a favorite for photography and sunset viewing.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "Quiet Coves", desc: "Less crowded beaches and bays" },
      { title: "Turtle Nights", desc: "Guided nesting watches at Rekawa" },
      { title: "Rock Temples", desc: "Mulkirigala’s caves and vistas" },
      { title: "Relaxed Vibe", desc: "Laid-back stays and seafood shacks" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Good seas and sunshine" },
        { season: "Summer", months: "Jun–Aug", label: "OFF-SEASON", reason: "SW monsoon brings swells and rain" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Changeable weather; rough seas" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Calmest water and best beach days" },
      ],
    },
    travelTips: [
      { title: "Night Etiquette", text: "Red light only during turtle watches; no flash." },
      { title: "Sea State", text: "Swells can be strong—swim where locals advise." },
      { title: "Temple Steps", text: "Mulkirigala has steep stairways—wear good shoes." },
      { title: "Shade & Water", text: "Beaches are open; rent umbrellas and hydrate." },
      { title: "Cash for Tuk-tuks", text: "ATMs limited outside town." },
      { title: "Day Trips", text: "Reach Hiriketiya, Matara and blowhole easily." },
    ],
  },

  {
    id: 17,
    name: "Ella, Sri Lanka",
    slug: "ella-sri-lanka",
    region: "asia",
    short: "A misty mountain village famous for hiking, waterfalls, and views.",
    image: "/images/Destinations/Ella/Ella.jpg",
    images: [
      "/images/Destinations/Ella/little-adams-peak-drone-1.jpg",
      "/images/Destinations/Ella/nine Arch.jpg",
      "/images/Destinations/Ella/Ravana.jpg",
    ],
    description:
      "Perched high in Sri Lanka’s central highlands, Ella is a breathtaking mountain village known for its cool climate, lush greenery, and stunning viewpoints. Surrounded by tea plantations, waterfalls, and mist-covered hills, it’s a haven for nature lovers and adventurers alike. Whether you’re hiking, relaxing, or simply taking in the views, Ella promises peace and unforgettable beauty.",
    places: [
      {
        id: "nine-arch-bridge",
        title: "Nine Arches Bridge",
        image: "/images/Destinations/Ella/nine Arch.jpg",
        short: "The bridge in the clouds.",
        details:
          "The iconic Nine Arches Bridge, also known as the Bridge in the Sky, is one of Sri Lanka’s most photographed landmarks. Built during the British colonial era, this stunning stone bridge stands gracefully amidst emerald tea fields and jungle. Watching a train pass across its arches is a truly magical experience that captures the charm of Ella’s highland scenery.",
        rating: { average: 4.9, count: 0 },
      },
      {
        id: "little-adams-peak",
        title: "Little Adam’s Peak",
        image: "/images/Destinations/Ella/little-adams-peak-drone-1.jpg",
        short: "A climb to serenity.",
        details:
          "Offering some of the most breathtaking views in the region, Little Adam’s Peak is a must-do hike for any visitor to Ella. The short, scenic trail winds through tea plantations and rolling hills before opening up to panoramic vistas of the surrounding valleys. The climb is easy yet incredibly rewarding — perfect for sunrise or sunset.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "ravana-falls",
        title: "Ravana Falls",
        image: "/images/Destinations/Ella/Ravana.jpg",
        short: "A legendary cascade surrounded by jungle mist.",
        details:
          "Cascading dramatically down a rocky cliff, Ravana Falls is one of the widest and most beautiful waterfalls in Sri Lanka. Named after the legendary King Ravana, the falls are surrounded by lush jungle and local folklore. It’s an ideal stop for photography, a refreshing dip, or simply to enjoy the natural beauty of Ella’s landscape.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "View Hikes", desc: "Little Adam’s Peak & Ella Rock" },
      { title: "Iconic Railway", desc: "Nine Arches Bridge photo moments" },
      { title: "Waterfalls", desc: "Ravana and Diyaluma day trips" },
      { title: "Tea Country", desc: "Estates and cafés with valley views" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Clear mornings; mild temps" },
        { season: "Summer", months: "Jun–Aug", label: "POPULAR", reason: "Cooler hill escape; occasional showers" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Heaviest rains around Oct–Nov" },
        { season: "Winter", months: "Dec–Feb", label: "RECOMMENDED", reason: "Crisp skies; great hiking weather" },
      ],
    },
    travelTips: [
      { title: "Train Timing", text: "Arrive early at Nine Arches; check train schedules." },
      { title: "Hike Start", text: "Begin hikes at sunrise to avoid fog and heat." },
      { title: "Leeches After Rain", text: "Use repellent or salt if trails are wet." },
      { title: "Layers", text: "Cool mornings/evenings—carry a light jacket." },
      { title: "Cash & ATMs", text: "Few ATMs; many cafés take cash only." },
      { title: "Taxi Shares", text: "Share tuk-tuks for waterfall day trips." },
    ],
  },

  {
    id: 18,
    name: "Udawalawe, Sri Lanka",
    slug: "udawalawe-sri-lanka",
    region: "asia",
    short: "A scenic savannah park famous for its large elephant herds, open grasslands, and peaceful wildlife safaris.",
    image: "/images/Destinations/Udawalawa/udawalwa.jpg",
    images: [
      "/images/Destinations/Udawalawa/Udawalawe Reservoir.jpg",
      "/images/Destinations/Udawalawa/safari.jpg",
      "/images/Destinations/Udawalawa/Elephant Transit Home.jpg",
    ],
    description:
      "Set against a backdrop of rolling hills and open plains, Udawalawe is one of Sri Lanka’s best destinations for wildlife and nature lovers. Famous for its large elephant population, this peaceful region offers visitors a chance to experience the raw beauty of the island’s wilderness. It’s the perfect spot for those who want an authentic safari without the crowds.",
    places: [
      {
        id: "udawalawe-national-park",
        title: "Udawalawe National Park Safari",
        image: "/images/Destinations/Udawalawa/safari.jpg",
        short: "A sanctuary of giants.",
        details:
          "A Safari in Udawalawe National Park promises an up-close encounter with some of Sri Lanka’s most iconic wildlife. The park is home to hundreds of elephants, along with water buffalo, crocodiles, deer, and a wide variety of bird species. Its vast grasslands and shimmering waterholes create the perfect setting for an unforgettable wildlife adventure.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "elephant-transit-home",
        title: "Elephant Transit Home",
        image: "/images/Destinations/Udawalawa/Elephant Transit Home.jpg",
        short: "Hope for orphaned calves.",
        details:
          "Located just outside the park, the Elephant Transit Home is a heartwarming conservation project dedicated to rescuing and rehabilitating orphaned baby elephants. Visitors can watch feeding times from a safe distance and learn how these young elephants are cared for before being released back into the wild. It’s an inspiring stop that highlights Sri Lanka’s commitment to wildlife protection.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "udawalawe-reservoir",
        title: "Udawalawe Reservoir",
        image: "/images/Destinations/Udawalawa/Udawalawe Reservoir.jpg",
        short: "A tranquil lake framed by open plains.",
        details:
          "The Udawalawe Reservoir is a peaceful and scenic landmark that adds to the region’s natural charm. Surrounded by hills and open plains, it provides water for the park’s wildlife and offers breathtaking sunset views. It’s a perfect spot for photography or simply enjoying the calm beauty of Sri Lanka’s countryside.",
        rating: { average: 4.5, count: 0 },
      },
    ],
    highlights: [
      { title: "Elephant Encounters", desc: "High density sightings year-round" },
      { title: "Open Plains", desc: "Great visibility for photography" },
      { title: "Birdlife", desc: "Raptors, bee-eaters and waterbirds" },
      { title: "Transit Home", desc: "Orphan calf feedings (scheduled)" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Drying plains concentrate wildlife" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Reliable sightings; warm days" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Showers peak Oct–Nov; tracks muddy" },
        { season: "Winter", months: "Dec–Feb", label: "POPULAR", reason: "Pleasant temps and good visibility" },
      ],
    },
    travelTips: [
      { title: "Dawn Safaris", text: "Best wildlife activity 6–9am; book jeeps early." },
      { title: "Dust & Sun", text: "Hat, scarf and UV protection essential." },
      { title: "Ethical Distance", text: "Never pressure elephants for close-ups." },
      { title: "Binoculars", text: "Handy for raptors and distant herds." },
      { title: "Transit Times", text: "Check feeding schedule at ETH before visiting." },
      { title: "Cash Tips", text: "Guides appreciate cash for excellent spotting." },
    ],
  },

  {
    id: 19,
    name: "Yala, Sri Lanka",
    slug: "yala-sri-lanka",
    region: "asia",
    short: "Sri Lanka’s premier wildlife park — home to leopards and elephants.",
    image: "/images/Destinations/Yala/yala.jpg",
    images: [
      "/images/Destinations/Yala/Yala safari.jpg",
      "/images/Destinations/Yala/Sithul pawwa.jpg",
      "/images/Destinations/Yala/Bundala Bird Sanctuary (Nearby.jpg",
    ],
    description:
      "Welcome to Yala, Sri Lanka’s premier wildlife destination where the jungle meets the Indian Ocean. This vast region is home to incredible biodiversity and some of the island’s most thrilling safari experiences. From majestic leopards to wandering elephants, Yala offers a rare opportunity to see nature at its wildest and most beautiful.",
    places: [
      {
        id: "yala-safari",
        title: "Yala National Park Safari",
        image: "/images/Destinations/Yala/Yala safari.jpg",
        short: "A brush with the wild.",
        details:
          "A Yala National Park Safari is an unforgettable adventure through Sri Lanka’s most famous wilderness. The park is renowned for having one of the highest leopard densities in the world, along with elephants, crocodiles, sloth bears, and hundreds of bird species. With its diverse landscapes — from dry forests to lagoons — every safari promises excitement and discovery.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "situlpawwa-temple",
        title: "Sithulpawwa Rock Temple",
        image: "/images/Destinations/Yala/Sithul pawwa.jpg",
        short: "Peace above the wilderness.",
        details:
          "Rising above the forest canopy, the ancient Sithulpawwa Rock Temple is a peaceful spiritual retreat with deep historical roots. Dating back over 2,000 years, this temple complex was once a center for Buddhist learning and meditation. Climbing to the summit rewards visitors with panoramic views of Yala’s wilderness and a sense of timeless serenity.",
        rating: { average: 4.6, count: 0 },
      },
      {
        id: "bundala-bird-sanctuary",
        title: "Bundala Bird Sanctuary (Nearby)",
        image: "/images/Destinations/Yala/Bundala Bird Sanctuary (Nearby.jpg",
        short: "A tranquil lake framed by open plains.",
        details:
          "Just a short drive from Yala, the Bundala Bird Sanctuary is a paradise for birdwatchers and nature lovers. This coastal wetland is home to flamingos, storks, and over 200 species of resident and migratory birds. The calm lagoons and golden dunes create a stunning contrast to Yala’s rugged terrain — making Bundala a perfect complement to your safari adventure.",
        rating: { average: 4.7, count: 0 },
      },
    ],
    highlights: [
      { title: "Leopard Country", desc: "One of Asia’s highest densities" },
      { title: "Coast & Lagoons", desc: "Mangroves, dunes and salt pans" },
      { title: "Elephants & Bears", desc: "Charismatic megafauna sightings" },
      { title: "Ancient Sites", desc: "Rock temples within the park’s buffer" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "RECOMMENDED", reason: "Dry season—best big-cat visibility" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Good sightings; warm and dusty" },
        { season: "Autumn", months: "Sep–Nov", label: "OFF-SEASON", reason: "Short closure/early rains possible; muddy tracks" },
        { season: "Winter", months: "Dec–Feb", label: "POPULAR", reason: "Pleasant weather; still strong wildlife" },
      ],
    },
    travelTips: [
      { title: "Book Early", text: "Secure dawn drives; sunset slots fill fast." },
      { title: "Ethical Viewing", text: "Avoid crowding leopards; follow ranger cues." },
      { title: "Dust Covers", text: "Protect cameras; carry a lens cloth." },
      { title: "Water & Snacks", text: "Long game drives with limited stops." },
      { title: "Alt Parks", text: "Consider Bundala and Lunugamvehera for variety." },
      { title: "Avoid Off-Roading", text: "It stresses wildlife and damages habitat." },
    ],
  },

  {
    id: 20,
    name: "Trincomalee, Sri Lanka",
    slug: "trincomalee-sri-lanka",
    region: "asia",
    short: "A natural harbor city with temples, beaches, and marine wonders.",
    image: "/images/Destinations/Trinco/Trinco.jpg",
    images: [
      "/images/Destinations/Trinco/Pigeon Island National Park.jpg",
      "/images/Destinations/Trinco/Nilaweli.jpg",
      "/images/Destinations/Trinco/Koneswaram.jpg",
    ],
    description:
      "Nestled on Sri Lanka’s northeastern coast, Trincomalee is a stunning harbor city known for its pristine beaches, spiritual landmarks, and vibrant marine life. With a perfect mix of history, culture, and natural beauty, Trincomalee is a top destination for travelers seeking both adventure and relaxation.",
    places: [
      {
        id: "koneswaram-temple",
        title: "Koneswaram Temple",
        image: "/images/Destinations/Trinco/Koneswaram.jpg",
        short: "The temple in the sky.",
        details:
          "Perched atop Swami Rock overlooking the turquoise waters of the Indian Ocean, Koneswaram Temple is a sacred Hindu site with breathtaking views. Known as the “Temple of a Thousand Pillars,” it’s an architectural and spiritual marvel, drawing pilgrims and visitors alike. The temple’s dramatic cliffside setting makes it a must-see landmark in Trincomalee.",
        rating: { average: 4.8, count: 0 },
      },
      {
        id: "nilaveli-beach",
        title: "Nilaveli Beach",
        image: "/images/Destinations/Trinco/Nilaweli.jpg",
        short: "Pristine serenity by the bay.",
        details:
          "Nilaveli Beach is a serene stretch of golden sand, perfect for swimming, sunbathing, or simply enjoying the coastal scenery. Its calm waters and gentle waves make it ideal for families and travelers seeking a peaceful beach escape. Snorkeling and water sports here offer an opportunity to explore the rich marine life of the region.",
        rating: { average: 4.7, count: 0 },
      },
      {
        id: "pigeon-island-national-park",
        title: "Pigeon Island National Park",
        image: "/images/Destinations/Trinco/Pigeon Island National Park.jpg",
        short: "A coral paradise for snorkelers and divers.",
        details:
          "Just off the coast, Pigeon Island National Park is a marine sanctuary famous for coral reefs, tropical fish, and sea turtles. Snorkelers and divers can explore vibrant underwater landscapes, while nature enthusiasts can enjoy birdwatching and coastal walks. The island is a true gem for anyone looking to connect with Trincomalee’s natural beauty.",
        rating: { average: 4.6, count: 0 },
      },
    ],
    highlights: [
      { title: "East-Coast Beaches", desc: "Nilaveli & Uppuveli’s calm blue bays" },
      { title: "Clifftop Temples", desc: "Koneswaram above Swami Rock" },
      { title: "Marine Parks", desc: "Pigeon Island coral and turtles" },
      { title: "Natural Harbour", desc: "One of the world’s great deep harbours" },
    ],
    bestTime: {
      cards: [
        { season: "Spring", months: "Mar–May", label: "POPULAR", reason: "Improving seas; driest by April–May" },
        { season: "Summer", months: "Jun–Aug", label: "RECOMMENDED", reason: "Peak season with calm waters" },
        { season: "Autumn", months: "Sep–Nov", label: "POPULAR", reason: "Good through Sept; showers start by Oct" },
        { season: "Winter", months: "Dec–Feb", label: "OFF-SEASON", reason: "NE monsoon brings wind and rain" },
      ],
    },
    travelTips: [
      { title: "Snorkel Early", text: "Clearer water and calmer winds before noon." },
      { title: "Reef Rules", text: "Do not touch coral; use reef-safe sunscreen." },
      { title: "Temple Hours", text: "Koneswaram is busiest on weekends and Poya days." },
      { title: "Boat Permits", text: "Use licensed boats for Pigeon Island." },
      { title: "Season Switch", text: "Best May–Sep; sea gets rough in NE monsoon." },
      { title: "Day Trips", text: "Hot springs, Fort Frederick, and marble beach nearby." },
    ],
  },
];
