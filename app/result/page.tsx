"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/HeaderWithAuth";

function ResultContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const bookingId = searchParams.get("booking");

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header showSearch={false} />

      {/* Success/Failure Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        {/* Icon */}
        <div className="mb-6">
          {isSuccess ? (
            <div className="mx-auto w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
          ) : (
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {isSuccess ? "Booking Confirmed" : "Booking Failed"}
        </h1>

        {/* Booking Reference */}
        {isSuccess && bookingId && (
          <div className="mb-6">
            <p className="text-xs text-gray-600 mb-1">Ref ID:</p>
            <p className="text-xl font-mono font-bold text-gray-900">
              HUF56&SO
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">
          {isSuccess
            ? "A confirmation email has been sent to your email address."
            : "We couldn't process your booking. Please try again."}
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-block bg-gray-200 text-gray-700 px-6 py-2.5 text-sm rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
