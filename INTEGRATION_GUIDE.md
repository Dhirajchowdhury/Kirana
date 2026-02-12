# Backend Integration Guide

## Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Step 2: Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB (if not installed)
# Windows: Download from https://www.mongodb.com/try/download/community
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB
# Windows: Start MongoDB service from Services
# Mac/Linux: mongod
```

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster (free tier available)
4. Click "Connect" → "Connect your application"
5. Copy connection string
6. Update `MONGO_URI` in `server/.env`

### Step 3: Start the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Step 4: Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## ✅ Verification Checklist

- [ ] MongoDB is running (check server console for "MongoDB Connected")
- [ ] Backend server is running on port 5000
- [ ] Frontend is running on port 5173
- [ ] No CORS errors in browser console
- [ ] Can access landing page at http://localhost:5173

## 🔧 Configuration Details

### Environment Variables

The `.env` files have been created with default values. Here's what you need to configure:

#### Required (for basic functionality):
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT tokens (already set with default)
- `JWT_REFRESH_SECRET` - Secret for refresh tokens (already set with default)

#### Optional (can configure later):
- Google OAuth credentials (for social login)
- Email settings (for notifications)
- Twilio settings (for SMS alerts)
- Firebase settings (for push notifications)
- Barcode API (for product lookup)

### API Integration

The frontend is already configured to connect to the backend:

**File: `client/src/services/api.js`**
- Base URL: `http://localhost:5000/api`
- Automatic token management
- Token refresh on expiry
- Credentials included for cookies

### Available API Endpoints

#### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/google` - Google OAuth
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - Logout

#### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get single product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

#### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

#### Barcode
- `POST /api/barcode/lookup` - Lookup product by barcode
- `POST /api/barcode/scan` - Record scan history

#### Notifications
- `GET /api/notifications` - Get notifications
- `PUT /api/notifications/:id/read` - Mark as read

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error: "MongoNetworkError: connect ECONNREFUSED"**
- Solution: Make sure MongoDB is running
- Windows: Check Services for MongoDB
- Mac/Linux: Run `mongod` in terminal

**Error: "Authentication failed"**
- Solution: Check your MongoDB connection string
- Ensure username/password are correct (for Atlas)

### CORS Errors

**Error: "Access-Control-Allow-Origin"**
- Solution: Backend is configured for `http://localhost:5173`
- If using different port, update `CLIENT_URL` in `server/.env`

### Port Already in Use

**Error: "Port 5000 is already in use"**
- Solution: Change port in `server/.env`
- Update `VITE_API_URL` in `client/.env` accordingly

**Error: "Port 5173 is already in use"**
- Solution: Vite will automatically try next available port
- Or kill the process using the port

### Token Issues

**Error: "jwt malformed" or "invalid token"**
- Solution: Clear localStorage in browser
- Logout and login again

## 🚀 Next Steps

### 1. Seed Categories (Optional)
```bash
cd server
npm run seed
```

### 2. Test Authentication
1. Go to http://localhost:5173
2. Click "Get Started" or "Sign Up"
3. Create an account
4. Login with credentials

### 3. Configure Optional Services

#### Google OAuth
1. Go to https://console.cloud.google.com
2. Create project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
6. Update `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in both `.env` files

#### Email Notifications
1. Use Gmail with App Password:
   - Enable 2FA on Gmail
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Update `EMAIL_USER` and `EMAIL_PASS` in `server/.env`

#### SMS Notifications (Twilio)
1. Sign up at https://www.twilio.com
2. Get Account SID and Auth Token
3. Get a Twilio phone number
4. Update credentials in `server/.env`

## 📊 Testing the Integration

### Test 1: Health Check
```bash
curl http://localhost:5000/health
```
Expected: `{"status":"OK","timestamp":"..."}`

### Test 2: Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!",
    "shopName": "Test Shop"
  }'
```

### Test 3: Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!"
  }'
```

## 🎯 Production Deployment

### Environment Variables for Production

Update these in your hosting platform:

**Backend:**
- `NODE_ENV=production`
- `MONGO_URI` - Production MongoDB URI
- `CLIENT_URL` - Production frontend URL
- `JWT_SECRET` - Strong random secret
- `JWT_REFRESH_SECRET` - Different strong random secret

**Frontend:**
- `VITE_API_URL` - Production backend URL

### Security Checklist
- [ ] Change all default secrets
- [ ] Use HTTPS for both frontend and backend
- [ ] Enable MongoDB authentication
- [ ] Configure proper CORS origins
- [ ] Set up rate limiting
- [ ] Enable helmet security headers (already configured)
- [ ] Use environment-specific configs

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Check server and browser console for errors
4. Ensure MongoDB is running and accessible

---

**Integration Status: ✅ Ready to Use**

The backend is fully integrated with the frontend. Just start both servers and you're good to go!
