# CampusConnect

**CampusConnect** is a full-stack collaborative web platform built exclusively for college students. It brings together academic resource sharing, a peer-to-peer marketplace, accommodation discovery, and a connection-based social network into one cohesive application.

---

## ✨ Features

### 🔐 Authentication & Profiles
- Secure JWT-based registration and login
- Two-step registration capturing full academic details (college, course, branch, year, semester, phone)
- Editable profile page with inline updates
- Role-based access (`student` / `admin`)

### 📒 Notes Repository
- Upload study notes (PDF, DOC, PPT, images) with subject, description, semester, branch, and price
- Browse and filter notes by semester and search across subject/uploader/college
- "My Notes" view for tracking your own uploads
- Free or priced notes, with download/buy actions

### 🛒 Student Marketplace
- List second-hand items (books, electronics, stationery, etc.) with photos, price, and category
- Browse and filter listings by category
- Connect with sellers directly from a listing card
- "My Listings" view in your profile

### 🏠 Accommodation Finder
- Post PG/Flat/Home/Office listings with rent, amenities (WiFi, Parking, Laundry, etc.), and contact info
- **Live geocoding** via OpenStreetMap Nominatim — search an address, use your current GPS location, or drop a pin on an interactive **Leaflet.js** map
- Listing cards embed a live map preview and a **"Get Directions"** button that opens Google Maps
- "My Accommodation" view in your profile

### 🤝 Connections & Chat
- Send, accept, reject, or cancel connection requests (with an optional context message)
- Chat is restricted to connected users only — enforced at the API level
- Browse all platform members and manage your friends list from the Profile page
- Unfriend at any time

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router v6, TanStack Query |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB Atlas |
| **Auth** | JSON Web Tokens (JWT), bcryptjs |
| **File Uploads** | Multer |
| **Maps & Geocoding** | Leaflet.js, OpenStreetMap Nominatim API, Google Maps |

---

## 📁 Project Structure

```
campusconnect/
├── backend/
│   ├── config/          # Database connection
│   ├── middleware/       # JWT auth guard, Multer upload handler
│   ├── models/           # Mongoose schemas (User, Note, Listing, Accommodation, Connection, Message...)
│   ├── routes/           # Express route handlers
│   ├── uploads/          # Uploaded files (notes, images)
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/   # Reusable UI components (Navbar, ConnectionButton, ProtectedRoute...)
    │   ├── context/       # AuthContext (global auth state)
    │   ├── pages/         # Route-level pages (Home, Notes, Marketplace, Accommodation, Chat, Profile...)
    │   └── App.tsx
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A MongoDB Atlas connection string (or local MongoDB instance)

### 1. Clone the repository
```bash
git clone https://github.com/misteragarwal/CampusConnect.git
cd CampusConnect
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/campusconnect
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
UPLOAD_DIR=uploads
```

Start the backend:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

The app will be available at **http://localhost:5173**, connecting to the API at **http://localhost:5000**.

---

## 📡 API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| GET / PUT | `/api/users/me` | Get / update authenticated user's profile |
| GET | `/api/users/all` | List all registered users |
| GET / POST | `/api/notes` | Browse / upload notes |
| GET | `/api/notes/my` | Notes uploaded by the current user |
| GET / POST | `/api/listings` | Browse / create marketplace listings |
| GET | `/api/listings/my` | Listings created by the current user |
| GET / POST | `/api/accommodations` | Browse / post accommodation listings |
| GET | `/api/accommodations/my` | Accommodation listings posted by the current user |
| GET / POST | `/api/connections/*` | Send, accept, reject, and manage connection requests |
| GET / POST | `/api/messages/*` | Send and retrieve messages (connected users only) |

> Full endpoint documentation is available in the project report under Chapter 3.4.

---

## 🗺️ Roadmap

- [ ] Real-time messaging via WebSockets (Socket.io)
- [ ] Email verification and password reset
- [ ] Cloud file storage (AWS S3 / Cloudinary)
- [ ] In-app payments for priced notes and marketplace items
- [ ] Campus Events module
- [ ] React Native mobile app

---

## 📄 License

This project was developed as a final-year B.Tech (Information Technology) academic project. Feel free to fork and build on it for learning purposes.

---

## 🙌 Acknowledgements

Built with [React](https://react.dev/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Leaflet.js](https://leafletjs.com/), and [OpenStreetMap Nominatim](https://nominatim.org/).