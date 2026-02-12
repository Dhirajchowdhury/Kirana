# StockSync - Smart Inventory Management System

A production-ready, PWA-enabled inventory management system for general store owners built with the MERN stack.

## 🚀 Features

- **Barcode Scanning**: PWA camera integration for instant product lookup
- **Smart Alerts**: Email, SMS, and push notifications for low stock and expiring products
- **Offline Mode**: Full functionality with IndexedDB caching and service workers
- **OAuth Integration**: Google OAuth 2.0 + local authentication
- **Animated Landing Page**: GSAP-powered rice grain and vegetable basket animations
- **Real-time Dashboard**: Track inventory, sales, and analytics
- **Category Management**: Predefined and custom categories
- **Batch Tracking**: FIFO management for products with expiry dates
- **Reports & Analytics**: Visual charts and exportable reports

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- GSAP for animations
- Chart.js for analytics
- IndexedDB for offline storage
- Service Workers for PWA

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Passport.js (Google OAuth)
- Node-cron for scheduled alerts

### Notifications
- Nodemailer (Email)
- Twilio (SMS)
- Firebase Cloud Messaging (Push)

## 📋 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn
- Google OAuth credentials
- Twilio account (for SMS)
- Firebase project (for push notifications)

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd stocksync
```

### 2. Install dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 3. Environment Variables

Create `.env` files in both client and server directories using the templates below.

**Server `.env`:**
```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/stocksync

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# SMS (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Barcode API
BARCODE_API_KEY=your_barcode_api_key
BARCODE_API_URL=https://api.barcodelookup.com/v3/products

# Push Notifications (Firebase)
FCM_SERVER_KEY=your_fcm_server_key
FCM_SENDER_ID=your_fcm_sender_id

# Server
PORT=5000
NODE_ENV=development
```

**Client `.env`:**
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## 🚀 Running the Application

### Development Mode

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Production Build

**Frontend:**
```bash
cd client
npm run build
```

**Backend:**
```bash
cd server
npm start
```

## 📊 Database Schema

### User
- Email, password, Google ID
- Shop name, phone number
- Notification preferences
- Low stock threshold

### Product
- Barcode, name, brand
- Category, batch number
- Expiry and manufacture dates
- Quantity, unit, pricing
- Supplier information

### Category
- Name, icon
- User-specific or default

### ScanHistory
- User, product references
- Timestamp and action type

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/google` - Google OAuth login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Barcode
- `POST /api/barcode/lookup` - Lookup product by barcode
- `POST /api/barcode/scan` - Record scan history

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark as read

## 🎨 Design System

### Colors
- Primary: #8AA624 (Olive Green)
- Secondary: #FEA405 (Warm Orange)
- Background: #F7F4EA (Cream)
- Surface: #FFFFF0 (Ivory)

### Typography
- Headings: Poppins
- Body: Inter
- Monospace: JetBrains Mono

## 📱 PWA Features

- Installable on mobile and desktop
- Offline functionality with service workers
- Background sync for data updates
- Push notifications support
- Camera access for barcode scanning

## 🔒 Security

- JWT token-based authentication
- Refresh token rotation
- Password hashing with bcrypt (12 rounds)
- Rate limiting (100 req/15min)
- Helmet.js security headers
- Input validation and sanitization
- CORS configuration
- HTTPS enforcement in production

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `dist` folder
3. Configure environment variables
4. Set up custom domain

### Backend (Railway/Render)
1. Connect repository
2. Set environment variables
3. Configure build command: `npm install`
4. Configure start command: `npm start`

### Database (MongoDB Atlas)
1. Create cluster
2. Whitelist IP addresses
3. Create database user
4. Update MONGO_URI in .env

## 📈 Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.9s
- Bundle size: < 300KB (gzipped)

## 🐛 Troubleshooting

### Camera not working
- Ensure HTTPS in production
- Check browser permissions
- Verify PWA manifest configuration

### Notifications not sending
- Verify API credentials (Twilio, Firebase)
- Check email SMTP settings
- Ensure cron jobs are running

### OAuth errors
- Verify Google Console configuration
- Check callback URL matches
- Ensure credentials are correct

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for general store owners
