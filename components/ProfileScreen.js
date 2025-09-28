// components/ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#071127', paddingTop: 40 },
  header: { paddingHorizontal: 12 },
  center: { alignItems: 'center', marginTop: 8 },
  avatar: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#15324a', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'rgba(255,255,255,0.06)' },
  name: { color: '#fff', fontSize: 20, fontWeight: '700', marginTop: 12 },
  sub: { color: '#9bb', marginTop: 6 },
  sectionTitle: { color: '#fff', marginTop: 20, fontSize: 16, alignSelf: 'flex-start', marginLeft: 16 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
});
