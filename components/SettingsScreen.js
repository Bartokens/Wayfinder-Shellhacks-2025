// components/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#071127', paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  title: { color: '#fff', fontSize: 20, fontWeight: '700', marginLeft: 12 },
  section: { padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  label: { color: '#fff' },
  dangerButton: { marginTop: 30, backgroundColor: '#2a2a2a', padding: 12, borderRadius: 8, alignItems: 'center' },
  dangerText: { color: '#ff6b6b', fontWeight: '700' },
});
