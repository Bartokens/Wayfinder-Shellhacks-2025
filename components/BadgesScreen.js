// BadgesScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function BadgesScreen({ badges, onBack }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
      <Text style={styles.title}>Your Badges</Text>
      {badges.length === 0 ? (
        <Text style={styles.noBadges}>No badges yet — go visit a spot!</Text>
      ) : (
        <FlatList
          data={badges}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.badge}>
              <Text style={styles.badgeName}>{item.name}</Text>
              <Text style={styles.badgeAddress}>{item.address}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#071127' },
  back: { color: '#007AFF', fontSize: 18, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: '#fff' },
  noBadges: { color: '#fff' },
  badge: { padding: 10, marginBottom: 10, backgroundColor: "#15324a", borderRadius: 8 },
  badgeName: { fontSize: 18, fontWeight: "600", color: '#fff' },
  badgeAddress: { fontSize: 14, color: "#bbb" },
});
