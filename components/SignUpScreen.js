import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, Dimensions, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const { height, width } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: { position: 'absolute', top: 0, left: 0, width: width, height: height, justifyContent: 'center', alignItems: 'center', zIndex: 100 },
  backgroundGradient: { position: 'absolute', width: '100%', height: '100%' },
  closeButton: { position: 'absolute', top: Platform.OS === 'ios' ? 60 : 20, left: 20, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  content: { width: '85%', padding: 20, alignItems: 'flex-start' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#fff', marginBottom: 40, alignSelf: 'center' },
  label: { fontSize: 16, color: '#fff', marginBottom: 8, marginTop: 15 },
  input: { width: '100%', height: 50, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 10, paddingHorizontal: 15, fontSize: 18, color: '#fff', borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  signUpButton: { width: '100%', height: 50, backgroundColor: 'transparent', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#007AFF', marginTop: 40 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
