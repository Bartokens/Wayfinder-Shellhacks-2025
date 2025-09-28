# Wayfinder
### Where Curiosity Meets Community

Wayfinder is a location-based social discovery app that gamifies real-world exploration and authentic human connection. Built to reimagine social media and create positive community impact through technology.

## The Problem We Solve

In our hyper-connected digital world, we face a paradox: despite having more ways to connect than ever before, loneliness and social isolation are at an all-time high. Traditional social media platforms keep us glued to screens, creating superficial connections while people struggle to discover local communities and meet others in their neighborhoods.

## Our Solution

Wayfinder uses AI and location services to identify interesting spots near you, but with a twist - to earn badges and achievements, you must physically visit locations AND take a verified selfie using AI-powered facial recognition. This creates authentic presence verification and natural opportunities for real-world encounters.

## Key Features

### Smart Location Discovery
- Integration with Google Places API to find interesting local spots
- Intelligent filtering for points of interest, hidden gems, and community spaces
- Real-time location-based recommendations

### AI-Powered Verification
- Google Vision API integration for face detection
- Prevents fake check-ins and ensures authentic presence
- Real-time selfie verification with instant feedback

### Gamified Community Challenges
- Location-based quota system requiring multiple visitors
- Badge collection system for completed challenges
- Profile building through real-world achievements

### Natural Social Discovery
- Community-driven exploration encouraging simultaneous visits
- Organic meeting opportunities through shared interests
- Local community building around neighborhood discovery

## Technical Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development and deployment platform
- **React Native Maps** - Interactive map integration
- **Expo Linear Gradient** - UI styling
- **Expo Status Bar** - Status bar management

### Backend Services
- **Firebase Authentication** - User management and security
- **Google Places API** - Location discovery and data
- **Google Vision API** - AI-powered face detection
- **AsyncStorage** - Local data persistence

### Key Integrations
- **Expo Location** - GPS and location services
- **Expo ImagePicker** - Camera integration
- **Expo Camera** - Photo capture functionality

## Project Structure

```
wayfinder/
├── App.js                          # Main application entry point
├── firebase.js                     # Firebase configuration
├── components/
│   ├── SignUpScreen.js             # User registration
│   ├── MainScreen.js               # Core map and challenge interface
│   ├── ProfileScreen.js            # User profile and badges
│   ├── SettingsScreen.js           # App configuration
│   ├── BadgesScreen.js             # Badge collection display
│   ├── LoginScreen.js              # Authentication interface
│   └── SpotDetail.js               # Location challenge details
├── styles/
│   ├── AppStyles.js                # Main app styling
│   ├── MainScreenStyles.js         # Map interface styles
│   ├── ProfileScreenStyles.js      # Profile page styles
│   ├── SettingsScreenStyles.js     # Settings page styles
│   ├── SignUpScreenStyles.js       # Registration form styles
│   ├── BadgesScreenStyles.js       # Badge display styles
│   ├── LoginScreenStyles.js        # Login form styles
│   └── SpotDetailStyles.js         # Challenge detail styles
├── assets/
│   ├── earth-background.png        # Login background
│   ├── wayfinder-logo.png          # App logo
│   └── spot-icon.png               # Map marker icon
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- React Native development environment
- Google Cloud Platform account (for APIs)
- Firebase project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wayfinder.git
   cd wayfinder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   
   Update the API keys in `components/MainScreen.js`:
   ```javascript
   const GOOGLE_PLACES_API_KEY = "your-google-places-api-key";
   const GOOGLE_VISION_API_KEY = "your-google-vision-api-key";
   ```

4. **Configure Firebase**
   
   Update `firebase.js` with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     // ... other config
   };
   ```

5. **Start the development server**
   ```bash
   expo start
   ```

## Core User Flow

1. **Authentication** - Users sign up/login with email and password
2. **Location Discovery** - App discovers nearby points of interest
3. **Challenge Selection** - Users select locations to visit
4. **Physical Verification** - Take selfie at location for AI verification
5. **Community Progress** - Contribute to location quotas with other users
6. **Badge Collection** - Earn badges when location quotas are met
7. **Profile Building** - Build adventure portfolio through real experiences

## Privacy & Security

- Location data processed locally and used only for discovery
- Photos processed through Google Vision API but not stored permanently
- User authentication handled securely through Firebase
- No personal data sharing between users without explicit interaction

## Acknowledgments

- Google Cloud Platform for powerful APIs
- Firebase for reliable backend services
- Expo team for exceptional development tools

---
