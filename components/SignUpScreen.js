import React, { useRef, useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/SignUpScreenStyles';

export default function SignUpScreen({ onClose, onSignUp }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  const handleSignUp = async () => {
    if (!username || !email || !password || !confirm) return Alert.alert('Error', 'Please fill all fields');
    if (password !== confirm) return Alert.alert('Error', 'Passwords do not match');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignUp && onSignUp(email, password, username);
    } catch (error) {
      Alert.alert('Sign Up Failed', error.message);
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <LinearGradient colors={['rgba(23,57,118,0.95)', 'rgba(22,51,71,0.95)']} style={styles.backgroundGradient} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Create an account</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholderTextColor="#bbbbbb" value={fullName} onChangeText={setFullName} autoCapitalize="words" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholderTextColor="#bbbbbb" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholderTextColor="#bbbbbb" value={username} onChangeText={setUsername} autoCapitalize="none" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholderTextColor="#bbbbbb" secureTextEntry value={password} onChangeText={setPassword} />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholderTextColor="#bbbbbb" secureTextEntry value={confirm} onChangeText={setConfirm} />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}


