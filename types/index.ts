// Type definitions for the application

export interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  duration: string;
  description?: string;
  highlights?: string[];
  included?: string[];
}

export interface Slot {
  id: number;
  date: string;
  time: string;
  available: number;
  price: number;
}

export interface BookingDetails {
  experienceTitle: string;
  date: string;
  time: string;
  price: number;
  slotId: number;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  participants: string;
}

export interface PromoCode {
  discount: number;
  type: "percentage" | "fixed";
}

export interface BookingRequest {
  experienceId: string;
  slotId: number;
  fullName: string;
  email: string;
  phone: string;
  participants: number;
  promoCode?: string;
  totalAmount: number;
}

export interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message: string;
  bookingDetails?: {
    experienceTitle: string;
    date: string;
    time: string;
    participants: number;
    totalAmount: number;
  };
}
