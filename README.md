# ⭐ WarmPaws – Pet Care in Winter

A cozy winter companion platform designed to help pet owners keep their furry friends warm, healthy, and safe during the cold season.  
Users can explore pet care services, view details, book services, and securely log in to access protected pages.

---

## 🔗 Live Link
👉 **Live URL:** https://warmpaw.netlify.app/ 

---

## 📌 Project Purpose
WarmPaws helps pet owners easily find and book winter-care services such as grooming, coat fitting, bedding setup, and health checkups — all in one simple interface.

---

## 🚀 Key Features

### 🔐 Authentication
- User login & registration
- Firebase Email/Password Authentication
- Private Route protection
- Redirect to intended page after login
- Update profile (name + photo)

### 🐾 Winter Pet Care Services
- Data loaded from `services.json`
- Service cards with image, price, rating
- "View Details" button for each service

### 📄 Service Details Page (Protected)
- Shows full service details:
  - Name  
  - Price  
  - Rating  
  - Category  
  - Provider info  
  - Description
- Includes a **Book Service** form:
  - Name & Email fields
  - “Book Now” button
  - Displays success toast on submit

### 👤 Profile Page
- Shows logged-in user information
- Allows updating name and photo

### ⚡ UX Features
- Responsive UI (Tailwind + DaisyUI)
- Smooth toast notifications
- Clean layout with reusable components
- Dynamic navbar based on authentication state

---

## 🛠️ Technologies Used

### Frontend
- React.js  
- Vite  
- TailwindCSS  
- DaisyUI  

### Routing
- **react-router**

### Authentication
- **Firebase Authentication**

### UI Enhancements
- **react-hot-toast**  
- **lucide-react (icons)**  


