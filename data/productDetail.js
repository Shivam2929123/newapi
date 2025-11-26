const productsBatch1 = [
  {
    id: 1,
    title: "Wireless Bluetooth Earbuds",
    price: 1499,
    description: "Lightweight earbuds with crystal clear sound, deep bass, and long battery life.",
    brand: "SoundMax",
    category: "Audio",
    stock: 120,
    images: [
      "https://picsum.photos/400?random=1",
      "https://picsum.photos/400?random=101"
    ],
    highlights: [
      "20 hours battery backup",
      "Touch controls",
      "Fast charging support"
    ],
    specifications: [
      { key: "Bluetooth Version", value: "5.1" },
      { key: "Water Resistance", value: "IPX5" },
      { key: "Charging Port", value: "USB Type-C" }
    ],
    rating: { rate: 4.2, count: 120 }
  },

  {
    id: 2,
    title: "Gaming RGB Mechanical Keyboard",
    price: 2499,
    description: "RGB backlit mechanical keyboard with anti-ghosting and blue switches.",
    brand: "HyperTech",
    category: "Gaming",
    stock: 75,
    images: [
      "https://picsum.photos/400?random=2",
      "https://picsum.photos/400?random=102"
    ],
    highlights: [
      "Blue clicky switches",
      "Customizable RGB",
      "Metal top plate"
    ],
    specifications: [
      { key: "Switch Type", value: "Mechanical – Blue Switches" },
      { key: "Connectivity", value: "Wired (USB)" }
    ],
    rating: { rate: 4.6, count: 340 }
  },

  {
    id: 3,
    title: "Smart Fitness Watch",
    price: 2999,
    description: "Smartwatch with SpO2, heart rate, activity tracking, and AMOLED display.",
    brand: "FitPulse",
    category: "Wearables",
    stock: 90,
    images: [
      "https://picsum.photos/400?random=3",
      "https://picsum.photos/400?random=103"
    ],
    highlights: [
      "AMOLED display",
      "Heart rate & SpO2 monitoring",
      "100+ sports modes"
    ],
    specifications: [
      { key: "Display", value: "1.4 inch AMOLED" },
      { key: "Battery Backup", value: "10 days" }
    ],
    rating: { rate: 4.4, count: 285 }
  },

  {
    id: 4,
    title: "Noise Cancelling Headphones",
    price: 3999,
    description: "Over-ear wireless headphones with active noise cancellation.",
    brand: "AudioPro",
    category: "Audio",
    stock: 65,
    images: [
      "https://picsum.photos/400?random=4",
      "https://picsum.photos/400?random=104"
    ],
    highlights: [
      "Active noise cancellation",
      "30 hours battery",
      "Comfortable ear cushions"
    ],
    specifications: [
      { key: "Battery", value: "30 hours" },
      { key: "Charging", value: "USB Type-C" }
    ],
    rating: { rate: 4.5, count: 410 }
  },

  {
    id: 5,
    title: "4K Action Camera",
    price: 4999,
    description: "Waterproof 4K action camera with multiple shooting modes.",
    brand: "CamGo",
    category: "Cameras",
    stock: 45,
    images: [
      "https://picsum.photos/400?random=5",
      "https://picsum.photos/400?random=105"
    ],
    highlights: [
      "4K 30fps video",
      "Waterproof case included",
      "WiFi control"
    ],
    specifications: [
      { key: "Video Resolution", value: "4K 30fps" },
      { key: "Waterproof Depth", value: "30 meters" }
    ],
    rating: { rate: 4.3, count: 250 }
  },

  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    price: 1299,
    description: "Compact speaker with deep bass and 12-hour battery life.",
    brand: "BassBoom",
    category: "Audio",
    stock: 150,
    images: [
      "https://picsum.photos/400?random=6",
      "https://picsum.photos/400?random=106"
    ],
    highlights: ["12-hour playback", "Heavy bass", "IPX6 waterproof"],
    specifications: [
      { key: "Battery", value: "1800 mAh" },
      { key: "Output Power", value: "10W" }
    ],
    rating: { rate: 4.1, count: 300 }
  },

  {
    id: 7,
    title: "Men's Cotton T-Shirt",
    price: 599,
    description: "Soft cotton round neck T-shirt for daily comfort.",
    brand: "UrbanWear",
    category: "Men Clothing",
    stock: 200,
    images: [
      "https://picsum.photos/400?random=7",
      "https://picsum.photos/400?random=107"
    ],
    highlights: ["100% cotton", "Slim fit", "Breathable fabric"],
    specifications: [
      { key: "Material", value: "Cotton" },
      { key: "Fit", value: "Slim Fit" }
    ],
    rating: { rate: 4.3, count: 120 }
  },

  {
    id: 8,
    title: "Men's Slim Fit Jeans",
    price: 1499,
    description: "Classic blue denim jeans with stretchable fabric.",
    brand: "DenimPro",
    category: "Men Clothing",
    stock: 180,
    images: [
      "https://picsum.photos/400?random=8",
      "https://picsum.photos/400?random=108"
    ],
    highlights: ["Stretchable denim", "Modern fit", "Durable stitching"],
    specifications: [
      { key: "Material", value: "Denim" },
      { key: "Fit", value: "Slim Fit" }
    ],
    rating: { rate: 4.1, count: 87 }
  },

  {
    id: 9,
    title: "Men's Running Shoes",
    price: 1999,
    description: "Lightweight breathable running shoes for sports and daily use.",
    brand: "RunnerX",
    category: "Footwear",
    stock: 110,
    images: [
      "https://picsum.photos/400?random=9",
      "https://picsum.photos/400?random=109"
    ],
    highlights: ["Breathable mesh", "Lightweight sole", "Anti-slip grip"],
    specifications: [
      { key: "Material", value: "Mesh + Rubber" },
      { key: "Closure Type", value: "Lace-up" }
    ],
    rating: { rate: 4.6, count: 320 }
  },

  {
    id: 10,
    title: "Men's Leather Wallet",
    price: 699,
    description: "Genuine leather wallet with multiple card slots.",
    brand: "CraftLeather",
    category: "Accessories",
    stock: 95,
    images: [
      "https://picsum.photos/400?random=10",
      "https://picsum.photos/400?random=110"
    ],
    highlights: ["Genuine leather", "6 card slots", "Slim design"],
    specifications: [
      { key: "Material", value: "Leather" },
      { key: "Type", value: "Bifold" }
    ],
    rating: { rate: 4.5, count: 200 }
  }
];

module.exports = productsBatch1;
