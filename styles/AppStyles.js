import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' 
  },
  loginContainer: { 
    flex: 1, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  backgroundImage: { 
    position: 'absolute', 
    width: '100%', 
    height: '125%', 
    top: -100 
  },
  gradientOverlay: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    paddingBottom: 0 
  },
  content: { 
    alignItems: 'center', 
    width: '85%', 
    alignSelf: 'center', 
    marginTop: 100 
  },
  logo: { 
    width: 120, 
    height: 120, 
    marginBottom: 10 
  },
  title: { 
    fontSize: 48, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 20 
  },
  signInText: { 
    fontSize: 22, 
    color: '#fff', 
    marginBottom: 30 
  },
  input: { 
    width: '100%', 
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.15)', 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    fontSize: 18, 
    color: '#fff', 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.3)' 
  },
  loginButton: { 
    width: '100%', 
    height: 50, 
    backgroundColor: '#007AFF', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20, 
    marginBottom: 10 
  },
  signUpButton: { 
    width: '100%', 
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#007AFF' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default styles;