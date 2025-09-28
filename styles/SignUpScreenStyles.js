import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: width, 
    height: height, 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 100 
  },
  backgroundGradient: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%' 
  },
  closeButton: { 
    position: 'absolute', 
    top: Platform.OS === 'ios' ? 60 : 20, 
    left: 20, 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.3)' 
  },
  content: { 
    width: '85%', 
    padding: 20, 
    alignItems: 'flex-start' 
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 40, 
    alignSelf: 'center' 
  },
  label: { 
    fontSize: 16, 
    color: '#fff', 
    marginBottom: 8, 
    marginTop: 15 
  },
  input: { 
    width: '100%', 
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.15)', 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    fontSize: 18, 
    color: '#fff', 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.3)' 
  },
  signUpButton: { 
    width: '100%', 
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#007AFF', 
    marginTop: 40 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default styles;