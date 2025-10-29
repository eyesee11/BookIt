export interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
  about: string;
  dates: string[];
  times: { time: string; available: number; soldOut?: boolean }[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Kayaking",
    location: "Udupi",
    price: 999,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    about:
      "Experience the thrill of kayaking in pristine waters of Udupi. Our expert guides ensure a safe and memorable adventure. All safety equipment including helmets and life jackets are provided. Minimum age 10 years. No prior experience required.",
    dates: ["Oct 22", "Oct 23", "Oct 24", "Oct 25", "Oct 26"],
    times: [
      { time: "07:00 am", available: 4 },
      { time: "9:00 am", available: 2 },
      { time: "11:00 am", available: 5 },
      { time: "1:00 pm", available: 0, soldOut: true },
    ],
  },
  {
    id: 2,
    title: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    description:
      "Watch the sunrise from 1478m altitude with stunning views of the valley.",
    about:
      "Start your day with a breathtaking sunrise at Nandi Hills. Located just 60km from Bangalore, this hill station offers panoramic views and fresh mountain air. Includes transport, guide, and light refreshments. Early morning pickup at 4:30 AM.",
    dates: ["Oct 29", "Oct 30", "Oct 31", "Nov 1", "Nov 2"],
    times: [
      { time: "04:30 am", available: 8 },
      { time: "05:00 am", available: 6 },
      { time: "05:30 am", available: 3 },
      { time: "06:00 am", available: 0, soldOut: true },
    ],
  },
  {
    id: 3,
    title: "Coffee Trail",
    location: "Coorg",
    price: 1299,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
    description:
      "Walk through coffee plantations and learn about coffee processing.",
    about:
      "Explore the aromatic coffee estates of Coorg. Walk through lush plantations, learn about coffee cultivation, processing, and brewing. Includes plantation tour, coffee tasting session, and traditional Coorgi lunch. Suitable for all ages.",
    dates: ["Oct 28", "Oct 29", "Oct 30", "Oct 31", "Nov 1"],
    times: [
      { time: "09:00 am", available: 10 },
      { time: "11:00 am", available: 7 },
      { time: "2:00 pm", available: 5 },
      { time: "4:00 pm", available: 2 },
    ],
  },
  {
    id: 4,
    title: "Beach Kayaking",
    location: "Udupi, Karnataka",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200",
    description: "Paddle along the scenic coastline with crystal clear waters.",
    about:
      "Experience coastal kayaking at its finest along Udupi's beautiful beaches. Navigate through calm waters while enjoying views of the Arabian Sea. Perfect for beginners and experienced paddlers. All equipment and safety gear provided by certified instructors.",
    dates: ["Oct 27", "Oct 28", "Oct 29", "Oct 30", "Oct 31"],
    times: [
      { time: "06:00 am", available: 6 },
      { time: "08:00 am", available: 4 },
      { time: "10:00 am", available: 8 },
      { time: "4:00 pm", available: 5 },
    ],
  },
  {
    id: 5,
    title: "Nandi Hills Trek",
    location: "Bangalore",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1200",
    description:
      "Trek through scenic trails with expert guides and refreshments.",
    about:
      "Embark on a moderate trek to Nandi Hills with experienced guides. The trail takes you through diverse flora and fauna with stunning viewpoints along the way. Includes transport from Bangalore, guided trek, breakfast at the summit, and return transport.",
    dates: ["Oct 26", "Oct 27", "Oct 28", "Oct 29", "Oct 30"],
    times: [
      { time: "05:00 am", available: 12 },
      { time: "06:00 am", available: 9 },
      { time: "07:00 am", available: 0, soldOut: true },
    ],
  },
  {
    id: 6,
    title: "Boat Cruise",
    location: "Sunderban",
    price: 999,
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200",
    description:
      "Explore the mangrove forests and spot wildlife on a guided cruise.",
    about:
      "Discover the UNESCO World Heritage Site of Sunderbans through a guided boat cruise. Navigate through dense mangrove forests and spot various wildlife including birds, crocodiles, and if lucky, the Royal Bengal Tiger. Includes meals, guide, and permits.",
    dates: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5"],
    times: [
      { time: "08:00 am", available: 15 },
      { time: "10:00 am", available: 12 },
      { time: "1:00 pm", available: 8 },
      { time: "3:00 pm", available: 6 },
    ],
  },
  {
    id: 7,
    title: "Bungee Jumping",
    location: "Manali",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200",
    description:
      "Take the leap from 150 feet with professional safety measures.",
    about:
      "Experience the ultimate adrenaline rush with bungee jumping in Manali. Jump from a height of 150 feet in a scenic valley setting. All equipment is internationally certified and our team consists of trained professionals. Medical screening required. Minimum age 18 years.",
    dates: ["Oct 30", "Oct 31", "Nov 1", "Nov 2", "Nov 3"],
    times: [
      { time: "10:00 am", available: 5 },
      { time: "12:00 pm", available: 3 },
      { time: "2:00 pm", available: 4 },
      { time: "4:00 pm", available: 0, soldOut: true },
    ],
  },
  {
    id: 8,
    title: "Coffee Estate Stay",
    location: "Coorg",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200",
    description:
      "Overnight stay at a traditional coffee estate with full board.",
    about:
      "Immerse yourself in the coffee culture of Coorg with an overnight stay at a traditional estate. Enjoy guided plantation walks, coffee processing demonstrations, bird watching, and authentic Coorgi cuisine. Stay in comfortable cottages surrounded by nature. Includes all meals and activities.",
    dates: ["Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9"],
    times: [
      { time: "2:00 pm Check-in", available: 8 },
      { time: "3:00 pm Check-in", available: 6 },
      { time: "4:00 pm Check-in", available: 4 },
    ],
  },
];
