# StockSync - Quick Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Step 1: Clone and Install

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

## Step 2: Environment Configuration

### Backend (.env in server folder)

Create a `server/.env` file:

```env
# MongoDB - Use local or Atlas connection string
MONGO_URI=mongodb://localhost:27017/stocksync

# JWT Secrets - Generate strong random strings
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_REFRESH_SECRET=your_super_secret_refresh_key_change_this
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Email (Gmail example - enable 2FA and create app password)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Twilio (Sign up at twilio.com)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Optional: Barcode API
BARCODE_API_KEY=
BARCODE_API_URL=

# Optional: Firebase for push notifications
FCM_SERVER_KEY=
FCM_SENDER_ID=

# Server Config
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (.env in client folder)

Create a `client/.env` file:

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Step 3: Seed Default Categories

```bash
cd server
npm run seed
```

## Step 4: Start Development Servers

### Terminal 1 - Backend
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend
```bash
cd client
npm run dev
```

## Step 5: Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## Quick Configuration Guides

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
6. Copy Client ID and Client Secret to .env files

### Gmail App Password

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password in EMAIL_PASS (not your regular password)

### Twilio Setup

1. Sign up at [twilio.com](https://www.twilio.com/)
2. Get a phone number
3. Copy Account SID and Auth Token from dashboard
4. Add to .env file

### MongoDB Atlas (Cloud Database)

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist your IP (or use 0.0.0.0/0 for development)
5. Get connection string and add to MONGO_URI

## Testing the Application

1. Sign up with email and password
2. Check your email for verification code
3. Verify and login
4. Explore the dashboard

## Common Issues

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

### MongoDB Connection Error
- Ensure MongoDB is running locally: `mongod`
- Or use MongoDB Atlas connection string

### Email Not Sending
- Check Gmail app password is correct
- Ensure 2FA is enabled on Google account
- Check EMAIL_HOST and EMAIL_PORT are correct

### Google OAuth Not Working
- Verify redirect URI matches exactly
- Check both Client ID and Secret are correct
- Ensure Google+ API is enabled

## Production Deployment

See README.md for detailed deployment instructions for:
- Frontend: Vercel/Netlify
- Backend: Railway/Render/DigitalOcean
- Database: MongoDB Atlas

## Need Help?

- Check the main README.md for comprehensive documentation
- Review the API endpoints in server/routes/
- Check browser console and server logs for errors

---

Happy coding! 🚀
