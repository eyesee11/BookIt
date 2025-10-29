// API Configuration
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Mock Data - Replace with actual API calls
export const MOCK_EXPERIENCES = [
  {
    id: 1,
    title: "Scuba Diving Adventure in Maldives",
    location: "Maldives",
    price: 12999,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    category: "Water Sports",
    duration: "3 hours",
    description:
      "Dive into the crystal-clear waters of the Maldives and explore vibrant coral reefs teeming with marine life.",
    highlights: [
      "Explore pristine coral reefs",
      "Professional PADI-certified instructors",
      "All equipment provided",
      "Small group sizes (max 6 people)",
      "Underwater photography included",
      "Hotel pickup and drop-off",
    ],
    included: [
      "Professional diving equipment",
      "Safety briefing and training",
      "Experienced dive master",
      "Refreshments and water",
      "Digital photos of your dive",
      "Insurance coverage",
    ],
  },
  {
    id: 2,
    title: "Hot Air Balloon Ride Over Cappadocia",
    location: "Turkey",
    price: 15999,
    rating: 4.9,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800",
    category: "Adventure",
    duration: "2 hours",
  },
  {
    id: 3,
    title: "Northern Lights Tour in Iceland",
    location: "Iceland",
    price: 18999,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800",
    category: "Nature",
    duration: "5 hours",
  },
  {
    id: 4,
    title: "Safari Experience in Serengeti",
    location: "Tanzania",
    price: 25999,
    rating: 4.9,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    category: "Wildlife",
    duration: "Full Day",
  },
  {
    id: 5,
    title: "Bungee Jumping in New Zealand",
    location: "New Zealand",
    price: 9999,
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800",
    category: "Adventure",
    duration: "1 hour",
  },
  {
    id: 6,
    title: "Cultural Food Tour in Bangkok",
    location: "Thailand",
    price: 4999,
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800",
    category: "Food & Culture",
    duration: "4 hours",
  },
];

export const PROMO_CODES = {
  SAVE10: { discount: 10, type: "percentage" },
  FLAT100: { discount: 100, type: "percentage" },
  WELCOME15: { discount: 15, type: "percentage" },
};
