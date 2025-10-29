# MongoDB Atlas Setup Guide

## 📋 Prerequisites

- MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)

## 🚀 Setup Steps

### 1. Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account or log in
3. Create a new organization (if needed)
4. Create a new project named "BookIt" or similar

### 2. Create a Cluster

1. Click "Build a Database"
2. Choose **FREE** tier (M0 Sandbox)
3. Select your preferred cloud provider and region
4. Name your cluster (e.g., "bookit-cluster")
5. Click "Create Cluster"

### 3. Configure Database Access

1. Go to **Database Access** in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication method
4. Create a username (e.g., `bookitadmin`)
5. Generate a strong password (save it!)
6. Set user privileges to "Read and write to any database"
7. Click "Add User"

### 4. Configure Network Access

1. Go to **Network Access** in the left sidebar
2. Click "Add IP Address"
3. For development, click "Allow Access from Anywhere" (0.0.0.0/0)
   - ⚠️ For production, restrict to specific IPs
4. Click "Confirm"

### 5. Get Connection String

1. Go to **Database** in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "5.5 or later"
5. Copy the connection string (it looks like):
   ```
   mongodb+srv://<username>:<password>@cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Configure Environment Variables

1. Open your `.env.local` file
2. Replace the placeholders:

   ```env
   MONGODB_URI=mongodb+srv://bookitadmin:YOUR_PASSWORD@cluster.xxxxx.mongodb.net/bookit?retryWrites=true&w=majority
   JWT_SECRET=your_strong_random_secret_key_here
   ```

   **Important:**

   - Replace `<username>` with your database username
   - Replace `<password>` with your database password
   - Replace `cluster.xxxxx.mongodb.net` with your cluster address
   - Add `/bookit` before the `?` to specify the database name
   - Generate a strong JWT_SECRET (you can use: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

### 7. Test Connection

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Try signing up at http://localhost:3000/signup
3. Check MongoDB Atlas dashboard to see if data appears in the database

## 📊 Database Structure

### Collections Created:

1. **users** - Stores user accounts

   - name, email, password (hashed), timestamps

2. **bookings** - Stores booking records
   - userId, experienceId, experienceTitle, fullName, email, date, time, quantity, price, total, status, bookingReference, timestamps

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use strong passwords** for database users
3. **Restrict IP addresses** in production
4. **Rotate JWT secrets** regularly
5. **Enable MongoDB Atlas monitoring** and alerts

## 🔧 API Endpoints Created

### Authentication:

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Bookings:

- `POST /api/bookings` - Create new booking (requires auth)
- `GET /api/bookings` - Get user's bookings (requires auth)

## 📝 Next Steps

To integrate with your frontend:

1. Update login/signup pages to call the API endpoints
2. Store JWT token in localStorage
3. Include token in Authorization header for protected routes
4. Update checkout page to create bookings via API

## 🆘 Troubleshooting

**Connection Timeout:**

- Check if your IP is whitelisted in Network Access
- Verify connection string format

**Authentication Failed:**

- Verify username and password in connection string
- Check if database user has correct permissions

**Database Not Found:**

- Ensure database name is included in connection string: `/bookit?`

## 📚 Resources

- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
