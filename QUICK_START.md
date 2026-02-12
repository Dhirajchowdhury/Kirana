# 🚀 Quick Start - StockSync

## Prerequisites
- Node.js installed
- MongoDB installed (or MongoDB Atlas account)

## Installation (First Time Only)

```bash
# Install all dependencies
npm run install:all
```

## Running the Application

### Option 1: Windows Batch Script (Easiest)
```bash
start.bat
```

### Option 2: Manual Start

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

## Access Points

- 🌐 Frontend: http://localhost:5173
- 🔌 Backend API: http://localhost:5000
- ✅ Health Check: http://localhost:5000/health

## First Time Setup

1. Make sure MongoDB is running
2. Start the application (use start.bat or manual start)
3. Open http://localhost:5173
4. Click "Sign Up" and create an account
5. Start managing your inventory!

## Optional: Seed Categories

```bash
npm run seed
```

This will populate default categories like:
- Groceries
- Beverages
- Snacks
- Personal Care
- Household Items
- etc.

## Configuration

Environment files are already created:
- `client/.env` - Frontend config
- `server/.env` - Backend config

**Required:** Only MongoDB connection (already set to local MongoDB)

**Optional:** Google OAuth, Email, SMS, Push notifications (can configure later)

## Troubleshooting

### MongoDB not running?
- Windows: Start MongoDB service from Services
- Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

### Port already in use?
- Backend: Change `PORT` in `server/.env`
- Frontend: Vite will auto-select next available port

### Need help?
Check `INTEGRATION_GUIDE.md` for detailed troubleshooting

## What's Integrated?

✅ Frontend connected to Backend API
✅ Authentication (JWT + Refresh Tokens)
✅ Product Management
✅ Category Management
✅ Barcode Scanning
✅ Notifications System
✅ Dashboard Analytics
✅ PWA Support
✅ Offline Mode

## Next Steps

1. Create your account
2. Add some products
3. Try barcode scanning (requires HTTPS in production)
4. Configure optional services (OAuth, Email, SMS)
5. Deploy to production

---

**Everything is ready! Just start the servers and go! 🎉**
