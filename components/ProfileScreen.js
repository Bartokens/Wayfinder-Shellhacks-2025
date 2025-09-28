// components/ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/ProfileScreenStyles';

export default function ProfileScreen({ username = 'Player1', onBack }) {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('WF_BADGES');
      setBadges(raw ? JSON.parse(raw) : []);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Ionicons name="arrow-back" size={28} color="#fff" /></TouchableOpacity>
      </View>

      <View style={styles.center}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 42 }}>🧑‍🦲</Text>
        </View>
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.sub}>Wayfinder Adventurer</Text>

        <Text style={styles.sectionTitle}>Badges ({badges.length})</Text>
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingHorizontal: 16 }}>
          {badges.map((b) => (
            <View key={b.spotId} style={styles.badgeRow}>
              <Ionicons name="star" size={22} color="#FFD700" />
              <Text style={{ color: '#fff', marginLeft: 10 }}>{b.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}


