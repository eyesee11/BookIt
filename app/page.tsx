"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { experiences } from "./data/experiences";
import Header from "@/components/HeaderWithAuth";

interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export default function Home() {
  const [experienceList, setExperienceList] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // In production, this would fetch from backend API
    setTimeout(() => {
      setExperienceList(experiences);
      setLoading(false);
    }, 500);
  }, []);

  const filteredExperiences = experienceList.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Experiences Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-40 rounded-xl mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredExperiences.map((experience) => (
              <Link
                key={experience.id}
                href={`/experience/${experience.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-1.5">
                      <h3 className="text-base font-bold text-gray-900">
                        {experience.title}
                      </h3>
                      <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-600 whitespace-nowrap ml-2">
                        {experience.location}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {experience.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">From </span>
                        <span className="text-base font-bold text-gray-900">
                          ₹{experience.price}
                        </span>
                      </div>
                      <button className="bg-yellow-400 text-black text-xs px-3 py-1.5 rounded-lg font-semibold hover:bg-yellow-500 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredExperiences.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-base text-gray-600">
              No experiences found matching your search.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
