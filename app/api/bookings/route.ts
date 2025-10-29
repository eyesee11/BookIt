import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import Booking from "@/models/Booking";
import jwt from "jsonwebtoken";

// Helper to verify JWT token
function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback_secret_key"
    ) as { userId: string; email: string };
    return decoded;
  } catch (error) {
    return null;
  }
}

// Create a new booking
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      experienceId,
      experienceTitle,
      fullName,
      email,
      date,
      time,
      quantity,
      price,
      total,
    } = await request.json();

    // Validate input
    if (
      !experienceId ||
      !experienceTitle ||
      !fullName ||
      !email ||
      !date ||
      !time ||
      !quantity ||
      !price ||
      !total
    ) {
      return NextResponse.json(
        { error: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Generate booking reference
    const bookingReference = `BK${Date.now()}`;

    // Create booking
    const booking = await Booking.create({
      userId: user.userId,
      experienceId,
      experienceTitle,
      fullName,
      email,
      date,
      time,
      quantity,
      price,
      total,
      status: "confirmed",
      bookingReference,
    });

    return NextResponse.json(
      {
        success: true,
        booking: {
          id: booking._id,
          bookingReference: booking.bookingReference,
          experienceTitle: booking.experienceTitle,
          date: booking.date,
          time: booking.time,
          quantity: booking.quantity,
          total: booking.total,
          status: booking.status,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking creation error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// Get user's bookings
export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Connect to database
    await connectDB();

    // Get user's bookings
    const bookings = await Booking.find({ userId: user.userId }).sort({
      createdAt: -1,
    });

    return NextResponse.json(
      {
        success: true,
        bookings: bookings.map((booking) => ({
          id: booking._id,
          bookingReference: booking.bookingReference,
          experienceTitle: booking.experienceTitle,
          date: booking.date,
          time: booking.time,
          quantity: booking.quantity,
          total: booking.total,
          status: booking.status,
          createdAt: booking.createdAt,
        })),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Get bookings error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
