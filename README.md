

---

# Meetup App – Frontend (React + Bootstrap)

This is the **frontend client** for the Meetup App.
It allows users to browse events, search by title/tags, filter by event type (online/offline/both), and view full event details.

---

## 📦 Project Structure

```
frontend/
├── public/                   # Static assets
├── src/
│   ├── assets/               # Logos, images
│   ├── components/           # Header, Footer, Events
│   ├── hooks/
│   │   └── useFetch.js       # Custom data-fetching hook
│   ├── pages/
│   │   └── EventDetails.jsx  # Event detail page
│   ├── utils/
│   │   ├── formatDateTime.js # Date formatter
│   │   └── timeDate.js       # Time formatter
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── App.css               # Global styles
├── package.json
└── README.md                 # This file
```

---

## ⚙️ Setup Instructions

1. Navigate to frontend folder:

   ```bash
   cd frontend
   
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev   # Vite
   # or
   npm start     # Create React App
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Open app in browser:
   👉 **[http://localhost:5173](http://localhost:5173)** (Vite default)
   👉 **[http://localhost:3000](http://localhost:3000)** (CRA default)

---

## 🌐 API Integration

This frontend expects a backend API (see **Meetup App – Backend**) exposing the following endpoints:

* **GET /events** – all events
* **GET /events/type?type=online|offline|both** – filter events
* **GET /events/search?q=keyword** – search events by title/tags
* **GET /events/id/\:eventId** – get single event details

> Default backend URL:
> `https://meetup-app-backend-sigma.vercel.app`

---

## 🖥️ Features

* Responsive **Bootstrap 5** UI
* **Header** with logo & live search
* **Event filter** (online / offline / both)
* **Events grid** with image, type badge, date, and title
* **Event details** page with:

  * Host info
  * Cover image
  * Description + additional info (dress code, restrictions)
  * Venue, date/time, price
  * Speaker list with avatars

---



## 🛠 Tech Stack

* React (Hooks + Components)
* React Router
* Bootstrap 5


---

