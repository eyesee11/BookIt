import React from "react";
import Link from "next/link";
import { MapPin, Calendar, Star } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  duration: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link
      href={`/experience/${experience.id}`}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
            {experience.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
            {experience.title}
          </h4>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{experience.location}</span>
            <Calendar className="w-4 h-4 ml-4 mr-1" />
            <span className="text-sm">{experience.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-semibold text-gray-900">
                {experience.rating}
              </span>
              <span className="ml-1 text-sm text-gray-600">
                ({experience.reviews})
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold text-indigo-600">
                ₹{experience.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-600"> /person</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
