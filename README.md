# Sleepyheads - Premium Milkshake Experience

Sleepyheads is a modern, real-time milkshake ordering platform built with **React**, **Vite**, and **Supabase**. It features a stunning, interactive UI designed to provide a premium user experience.

## ✨ Features

- **Real-time Order Tracking**: Orders are tracked in real-time from preparation to delivery using Supabase Realtime subscriptions.
- **Supabase Authentication**: Secure user sign-up and login with email verification and profile management.
- **Interactive Milkshake Builder**: Build your own custom shakes with smooth animations.
- **Activity Logging**: Tracks user sign-ins, sign-ups, and order placements for detailed activity history.
- **Premium Design System**: Glassmorphism, smooth framer-motion animations, and a rich, curated color palette.

## 🛠️ Technology Stack

- **Frontend**: React (Vite)
- **Styling**: Vanilla CSS (Modern Design System)
- **Backend-as-a-Service**: Supabase
  - **Auth**: User authentication and profile management.
  - **PostgreSQL**: Relational database for orders and activity logs.
  - **Realtime**: Postgre changes listening for instant UI updates.
- **Animations**: Framer Motion & AOS (Animate On Scroll)
- **Icons**: Lucide React

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prachicode-10/sleepyheads.git
   cd sleepyheads
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Database Setup**:
   The project uses Supabase. Ensure your `src/lib/supabase.js` is configured with your project URL and public anon key.

4. **Run in development**:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`.

## 📈 Activity Tracking

Every interaction is recorded in the `user_activity` table in Supabase, allowing for real-time monitoring of user engagement and order flows.

## 🔗 Resources

- **GitHub Repository**: [sleepyheads](https://github.com/prachicode-10/sleepyheads.git)
- **Supabase Project ID**: `eqdtztgpkixxccrqgpwz`
