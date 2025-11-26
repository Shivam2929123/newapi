const products = [
  // 🧍‍♂️ MEN'S WEAR (1–20)
  {
    id: 1,
    title: "Men's Cotton T-Shirt",
    price: 599,
    description: "Soft cotton round neck t-shirt for men, slim fit.",
    image: "https://picsum.photos/200?random=1",
    rating: [{ rate: 4.3, count: 120 }]
  },
  {
    id: 2,
    title: "Men's Denim Jeans",
    price: 1499,
    description: "Classic blue slim-fit denim jeans for daily wear.",
    image: "https://picsum.photos/200?random=2",
    rating: [{ rate: 4.1, count: 87 }]
  },
  {
    id: 3,
    title: "Men's Formal Shirt",
    price: 999,
    description: "Cotton formal shirt ideal for office or business meetings.",
    image: "https://picsum.photos/200?random=3",
    rating: [{ rate: 4.5, count: 140 }]
  },
  {
    id: 4,
    title: "Men's Leather Jacket",
    price: 3499,
    description: "Premium brown leather jacket with zipper closure.",
    image: "https://picsum.photos/200?random=4",
    rating: [{ rate: 4.7, count: 250 }]
  },
  {
    id: 5,
    title: "Men's Running Shoes",
    price: 1999,
    description: "Lightweight breathable running shoes for men.",
    image: "https://picsum.photos/200?random=5",
    rating: [{ rate: 4.6, count: 320 }]
  },
  {
    id: 6,
    title: "Men's Hoodie",
    price: 1299,
    description: "Warm fleece hoodie with front pocket and hood.",
    image: "https://picsum.photos/200?random=6",
    rating: [{ rate: 4.2, count: 80 }]
  },
  {
    id: 7,
    title: "Men's Cargo Pants",
    price: 1699,
    description: "Comfortable cotton cargos with multiple pockets.",
    image: "https://picsum.photos/200?random=7",
    rating: [{ rate: 4.0, count: 60 }]
  },
  {
    id: 8,
    title: "Men's Polo Shirt",
    price: 799,
    description: "Classic polo t-shirt for a semi-formal look.",
    image: "https://picsum.photos/200?random=8",
    rating: [{ rate: 4.4, count: 112 }]
  },
  {
    id: 9,
    title: "Men's Track Pants",
    price: 1099,
    description: "Stretchable polyester track pants for gym or sports.",
    image: "https://picsum.photos/200?random=9",
    rating: [{ rate: 4.3, count: 90 }]
  },
  {
    id: 10,
    title: "Men's Watch",
    price: 2599,
    description: "Analog wristwatch with leather strap and waterproof design.",
    image: "https://picsum.photos/200?random=10",
    rating: [{ rate: 4.6, count: 280 }]
  },
  {
    id: 11,
    title: "Men's Sunglasses",
    price: 899,
    description: "UV-protected aviator sunglasses with metal frame.",
    image: "https://picsum.photos/200?random=11",
    rating: [{ rate: 4.1, count: 130 }]
  },
  {
    id: 12,
    title: "Men's Wallet",
    price: 699,
    description: "Genuine leather bifold wallet with multiple card slots.",
    image: "https://picsum.photos/200?random=12",
    rating: [{ rate: 4.5, count: 200 }]
  },
  {
    id: 13,
    title: "Men's Belt",
    price: 499,
    description: "Durable leather belt with metallic buckle.",
    image: "https://picsum.photos/200?random=13",
    rating: [{ rate: 4.0, count: 65 }]
  },
  {
    id: 14,
    title: "Men's Sports Cap",
    price: 399,
    description: "Adjustable cotton sports cap for outdoor activities.",
    image: "https://picsum.photos/200?random=14",
    rating: [{ rate: 4.2, count: 58 }]
  },
  {
    id: 15,
    title: "Men's Socks Pack",
    price: 299,
    description: "Pack of 3 ankle-length breathable cotton socks.",
    image: "https://picsum.photos/200?random=15",
    rating: [{ rate: 4.3, count: 100 }]
  },
  {
    id: 16,
    title: "Men's Winter Sweater",
    price: 1499,
    description: "Woolen full-sleeve sweater for cold weather.",
    image: "https://picsum.photos/200?random=16",
    rating: [{ rate: 4.5, count: 180 }]
  },
  {
    id: 17,
    title: "Men's Shorts",
    price: 799,
    description: "Casual cotton shorts with elastic waistband.",
    image: "https://picsum.photos/200?random=17",
    rating: [{ rate: 4.2, count: 95 }]
  },
  {
    id: 18,
    title: "Men's Blazer",
    price: 3999,
    description: "Formal navy blue blazer for business meetings.",
    image: "https://picsum.photos/200?random=18",
    rating: [{ rate: 4.6, count: 75 }]
  },
  {
    id: 19,
    title: "Men's Kurta",
    price: 1299,
    description: "Traditional Indian cotton kurta for festive occasions.",
    image: "https://picsum.photos/200?random=19",
    rating: [{ rate: 4.4, count: 210 }]
  },
  {
    id: 20,
    title: "Men's Sneakers",
    price: 1799,
    description: "Casual sneakers with rubber sole for everyday wear.",
    image: "https://picsum.photos/200?random=20",
    rating: [{ rate: 4.3, count: 140 }]
  },

  // 👩‍🦰 WOMEN'S WEAR (21–35)
  {
    id: 21,
    title: "Women's Summer Dress",
    price: 1299,
    description: "Floral print knee-length summer dress for women.",
    image: "https://picsum.photos/200?random=21",
    rating: [{ rate: 4.5, count: 250 }]
  },
  {
    id: 22,
    title: "Women's Handbag",
    price: 1599,
    description: "Stylish leather handbag with spacious compartments.",
    image: "https://picsum.photos/200?random=22",
    rating: [{ rate: 4.7, count: 310 }]
  },
  {
    id: 23,
    title: "Women's Sandals",
    price: 999,
    description: "Comfortable wedge sandals with soft footbed.",
    image: "https://picsum.photos/200?random=23",
    rating: [{ rate: 4.2, count: 110 }]
  },
  {
    id: 24,
    title: "Women's Saree",
    price: 2499,
    description: "Elegant silk saree with golden border for festive occasions.",
    image: "https://picsum.photos/200?random=24",
    rating: [{ rate: 4.6, count: 205 }]
  },
  {
    id: 25,
    title: "Women's Jeans",
    price: 1499,
    description: "Stretchable slim-fit jeans for casual outings.",
    image: "https://picsum.photos/200?random=25",
    rating: [{ rate: 4.3, count: 190 }]
  },
  {
    id: 26,
    title: "Women's Top",
    price: 899,
    description: "Chiffon printed top with round neck design.",
    image: "https://picsum.photos/200?random=26",
    rating: [{ rate: 4.4, count: 165 }]
  },
  {
    id: 27,
    title: "Women's Kurti",
    price: 1099,
    description: "Stylish rayon kurti with embroidery.",
    image: "https://picsum.photos/200?random=27",
    rating: [{ rate: 4.5, count: 220 }]
  },
  {
    id: 28,
    title: "Women's Leggings",
    price: 499,
    description: "Soft cotton stretchable leggings for daily wear.",
    image: "https://picsum.photos/200?random=28",
    rating: [{ rate: 4.2, count: 90 }]
  },
  {
    id: 29,
    title: "Women's Earrings",
    price: 299,
    description: "Gold-plated traditional jhumka earrings.",
    image: "https://picsum.photos/200?random=29",
    rating: [{ rate: 4.7, count: 330 }]
  },
  {
    id: 30,
    title: "Women's Watch",
    price: 1999,
    description: "Elegant analog wristwatch with rose gold strap.",
    image: "https://picsum.photos/200?random=30",
    rating: [{ rate: 4.8, count: 410 }]
  },
  {
    id: 31,
    title: "Women's Sunglasses",
    price: 899,
    description: "Stylish oversized UV-protected sunglasses.",
    image: "https://picsum.photos/200?random=31",
    rating: [{ rate: 4.4, count: 190 }]
  },
  {
    id: 32,
    title: "Women's Scarf",
    price: 499,
    description: "Lightweight printed scarf for casual and formal wear.",
    image: "https://picsum.photos/200?random=32",
    rating: [{ rate: 4.3, count: 75 }]
  },
  {
    id: 33,
    title: "Women's Jacket",
    price: 2499,
    description: "Winter jacket with fur collar and zipper closure.",
    image: "https://picsum.photos/200?random=33",
    rating: [{ rate: 4.5, count: 210 }]
  },
  {
    id: 34,
    title: "Women's Shoes",
    price: 1599,
    description: "Casual slip-on shoes for daily use.",
    image: "https://picsum.photos/200?random=34",
    rating: [{ rate: 4.1, count: 100 }]
  },
  {
    id: 35,
    title: "Women's Bracelet",
    price: 699,
    description: "Rose gold-plated bracelet with crystal design.",
    image: "https://picsum.photos/200?random=35",
    rating: [{ rate: 4.6, count: 175 }]
  },

  // 📱 ELECTRONICS (36–50)
  {
    id: 36,
    title: "Smartphone",
    price: 69999,
    description: "Latest 5G smartphone with AMOLED display and 128GB storage.",
    image: "https://picsum.photos/200?random=36",
    rating: [{ rate: 4.8, count: 650 }]
  },
  {
    id: 37,
    title: "Bluetooth Headphones",
    price: 2999,
    description: "Wireless over-ear headphones with noise cancellation.",
    image: "https://picsum.photos/200?random=37",
    rating: [{ rate: 4.5, count: 480 }]
  },
  {
    id: 38,
    title: "Smart Watch",
    price: 4999,
    description: "Fitness tracker smartwatch with heart rate monitor.",
    image: "https://picsum.photos/200?random=38",
    rating: [{ rate: 4.4, count: 390 }]
  },
  {
    id: 39,
    title: "Laptop",
    price: 79999,
    description: "14-inch laptop with Intel i7 processor and 16GB RAM.",
    image: "https://picsum.photos/200?random=39",
    rating: [{ rate: 4.7, count: 420 }]
  },
  {
    id: 40,
    title: "Wireless Mouse",
    price: 699,
    description: "Ergonomic wireless mouse with USB receiver.",
    image: "https://picsum.photos/200?random=40",
    rating: [{ rate: 4.2, count: 150 }]
  },
  {
    id: 41,
    title: "Bluetooth Speaker",
    price: 1999,
    description: "Portable speaker with deep bass and 10-hour battery life.",
    image: "https://picsum.photos/200?random=41",
    rating: [{ rate: 4.6, count: 320 }]
  },
  {
    id: 42,
    title: "Tablet",
    price: 32999,
    description: "10.5-inch Android tablet with 64GB storage and stylus.",
    image: "https://picsum.photos/200?random=42",
    rating: [{ rate: 4.5, count: 270 }]
  },
  {
    id: 43,
    title: "Power Bank",
    price: 1299,
    description: "20000mAh power bank with fast charging support.",
    image: "https://picsum.photos/200?random=43",
    rating: [{ rate: 4.4, count: 180 }]
  },
  {
    id: 44,
    title: "LED TV",
    price: 44999,
    description: "55-inch 4K Ultra HD Smart LED TV.",
    image: "https://picsum.photos/200?random=44",
    rating: [{ rate: 4.7, count: 500 }]
  },
  {
    id: 45,
    title: "Refrigerator",
    price: 54999,
    description: "Double door refrigerator with frost-free technology.",
    image: "https://picsum.photos/200?random=45",
    rating: [{ rate: 4.6, count: 350 }]
  },
  {
    id: 46,
    title: "Microwave Oven",
    price: 9999,
    description: "Convection microwave oven with 23L capacity.",
    image: "https://picsum.photos/200?random=46",
    rating: [{ rate: 4.3, count: 210 }]
  },
  {
    id: 47,
    title: "Washing Machine",
    price: 28999,
    description: "Fully automatic top-load washing machine with 7kg capacity.",
    image: "https://picsum.photos/200?random=47",
    rating: [{ rate: 4.5, count: 260 }]
  },
  {
    id: 48,
    title: "Air Conditioner",
    price: 36999,
    description: "1.5 ton split AC with inverter compressor.",
    image: "https://picsum.photos/200?random=48",
    rating: [{ rate: 4.6, count: 300 }]
  },
  {
    id: 49,
    title: "Electric Kettle",
    price: 999,
    description: "1.8L stainless steel electric kettle with auto shut-off.",
    image: "https://picsum.photos/200?random=49",
    rating: [{ rate: 4.4, count: 130 }]
  },
  {
    id: 50,
    title: "Smart Home Speaker",
    price: 4999,
    description: "Voice assistant smart speaker with Bluetooth connectivity.",
    image: "https://picsum.photos/200?random=50",
    rating: [{ rate: 4.5, count: 210 }]
  }
];

module.exports = products;
