# Taxi Booking Application - Book_A_Taxi

A modern, responsive front-end taxi booking application built with React and Vite. This application provides a user-friendly interface for booking taxi rides with comprehensive form validation and seamless navigation.

## 🚕 Features

### Pages
- **Home Page**: Main landing page with an integrated taxi booking form
- **About Page**: Information about the company, mission, and why choose us
- **Services Page**: Detailed service offerings and pricing information
- **Contact Page**: Contact form and company contact information

### Key Functionality
- **Booking Form** with comprehensive validation:
  - Required field validation (name, phone, pickup, destination, date, time)
  - Phone number format validation
  - Date validation (prevents past dates)
  - Real-time error messages
  - Success confirmation on submission

- **Contact Form** with validation:
  - Email format validation
  - Phone number validation
  - Message length validation (minimum 10 characters)
  - Required field checks

- **Navigation**: Seamless routing between all pages using React Router
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Beautiful gradient design with smooth animations and transitions

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page with booking form
│   │   ├── Home.css
│   │   ├── About.jsx           # About page
│   │   ├── About.css
│   │   ├── Services.jsx        # Services page
│   │   ├── Services.css
│   │   ├── Contact.jsx         # Contact page with form
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mod_4_final_project_taxibooking_app/vite-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📋 Form Validation Details

### Booking Form (Home Page)
- **Name**: Required field
- **Phone**: Required, must be a valid phone number format
- **Pickup Location**: Required field
- **Destination**: Required field
- **Date**: Required, cannot be in the past
- **Time**: Required field
- **Passengers**: Optional (defaults to 1)

### Contact Form
- **Name**: Required field
- **Email**: Required, must be valid email format
- **Phone**: Required, must be valid phone number format
- **Subject**: Required field
- **Message**: Required, minimum 10 characters

## 🎨 Design Features

- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)
- **Responsive Layout**: Mobile-first design with breakpoints
- **Interactive Elements**: Hover effects, smooth transitions
- **Form Feedback**: Visual error indicators and success messages
- **Card-based Layout**: Clean, modern card designs

## 🛠️ Technologies Used

- **React 19.2.0**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and development server
- **CSS3**: Styling with modern CSS features

## 📝 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🔗 Navigation Flow

The application uses React Router for seamless navigation:
- `/` - Home page (booking form)
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

All pages are accessible through the navigation bar at the top of the page.

## ✨ Future Enhancements

Potential features to add:
- Backend integration for actual booking processing
- User authentication
- Booking history
- Real-time driver tracking
- Payment integration
- Email notifications

## 📄 License

This project is part of a learning assignment for front-end development.

## 👤 Author

Created as part of Module 4 Final Project - Taxi Booking Application

---

**Note**: This is a front-end starter code. Backend integration would be required for full functionality.
