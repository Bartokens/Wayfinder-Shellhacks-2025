import React, { useEffect, useState } from "react";
import { View, Text, Alert, ActivityIndicator, TouchableOpacity, Image, Modal, Button } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';
import styles from '../styles/MainScreenStyles';

export default function MainScreen({ onOpenBadges, onOpenProfile, onOpenSettings, onLogout }) {
  const [location, setLocation] = useState(null);
  const [spots, setSpots] = useState([]);
  const [loadingSpots, setLoadingSpots] = useState(true);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const GOOGLE_PLACES_API_KEY = Constants.expoConfig.extra.GOOGLE_PLACES_API_KEY;
  const GOOGLE_VISION_API_KEY = Constants.expoConfig.extra.GOOGLE_VISION_API_KEY;
  const testingMode = true;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        const fallback = { coords: { latitude: 36.130, longitude: -115.165 } };
        setLocation(fallback);
        generateSpots(fallback.coords.latitude, fallback.coords.longitude);
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      generateSpots(loc.coords.latitude, loc.coords.longitude);
    })();
  }, []);

  const generateSpots = async (lat, lng) => {
    setLoadingSpots(true);
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2000&type=point_of_interest&key=${GOOGLE_PLACES_API_KEY}`
      );
      const json = await res.json();
      if (json.results && json.results.length > 0) {
        setSpots(
          json.results.slice(0, 8).map(p => ({
            id: p.place_id,
            name: p.name,
            latlng: { latitude: p.geometry.location.lat, longitude: p.geometry.location.lng },
            vicinity: p.vicinity,
            quota: Math.floor(Math.random() * 5) + 2,
            currentCount: 0,
            photoReference: p.photos && p.photos[0]?.photo_reference,
          }))
        );
      }
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingSpots(false);
    }
  };

  const getPhotoUrl = (photoReference) =>
    photoReference
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photoReference}&key=${GOOGLE_PLACES_API_KEY}`
      : null;

  const openSpotModal = (spot) => {
    setSelectedSpot(spot);
    setModalVisible(true);
  };

  const closeSpotModal = () => {
    setSelectedSpot(null);
    setModalVisible(false);
  };

  const takeSelfie = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") return Alert.alert("Camera permission denied!");

    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.7 });
    if (!result.canceled) return await verifySelfie(result.assets[0].uri);
  };

const verifySelfie = async (uri) => {
  try {
    // Convert image URI to Base64
    const base64 = await fetch(uri)
      .then(res => res.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      }));

    // Call Google Vision API for face detection
    const res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: [{ image: { content: base64 }, features: [{ type: "FACE_DETECTION" }] }]
      })
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.error?.message || 'Vision API Error');
    }

    const data = await res.json();
    const facesDetected = data.responses?.[0]?.faceAnnotations?.length || 0;

    if (facesDetected === 0) return Alert.alert("No face detected! Photo rejected.");

    // Update spot count
    // setSpots(prev => prev.map(s => {
    //   if (s.id === selectedSpot.id) {
    //     const updatedCount = (s.currentCount || 0) + facesDetected;
    //     return { ...s, currentCount: updatedCount };
    //   }
    //   return s;
    // }));

    // Load badges
    const badgesRaw = await AsyncStorage.getItem("WF_BADGES");
    const badges = badgesRaw ? JSON.parse(badgesRaw) : [];

    // Check if quota met and badge not yet awarded
    const updatedSpot = spots.find(s => s.id === selectedSpot.id);
    if ((updatedSpot.currentCount + facesDetected) >= updatedSpot.quota && !badges.some(b => b.spotId === selectedSpot.id)) {
      badges.push({ spotId: selectedSpot.id, name: selectedSpot.name, address: selectedSpot.vicinity });
      await AsyncStorage.setItem("WF_BADGES", JSON.stringify(badges));
      Alert.alert(`🎉 Badge earned for ${selectedSpot.name}!`);
    } else {
      Alert.alert(`${facesDetected} face(s) detected. ${updatedSpot.quota - (updatedSpot.currentCount + facesDetected)} more needed for badge.`);
    }

    closeSpotModal();

  } catch (e) {
    console.warn(e.message || e);
    Alert.alert(`Error verifying selfie: ${e.message || 'Check console for details.'}`);
  }
};


  if (!location) return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={{ color: "#fff", marginTop: 10 }}>Acquiring location...</Text>
    </View>
  );
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#0f2c4f' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0f2c4f' }] },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#1a2e4d' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#1a2e4d' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#94a5a6' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#1a2e4d' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#023e58' }]
  },
];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0122,
        }}
        showsUserLocation
        customMapStyle={darkMapStyle}
      >
        <Circle
          center={location.coords}
          radius={200}
          strokeColor="rgba(0,200,255,0.5)"
          fillColor="rgba(0,200,255,0.1)"
        />
        {spots.map(spot => (
          <Marker key={spot.id} coordinate={spot.latlng}>
            <TouchableOpacity onPress={() => openSpotModal(spot)}>
              <Image source={require("../assets/spot-icon.png")} style={{ width: 50, height: 50 }} />
              <View style={styles.quotaBadge}>
                <Text style={styles.quotaText}>{spot.currentCount}/{spot.quota}</Text>
              </View>
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>

      {selectedSpot && (
        <Modal transparent visible={modalVisible} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedSpot.photoReference && (
                <Image source={{ uri: getPhotoUrl(selectedSpot.photoReference) }} style={styles.thumbnail} />
              )}
              <Text style={styles.spotTitle}>{selectedSpot.name}</Text>
              <Text style={styles.spotText}>Quota: {selectedSpot.currentCount}/{selectedSpot.quota}</Text>
              <Button title="Take Selfie" onPress={takeSelfie} />
              <Button title="Close" onPress={closeSpotModal} />
            </View>
          </View>
        </Modal>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={onOpenBadges}><Text style={styles.navText}>🏆 Badges</Text></TouchableOpacity>
        <TouchableOpacity onPress={onOpenProfile}><Text style={styles.navText}>👤 Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress={onOpenSettings}><Text style={styles.navText}>⚙️ Settings</Text></TouchableOpacity>
        <TouchableOpacity onPress={onLogout}><Text style={styles.navText}>🚪 Logout</Text></TouchableOpacity>
      </View>
    </View>
  );
}


