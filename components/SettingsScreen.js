// components/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SettingsScreenStyles';

export default function SettingsScreen({ onBack, onLogout }) {
  const [locEnabled, setLocEnabled] = useState(true);
  const [hints, setHints] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Ionicons name="arrow-back" size={28} color="#fff" /></TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Location (in game)</Text>
          <Switch value={locEnabled} onValueChange={setLocEnabled} />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Hints & Tips</Text>
          <Switch value={hints} onValueChange={setHints} />
        </View>

        <TouchableOpacity style={styles.dangerButton} onPress={() => {
          Alert.alert('Sign out', 'Are you sure you want to sign out?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Sign out', style: 'destructive', onPress: onLogout }
          ]);
        }}>
          <Text style={styles.dangerText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


