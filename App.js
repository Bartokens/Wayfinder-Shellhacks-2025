import React, { useState } from 'react';
import { View, Alert, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './styles/AppStyles';

// Screens
import SignUpScreen from './components/SignUpScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

// Assets
const backgroundImage = require('./assets/earth-background.png');
const logoImage = require('./assets/wayfinder-logo.png');

export default function App() {
  const [appState, setAppState] = useState('login'); // 'login' | 'signup' | 'main' | 'profile' | 'settings'
  const [username, setUsername] = useState('');
  const [badges, setBadges] = useState([]);

  const goLogin = () => setAppState('login');
  const goSignUp = () => setAppState('signup');
  const goMain = () => setAppState('main');
  const goProfile = () => setAppState('profile');
  const goSettings = () => setAppState('settings');
  const handleLogout = () => {
    setUsername('');
    goLogin();
  };

  const addBadge = (badge) => {
    setBadges((prev) => {
      if (prev.find((b) => b.id === badge.id)) return prev;
      return [...prev, badge];
    });
  };

  // Login screen
  const LoginScreen = ({ onLoginSuccess, onShowSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      if (!email || !password) return Alert.alert('Error', 'Please enter both email and password');

      try {
        await signInWithEmailAndPassword(auth, email, password);
        onLoginSuccess();
      } catch (error) {
        Alert.alert('Login Failed', error.message);
      }
    };

    return (
      <View style={styles.loginContainer}>
        <Image source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']} style={styles.gradientOverlay}>
          <View style={styles.content}>
            <Image source={logoImage} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>Wayfinder</Text>
            <Text style={styles.signInText}>Sign in</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#bbbbbb"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#bbbbbb"
              secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={onShowSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  };

  let ScreenComponent = null;
  if (appState === 'main') {
    ScreenComponent = (
      <MainScreen
        username={username}
        onOpenProfile={goProfile}
        onOpenSettings={goSettings}
        onLogout={handleLogout}
        addBadge={addBadge}
        badges={badges}
      />
    );
  } else if (appState === 'signup') {
    ScreenComponent = (
      <SignUpScreen
        onClose={goLogin}
        onSignUp={async (email, password, username) => {
          setUsername(username);
          goMain();
        }}
      />
    );
  } else if (appState === 'profile') {
    ScreenComponent = <ProfileScreen username={username} badges={badges} onBack={goMain} />;
  } else if (appState === 'settings') {
    ScreenComponent = <SettingsScreen onBack={goMain} onLogout={handleLogout} />;
  } else {
    ScreenComponent = <LoginScreen onLoginSuccess={goMain} onShowSignUp={goSignUp} />;
  }

  return (
    <View style={styles.container}>
      {ScreenComponent}
      <StatusBar style="light" />
    </View>
  );
}


