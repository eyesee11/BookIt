# 🚀 Quick Start Guide - BookIt

Get your BookIt application up and running in 5 minutes!

## ✅ Prerequisites

Before you begin, ensure you have:

- Node.js 18.0 or higher installed
- npm or yarn package manager
- A code editor (VS Code recommended)
- Git installed (for version control)

## 📥 Installation Steps

### 1. Navigate to Project Directory

```bash
cd "C:\Users\91819\Desktop\Tor Browser\Internship_bookit"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:

- Next.js
- React
- TypeScript
- TailwindCSS
- Lucide Icons
- Axios

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to: [http://localhost:3000](http://localhost:3000)

## 🎉 You're All Set!

Your application should now be running. You'll see:

- **Home Page**: Browse 6 pre-loaded travel experiences
- **Search**: Search experiences by name or location
- **Click any card**: View experience details
- **Select a slot**: Choose available time slots
- **Checkout**: Fill form and apply promo codes
- **Confirmation**: See booking success message

## 🧪 Test the Full Flow

1. **Browse Experiences**

   - View the home page with 6 experiences
   - Try the search bar

2. **Select an Experience**

   - Click on "Scuba Diving Adventure in Maldives"
   - Scroll through details and highlights

3. **Choose a Slot**

   - Select an available slot (green border when selected)
   - Click "Proceed to Checkout"

4. **Complete Booking**

   - Fill in your details:
     - Full Name: Ayush Chauhan
     - Email: ayushexample.com
     - Phone: 9876543210
   - Try a promo code: `SAVE10` or `FLAT100`
   - Click "Confirm Booking"

5. **View Confirmation**
   - See the success page with booking reference
   - Note the booking ID for reference

## 🎨 Available Promo Codes

Test these promo codes during checkout:

- **SAVE10**: Get 10% discount
- **FLAT100**: Get 100% discount (full waiver)
- **WELCOME15**: Get 15% discount

## 📱 Test Responsive Design

Open DevTools (F12) and test different screen sizes:

- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1280px+ width

## 🛠️ Available Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📂 Project Structure

```
Internship_bookit/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── experience/[id]/     # Experience details
│   ├── checkout/[id]/       # Checkout page
│   ├── result/              # Confirmation page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable components
├── lib/                     # Utilities and constants
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## 🌈 Color Scheme

The app uses a modern gradient theme:

- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#a855f7)
- **Accent**: Pink (#ec4899)
- **Success**: Green (#10b981)
- **Background**: Light blue gradient

## 🔄 Making Changes

### Add a New Experience

Edit `app/page.tsx` and add to the `mockExperiences` array:

```typescript
{
  id: 7,
  title: "Your New Experience",
  location: "Location",
  price: 9999,
  rating: 4.5,
  reviews: 100,
  image: "https://images.unsplash.com/photo-...",
  category: "Adventure",
  duration: "2 hours"
}
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#your-color",
  },
}
```

### Modify Promo Codes

Edit `lib/constants.ts`:

```typescript
export const PROMO_CODES = {
  NEWCODE: { discount: 20, type: "percentage" },
};
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart
npm run dev
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors

```bash
# Type check
npx tsc --noEmit
```

### Build Fails

```bash
# Clear build cache
rm -rf .next
npm run build
```

## 📚 Next Steps

1. **Backend Integration**

   - Read `BACKEND_GUIDE.md`
   - Set up database
   - Create API endpoints
   - Update API calls in components

2. **Deployment**

   - Read `DEPLOYMENT.md`
   - Choose a platform (Vercel recommended)
   - Deploy your application
   - Share your live URL

3. **Enhancements**
   - Add user authentication
   - Implement payment gateway
   - Add email notifications
   - Create admin panel

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for hosting instructions
- See `BACKEND_GUIDE.md` for API development
- Open an issue on GitHub

## 🎊 Enjoy Building!

Your BookIt application is ready to go! Start customizing and making it your own.

---

**Happy Coding! 🚀**
