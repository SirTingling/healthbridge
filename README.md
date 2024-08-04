# HealthBridge HealthCare Application Serving Underserved Patients

Hey UoL, Welcome to HealthBridge, a comprehensive healthcare application designed to connect underserved patients with healthcare providers, streamline medical services, and provide exceptional care through an easy-to-use platform. HealthBridge leverages modern web technologies to create a seamless experience for both patients and healthcare professionals.

CM3070 Computer Science Final Report

## Features

- **User Authentication**: Secure login and registration for patients and doctors.
- **Doctor Listings**: Browse and search for doctors by specialty, location, and availability.
- **Doctor Profiles**: Detailed information about each doctor, including qualifications, experiences, and patient reviews.
- **Appointment Booking**: Schedule appointments with doctors easily.
- **Payment Integration**: Secure payment processing for appointment bookings.
- **User Dashboard**: Personalized dashboard for patients and doctors to manage profiles, appointments, and more.
- **Contact and Support**: Easy-to-use contact form for user inquiries and customer support.
- **Testimonials**: Read feedback from other patients about their experiences with doctors and the platform.
- **Responsive Design**: Accessible on various devices, including desktops, tablets, and mobile phones.

## Technology Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: Integration with payment gateways (e.g., Stripe) - optionally
- **Image Upload**: Cloudinary for storing user and doctor profile pictures

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (local or cloud)
- Cloudinary account for image upload
- Payment gateway account (e.g., Stripe) - optionally

### Frontend Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/healthbridge.git
   cd healthbridge
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   VITE_UPLOAD_PRESET=your_cloudinary_upload_preset
   VITE_CLOUD_NAME=your_cloudinary_cloud_name
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Start the Development Server**
   ```sh
   npm run dev
   ```

### Backend Setup (Express.js Server)

1. **Clone the Backend Repository**
   ```sh
   git clone https://github.com/your-username/healthbridge-backend.git
   cd healthbridge-backend
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Start the Backend Server**
   ```sh
   npm run start
   ```

## Project Structure

### Frontend

- `src/components`: Reusable React components
- `src/pages`: React components for each page (e.g., Home, Login, Signup)
- `src/context`: Context providers for global state management
- `src/utils`: Utility functions and helpers
- `src/assets`: Static assets like images and icons
- `src/styles`: CSS and Tailwind CSS files

### Backend (Express.js)

- `routes`: API route definitions
- `controllers`: Logic for handling requests
- `models`: Mongoose models for MongoDB collections
- `middleware`: Custom middleware functions
- `config`: Configuration files and constants
- `utils`: Utility functions and helpers