"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { experiences } from "@/app/data/experiences";

interface ExperienceDetails {
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

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [experience, setExperience] = useState<ExperienceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find experience from shared data
    const foundExperience = experiences.find(
      (exp) => exp.id === parseInt(params.id)
    );

    if (foundExperience) {
      setExperience(foundExperience);
      setSelectedDate(foundExperience.dates[0]);
    }
    setLoading(false);
  }, [params.id]);

  const handleConfirm = () => {
    if (selectedDate && selectedTime && experience) {
      router.push(
        `/checkout/${params.id}?date=${selectedDate}&time=${selectedTime}&quantity=${quantity}`
      );
    }
  };

  const subtotal = experience ? experience.price * quantity : 0;
  const taxes = Math.round(subtotal * 0.06);
  const total = subtotal + taxes;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Experience not found
        </h2>
        <Link href="/" className="text-yellow-600 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Highway Delite Logo"
                className="h-16 w-auto"
              />
            </Link>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder=""
                className="w-80 px-3 py-1.5 text-sm bg-gray-100 rounded-lg"
              />
              <button className="bg-yellow-400 text-black px-6 py-1.5 text-sm rounded-lg font-semibold hover:bg-yellow-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 text-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Details</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {experience.title}
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              {experience.description}
            </p>

            {/* Choose Date */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Choose date
              </h3>
              <div className="flex gap-2">
                {experience.dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-3 py-1.5 text-sm rounded-lg font-medium transition ${
                      selectedDate === date
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Time */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                Choose time
              </h3>
              <div className="flex gap-2 flex-wrap">
                {experience.times.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => !slot.soldOut && setSelectedTime(slot.time)}
                    disabled={slot.soldOut}
                    className={`px-3 py-1.5 text-sm rounded-lg font-medium transition relative ${
                      slot.soldOut
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : selectedTime === slot.time
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-400"
                    }`}
                  >
                    {slot.time}
                    {!slot.soldOut && (
                      <span className="text-xs ml-1 text-red-500">
                        {slot.available} left
                      </span>
                    )}
                    {slot.soldOut && (
                      <span className="text-xs ml-1">Sold out</span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1.5">
                All times are in IST (GMT +5:30)
              </p>
            </div>

            {/* About */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">About</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {experience.about}
              </p>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-xl p-4 sticky top-20">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-600">Starts at</span>
                  <span className="text-lg font-bold text-gray-900">
                    ₹{experience.price}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-600">Quantity</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-base w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-2 mb-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium text-gray-900">
                      ₹{subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-gray-600">Taxes</span>
                    <span className="text-sm font-medium text-gray-900">
                      ₹{taxes}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      ₹{total}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleConfirm}
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-2.5 text-sm rounded-lg font-semibold transition ${
                    selectedDate && selectedTime
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
