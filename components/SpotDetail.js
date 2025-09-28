import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import styles from '../styles/SpotDetailStyles';

const GOOGLE_VISION_API_KEY = 'AIzaSyB1LhuBEFuKPmav_jIM5glW7dfB0tGiumE';

export default function SpotDetail({ spot, addBadge }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({ base64: true });
    const valid = await checkSelfie(photo.base64);
    if (valid) {
      addBadge({ name: spot.name });
      Alert.alert('✅ Badge Earned!', `You got the badge for ${spot.name}`);
    } else {
      Alert.alert('❌ No face detected', 'Try again with a real selfie.');
    }
  };

  const checkSelfie = async (base64Image) => {
    try {
      const body = { requests: [{ image: { content: base64Image }, features: [{ type: 'FACE_DETECTION', maxResults: 1 }] }] };
      const res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_API_KEY}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const json = await res.json();
      return json.responses[0].faceAnnotations?.length > 0;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  if (hasPermission === null) return <View />;
  if (!hasPermission) return <Text>No access to camera.</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />
      <View style={styles.overlay}>
        <Text style={styles.spotTitle}>📍 {spot.name}</Text>
        <Button title="📸 Take Selfie to Earn Badge" onPress={takePicture} />
      </View>
    </View>
  );
}


