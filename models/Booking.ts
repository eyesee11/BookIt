import mongoose, { Schema, Model } from "mongoose";

export interface IBooking {
  _id?: string;
  userId: string;
  experienceId: number;
  experienceTitle: string;
  fullName: string;
  email: string;
  date: string;
  time: string;
  quantity: number;
  price: number;
  total: number;
  status: "pending" | "confirmed" | "cancelled";
  bookingReference: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    userId: {
      type: String,
      required: true,
    },
    experienceId: {
      type: Number,
      required: true,
    },
    experienceTitle: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
