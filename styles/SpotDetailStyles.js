import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: { 
    position: 'absolute', 
    bottom: 40, 
    alignSelf: 'center', 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    padding: 14, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  spotTitle: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
});

export default styles;