// BadgesScreen.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from '../styles/BadgesScreenStyles';

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


