# Highway Delite - Experience Booking Platform

A modern, full-stack web application for booking travel experiences with available time slots. Built with Next.js, React, TypeScript, and TailwindCSS, strictly adhering to the Highway Delite design specifications.

## 🚀 Features

- **Home Page**: Browse and search through curated travel experiences
- **Experience Details**: View detailed information with date and time slot selection
- **Checkout**: Complete booking with form validation and promo code support
- **Booking Confirmation**: Success/failure page with booking reference
- **Responsive Design**: Mobile-friendly interface with modern UI/UX
- **Highway Delite Branding**: Consistent yellow and black color scheme

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **HTTP Client**: Axios (ready for backend integration)

### Backend (Ready for Integration)

- API endpoints structure prepared
- Mock data currently used for demonstration
- Ready to connect with Node.js/Express or NestJS backend

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Internship_bookit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
Internship_bookit/
├── app/
│   ├── page.tsx                 # Home page with experience listing
│   ├── experience/[id]/
│   │   └── page.tsx             # Experience details and slot selection
│   ├── checkout/[id]/
│   │   └── page.tsx             # Checkout form and booking
│   ├── result/
│   │   └── page.tsx             # Booking confirmation/failure
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design Features

- **Color Scheme**: Yellow (#FDD835) primary buttons, black logo, gray backgrounds
- **Typography**: Inter font family with clean, modern styling
- **Components**: Minimalist cards with subtle shadows
- **Responsive**: Mobile-first design with proper breakpoints
- **Accessibility**: Semantic HTML and proper form validation

## 🔌 API Integration (Ready)

The application is structured to easily integrate with backend APIs:

### Expected Endpoints:

```
GET /api/experiences          # List all experiences
GET /api/experiences/:id      # Get experience details
GET /api/experiences/:id/slots # Get available slots
POST /api/bookings            # Create new booking
POST /api/promo/validate      # Validate promo code
```

### To Connect Backend:

1. Update API base URL in environment variables
2. Replace mock data in components with actual API calls
3. Add error handling and loading states

## 🎯 Features & Validation

### Form Validation

- Full name required
- Valid email format
- 10-digit phone number
- Real-time error messages

### Promo Codes

- `SAVE10` - 10% discount
- `FLAT100` - 100% discount (full waiver)
- `WELCOME15` - 15% discount

### Booking Flow

1. Browse experiences on home page (4-column grid)
2. Select experience and view details with hero image
3. Choose available date from date selector buttons
4. Choose available time slot (shows availability)
5. Select quantity using +/- buttons
6. Fill checkout form with name and email
7. Optionally apply promo code
8. Agree to terms and confirm booking
9. View confirmation with unique booking reference

## 🚀 Deployment

### Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Railway**: Connect GitHub repo and deploy
- **Render**: Add as web service
- **AWS**: Deploy to EC2 or Amplify

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Mobile Responsiveness

- Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Touch-friendly buttons and forms
- Optimized images for mobile
- Hamburger menu for navigation (if needed)

## 🎨 Color Palette

```css
Primary: #6366f1 (Indigo)
Primary Dark: #4f46e5
Primary Light: #818cf8
Secondary: #ec4899 (Pink)
Success: #10b981 (Green)
Error: #ef4444 (Red)
Warning: #f59e0b (Amber)
```

## 👤 Author

**Internship Project - Highway Delite Experience Booking Platform**

## 📄 License

This project is created for internship assignment purposes.

## 🙏 Acknowledgments

- Design based on Highway Delite specifications
- Images from Unsplash & Pexels
- Icons from Lucide React
- Built with Next.js and TailwindCSS

---

**Note**: This implementation strictly follows the Highway Delite design system with yellow branding and minimalist interface. Backend integration ready for API endpoints.
